"use client";

import React, { useState, useEffect } from "react";
import type { Member } from "@/data/members";
import type { Connection } from "@/lib/connections";
import MembersTable from "@/components/MembersTable";
import NetworkGraph from "@/components/NetworkGraph";
import AsciiBackground from "@/components/AsciiBackground";
import { Search } from "lucide-react";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface SearchableContentProps {
  members: Member[];
  connections: Connection[];
}

export default function SearchableContent({ members, connections }: SearchableContentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [shuffledMembers, setShuffledMembers] = useState<Member[]>(members);

  useEffect(() => {
    setShuffledMembers(shuffleArray(members));
  }, [members]);

  const filteredMembers = searchQuery
    ? shuffledMembers.filter(
        (member) =>
          member.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.program?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.url?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.bio?.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : shuffledMembers;

  const filteredMemberIds = new Set(filteredMembers.map((member) => member.id));
  const filteredConnections = searchQuery
    ? connections.filter(
        (conn) => filteredMemberIds.has(conn.fromId) && filteredMemberIds.has(conn.toId),
      )
    : connections;

  return (
    <main className="main-container">
      <AsciiBackground />
      <div className="content-wrapper">
        <div className="header-section">
          <div className="title-row">
            <h1 className="title">uoguelph.network</h1>
          </div>
          <div className="description">
            <p>welcome to the official webring for university of guelph students.</p>
            <p>
              our school is home to talented engineers, builders, makers, artists, designers,
              writers, and everything in between. this is a place to find other cool people in
              guelph who publish on the web.
            </p>
            <p>
              want to join?{" "}
              <a
                href="/join"
                className="join-link"
              >
                submit a pull request
              </a>
            </p>
          </div>
        </div>

        <div className="table-section">
          <MembersTable members={filteredMembers} searchQuery={searchQuery} />
        </div>
      </div>

      <div className="graph-section">
        <div className="search-bar-container">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search members..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="search-clear-btn">
              Clear
            </button>
          )}
        </div>
        <NetworkGraph
          members={members}
          connections={filteredConnections}
          highlightedMemberIds={filteredMembers.map((member) => member.id)}
          searchQuery={searchQuery}
        />
      </div>
    </main>
  );
}
