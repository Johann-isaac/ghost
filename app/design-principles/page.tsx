import { Accessibility, BadgeCheck, CircleUserRound, Eye, HandHeart, Route, ShieldCheck, Undo2 } from "lucide-react";

const principles = [
  [CircleUserRound, "Independence", "Help people complete tasks themselves."],
  [Eye, "Clarity", "Use simple words and obvious actions."],
  [Route, "One Step at a Time", "Never overwhelm people with a wall of instructions."],
  [Accessibility, "User Control", "Let people change text size, contrast, language, and motion."],
  [HandHeart, "Multiple Ways to Understand", "Offer text, audio, and visual explanations."],
  [ShieldCheck, "Trust", "Clearly distinguish SAHAY from official government services."],
  [BadgeCheck, "Dignity", "Design for older adults without stereotypes or assumptions."],
  [Undo2, "Forgiveness", "Make mistakes easy to understand and recover from."],
] as const;

export const metadata = { title: "Design Principles | SAHAY" };

export default function PrinciplesPage() { return <div className="page inner-page"><header className="page-header"><p className="eyebrow">HOW WE DESIGN</p><h1>Principles that keep the experience human.</h1><p>Every part of SAHAY is intended to reduce complexity while preserving people’s choice and control.</p></header><section className="principles-grid">{principles.map(([Icon, title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><Icon size={28} /><h2>{title}</h2><p>{text}</p></article>)}</section></div>; }
