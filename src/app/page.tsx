import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="space-y-32">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Chatbot /> {/* 🔥 INI */}
    </main>
  );
}
