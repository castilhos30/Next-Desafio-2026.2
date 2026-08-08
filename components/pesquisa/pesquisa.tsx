import { Search } from "lucide-react";
import { InputHTMLAttributes } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export function Pesquisa({ placeholder = "pesquisar algo", className, ...props }: SearchInputProps) {
  return (
    <div className={`relative w-full max-w-[500px] bg-[#F5F5F5] rounded-full ${className || ""}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-12 pl-6 pr-12 rounded-full text-[#A57B76] placeholder:text-[#A57B76]/60 focus:outline-none shadow-sm"
        {...props}
      />
      <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A57B76] w-5 h-5 cursor-text" />
    </div>
  );
}