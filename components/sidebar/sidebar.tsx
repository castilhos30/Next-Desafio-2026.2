"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, BarChart2, LogOut } from "lucide-react";

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside
      className={`relative h-full bg-[#ba7d82] rounded-[2rem] transition-all duration-300 ease-in-out flex flex-col py-8 shadow-sm font-montserrat ${
        isExpanded ? "w-[17rem] px-8" : "w-[6.5rem] px-6"
      }`}
    >
      {isExpanded && (
        <button
          onClick={() => setIsExpanded(false)}
          className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#a66a6e] rounded-xl flex items-center justify-center text-white hover:bg-[#905a5d] transition-colors shadow-md z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      <div className="flex items-center gap-4 mb-6 relative min-h-[3rem]">
        <div className="w-12 h-12 bg-white rounded-full flex-shrink-0 shadow-sm"></div> {/*vai ser o caminho da imsgem*/}

        {isExpanded ? (
          <div className="flex flex-col overflow-hidden animate-in fade-in duration-300">
            <span className="text-[0.6rem] font-bold text-white uppercase tracking-wider">
              BEM-VINDO(A),
            </span>
            <span className="text-sm font-bold text-white">Usuário</span>
          </div>
        ) : (
          <button
            onClick={() => setIsExpanded(true)}
            className="absolute left-[3.25rem] top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition-colors animate-in fade-in duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-white/40 to-transparent mb-8"></div>

      <nav className="flex-1">
        <ul className="flex flex-col gap-2">
          <li>
            <a
              href="#"
              className={`flex items-center gap-4 py-3 rounded-xl hover:bg-white/10 transition-colors text-white group ${
                isExpanded ? "px-4 -mx-4" : "justify-center"
              }`}
            >
              <BarChart2 className="w-6 h-6 flex-shrink-0" />
              {isExpanded && (
                <span className="font-semibold whitespace-nowrap animate-in fade-in duration-300">
                  Produtos
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>

      <div className="mt-auto">
        <button
          className={`flex items-center gap-4 py-3 rounded-xl hover:bg-white/10 transition-colors text-white group w-full ${
            isExpanded ? "px-4 -mx-4" : "justify-center"
          }`}
        >
          <LogOut className="w-6 h-6 flex-shrink-0 ml-1" />
          {isExpanded && (
            <span className="font-semibold whitespace-nowrap animate-in fade-in duration-300">
              Log-out
            </span>
          )}
        </button>
      </div>
    </aside>
  );
}