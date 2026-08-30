"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, HeartPulse, Landmark, Search, Smartphone, TrainFront, WalletCards } from "lucide-react";
import { categoryInfo, services } from "@/data/services";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const iconMap = { WalletCards, BadgeCheck, HeartPulse, TrainFront, Landmark, Smartphone };
type CategoryId = (typeof categoryInfo)[number]["id"];

export function CategoryCards({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? "category-grid compact" : "category-grid"}>{categoryInfo.map((category) => {
    const Icon = iconMap[category.icon];
    return <Link href={`/services?category=${category.id}`} className="category-card" key={category.id}><span className={`category-icon ${category.id}`}><Icon size={27} /></span><span className="category-title">{category.title}</span><span className="category-description">{category.description}</span><ArrowRight className="category-arrow" size={22} /></Link>;
  })}</div>;
}

export function ServiceDirectory() {
  const params = useSearchParams();
  const requested = params.get("category") as CategoryId | null;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryId | "all">(requested && categoryInfo.some((item) => item.id === requested) ? requested : "all");
  const shown = useMemo(() => services.filter((service) => (category === "all" || service.category === category) && `${service.title} ${service.summary}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  return <div className="directory">
    <div className="directory-controls"><label className="search-field"><Search size={21} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search services" aria-label="Search services" /></label><div className="filter-list" aria-label="Filter services">{[{ id: "all", title: "All services" }, ...categoryInfo].map((item) => <button type="button" onClick={() => setCategory(item.id as CategoryId | "all")} className={category === item.id ? "selected" : ""} key={item.id}>{item.title}</button>)}</div></div>
    <p className="demo-label">Guidance / demonstration — always check the official service for current requirements.</p>
    {shown.length ? <div className="service-list">{shown.map((service) => <Link className="service-row" href={`/services/${service.slug}`} key={service.slug}><span className="service-row-category">{categoryInfo.find((item) => item.id === service.category)?.title}</span><span><strong>{service.title}</strong><small>{service.summary}</small></span><ArrowRight size={23} /></Link>)}</div> : <div className="empty-state"><Search size={32} /><h3>No guide found</h3><p>Try a different word or choose “All services”. More demonstration guides are being added.</p><button type="button" onClick={() => { setCategory("all"); setQuery(""); }}>Show all guides</button></div>}
  </div>;
}
