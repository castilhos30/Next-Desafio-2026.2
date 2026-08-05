"use client";

import { HeroSection } from "@/components/hero-section/hero-section";
import { Card } from "@/components/card/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carrossel } from "@/components/carrossel/carrossel";

export default function Home() {

  return (
    <article className="flex flex-col">
      <HeroSection />

      <Carrossel />

    </article>
  );
}