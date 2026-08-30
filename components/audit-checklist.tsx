"use client";

import { CheckCircle2, Circle, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

const auditSections = [
  { title: "Perceivable", items: ["Text has sufficient contrast", "Text can be resized", "Images have meaningful alt text", "Information is not communicated using colour alone", "Important content has text alternatives"] },
  { title: "Operable", items: ["Website works with a keyboard", "Focus indicators are visible", "There are no keyboard traps", "Buttons have sufficiently large targets", "Navigation is consistent", "Motion can be reduced"] },
  { title: "Understandable", items: ["Language is simple", "Instructions are clear", "Forms have labels", "Error messages explain the problem", "Navigation is predictable"] },
  { title: "Robust", items: ["Semantic HTML is used", "Screen readers can understand the content", "Buttons have meaningful names", "ARIA is used appropriately", "Website works across common browsers"] },
];
const allItems = auditSections.flatMap((section) => section.items);

export function AuditChecklist() {
  const [checked, setChecked] = useState<string[]>([]);
  const score = useMemo(() => Math.round((checked.length / allItems.length) * 100), [checked]);
  const toggle = (item: string) => setChecked((current) => current.includes(item) ? current.filter((value) => value !== item) : [...current, item]);
  return <div className="audit"><section className="audit-score"><div className="score-ring" style={{ "--score": `${score * 3.6}deg` } as React.CSSProperties}><span>{score}%</span></div><div><p className="eyebrow">SAHAY INTERNAL ACCESSIBILITY AUDIT</p><h2>Accessibility score</h2><p>{checked.length} of {allItems.length} checks reviewed. This is a working team checklist, not an official certification.</p><button type="button" className="text-link" onClick={() => setChecked([])}><RotateCcw size={17} /> Clear checks</button></div></section><div className="audit-groups">{auditSections.map((section) => <section className="audit-group" key={section.title}><h2>{section.title}</h2>{section.items.map((item) => { const isChecked = checked.includes(item); return <label key={item} className={isChecked ? "audit-item checked" : "audit-item"}><input type="checkbox" checked={isChecked} onChange={() => toggle(item)} /><span className="custom-check" aria-hidden="true">{isChecked ? <CheckCircle2 size={21} /> : <Circle size={21} />}</span><span>{item}</span></label>; })}</section>)}</div></div>;
}
