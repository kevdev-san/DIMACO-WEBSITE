import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="inline-flex items-center justify-center rounded-xl bg-white p-3 shadow-sm">
            <Image
              src="/images/brand/dimaco-logo.png"
              width={130}
              height={58}
              alt={siteConfig.name}
              className="h-11 w-auto object-contain"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">{company.tagline}.</p>
        </div>
        <div>
          <h2 className="footer-title">Navegación</h2>
          <div className="mt-4 flex flex-col gap-3">
            {siteConfig.navigation.map((item) => (
              <Link key={item.label} href={item.href} className="footer-link">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="footer-title">Datos fiscales</h2>
          <p className="mt-4 text-sm leading-6 text-white/65">{company.legalName}</p>
          <p className="mt-2 text-sm text-white/65">RFC: {company.rfc}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
          <p>Villahermosa, Tabasco</p>
        </div>
      </div>
    </footer>
  );
}
