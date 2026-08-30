"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Language } from "@/data/translations";

export type TextSize = "normal" | "large" | "xlarge";

type AccessibilityState = {
  textSize: TextSize;
  setTextSize: (value: TextSize) => void;
  highContrast: boolean;
  setHighContrast: (value: boolean) => void;
  simpleMode: boolean;
  setSimpleMode: (value: boolean) => void;
  reduceMotion: boolean;
  setReduceMotion: (value: boolean) => void;
  language: Language;
  setLanguage: (value: Language) => void;
  panelOpen: boolean;
  setPanelOpen: (value: boolean) => void;
  resetPreferences: () => void;
};

const AccessibilityContext = createContext<AccessibilityState | null>(null);

const defaults = { textSize: "normal" as TextSize, highContrast: false, simpleMode: false, reduceMotion: false, language: "en" as Language };

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [textSize, setTextSize] = useState<TextSize>(defaults.textSize);
  const [highContrast, setHighContrast] = useState(defaults.highContrast);
  const [simpleMode, setSimpleMode] = useState(defaults.simpleMode);
  const [reduceMotion, setReduceMotion] = useState(defaults.reduceMotion);
  const [language, setLanguage] = useState<Language>(defaults.language);
  const [panelOpen, setPanelOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sahay-preferences");
      if (saved) {
        const value = JSON.parse(saved) as Partial<typeof defaults>;
        if (value.textSize === "normal" || value.textSize === "large" || value.textSize === "xlarge") setTextSize(value.textSize);
        if (typeof value.highContrast === "boolean") setHighContrast(value.highContrast);
        if (typeof value.simpleMode === "boolean") setSimpleMode(value.simpleMode);
        if (typeof value.reduceMotion === "boolean") setReduceMotion(value.reduceMotion);
        if (value.language === "en" || value.language === "ta" || value.language === "hi") setLanguage(value.language);
      }
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.textSize = textSize;
    root.dataset.highContrast = String(highContrast);
    root.dataset.simpleMode = String(simpleMode);
    root.dataset.reduceMotion = String(reduceMotion);
    root.lang = language;
    if (hydrated) localStorage.setItem("sahay-preferences", JSON.stringify({ textSize, highContrast, simpleMode, reduceMotion, language }));
  }, [textSize, highContrast, simpleMode, reduceMotion, language, hydrated]);

  useEffect(() => {
    document.body.style.overflow = panelOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [panelOpen]);

  const value = useMemo(() => ({
    textSize, setTextSize, highContrast, setHighContrast, simpleMode, setSimpleMode,
    reduceMotion, setReduceMotion, language, setLanguage, panelOpen, setPanelOpen,
    resetPreferences: () => {
      setTextSize(defaults.textSize); setHighContrast(false); setSimpleMode(false); setReduceMotion(false); setLanguage("en");
      localStorage.removeItem("sahay-preferences");
    },
  }), [textSize, highContrast, simpleMode, reduceMotion, language, panelOpen]);

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
}

export function useAccessibility() {
  const value = useContext(AccessibilityContext);
  if (!value) throw new Error("useAccessibility must be used within AccessibilityProvider");
  return value;
}
