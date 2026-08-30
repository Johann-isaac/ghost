"use client";

import { Accessibility, Check, Contrast, Languages, Minus, MoonStar, Plus, RotateCcw, X } from "lucide-react";
import { languages, translations } from "@/data/translations";
import { useAccessibility } from "./accessibility-provider";

export function AccessibilityTrigger() {
  const { language, setPanelOpen } = useAccessibility();
  const t = translations[language];
  return <button className="accessibility-trigger" type="button" onClick={() => setPanelOpen(true)} aria-label={t.panel.open}><Accessibility size={22} aria-hidden="true" /><span>{t.panel.trigger}</span></button>;
}

export function AccessibilityPanel() {
  const { panelOpen, setPanelOpen, textSize, setTextSize, highContrast, setHighContrast, simpleMode, setSimpleMode, reduceMotion, setReduceMotion, language, setLanguage, resetPreferences } = useAccessibility();
  const t = translations[language];
  if (!panelOpen) return null;
  const switchId = (name: string) => `switch-${name}`;
  return (
    <>
      <button aria-label={t.panel.close} className="panel-overlay" onClick={() => setPanelOpen(false)} />
      <aside className="accessibility-panel" aria-label={t.panel.settings} aria-modal="true" role="dialog">
        <div className="panel-heading"><div><p className="eyebrow">{t.panel.eyebrow}</p><h2>{t.panel.title}</h2><p>{t.panel.description}</p></div><button type="button" className="close-button" onClick={() => setPanelOpen(false)} aria-label={t.panel.close}><X size={24} /></button></div>
        <div className="panel-section">
          <div className="setting-title"><span><Plus size={20} /> {t.panel.textSize}</span><span className="setting-value">{textSize === "normal" ? t.panel.normal : textSize === "large" ? t.panel.large : t.panel.extraLarge}</span></div>
          <div className="size-controls" aria-label={t.panel.textSize}>
            <button type="button" onClick={() => setTextSize("normal")} className={textSize === "normal" ? "selected" : ""}><Minus size={18} /> {t.panel.normal}</button>
            <button type="button" onClick={() => setTextSize("large")} className={textSize === "large" ? "selected" : ""}>A+ {t.panel.large}</button>
            <button type="button" onClick={() => setTextSize("xlarge")} className={textSize === "xlarge" ? "selected" : ""}>A++ {t.panel.extraLarge}</button>
          </div>
        </div>
        <div className="panel-section setting-list">
          <label className="setting-row" htmlFor={switchId("contrast")}><span className="setting-copy"><Contrast size={21} /><span><strong>{t.panel.highContrast}</strong><small>{t.panel.highContrastDescription}</small></span></span><input id={switchId("contrast")} type="checkbox" checked={highContrast} onChange={(e) => setHighContrast(e.target.checked)} /></label>
          <label className="setting-row" htmlFor={switchId("simple")}><span className="setting-copy"><Check size={21} /><span><strong>{t.panel.simpleMode}</strong><small>{t.panel.simpleModeDescription}</small></span></span><input id={switchId("simple")} type="checkbox" checked={simpleMode} onChange={(e) => setSimpleMode(e.target.checked)} /></label>
          <label className="setting-row" htmlFor={switchId("motion")}><span className="setting-copy"><MoonStar size={21} /><span><strong>{t.panel.reduceMotion}</strong><small>{t.panel.reduceMotionDescription}</small></span></span><input id={switchId("motion")} type="checkbox" checked={reduceMotion} onChange={(e) => setReduceMotion(e.target.checked)} /></label>
        </div>
        <div className="panel-section">
          <div className="setting-title"><span><Languages size={20} /> {t.panel.language}</span></div>
          <div className="language-options">{languages.map((item) => <button key={item.code} type="button" className={language === item.code ? "selected" : ""} onClick={() => setLanguage(item.code)}>{item.native}</button>)}</div>
          <p className="input-help">{t.panel.officialNames}</p>
        </div>
        <button className="reset-button" type="button" onClick={resetPreferences}><RotateCcw size={18} /> {t.panel.reset}</button>
      </aside>
    </>
  );
}
