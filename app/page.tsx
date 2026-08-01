import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

import { hero } from "./data/site";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero hero={hero} />

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Portfolio />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Footer />
    </main>
  );
}