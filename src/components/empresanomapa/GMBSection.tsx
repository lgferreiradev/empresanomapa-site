import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({ target, suffix = "", inView }: { target: number; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 46, suffix: "%", label: "das buscas no Google\ntêm intenção local" },
  { value: 88, suffix: "%", label: "dos consumidores que pesquisam\num negócio local visitam ou ligam em 24h" },
  { value: 5, suffix: "x", label: "mais visualizações para perfis\ncom fotos atualizadas" },
];

export default function GMBSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative bg-ink-900 py-[clamp(6rem,12vh,10rem)] overflow-hidden"
      aria-label="Google Meu Negócio"
    >
      {/* Glow */}
      <div className="absolute -right-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-g-green/[0.05] blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-[clamp(1.5rem,5vw,4rem)]" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-g-green"
        >
          03 / Google Meu Negócio
        </motion.p>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Stats dashboard */}
          <div className="space-y-10">
            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8 }}
              className="font-fraunces text-[clamp(2rem,4vw,3rem)] font-light leading-tight tracking-[-0.03em] text-ink-100"
            >
              Quem aparece no mapa, <span className="italic text-ink-300">ganha.</span>
            </motion.h2>

            <div className="space-y-8">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.2 + 0.4, duration: 0.6 }}
                  className="flex items-baseline gap-6"
                >
                  <span className="shrink-0 font-fraunces text-[clamp(3rem,6vw,4.5rem)] font-light leading-none tracking-tight text-ink-50">
                    <CountUp target={s.value} suffix={s.suffix} inView={inView} />
                  </span>
                  <p className="whitespace-pre-line font-mono text-xs leading-relaxed text-ink-500">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Explanation + mock search */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="space-y-8 lg:pt-8"
          >
            <div className="space-y-4 text-[1.0625rem] leading-[1.7] text-ink-300">
              <p>
                O Google Meu Negócio é provavelmente o canal mais subestimado por
                negócios locais — e o que dá mais resultado com menor investimento.
              </p>
              <p>
                Quando alguém busca "padaria perto de mim" ou "mecânico em Uberaba",
                os 3 primeiros resultados do mapa recebem a esmagadora maioria dos
                cliques. Quem não aparece ali, simplesmente{" "}
                <span className="text-ink-100">não existe</span> para o cliente local.
              </p>
              <p>
                Um perfil bem cuidado — com fotos atualizadas, informações corretas,
                avaliações respondidas e posts frequentes — é a diferença entre ser
                encontrado ou ser ignorado.
              </p>
            </div>

            {/* Mock Google Search */}
            <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-ink-800 p-5">
              <div className="mb-4 flex items-center gap-3 rounded-full border border-white/[0.08] bg-ink-950 px-4 py-2.5">
                <svg className="h-4 w-4 text-ink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <span className="font-mono text-sm text-ink-300">restaurante perto de mim</span>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Ronaldo Lanches Pastéis e Pizza", rating: "4.7", reviews: "1.2 mil", color: "text-g-blue" },
                  { name: "Le' Glamour Studio Hair", rating: "4.9", reviews: "286", color: "text-ink-300" },
                  { name: "Baterias Uberaba", rating: "4.8", reviews: "412", color: "text-ink-500" },
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-ink-900/50">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-g-blue/10">
                      <span className="font-mono text-[0.6rem] font-bold text-g-blue">{i + 1}</span>
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${r.color}`}>{r.name}</p>
                      <p className="font-mono text-[0.6rem] text-ink-500">
                        ⭐ {r.rating} ({r.reviews} avaliações)
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}