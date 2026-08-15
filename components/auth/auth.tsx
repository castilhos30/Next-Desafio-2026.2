"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

interface AuthCardProps {
  variant: "login" | "registro";
}

export function AuthCard({ variant }: AuthCardProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isLogin = variant === "login";

  const isPasswordMismatch = !isLogin && confirmPassword.length > 0 && password !== confirmPassword;

  const title = isLogin ? "Entrar" : "Registrar";
  const buttonText = isLogin ? "Entrar" : "Registrar";
  const footerText = isLogin ? "Não possui uma conta? " : "Já possui uma conta? ";
  const footerLinkText = isLogin ? "Registrar" : "Entrar";
  const footerLinkHref = isLogin ? "/registro" : "/login";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDEAE9] p-4 py-32 font-montserrat">
      
      <div 
        className={`flex flex-col w-full max-w-[900px] rounded-3xl overflow-hidden shadow-xl transition-all
          ${isLogin ? "md:flex-row md:h-[500px]" : "md:flex-row-reverse md:h-[550px]"}
        `}
      >
        
        <div 
          className="hidden md:block w-1/2 relative bg-cover bg-center" 
          style={{ backgroundImage: "url('/login.jpg')" }}
        >
          <Link 
            href="/" 
            className="font-cairo font-bold absolute top-6 left-6 bg-[#DE9999]/90 hover:bg-[#DE9999] text-white text-sm px-4 py-1.5 rounded-full flex items-center gap-2 backdrop-blur-sm transition-all"
          >
            <ArrowLeft size={16} />
            Voltar para Home
          </Link>
        </div>

        <div className="w-full md:w-1/2 bg-[#B57C82] p-8 md:p-12 flex flex-col justify-center relative">
          <h2 className="font-belleza text-3xl font-bold text-white text-center mb-8">
            {title}
          </h2>

          <form className="font-montserrat space-y-4 flex flex-col">
            
            {!isLogin && (
              <div>
                <label className="text-white text-sm ml-2 mb-1 block">Nome</label>
                <input 
                  type="text" 
                  placeholder="Digite seu Nome..." 
                  className="w-full bg-[#E5A7A7] text-white placeholder-white/70 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>
            )}

            <div>
              <label className="text-white text-sm ml-2 mb-1 block">Email</label>
              <input 
                type="email" 
                placeholder="Digite seu Email..." 
                className="w-full bg-[#E5A7A7] text-white placeholder-white/70 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
            </div>

            <div className={isLogin ? "mt-6" : ""}>
              <label className="text-white text-sm ml-2 mb-1 block">Senha</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Digite sua Senha..." 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full bg-[#E5A7A7] text-white placeholder-white/70 rounded-full px-4 py-3 outline-none focus:ring-2 transition-all pr-12 ${
                    isPasswordMismatch 
                      ? "ring-2 ring-red-500 focus:ring-red-500" 
                      : "focus:ring-white/50"
                  }`}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="text-white text-sm ml-2 mb-1 block flex justify-between">
                  Confirme sua senha
                  {isPasswordMismatch && (
                    <span className="text-red-300 text-xs font-bold mr-2">As senhas não coincidem</span>
                  )}
                </label>
                <div className="relative">
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="Digite sua senha..." 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full bg-[#E5A7A7] text-white placeholder-white/70 rounded-full px-4 py-3 outline-none focus:ring-2 transition-all pr-12 ${
                      isPasswordMismatch 
                        ? "ring-2 ring-red-500 focus:ring-red-500" 
                        : "focus:ring-white/50"
                    }`}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            )}

            <button 
              type="submit" 
              className={`mx-auto bg-[#DE9999] hover:bg-[#D48989] text-white font-medium py-2 rounded-full transition-colors w-[120px] ${isLogin ? "mt-8" : "mt-6"}`}
            >
              {buttonText}
            </button>
          </form>

          <p className="font-cairo text-white/90 text-xs text-center mt-6">
            {footerText}
            <Link href={footerLinkHref} className="font-bold hover:underline">
              {footerLinkText}
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}