import { SlidersHorizontal } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Filtro ({ className, ...props }: FilterButtonProps) {
  return (
    <button 
      className={`h-12 w-12 flex-shrink-0 bg-[#FFF5F3] rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-transform ${className || ""}`}
      aria-label="Abrir filtros"
      {...props}
    >
      <SlidersHorizontal className="text-[#A57B76] w-5 h-5" />
    </button>
  );
}