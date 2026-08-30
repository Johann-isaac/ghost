"use client";

import { CheckCircle2, Circle, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { translations } from "@/data/translations";
import { useAccessibility } from "./accessibility-provider";

export function AuditChecklist() {
  const { language } = useAccessibility();
  const t = translations[language];
  const auditSections = t.audit.sections.map(([title, items]) => ({ title, items }));
  const allItems = auditSections.flatMap((section) => section.items);
  const [checked, setChecked] = useState<string[]>([]);
  const score = useMemo(() => Math.round((checked.length / allItems.length) * 100), [checked]);
  const itemId = (sectionIndex: number, itemIndex: number) => `${sectionIndex}-${itemIndex}`;
  const toggle = (item: string) => setChecked((current) => current.includes(item) ? current.filter((value) => value !== item) : [...current, item]);
  const scoreDescription = t.audit.scoreDescription.replace("{checked}", String(checked.length)).replace("{total}", String(allItems.length));
  return <div className="audit"><section className="audit-score"><div className="score-ring" style={{ "--score": `${score * 3.6}deg` } as React.CSSProperties}><span>{score}%</span></div><div><p className="eyebrow">{t.audit.internal}</p><h2>{t.audit.score}</h2><p>{scoreDescription}</p><button type="button" className="text-link" onClick={() => setChecked([])}><RotateCcw size={17} /> {t.audit.clear}</button></div></section><div className="audit-groups">{auditSections.map((section, sectionIndex) => <section className="audit-group" key={sectionIndex}><h2>{section.title}</h2>{section.items.map((item, itemIndex) => { const id = itemId(sectionIndex, itemIndex); const isChecked = checked.includes(id); return <label key={id} className={isChecked ? "audit-item checked" : "audit-item"}><input type="checkbox" checked={isChecked} onChange={() => toggle(id)} /><span className="custom-check" aria-hidden="true">{isChecked ? <CheckCircle2 size={21} /> : <Circle size={21} />}</span><span>{item}</span></label>; })}</section>)}</div></div>;
}
