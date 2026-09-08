import Image from "next/image";
import { Card } from "@/components/card/card";
import { Pesquisa } from "@/components/pesquisa/pesquisa";
import { Filtro } from "@/components/filtro/filtro";
import { getProdutos } from "../../server/query/produtos/query";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export default async function PaginaProdutos({
    searchParams,
}: {
    searchParams: Promise<{ q?: string }>;
}) {
    const resolvedParams = await searchParams;
    const termoBusca = resolvedParams.q?.toLowerCase() || "";

    const produtos = await getProdutos();

    const produtosFiltrados = produtos.filter((produto) =>
        produto.titulo.toLowerCase().includes(termoBusca)
    );

    return (
        <main className="min-h-screen bg-[url('/Feedback.png')] bg-cover bg-center bg-fixed py-12 px-4 pt-36 md:px-8 flex flex-col items-center">

            <section className="w-full max-w-[1000px] flex items-center justify-center gap-4 mb-12">
                <Pesquisa />
                <Filtro />
            </section>

            <section className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 justify-items-center">
                {produtosFiltrados.length > 0 ? (
                    produtosFiltrados.map((produto) => (
                        <Card
                            key={produto.id}
                            title={produto.titulo}
                            description={produto.descricao}
                            price={`R$ ${produto.preco.toFixed(2).replace('.', ',')}`}
                            imageUrl={produto.imagem.url}
                        />
                    ))
                ) : (
                    <p className="text-white text-xl font-cairo col-span-full">Nenhum serviço encontrado.</p>
                )}
            </section>

            <section className="mb-12">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                        <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationNext href="#" /></PaginationItem>
                    </PaginationContent>
                </Pagination>
            </section>
        </main>
    );
}