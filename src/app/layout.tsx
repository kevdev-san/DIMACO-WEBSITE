import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dimaco.mx"),
  title: { default: `${siteConfig.name} | Materiales para la construcción en Tabasco`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: { icon: "/images/brand/dimaco-logo.png" },
  openGraph: {
    title: `${siteConfig.name} | Materiales para la construcción`,
    description: siteConfig.description,
    locale: "es_MX",
    type: "website",
    images: [{ url: "/images/brand/dimaco-logo.png", width: 1144, height: 1014, alt: `Logotipo ${siteConfig.name}` }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geist.variable} antialiased`}>
        <a href="#contenido" className="skip-link">Saltar al contenido</a>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton floating />
      </body>
    </html>
  );
}
