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
  const label = (key: (typeof links)[number][1]) => key === "home" ? "Home" : t[key];
  return <header className="site-header"><div className="nav-wrap"><Link className="brand" href="/" aria-label="SAHAY home">SAHAY<span>.</span></Link><nav className={open ? "site-nav mobile-open" : "site-nav"} aria-label="Main navigation">{links.map(([href, key]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={path === href ? "active" : ""}>{label(key)}</Link>)}{!simpleMode && <Link href="/accessibility" onClick={() => setOpen(false)}>Design</Link>}</nav><div className="nav-actions"><AccessibilityTrigger /><button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></div></div></header>;
}

function Footer() {
  return <footer className="site-footer"><div><strong>SAHAY.</strong><p>Digital services, one step at a time.</p></div><nav aria-label="Footer navigation"><Link href="/help">Help centre</Link><Link href="/accessibility">Accessibility</Link><Link href="/design-principles">Design principles</Link><Link href="/about">About</Link></nav><p className="footer-disclaimer"><ShieldCheck size={16} /> SAHAY will never ask for your password or OTP.</p></footer>;
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return <AccessibilityProvider><Navigation /><main>{children}</main><Footer /><AccessibilityPanel /></AccessibilityProvider>;
}
