export type MemberStatus = "active" | "paused";

export interface Member {
  id: string;
  name: string;
  url: string;
  bio: string;
  tags: string[];
  addedAt: string;
  program?: string;
  year?: string;
  profilePic?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  connections?: string[];
  status?: MemberStatus;
}

/**
 * UNIVERSITY OF GUELPH WEBRING MEMBERS
 *
 * Join flow (PR-based):
 * 1) Add your square image to public/photos/your-name.jpg (optional)
 * 2) Add your entry below
 * 3) Open a pull request
 *
 * Required: id, name, url, bio, tags, addedAt
 */
export const members: Member[] = [
  {
    id: "jane-arbour",
    name: "Jane Arbour",
    url: "https://janearbour.dev",
    bio: "CS student building small web tools and experiments.",
    tags: ["web", "design", "oss"],
    addedAt: "2026-01-03",
    program: "Computer Science",
    year: "2027",
    connections: ["liam-hart", "maya-singh"],
    status: "active",
  },
  {
    id: "liam-hart",
    name: "Liam Hart",
    url: "https://liamhart.me",
    bio: "Robotics and embedded systems projects from campus labs.",
    tags: ["robotics", "hardware"],
    addedAt: "2026-01-06",
    program: "Engineering Systems and Computing",
    year: "2028",
    connections: ["jane-arbour"],
    status: "active",
  },
  {
    id: "maya-singh",
    name: "Maya Singh",
    url: "https://mayasingh.ca",
    bio: "Writing about data science, research, and student life.",
    tags: ["data", "writing"],
    addedAt: "2026-01-10",
    program: "Statistics",
    year: "2026",
    connections: ["jane-arbour"],
    status: "active",
  },
  {
    id: "owen-tan",
    name: "Owen Tan",
    url: "https://owentan.com",
    bio: "Building full-stack apps and documenting what I learn.",
    tags: ["fullstack", "nextjs"],
    addedAt: "2026-01-14",
    program: "Software Engineering",
    year: "2029",
    status: "active",
  },
];
