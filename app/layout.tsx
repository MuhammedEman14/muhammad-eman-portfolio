import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

const favicon =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='#14b8a6'/><stop offset='100%' stop-color='#f59e0b'/></linearGradient></defs><rect width='32' height='32' rx='8' fill='url(#g)'/><text x='50%' y='56%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Inter, sans-serif' font-weight='800' font-size='13'>ME</text></svg>`,
  );

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammademan.com"),
  title: `${profile.name} | ${profile.title}`,
  description: profile.intro,
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.intro,
    url: "https://muhammademan.com",
    siteName: profile.name,
    type: "website",
  },
  icons: { icon: favicon },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">{children}</body>
    </html>
  );
}
