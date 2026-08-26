import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <OpenSource />
        <About />
      </main>
      <Contact />
      <ChatWidget />
    </div>
  );
}
