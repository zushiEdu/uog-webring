import { NextRequest, NextResponse } from "next/server";
import { getAllMembers } from "@/lib/members";
import { getConnectedMembers } from "@/lib/connections";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const user = url.searchParams.get("user") ?? "";
  const targets = getConnectedMembers(user, getAllMembers());

  return NextResponse.json(
    {
      members: targets.map((member) => ({
        id: member.id,
        name: member.name,
        url: member.url,
      })),
    },
    { headers: corsHeaders },
  );
}
