"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-bg-dark text-white py-16 px-[var(--section-px)] pb-8 max-md:pb-20">
      <div className="max-w-[var(--max-w)] mx-auto">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-12 max-md:grid-cols-2 max-md:gap-6 max-[480px]:grid-cols-1">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-3 select-none">
              <span className="text-[13px] font-black tracking-[0.08em] uppercase text-white">
                RETURN
              </span>
              <span className="text-[13px] font-black tracking-[0.08em] uppercase text-white">
                TICKET
              </span>
            </div>
            <p className="text-sm text-[#999] leading-relaxed max-w-[280px]">
              {t.footer.tagline}
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-[0.7rem] uppercase tracking-widest text-accent mb-4 font-medium">
              {t.footer.pages}
            </h4>
            {Object.entries(t.nav).map(([key, label]) => (
              <a
                key={key}
                href={key === "home" ? "/" : `/${key}`}
                className="block text-[#999] text-sm py-0.5 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[0.7rem] uppercase tracking-widest text-accent mb-4 font-medium">
              {t.footer.servicesHeading}
            </h4>
            {t.services.items.map((svc) => (
              <a
                key={svc.num}
                href="/services"
                className="block text-[#999] text-sm py-0.5 transition-colors hover:text-white"
              >
                {svc.title}
              </a>
            ))}
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[0.7rem] uppercase tracking-widest text-accent mb-4 font-medium">
              {t.footer.connect}
            </h4>
            <a
              href="mailto:hello@returnticketmedia.com"
              className="block text-[#999] text-sm py-0.5 transition-colors hover:text-white"
            >
              hello@returnticketmedia.com
            </a>
            <a
              href="#"
              className="block text-[#999] text-sm py-0.5 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="block text-[#999] text-sm py-0.5 transition-colors hover:text-white"
            >
              Instagram
            </a>
            <a
              href="#"
              className="block text-[#999] text-sm py-0.5 transition-colors hover:text-white"
            >
              TikTok
            </a>
          </div>
        </div>

        <div className="border-t border-border-dark pt-6 flex justify-between text-xs text-[#666]">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.location}</span>
        </div>
      </div>
    </footer>
  );
}
