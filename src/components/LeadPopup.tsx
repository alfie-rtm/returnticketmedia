"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface LeadPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function LeadPopup({ open, onClose }: LeadPopupProps) {
  const { t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-sm flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-lg p-12 max-w-[480px] w-[90%] relative text-center max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:w-full max-sm:max-w-full max-sm:rounded-t-xl max-sm:rounded-b-none max-sm:p-9">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-transparent border-none text-2xl cursor-pointer text-text-muted transition-colors hover:text-text"
          aria-label="Close"
        >
          &times;
        </button>

        <span className="block text-[0.75rem] uppercase tracking-widest font-medium text-accent mb-4">
          {t.popup.label}
        </span>
        <h2 className="text-2xl font-bold tracking-tight mb-2">
          {t.popup.heading}
        </h2>
        <p className="text-sm text-text-muted leading-relaxed max-w-[360px] mx-auto mb-7">
          {t.popup.sub}
        </p>

        <div className="text-left space-y-4 mb-6">
          <input
            type="text"
            placeholder={t.popup.name}
            className="w-full px-4 py-3.5 bg-bg border border-border rounded text-sm font-[inherit] transition-colors focus:outline-none focus:border-accent"
          />
          <input
            type="email"
            placeholder={t.popup.email}
            className="w-full px-4 py-3.5 bg-bg border border-border rounded text-sm font-[inherit] transition-colors focus:outline-none focus:border-accent"
          />
          <input
            type="text"
            placeholder={t.popup.company}
            className="w-full px-4 py-3.5 bg-bg border border-border rounded text-sm font-[inherit] transition-colors focus:outline-none focus:border-accent"
          />
          <textarea
            placeholder={t.popup.message}
            rows={3}
            className="w-full px-4 py-3.5 bg-bg border border-border rounded text-sm font-[inherit] transition-colors focus:outline-none focus:border-accent resize-vertical"
          />
        </div>

        <button
          onClick={onClose}
          className="w-full py-3.5 px-8 bg-accent text-bg-dark text-sm font-semibold tracking-wider uppercase border-none rounded cursor-pointer transition-colors hover:bg-accent-hover"
        >
          {t.popup.send}
        </button>
      </div>
    </div>
  );
}
