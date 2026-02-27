"use client";

import { useLanguage } from "@/context/LanguageContext";

interface BottomNavProps {
  onOpenPopup: () => void;
}

export default function BottomNav({ onOpenPopup }: BottomNavProps) {
  const { t } = useLanguage();

  const items = [
    {
      label: t.bottomNav.home,
      href: "/",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1.5]">
          <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
        </svg>
      ),
      active: true,
    },
    {
      label: t.bottomNav.about,
      href: "/about",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1.5]">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
      ),
    },
    {
      label: t.bottomNav.services,
      href: "/services",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1.5]">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      ),
    },
    {
      label: t.bottomNav.work,
      href: "/cases",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1.5]">
          <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="hidden max-md:flex fixed bottom-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-xl border-t border-border py-1.5 px-2 pb-2.5 justify-around items-center">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`flex flex-col items-center gap-0.5 text-[10px] tracking-wide p-1 px-2 transition-colors no-underline ${
            item.active ? "text-accent" : "text-text-light"
          }`}
        >
          {item.icon}
          {item.label}
        </a>
      ))}
      <button
        onClick={onOpenPopup}
        className="bg-accent text-bg-dark rounded-full py-2 px-4 text-[11px] font-semibold tracking-wide border-none cursor-pointer"
      >
        {t.bottomNav.cta}
      </button>
    </div>
  );
}
