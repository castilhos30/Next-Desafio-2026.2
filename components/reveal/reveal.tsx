"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  from?: "up" | "left" | "right" | "zoom" | "none";
  delay?: number;
  className?: string;
};

type Estado = "pronto" | "oculto" | "visivel";

const posicaoInicial: Record<NonNullable<Props["from"]>, string> = {
  up: "translate-y-12", 
  left: "-translate-x-8",
  right: "translate-x-8",
  zoom: "scale-95",
  none: "",
};

const MARGEM_INFERIOR = 0.12;

export function Reveal({
  children,
  from = "up",
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [estado, setEstado] = useState<Estado>("pronto");

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;


    // Esconde o elemento inicialmente
    setEstado("oculto");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setEstado("visivel");
          observer.disconnect();
        }
      },
      { rootMargin: `0px 0px -${MARGEM_INFERIOR * 100}% 0px` },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [
    estado === "oculto" ? `opacity-0 ${posicaoInicial[from]}` : "",
    estado === "visivel"
      ? "transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={classes}
      style={
        estado === "visivel" && delay
          ? { transitionDelay: `${delay}ms` }
          : undefined
      }
    >
      {children}
    </div>
  );
}