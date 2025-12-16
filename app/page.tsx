import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { ImpactHighlights } from "./components/ImpactHighlights";
import { ProgramTimeline } from "./components/ProgramTimeline";
import { MentorSpotlight } from "./components/MentorSpotlight";
import { SessionPreview } from "./components/SessionPreview";
import { CallToAction } from "./components/CallToAction";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ImpactHighlights />
        <ProgramTimeline />
        <MentorSpotlight />
        <SessionPreview />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
