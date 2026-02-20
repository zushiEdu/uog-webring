import Link from "next/link";

const nav = [
  { href: "/join", label: "Join" },
  { href: "/embed.js", label: "Widget" },
];

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
        uoguelph.network
      </Link>
      <nav className="site-nav" aria-label="Primary">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
