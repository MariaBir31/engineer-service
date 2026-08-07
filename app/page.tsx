import Hero from "./components/hero/Hero";
import WhyUs from "./components/why-us/WhyUs";
import Contact from "./components/contact/Contact";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Reveal from "./components/Reveal";
import ServiceGrid from "./components/services/ServiceGrid";
import Process from "./components/process/Process";

import { site } from "./data/site";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero hero={site.hero} />
      
      <Reveal>
  <WhyUs />
</Reveal>

      <Reveal>
  <ServiceGrid />
      </Reveal>


      <Reveal>
  <Process />
</Reveal>

      <Reveal>
        <Contact  />
      </Reveal>

      <Footer />
    </main>
  );
}