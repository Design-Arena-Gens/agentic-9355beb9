const steps = [
  {
    title: "1. Candidature & sélection",
    details: [
      "Formulaire en ligne détaillant votre projet",
      "Pitch vidéo (3 minutes) pour présenter votre vision",
      "Comité de sélection réunissant mentors et acteurs publics"
    ]
  },
  {
    title: "2. Diagnostic partagé",
    details: [
      "Session d&apos;alignement mentor / entrepreneur",
      "Cartographie de vos besoins prioritaires",
      "Construction de votre feuille de route d&apos;accompagnement"
    ]
  },
  {
    title: "3. Mentorat & ateliers",
    details: [
      "Mentorat individuel toutes les deux semaines",
      "Ateliers collectifs sur 8 thématiques clés",
      "Cliniques experts (juridique, fiscal, marketing)"
    ]
  },
  {
    title: "4. Démo territoriale",
    details: [
      "Préparation du pitch final avec votre mentor",
      "Rencontre investisseurs, banques & partenaires",
      "Accès au fonds d&apos;amorçage local"
    ]
  }
];

export function ProgramTimeline() {
  return (
    <section className="section">
      <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
        <div>
          <p className="tagline">Parcours en 6 mois</p>
          <h2 className="section-title">Un programme intensif pour passer de l&apos;idée au marché</h2>
          <p className="section-subtitle">
            Nous combinons mentorat individuel, ateliers d&apos;experts et opportunités de financement pour accélérer votre projet. Chaque étape est pensée pour créer de la traction rapidement.
          </p>
        </div>
        <div className="card-grid">
          {steps.map((step) => (
            <article key={step.title} className="card">
              <h3>{step.title}</h3>
              <ul style={{ listStyle: "none", display: "grid", gap: "0.75rem", color: "#4b5563" }}>
                {step.details.map((detail) => (
                  <li key={detail} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                    <span style={{ color: "#6366f1", fontWeight: 700 }}>•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
