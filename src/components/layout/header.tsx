"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
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
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-shell grid h-[70px] grid-cols-[1fr_auto] items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            onClick={(e) => handleNavClick("/", e)}
            className="logo-badge justify-self-start"
            aria-label={`${siteConfig.name}, ir al inicio`}
          >
            <Image
              src="/images/brand/dimaco-logo.png"
              width={110}
              height={50}
              alt={`Logotipo de ${siteConfig.name}`}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
          <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>


          <button
            type="button"
            className="icon-button mobile-menu-trigger justify-self-end"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu aria-hidden="true" size={24} />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
