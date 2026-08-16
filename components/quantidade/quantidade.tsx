"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function Quantidade({ quantity, onIncrease, onDecrease }: QuantitySelectorProps) {
  return (
    <div className="flex items-center bg-[#A66C75] text-white rounded-md overflow-hidden h-8 shrink-0 font-cairo font-bold">
      <button 
        onClick={onDecrease}
        className="px-2 hover:bg-white/20 transition-colors flex items-center justify-center h-full"
        aria-label="Diminuir quantidade"
      >
        <Minus size={14} />
      </button>
      
      <span className="px-2 text-sm font-semibold flex items-center justify-center h-full text-center bg-[#ED9D8C]">
        {quantity}
      </span>
      
      <button 
        onClick={onIncrease}
        className="px-2 hover:bg-white/20 transition-colors flex items-center justify-center h-full"
        aria-label="Aumentar quantidade"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}