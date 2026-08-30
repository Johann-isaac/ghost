"use client";

import { ArrowUp, BotMessageSquare, Lightbulb, LoaderCircle, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";
import { translations } from "@/data/translations";
import { useAccessibility } from "./accessibility-provider";
import { ReadAloud } from "./read-aloud";

type AnswerKind = "general" | "safety" | "train" | "id";

function findAnswerKind(question: string): AnswerKind {
  const value = question.toLowerCase();
  if (value.includes("otp") || value.includes("safe") || value.includes("official") || value.includes("scam") || value.includes("பாதுக") || value.includes("பாதுகாப்ப") || value.includes("सुरक्ष") || value.includes("धोख")) return "safety";
  if (value.includes("train") || value.includes("ticket") || value.includes("ரயில்") || value.includes("டிக்கெட்") || value.includes("ट्रेन") || value.includes("टिकट")) return "train";
  if (value.includes("id") || value.includes("document") || value.includes("aadhaar") || value.includes("அடையாள") || value.includes("ஆவண") || value.includes("पहचान") || value.includes("दस्तावेज")) return "id";
  return "general";
}

export function HelpAssistant() {
  const [question, setQuestion] = useState("");
  const [answerKind, setAnswerKind] = useState<AnswerKind | null>(null);
  const [simpler, setSimpler] = useState(false);
  const [loading, setLoading] = useState(false);
  const { language } = useAccessibility();
  const t = translations[language];
  const answer = answerKind ? t.help.answers[answerKind] : null;

  function ask(value: string, preferredKind?: AnswerKind) {
    const trimmed = value.trim();
    if (!trimmed) return;
    setLoading(true);
    setQuestion(trimmed);
    setSimpler(false);
    window.setTimeout(() => { setAnswerKind(preferredKind ?? findAnswerKind(trimmed)); setLoading(false); }, 350);
  }

  function submit(event: FormEvent) { event.preventDefault(); ask(question); }
  const exampleKinds: AnswerKind[] = ["train", "safety", "general", "id", "safety"];

  return <section className="help-assistant"><div className="help-intro"><p className="eyebrow"><Sparkles size={16} /> {t.help.eyebrow}</p><h2>{t.help.title}</h2><p>{t.help.description}</p></div><form onSubmit={submit} className="assistant-form"><label htmlFor="help-question">{t.help.label}</label><div><input id="help-question" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder={t.help.placeholder} /><button className="primary-button" aria-label={t.help.ask} type="submit"><ArrowUp size={22} /></button></div></form><div className="example-prompts"><p>{t.help.try}</p>{t.help.examples.map((item, index) => <button key={item} type="button" onClick={() => ask(item, exampleKinds[index])}>{item}</button>)}</div>{loading && <div className="loading-state assistant-loading"><LoaderCircle className="spin" size={24} /> {t.help.loading}</div>}{answer && !loading && <div className="assistant-answer" aria-live="polite"><p className="demo-chip"><BotMessageSquare size={16} /> {t.help.demo}</p><h3>{answer[0]}</h3><p>{simpler ? answer[2] : answer[1]}</p><p className="why-line"><Lightbulb size={19} /> {answer[3]}</p><div className="answer-actions"><ReadAloud text={`${answer[0]}. ${simpler ? answer[2] : answer[1]} ${answer[3]}`} compact /><button type="button" className="secondary-button" onClick={() => setSimpler(true)}>{t.help.simpler}</button></div></div>}</section>;
}
