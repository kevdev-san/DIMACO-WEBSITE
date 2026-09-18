"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    onClose();
    if (pathname === "/") {
      if (href === "/" || href === "/#inicio") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.location.hash) {
          window.history.pushState(null, "", "/");
        }
        return;
      }
      if (href.startsWith("/#")) {
        const targetId = href.replace("/#", "");
        const element = document.getElementById(targetId);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
          return;
        }
      }
    } else if (pathname === "/catalogo" && href === "/catalogo") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      id="mobile-navigation"
      aria-hidden={!open}
      className={`mobile-menu ${open ? "is-open" : ""}`}
    >
      <div className="mobile-menu-panel">
        <div className="flex items-center justify-between border-b border-white/15 pb-5">
          <span className="text-sm font-bold tracking-[0.18em] text-white">NAVEGACIÓN</span>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Cerrar menú">
            <X aria-hidden="true" size={22} />
          </button>
        </div>
        <nav aria-label="Navegación móvil" className="mt-5 flex flex-col">
          {siteConfig.navigation.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(item.href, e)}
              tabIndex={open ? 0 : -1}
              className="mobile-nav-link"
            >
              <span className="text-xs text-[var(--color-orange-light)]">0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contacto"
          onClick={(e) => handleNavClick("/#contacto", e)}
          tabIndex={open ? 0 : -1}
          className="button-primary mt-8 w-full"
        >
          Solicitar cotización
        </Link>


      </div>
      <button
        type="button"
        tabIndex={open ? 0 : -1}
        className="mobile-menu-backdrop"
        onClick={onClose}
        aria-label="Cerrar menú"
      />
    </div>
  );
}
