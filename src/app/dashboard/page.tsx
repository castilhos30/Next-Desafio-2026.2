import { Sidebar } from "@/components/sidebar";
import { Tabela } from "@/components/tabela";

export default function PaginaProdutos() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#D28189] via-[#E29896] to-[#EFAFA3] px-4 py-34 md:px-8 gap-6 lg:gap-10">
      
      <div className="sm:block">
        <Sidebar />
      </div>

      <main className="flex-1 bg-white/20 backdrop-blur-md border border-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col">
        
        <header className="w-full px-10 py-8 border-b border-white/40 flex justify-between items-center">
          <h1 className="text-2xl font-belleza text-white tracking-wide">
            Gestão de Produtos
          </h1>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <Tabela />
        </div>
        
      </main>

    </div>
  );
}