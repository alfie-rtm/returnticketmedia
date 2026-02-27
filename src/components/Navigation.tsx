"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface NavigationProps {
  onOpenPopup: () => void;
}

export default function Navigation({ onOpenPopup }: NavigationProps) {
  const { lang, t, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[var(--section-px)] py-5 transition-all duration-400 border-b ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-border shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <a href="/" className="flex flex-col leading-none select-none">
          <span className="text-[15px] font-black tracking-[0.08em] uppercase">
            RETURN
          </span>
          <span className="text-[15px] font-black tracking-[0.08em] uppercase">
            TICKET
          </span>
        </a>

        <div className="flex items-center gap-5">
          {/* Language toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase cursor-pointer transition-colors hover:text-accent"
          >
            <span className={lang === "en" ? "text-text" : "text-text-light"}>
              EN
            </span>
            <span className="text-border">/</span>
            <span className={lang === "zh" ? "text-text" : "text-text-light"}>
              ZH
            </span>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-none"
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-text transition-transform" />
            <span className="block w-6 h-0.5 bg-text transition-opacity" />
            <span className="block w-6 h-0.5 bg-text transition-transform" />
          </button>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-bg-dark flex flex-col justify-center items-center transition-opacity duration-400 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-[var(--section-px)] bg-transparent border-none text-white text-3xl cursor-pointer p-2"
          aria-label="Close menu"
        >
          &times;
        </button>

        <nav className="flex flex-col items-center gap-6">
          {Object.entries(t.nav).map(([key, label]) => (
            <a
              key={key}
              href={key === "home" ? "/" : `/${key}`}
              onClick={() => setMenuOpen(false)}
              className="text-white text-[clamp(1.5rem,4vw,2.5rem)] font-semibold tracking-tight transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => {
            setMenuOpen(false);
            onOpenPopup();
          }}
          className="mt-10 px-9 py-3.5 bg-accent text-bg-dark text-sm font-semibold tracking-wider uppercase border-none rounded cursor-pointer transition-colors hover:bg-accent-hover"
        >
          {t.hero.cta}
        </button>

        <div className="absolute bottom-10 flex gap-6 text-xs tracking-wider">
          <a href="#" className="text-text-light transition-colors hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="text-text-light transition-colors hover:text-white">
            Instagram
          </a>
          <a href="#" className="text-text-light transition-colors hover:text-white">
            TikTok
          </a>
        </div>
      </div>
    </>
  );
}
