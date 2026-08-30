"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, HeartPulse, Landmark, Search, Smartphone, TrainFront, WalletCards } from "lucide-react";
import { categoryInfo, resolveService, services } from "@/data/services";
import { translations } from "@/data/translations";
import { useAccessibility } from "./accessibility-provider";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const iconMap = { WalletCards, BadgeCheck, HeartPulse, TrainFront, Landmark, Smartphone };
type CategoryId = (typeof categoryInfo)[number]["id"];

export function CategoryCards({ compact = false }: { compact?: boolean }) {
  const { language } = useAccessibility();
  const t = translations[language];
  return <div className={compact ? "category-grid compact" : "category-grid"}>{categoryInfo.map((category) => {
    const Icon = iconMap[category.icon];
    const copy = t.categories[category.id];
    return <Link href={`/services?category=${category.id}`} className="category-card" key={category.id}><span className={`category-icon ${category.id}`}><Icon size={27} /></span><span className="category-title">{copy.title}</span><span className="category-description">{copy.description}</span><ArrowRight className="category-arrow" size={22} /></Link>;
  })}</div>;
}

export function ServiceDirectory() {
  const params = useSearchParams();
  const requested = params.get("category") as CategoryId | null;
  const { language } = useAccessibility();
  const t = translations[language];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryId | "all">(requested && categoryInfo.some((item) => item.id === requested) ? requested : "all");
  const shown = useMemo(() => services.filter((service) => {
    const localized = resolveService(service, language);
    return (category === "all" || service.category === category) && `${service.title} ${localized.summary}`.toLowerCase().includes(query.toLowerCase());
  }), [category, language, query]);
  return <div className="directory">
    <div className="directory-controls"><label className="search-field"><Search size={21} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.directory.search} aria-label={t.directory.search} /></label><div className="filter-list" aria-label={t.directory.filter}>{[{ id: "all" as const, title: t.directory.all }, ...categoryInfo.map((item) => ({ id: item.id, title: t.categories[item.id].title }))].map((item) => <button type="button" onClick={() => setCategory(item.id)} className={category === item.id ? "selected" : ""} key={item.id}>{item.title}</button>)}</div></div>
    <p className="demo-label">{t.directory.demo}</p>
    {shown.length ? <div className="service-list">{shown.map((service) => { const localized = resolveService(service, language); return <Link className="service-row" href={`/services/${service.slug}`} key={service.slug}><span className="service-row-category">{t.categories[service.category].title}</span><span><strong>{service.title}</strong><small>{localized.summary}</small></span><ArrowRight size={23} /></Link>; })}</div> : <div className="empty-state"><Search size={32} /><h3>{t.directory.emptyTitle}</h3><p>{t.directory.emptyDescription}</p><button type="button" onClick={() => { setCategory("all"); setQuery(""); }}>{t.directory.showAll}</button></div>}
  </div>;
}
