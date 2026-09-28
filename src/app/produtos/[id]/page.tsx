import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CreditCard } from "lucide-react";
import { getProdutos } from "../../../server/query/produtos/query"; // Certifique-se de que o caminho está correto

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed9d8c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdf4e3]";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProdutoExpandido({ params }: Props) {
  const { id: idDoProduto } = await params;

  const produtos = await getProdutos();
  const produto = produtos.find((p: any) => p.id === idDoProduto);

  if (!produto) {
    return (
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#fdf4e3] px-6 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#fdeae9]"
        />
        <div className="relative flex flex-col items-center">
          <h1 className="font-dancing mb-3 text-5xl font-bold text-[#b76e79]">
            Produto não encontrado
          </h1>
          <p className="font-montserrat mb-8 max-w-sm text-base text-[#8A5C60]">
            Esse produto pode ter sido removido ou o link está incorreto.
          </p>
          <Link
            href="/produtos"
            className={`font-montserrat inline-flex items-center gap-2 rounded-full bg-[#fdeae9] px-8 py-3 text-sm font-semibold text-[#b76e79] shadow-sm transition-colors hover:bg-[#ed9d8c] hover:text-white ${focusRing}`}
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para produtos
          </Link>
        </div>
      </main>
    );
  }

  const precoFormatado = `R$ ${produto.preco.toFixed(2).replace(".", ",")}`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fdf4e3]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#fdeae9] md:h-[34rem] md:w-[34rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-[#ffeeca]/70"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-28 md:pb-32 md:pt-36">
        
        <Link
          href="/produtos"
          className={`font-montserrat inline-flex items-center gap-2 rounded-full bg-[#fdeae9] px-5 py-2.5 text-sm font-medium text-[#b76e79] shadow-sm transition-colors hover:bg-[#ed9d8c]/60 hover:text-white ${focusRing}`}
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para produtos
        </Link>

        <div className="mt-10 grid grid-cols-1 items-center gap-16 md:mt-14 md:grid-cols-2 md:gap-16 lg:gap-24">
          
          <div className="relative mx-auto w-full max-w-md md:max-w-[30rem]">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem] bg-[#ffeeca] md:translate-x-5 md:translate-y-5"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -translate-x-2 -translate-y-2 rounded-[2.5rem] border border-[#ed9d8c]/70"
            />

            <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] bg-[#fdf4e3] shadow-[0_30px_60px_-24px_rgba(183,110,121,0.45)]">
              <Image
                src={produto.imagem?.url || "/cardproduto.png"}
                alt={`Imagem de ${produto.titulo}`}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-dancing text-5xl font-bold leading-[1.05] text-[#b76e79] md:text-6xl lg:text-7xl">
              {produto.titulo}
            </h1>

            <p className="font-montserrat mt-6 max-w-[32rem] whitespace-pre-line break-words text-base leading-relaxed text-[#8A5C60] md:text-lg">
              {produto.descricao}
            </p>

            <div className="mt-10 flex flex-col gap-6 rounded-3xl border border-[#f2e8dc] bg-[#fdeae9] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
              <span className="font-belleza text-4xl tracking-tight text-[#5C3A3E] md:text-5xl">
                {precoFormatado}
              </span>

              <button
                type="button"
                className={`font-montserrat inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#b76e79] px-10 py-3.5 text-base font-semibold text-white shadow-[0_12px_24px_-12px_rgba(183,110,121,0.8)] transition-colors hover:bg-[#a25c67] motion-safe:active:scale-[0.98] sm:w-auto ${focusRing}`}
              >
                <CreditCard className="h-5 w-5" />
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}