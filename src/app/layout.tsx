import type { Metadata } from "next";
import { Montserrat, Dancing_Script, Cairo, Belleza } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({
  weight: ["400", "700"], 
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  weight: ["400", "700"], 
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const cairo = Cairo({
  weight: ["400"], 
  variable: "--font-cairo",
  subsets: ["latin"], 
});

const belleza = Belleza({
  weight: ["400"], 
  variable: "--font-belleza",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Castilhos BeCare | Design de Sobrancelhas e Cílios",
    template: "%s | Castilhos BeCare",
  },
  description: "Transforme seu olhar na Castilhos BeCare. Especialistas em design de sobrancelhas, extensão de cílios e autocuidado em Jamapará e Sapucaia. Agende seu horário!",
  keywords: [
    "design de sobrancelhas",
    "extensão de cílios",
    "estética",
    "autocuidado",
    "Castilhos BeCare",
    "Jamapará",
    "Sapucaia",
    "Além Paraíba"
  ],
  openGraph: {
    title: "Castilhos BeCare | Design de Sobrancelhas e Cílios",
    description: "Espaço dedicado à sua beleza, bem-estar e autocuidado em Jamapará e região.",
   // url: "https://seu-dominio.com",  adicionar dominio dps
    siteName: "Castilhos BeCare",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased flex flex-col min-h-screen ${montserrat.variable} ${dancingScript.variable} ${cairo.variable} ${belleza.variable}`}>
        
        <Header />

        <main className="flex-1 w-full">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}