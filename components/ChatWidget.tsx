"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";
import { Chat, Close, Send } from "./Icons";

type Msg = { role: "user" | "assistant"; content: string };

const BULLET = /^\s*(?:[-*•]|\d+[.)])\s+/;

function Rich({ content }: { content: string }) {
  const paras = content.replace(/\r/g, "").split(/\n{2,}/);
  const inline = (s: string) => {
    // Tolerate an unclosed ** (truncated reply) by rendering it as plain text.
    const parts = s.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith("**") && part.endsWith("**") && part.length > 4 ? (
        <strong key={i} className="text-white font-bold">
          {part.slice(2, -2)}
        </strong>
      ) : (
        part.replace(/\*\*/g, "")
      ),
    );
  };
  return (
    <div className="space-y-3">
      {paras.map((p, i) => {
        const lines = p.split("\n").filter((l) => l.trim().length);
        if (lines.length && lines.every((l) => BULLET.test(l))) {
          return (
            <ul key={i} className="space-y-1.5 ml-1">
              {lines.map((l, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-sea-2 mt-0.5 shrink-0">•</span>
                  <span>{inline(l.replace(BULLET, ""))}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="whitespace-pre-wrap">
            {inline(p)}
          </p>
        );
      })}
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "assistant",
      content: `Hi! I'm ${profile.name.split(" ")[1]}'s AI representative. Ask me about any of his AI case studies, his stack, or how to get in touch.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  const textarea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [msgs, busy]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const q = input.trim();
    if (!q || busy) return;
    setInput("");
    if (textarea.current) textarea.current.style.height = "auto";
    const next = [...msgs, { role: "user" as const, content: q }];
    setMsgs(next);
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(1) }),
      });
      const data = (await res.json()) as { reply?: string; error?: string };
      setMsgs((m) => [
        ...m,
        { role: "assistant", content: data.reply ?? data.error ?? "Something went wrong — please try again." },
      ]);
    } catch {
      setMsgs((m) => [
        ...m,
        {
          role: "assistant",
          content: `My connection is unstable right now. You can reach ${profile.name} directly at ${profile.email}.`,
        },
      ]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {open ? (
        <div className="w-[350px] sm:w-[460px] h-[620px] max-h-[85vh] bg-ink-2 border border-line-2 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
          <div className="p-5 bg-ink-3/80 backdrop-blur-md border-b border-line flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-xs font-black text-ink shadow-lg">
                  {profile.initials}
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-sea border-2 border-ink-3 rounded-full" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white leading-none">Eman&rsquo;s Representative</h3>
                <span className="text-[10px] text-sea-2 font-bold uppercase tracking-[0.2em] mt-1.5 block">
                  Status: Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="p-2 rounded-lg hover:bg-ink-3 text-mist-2 hover:text-white transition-colors"
            >
              <Close />
            </button>
          </div>

          <div ref={scroller} className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 space-y-6 bg-ink/60">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[92%] p-4 rounded-2xl text-sm leading-relaxed break-words ${
                    m.role === "user"
                      ? "bg-sea text-ink font-medium rounded-br-none"
                      : "bg-ink-3/80 text-mist border border-line rounded-bl-none"
                  }`}
                >
                  {m.role === "user" ? <span className="whitespace-pre-wrap">{m.content}</span> : <Rich content={m.content} />}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex justify-start">
                <div className="bg-ink-3/80 p-4 rounded-2xl rounded-bl-none border border-line flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 bg-sea-2 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-sea-2 rounded-full animate-bounce [animation-delay:-.3s]" />
                  <span className="w-1.5 h-1.5 bg-sea-2 rounded-full animate-bounce [animation-delay:-.5s]" />
                </div>
              </div>
            )}
          </div>

          <form onSubmit={submit} className="p-4 bg-ink-2 border-t border-line flex items-end gap-3 shrink-0">
            <textarea
              ref={textarea}
              value={input}
              rows={1}
              onChange={(e) => {
                setInput(e.target.value);
                e.target.style.height = "auto";
                e.target.style.height = `${Math.min(e.target.scrollHeight, 160)}px`;
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  e.currentTarget.form?.requestSubmit();
                }
              }}
              placeholder="Ask me about Eman's AI work..."
              className="flex-1 resize-none max-h-40 overflow-y-auto bg-ink-3/60 border border-line rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sea transition-all placeholder:text-mist-3 font-medium leading-relaxed"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send"
              className="p-3 rounded-xl bg-sea text-ink disabled:opacity-50 hover:bg-sea-2 transition-all shadow-lg active:scale-95"
            >
              <Send />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          className="w-16 h-16 rounded-full gradient-bg shadow-2xl shadow-sea/40 flex items-center justify-center text-ink hover:scale-110 transition-transform animate-float border border-white/10"
        >
          <Chat className="w-8 h-8" />
        </button>
      )}
    </div>
  );
}
