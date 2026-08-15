import { Envio } from "@/components/envio"
import { Redes } from "@/components/redes"
import { Localizacao } from "@/components/localizacao"


export default function Contato() {
    return (
        <main className="min-h-screen bg-gradient-to-l to-[#B76E79] via-[#D28582] from-[#ED9D8C] bg-cover bg-center bg-fixed py-12 px-4 pt-36 md:px-8 flex flex-col items-center">
            
            <h1 className="font-cairo font-bold text-white text-4xl md:text-6xl py-12"> Agende seu Momento</h1>
            
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
                <Envio />
                <Redes></Redes>
            </div>

            <div className="w-full py-14">
                <Localizacao></Localizacao>
            </div>
        </main>

    );
}