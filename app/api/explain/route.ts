import { NextResponse } from "next/server";

type Body = { text?: string; fallback?: { simple?: string; why?: string } };

export async function POST(request: Request) {
  const body = (await request.json()) as Body;
  const source = body.text?.trim();
  if (!source) return NextResponse.json({ error: "Please provide text to explain." }, { status: 400 });
  // This local response keeps the demo usable without credentials. Replace this branch
  // with a provider adapter that uses OPENAI_API_KEY, OPENAI_MODEL, or another provider.
  return NextResponse.json({
    simple: body.fallback?.simple ?? `This is asking you to read “${source}” carefully and complete only the step the official service requests.`,
    why: body.fallback?.why ?? "Official services may use this information to process your request.",
    suggestion: "If the official wording is unclear, pause and check it on the verified official website before continuing.",
  });
}
