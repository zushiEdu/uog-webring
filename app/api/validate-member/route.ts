import { NextRequest, NextResponse } from "next/server";
import { memberSchema } from "@/lib/members";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const parsed = memberSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, issues: parsed.error.issues.map((issue) => issue.message) },
      { status: 400 },
    );
  }

  return NextResponse.json({ ok: true });
}
