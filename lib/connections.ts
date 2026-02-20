import type { Member } from "@/data/members";
import { getActiveMembers } from "@/lib/members";

export interface Connection {
  fromId: string;
  toId: string;
}

export function getConnections(input: Member[]): Connection[] {
  const active = getActiveMembers(input);
  const validIds = new Set(active.map((member) => member.id));
  const edges: Connection[] = [];

  for (const member of active) {
    for (const target of member.connections ?? []) {
      if (validIds.has(target)) {
        edges.push({ fromId: member.id, toId: target });
      }
    }
  }

  return edges;
}

export function getConnectedMembers(userId: string, input: Member[]): Member[] {
  const active = getActiveMembers(input);
  const user = active.find((member) => member.id === userId);

  if (!user) {
    return active.filter((member) => member.id !== userId);
  }

  const targets = new Set(user.connections ?? []);
  const connected = active.filter((member) => targets.has(member.id));
  return connected.length > 0 ? connected : active.filter((member) => member.id !== userId);
}
