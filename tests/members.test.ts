import { describe, expect, it } from "vitest";
import { members } from "@/data/members";
import { getActiveMembers, normalizeUrl, validateMembers } from "@/lib/members";

describe("members utilities", () => {
  it("normalizes URLs consistently", () => {
    expect(normalizeUrl("https://www.Example.com/"))
      .toBe("https://example.com/");
    expect(normalizeUrl("example.com/path/"))
      .toBe("https://example.com/path");
  });

  it("validates current members data", () => {
    const result = validateMembers(members);
    expect(result.valid).toBe(true);
    expect(result.issues).toHaveLength(0);
  });

  it("catches duplicate IDs and URLs", () => {
    const dup = [
      ...members,
      {
        ...members[0],
        id: members[1].id,
      },
    ];
    const result = validateMembers(dup);
    expect(result.valid).toBe(false);
    expect(result.issues.join(" ")).toContain("Duplicate id");
  });

  it("filters only active members", () => {
    const data = [
      { ...members[0], status: "active" as const },
      { ...members[1], status: "paused" as const },
    ];
    const active = getActiveMembers(data);
    expect(active).toHaveLength(1);
    expect(active[0]?.id).toBe(members[0]?.id);
  });
});
