"use client";

import { BotMessageSquare, ChevronDown, CircleAlert, LoaderCircle, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { translations, type Language } from "@/data/translations";
import { useAccessibility } from "./accessibility-provider";
import { ReadAloud } from "./read-aloud";

type Explanation = { simple: string; why: string; suggestion: string };

export function ExplainThis({ source, fallback }: { source: string; fallback: { simple: string; why: string } }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState<Explanation | null>(null);
  const [explanationLanguage, setExplanationLanguage] = useState<Language | null>(null);
  const [error, setError] = useState(false);
  const { language } = useAccessibility();
  const t = translations[language];
  async function requestExplanation() {
    if (loading || explanationLanguage === language) return;
    setLoading(true); setError(false);
    try {
      const response = await fetch("/api/explain", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: source, fallback, language, suggestion: t.explain.suggestion }) });
      if (!response.ok) throw new Error("Unavailable");
      setExplanation(await response.json());
      setExplanationLanguage(language);
    } catch {
      setError(true);
      setExplanation({ simple: fallback.simple, why: fallback.why, suggestion: t.explain.suggestion });
      setExplanationLanguage(language);
    } finally { setLoading(false); }
  }
  useEffect(() => { if (open && explanationLanguage !== language) void requestExplanation(); }, [language, open]);
  const currentExplanation = explanationLanguage === language ? explanation : null;
  return <section className="explain-this"><button type="button" className="explain-trigger" aria-expanded={open} onClick={() => setOpen((value) => !value)}><span><Sparkles size={19} /> {t.explain.button}</span><ChevronDown className={open ? "rotated" : ""} size={20} /></button>{open && <div className="explanation" aria-live="polite">{loading ? <div className="loading-state"><LoaderCircle className="spin" size={22} /> {t.explain.loading}</div> : currentExplanation && <><p className="demo-chip"><BotMessageSquare size={16} /> {t.explain.demo}</p><p className="instruction-source">“{source}”</p><h3>{t.explain.simple}</h3><p>{currentExplanation.simple}</p><h3>{t.explain.why}</h3><p>{currentExplanation.why}</p><h3>{t.explain.next}</h3><p>{currentExplanation.suggestion}</p>{error && <p className="fallback-note"><CircleAlert size={17} /> {t.explain.unavailable}</p>}<ReadAloud text={`${currentExplanation.simple} ${currentExplanation.why} ${currentExplanation.suggestion}`} /></>}</div>}</section>;
}
