import 'reflect-metadata'; // polifill
import { AppProvider } from "@/app/_/providers/AppProvider";
import { initializeMobx } from "@/shared/lib/mobx";
import { Layout } from "@/widgets/layout";
import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import './_/styles/globals.css';

if (typeof window !== 'undefined') {
    initializeMobx();
}

const inter = Inter({
    variable: "--font-inter",
    subsets : ["latin", "cyrillic"],
});

export const metadata: Metadata = {
    title      : 'Neimark',
    description: 'Neimark hacakton',
};

export default function RootLayout({
    children,
}: { children: ReactNode }) {
    return (
        <html lang="ru" className={inter.variable}>
        <body className={`antialiased light`}>
        <AppProvider>
            <Layout>
                {children}
            </Layout>
        </AppProvider>
        </body>
        </html>
    );
}
