import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/Navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Lotse",
    description: "Minimalistic dark mode blogging template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <body className="bg-dark text-white max-w-2xl mb-40 flex flex-col mt-4 mx-auto">
                <Navbar />
                <main className="flex-auto flex min-w-0 mt-6 flex flex-col px-4 md:px-0">{children}</main>
            </body>
        </html>
    );
}
