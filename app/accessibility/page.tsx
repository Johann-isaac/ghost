"use client";

import Link from "next/link";
import { Check, CircleGauge, Contrast, Languages, MousePointer2, Volume2 } from "lucide-react";
import { useAccessibility } from "@/components/accessibility-provider";
import { languages, translations } from "@/data/translations";

export default function AccessibilityPage() {
  const { textSize, setTextSize, highContrast, setHighContrast, simpleMode, setSimpleMode, reduceMotion, setReduceMotion, language, setLanguage } = useAccessibility();
  const t = translations[language];
  const features = [
    { icon: CircleGauge, title: t.accessPage.featureTitles[0], text: t.accessPage.featureTexts[0], control: <div className="inline-choice">{(["normal", "large", "xlarge"] as const).map((value) => <button type="button" className={textSize === value ? "selected" : ""} onClick={() => setTextSize(value)} key={value}>{value === "xlarge" ? "A++" : value === "large" ? "A+" : "A"}</button>)}</div> },
    { icon: Contrast, title: t.accessPage.featureTitles[1], text: t.accessPage.featureTexts[1], control: <button type="button" className={highContrast ? "toggle-button selected" : "toggle-button"} onClick={() => setHighContrast(!highContrast)}>{highContrast ? t.panel.on : t.panel.off}</button> },
    { icon: MousePointer2, title: t.accessPage.featureTitles[2], text: t.accessPage.featureTexts[2], control: <button type="button" className={simpleMode ? "toggle-button selected" : "toggle-button"} onClick={() => setSimpleMode(!simpleMode)}>{simpleMode ? t.panel.on : t.panel.off}</button> },
    { icon: Volume2, title: t.accessPage.featureTitles[3], text: t.accessPage.featureTexts[3], control: <span className="status-label">{t.panel.available}</span> },
    { icon: CircleGauge, title: t.accessPage.featureTitles[4], text: t.accessPage.featureTexts[4], control: <button type="button" className={reduceMotion ? "toggle-button selected" : "toggle-button"} onClick={() => setReduceMotion(!reduceMotion)}>{reduceMotion ? t.panel.on : t.panel.off}</button> },
    { icon: Languages, title: t.accessPage.featureTitles[5], text: t.accessPage.featureTexts[5], control: <select aria-label={t.panel.language} value={language} onChange={(e) => setLanguage(e.target.value as typeof language)}>{languages.map((item) => <option value={item.code} key={item.code}>{item.native}</option>)}</select> },
  ];
  return <div className="page inner-page"><header className="page-header"><p className="eyebrow">{t.accessPage.eyebrow}</p><h1>{t.accessPage.title}</h1><p>{t.accessPage.description}</p></header><section className="accessibility-grid">{features.map(({ icon: Icon, title, text, control }) => <article key={title} className="accessibility-card"><Icon size={28} /><h2>{title}</h2><p>{text}</p>{control}</article>)}</section><section className="prompt-docs"><div><p className="eyebrow">{t.accessPage.promptEyebrow}</p><h2>{t.accessPage.promptTitle}</h2><p>{t.accessPage.promptDescription}</p></div><div className="prompt-list">{t.accessPage.prompts.map(([title, prompt]) => <article key={title}><h3>{title}</h3><p><strong>{t.accessPage.promptPrefix}</strong> {prompt}</p><small><Check size={16} /> {t.accessPage.consideration}</small></article>)}</div></section><div className="centered-action"><Link href="/audit" className="primary-button">{t.accessPage.auditLink}</Link></div></div>;
}
