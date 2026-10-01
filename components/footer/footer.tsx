"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BsChatDots,
  BsCompass,
  BsGeoAlt,
  BsInstagram,
  BsTelephone,
  BsWhatsapp,
} from "react-icons/bs";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffeeca] focus-visible:ring-offset-2 focus-visible:ring-offset-[#b76e79]";

const navegacao = [
  { href: "/", label: "Home" },
  { href: "/produtos", label: "Produtos" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/contato", label: "Contato" },
];

const redes = [
  {
    href: "https://wa.me/5532998031745",
    label: "WhatsApp",
    Icon: BsWhatsapp
  },
  {
    href: "https://www.instagram.com/castilhosbe_care/",
    label: "Instagram",
    Icon: BsInstagram,
  },
];

export const Footer = () => {
  return (
    <footer className="relative mt-auto w-full text-center md:text-left">
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden bg-[#b76e79]"
      >
        <div className="absolute -right-28 -top-28 h-64 w-64 rounded-full bg-[#ed9d8c]/40 md:h-80 md:w-80" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#b8877f]/50" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-16 text-[#fdf4e3] md:pt-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">

          <div className="flex flex-col items-center md:col-span-5 md:items-start">
            <Link href="/" className={`rounded-lg ${focusRing}`}>
              <Image
                src="/Logo2.svg"
                alt="Logo Castilhos BeCare"
                width={240}
                height={100}
                className="object-contain"
              />
            </Link>

            <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
              {redes.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex size-11 items-center justify-center rounded-full bg-[#fdf4e3] text-[#b76e79] transition-colors hover:bg-[#ffeeca] motion-safe:hover:-translate-y-0.5 ${focusRing}`}
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navegação do rodapé" className="flex flex-col items-center md:col-span-3 md:items-start">
            <div className="mb-6 flex items-center justify-center gap-3 md:justify-start">
              <span className="flex size-10 items-center justify-center rounded-full bg-[#ffeeca] text-[#b76e79]">
                <BsCompass className="size-5" />
              </span>
              <h3 className="font-belleza text-2xl text-[#ffeeca]">Navegação</h3>
            </div>

            <ul className="flex flex-col items-center gap-1 md:items-start">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`font-montserrat group inline-flex items-center gap-3 rounded-full py-1 text-lg text-[#fdf4e3] transition-colors hover:text-[#ffeeca] ${focusRing}`}
                  >
                    <span className="size-1.5 rounded-full bg-[#ffeeca]/60 transition-colors group-hover:bg-[#ffeeca]" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-center md:col-span-4 md:items-start">
            <div className="mb-6 flex items-center justify-center gap-3 md:justify-start">
              <span className="flex size-10 items-center justify-center rounded-full bg-[#fdeae9] text-[#b76e79]">
                <BsChatDots className="size-5" />
              </span>
              <h3 className="font-belleza text-2xl text-[#ffeeca]">Contato</h3>
            </div>

            <ul className="font-montserrat flex flex-col items-center space-y-4 text-lg md:items-start">
              <li className="flex items-center gap-3">
                <BsGeoAlt className="size-5 shrink-0 text-[#ffeeca]" />
                <span>
                  Rua João Miguel, 30 - Jamapará<br />
                  Sapucaia - RJ, 25887-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <BsTelephone className="size-5 shrink-0 text-[#ffeeca]" />
                <span>(32) 9803-1745</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative bg-[#f2e8dc]">
        <div className="font-montserrat mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-sm text-[#5C3A3E] md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Castilhos BeCare. Todos os direitos
            reservados.
          </p>
          <p>
            Desenvolvido por:{" "}
            <a
              href="https://www.linkedin.com/in/marcos-c%C3%A9sar-zamboni-320158389/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline-offset-4 transition-colors hover:text-[#b76e79] hover:underline"
            >
              Marcos
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};