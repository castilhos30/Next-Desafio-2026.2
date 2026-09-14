"use client";

import { useState } from "react";
import { MessageCircle, Mail, MessageCircleCheck, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendEmail } from "../../src/app/actions"; 

export function Envio() {
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState<{ success: boolean; text: string } | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setStatusMessage(null);

        const formData = new FormData(event.currentTarget);
        const result = await sendEmail(formData);

        setLoading(false);

        if (result.success) {
            setStatusMessage({ success: true, text: "Mensagem enviada com sucesso!" });
            event.currentTarget.reset(); // Limpa o formulário
        } else {
            setStatusMessage({ success: false, text: result.error || "Erro ao enviar." });
        }
    }

    return (
        <div className="w-full p-8 bg-white/20 backdrop-blur-sm border border-white/20 rounded-[2rem] shadow-sm">

            <header className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-14 h-14 bg-[#ba7d82]/80 border border-white/10 rounded-full">
                    <MessageCircle className="w-7 h-7 text-black/40" strokeWidth={1.5} />
                </div>
                <h2 className="font-belleza text-2xl text-white font-medium">Entre em Contato</h2>
            </header>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="nome" className="flex items-center gap-2 text-sm text-black/60 ml-1">
                        <User className="w-4 h-4" strokeWidth={2} />
                        <span className="font-montserrat">nome</span>
                    </label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        className="w-full px-5 py-3 bg-white/40 border border-white/50 rounded-full focus:outline-none focus:ring-2 focus:ring-white/60 text-white placeholder-zinc-500/50 transition-all"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="flex items-center gap-2 text-sm text-black/60 ml-1">
                        <Mail className="w-4 h-4" strokeWidth={2} />
                        <span className="font-montserrat">email</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-5 py-3 bg-white/40 border border-white/50 rounded-full focus:outline-none focus:ring-2 focus:ring-white/60 text-white placeholder-zinc-500/50 transition-all"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="mensagem" className="flex items-center gap-2 text-sm text-black/60 ml-1">
                        <MessageCircleCheck className="w-4 h-4" strokeWidth={2} />
                        <span className="font-montserrat">mensagem</span>
                    </label>
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        rows={5}
                        required
                        className="w-full px-5 py-4 bg-white/40 border border-white/50 rounded-3xl resize-none focus:outline-none focus:ring-2 focus:ring-white/60 text-white placeholder-zinc-500/50 transition-all"
                    ></textarea>
                </div>

                {statusMessage && (
                    <p className={`text-center text-sm font-medium ${statusMessage.success ? "text-green-200" : "text-red-200"}`}>
                        {statusMessage.text}
                    </p>
                )}

                <div className="flex justify-center mt-4">
                    <Button
                        type="submit"
                        disabled={loading}
                        className="px-10 py-6 bg-[#ba7d82] hover:bg-[#a66a6e] text-white rounded-full font-medium tracking-wide transition-colors disabled:opacity-50"
                    >
                        {loading ? "ENVIANDO..." : "ENVIAR"}
                    </Button>
                </div>
            </form>

        </div>
    );
}