import Link from "next/link";
import { getWhatsAppHref, siteConfig } from "@/config/site";
import { WhatsAppIcon } from "./ui/whatsapp-icon";

type WhatsAppButtonProps = {
  message?: string;
  label?: string;
  floating?: boolean;
  className?: string;
};

export function WhatsAppButton({
  message,
  label = "Cotizar por WhatsApp",
  floating = false,
  className = "",
}: WhatsAppButtonProps) {
  const configured = Boolean(siteConfig.whatsapp.number);
  const accessibleLabel = configured ? label : `${label}. ${siteConfig.whatsapp.pendingLabel}`;

  return (
    <Link
      href={getWhatsAppHref(message)}
      aria-label={accessibleLabel}
      title={configured ? label : siteConfig.whatsapp.pendingLabel}
      className={`${floating ? "whatsapp-floating" : "button-whatsapp"} ${className}`}
    >
      <WhatsAppIcon size={floating ? 30 : 20} className="shrink-0" />
      {!floating && <span>{configured ? label : "Consultar por WhatsApp"}</span>}
      {floating && <span className="sr-only">{accessibleLabel}</span>}
    </Link>
  );
}
