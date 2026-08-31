import { Pencil, Eye, Trash2 } from "lucide-react";

export function Tabela() {
  const produtos = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    nome: "Produto",
    descricao: "Texto...",
    data: "24/07/26",
    preco: "R$79,90",
  }));

  return (
    <div className="w-full max-w-5xl mx-auto p-8">
      
      <h2 className="text-3xl md:text-4xl font-belleza text-white text-center mb-10 tracking-wide">
        Tabela de Produtos
      </h2>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          
          <thead>
            <tr className="bg-[#cc8a8c] text-white font-montserrat">
              <th className="py-4 px-4 font-medium rounded-l-[1rem]">Foto</th>
              <th className="py-4 px-4 font-medium">Nome</th>
              <th className="py-4 px-4 font-medium">Descrição</th>
              <th className="py-4 px-4 font-medium">Data</th>
              <th className="py-4 px-4 font-medium">Preço</th>
              <th className="py-4 px-4 font-medium rounded-r-[1rem]">Ações</th>
            </tr>
          </thead>

          <tbody>
            {produtos.map((produto) => (
              <tr 
                key={produto.id} 
                className="text-white bg-transparent hover:bg-white/5 transition-colors border-b border-transparent"
              >
                <td className="py-6 px-4">
                  <div className="w-12 h-12 bg-white rounded-full mx-auto shadow-sm"></div>
                </td>
                
                <td className="py-6 px-4 text-center font-medium">{produto.nome}</td>
                <td className="py-6 px-4 text-center text-white/90">{produto.descricao}</td>
                <td className="py-6 px-4 text-center font-medium">{produto.data}</td>
                <td className="py-6 px-4 text-center font-medium">{produto.preco}</td>
                
                <td className="py-6 px-4">
                  <div className="flex items-center justify-center gap-4">
                    <button className="text-white hover:text-white/70 transition-colors transform hover:scale-110">
                      <Pencil className="w-[1.15rem] h-[1.15rem] fill-white" />
                    </button>
                    <button className="text-white hover:text-white/70 transition-colors transform hover:scale-110">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="text-white hover:text-white/70 transition-colors transform hover:scale-110">
                      <Trash2 className="w-5 h-5 fill-white" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
      
    </div>
  );
}