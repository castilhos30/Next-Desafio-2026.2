"use client";

import { Quantidade } from "@/components/quantidade";
import  Image  from "next/image";

interface CartItemProps {
  title: string;
  price: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function Item({ title, price, quantity, onIncrease, onDecrease }: CartItemProps) {
  return (
    <div className="flex items-center w-full bg-[#E8C2C4]/80 backdrop-blur-md rounded-3xl p-3 pr-6 shadow-sm font-cairo font-bold ">
      
      <Image 
        src="/cardproduto.png" 
        alt={title} 
        width={100} 
        height={40} 
        className="rounded-3xl shrink-0 object-cover" 
      />

      <div className="w-[2px] h-12 bg-[#BEC092] mx-4 rounded-full shrink-0"></div>

      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-[#C5747A] text-sm">
          {title}
        </h3>
        <p className="text-[#BEC092] text-sm mt-1">
          R$ {price.toFixed(2).replace('.', ',')}
        </p>
      </div>

      <Quantidade 
        quantity={quantity} 
        onIncrease={onIncrease} 
        onDecrease={onDecrease} 
      />

    </div>
  );
}