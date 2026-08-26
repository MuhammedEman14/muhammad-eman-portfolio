"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { Github, Linkedin, Mail } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — mailto link still works */
    }
  };

  return (
    <footer id="contact" className="pt-32 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-sea/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-24">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Let&rsquo;s build something <span className="gradient-text italic">intelligent.</span>
            </h2>
            <p className="text-mist-2 text-xl mb-10 leading-relaxed font-medium">{profile.availability}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="group px-8 py-4 rounded-2xl bg-sea hover:bg-sea-2 text-ink font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-sea/20 active:scale-95"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <button
                onClick={copy}
                title="Click to copy email"
                className="px-6 py-4 rounded-2xl bg-ink-2 border border-line hover:border-line-2 text-mist font-mono text-sm transition-all"
              >
                {copied ? "Copied ✓" : profile.email}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:min-w-[260px]">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-ink-2 border border-line hover:border-line-2 text-mist hover:text-white transition-all flex items-center gap-3"
            >
              <span className="p-2 rounded-lg bg-ink-3 text-mist-2"><Github /></span>
              <span className="font-bold">GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-ink-2 border border-line hover:border-line-2 text-mist hover:text-sea-2 transition-all flex items-center gap-3"
            >
              <span className="p-2 rounded-lg bg-ink-3 text-mist-2"><Linkedin /></span>
              <span className="font-bold">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-line flex flex-col md:flex-row justify-between items-center gap-6 text-mist-3 text-xs font-medium">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="font-mono">muhammademan.com · Built with Next.js + LLMs</p>
        </div>
      </div>
    </footer>
  );
}
