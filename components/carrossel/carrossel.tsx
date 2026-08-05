"use client";

import { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface CarrosselProps {
  title: string;
  bgColor: string; 
  titleColor?: string; 
  arrowColor?: string; 
  children: ReactNode[]; 
  uniqueId: string; 
}

export function Carrossel({
    //props que mudam os elementos do carrossel
  title,
  bgColor,
  titleColor = "text-[#B76E79]",
  arrowColor = "text-[#A57B76] hover:text-[#B76E79]",
  children,
  uniqueId,
}: CarrosselProps) {
  const prevClass = `swiper-btn-prev-${uniqueId}`;
  const nextClass = `swiper-btn-next-${uniqueId}`;

  return (
    <section className={`w-full ${bgColor} py-20 overflow-hidden`}>
      <h2 className={`text-4xl md:text-5xl font-bold text-center ${titleColor} mb-12 tracking-wide`}>
        {title}
      </h2>

      <div className="max-w-[1400px] mx-auto px-2 md:px-6 flex items-center justify-between gap-2 md:gap-16 w-full">
        
        <button 
          className={`${prevClass} flex flex-shrink-0 items-center justify-center ${arrowColor} hover:scale-110 transition-all duration-500 p-2 disabled:opacity-30 disabled:hover:scale-100`}
          aria-label="Anterior"
        >
          <ChevronLeft className="w-10 h-10 md:w-14 md:h-14" strokeWidth={1} />
        </button>

        <div className="flex-1 max-w-[1056px]">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: `.${prevClass}`,
              nextEl: `.${nextClass}`,
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
            className="w-full px-2"
          >
            {children.map((child, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                {child}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button 
          className={`${nextClass} flex flex-shrink-0 items-center justify-center ${arrowColor} hover:scale-110 transition-all duration-500 p-2 disabled:opacity-30 disabled:hover:scale-100`}
          aria-label="Próximo"
        >
          <ChevronRight className="w-10 h-10 md:w-14 md:h-14" strokeWidth={1} />
        </button>
        
      </div>
    </section>
  );
}