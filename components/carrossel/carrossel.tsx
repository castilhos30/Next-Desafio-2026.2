"use client";

import { Card } from "@/components/card/card";
import { useCarousel } from "@/src/hooks/use-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carrossel() {
      const { carouselRef, scroll } = useCarousel(  ); 
    
    return (
        <section className="w-full bg-[#FFF5F3] py-20 overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#B76E79] mb-12 tracking-wide">
          Nossos Serviços
        </h2>

        <div className="max-w-[1400px] mx-auto px-2 md:px-6 flex items-center justify-between gap-2 md:gap-16 w-full">
          
          <button
            onClick={() => scroll("left")}
            className="flex flex-shrink-0 items-center justify-center text-[#A57B76] hover:text-[#B76E79] hover:scale-110 transition-all duration-500 p-2"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-10 h-10 md:w-14 md:h-14" strokeWidth={1} />
          </button>

          <div
            ref={carouselRef}
            className="flex-1 max-w-[1056px] flex gap-6 md:gap-12 overflow-x-auto snap-x snap-mandatory py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <div className="shrink-0 snap-center w-full md:w-[320px] flex justify-center"><Card title="Produto 1" /></div>
            <div className="shrink-0 snap-center w-full md:w-[320px] flex justify-center"><Card title="Produto 2" /></div>
            <div className="shrink-0 snap-center w-full md:w-[320px] flex justify-center"><Card title="Produto 3" /></div>
            <div className="shrink-0 snap-center w-full md:w-[320px] flex justify-center"><Card title="Produto 4" /></div>
          </div>

          <button
            onClick={() => scroll("right")}
            className="flex flex-shrink-0 items-center justify-center text-[#A57B76] hover:text-[#B76E79] hover:scale-110 transition-all duration-500 p-2"
            aria-label="Próximo"
          >
            <ChevronRight className="w-10 h-10 md:w-14 md:h-14" strokeWidth={1} />
          </button>
          
        </div>
      </section>
    );
}
