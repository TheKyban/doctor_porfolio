import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import FAQ from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import { Schedule } from "@/components/sections/schedule";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Schedule />
      <About />
      <FAQ />
      <Contact />
    </div>
  );
}
