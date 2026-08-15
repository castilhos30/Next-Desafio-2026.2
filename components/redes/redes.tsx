import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import {BsAppIndicator} from "react-icons/bs"

export function Redes() {
  return (
    <div className="w-full  p-8 bg-white/20 backdrop-blur-sm border border-white/20 rounded-[2rem] shadow-sm">
      
      <header className="flex items-center gap-4 mb-8">
         <div className="flex items-center justify-center w-14 h-14 bg-[#ba7d82]/80 border border-white/10 rounded-full ">
                    <BsAppIndicator className="w-7 h-7 text-black/40" />
                </div>
        <h2 className="text-2xl text-white font-medium">Nossas Redes</h2>
      </header>

      <div className="flex flex-col gap-6">
        
        <a 
          href="https://www.instagram.com/castilhosbe_care/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center w-full h-[3.75rem] px-2 bg-white/40 border border-white/50 rounded-full hover:bg-white/50 transition-all group"
        >
          <div className="flex items-center justify-center w-11 h-11 rounded-full border-[1.5px] border-white text-[#8a5a5e] bg-white/10 group-hover:bg-white/30 transition-colors">
              <BsInstagram className="text-white size-6" />
          </div>
          <span className="text-white mx-2">@castilhosbe_care</span>
        </a>

        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center w-full h-[3.75rem] px-2 bg-white/40 border border-white/50 rounded-full hover:bg-white/50 transition-all group"
        >
          <div className="flex items-center justify-center w-11 h-11 rounded-full border-[1.5px] border-white text-[#8a5a5e] bg-white/10 group-hover:bg-white/30 transition-colors">
              <BsWhatsapp className="text-white size-6" />
          </div>
          <span className="text-white mx-2">(32) </span>

        </a>

        <a 
          href="#" 
          className="flex items-center w-full h-[3.75rem] px-2 bg-white/40 border border-white/50 rounded-full hover:bg-white/50 transition-all group"
        >
          <div className="flex items-center justify-center w-11 h-11 rounded-full border-[1.5px] border-white text-[#8a5a5e] bg-white/10 group-hover:bg-white/30 transition-colors">
            <BsEnvelope className="text-white size-6" strokeWidth={1.5} />
          </div>
          <span className="text-white mx-2">...@</span>

        </a>

      </div>
    </div>
  );
}