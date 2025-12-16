import { sessions } from "@/data/sessions";
import { mentors } from "@/data/mentors";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Link from "next/link";

export function SessionPreview() {
  return (
    <section className="section" style={{ background: "#f8fafc" }}>
      <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
        <div>
          <p className="tagline">Sessions à venir</p>
          <h2 className="section-title">Des rencontres virtuelles et dynamiques pour progresser rapidement</h2>
          <p className="section-subtitle">
            Chaque session mêle retours d&apos;expérience concrets et activation de votre projet. Rejoignez les créneaux adaptés à votre rythme.
          </p>
        </div>
        <div className="card-grid">
          {sessions.map((session) => {
            const mentor = mentors.find((m) => m.id === session.mentorId);
            return (
              <article key={session.id} className="card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="pill">{session.format === "atelier" ? "Atelier collectif" : session.format === "table-ronde" ? "Table ronde" : "Mentorat individuel"}</span>
                  <span style={{ fontWeight: 600, color: "#7c3aed" }}>
                    {format(new Date(session.date), "EEEE d MMMM · HH'h'mm", { locale: fr })}
                  </span>
                </div>
                <h3>{session.theme}</h3>
                <p style={{ color: "#475569", lineHeight: 1.7 }}>{session.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {session.tags.map((tag) => (
                    <span key={tag} className="pill">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem", flexWrap: "wrap", gap: "0.75rem" }}>
                  <span style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                    Animé par <strong>{mentor?.name}</strong>
                  </span>
                  <span className="pill pill-warning">
                    {session.spotsLeft} / {session.capacity} places restantes
                  </span>
                </div>
                <Link href="/sessions" className="btn btn-secondary" style={{ marginTop: "0.75rem", justifyContent: "center" }}>
                  S&apos;inscrire à la session
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
