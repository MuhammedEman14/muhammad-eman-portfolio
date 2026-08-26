import Image from "next/image";
import { projects } from "@/lib/data";
import { Phone } from "./Icons";

function Block({ label, color, text }: { label: string; color: string; text: string }) {
  return (
    <div>
      <h4 className={`text-xs font-black tracking-widest uppercase mb-2 flex items-center gap-2 ${color}`}>
        <span className="w-4 h-px bg-current opacity-60" />
        {label}
      </h4>
      <p className="text-mist leading-relaxed">{text}</p>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-4">
          <div>
            <p className="text-sm font-bold tracking-widest text-sea-2 uppercase mb-3">Projects</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Production AI Case Studies</h2>
          </div>
          <p className="text-mist-2 max-w-sm text-lg leading-relaxed">
            Real deployments of{" "}
            <span className="text-white font-semibold">{projects.length} AI systems</span> — each with the
            problem, the build, and what it changed.
          </p>
        </div>

        <div className="space-y-28">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              id={p.slug}
              className={`flex flex-col gap-10 lg:gap-16 items-center ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Visual */}
              <div className="w-full lg:w-1/2 group relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-sea/15 to-ember/15 opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-3xl" />
                <div className="relative rounded-3xl border border-line bg-ink-2 overflow-hidden shadow-2xl">
                  {p.image ? (
                    <div className="relative bg-ink-3 p-3">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        width={p.width ?? 1024}
                        height={p.height ?? 768}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="w-full h-auto max-h-[640px] object-contain rounded-2xl"
                      />
                      {p.fadeBottom && (
                        <div className="pointer-events-none absolute inset-x-3 bottom-3 h-28 rounded-b-2xl bg-gradient-to-t from-ink-3 via-ink-3/70 to-transparent" />
                      )}
                      {p.secondaryImage && (
                        <div className="absolute bottom-4 right-4 w-28 md:w-36 aspect-square rounded-xl overflow-hidden border-2 border-line-2 shadow-xl">
                          <Image
                            src={p.secondaryImage}
                            alt={`${p.title} sample output`}
                            fill
                            sizes="160px"
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] flex flex-col items-center justify-center p-8 bg-gradient-to-br from-ink-2 via-ink-3 to-ink">
                      <div className="absolute inset-0 grid-lines" />
                      <div className="relative w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center text-ink shadow-2xl shadow-sea/30 mb-6">
                        <Phone className="w-10 h-10" />
                      </div>
                      <div className="relative font-mono text-xs text-mist-2 text-center space-y-1">
                        <p>Telnyx SIP → FreeSWITCH → Go router</p>
                        <p>→ FastAPI → Kafka → TimescaleDB</p>
                        <p className="text-sea-2">→ live WebSocket dashboard</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Copy */}
              <div className="w-full lg:w-1/2 space-y-7">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-sea-2 font-bold">{p.period}</span>
                    <span className="w-1 h-1 rounded-full bg-mist-3" />
                    <span className="font-mono text-xs text-mist-3">{p.category}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{p.title}</h3>
                </div>

                <Block label="The Challenge" color="text-ember-2" text={p.challenge} />
                <Block label="Technical Solution" color="text-sea-2" text={p.solution} />
                <Block label="Strategic Outcome" color="text-mist-2" text={p.outcome} />

                <div className="pt-2 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-ink-2 border border-line text-xs font-bold text-mist-2 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
