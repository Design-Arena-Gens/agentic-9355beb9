import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { sessions } from "@/data/sessions";
import { mentors } from "@/data/mentors";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function SessionsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
            <div>
              <p className="tagline">Sessions virtuelles</p>
              <h1 className="section-title">Choisissez les sessions qui correspondent à vos enjeux du moment</h1>
              <p className="section-subtitle">
                Les ateliers et mentorats collectifs se déroulent sur notre plateforme de visioconférence. Chaque session est enregistrée pour les participants inscrits.
              </p>
            </div>
            <div className="session-list">
              {sessions.map((session) => {
                const mentor = mentors.find((m) => m.id === session.mentorId);
                return (
                  <article key={session.id} className="session-card">
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
                      <span className="pill">
                        {session.format === "atelier" ? "Atelier collectif" : session.format === "table-ronde" ? "Table ronde" : "Mentorat individuel"}
                      </span>
                      <span style={{ fontWeight: 600, color: "#1d4ed8" }}>
                        {format(new Date(session.date), "EEEE d MMMM yyyy · HH'h'mm", { locale: fr })}
                      </span>
                    </div>
                    <h3>{session.theme}</h3>
                    <p>{session.description}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {session.tags.map((tag) => (
                        <span key={tag} className="pill">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: "grid", gap: "0.3rem", color: "#475569", marginTop: "0.75rem" }}>
                      <span>Animé par {mentor?.name}</span>
                      <span>Durée : {session.duration}</span>
                      <span>Capacité : {session.capacity} participants · {session.spotsLeft} places disponibles</span>
                    </div>
                    <form style={{ marginTop: "1rem" }}>
                      <div style={{ display: "grid", gap: "0.75rem" }}>
                        <div style={{ display: "grid", gap: "0.35rem" }}>
                          <label htmlFor={`${session.id}-name`}>Nom &amp; prénom</label>
                          <input id={`${session.id}-name`} name="name" placeholder="Votre nom complet" required />
                        </div>
                        <div style={{ display: "grid", gap: "0.35rem" }}>
                          <label htmlFor={`${session.id}-email`}>Email</label>
                          <input id={`${session.id}-email`} type="email" name="email" placeholder="vous@example.com" required />
                        </div>
                        <div style={{ display: "grid", gap: "0.35rem" }}>
                          <label htmlFor={`${session.id}-project`}>Projet porté</label>
                          <input id={`${session.id}-project`} name="project" placeholder="Nom du projet" />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary" style={{ marginTop: "0.75rem" }}>
                        Pré-réserver une place
                      </button>
                    </form>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
