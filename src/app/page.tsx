import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealProvider } from "@/components/layout/RevealProvider";
import { Hero } from "@/components/sections/Hero";
import {
  Problems,
  Benefits,
  Modules,
  Tech,
  Offer,
  Faq,
  Finale,
} from "@/components/sections/Sections";

export default function HomePage() {
  return (
    <>
      <RevealProvider />
      <Header />
      <main id="conteudo">
        <Hero />
        <Problems />
        <Benefits />
        <Modules />
        <Tech />
        <Offer />
        <Faq />
        <Finale />
      </main>
      <Footer />
    </>
  );
}
