"use client";

import { Card } from "@/components/card/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export function Carrossel() {
  return (
    <section className="w-full bg-[#FFF5F3] py-20 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#B76E79] mb-12 tracking-wide">
        Nossos Serviços
      </h2>

      <div className="max-w-[1400px] mx-auto px-2 md:px-6 flex items-center justify-between gap-2 md:gap-16 w-full">
        
        <button 
          className="swiper-btn-prev flex flex-shrink-0 items-center justify-center text-[#A57B76] hover:text-[#B76E79] hover:scale-110 transition-all duration-500 p-2 disabled:opacity-30 disabled:hover:scale-100"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-10 h-10 md:w-14 md:h-14" strokeWidth={1} />
        </button>

        <div className="flex-1 max-w-[1056px]">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-btn-prev",
              nextEl: ".swiper-btn-next",
            }}
            spaceBetween={24}
            slidesPerView={1} 
            breakpoints={{
              768: {
                slidesPerView: 3, 
                spaceBetween: 48, 
              },
            }}
            style={{ paddingBottom: '16px', paddingTop: '8px' }}
            className="w-full px-2 "
          >
            <SwiperSlide className="flex justify-center"><Card title="Produto 1" /></SwiperSlide>
            <SwiperSlide className="flex justify-center"><Card title="Produto 2" /></SwiperSlide>
            <SwiperSlide className="flex justify-center"><Card title="Produto 3" /></SwiperSlide>
            <SwiperSlide className="flex justify-center"><Card title="Produto 4" /></SwiperSlide>
          </Swiper>
        </div>

        <button 
          className="swiper-btn-next flex flex-shrink-0 items-center justify-center text-[#A57B76] hover:text-[#B76E79] hover:scale-110 transition-all duration-500 p-2 disabled:opacity-30 disabled:hover:scale-100"
          aria-label="Próximo"
        >
          <ChevronRight className="w-10 h-10 md:w-14 md:h-14" strokeWidth={1} />
        </button>
        
      </div>
    </section>
  );
}