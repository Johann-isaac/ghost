"use client";

import { Pause, Play, Square, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";
import { languages, translations } from "@/data/translations";
import { useAccessibility } from "./accessibility-provider";

export function ReadAloud({ text, compact = false }: { text: string; compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "playing" | "paused" | "unavailable">("idle");
  const { language } = useAccessibility();
  const t = translations[language];

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  function play() {
    if (!("speechSynthesis" in window)) { setStatus("unavailable"); return; }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languages.find((item) => item.code === language)?.speechLocale ?? "en-IN";
    utterance.rate = 0.9;
    utterance.onend = () => setStatus("idle");
    utterance.onerror = () => setStatus("unavailable");
    window.speechSynthesis.speak(utterance);
    setStatus("playing");
  }
  function pause() { window.speechSynthesis?.pause(); setStatus("paused"); }
  function resume() { window.speechSynthesis?.resume(); setStatus("playing"); }
  function stop() { window.speechSynthesis?.cancel(); setStatus("idle"); }

  if (compact) return <button className="icon-button" type="button" onClick={play} aria-label={t.read.this}><Volume2 size={20} /> <span>{t.read.label}</span></button>;

  return (
    <div className="read-aloud" aria-live="polite">
      <div className="read-aloud-label"><Volume2 size={20} /> <span>{status === "playing" ? t.read.reading : t.read.label}</span></div>
      <div className="speech-controls">
        {status === "playing" ? <button type="button" onClick={pause} className="mini-control" aria-label={t.read.pause}><Pause size={18} /> {t.read.pauseLabel}</button> : status === "paused" ? <button type="button" onClick={resume} className="mini-control" aria-label={t.read.resume}><Play size={18} /> {t.read.play}</button> : <button type="button" onClick={play} className="mini-control" aria-label={t.read.start}><Play size={18} /> {t.read.play}</button>}
        <button type="button" onClick={stop} className="mini-control" disabled={status === "idle" || status === "unavailable"} aria-label={t.read.stop}><Square size={16} /> {t.read.stopLabel}</button>
      </div>
      {status === "unavailable" && <p className="input-help">{t.read.unavailable}</p>}
    </div>
  );
}
