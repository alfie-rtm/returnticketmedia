"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import LeadPopup from "@/components/LeadPopup";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    el.querySelectorAll(".reveal").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const { t } = useLanguage();
  const [popupOpen, setPopupOpen] = useState(false);
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      <Navigation onOpenPopup={() => setPopupOpen(true)} />

      {/* ===== HERO ===== */}
      <section className="min-h-screen flex flex-col justify-center px-[var(--section-px)] pt-30 pb-20 max-w-[var(--max-w)] mx-auto">
        <span className="text-xs uppercase tracking-[0.12em] font-medium text-accent mb-6 animate-fade-up">
          {t.hero.label}
        </span>
        <h1 className="text-[clamp(2.5rem,6.5vw,5rem)] font-extrabold tracking-tight leading-[1.08] mb-7 max-w-[16ch] animate-fade-up-1">
          {t.hero.heading}
        </h1>
        <p className="text-[clamp(1rem,1.2vw,1.125rem)] text-text-muted leading-relaxed max-w-[520px] mb-10 animate-fade-up-2">
          {t.hero.sub}
        </p>
        <div className="flex gap-3.5 flex-wrap animate-fade-up-3">
          <button
            onClick={() => setPopupOpen(true)}
            className="inline-block px-8 py-3.5 text-[13px] font-semibold tracking-wider uppercase rounded bg-accent text-bg-dark border-none cursor-pointer transition-colors hover:bg-accent-hover"
          >
            {t.hero.cta}
          </button>
          <a
            href="/cases"
            className="inline-block px-8 py-3.5 text-[13px] font-semibold tracking-wider uppercase rounded border-[1.5px] border-text text-text bg-transparent no-underline transition-colors hover:border-accent hover:text-accent"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </section>

      {/* ===== METRICS ===== */}
      <div className="grid grid-cols-4 border-t border-b border-border max-sm:grid-cols-2">
        {t.metrics.map((m, i) => (
          <div
            key={i}
            className="reveal py-12 px-6 text-center relative after:content-[''] after:absolute after:right-0 after:top-[20%] after:h-[60%] after:w-px after:bg-border last:after:hidden max-sm:[&:nth-child(2)]:after:hidden"
          >
            <div className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-accent tracking-tight mb-2">
              {m.value}
            </div>
            <div className="text-xs uppercase tracking-widest text-text-muted font-medium">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* ===== SERVICES ===== */}
      <section className="py-[var(--section-py)] px-[var(--section-px)] max-w-[var(--max-w)] mx-auto">
        <span className="reveal block text-xs uppercase tracking-[0.12em] font-medium text-accent mb-4">
          {t.services.label}
        </span>
        <h2 className="reveal text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-5">
          {t.services.heading}
        </h2>
        <div className="mt-8">
          {t.services.items.map((svc) => (
            <a
              key={svc.num}
              href="/services"
              className="reveal group grid grid-cols-[60px_1fr] gap-4 items-start py-7 border-b border-border cursor-pointer transition-[padding] duration-300 no-underline text-inherit hover:pl-4"
            >
              <span className="text-xs text-accent font-semibold tracking-widest pt-1.5">
                {svc.num}
              </span>
              <div>
                <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold tracking-tight mb-1 transition-colors group-hover:text-accent">
                  {svc.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="py-[var(--section-py)] px-[var(--section-px)] max-w-[var(--max-w)] mx-auto">
        <div className="reveal grid grid-cols-[1.3fr_0.7fr] gap-[clamp(40px,6vw,80px)] items-center max-md:grid-cols-1">
          <div>
            <span className="block text-xs uppercase tracking-[0.12em] font-medium text-accent mb-4">
              {t.founder.label}
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-5">
              {t.founder.heading}
            </h2>
            <p className="text-[clamp(1rem,1.2vw,1.125rem)] text-text-muted leading-relaxed max-w-[560px] mb-6">
              {t.founder.sub}
            </p>
            <a
              href="/about"
              className="text-accent text-sm font-medium tracking-wide inline-block relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-accent after:transition-[width] after:duration-300 hover:after:w-full no-underline"
            >
              {t.founder.link} &rarr;
            </a>
          </div>
          <div className="aspect-square bg-bg-alt rounded-full relative overflow-hidden">
            <div className="absolute inset-[15%] border border-accent rounded-full opacity-40" />
          </div>
        </div>
      </section>

      {/* ===== SELECTED WORK ===== */}
      <div className="bg-bg-alt py-[var(--section-py)] px-[var(--section-px)]">
        <div className="max-w-[var(--max-w)] mx-auto">
          <span className="reveal block text-xs uppercase tracking-[0.12em] font-medium text-accent mb-4">
            {t.work.label}
          </span>
          <h2 className="reveal text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-5">
            {t.work.heading}
          </h2>
          <div className="reveal grid grid-cols-3 gap-0.5 mt-10 max-md:grid-cols-1">
            {t.work.items.map((item, i) => (
              <a
                key={i}
                href="/cases"
                className="group bg-white p-10 px-8 cursor-pointer transition-colors no-underline text-inherit hover:bg-border"
              >
                <span className="block text-[0.7rem] uppercase tracking-widest text-accent font-medium mb-3">
                  {item.cat}
                </span>
                <h3 className="text-xl font-semibold mb-4 leading-snug">
                  {item.title}
                </h3>
                <div className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold text-accent tracking-tight mb-3">
                  {item.stat}
                </div>
                <span className="text-xs text-text-muted tracking-wider transition-colors group-hover:text-accent">
                  {item.link} &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CTA BANNER ===== */}
      <div className="bg-bg-dark py-[var(--section-py)] px-[var(--section-px)]">
        <div className="reveal max-w-[var(--max-w)] mx-auto text-center">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-5 text-white max-w-[600px] mx-auto">
            {t.ctaBanner.heading}
          </h2>
          <p className="text-[clamp(1rem,1.2vw,1.125rem)] text-[#999] leading-relaxed max-w-[440px] mx-auto mb-9">
            {t.ctaBanner.sub}
          </p>
          <button
            onClick={() => setPopupOpen(true)}
            className="inline-block px-8 py-3.5 text-[13px] font-semibold tracking-wider uppercase rounded bg-accent text-bg-dark border-none cursor-pointer transition-colors hover:bg-accent-hover"
          >
            {t.ctaBanner.cta}
          </button>
        </div>
      </div>

      <Footer />
      <BottomNav onOpenPopup={() => setPopupOpen(true)} />
      <LeadPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
}
