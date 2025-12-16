const highlights = [
  {
    title: "Diagnostic 360°",
    description: "Une première session pour cartographier vos forces, vos besoins prioritaires et votre vision."
  },
  {
    title: "Parcours personnalisé",
    description: "Des rencontres individuelles et collectives selon votre secteur et votre stade de maturité."
  },
  {
    title: "Réseau régional",
    description: "Accès aux événements économiques, aux appels à projets et aux partenaires du territoire."
  }
];

export function ImpactHighlights() {
  return (
    <section className="section" style={{ background: "#f0f4ff" }}>
      <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
        <div>
          <p className="tagline">Expérience d&apos;accompagnement</p>
          <h2 className="section-title">Un cadre structurant pour libérer votre potentiel entrepreneurial</h2>
          <p className="section-subtitle">
            Chaque jeune entrepreneur bénéficie d&apos;un mentor référent, d&apos;ateliers thématiques et d&apos;une communauté active. L&apos;objectif : gagner 6 à 12 mois dans le développement de votre projet.
          </p>
        </div>
        <div className="card-grid">
          {highlights.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p style={{ color: "#4b5563", lineHeight: 1.7 }}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
