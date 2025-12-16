import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const pillars = [
  {
    title: "Mentorat individuel",
    description: "Un mentor référent suit votre progression toutes les deux semaines pour répondre à vos défis immédiats."
  },
  {
    title: "Ateliers collectifs",
    description: "8 ateliers en ligne animés par des experts pour renforcer vos compétences clés (marketing, finances, impact...)."
  },
  {
    title: "Communauté apprenante",
    description: "Des groupes de co-développement et des événements mensuels pour partager, tester vos idées et grandir ensemble."
  }
];

const resources = [
  "Kit de démarrage pour structurer votre business model et votre proposition de valeur.",
  "Modèles de pitch, prévisionnel financier, plan d&apos;acquisition et indicateurs d&apos;impact.",
  "Accès à une plateforme collaborative pour suivre vos objectifs et planifier les sessions.",
  "Mentors spécialisés en tech, finance, marketing, impact social et industrialisation."
];

const commitments = [
  "Participer à minimum 6 sessions de mentorat individuel.",
  "Partager un point d&apos;avancement mensuel et vos indicateurs clés.",
  "Contribuer à la communauté (feedback, témoignages, entraide).",
  "Respecter la charte de mentorat et de confidentialité."
];

export default function ProgrammePage() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container" style={{ display: "grid", gap: "2.5rem" }}>
            <div>
              <p className="tagline">Architecture pédagogique</p>
              <h1 className="section-title">Un programme pensé par et pour les entrepreneurs du territoire</h1>
              <p className="section-subtitle">
                Notre approche s&apos;appuie sur les retours d&apos;expérience des mentors et des alumnis. Le programme se déroule 100% en ligne pour faciliter l&apos;accès des jeunes des zones rurales et périurbaines.
              </p>
            </div>
            <div className="grid-three">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="card">
                  <h3>{pillar.title}</h3>
                  <p style={{ color: "#4b5563", lineHeight: 1.7 }}>{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section" style={{ background: "#f1f5f9" }}>
          <div className="container" style={{ display: "grid", gap: "2rem" }}>
            <div>
              <p className="tagline">Ressources clés</p>
              <h2 className="section-title">Ce que vous obtenez en rejoignant le programme</h2>
            </div>
            <ul style={{ listStyle: "none", display: "grid", gap: "1.2rem", background: "#ffffff", padding: "2rem", borderRadius: "1.5rem", boxShadow: "0 15px 30px rgba(15,23,42,0.08)" }}>
              {resources.map((item) => (
                <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", color: "#475569" }}>
                  <span style={{ background: "#dbeafe", color: "#1d4ed8", borderRadius: "999px", fontWeight: 700, padding: "0.35rem 0.65rem" }}>✓</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="section">
          <div className="container" style={{ display: "grid", gap: "2rem" }}>
            <div>
              <p className="tagline">Vos engagements</p>
              <h2 className="section-title">Un accompagnement gratuit qui repose sur la confiance et la réciprocité</h2>
            </div>
            <ul style={{ listStyle: "none", display: "grid", gap: "1rem" }}>
              {commitments.map((item) => (
                <li key={item} className="session-card" style={{ background: "#f8fafc" }}>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
