"use client";

import { BotMessageSquare, ChevronDown, CircleAlert, LoaderCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { ReadAloud } from "./read-aloud";

type Explanation = { simple: string; why: string; suggestion: string };

export function ExplainThis({ source, fallback }: { source: string; fallback: { simple: string; why: string } }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState<Explanation | null>(null);
  const [error, setError] = useState(false);
  async function toggle() {
    if (open) { setOpen(false); return; }
    setOpen(true);
    if (explanation) return;
    setLoading(true); setError(false);
    try {
      const response = await fetch("/api/explain", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: source, fallback }) });
      if (!response.ok) throw new Error("Unavailable");
      setExplanation(await response.json());
    } catch {
      setError(true);
      setExplanation({ simple: fallback.simple, why: fallback.why, suggestion: "Check the official service if you need to confirm what is required." });
    } finally { setLoading(false); }
  }
  return <section className="explain-this"><button type="button" className="explain-trigger" aria-expanded={open} onClick={toggle}><span><Sparkles size={19} /> Explain this</span><ChevronDown className={open ? "rotated" : ""} size={20} /></button>{open && <div className="explanation" aria-live="polite">{loading ? <div className="loading-state"><LoaderCircle className="spin" size={22} /> Creating a clear explanation…</div> : explanation && <><p className="demo-chip"><BotMessageSquare size={16} /> Demo AI explanation</p><p className="instruction-source">“{source}”</p><h3>In simple words</h3><p>{explanation.simple}</p><h3>Why?</h3><p>{explanation.why}</p><h3>A helpful next step</h3><p>{explanation.suggestion}</p>{error && <p className="fallback-note"><CircleAlert size={17} /> AI explanation is currently unavailable. This basic guide is still available.</p>}<ReadAloud text={`${explanation.simple} ${explanation.why} ${explanation.suggestion}`} /></>}</div>}</section>;
}
