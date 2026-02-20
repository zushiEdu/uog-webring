import { describe, expect, it } from "vitest";
import { GET as getWebring } from "@/app/api/webring/route";
import { GET as getRing } from "@/app/ring/route";
import { GET as getEmbed } from "@/app/embed.js/route";

describe("routes", () => {
  it("returns connected members from /api/webring", async () => {
    const req = new Request("https://uog.network/api/webring?user=jane-arbour");
    const res = await getWebring(req as never);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(Array.isArray(json.members)).toBe(true);
    expect(json.members.some((member: { id: string }) => member.id === "liam-hart")).toBe(true);
  });

  it("redirects from /ring for next action", async () => {
    const req = new Request("https://uog.network/ring?site=https%3A%2F%2Fjanearbour.dev&action=next");
    const res = await getRing(req as never);
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toBe("https://liamhart.me/");
  });

  it("returns fallback for unknown /ring site", async () => {
    const req = new Request("https://uog.network/ring?site=https%3A%2F%2Funknown.example&action=next");
    const res = await getRing(req as never);
    expect(res.status).toBe(404);
    const body = await res.text();
    expect(body).toContain("Site not found in the ring");
  });

  it("serves embed script with mode support", async () => {
    const res = await getEmbed();
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")?.includes("application/javascript")).toBe(true);
    const body = await res.text();
    expect(body).toContain("data-mode");
    expect(body).toContain("/api/webring");
    expect(body).toContain("/ring");
  });
});
