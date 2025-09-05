import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ThemeProvider from "@/components/theme";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Fossy Reviews",
    description: "Personal Review Site",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="shortcut icon" type="image/png" href="fossy-favicon.png" />
            </head>
            <ThemeProvider>
                <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </ThemeProvider>
        </html>
    );
}
