"use client";

import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const projectStages = ["Idéation", "Prototype", "Premiers clients", "En croissance"];

export default function InscriptionPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container" style={{ display: "grid", gap: "2.5rem", maxWidth: "780px" }}>
            <div>
              <p className="tagline">Candidature</p>
              <h1 className="section-title">Rejoignez la prochaine promotion</h1>
              <p className="section-subtitle">
                Remplissez ce formulaire pour partager votre vision et vos besoins. Nous revenons vers vous sous 5 jours ouvrés avec les prochaines étapes.
              </p>
            </div>
            {submitted ? (
              <article className="session-card" style={{ background: "#ecfdf5", borderColor: "#34d399" }}>
                <h2 style={{ marginBottom: "0.5rem", color: "#047857" }}>Merci pour votre candidature !</h2>
                <p style={{ color: "#047857" }}>
                  Vous allez recevoir un email de confirmation avec un lien pour planifier votre session de diagnostic. Pensez à vérifier vos spams.
                </p>
              </article>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid-two">
                  <div style={{ display: "grid", gap: "0.4rem" }}>
                    <label htmlFor="fullName">Nom &amp; prénom</label>
                    <input id="fullName" name="fullName" placeholder="Votre nom complet" required />
                  </div>
                  <div style={{ display: "grid", gap: "0.4rem" }}>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="vous@example.com" required />
                  </div>
                  <div style={{ display: "grid", gap: "0.4rem" }}>
                    <label htmlFor="age">Âge</label>
                    <input id="age" name="age" type="number" min="16" max="35" placeholder="24" required />
                  </div>
                  <div style={{ display: "grid", gap: "0.4rem" }}>
                    <label htmlFor="stage">Stade du projet</label>
                    <select id="stage" name="stage" required>
                      <option value="">Sélectionnez</option>
                      {projectStages.map((stage) => (
                        <option key={stage} value={stage}>
                          {stage}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div style={{ gridColumn: "1 / -1", display: "grid", gap: "0.4rem" }}>
                    <label htmlFor="projectName">Nom du projet</label>
                    <input id="projectName" name="projectName" placeholder="Le nom de votre initiative" required />
                  </div>
                  <div style={{ gridColumn: "1 / -1", display: "grid", gap: "0.4rem" }}>
                    <label htmlFor="description">Décrivez votre projet</label>
                    <textarea id="description" name="description" placeholder="Quels problèmes adressez-vous ? Quels sont vos objectifs ?" rows={5} required />
                  </div>
                  <div style={{ gridColumn: "1 / -1", display: "grid", gap: "0.4rem" }}>
                    <label htmlFor="expectations">Que cherchez-vous dans ce mentorat ?</label>
                    <textarea id="expectations" name="expectations" placeholder="Ex: affiner mon modèle économique, trouver un réseau..." rows={4} />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
                  Envoyer ma candidature
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
