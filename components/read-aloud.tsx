"use client";

import { Pause, Play, Square, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";

export function ReadAloud({ text, compact = false }: { text: string; compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "playing" | "paused" | "unavailable">("idle");

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  function play() {
    if (!("speechSynthesis" in window)) { setStatus("unavailable"); return; }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.onend = () => setStatus("idle");
    utterance.onerror = () => setStatus("unavailable");
    window.speechSynthesis.speak(utterance);
    setStatus("playing");
  }
  function pause() { window.speechSynthesis?.pause(); setStatus("paused"); }
  function resume() { window.speechSynthesis?.resume(); setStatus("playing"); }
  function stop() { window.speechSynthesis?.cancel(); setStatus("idle"); }

  if (compact) return <button className="icon-button" type="button" onClick={play} aria-label="Read this aloud"><Volume2 size={20} /> <span>Read aloud</span></button>;

  return (
    <div className="read-aloud" aria-live="polite">
      <div className="read-aloud-label"><Volume2 size={20} /> <span>{status === "playing" ? "Reading aloud" : "Read aloud"}</span></div>
      <div className="speech-controls">
        {status === "playing" ? <button type="button" onClick={pause} className="mini-control" aria-label="Pause reading"><Pause size={18} /> Pause</button> : status === "paused" ? <button type="button" onClick={resume} className="mini-control" aria-label="Resume reading"><Play size={18} /> Play</button> : <button type="button" onClick={play} className="mini-control" aria-label="Start reading"><Play size={18} /> Play</button>}
        <button type="button" onClick={stop} className="mini-control" disabled={status === "idle" || status === "unavailable"} aria-label="Stop reading"><Square size={16} /> Stop</button>
      </div>
      {status === "unavailable" && <p className="input-help">Read aloud is not available in this browser. You can still use the written guide.</p>}
    </div>
  );
}
