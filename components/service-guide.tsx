"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ChevronDown, ExternalLink, FileText, Info, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { resolveService, type ServiceGuide as ServiceGuideType } from "@/data/services";
import { translations } from "@/data/translations";
import { useAccessibility } from "./accessibility-provider";
import { ExplainThis } from "./explain-this";
import { ReadAloud } from "./read-aloud";

export function ServiceGuide({ service }: { service: ServiceGuideType }) {
  const [step, setStep] = useState(0);
  const { language } = useAccessibility();
  const t = translations[language];
  const localized = resolveService(service, language);
  const active = localized.steps[step];
  const term = active.term ? localized.terms.find((item) => item.term === active.term) : undefined;
  return <div className="page guide-page"><div className="guide-top"><Link href="/services" className="back-link"><ArrowLeft size={19} /> {t.guide.all}</Link><p className="demo-label"><Info size={16} /> {t.guide.demo}</p></div><header className="guide-header"><p className="eyebrow">{t.guide.eyebrow}</p><h1>{service.title}</h1><p>{localized.summary}</p></header><div className="guide-layout"><aside className="guide-overview"><section><FileText size={22} /><h2>{t.guide.what}</h2><p>{localized.whatIsIt}</p></section><section><CheckCircle2 size={22} /><h2>{t.guide.who}</h2><p>{localized.whoMightNeedIt}</p></section><section><h2>{t.guide.need}</h2><ul className="document-list">{localized.documents.map((item) => <li key={item.name}><details><summary><span><Check size={17} /> {item.name}</span><ChevronDown size={18} /></summary><p><strong>{t.guide.what}</strong> {item.explanation}</p></details></li>)}</ul></section></aside><section className="guide-workflow" aria-live="polite"><div className="step-progress"><span>{t.guide.step} {step + 1} {t.guide.of} {localized.steps.length}</span><div aria-hidden="true">{localized.steps.map((_, index) => <i key={index} className={index <= step ? "complete" : ""} />)}</div></div><p className="eyebrow">{t.guide.one}</p><h2>{active.title}</h2><p className="step-body">{active.body}</p>{active.note && <aside className="step-note"><Info size={20} /><span>{active.note}</span></aside>}{term && <ExplainThis source={term.source} fallback={{ simple: term.simple, why: term.why }} />}<ReadAloud text={`${active.title}. ${active.body} ${active.note ?? ""}`} /><div className="step-actions"><button type="button" className="secondary-button" disabled={step === 0} onClick={() => setStep((value) => value - 1)}><ArrowLeft size={19} /> {t.guide.back}</button>{step < localized.steps.length - 1 ? <button type="button" className="primary-button" onClick={() => setStep((value) => value + 1)}>{t.guide.next} <ArrowRight size={19} /></button> : <a className="primary-button" href={localized.sourceUrl} target="_blank" rel="noreferrer">{t.guide.visitSource} <ExternalLink size={18} /></a>}</div></section></div><section className="official-source"><div><p className="eyebrow"><ShieldCheck size={16} /> {t.guide.sourceEyebrow}</p><h2>{t.guide.sourceTitle}</h2><p>{localized.sourceLabel}</p><small>{t.guide.sourceNote}</small></div><a href={localized.sourceUrl} target="_blank" rel="noreferrer" className="secondary-button">{t.guide.visitWebsite} <ExternalLink size={18} /></a></section></div>;
}
