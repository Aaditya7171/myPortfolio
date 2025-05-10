import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Certificates from "../components/certificates";
import Resume from "../components/resume";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Resume />
      <Contact />
    </main>
  );
}
