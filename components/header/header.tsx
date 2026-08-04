"use client";

import { useState, useEffect } from "react"; 
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingCart, User } from "lucide-react";
import { ActiveLink } from "@/components/active-link/active-link";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
     
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#faf9f9]/95 backdrop-blur-md shadow-sm border-b" 
          : "bg-transparent" 
      }`}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-24" : "h-28" 
        }`}>
          
          <Link href="/home">
            <Image src="/logo1.svg" alt="Logo" width={200} height={80} />
          </Link>

          <nav className="flex items-center gap-16 bg-[#B76E79] px-8 rounded-full h-16 text-lg shadow-sm">
            <ActiveLink href="/home">
              Home
            </ActiveLink>
            <ActiveLink href="/sobre">
              Sobre nós
            </ActiveLink>
            <ActiveLink href="/produtos">
              Produtos
            </ActiveLink>
          </nav>

          <div className="flex items-center gap-5 h-20">
            <Link href="/contato" className="text-white hover:text-[#e09e90] transition-colors bg-[#B76E79] p-2 rounded-full shadow-sm">
              <Button className={pathname === "/contato" 
                ? "bg-[#e09e90] text-white hover:bg-[#e09e90]/90" 
                : "text-white hover:bg-transparent hover:text-[#e09e90]"
              }>
                Contato
              </Button>
            </Link>

            <button className="text-gray-500 hover:text-[#e09e90] transition-colors flex items-center justify-center" aria-label="Carrinho de compras">
              <ShoppingCart size={28} strokeWidth={1.5} />
            </button>
            
            <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 text-gray-500 hover:text-[#e09e90] hover:border-[#e09e90] transition-colors bg-white/50" aria-label="Perfil do usuário">
              <User size={28} strokeWidth={1.5} />
            </button>
          </div>
          
        </div>
      </div>
    </header>
  );
}