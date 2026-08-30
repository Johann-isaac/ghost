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
  const heroCopy = "Digital services should not be difficult. SAHAY breaks complicated online services into simple steps so you can understand what to do and why.";
  return <div className="page home-page">
    <motion.section className="hero" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
      <div className="hero-content"><p className="eyebrow"><ShieldCheck size={16} /> DESIGNED FOR PEOPLE 60+</p><h1>Digital services <em>shouldn&apos;t</em> be difficult.</h1><p className="hero-subtitle">SAHAY breaks complicated online services into simple steps so you can understand what to do and why.</p><div className="hero-actions"><Link className="primary-button" href="/services">{t.findService} <ArrowRight size={20} /></Link>{!simpleMode && <a className="secondary-button" href="#how-it-works">{t.howItWorks}</a>}</div><div className="reassurance"><CircleHelp size={19} /><span>SAHAY explains services. Official government websites remain the final source for applications and information.</span></div><ReadAloud text={heroCopy} compact /></div>
      {!simpleMode && <div className="hero-visual" aria-label="A simple visual showing a digital service becoming easier to follow" role="img"><div className="visual-glow" /><div className="visual-panel back"><span>Official service</span><i /><i /><i /></div><div className="visual-panel front"><div className="visual-logo">S</div><span className="visual-label">ONE STEP AT A TIME</span><strong>What would you like to do?</strong><div className="visual-option"><CheckCircle2 size={17} /> Find a benefit</div><div className="visual-option"><CheckCircle2 size={17} /> Understand a document</div></div><div className="visual-note"><Sparkles size={17} /> Clear next steps</div></div>}
    </motion.section>

    <section className="question-section" aria-labelledby="quick-question"><div className="section-intro"><p className="eyebrow">START HERE</p><h2 id="quick-question">{t.question}</h2><p>Choose an area below. You can explore at your own pace.</p></div><CategoryCards /></section>

    {!simpleMode && <section id="how-it-works" className="how-it-works" aria-labelledby="how-title"><div className="section-intro"><p className="eyebrow">A CALMER WAY FORWARD</p><h2 id="how-title">Clear guidance. You stay in control.</h2></div><div className="three-steps"><article><span>01</span><h3>Tell us your goal</h3><p>Choose a task in everyday words.</p></article><article><span>02</span><h3>Understand each step</h3><p>See what it means, why it matters, and what happens next.</p></article><article><span>03</span><h3>Use the official service</h3><p>When you feel ready, continue on the verified official website.</p></article></div></section>}

    <section className="safety-section" aria-labelledby="safe-title"><div className="safety-content"><p className="eyebrow warm"><ShieldCheck size={16} /> STAY SAFE ONLINE</p><h2 id="safe-title">A little caution goes a long way.</h2><p>Use these simple checks whenever a website, message, or payment request asks for your information.</p><ul><li><CheckCircle2 size={20} /> Never share OTPs, passwords, or PINs.</li><li><CheckCircle2 size={20} /> Check that you are on the official website.</li><li><CheckCircle2 size={20} /> Pause if a request feels unexpected or urgent.</li></ul><Link href="/help#safety" className="text-link">Read the safety guide <ArrowRight size={18} /></Link></div><div className="safety-mark" aria-hidden="true"><div className="shield-orb"><ShieldCheck size={90} /></div><span>SAHAY will never ask for your password or OTP.</span></div></section>

    <section className="official-callout"><div><p className="eyebrow">A TRUSTED GUIDE, NOT THE FINAL AUTHORITY</p><h2>We help you understand. Official websites handle the actual task.</h2></div><Link href="/about" className="secondary-button">How SAHAY works <ExternalLink size={18} /></Link></section>
  </div>;
}
