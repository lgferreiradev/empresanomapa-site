import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/empresanomapa/Loader";
import Hero from "@/components/empresanomapa/Hero";
import Sobre from "@/components/empresanomapa/Sobre";
import Servicos from "@/components/empresanomapa/Servicos";
import GMBSection from "@/components/empresanomapa/GMBSection";
import Trabalhos from "@/components/empresanomapa/Trabalhos";
import ComoTrabalho from "@/components/empresanomapa/ComoTrabalho";
import Fechamento from "@/components/empresanomapa/Fechamento";
import Rodape from "@/components/empresanomapa/Rodape";
import MeusLinks from "@/pages/MeusLinks";

function Home() {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <div className="bg-ink-950 text-ink-100 min-h-screen relative overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: "url(/textures/noise.svg)", backgroundRepeat: "repeat" }}
      />

      <AnimatePresence mode="wait">
        {!loaded && <Loader key="loader" onComplete={handleComplete} />}
      </AnimatePresence>

      {loaded && (
        <main className="relative z-10">
          <Hero />
          <Sobre />
          <Servicos />
          <GMBSection />
          <Trabalhos />
          <ComoTrabalho />
          <Fechamento />
          <Rodape />
        </main>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meuslinks" element={<MeusLinks />} />
      </Routes>
    </BrowserRouter>
  );
}
