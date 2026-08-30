import { NextResponse } from "next/server";
import { translations, type Language } from "@/data/translations";

type Body = { text?: string; language?: Language; suggestion?: string; fallback?: { simple?: string; why?: string } };

export async function POST(request: Request) {
  const body = (await request.json()) as Body;
  const language: Language = body.language === "ta" || body.language === "hi" ? body.language : "en";
  const t = translations[language];
  const source = body.text?.trim();
  if (!source) return NextResponse.json({ error: t.explain.missing }, { status: 400 });
  // This local response keeps the demo usable without credentials. Replace this branch
  // with a provider adapter that uses OPENAI_API_KEY, OPENAI_MODEL, or another provider.
  return NextResponse.json({
    simple: body.fallback?.simple ?? source,
    why: body.fallback?.why ?? t.explain.suggestion,
    suggestion: body.suggestion ?? t.explain.suggestion,
  });
}
