"use client";

import { Search } from "lucide-react";
import { InputHTMLAttributes, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export function Pesquisa({ placeholder = "pesquisar algo", className, ...props }: SearchInputProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const handleSearch = useCallback((event: React.FormEvent) => {
    event.preventDefault();
  }, []);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;

    if (newQuery) {
      router.push(`/produtos?q=${encodeURIComponent(newQuery)}`, { scroll: false });
    } else {
      router.push(`/produtos`, { scroll: false });
    }
  };

  return (
    <div className={`relative w-full max-w-[500px] bg-[#F5F5F5] rounded-full ${className || ""}`}>
      <form onSubmit={handleSearch} className="relative">
        
     
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleQueryChange}
          defaultValue={query} 
          className="w-full h-12 pl-6 pr-12 rounded-full text-[#A57B76] placeholder:text-[#A57B76]/60 focus:outline-none shadow-sm"
          {...props}
        />
        
      </form>
      <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A57B76] w-5 h-5 cursor-text" />
    </div>
  );
}