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
        <p className="text-[clamp(1rem,1.2vw,1.125rem)] text-text-muted leading-relaxed max-w-[580px] mb-10 animate-fade-up-2">
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
            href="#cases"
            className="inline-block px-8 py-3.5 text-[13px] font-semibold tracking-wider uppercase rounded border-[1.5px] border-text text-text bg-transparent no-underline transition-colors hover:border-accent hover:text-accent"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
        
        {/* Trust badges */}
        <div className="mt-16 pt-10 border-t border-border animate-fade-up-3">
          <p className="text-xs uppercase tracking-widest text-text-muted mb-4">Trusted by</p>
          <div className="flex flex-wrap gap-8 items-center opacity-50">
            <span className="text-lg font-semibold">Suhit</span>
            <span className="text-lg font-semibold">Timothy Almut</span>
            <span className="text-lg font-semibold">Tech in Asia</span>
          </div>
        </div>
      </section>

      {/* ===== THE RTM METHOD ===== */}
      <section className="py-[var(--section-py)] px-[var(--section-px)] bg-bg-alt">
        <div className="max-w-[var(--max-w)] mx-auto">
          <span className="reveal block text-xs uppercase tracking-[0.12em] font-medium text-accent mb-4">
            {t.method.label}
          </span>
          <h2 className="reveal text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-5 max-w-[600px]">
            {t.method.heading}
          </h2>
          <p className="reveal text-[clamp(1rem,1.2vw,1.125rem)] text-text-muted leading-relaxed max-w-[560px] mb-14">
            {t.method.sub}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.method.steps.map((step, i) => (
              <div key={i} className="reveal bg-white p-8 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-lg mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-[var(--section-py)] px-[var(--section-px)] max-w-[var(--max-w)] mx-auto">
        <span className="reveal block text-xs uppercase tracking-[0.12em] font-medium text-accent mb-4">
          {t.services.label}
        </span>
        <h2 className="reveal text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-5">
          {t.services.heading}
        </h2>
        <p className="reveal text-[clamp(1rem,1.2vw,1.125rem)] text-text-muted leading-relaxed max-w-[560px] mb-10">
          {t.services.sub}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.services.items.map((svc) => (
            <div
              key={svc.num}
              className="reveal group p-8 border border-border rounded-lg hover:border-accent transition-colors"
            >
              <span className="text-xs text-accent font-semibold tracking-widest mb-4 block">
                {svc.num}
              </span>
              <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-semibold tracking-tight mb-2">
                {svc.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section id="cases" className="py-[var(--section-py)] px-[var(--section-px)] bg-bg-dark">
        <div className="max-w-[var(--max-w)] mx-auto">
          <span className="reveal block text-xs uppercase tracking-[0.12em] font-medium text-accent mb-4">
            {t.cases.label}
          </span>
          <h2 className="reveal text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-5 text-white">
            {t.cases.heading}
          </h2>
          <p className="reveal text-[clamp(1rem,1.2vw,1.125rem)] text-[#999] leading-relaxed max-w-[560px] mb-14">
            {t.cases.sub}
          </p>
          
          <div className="space-y-6">
            {t.cases.items.map((item, i) => (
              <div key={i} className="reveal bg-[#222] rounded-lg p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-8 items-center">
                  <div>
                    <span className="text-xs text-accent uppercase tracking-widest font-medium mb-3 block">
                      {item.client}
                    </span>
                    <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-[#999] leading-relaxed mb-4">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, j) => (
                        <span key={j} className="text-xs px-3 py-1 bg-[#333] rounded-full text-[#aaa]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-accent tracking-tight">
                      {item.stat}
                    </div>
                    <div className="text-sm text-[#666]">{item.statLabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CREATOR NETWORK ===== */}
      <section className="py-[var(--section-py)] px-[var(--section-px)] max-w-[var(--max-w)] mx-auto">
        <span className="reveal block text-xs uppercase tracking-[0.12em] font-medium text-accent mb-4">
          {t.creators.label}
        </span>
        <h2 className="reveal text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-5">
          {t.creators.heading}
        </h2>
        <p className="reveal text-[clamp(1rem,1.2vw,1.125rem)] text-text-muted leading-relaxed max-w-[560px] mb-10">
          {t.creators.sub}
        </p>
        
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.creators.categories.map((cat, i) => (
            <div key={i} className="aspect-square bg-bg-alt rounded-lg p-6 flex flex-col justify-between group hover:bg-accent transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-text/10 group-hover:bg-bg-dark/20 flex items-center justify-center">
                <span className="text-lg">{cat.icon}</span>
              </div>
              <div>
                <div className="text-2xl font-bold group-hover:text-bg-dark">{cat.count}</div>
                <div className="text-sm text-text-muted group-hover:text-bg-dark/70">{cat.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="py-[var(--section-py)] px-[var(--section-px)] bg-bg-alt">
        <div className="max-w-[var(--max-w)] mx-auto">
          <div className="reveal grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[clamp(40px,6vw,80px)] items-center">
            <div className="aspect-[4/5] bg-bg rounded-lg relative overflow-hidden">
              {/* Placeholder for Alfie's photo */}
              <div className="absolute inset-0 flex items-center justify-center text-text-muted">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-accent/20 mx-auto mb-4 flex items-center justify-center text-4xl">
                    👤
                  </div>
                  <p className="text-sm">Photo: Alfie Richards</p>
                </div>
              </div>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-[0.12em] font-medium text-accent mb-4">
                {t.founder.label}
              </span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-5">
                {t.founder.heading}
              </h2>
              <div className="space-y-4 text-[clamp(1rem,1.2vw,1.125rem)] text-text-muted leading-relaxed mb-8">
                {t.founder.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="flex flex-wrap gap-6">
                {t.founder.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-accent">{stat.value}</div>
                    <div className="text-xs text-text-muted uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-[var(--section-py)] px-[var(--section-px)] max-w-[var(--max-w)] mx-auto">
        <span className="reveal block text-xs uppercase tracking-[0.12em] font-medium text-accent mb-4">
          {t.faq.label}
        </span>
        <h2 className="reveal text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.1] mb-10">
          {t.faq.heading}
        </h2>
        
        <div className="space-y-4">
          {t.faq.items.map((item, i) => (
            <div key={i} className="reveal border-b border-border pb-6">
              <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
              <p className="text-text-muted leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

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
