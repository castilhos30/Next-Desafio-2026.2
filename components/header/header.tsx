"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Phone,
  ShoppingBag,
  HeartHandshake,
} from "lucide-react";
import { motion, LayoutGroup } from "framer-motion";

const navLinks = [
  {
    path: "/",
    label: "Home",
    icon: Home,
  },
  {
    path: "/sobre",
    label: "Sobre nós",
    icon: HeartHandshake,
  },
  {
    path: "/produtos",
    label: "Produtos",
    icon: ShoppingBag,
  },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffeeca] focus-visible:ring-offset-2 focus-visible:ring-offset-[#b76e79]";

export function Header() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
     
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-[#ead9d0]/70 bg-[#fdf4e3]/90 shadow-[0_10px_35px_-25px_rgba(183,110,121,0.6)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-24" : "h-28"
            }`}
          >
            <Link
              href="/"
              aria-label="Castilhos BeCare - página inicial"
              className={`relative z-50 shrink-0 rounded-xl ${focusRing}`}
            >
              <Image
                src="/Logo1.svg"
                alt="Logo Castilhos BeCare"
                width={200}
                height={80}
                priority
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? "h-[4.2rem]" : "h-[4.8rem]"
                }`}
              />
            </Link>

            <LayoutGroup>
              <nav
                aria-label="Navegação principal"
                className={`hidden items-center rounded-full border border-[#875950] bg-[#b76e79] p-1 shadow-[0_12px_30px_-20px_rgba(92,58,62,0.8)] md:flex ${
                  isScrolled ? "h-14" : "h-[3.6rem]"
                }`}
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                      aria-current={isActive ? "page" : undefined}
                      className={`font-montserrat relative flex h-full items-center gap-2 rounded-full px-6 text-sm font-medium tracking-wide transition-colors lg:px-8 ${
                        isActive
                          ? "text-white"
                          : "text-white/85 hover:text-white"
                      } ${focusRing}`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="bubble-nav"
                          className="absolute inset-0 rounded-full border border-[#875950] bg-[#e09e90] shadow-[0_5px_15px_-10px_rgba(92,58,62,0.8)]"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}

                      <Icon className="relative z-10 h-4 w-4" />

                      <span className="relative z-10">
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </LayoutGroup>

            {/* AÇÕES */}
            <div className="hidden items-center gap-3 md:flex">
              {/* CONTATO */}
              <Link
                href="/contato"
                aria-current={pathname === "/contato" ? "page" : undefined}
                className={`font-montserrat inline-flex h-12 items-center justify-center rounded-full border px-6 text-sm font-semibold transition-all duration-300 ${
                  pathname === "/contato"
                    ? "border-[#875950] bg-[#e09e90] text-white shadow-sm"
                    : "border-[#b76e79] bg-[#b76e79] text-white hover:-translate-y-0.5 hover:bg-[#a25c67]"
                } ${focusRing}`}
              >
                <Phone className="mr-2 h-4 w-4" />
                Contato
              </Link>


              {/*
              <Link
                href="/carrinho"
                aria-label="Carrinho"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
                  pathname === "/carrinho"
                    ? "border-[#875950] bg-[#e09e90] text-white"
                    : "border-[#d9cbc4] bg-white/70 text-[#7f5b5e] hover:border-[#e09e90] hover:text-[#e09e90]"
                } ${focusRing}`}
              >
                <ShoppingCart
                  size={23}
                  strokeWidth={1.5}
                />
              </Link>
              */}

            

              {/*
              <Link
                href="/perfil"
                aria-label="Minha conta"
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
                  pathname === "/perfil"
                    ? "border-[#875950] bg-[#e09e90] text-white"
                    : "border-[#d9cbc4] bg-white/70 text-[#7f5b5e] hover:border-[#e09e90] hover:text-[#e09e90]"
                } ${focusRing}`}
              >
                <User
                  size={23}
                  strokeWidth={1.5}
                />
              </Link>
              */}
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={isMobileMenuOpen}
              className={`relative z-50 flex h-12 w-12 items-center justify-center rounded-full text-[#5C3A3E] transition-all hover:bg-[#fdeae9] md:hidden ${focusRing}`}
            >
              <Menu size={34} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      
      {isMobileMenuOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[60] bg-[#5c3a3e]/45 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        />
      )}

      
      <div
        className={`fixed left-0 top-0 z-[70] w-full transform rounded-b-[2.5rem] border-b border-[#ead9d0] bg-[#fdf4e3]/95 px-5 pb-10 pt-6 shadow-[0_30px_70px_-25px_rgba(92,58,62,0.45)] backdrop-blur-xl transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen
            ? "translate-y-0"
            : "-translate-y-full"
        }`}
      >
        {/* Cabeçalho */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Castilhos BeCare - página inicial"
            className={`rounded-xl ${focusRing}`}
          >
            <Image
              src="/Logo1.svg"
              alt="Logo Castilhos BeCare"
              width={160}
              height={60}
              className="h-auto w-[9rem] object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Fechar menu"
            className={`flex h-12 w-12 items-center justify-center rounded-full text-[#b76e79] transition-colors hover:bg-[#fdeae9] ${focusRing}`}
          >
            <X size={34} strokeWidth={1.5} />
          </button>
        </div>

        <nav
          aria-label="Navegação mobile"
          className="mx-auto flex w-full max-w-md flex-col gap-3"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            const Icon = link.icon;

            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={closeMenu}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex h-16 w-full items-center overflow-hidden rounded-full border px-5 transition-all duration-300 ${
                  isActive
                    ? "border-[#875950] bg-[#b76e79] text-white shadow-[0_12px_25px_-18px_rgba(92,58,62,0.9)]"
                    : "border-[#ead9d0] bg-white/55 text-[#b76e79] hover:border-[#ed9d8c] hover:bg-white/80"
                } ${focusRing}`}
              >
                <span
                  className={`mr-5 h-8 w-[3px] rounded-full transition-colors ${
                    isActive
                      ? "bg-[#ffeeca]"
                      : "bg-[#ed9d8c]"
                  }`}
                />

                <Icon
                  size={25}
                  strokeWidth={1.5}
                  className={`mr-4 shrink-0 ${
                    isActive
                      ? "text-[#ffeeca]"
                      : "text-[#b76e79]"
                  }`}
                />

                <span className="font-belleza flex-1 text-left text-lg font-medium">
                  {link.label}
                </span>

                <span
                  className={`text-lg transition-transform duration-300 group-hover:translate-x-1 ${
                    isActive
                      ? "text-[#ffeeca]"
                      : "text-[#ed9d8c]"
                  }`}
                >
                  →
                </span>
              </Link>
            );
          })}

          <Link
            href="/contato"
            onClick={closeMenu}
            aria-current={pathname === "/contato" ? "page" : undefined}
            className={`mt-3 flex h-16 w-full items-center rounded-full bg-[#e09e90] px-5 text-white shadow-[0_14px_30px_-18px_rgba(183,110,121,0.9)] transition-all duration-300 hover:bg-[#b76e79] ${focusRing}`}
          >
            <span className="mr-5 h-8 w-[3px] rounded-full bg-[#ffeeca]" />

            <Phone
              size={25}
              strokeWidth={1.5}
              className="mr-4 text-[#ffeeca]"
            />

            <span className="font-belleza flex-1 text-left text-lg font-medium">
              Contato
            </span>

            <span className="text-lg text-[#ffeeca]">
              →
            </span>
          </Link>
        </nav>

        <div className="mx-auto mt-8 max-w-md text-center">
          <p className="font-montserrat text-xs tracking-wide text-[#8a5c60]">
            Beleza • Bem-estar • Autocuidado
          </p>
        </div>
      </div>
    </>
  );
}
