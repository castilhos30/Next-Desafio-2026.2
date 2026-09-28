import { Envio } from "@/components/envio";
import { Redes } from "@/components/redes";
import { Localizacao } from "@/components/localizacao";
import { Reveal } from "@/components/reveal";

export default function Contato() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fdf4e3]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-[#fdeae9]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-44 -left-36 h-[32rem] w-[32rem] rounded-full bg-[#ffeeca]/80"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36 lg:px-12">
        
        <section className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
          
          <Reveal from="up" delay={100}>
            <div>
              <Envio />
            </div>
          </Reveal>

          <Reveal from="up" delay={300}>
            <div className="lg:pt-4">
              <Redes />
            </div>
          </Reveal>
        </section>

        <section className="mt-16 md:mt-24">
          <Reveal from="up">
            <Localizacao />
          </Reveal>
        </section>

      </div>
    </main>
  );
}