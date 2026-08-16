"use client";

import { BsCash } from "react-icons/bs";


interface SummaryItem {
  quantity: number;
  price: number;
}

interface CartSummaryProps {
  items: SummaryItem[];
  total: number;
}


export function Pagamento({ items, total }: CartSummaryProps) {
  return (
    <div className="bg-[#F5F5F5]/20 backdrop-blur-md rounded-[2rem] p-8 w-full lg:w-[380px] flex flex-col h-fit">
      
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-[#B57A82] flex items-center justify-center text-white   ">
            <BsCash size={20}></BsCash>
        </div>
        <h2 className="text-white font-montserrat font-bold text-xl">
          Valor Total
        </h2>
      </div>

      <div className="border border-dashed border-white/50 rounded-3xl p-6 flex flex-col gap-2 mb-6 min-h-[120px] justify-center">
        {items.map((item, index) => (
          <div key={index} className="flex justify-end text-[#99555D] font-bold text-sm font-cairo gap-2">
            <span>{item.quantity}x</span>
            <span>R$ {item.price.toFixed(2).replace('.', ',')}</span>
          </div>
        ))}
      </div>

      <div className="border border-dashed border-white/50 rounded-full py-3 px-6 flex justify-end items-center mb-8">
        <span className="text-[#99555D] font-cairo font-bold text-sm">
          Valor Total: R$ {total.toFixed(2).replace('.', ',')}
        </span>
      </div>

      <button className="w-full border border-white max-w-[200px] mx-auto bg-[#B1D0A3] hover:bg-[#BEC092] text-white font-belleza text-lg py-3 rounded-full transition-colors shadow-sm">
        Pagar
      </button>

    </div>
  );
}