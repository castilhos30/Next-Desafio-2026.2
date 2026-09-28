import { Navigation, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed9d8c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdf4e3]";

export function Localizacao() {
  return (
    <section className="relative w-full overflow-hidden rounded-[2.5rem] border border-[#f2e8dc] bg-white/65 p-6 shadow-[0_30px_70px_-35px_rgba(183,110,121,0.35)] backdrop-blur-sm sm:p-8 md:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#fdeae9]/70"
      />

      <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="flex w-full flex-col gap-5">
          <header className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-full bg-[#fdeae9] text-[#b76e79]">
              <Navigation className="size-5" strokeWidth={1.5} />
            </div>

            <div>
              <h2 className="font-belleza text-2xl text-[#5c3a3e] sm:text-3xl">
                Onde estamos
              </h2>

              <p className="font-montserrat text-sm text-[#8a5c60]">
                Venha nos visitar
              </p>
            </div>
          </header>

          <div className="h-72 w-full overflow-hidden rounded-[2rem] border border-[#f2e8dc] bg-[#f2e8dc] shadow-sm sm:h-80 lg:h-[28rem]">
            <iframe
              src="https://maps.google.com/maps?q=-21.8942458,-42.7106244&t=k&z=18&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border-0 grayscale transition-all duration-500 hover:grayscale-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Castilhos BeCare"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-[2rem] border border-[#f2e8dc] bg-[#fdeae9]/70 p-6">
            <header className="mb-3 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-white text-[#b76e79]">
                <MapPin className="size-5" strokeWidth={1.5} />
              </div>

              <h3 className="font-belleza text-xl font-medium text-[#5c3a3e]">
                Endereço
              </h3>
            </header>

            <div className="pl-[3.25rem]">
              <p className="font-montserrat text-sm leading-relaxed text-[#8a5c60] sm:text-base">
                Rua João Miguel, 30 - Jamapará
              </p>

              <p className="font-montserrat text-sm leading-relaxed text-[#8a5c60] sm:text-base">
                Sapucaia - RJ, 25887-000
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#f2e8dc] bg-[#fdf4e3] p-6">
            <header className="mb-3 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-[#fdeae9] text-[#b76e79]">
                <Clock className="size-5" strokeWidth={1.5} />
              </div>

              <h3 className="font-belleza text-xl font-medium text-[#5c3a3e]">
                Horário
              </h3>
            </header>

            <div className="pl-[3.25rem]">
              <p className="font-montserrat text-sm leading-relaxed text-[#8a5c60] sm:text-base">
                Segunda a Sexta: a combinar
              </p>

              <p className="font-montserrat text-sm leading-relaxed text-[#8a5c60] sm:text-base">
                Sábado e Domingo: a combinar
              </p>
            </div>
          </div>

          <div className="flex justify-center pt-2 lg:justify-center">
            <Button
              className={`font-montserrat rounded-full bg-[#b76e79] px-8 py-6 text-sm font-semibold tracking-wide text-white shadow-[0_12px_24px_-12px_rgba(183,110,121,0.8)] transition-all hover:-translate-y-0.5 hover:bg-[#a25c67] ${focusRing}`}
            >
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-21.8942458,-42.7106244"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MapPin className="size-4 shrink-0" />
                <span>Como chegar</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}