import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <p className="tagline">Programme éducatif territorial</p>
          <h1>Un mentorat sur mesure pour propulser les jeunes entrepreneurs locaux</h1>
          <p>
            Nous connectons les talents émergents à des mentors engagés issus des entreprises partenaires. Accélérez vos apprentissages, structurez votre projet et
            rejoignez une communauté de pairs solidaires.
          </p>
          <div className="hero-actions" style={{ display: "flex", gap: "1rem" }}>
            <Link href="/inscription" className="btn btn-primary">
              Déposer son projet
            </Link>
            <Link href="/mentors" className="btn btn-secondary">
              Découvrir les mentors
            </Link>
          </div>
          <div className="stats" style={{ marginTop: "2.5rem" }}>
            <div className="stat">
              <h4>92%</h4>
              <p>des participants accélèrent la mise sur le marché de leur offre</p>
            </div>
            <div className="stat">
              <h4>4.8/5</h4>
              <p>de satisfaction moyenne sur les sessions de mentorat</p>
            </div>
          </div>
        </div>
        <div>
          <div className="testimonial">
            <p>
              « Grâce aux mentors de la communauté, nous avons sécurisé nos premiers partenariats avec des entreprises locales en à peine deux mois. Les conseils et le réseau ont tout changé. »
            </p>
            <div>
              <strong>Inès &amp; Sami</strong>
              <p style={{ color: "#64748b" }}>Fondateurs de Terralunch, promotion 2023</p>
            </div>
          </div>
          <div style={{ marginTop: "1.5rem", display: "grid", gap: "0.8rem" }}>
            <span className="pill pill-success">Accompagnement gratuit pour les 18 - 30 ans</span>
            <span className="pill">Connexion aux réseaux d&apos;entreprises partenaires</span>
            <span className="pill pill-warning">Financement de démarrage jusqu&apos;à 5 000€</span>
          </div>
        </div>
      </div>
    </section>
  );
}
