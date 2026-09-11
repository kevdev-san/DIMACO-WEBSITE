import Image from "next/image";
import Link from "next/link";
import { Clock3, ExternalLink, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { siteConfig } from "@/config/site";
import { SectionReveal } from "./ui/section-reveal";
import { WhatsAppButton } from "./whatsapp-button";

export function ContactSection() {
  return (
    <section id="contacto" className="section-pad scroll-mt-24 bg-white">
      <SectionReveal className="page-shell">
        <div className="eyebrow">Contacto y ubicación</div>
        <h2 className="section-title mt-4 max-w-3xl">Hablemos de los materiales para tu próximo proyecto</h2>
        <div className="mt-12 grid overflow-hidden rounded border border-[var(--color-line)] lg:grid-cols-2">
          <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-12">
            <div>
              <div className="contact-row">
                <Phone aria-hidden="true" />
                <div>
                  <h3>Atención directa y cotizaciones</h3>
                  <p className="text-sm font-bold text-[var(--color-navy)]">{company.salesContact.name}</p>
                  <p className="mt-1">
                    <Link href={company.phone.href} className="font-semibold text-[var(--color-navy)]">{company.phone.display}</Link>
                    <span className="text-xs text-[var(--color-muted)]"> (Oficina)</span>
                    <br />
                    <Link href={company.mobile.href} className="font-semibold text-[var(--color-navy)]">{company.mobile.display}</Link>
                    <span className="text-xs text-[var(--color-muted)]"> (Celular y WhatsApp)</span>
                  </p>
                </div>
              </div>
              <div className="contact-row">
                <MapPin aria-hidden="true" />
                <div>
                  <h3>Dirección</h3>
                  <p>{company.address}</p>
                  {siteConfig.maps.url && (
                    <a
                      href={siteConfig.maps.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-blue)] hover:text-[var(--color-orange)]"
                    >
                      Abrir ubicación en Google Maps <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
              <div className="contact-row">
                <Clock3 aria-hidden="true" />
                <div>
                  <h3>Horario de atención</h3>
                  <p>{company.hours}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton />
              <Link href={company.phone.href} className="button-outline">
                Llamar ahora
              </Link>
              {siteConfig.maps.url && (
                <a
                  href={siteConfig.maps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-outline inline-flex items-center gap-2"
                >
                  <MapPin size={16} className="text-[var(--color-orange)]" />
                  Cómo llegar
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-col border-t border-[var(--color-line)] lg:border-l lg:border-t-0">
            <div className="relative h-[220px] w-full bg-[var(--color-steel)] sm:h-[250px]">
              <Image
                src="/images/facilities/dimaco-storefront-side.jpeg"
                alt="Vista lateral de las instalaciones de DIMACO en Villahermosa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Instalaciones DIMACO</p>
                <p className="mt-1 text-base font-black">Villahermosa, Tabasco</p>
              </div>
            </div>
            <div className="relative min-h-[250px] flex-1 bg-[var(--color-surface)]">
              <iframe
                title="Ubicación de DIMACO en Google Maps"
                src={siteConfig.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "250px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
