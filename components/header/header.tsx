"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingCart, User, Menu, X, Home, Phone, ShoppingBag } from "lucide-react"; 
import { ActiveLink } from "@/components/active-link/active-link";
import { Button } from "@/components/ui/button";

export function Header() {
    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <header
                className={`font-cairo font-bold fixed top-0 w-full z-40 transition-all duration-300 ${
                    isScrolled 
                        ? "bg-[#faf9f9]/95 backdrop-blur-md shadow-sm border-b"
                        : "bg-transparent"
                }`}
            >
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                    <div className={`flex items-center justify-between transition-all duration-300 ${
                        isScrolled ? "h-24" : "h-28"
                    }`}>
                        
                        <Link href="/" className="z-40">
                            <Image src="/logo1.svg" alt="Logo" width={200} height={80} />
                        </Link>

                        <nav className="hidden md:flex items-center gap-20 bg-[#B76E79] px-8 rounded-full h-16 border-1 border-[#875950]">
                            <ActiveLink href="/">Home</ActiveLink>
                            <ActiveLink href="/sobre">Sobre nós</ActiveLink>
                            <ActiveLink href="/produtos">Produtos</ActiveLink>
                        </nav>

                        <div className="hidden md:flex items-center gap-5 h-16">
                            <Link href="/contato" className="text-white hover:text-[#e09e90] transition-colors bg-[#B76E79] p-2 rounded-4xl">
                                <Button className={pathname === "/contato"
                                    ? "bg-[#e09e90] text-white hover:bg-[#e09e90]/90 border-1 border-[#875950] rounded-4xl"
                                    : "text-white hover:bg-transparent hover:text-[#e09e90]"
                                }>Contato</Button>
                            </Link>

                           <a href="/carrinho"><button className="text-gray-500 hover:text-[#e09e90] transition-colors flex items-center justify-center">
                                <ShoppingCart size={28} strokeWidth={1.5} />
                            </button>
                            </a>

                            <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 text-gray-500 hover:text-[#e09e90] hover:border-[#e09e90] transition-colors bg-white/50">
                                <User size={28} strokeWidth={1.5} />
                            </button>
                        </div>

                        <button 
                            className="md:hidden flex items-center justify-center z-40 text-[#B76E79]"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Abrir menu"
                        >
                            <Menu size={40} strokeWidth={1.5} />
                        </button>

                    </div>
                </div>
            </header>

            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden transition-opacity"
                    onClick={closeMenu}
                />
            )}

            <div 
                className={`fixed top-0 left-0 w-full z-50 bg-[#8b8280] rounded-b-[40px] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-8 pb-12 px-6 ${
                    isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="flex items-center justify-between mb-12">
                    <Link href="/" onClick={closeMenu}>
                        <Image src="/logo1.svg" alt="Logo" width={160} height={60} />
                    </Link>
                    <div className="flex items-center gap-4 text-[#e09e90]">
                       <a href="/carrinho"> <button aria-label="Carrinho">
                            <ShoppingCart size={36} strokeWidth={1.5} />
                        </button>
                        </a>
                        <button onClick={closeMenu} aria-label="Fechar menu">
                            <X size={44} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-5 w-full">
                    
                    <Link href="/" onClick={closeMenu} className="flex items-center w-full max-w-[320px] h-16 bg-[#a39795] border border-white/30 rounded-full px-5 text-[#e09e90] hover:bg-white/10 transition-colors">
                        <div className="w-[2px] h-8 bg-[#e09e90] rounded-full mr-5"></div>
                        <Home size={28} strokeWidth={1.5} className="mr-3" />
                        <span className="flex-1 text-center font-medium pr-14">Home</span>
                    </Link>

                    <Link href="/contato" onClick={closeMenu} className="flex items-center w-full max-w-[320px] h-16 bg-[#a39795] border border-white/30 rounded-full px-5 text-[#e09e90] hover:bg-white/10 transition-colors">
                        <div className="w-[2px] h-8 bg-[#e09e90] rounded-full mr-5"></div>
                        <Phone size={28} strokeWidth={1.5} className="mr-3" />
                        <span className="flex-1 text-center font-medium pr-14">Contato</span>
                    </Link>

                    <Link href="/sobre" onClick={closeMenu} className="flex items-center w-full max-w-[320px] h-16 bg-[#a39795] border border-white/30 rounded-full px-5 text-[#e09e90] hover:bg-white/10 transition-colors">
                        <div className="w-[2px] h-8 bg-[#e09e90] rounded-full mr-5"></div>
                        <User size={28} strokeWidth={1.5} className="mr-3" />
                        <span className="flex-1 text-center font-medium pr-14">Sobre Nós</span>
                    </Link>

                    <Link href="/produtos" onClick={closeMenu} className="flex items-center w-full max-w-[320px] h-16 bg-[#a39795] border border-white/30 rounded-full px-5 text-[#e09e90] hover:bg-white/10 transition-colors">
                        <div className="w-[2px] h-8 bg-[#e09e90] rounded-full mr-5"></div>
                        <ShoppingBag size={28} strokeWidth={1.5} className="mr-3" />
                        <span className="flex-1 text-center font-medium pr-14">Produtos</span>
                    </Link>

                </div>
            </div>
        </>
    );
}