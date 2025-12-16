import Link from "next/link";

export function CallToAction() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner">
          <div>
            <h2>Prêt à accélérer votre projet ?</h2>
            <p>
              Déposez votre candidature pour rejoindre la prochaine promotion. Le programme est gratuit pour les jeunes de 18 à 30 ans résidant sur le territoire. Places limitées à 25 projets.
            </p>
          </div>
          <div style={{ display: "grid", gap: "1rem" }}>
            <Link href="/inscription" className="btn btn-secondary" style={{ fontSize: "1rem" }}>
              Candidater en 10 minutes
            </Link>
            <Link href="/sessions" style={{ color: "#e0e7ff", fontWeight: 600 }}>
              Voir les prochaines sessions →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
