import { Navigation, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Localizacao() {
  return (
    <section className="w-full p-10 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-white/20 backdrop-blur-sm border border-white/20 rounded-[2.5rem] shadow-sm">

      <div className="flex flex-col gap-6 w-full h-full">
        <header className="flex items-center gap-3 ml-2">
          <Navigation className="w-7 h-7 text-[#a66a6e]" strokeWidth={1.5} />
          <h2 className="text-2xl text-zinc-800 font-medium">Local</h2>
        </header>

        <div className="w-full h-80 lg:h-[28rem] rounded-[2rem] overflow-hidden shadow-sm border border-white/20 bg-black/5">
          <iframe
            src="https://maps.google.com/maps?q=-21.8942458,-42.7106244&t=k&z=18&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col gap-8 justify-center mt-8 lg:mt-0">

        <div className="w-full p-8 bg-white/30 backdrop-blur-sm border border-white/20 rounded-[2rem] shadow-sm">
          <header className="flex items-center gap-3 mb-3">
            <MapPin className="w-6 h-6 text-[#a66a6e]" strokeWidth={1.5} />
            <h3 className="text-lg text-zinc-800 font-medium">Endereço</h3>
          </header>
          <div className="pl-9">
            <p className="text-base text-zinc-700 font-medium leading-relaxed">Seminha Cabelereira</p>
            <p className="text-base text-zinc-700 font-medium leading-relaxed">Jamapará</p>
            <p className="text-base text-zinc-700 font-medium leading-relaxed">Sapucaia</p>
          </div>
        </div>

        <div className="w-full p-8 bg-white/30 backdrop-blur-sm border border-white/20 rounded-[2rem] shadow-sm">
          <header className="flex items-center gap-3 mb-3">
            <Clock className="w-6 h-6 text-[#a66a6e]" strokeWidth={1.5} />
            <h3 className="text-lg text-zinc-800 font-medium">Horário</h3>
          </header>
          <div className="pl-9">
            <p className="text-base text-zinc-700 font-medium">Segunda a Sexta: a combinar</p>
            <p className="text-base text-zinc-700 font-medium">Sábado e Domingo: a combinar</p>
          </div>
        </div>

        <div className="flex justify-center lg:pl-10 mt-2">
          <Button className="px-12 py-7 text-lg bg-[#ba7d82] hover:bg-[#a66a6e] text-white rounded-[2rem] font-medium tracking-wide transition-colors">
            <a
              href="https://maps.app.goo.gl/3A7t1L4gRzUQq4s17"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MapPin className="w-6 h-6" />
              Como chegar
            </a>
          </Button>
        </div>

      </div>

    </section>
  );
}