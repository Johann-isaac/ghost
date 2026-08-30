"use client";

import { Accessibility, BadgeCheck, CircleUserRound, Eye, HandHeart, Route, ShieldCheck, Undo2 } from "lucide-react";
import { useAccessibility } from "@/components/accessibility-provider";
import { translations } from "@/data/translations";

const icons = [CircleUserRound, Eye, Route, Accessibility, HandHeart, ShieldCheck, BadgeCheck, Undo2];

export default function PrinciplesPage() {
  const { language } = useAccessibility();
  const t = translations[language].principles;
  return <div className="page inner-page"><header className="page-header"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.description}</p></header><section className="principles-grid">{t.items.map(([title, text], index) => { const Icon = icons[index]; return <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><Icon size={28} /><h2>{title}</h2><p>{text}</p></article>; })}</section></div>;
}
