type P = { className?: string };

const base = (className?: string) => ({
  className: className ?? "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
});

export const ArrowRight = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Check = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M5 13l4 4L19 7" />
  </svg>
);

export const Close = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const Send = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

export const Chat = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

export const Mail = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M3 8l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
  </svg>
);

export const Brain = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M9.5 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001 5.5A3 3 0 009.5 21a2.5 2.5 0 002.5-2.5V5.5A2.5 2.5 0 009.5 3zM14.5 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1 5.5A3 3 0 0114.5 21a2.5 2.5 0 01-2.5-2.5V5.5A2.5 2.5 0 0114.5 3z" />
  </svg>
);

export const Eye = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const Server = ({ className }: P) => (
  <svg {...base(className)}>
    <rect x="3" y="4" width="18" height="6" rx="2" />
    <rect x="3" y="14" width="18" height="6" rx="2" />
    <path d="M7 7h.01M7 17h.01" />
  </svg>
);

export const Cloud = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M7 18a4 4 0 01-.6-7.95A6 6 0 0118.5 9 4.5 4.5 0 0118 18H7z" />
  </svg>
);

export const Github = ({ className }: P) => (
  <svg className={className ?? "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

export const Linkedin = ({ className }: P) => (
  <svg className={className ?? "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const Phone = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </svg>
);

export const iconMap: Record<string, (p: P) => React.JSX.Element> = {
  brain: Brain,
  eye: Eye,
  server: Server,
  cloud: Cloud,
};
