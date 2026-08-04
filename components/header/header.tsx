"use client";


import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingCart, User } from "lucide-react";
import { ActiveLink } from "@/components/active-link/active-link";
import { Button } from "@/components/ui/button";

export function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 w-full z-50  backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="flex h-28 items-center justify-between">
                    <Link href="/home">
                        <Image src="/logo1.svg" alt="Logo" width={200} height={80} />
                    </Link>


                    <nav className="flex items-center gap-20 bg-[#B76E79] px-8 rounded-full h-16 border-1 border-[#875950]">
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

                    <div className="flex items-center gap-4 h-16">
                        <Link href="/contato" className="text-white hover:text-[#e09e90] transition-colors bg-[#B76E79] p-2 rounded-4xl">
                            <Button className={pathname === "/contato"
                                ? "bg-[#e09e90] text-white hover:bg-[#e09e90]/90 border-1 border-[#875950] rounded-4xl"
                                : "text-white hover:bg-transparent hover:text-[#e09e90]"
                            }>Contato</Button>
                        </Link>

                        <button className="text-gray-500 hover:text-[#e09e90] transition-colors flex items-center justify-center" aria-label="Carrinho de compras">
                            <ShoppingCart size={24} strokeWidth={1.5} />
                        </button>
                        <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:text-[#e09e90] transition-colors" aria-label="Perfil do usuário">
                            <User size={24} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>

        </header>
    );
}
