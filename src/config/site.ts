import { company } from "@/data/company";

export const siteConfig = {
  name: "DIMACO",
  description:
    `Materiales para la construcción con atención directa y entregas en ${company.coverage}.`,
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/#nosotros" },
    { label: "Catálogo", href: "/catalogo" },
    { label: "Contacto", href: "/#contacto" },
  ],
  quoteMessage:
    "Hola, quiero solicitar una cotización. ¿Podrían ayudarme con información sobre medidas, presentaciones y disponibilidad?",
  productQuoteMessage: (productName: string) =>
    `Hola, quiero solicitar una cotización de ${productName}. ¿Podrían compartirme información sobre las medidas, presentaciones y disponibilidad?`,
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "529933113539",
    pendingLabel: "WhatsApp DIMACO",
    fallbackHref: "/#contacto",
  },
  maps: {
    url: "https://maps.app.goo.gl/ffU8WaEdVvhxTtia7",
    embedUrl: "https://maps.google.com/maps?q=Material%20Para%20Construccion%20Dimaco%2C%20Villahermosa%2C%20Tabasco&t=&z=16&ie=UTF8&iwloc=&output=embed",
    pendingLabel: "Ver ubicación en Google Maps",
  },
} as const;

export function getWhatsAppHref(message: string = siteConfig.quoteMessage) {
  const { number, fallbackHref } = siteConfig.whatsapp;
  return number
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : fallbackHref;
}
