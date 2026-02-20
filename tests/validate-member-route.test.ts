import { describe, expect, it } from "vitest";
import { POST as validateMember } from "@/app/api/validate-member/route";
import { members } from "@/data/members";

describe("validate member route", () => {
  it("accepts valid payload", async () => {
    const req = new Request("https://uog.network/api/validate-member", {
      method: "POST",
      body: JSON.stringify(members[0]),
      headers: { "Content-Type": "application/json" },
    });

    const res = await validateMember(req as never);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);
  });

  it("rejects invalid payload", async () => {
    const req = new Request("https://uog.network/api/validate-member", {
      method: "POST",
      body: JSON.stringify({ id: "x" }),
      headers: { "Content-Type": "application/json" },
    });

    const res = await validateMember(req as never);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.ok).toBe(false);
    expect(Array.isArray(body.issues)).toBe(true);
  });
});
