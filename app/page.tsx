import About from "@/components/sections/about";
import { AsSeenOn } from "@/components/sections/asSeenOn";
import Contact from "@/components/sections/contact";
import { Count } from "@/components/sections/count";
import FAQ from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Schedule } from "@/components/sections/schedule";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Count />
      <Services />
      <Schedule />
      <About />
      <AsSeenOn />
      <FAQ />
      <Contact />
    </div>
  );
}
