import { Carrossel } from "@/components/carrossel/carrossel";
import { Card } from "@/components/card/card";
import { Feedback } from "@/components/feedback/feedback";
import { HeroSection } from "@/components/hero-section/hero-section";
import { getProdutos } from "../server/query/produtos/query";
import { getFeedbacks } from "../server/query/feedbacks/query";

export default async function Home() {
  const produtos = await getProdutos();
  const feedbacks = await getFeedbacks();

  return (
    <article className="flex flex-col">
      <HeroSection />

      <Carrossel title="Nossos Serviços" bgColor="bg-[#FFF5F3]" uniqueId="servicos">
        {produtos.map((produto) => (
          <Card
            key={produto.id}
            title={produto.titulo}
            description={produto.descricao}
            price={`R$ ${produto.preco.toFixed(2).replace('.', ',')}`}
            imageUrl={produto.imagem.url}
          />
        ))}
      </Carrossel>

      <Carrossel
        title="Feedback" 
        bgColor="bg-[url('/Feedback.png')]" 
        titleColor="text-white"
        arrowColor="text-white/80 hover:text-white"
        uniqueId="feedbacks"
      >
        {feedbacks.map((item) => (
          <Feedback
            key={item.id}
            name={item.nome}         
            content={item.descricao}
          />
        ))}
      </Carrossel>
      
    </article >
  );
}