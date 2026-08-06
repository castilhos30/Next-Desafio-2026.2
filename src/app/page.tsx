import { Carrossel } from "@/components/carrossel/carrossel";
import { Card } from "@/components/card/card";
import { Feedback } from "@/components/feedback/feedback";
import { HeroSection } from "@/components/hero-section/hero-section";

export default function Home() {
  return (
    <article className="flex flex-col">

    <HeroSection />


      <Carrossel title="Nossos Serviços" bgColor="bg-[#FFF5F3]" uniqueId="servicos">
        <Card title="Produto 1" />
        <Card title="Produto 2" />
        <Card title="Produto 3" />
        <Card title="Produto 4" />
      </Carrossel>

      <Carrossel 
        title="Feedback" 
        bgColor="bg-[url('/Feedback.png')] " 
        titleColor="text-white"
        arrowColor="text-white/80 hover:text-white"
        uniqueId="feedbacks"
      >
        <Feedback content="Texto do depoimento um..." name="Nome 1" />
        <Feedback content="Texto do depoimento dois..." name="Nome 2" />
        <Feedback content="Texto do depoimento três..." name="Nome 3" />
        <Feedback content="Texto do depoimento quatro..." name="Nome 4" />
      </Carrossel>
      
    </article>
  );
}