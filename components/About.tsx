import { aboutParagraphs, experience } from "@/lib/data";
import { Check } from "./Icons";

export default function About() {
  return (
    <section id="about" className="py-24 bg-ink-2/50 border-y border-line/60">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <p className="text-sm font-bold tracking-widest text-sea-2 uppercase mb-3">About</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Research driven. <span className="gradient-text">Production minded.</span>
          </h2>
          <div className="space-y-6 text-lg text-mist-2 leading-relaxed">
            {aboutParagraphs.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-sea/10 to-ember/10 border border-sea/20">
            <p className="text-mist text-lg leading-relaxed font-bold italic">
              &ldquo;If it isn&rsquo;t tested, observable, and deployed, it isn&rsquo;t done.&rdquo;
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold tracking-widest text-mist-3 uppercase mb-8">Experience</p>
          <div className="space-y-12">
            {experience.map((e) => (
              <div key={e.company} className="relative pl-8 border-l border-line group">
                <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-ink-3 border-2 border-sea group-hover:bg-sea transition-colors" />
                <div className="mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-xl font-bold text-white">{e.company}</h3>
                  <span className="font-mono text-xs text-mist-3">{e.period}</span>
                </div>
                <p className="text-sea-2 font-semibold mb-4 text-sm">{e.role}</p>
                <ul className="space-y-3">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-mist-2 text-sm leading-relaxed">
                      <Check className="w-4 h-4 text-sea-2 mt-1 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
