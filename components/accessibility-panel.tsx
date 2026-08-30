"use client";

import { Accessibility, Check, Contrast, Languages, Minus, MoonStar, Plus, RotateCcw, X } from "lucide-react";
import { languages } from "@/data/translations";
import { useAccessibility } from "./accessibility-provider";

export function AccessibilityTrigger() {
  const { setPanelOpen } = useAccessibility();
  return <button className="accessibility-trigger" type="button" onClick={() => setPanelOpen(true)} aria-label="Open accessibility panel"><Accessibility size={22} aria-hidden="true" /><span>Accessibility</span></button>;
}

export function AccessibilityPanel() {
  const { panelOpen, setPanelOpen, textSize, setTextSize, highContrast, setHighContrast, simpleMode, setSimpleMode, reduceMotion, setReduceMotion, language, setLanguage, resetPreferences } = useAccessibility();
  if (!panelOpen) return null;
  const switchId = (name: string) => `switch-${name}`;
  return (
    <>
      <button aria-label="Close accessibility panel" className="panel-overlay" onClick={() => setPanelOpen(false)} />
      <aside className="accessibility-panel" aria-label="Accessibility settings" aria-modal="true" role="dialog">
        <div className="panel-heading"><div><p className="eyebrow">YOUR SETTINGS</p><h2>Accessibility</h2><p>Adjust the experience to suit you.</p></div><button type="button" className="close-button" onClick={() => setPanelOpen(false)} aria-label="Close"><X size={24} /></button></div>
        <div className="panel-section">
          <div className="setting-title"><span><Plus size={20} /> Text size</span><span className="setting-value">{textSize === "xlarge" ? "Extra large" : textSize[0].toUpperCase() + textSize.slice(1)}</span></div>
          <div className="size-controls" aria-label="Text size">
            <button type="button" onClick={() => setTextSize("normal")} className={textSize === "normal" ? "selected" : ""}><Minus size={18} /> Normal</button>
            <button type="button" onClick={() => setTextSize("large")} className={textSize === "large" ? "selected" : ""}>A+ Large</button>
            <button type="button" onClick={() => setTextSize("xlarge")} className={textSize === "xlarge" ? "selected" : ""}>A++</button>
          </div>
        </div>
        <div className="panel-section setting-list">
          <label className="setting-row" htmlFor={switchId("contrast")}><span className="setting-copy"><Contrast size={21} /><span><strong>High contrast</strong><small>Stronger text and borders</small></span></span><input id={switchId("contrast")} type="checkbox" checked={highContrast} onChange={(e) => setHighContrast(e.target.checked)} /></label>
          <label className="setting-row" htmlFor={switchId("simple")}><span className="setting-copy"><Check size={21} /><span><strong>Simple mode</strong><small>Fewer choices, clearer focus</small></span></span><input id={switchId("simple")} type="checkbox" checked={simpleMode} onChange={(e) => setSimpleMode(e.target.checked)} /></label>
          <label className="setting-row" htmlFor={switchId("motion")}><span className="setting-copy"><MoonStar size={21} /><span><strong>Reduce motion</strong><small>Minimise moving elements</small></span></span><input id={switchId("motion")} type="checkbox" checked={reduceMotion} onChange={(e) => setReduceMotion(e.target.checked)} /></label>
        </div>
        <div className="panel-section">
          <div className="setting-title"><span><Languages size={20} /> Language</span></div>
          <div className="language-options">{languages.map((item) => <button key={item.code} type="button" className={language === item.code ? "selected" : ""} onClick={() => setLanguage(item.code)}>{item.native}</button>)}</div>
          <p className="input-help">Official service names are kept as published.</p>
        </div>
        <button className="reset-button" type="button" onClick={resetPreferences}><RotateCcw size={18} /> Reset preferences</button>
      </aside>
    </>
  );
}
