
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed9d8c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdf4e3]";

export const HeroSection = () => {
  return (
    <section className="relative isolate min-h-[calc(100svh-112px)] overflow-hidden bg-[#fdf4e3] md:min-h-[calc(90svh-112px)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/hero-section.png')] bg-cover bg-center bg-no-repeat"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#fdf4e3]/95 via-[#fdf4e3]/75 to-[#fdf4e3]/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#fdeae9]/80 md:h-[28rem] md:w-[28rem]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#ffeeca]/80"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[42%] top-24 hidden h-5 w-5 rounded-full bg-[#ed9d8c]/60 md:block"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-112px)] w-full max-w-7xl items-center px-6 py-16 md:min-h-[calc(90svh-112px)] md:px-10 lg:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          <div className="flex pt-16 justify-center lg:justify-start">
            <div className="w-full max-w-2xl rounded-[2.5rem] border border-white/60 bg-[#fdf4e3]/85 p-7 shadow-[0_30px_70px_-30px_rgba(183,110,121,0.4)] backdrop-blur-sm sm:p-10 md:p-12">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#fdeae9] px-4 py-2">
                <Sparkles className="h-4 w-4 text-[#b76e79]" />
                <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#b76e79]">
                  Beleza • Bem-estar • Autocuidado
                </span>
              </div>

              <div className="space-y-5">
                <h1 className="font-dancing text-5xl font-bold leading-none tracking-tight text-[#b76e79] sm:text-6xl md:text-7xl">
                  Sua melhor versão
                </h1>

                <div className="h-px w-20 bg-[#ed9d8c]" />

                <p className="font-montserrat max-w-xl text-base leading-relaxed text-[#8a5c60] sm:text-lg md:text-xl">
                  Muito mais do que estética, uma verdadeira experiência de
                  autocuidado. Oferecemos tratamentos personalizados para
                  realçar a sua beleza natural, elevar sua autoestima e
                  proporcionar momentos de bem-estar únicos.
                </p>

                <p className="font-belleza text-2xl text-[#b76e79]">
                  Sinta-se confiante, sinta-se BeCare.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  target="_blank"
                  href="https://api.whatsapp.com/message/JQYQMD3MLORLP1?autoload=1&app_absent=0&utm_source=ig"
                  className={`font-montserrat inline-flex items-center justify-center gap-2 rounded-full bg-[#b76e79] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_28px_-14px_rgba(183,110,121,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a25c67] motion-safe:active:scale-[0.98] md:px-8 md:text-base ${focusRing}`}
                >
                  Fale Conosco
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">

              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-5 translate-y-5 rounded-[3rem] bg-[#ffeeca]/80"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-[3rem] border border-[#ed9d8c]/60"
              />

              <div className="relative flex min-h-[18rem] items-center justify-center rounded-[3rem] border border-white/60 bg-[#fdf4e3]/70 p-8 shadow-[0_30px_60px_-24px_rgba(183,110,121,0.45)] backdrop-blur-sm sm:min-h-[22rem] md:p-12">
                <Image
                  src="/Logo1.svg"
                  alt="Logo Castilhos BeCare"
                  width={500}
                  height={250}
                  className="w-full max-w-[31rem] object-contain"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};




export const HeroSection2 = () => {
  return (
    <section className="relative isolate min-h-[calc(100svh-112px)] overflow-hidden bg-[#b76e79] md:min-h-[calc(90svh-112px)]">

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/parede.png')] bg-cover bg-center bg-no-repeat"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#8f555f]/90 via-[#b76e79]/70 to-[#fdf4e3]/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-[#ed9d8c]/30"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#ffeeca]/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[15%] top-[22%] h-3 w-3 rounded-full bg-[#ffeeca]/80"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[20%] left-[48%] h-5 w-5 rounded-full bg-[#fdeae9]/30"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-112px)] w-full max-w-7xl items-center px-6 py-16 md:min-h-[calc(90svh-112px)] md:px-10 lg:px-12">

        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          <div className="flex pt-16 justify-center lg:justify-start">
            <div className="w-full max-w-2xl rounded-[2.5rem] border border-white/15 bg-[#5c3a3e]/30 p-7 shadow-[0_30px_70px_-30px_rgba(92,58,62,0.65)] backdrop-blur-sm sm:p-10 md:p-12">

              <span className="font-montserrat inline-flex rounded-full bg-[#fdeae9] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#b76e79]">
                Conheça a BeCare
              </span>

              <div className="mt-6 space-y-5">
                <h1 className="font-dancing text-5xl font-bold leading-none text-[#ffeeca] sm:text-6xl md:text-7xl">
                  Sobre Nós
                </h1>

                <div className="h-px w-20 bg-[#ed9d8c]" />

                <p className="font-montserrat text-base leading-relaxed text-[#fdf4e3]/95 sm:text-lg md:text-xl">
                  A Castilhos BeCare nasceu do desejo profundo de transformar
                  o cuidado pessoal em uma experiência acolhedora e exclusiva.
                </p>

                <p className="font-montserrat text-base leading-relaxed text-[#fdf4e3]/85 sm:text-lg">
                  Somos um espaço dedicado à sua beleza e bem-estar, unindo
                  profissionais altamente qualificados, produtos de excelência
                  e um ambiente preparado para o seu conforto.
                </p>
              </div>

            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">

              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-5 translate-y-5 rounded-[3rem] bg-[#ffeeca]/25"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-[3rem] border border-[#ffeeca]/40"
              />

              <div className="relative flex min-h-[18rem] items-center justify-center rounded-[3rem] border border-white/15 bg-[#fdf4e3]/10 p-10 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.35)] backdrop-blur-md sm:min-h-[22rem]">

                <Image
                  src="/Logo2.svg"
                  alt="Logo Castilhos BeCare"
                  width={320}
                  height={140}
                  className="w-full max-w-[20rem] object-contain"
                />

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}