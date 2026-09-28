import { HeroSection2 } from "@/components/hero-section/hero-section";
import { CardMVV } from "@/components/card-m-v-v/card-m-v-v";
import { Gem, Eye } from "lucide-react";
export default function Sobre() {
  const textoPadraoMissao = "Proporcionar experiências excepcionais de autocuidado e estética, elevando a autoestima e promovendo a saúde e o bem-estar de cada cliente através de tratamentos personalizados, seguros e de alta qualidade";
  const textoPadraoValores = "A base do nosso trabalho é a excelência, garantindo total segurança, qualidade e resultados reais em cada procedimento. Priorizamos um acolhimento genuíno, criando um ambiente onde cada pessoa se sente especial e confortável.";
  const textoPadraoVisao = "Ser reconhecida como a principal referência em estética e cuidados pessoais da região, destacando-se pela inovação constante, excelência nos resultados e por um atendimento verdadeiramente humanizado";
  return (
    <article className="flex flex-col">
      <HeroSection2 />

      <section className="w-full bg-gradient-to-l to-[#ED9D8C] via-[#FDEAE9] from-[#FFFFFF] py-20 px-4">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">

          <CardMVV
            title="Missão"
            description={textoPadraoMissao}
            icon={<Gem className="w-12 h-12 text-white" strokeWidth={1.5} />}
          />

          <CardMVV
            title="Visão"
            description={textoPadraoVisao}
            icon={<Eye className="w-12 h-12 text-white" strokeWidth={1.5} />}
          />

          <CardMVV
            title="Valores"
            description={textoPadraoValores}
            icon={<Gem className="w-12 h-12 text-white" strokeWidth={1.5} />}
          />

        </div>
      </section>
    </article>
  );
}