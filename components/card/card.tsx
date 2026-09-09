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
    <div className="w-full max-w-[320px] h-[520px] shrink-0 rounded-[32px] overflow-hidden bg-[url('/hero-section.png')] shadow-[0_8px_14px_rgba(0,0,0,0.12)] hover:translate-y-[-15px] transition-transform duration-300 flex flex-col">

      <div className="relative w-full h-[240px]">
        <Image
          src={imageUrl || "/caminho-padrao.jpg"}
          alt={`Imagem de ${title || "produto"}`}
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      <div className="p-7 flex flex-col flex-1">
        <h3 className="font-dancing text-5xl font-bold text-[#E39785] tracking-tight mb-3 line-clamp-1">
          {title}
        </h3>

        <p className="font-montserrat text-2xl max-h-[100px] leading-tight text-[#A57B76] mb-5 break-all line-clamp-3">
          {description}
        </p>

        <span className="mt-auto font-montserrat text-3xl font-medium text-[#A6B68B]">
          {price}
        </span>
      </div>

    </div>
  );
}