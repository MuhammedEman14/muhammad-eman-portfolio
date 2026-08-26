import { profile } from "@/lib/data";
import { ArrowRight } from "./Icons";

const strip = ["FastAPI", "Go", "PyTorch", "Kafka", "FreeSWITCH", "Vue", "Next.js", "AWS", "Azure"];

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 px-4 md:pt-48 md:pb-40 overflow-hidden">
      <div className="absolute inset-0 grid-lines pointer-events-none" />
      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="animate-rise inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sea/5 border border-sea/20 text-sea-2 text-xs font-bold mb-10 tracking-widest backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sea-2 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sea" />
          </span>
          OPEN TO NEW CHALLENGES
        </span>

        <h1 className="animate-rise delay-1 text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter max-w-5xl leading-[1.05]">
          {profile.tagline} <span className="gradient-text italic">{profile.taglineAccent}</span>{" "}
          {profile.taglineEnd}
        </h1>

        <p className="animate-rise delay-2 max-w-2xl text-lg md:text-2xl text-mist-2 mb-12 leading-relaxed font-medium">
          {profile.intro}
        </p>

        <div className="animate-rise delay-3 flex flex-col sm:flex-row gap-5">
          <a
            href="#projects"
            className="px-10 py-5 rounded-2xl bg-sea hover:bg-sea-2 text-ink font-bold transition-all transform hover:scale-105 shadow-xl shadow-sea/20 flex items-center justify-center gap-2 group"
          >
            Explore Case Studies
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-10 py-5 rounded-2xl bg-ink-3/60 hover:bg-ink-3 text-white font-bold transition-all border border-line-2 backdrop-blur-md transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-mist-3 font-mono text-sm tracking-widest uppercase">
          {strip.map((s) => (
            <span key={s} className="hover:text-sea-2 transition-colors">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
