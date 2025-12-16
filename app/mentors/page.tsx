import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { mentors } from "@/data/mentors";

export default function MentorsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
            <div>
              <p className="tagline">Nos mentors engagés</p>
              <h1 className="section-title">Des professionnels de terrain au service de la prochaine génération</h1>
              <p className="section-subtitle">
                Chaque mentor est formé aux méthodologies pédagogiques du programme. Ils partagent leur expérience, ouvrent leur réseau et vous mettent en relation avec les bons interlocuteurs.
              </p>
            </div>
            <div className="mentors-list">
              {mentors.map((mentor) => (
                <article key={mentor.id} className="mentor-card">
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <h3>{mentor.name}</h3>
                    <span style={{ color: "#6366f1", fontWeight: 600 }}>
                      {mentor.title} · {mentor.company}
                    </span>
                  </div>
                  <p>{mentor.bio}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {mentor.expertise.map((skill) => (
                      <span key={skill} className="pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.8rem", marginTop: "0.5rem" }}>
                    <span className="pill pill-success">Disponibilités : {mentor.availability}</span>
                    <span style={{ color: "#64748b", fontSize: "0.9rem" }}>Langues : {mentor.languages.join(", ")}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
