import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join",
  description:
    "How to join uoguelph.network: add your University of Guelph website to the webring via pull request.",
  alternates: { canonical: "/join" },
};

export default function JoinPage() {
  return (
    <main className="page">
      <section className="hero compact">
        <p className="eyebrow">Join</p>
        <h1>Join the UoGuelph webring via pull request.</h1>
        <p>Add your member entry to `data/members.ts` and open a PR.</p>
      </section>

      <section className="join-steps">
        <ol>
          <li>Fork the repo and create a branch.</li>
          <li>(Optional) Add a square image to `public/photos/`.</li>
          <li>Add your record in `data/members.ts` using the template fields.</li>
          <li>Run `npm test` and `npm run lint` locally.</li>
          <li>Open a pull request with your website and a short intro.</li>
        </ol>
      </section>

      <section className="join-snippet">
        <h2>Widget embed snippet</h2>
        <pre>
{`<script
  src="https://uoguelph.network/embed.js"
  data-webring
  data-user="your-member-id"
  data-mode="ring"
></script>`}
        </pre>
      </section>
    </main>
  );
}
