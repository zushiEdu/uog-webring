import type { Metadata } from "next";
import { ConnectionsGraph } from "@/components/ConnectionsGraph";
import { getAllMembers, getActiveMembers } from "@/lib/members";
import { getConnections } from "@/lib/connections";

export const metadata: Metadata = {
  title: "Connections Graph",
  description:
    "Visualize optional social connections between University of Guelph webring members.",
  alternates: { canonical: "/graph" },
};

export default function GraphPage() {
  const members = getActiveMembers(getAllMembers());
  const edges = getConnections(members);

  return (
    <main className="page">
      <section className="hero compact">
        <p className="eyebrow">Connections</p>
        <h1>Optional social connection graph.</h1>
        <p>This view is discovery-only. Widget prev/next in ring mode stays strict and deterministic.</p>
      </section>
      <ConnectionsGraph members={members} connections={edges} />
    </main>
  );
}
