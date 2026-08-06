import Image from "next/image";
import { Button } from "@base-ui/react";

export const HeroSection = () => {
  return (
    <section className="w-full bg-[url('/hero-section.png')] bg-cover bg-center bg-no-repeat px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-12 h-[calc(100vh-112px)] md:h-[calc(90vh-112px)] pt-24 md:pt-0">
      
      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 md:px-20 space-y-6">
        <div className="space-y-4 text-[#B76E79]">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Lorem Ipsum
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-[#B76E79]/80 font-medium">
            Outra Lorem Ipsum<br />
            Outra Lorem Ipsum Outra<br />
            Lorem Ipsum
          </p>
        </div>

        <div>
          <Button className="bg-[#E19888] hover:bg-[#B76E79] text-white px-8 py-3 rounded-full transition-colors font-medium text-lg shadow-sm">
            Fale Conosco
          </Button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end md:px-24">
        <Image
          src="/Logo1.svg"
          alt="Logo Castilhos Belas & Cia"
          width={500}
          height={250}
          className="w-full max-w-[500px] h-auto object-contain"
          priority
        />
      </div>
      
    </section>
  );
};