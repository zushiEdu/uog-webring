"use client";

import { useMemo, useState } from "react";
import type { Member } from "@/data/members";

interface MembersDirectoryProps {
  members: Member[];
}

export function MembersDirectory({ members }: MembersDirectoryProps) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("all");
  const [sort, setSort] = useState("alphabetical");

  const tags = useMemo(() => {
    const all = new Set<string>();
    members.forEach((member) => member.tags.forEach((t) => all.add(t)));
    return ["all", ...Array.from(all).sort((a, b) => a.localeCompare(b))];
  }, [members]);

  const filtered = useMemo(() => {
    const bySearch = members.filter((member) => {
      const blob = `${member.name} ${member.bio} ${member.tags.join(" ")}`.toLowerCase();
      return blob.includes(query.toLowerCase());
    });

    const byTag = tag === "all" ? bySearch : bySearch.filter((member) => member.tags.includes(tag));

    return [...byTag].sort((a, b) => {
      if (sort === "newest") {
        return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
      }
      return a.name.localeCompare(b.name);
    });
  }, [members, query, tag, sort]);

  return (
    <section className="directory-shell">
      <div className="directory-controls" role="search">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search members, bios, tags..."
          aria-label="Search members"
        />
        <select value={tag} onChange={(event) => setTag(event.target.value)} aria-label="Filter by tag">
          {tags.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort members">
          <option value="alphabetical">Alphabetical</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      <p className="meta">{filtered.length} member(s)</p>

      <div className="member-grid">
        {filtered.map((member) => (
          <article key={member.id} className="member-card">
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
            <div className="chip-row">
              {member.tags.map((entry) => (
                <span key={entry} className="chip">
                  {entry}
                </span>
              ))}
            </div>
            <a href={member.url} target="_blank" rel="noopener noreferrer">
              Visit site
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
