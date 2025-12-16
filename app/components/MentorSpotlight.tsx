import { mentors } from "@/data/mentors";

export function MentorSpotlight() {
  return (
    <section className="section" style={{ background: "#ffffff" }}>
      <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
        <div>
          <p className="tagline">Communauté de mentors</p>
          <h2 className="section-title">Des professionnels engagés aux côtés des jeunes pousses du territoire</h2>
          <p className="section-subtitle">
            Nos mentors sont issus d&apos;entreprises installées localement. Ils consacrent 3 heures par mois pour transmettre leurs expertises et ouvrir leurs réseaux.
          </p>
        </div>
        <div className="card-grid">
          {mentors.map((mentor) => (
            <article key={mentor.id} className="card">
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <h3>{mentor.name}</h3>
                <span style={{ color: "#6366f1", fontWeight: 600 }}>
                  {mentor.title} · {mentor.company}
                </span>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                  {mentor.expertise.map((skill) => (
                    <span key={skill} className="pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <p style={{ color: "#4b5563", lineHeight: 1.7 }}>{mentor.bio}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.8rem" }}>
                <span className="pill pill-success">Disponibilités : {mentor.availability}</span>
                <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>Langues : {mentor.languages.join(", ")}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
