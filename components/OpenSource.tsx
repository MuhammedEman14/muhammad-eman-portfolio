import { profile, repos } from "@/lib/data";
import { ArrowRight, Github } from "./Icons";

export default function OpenSource() {
  return (
    <section id="github" className="py-24 bg-ink-2/50 border-y border-line/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-sm font-bold tracking-widest text-sea-2 uppercase mb-3">Open Source</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">On GitHub</h2>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-mist-2 hover:text-white font-semibold transition-colors"
          >
            <Github className="w-5 h-5" />
            github.com/MuhammedEman14
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col p-7 rounded-2xl bg-ink border border-line hover:border-sea/50 transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-sea/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative flex flex-col h-full">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-mono text-xs text-sea-2 font-bold">{r.year}</span>
                  <span className="font-mono text-[11px] text-mist-3 truncate">{r.language}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 break-words leading-snug group-hover:text-sea-2 transition-colors">
                  {r.name.replace(/-/g, " ")}
                </h3>
                <p className="text-mist-2 text-sm leading-relaxed mb-6 flex-1">{r.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-ink-2 border border-line text-[11px] font-bold text-mist-2 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-mist-2 group-hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                  View repository
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
