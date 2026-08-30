"use client";

import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, UsersRound } from "lucide-react";
import { useAccessibility } from "@/components/accessibility-provider";
import { translations } from "@/data/translations";

const icons = [HeartHandshake, UsersRound, ShieldCheck];

export default function AboutPage() {
  const { language } = useAccessibility();
  const t = translations[language].about;
  return <div className="page inner-page about-page"><header className="page-header"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.description}</p></header><section className="about-grid">{t.cards.map(([title, text], index) => { const Icon = icons[index]; return <article key={title}><Icon size={30} /><h2>{title}</h2><p>{text}</p></article>; })}</section><section className="team-section"><div><p className="eyebrow">{t.teamEyebrow}</p><h2>{t.teamTitle}</h2><p>{t.teamDescription}</p></div><div className="team-cards">{t.roles.map((role, index) => <article key={role}><span>{String(index + 1).padStart(2, "0")}</span><h3>{t.member}</h3><p>{role}</p></article>)}</div></section><Link href="/services" className="primary-button">{t.explore} <ArrowRight size={19} /></Link></div>;
}
