"use client";

import { ArrowUp, BotMessageSquare, Lightbulb, LoaderCircle, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import { helpExamples, terms } from "@/data/services";
import { ReadAloud } from "./read-aloud";

type Answer = { title: string; text: string; extra: string };

function getLocalAnswer(question: string, simpler = false): Answer {
  const normal = question.toLowerCase();
  const foundTerm = terms.find((term) => normal.includes(term.term.toLowerCase()));
  if (foundTerm) return { title: `${foundTerm.term}, in simple words`, text: foundTerm.simple, extra: foundTerm.why };
  if (normal.includes("official") || normal.includes("safe") || normal.includes("scam")) return { title: "A safe way to check", text: simpler ? "Type the website address yourself. Do not use an unexpected link." : "Start from a trusted government portal or the organisation's printed information. Check the website address carefully before you enter personal information or make a payment.", extra: "Never share an OTP, password, PIN, or banking information with someone who contacts you unexpectedly." };
  if (normal.includes("train") || normal.includes("ticket")) return { title: "Booking a train ticket", text: simpler ? "First choose your journey. Then use a verified booking website." : "Write down your starting place, destination, and travel date. Open a verified booking website, read each screen slowly, and review your journey details before payment.", extra: "Keep the booking reference in a secure place after you finish." };
  if (normal.includes("id") || normal.includes("document")) return { title: "Why an ID may be requested", text: simpler ? "An ID helps show who you are." : "An official service may ask for an identity document to check that the request belongs to you. Use only the document it asks for, and only on a verified official website.", extra: "If you are unsure whether a document is needed, check the current official instructions first." };
  return { title: "Let’s take this one step at a time", text: simpler ? "Tell us your goal. Then check the official website slowly." : "Start by writing down what you want to do. Look for the official service that handles that task, then read one instruction at a time. SAHAY can help make a phrase easier to understand.", extra: "This is general guidance, not an official requirement." };
}

export function HelpAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [loading, setLoading] = useState(false);
  function ask(value: string) { const trimmed = value.trim(); if (!trimmed) return; setLoading(true); setQuestion(trimmed); window.setTimeout(() => { setAnswer(getLocalAnswer(trimmed)); setLoading(false); }, 350); }
  function submit(event: FormEvent) { event.preventDefault(); ask(question); }
  return <section className="help-assistant"><div className="help-intro"><p className="eyebrow"><Sparkles size={16} /> ACCESSIBILITY-FIRST ASSISTANT</p><h2>Need help understanding something?</h2><p>Ask a question in your own words. SAHAY gives a plain-language demonstration explanation.</p></div><form onSubmit={submit} className="assistant-form"><label htmlFor="help-question">What would you like help with?</label><div><input id="help-question" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="For example: What is an OTP?" /><button className="primary-button" aria-label="Ask SAHAY" type="submit"><ArrowUp size={22} /></button></div></form><div className="example-prompts"><p>Try one of these:</p>{helpExamples.slice(0, 5).map((item) => <button key={item} type="button" onClick={() => ask(item)}>{item}</button>)}</div>{loading && <div className="loading-state assistant-loading"><LoaderCircle className="spin" size={24} /> Finding a clear explanation…</div>}{answer && !loading && <div className="assistant-answer" aria-live="polite"><p className="demo-chip"><BotMessageSquare size={16} /> Demonstration response</p><h3>{answer.title}</h3><p>{answer.text}</p><p className="why-line"><Lightbulb size={19} /> {answer.extra}</p><div className="answer-actions"><ReadAloud text={`${answer.title}. ${answer.text} ${answer.extra}`} compact /><button type="button" className="secondary-button" onClick={() => setAnswer(getLocalAnswer(question, true))}>Explain more simply</button></div></div>}</section>;
}
