import { HeroSection2 } from "@/components/hero-section/hero-section";
import { CardMVV } from "@/components/card-m-v-v/card-m-v-v"; 
import { Gem, Eye } from "lucide-react";

export default function Sobre() {
  const textoPadrao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,";

  return (
    <article className="flex flex-col">
      <HeroSection2 />

      <section className="w-full bg-gradient-to-l to-[#ED9D8C] via-[#FDEAE9] from-[#FFFFFF] py-20 px-4">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
          
          <CardMVV 
            title="Missão" 
            description={textoPadrao} 
            icon={<Gem className="w-12 h-12 text-white" strokeWidth={1.5} />} 
          />

          <CardMVV 
            title="Visão" 
            description={textoPadrao} 
            icon={<Eye className="w-12 h-12 text-white" strokeWidth={1.5} />} 
          />

          <CardMVV 
            title="Valores" 
            description={textoPadrao} 
            icon={<Gem className="w-12 h-12 text-white" strokeWidth={1.5} />} 
          />

        </div>
      </section>
    </article>
  );
}