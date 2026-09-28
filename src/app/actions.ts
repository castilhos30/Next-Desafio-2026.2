"use server";

import { Resend } from "resend";
import { ContatoEmail } from "../../components/email"; 

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const nome = formData.get("nome") as string;
  const email = formData.get("email") as string;
  const mensagem = formData.get("mensagem") as string;

  if (!nome || !email || !mensagem) {
    return { success: false, error: "Preencha todos os campos." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Contato <onboarding@resend.dev>",
      to: ["castilhosbecare@gmail.com"], 
      subject: `Nova mensagem de ${nome}`,
      replyTo: email,
      react: ContatoEmail({ nome, email, mensagem }) 
    });

    if (error) {
      console.error("Erro retornado pela API do Resend:", error);
      return { success: false, error: error.message };
    }

    console.log("E-mail enviado com sucesso:", data);
    return { success: true, data };

  } catch (err) {
    console.error("Erro interno no servidor:", err);
    return { success: false, error: "Erro interno ao tentar enviar." };
  }
}