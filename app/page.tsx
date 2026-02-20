import type { Metadata } from "next";
import SearchableContent from "@/components/SearchableContent";
import { getActiveMembers, getAllMembers } from "@/lib/members";
import { getConnections } from "@/lib/connections";

export const metadata: Metadata = {
  title: "University of Guelph Webring",
  description:
    "Browse and search University of Guelph student websites, portfolios, and projects in the uoguelph.network webring.",
};

export default function Home() {
  const members = getActiveMembers(getAllMembers());
  const connections = getConnections(members);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://uoguelph.network";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "uoguelph.network",
    alternateName: "University of Guelph Webring",
    url: baseUrl,
    description:
      "University of Guelph student webring with searchable member websites and network graph.",
    publisher: {
      "@type": "Organization",
      name: "uoguelph.network",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SearchableContent members={members} connections={connections} />
    </>
  );
}
