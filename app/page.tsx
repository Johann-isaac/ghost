"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleHelp, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { CategoryCards } from "@/components/service-directory";
import { ReadAloud } from "@/components/read-aloud";
import { translations } from "@/data/translations";
import { useAccessibility } from "@/components/accessibility-provider";

export default function HomePage() {
  const { language, simpleMode } = useAccessibility();
  const t = translations[language];
  const heroCopy = `${t.home.headingStart} ${t.home.headingStrong} ${t.home.headingEnd} ${t.home.subtitle}`;
  return <div className="page home-page">
    <motion.section className="hero" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
      <div className="hero-content"><p className="eyebrow"><ShieldCheck size={16} /> {t.home.eyebrow}</p><h1>{t.home.headingStart} <em>{t.home.headingStrong}</em> {t.home.headingEnd}</h1><p className="hero-subtitle">{t.home.subtitle}</p><div className="hero-actions"><Link className="primary-button" href="/services">{t.home.find} <ArrowRight size={20} /></Link>{!simpleMode && <a className="secondary-button" href="#how-it-works">{t.home.works}</a>}</div><div className="reassurance"><CircleHelp size={19} /><span>{t.home.reassurance}</span></div><ReadAloud text={heroCopy} compact /></div>
      {!simpleMode && <div className="hero-visual" aria-label={t.home.visualAlt} role="img"><div className="visual-glow" /><div className="visual-panel back"><span>{t.home.visualOfficial}</span><i /><i /><i /></div><div className="visual-panel front"><div className="visual-logo">S</div><span className="visual-label">{t.home.visualStep}</span><strong>{t.home.visualQuestion}</strong><div className="visual-option"><CheckCircle2 size={17} /> {t.home.visualBenefit}</div><div className="visual-option"><CheckCircle2 size={17} /> {t.home.visualDocument}</div></div><div className="visual-note"><Sparkles size={17} /> {t.home.visualNext}</div></div>}
    </motion.section>

    <section className="question-section" aria-labelledby="quick-question"><div className="section-intro"><p className="eyebrow">{t.home.start}</p><h2 id="quick-question">{t.home.question}</h2><p>{t.home.questionDescription}</p></div><CategoryCards /></section>

    {!simpleMode && <section id="how-it-works" className="how-it-works" aria-labelledby="how-title"><div className="section-intro"><p className="eyebrow">{t.home.calmer}</p><h2 id="how-title">{t.home.clarityTitle}</h2></div><div className="three-steps">{t.home.steps.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>}

    <section className="safety-section" aria-labelledby="safe-title"><div className="safety-content"><p className="eyebrow warm"><ShieldCheck size={16} /> {t.home.safetyEyebrow}</p><h2 id="safe-title">{t.home.safetyTitle}</h2><p>{t.home.safetyDescription}</p><ul>{t.home.safetyItems.map((item) => <li key={item}><CheckCircle2 size={20} /> {item}</li>)}</ul><Link href="/help#safety" className="text-link">{t.home.safetyLink} <ArrowRight size={18} /></Link></div><div className="safety-mark" aria-hidden="true"><div className="shield-orb"><ShieldCheck size={90} /></div><span>{t.home.safetyPromise}</span></div></section>

    <section className="official-callout"><div><p className="eyebrow">{t.home.officialEyebrow}</p><h2>{t.home.officialTitle}</h2></div><Link href="/about" className="secondary-button">{t.home.officialLink} <ExternalLink size={18} /></Link></section>
  </div>;
}
