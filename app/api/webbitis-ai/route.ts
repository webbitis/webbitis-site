import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    reply: "Vercel chat route works.",
    leadCaptured: false,
    detectedLanguage: "en",
  });
}