# muhammademan.com — Portfolio

Personal portfolio for Muhammad Eman, Full Stack AI Engineer. Next.js 16 (App Router) + Tailwind CSS 4, deployed on Vercel.

## Run locally

```bash
npm install
cp .env.example .env.local   # add GROQ_API_KEY or GEMINI_API_KEY for the chat widget
npm run dev                  # http://localhost:3000
```

The chat widget still renders without a key — it just replies with a "not configured" message.

## Edit content

All copy lives in `lib/data.ts` (profile, expertise, projects, experience). Project images live in `public/projects/`.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import it at https://vercel.com/new (framework auto-detected as Next.js).
3. Add `GROQ_API_KEY` (or `GEMINI_API_KEY`) under Settings → Environment Variables.
4. Settings → Domains → add `muhammademan.com` (and `www.muhammademan.com`).
