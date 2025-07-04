import About from "@/components/sections/about";
import { AsSeenOn } from "@/components/sections/asSeenOn";
import Contact from "@/components/sections/contact";
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
      <Services />
      <Schedule />
      <About />
      <AsSeenOn />
      <FAQ />
      <Contact />
    </div>
  );
}
