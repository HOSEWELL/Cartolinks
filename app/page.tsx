import Header from "./components/header";
import Hero from "./components/hero";
import GenerateGrid from "./components/generate-grid";
import Gallery from "./components/gallery";
import BrandBar from "./components/brandbar";

export default function HomePage() {
  return (
    <main className="min-h-dvh pb-24">
      <Header />
      <Hero />

      {/* Generate section with scroll offset */}
      <section id="generate" className="scroll-mt-24">
        <GenerateGrid />
      </section>

      {/* Gallery section with scroll offset */}
      <section id="gallery" className="scroll-mt-24">
        <Gallery />
      </section>

      {/* Placeholder sections so nav links work */}
      <section id="pricing" className="scroll-mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="card p-6 text-sm">Pricing coming soon…</div>
      </section>

      <section id="support" className="scroll-mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="card p-6 text-sm">Support info coming soon…</div>
      </section>

      <BrandBar />
    </main>
  );
}
