import type { Metadata } from "next";
import { MembersDirectory } from "@/components/MembersDirectory";
import { getActiveMembers, getAllMembers } from "@/lib/members";

export const metadata: Metadata = {
  title: "Members Directory",
  description:
    "Explore the uoguelph.network member directory of University of Guelph student websites and portfolios.",
  alternates: { canonical: "/members" },
};

export default function MembersPage() {
  const members = getActiveMembers(getAllMembers());

  return (
    <main className="page">
      <section className="hero compact">
        <p className="eyebrow">Directory</p>
        <h1>Browse all active UoGuelph webring members.</h1>
      </section>
      <MembersDirectory members={members} />
    </main>
  );
}
