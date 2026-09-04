"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
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
              onClick={onClose}
              tabIndex={open ? 0 : -1}
              className="mobile-nav-link"
            >
              <span className="text-xs text-[var(--color-orange-light)]">0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/#contacto" onClick={onClose} tabIndex={open ? 0 : -1} className="button-primary mt-8 w-full">
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
