"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogos } from "@/components/brand-logos";
import { NAV_LINKS } from "@/lib/data";
import { cn, scrollToId } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    scrollToId(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300",
        scrolled
          ? "border-b border-stone-200/80 bg-[#f7f5f1]/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[4.5rem] md:px-8"
        aria-label="Основна навигация"
      >
        <a
          href="#nachalo"
          onClick={(e) => {
            e.preventDefault();
            go("#nachalo");
          }}
          aria-label="Към началото — adrexio × Forèsta"
        >
          <BrandLogos size="sm" />
        </a>

        <ul className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(link.href);
                }}
                className="text-[13px] text-stone-600 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault();
              go("#kontakt");
            }}
            className="hidden rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Нека поговорим
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300/80 text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Затвори менюто" : "Отвори менюто"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 bg-[#f7f5f1] px-5 pt-8 transition-all duration-300 xl:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        hidden={!open}
      >
        <p className="mb-6 text-xs tracking-[0.14em] text-stone-500 uppercase">
          Проектно предложение
        </p>
        <ul className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(link.href);
                }}
                className="block border-b border-stone-200 py-4 text-lg text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#kontakt"
          onClick={(e) => {
            e.preventDefault();
            go("#kontakt");
          }}
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-ink px-5 py-3.5 text-sm font-medium text-white"
        >
          Нека поговорим
        </a>
      </div>
    </header>
  );
}
