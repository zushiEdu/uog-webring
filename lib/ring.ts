import type { Member } from "@/data/members";
import { findMemberBySite, getActiveMembers } from "@/lib/members";

export type RingAction = "prev" | "next" | "random";

export function getRingOrder(input: Member[]): Member[] {
  return [...getActiveMembers(input)].sort((a, b) =>
    new Date(a.addedAt).getTime() - new Date(b.addedAt).getTime(),
  );
}

export function resolveRingTarget(site: string, action: RingAction, input: Member[]): Member | null {
  const ordered = getRingOrder(input);
  if (ordered.length === 0) return null;

  if (action === "random") {
    return ordered[Math.floor(Math.random() * ordered.length)] ?? null;
  }

  const current = findMemberBySite(site, ordered);
  if (!current) return null;

  const index = ordered.findIndex((member) => member.id === current.id);
  if (index === -1) return null;

  if (action === "prev") {
    const prev = (index - 1 + ordered.length) % ordered.length;
    return ordered[prev] ?? null;
  }

  const next = (index + 1) % ordered.length;
  return ordered[next] ?? null;
}
