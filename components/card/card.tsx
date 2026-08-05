import Image from "next/image";

interface ProductCardProps {
  title?: string;
  description?: string;
  price?: string;
  imageUrl?: string;
}

export function Card({
//dados do card, mas vai mudar depois
  title = "Produto", 
  description = "Descrição bem breve dos protudo",
  price = "R$ 79,99",
  imageUrl = "/cardproduto.png", 


}: ProductCardProps) {
  return (
    <div className="w-full max-w-[320px] rounded-[32px] overflow-hidden bg-[url('/hero-section.png')] shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex flex-col">
      
      <div className="relative w-full h-[240px]">
        <Image
          src={imageUrl}
          alt={`Imagem de ${title}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-7 flex flex-col">
        <h3 className="text-5xl font-bold text-[#E39785] tracking-tight mb-3">
          {title}
        </h3>
        
        <p className="text-2xl leading-tight text-[#A57B76] mb-5">
          {description}
        </p>
        
        <span className="text-3xl font-medium text-[#A6B68B]">
          {price}
        </span>
      </div>
      
    </div>
  );
}