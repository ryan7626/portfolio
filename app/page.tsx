import { Navigation } from "./components/navigation/Navigation";
import { Hero } from "./components/hero/Hero";
import { Education } from "./components/sections/Education";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Resume } from "./components/sections/Resume";
import { Contact } from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </>
  );
}
