import Image from "next/image";
import { Card } from "@/components/card/card";
import { Pesquisa } from "@/components/pesquisa/pesquisa";
import { getProdutos } from "../../server/query/produtos/query";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis,
} from "@/components/ui/pagination";

export default async function PaginaProdutos({
    searchParams,
}: {
    searchParams: Promise<{ q?: string; page?: string }>;
}) {
    const resolvedParams = await searchParams;
    const termoBusca = resolvedParams.q?.toLowerCase() || "";
    const paginaAtual = Number(resolvedParams.page) || 1;
    const itensPorPagina = 6;

    const produtos = await getProdutos();

    const produtosFiltrados = produtos.filter((produto) =>
        produto.titulo.toLowerCase().includes(termoBusca)
    );

    const totalProdutos = produtosFiltrados.length;
    const totalPaginas = Math.ceil(totalProdutos / itensPorPagina);
    const paginaValidada = Math.min(Math.max(1, paginaAtual), totalPaginas || 1);

    const inicio = (paginaValidada - 1) * itensPorPagina;
    const produtosPaginados = produtosFiltrados.slice(inicio, inicio + itensPorPagina);

    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams();
        if (resolvedParams.q) params.set("q", resolvedParams.q);
        params.set("page", String(pageNumber));
        return `?${params.toString()}`;
    };

    const getPageNumbers = () => {
        if (totalPaginas <= 5) {
            return Array.from({ length: totalPaginas }, (_, i) => i + 1);
        }
        if (paginaValidada <= 3) {
            return [1, 2, 3, 4, "ellipsis-1", totalPaginas];
        }
        if (paginaValidada >= totalPaginas - 2) {
            return [1, "ellipsis-2", totalPaginas - 3, totalPaginas - 2, totalPaginas - 1, totalPaginas];
        }
        return [1, "ellipsis-1", paginaValidada - 1, paginaValidada, paginaValidada + 1, "ellipsis-2", totalPaginas];
    };

    return (
        <main className="min-h-screen bg-[url('/Feedback.png')] bg-cover bg-center bg-fixed py-12 px-4 pt-36 md:px-8 flex flex-col items-center">

            <section className="w-full max-w-[1000px] flex items-center justify-center gap-4 mb-12">
                <Pesquisa />
            </section>

            <section className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 justify-items-center">
                {produtosPaginados.length > 0 ? (
                    produtosPaginados.map((produto) => (
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

            {totalPaginas > 1 && (
                <section className="mb-12">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href={createPageUrl(Math.max(1, paginaValidada - 1))}
                                    aria-disabled={paginaValidada === 1}
                                    className={paginaValidada === 1 ? "pointer-events-none opacity-50" : ""}
                                />
                            </PaginationItem>

                            {getPageNumbers().map((page, index) => {
                                if (typeof page === "string") {
                                    return (
                                        <PaginationItem key={page + index}>
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                    );
                                }

                                return (
                                    <PaginationItem key={page}>
                                        <PaginationLink
                                            href={createPageUrl(page)}
                                            isActive={paginaValidada === page}
                                        >
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            })}

                            <PaginationItem>
                                <PaginationNext
                                    href={createPageUrl(Math.min(totalPaginas, paginaValidada + 1))}
                                    aria-disabled={paginaValidada === totalPaginas}
                                    className={paginaValidada === totalPaginas ? "pointer-events-none opacity-50" : ""}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </section>
            )}
        </main>
    );
}