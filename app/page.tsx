import About from "@/components/sections/about";
import { AsSeenOn } from "@/components/sections/asSeenOn";
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
      <AsSeenOn />
      <FAQ />
      <Contact />
    </div>
  );
}
