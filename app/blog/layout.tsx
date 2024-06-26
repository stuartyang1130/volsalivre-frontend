import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import "@/app/globals.css";
import Header from "@/components/blog/header";
import Footer from "@/components/blog/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mais Alunos Melhor Escolas - Veja como captar mais alunos pela internet",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
