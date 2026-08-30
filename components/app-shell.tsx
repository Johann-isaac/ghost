"use client";

import Link from "next/link";
import { Menu, ShieldCheck, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { translations } from "@/data/translations";
import { AccessibilityPanel, AccessibilityTrigger } from "./accessibility-panel";
import { AccessibilityProvider, useAccessibility } from "./accessibility-provider";

const links = [
  ["/", "home"], ["/services", "services"], ["/help", "help"], ["/research", "research"], ["/about", "about"],
] as const;

function Navigation() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const { language, simpleMode } = useAccessibility();
  const t = translations[language];
  return <header className="site-header"><div className="nav-wrap"><Link className="brand" href="/" aria-label={t.nav.brand}>SAHAY<span>.</span></Link><nav className={open ? "site-nav mobile-open" : "site-nav"} aria-label={t.nav.main}>{links.map(([href, key]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={path === href ? "active" : ""}>{t.nav[key]}</Link>)}{!simpleMode && <Link href="/accessibility" onClick={() => setOpen(false)}>{t.nav.design}</Link>}</nav><div className="nav-actions"><AccessibilityTrigger /><button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={t.nav.menu}>{open ? <X /> : <Menu />}</button></div></div></header>;
}

function Footer() {
  const { language } = useAccessibility();
  const t = translations[language];
  return <footer className="site-footer"><div><strong>SAHAY.</strong><p>{t.footer.tagline}</p></div><nav aria-label={t.footer.nav}><Link href="/help">{t.footer.help}</Link><Link href="/accessibility">{t.footer.accessibility}</Link><Link href="/design-principles">{t.footer.principles}</Link><Link href="/about">{t.footer.about}</Link></nav><p className="footer-disclaimer"><ShieldCheck size={16} /> {t.footer.privacy}</p></footer>;
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return <AccessibilityProvider><Navigation /><main>{children}</main><Footer /><AccessibilityPanel /></AccessibilityProvider>;
}
