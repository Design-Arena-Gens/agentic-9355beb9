import Link from "next/link";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/mentors", label: "Mentors" },
  { href: "/programme", label: "Programme" },
  { href: "/sessions", label: "Sessions" }
];

export function Header() {
  return (
    <header>
      <div className="container" style={{ padding: "1.2rem 0", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
        <Link href="/" style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
          <span style={{ fontWeight: 800, fontSize: "1.2rem", color: "#1d4ed8" }}>Mentorat Local</span>
          <span style={{ fontSize: "0.85rem", color: "#64748b" }}>Jeunes Entrepreneurs</span>
        </Link>

        <nav>
          <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none" }}>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} style={{ color: "#1f2937", fontWeight: 600 }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/inscription" className="btn btn-primary">
          Rejoindre le programme
        </Link>
      </div>
    </header>
  );
}
