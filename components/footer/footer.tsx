"use client";

import Image from "next/image";
import Link from "next/link";
import { BsGeoAlt } from "react-icons/bs";
import {BsCompass} from "react-icons/bs";
import {BsTelephone} from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#B76E79] to-[#ED9D8C] text-white py-6 mt-auto">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-32 items-start">        
        <div className="flex justify-center md:justify-start items-center h-full">
          <Link href="/home">
            <Image 
              src="/Logo2.svg" 
              alt="Logo Castilhos BeCare" 
              width={240} 
              height={100} 
              className="object-contain"
            />
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <BsCompass className="text-white size-6" />
            <h3 className="font-belleza text-2xl font-semibold">Navegação</h3>
          </div>
          
          <nav className="flex flex-col space-y-3 text-center items-center text-lg">
            <Link href="/" className="font-montserrat hover:text-white/70 transition-colors">Home</Link>
            <Link href="/produtos" className="font-montserrat hover:text-white/70 transition-colors">Produtos</Link>
            <Link href="/sobre" className="font-montserrat hover:text-white/70 transition-colors">Sobre Nós</Link>
            <Link href="/contato" className="font-montserrat hover:text-white/70 transition-colors">Contato</Link>
          </nav>
        </div>

        <div className="font-belleza flex flex-col items-center md:items-center">
          <h3 className="text-2xl font-semibold mb-6">Contato</h3>
          
          <div className="font-montserrat space-y-4 mb-8 text-lg">
            <div className="flex items-center gap-3">
              <BsGeoAlt className="text-white size-6" />
              <span>Local XXX</span>
            </div>
            <div className="flex items-center gap-3">
              <BsTelephone className="text-white size-6" />
              <span>Número</span>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Redes Sociais</h3>
          <div className="flex items-center md:items-center gap-4">
            <a href="/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <BsWhatsapp className="text-white size-6" />
            </a>
            <a href="https://www.instagram.com/castilhosbe_care/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <BsInstagram className="text-white size-6"/>
            </a>
          </div>
        </div>

      </div>
      <div className="mt-12 pt-6 border-t border-white/30 text-sm text-white flex flex-col md:flex-row justify-between items-center p-6">
        <p>&copy; {new Date().getFullYear()} Castilhos BeCare. Todos os direitos reservados.</p>
        
        <p className="mt-2 md:mt-0">
          Desenvolvido por: <a href="https://www.linkedin.com/in/marcos-c%C3%A9sar-zamboni-320158389/"><strong>Marcos</strong></a>
        </p>
      </div>
    </footer>
  );
}