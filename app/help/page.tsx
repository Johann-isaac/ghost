"use client";

import { CheckCircle2, ShieldAlert } from "lucide-react";
import { HelpAssistant } from "@/components/help-assistant";
import { useAccessibility } from "@/components/accessibility-provider";
import { translations } from "@/data/translations";

export default function HelpPage() {
  const { language } = useAccessibility();
  const t = translations[language];
  const copy = t.help.page;
  return <div className="page inner-page help-page"><header className="page-header"><p className="eyebrow">{copy.eyebrow}</p><h1>{copy.title}</h1><p>{copy.description}</p></header><HelpAssistant /><section id="safety" className="safety-guide"><div><p className="eyebrow warm"><ShieldAlert size={16} /> {copy.safetyEyebrow}</p><h2>{copy.safetyTitle}</h2><p>{copy.safetyDescription}</p></div><ul>{copy.safetyItems.map((item) => <li key={item}><CheckCircle2 /> {item}</li>)}</ul></section></div>;
}
