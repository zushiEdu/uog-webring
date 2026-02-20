import { z } from "zod";
import { members, type Member } from "@/data/members";

export const memberSchema = z.object({
  id: z.string().trim().min(1),
  name: z.string().trim().min(1),
  url: z.url(),
  bio: z.string().trim().min(1),
  tags: z.array(z.string().trim().min(1)).min(1),
  addedAt: z.iso.date(),
  program: z.string().optional(),
  year: z.string().optional(),
  profilePic: z.string().optional(),
  instagram: z.url().optional(),
  twitter: z.url().optional(),
  linkedin: z.url().optional(),
  connections: z.array(z.string()).optional(),
  status: z.enum(["active", "paused"]).default("active"),
});

export const membersSchema = z.array(memberSchema);

export function normalizeUrl(input: string): string {
  const withProto = /^https?:\/\//i.test(input) ? input : `https://${input}`;
  const parsed = new URL(withProto);
  const host = parsed.hostname.toLowerCase().replace(/^www\./, "");
  const path = parsed.pathname.replace(/\/$/, "") || "/";
  return `${parsed.protocol}//${host}${path}${parsed.search}${parsed.hash}`;
}

export function validateMembers(input: Member[]): { valid: boolean; issues: string[] } {
  const issues: string[] = [];
  const parsed = membersSchema.safeParse(input);
  if (!parsed.success) {
    parsed.error.issues.forEach((issue) => issues.push(issue.message));
    return { valid: false, issues };
  }

  const ids = new Set<string>();
  const urls = new Set<string>();
  for (const member of input) {
    if (ids.has(member.id)) {
      issues.push(`Duplicate id: ${member.id}`);
    }
    ids.add(member.id);

    const normalized = normalizeUrl(member.url);
    if (urls.has(normalized)) {
      issues.push(`Duplicate url: ${member.url}`);
    }
    urls.add(normalized);
  }

  return { valid: issues.length === 0, issues };
}

export function getAllMembers(): Member[] {
  return members;
}

export function getActiveMembers(input: Member[] = members): Member[] {
  return input.filter((member) => (member.status ?? "active") === "active");
}

export function canonicalMemberUrl(member: Member): string {
  return normalizeUrl(member.url);
}

export function findMemberBySite(site: string, input: Member[] = members): Member | null {
  const normalized = normalizeUrl(site);
  return input.find((member) => canonicalMemberUrl(member) === normalized) ?? null;
}
