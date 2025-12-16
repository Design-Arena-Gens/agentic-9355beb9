export function Footer() {
  return (
    <footer>
      <div className="container" style={{ padding: "2.5rem 0", display: "grid", gap: "1.5rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
            <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#1d4ed8" }}>Mentorat Local</span>
            <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>Accélérer l&apos;impact des jeunes entrepreneurs.</span>
          </div>
          <div className="badge-grid" style={{ maxWidth: "520px" }}>
            <div className="badge">
              🚀 <span>+80 projets accompagnés</span>
            </div>
            <div className="badge">
              🤝 <span>35 mentors actifs</span>
            </div>
            <div className="badge">
              🌍 <span>Basé en région</span>
            </div>
          </div>
        </div>
        <div style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
          © {new Date().getFullYear()} Mentorat Local. Créé par les acteurs économiques engagés pour la jeunesse entrepreneuriale.
        </div>
      </div>
    </footer>
  );
}
