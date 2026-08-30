"use client";

import { Suspense } from "react";
import { ServiceDirectory } from "@/components/service-directory";
import { useAccessibility } from "@/components/accessibility-provider";
import { translations } from "@/data/translations";

function DirectoryLoading() {
  const { language } = useAccessibility();
  return <div className="directory-loading" role="status"><span className="spin">◌</span> {translations[language].directory.loading}</div>;
}

export default function ServicesPage() {
  const { language } = useAccessibility();
  const t = translations[language];
  return <div className="page inner-page"><header className="page-header"><p className="eyebrow">{t.directory.eyebrow}</p><h1>{t.directory.title}</h1><p>{t.directory.description}</p></header><Suspense fallback={<DirectoryLoading />}><ServiceDirectory /></Suspense></div>;
}
