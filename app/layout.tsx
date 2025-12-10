import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Inventra AI - Intelligent Stock Management",
  description: "Connect your inventory data streams. Our AI analyzes input patterns to predict shortages, optimize overflow, and generate actionable executive summaries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script 
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} bg-zinc-950 text-zinc-400 antialiased selection:bg-indigo-500/30 selection:text-indigo-200`}>
        {children}
      </body>
    </html>
  );
}
