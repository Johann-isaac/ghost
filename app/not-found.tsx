"use client";

import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { useAccessibility } from "@/components/accessibility-provider";
import { translations } from "@/data/translations";

export default function NotFound() {
  const { language } = useAccessibility();
  const t = translations[language].notFound;
  return <div className="page inner-page not-found"><Search size={38} /><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.description}</p><Link href="/services" className="primary-button"><ArrowLeft size={18} /> {t.action}</Link></div>;
}
