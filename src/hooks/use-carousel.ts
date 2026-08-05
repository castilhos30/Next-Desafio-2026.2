    import { useRef } from "react";

export function useCarousel(duration: number = 800) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const isMobile = window.innerWidth < 768; 
    const scrollAmount = isMobile ? carousel.clientWidth +24 : 368; //salto do celular

    const startPosition = carousel.scrollLeft;
    const distance = direction === "left" ? -scrollAmount : scrollAmount;
    
    let startTime: number | null = null;
    carousel.style.scrollSnapType = 'none';

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);

      carousel.scrollLeft = startPosition + distance * easeProgress;

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        carousel.style.scrollSnapType = 'x mandatory';
      }
    };

    requestAnimationFrame(animation);
  };

  return { carouselRef, scroll };
}