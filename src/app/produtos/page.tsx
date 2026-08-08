"use client";

import Image from "next/image";
import { Card } from "@/components/card/card";
import { Pesquisa } from "@/components/pesquisa/pesquisa";
import { Filtro } from "@/components/filtro/filtro";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";


const produtos = Array(6).fill({
    id: 1,
    titulo: "Produto",
    descricao: "Descrição bem breve dos protudo",
    preco: "R$ 79,99",
    imagem: "/cardproduto.png",
});

export default function PaginaProdutos() {
    return (
        <main className="min-h-screen bg-[url('/Feedback.png')] bg-cover bg-center bg-fixed py-12 px-4 pt-36 md:px-8 flex flex-col items-center">

            <section className="w-full max-w-[1000px] flex items-center justify-center gap-4 mb-12">
                <Pesquisa
                    placeholder="pesquisar produto..."
                    onChange={(e) => console.log(e.target.value)}
                />

                <Filtro
                    onClick={() => console.log("foi clicado")}
                />
            </section>

            <section className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 justify-items-center">                <Card title="Produto 1" />
                <Card title="Produto 2" />
                <Card title="Produto 3" />
                <Card title="Produto 4" />
                <Card title="Produto 5" />
                <Card title="Produto 6" />

            </section>

            <section className="mb-12">
                <Pagination>
                    <PaginationContent>

                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                1
                            </PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink href="#">
                                2
                            </PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationLink href="#">
                                3
                            </PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>

                    </PaginationContent>
                </Pagination>
            </section>
        </main>
    );
}