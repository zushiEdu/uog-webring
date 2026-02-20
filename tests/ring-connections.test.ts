import { describe, expect, it, vi } from "vitest";
import { members } from "@/data/members";
import { getConnections } from "@/lib/connections";
import { getRingOrder, resolveRingTarget } from "@/lib/ring";

describe("ring and connections logic", () => {
  it("builds only valid connection edges", () => {
    const edges = getConnections(members);
    expect(edges.length).toBeGreaterThan(0);
    expect(edges.some((edge) => edge.fromId === "jane-arbour" && edge.toId === "liam-hart")).toBe(true);
  });

  it("returns deterministic prev/next from strict order", () => {
    const order = getRingOrder(members);
    expect(order[0]?.id).toBe("jane-arbour");
    expect(order[1]?.id).toBe("liam-hart");

    const next = resolveRingTarget("https://janearbour.dev", "next", members);
    const prev = resolveRingTarget("https://janearbour.dev", "prev", members);
    expect(next?.id).toBe("liam-hart");
    expect(prev?.id).toBe("owen-tan");
  });

  it("returns a random member for random mode", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.99);
    const target = resolveRingTarget("https://janearbour.dev", "random", members);
    expect(target?.id).toBe("owen-tan");
    vi.restoreAllMocks();
  });

  it("returns null for unknown site with prev/next", () => {
    const target = resolveRingTarget("https://unknown.example", "next", members);
    expect(target).toBeNull();
  });
});
