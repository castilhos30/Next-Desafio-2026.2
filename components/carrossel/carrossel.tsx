"use client";

import { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarrosselProps {
  title: string;
  bgColor: string; 
  titleColor?: string; 
  arrowColor?: string; 
  children: ReactNode[]; 
  uniqueId: string; 
}

export function Carrossel({
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
    <section className={`w-full ${bgColor} py-18 overflow-hidden`}>
      <h2 className={`font-cairo font-bold text-4xl md:text-5xl text-center ${titleColor} mb-12 tracking-wide`}>
        {title}
      </h2>

      <div className="w-36 md:w-64 h-[2px] bg-current mx-auto mb-12 bg-white/60" />

      <div className="max-w-[1400px] mx-auto px-2 md:px-6 flex items-center justify-between gap-2 md:gap-16 w-full">
        
        <button 
          className={`${prevClass} hidden md:flex flex-shrink-0 items-center justify-center ${arrowColor} hover:scale-110 transition-all duration-500 p-2 disabled:opacity-30 disabled:hover:scale-100`}
          aria-label="Anterior"
        >
          <ChevronLeft className="w-10 h-10 md:w-14 md:h-14" strokeWidth={1} />
        </button>

        <div className="flex-1 max-w-[1056px] overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            centeredSlides={true}
            navigation={{
              prevEl: `.${prevClass}`,
              nextEl: `.${nextClass}`,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            slidesPerView={1} 
            breakpoints={{
              768: {
                slidesPerView: 3, 
                spaceBetween: 48, 
                centeredSlides: false, 
              },
            }}
            style={{ 
              paddingBottom: '48px', 
              paddingTop: '8px',
              '--swiper-pagination-bullet-inactive-opacity': '0.8',
              '--swiper-pagination-color': '#F5F5F5',
              '--swiper-pagination-bullet-inactive-color': '#F5F5F5', 
              '--swiper-pagination-bullet-size': '16px',
              '--swiper-pagination-bullet-horizontal-gap': '6px' 
            } as React.CSSProperties} 
            className="w-full px-2"
          >
            {children.map((child, index) => (
              <SwiperSlide key={index} className="!flex !justify-center py-4">
                {child}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button 
          className={`${nextClass} hidden md:flex flex-shrink-0 items-center justify-center ${arrowColor} hover:scale-110 transition-all duration-500 p-2 disabled:opacity-30 disabled:hover:scale-100`}
          aria-label="Próximo"
        >
          <ChevronRight className="w-10 h-10 md:w-14 md:h-14" strokeWidth={1} />
        </button>
        
      </div>
    </section>
  );
}