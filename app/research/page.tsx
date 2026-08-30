"use client";

import { ArrowDown, CheckCircle2, Quote } from "lucide-react";
import { useAccessibility } from "@/components/accessibility-provider";
import { translations } from "@/data/translations";

export default function ResearchPage() {
  const { language } = useAccessibility();
  const t = translations[language].research;
  return <div className="page inner-page research-page"><header className="page-header"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.description}</p></header><section className="research-intro"><article><h2>{t.targetTitle}</h2><p>{t.targetText}</p></article><article><h2>{t.problemTitle}</h2><p>{t.problemText}</p></article></section><section className="persona"><div className="persona-mark"><span>67</span><small>{t.years}</small></div><div><p className="eyebrow">{t.personaEyebrow}</p><h2>Meena</h2><p className="persona-summary"><Quote size={20} /> “{t.quote}”</p><dl>{t.labels.map((label, index) => <div key={label}><dt>{label}</dt><dd>{t.values[index]}</dd></div>)}</dl></div></section><p className="research-note">{t.note}</p><section className="journey-section"><div className="section-intro"><p className="eyebrow">{t.journeyEyebrow}</p><h2>{t.journeyTitle}</h2></div><div className="journey-comparison"><article className="before"><h3>{t.before}</h3>{t.beforeSteps.map((item) => <div key={item}><span>{item}</span><ArrowDown size={18} /></div>)}</article><article className="after"><h3>{t.after}</h3>{t.afterSteps.map((item, index) => <div key={item}><span>{index === t.afterSteps.length - 1 && <CheckCircle2 size={18} />} {item}</span>{index < t.afterSteps.length - 1 && <ArrowDown size={18} />}</div>)}</article></div></section></div>;
}
