import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio de Desenvolvedor",
  description: "Portfólio profissional mostrando projetos e habilidades",
  keywords: ["desenvolvedor", "portfolio", "projetos", "web development"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main className="min-h-screen bg-[#111827] text-white relative">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
          
          {/* Dots Pattern */}
          <div className="absolute inset-0 bg-dots-pattern opacity-[0.03]" />
          
          {/* Content */}
          <div className="relative">{children}</div>
        </main>
      </body>
    </html>
  );
} 