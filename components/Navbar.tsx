"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { id: "home", label: "Home" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const hit = links.find(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 120 && r.bottom >= 120;
      });
      if (hit) setActive(hit.id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/75 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-xl font-extrabold tracking-tighter text-white">
          <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-ink text-xs font-black">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>
        <nav className="flex items-center gap-0.5 sm:gap-2">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                active === l.id ? "text-sea-2 bg-sea/10" : "text-mist-2 hover:text-white hover:bg-white/5"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
