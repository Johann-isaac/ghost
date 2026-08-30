"use client";

import { CheckCircle2, ExternalLink, PhoneCall, ShieldAlert } from "lucide-react";
import { HelpAssistant } from "@/components/help-assistant";
import { useAccessibility } from "@/components/accessibility-provider";
import { helplineTranslations, translations } from "@/data/translations";

const supportDestinations = [
  { phone: "tel:1100", website: "https://cmhelpline.tnega.org/" },
  { phone: "tel:14567", website: "https://scw.dosje.gov.in/elderline" },
  { phone: "tel:18004253993", website: "https://m.cmchistn.com/" },
  { phone: "tel:1930", website: "https://cybercrime.gov.in/" },
] as const;

export default function HelpPage() {
  const { language } = useAccessibility();
  const t = translations[language];
  const copy = t.help.page;
  const support = helplineTranslations[language];
  return <div className="page inner-page help-page"><header className="page-header"><p className="eyebrow">{copy.eyebrow}</p><h1>{copy.title}</h1><p>{copy.description}</p></header><HelpAssistant /><section id="safety" className="safety-guide"><div><p className="eyebrow warm"><ShieldAlert size={16} /> {copy.safetyEyebrow}</p><h2>{copy.safetyTitle}</h2><p>{copy.safetyDescription}</p></div><ul>{copy.safetyItems.map((item) => <li key={item}><CheckCircle2 /> {item}</li>)}</ul></section><section className="helpline-directory" aria-labelledby="support-title"><div className="section-intro"><p className="eyebrow">{support.eyebrow}</p><h2 id="support-title">{support.title}</h2><p>{support.description}</p></div><div className="helpline-grid">{support.cards.map((card, index) => { const destination = supportDestinations[index]; return <article key={card.title}><PhoneCall size={25} /><h3>{card.title}</h3><p>{card.text}</p><div><a className="secondary-button" href={destination.phone}><PhoneCall size={17} /> {card.call}</a><a className="text-link" href={destination.website} target="_blank" rel="noreferrer">{card.website} <ExternalLink size={16} /></a></div></article>; })}</div></section></div>;
}
