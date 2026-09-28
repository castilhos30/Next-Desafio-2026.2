"use client";

import { useState } from "react";
import {
  Mail,
  MessageCircle,
  MessageCircleCheck,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendEmail } from "../../src/app/actions";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed9d8c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdf4e3]";

export function Envio() {
  const [loading, setLoading] = useState(false);

  const [statusMessage, setStatusMessage] = useState<{
    success: boolean;
    text: string;
  } | null>(null);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setStatusMessage(null);

    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);

    setLoading(false);

    if (result.success) {
      setStatusMessage({
        success: true,
        text: "Mensagem enviada com sucesso!",
      });

      event.currentTarget.reset();
    } else {
      setStatusMessage({
        success: false,
        text: result.error || "Erro ao enviar.",
      });
    }
  }

  return (
    <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-[#f2e8dc] bg-white/70 p-6 shadow-[0_30px_70px_-30px_rgba(183,110,121,0.35)] backdrop-blur-sm sm:p-8 md:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#fdeae9]/80"
      />

      <div className="relative">
        <header className="mb-8 flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#fdeae9] text-[#b76e79] sm:size-14">
            <MessageCircle className="size-6 sm:size-7" strokeWidth={1.5} />
          </div>

          <div>
            <h2 className="font-belleza text-2xl font-medium text-[#5c3a3e] sm:text-3xl">
              Entre em Contato
            </h2>

            <p className="font-montserrat mt-1 text-sm text-[#8a5c60]">
              Estamos prontos para atender você
            </p>
          </div>
        </header>

        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="nome"
              className="font-montserrat ml-1 flex items-center gap-2 text-sm font-medium text-[#5c3a3e]"
            >
              <User className="size-4 text-[#b76e79]" />
              Nome
            </label>

            <input
              type="text"
              id="nome"
              name="nome"
              required
              className={`font-montserrat w-full rounded-full border border-[#ead9d0] bg-[#fdf4e3]/80 px-5 py-3 text-[#5c3a3e] outline-none transition-all placeholder:text-[#8a5c60]/45 focus:border-[#ed9d8c] focus:ring-2 focus:ring-[#ed9d8c]/25 ${focusRing}`}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="font-montserrat ml-1 flex items-center gap-2 text-sm font-medium text-[#5c3a3e]"
            >
              <Mail className="size-4 text-[#b76e79]" />
              E-mail
            </label>

            <input
              type="email"
              id="email"
              name="email"
              required
              className={`font-montserrat w-full rounded-full border border-[#ead9d0] bg-[#fdf4e3]/80 px-5 py-3 text-[#5c3a3e] outline-none transition-all placeholder:text-[#8a5c60]/45 focus:border-[#ed9d8c] focus:ring-2 focus:ring-[#ed9d8c]/25 ${focusRing}`}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="mensagem"
              className="font-montserrat ml-1 flex items-center gap-2 text-sm font-medium text-[#5c3a3e]"
            >
              <MessageCircleCheck className="size-4 text-[#b76e79]" />
              Mensagem
            </label>

            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              required
              className={`font-montserrat w-full resize-none rounded-[1.5rem] border border-[#ead9d0] bg-[#fdf4e3]/80 px-5 py-4 text-[#5c3a3e] outline-none transition-all placeholder:text-[#8a5c60]/45 focus:border-[#ed9d8c] focus:ring-2 focus:ring-[#ed9d8c]/25 ${focusRing}`}
            />
          </div>

          {statusMessage && (
            <p
              className={`font-montserrat text-center text-sm font-medium ${
                statusMessage.success
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {statusMessage.text}
            </p>
          )}

          <div className="mt-2 flex justify-center">
            <Button
              type="submit"
              disabled={loading}
              className={`font-montserrat rounded-full bg-[#b76e79] px-8 py-6 font-semibold tracking-wide text-white shadow-[0_12px_24px_-12px_rgba(183,110,121,0.8)] transition-all hover:-translate-y-0.5 hover:bg-[#a25c67] disabled:opacity-50 ${focusRing}`}
            >
              {loading ? "ENVIANDO..." : "ENVIAR"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}