"use client";

import { AuditChecklist } from "@/components/audit-checklist";
import { useAccessibility } from "@/components/accessibility-provider";
import { translations } from "@/data/translations";

export default function AuditPage() {
  const { language } = useAccessibility();
  const t = translations[language];
  return <div className="page inner-page"><header className="page-header"><p className="eyebrow">{t.audit.eyebrow}</p><h1>{t.audit.title}</h1><p>{t.audit.description}</p></header><AuditChecklist /></div>;
}
