import { expertise } from "@/lib/data";
import { iconMap } from "./Icons";

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-ink-2/50 border-y border-line/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-sm font-bold tracking-widest text-sea-2 uppercase mb-3">Expertise</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Tools I ship with</h2>
          </div>
          <p className="text-mist-2 max-w-sm text-lg leading-relaxed">
            From model training to VoIP routing — whatever the product needs to get to production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <div
                key={cat.title}
                className="p-8 rounded-2xl bg-ink border border-line hover:border-sea/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-sea/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative">
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-ink-3 text-sea-2 group-hover:scale-110 group-hover:text-ember-2 transition-all border border-line shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-5">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-lg bg-ink-2 border border-line text-xs font-bold text-mist-2 hover:text-sea-2 hover:border-sea/30 transition-all cursor-default"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
