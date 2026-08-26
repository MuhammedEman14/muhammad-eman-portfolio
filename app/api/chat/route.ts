import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { experience, expertise, profile, projects } from "@/lib/data";

export const runtime = "nodejs";

const MODEL = process.env.GEMINI_MODEL ?? "gemini-3.6-flash";

const SYSTEM = `You are the AI representative on ${profile.name}'s portfolio website (muhammademan.com).
Answer visitors' questions about ${profile.name} — a ${profile.title} — warmly, concisely (under 150 words unless asked for detail), and only from the facts below. If you don't know something, say so and point them to ${profile.email}. Use **bold** for project names and short bullet lists when listing items. Never invent projects, employers, or metrics.

## Profile
${profile.intro}
Email: ${profile.email} | GitHub: ${profile.github} | LinkedIn: ${profile.linkedin}
${profile.availability}

## Expertise
${expertise.map((e) => `- ${e.title}: ${e.skills.join(", ")}`).join("\n")}

## Experience
${experience
  .map((e) => `### ${e.company} — ${e.role} (${e.period})\n${e.bullets.map((b) => `- ${b}`).join("\n")}`)
  .join("\n\n")}

## Projects (${projects.length})
${projects
  .map(
    (p) =>
      `### ${p.title} (${p.period}) — ${p.category}\nChallenge: ${p.challenge}\nSolution: ${p.solution}\nOutcome: ${p.outcome}\nTech: ${p.tech.join(", ")}`,
  )
  .join("\n\n")}`;

type Incoming = { role: "user" | "assistant"; content: string };

type Turn = { role: "user" | "assistant"; content: string };

type OpenAICompat = { baseUrl: string; apiKey: string; model: string };

/** Resolve an OpenAI-compatible provider from env. Generic LLM_* wins, then the Groq preset. */
function openAICompatFromEnv(): OpenAICompat | null {
  if (process.env.LLM_API_KEY) {
    return {
      baseUrl: (process.env.LLM_BASE_URL ?? "https://api.openai.com/v1").replace(/\/$/, ""),
      apiKey: process.env.LLM_API_KEY,
      model: process.env.LLM_MODEL ?? "gpt-4o-mini",
    };
  }
  if (process.env.GROQ_API_KEY) {
    return {
      baseUrl: "https://api.groq.com/openai/v1",
      apiKey: process.env.GROQ_API_KEY,
      model: process.env.GROQ_MODEL ?? "llama-3.3-70b-versatile",
    };
  }
  return null;
}

async function askOpenAICompat(p: OpenAICompat, history: Turn[]): Promise<string> {
  const res = await fetch(`${p.baseUrl}/chat/completions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${p.apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: p.model,
      temperature: 0.7,
      max_tokens: 1024,
      messages: [{ role: "system", content: SYSTEM }, ...history],
    }),
  });
  if (!res.ok) throw new Error(`${p.baseUrl} ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
  return data.choices?.[0]?.message?.content ?? "";
}

async function askGemini(apiKey: string, history: Turn[]): Promise<string> {
  // Set GEMINI_USE_VERTEX=1 to call the Vertex AI express endpoint instead of the Gemini Developer API.
  const useVertex = process.env.GEMINI_USE_VERTEX === "1";
  const ai = new GoogleGenAI(useVertex ? { vertexai: true, apiKey } : { apiKey });
  const res = await ai.models.generateContent({
    model: MODEL,
    contents: history.map((m) => ({
      role: m.role === "user" ? ("user" as const) : ("model" as const),
      parts: [{ text: m.content }],
    })),
    // Gemini 2.5+/3.x "thinking" tokens count toward maxOutputTokens — keep it generous so replies aren't cut off.
    config: { systemInstruction: SYSTEM, temperature: 0.7, maxOutputTokens: 8192 },
  });
  return res.text ?? "";
}

export async function POST(req: Request) {
  const compat = openAICompatFromEnv();
  const geminiKey = process.env.GEMINI_API_KEY;
  if (!compat && !geminiKey) {
    return NextResponse.json({
      reply: `The assistant isn't configured yet. Please email ${profile.email} directly!`,
    });
  }

  let body: { messages?: Incoming[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const history: Turn[] = (body.messages ?? [])
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-20)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));

  if (!history.length || history[history.length - 1].role !== "user") {
    return NextResponse.json({ error: "Last message must be from the user" }, { status: 400 });
  }

  try {
    const reply = (compat ? await askOpenAICompat(compat, history) : await askGemini(geminiKey!, history)).trim();
    return NextResponse.json({ reply: reply || "Could you rephrase that?" });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Chat provider error:", msg);
    if (/429|quota|RESOURCE_EXHAUSTED|rate/i.test(msg)) {
      return NextResponse.json({ reply: "I'm getting a lot of questions right now — please try again in a minute." });
    }
    return NextResponse.json({
      reply: `Something went wrong on my end. You can reach ${profile.name} at ${profile.email}.`,
    });
  }
}
