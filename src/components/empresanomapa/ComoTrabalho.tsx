import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  {
    num: "01",
    title: "Entender antes de propor.",
    text: "Antes de qualquer campanha ou site, eu olho o negócio. O que vende, para quem, e por quê.",
    color: "text-g-blue",
  },
  {
    num: "02",
    title: "Tráfego só faz sentido se o destino converter.",
    text: "Anúncio sem site bom é dinheiro queimado. Site bonito sem tráfego é vitrine no deserto.",
    color: "text-g-red",
  },
  {
    num: "03",
    title: "Local primeiro, escala depois.",
    text: "Para negócio local, dominar o bairro vale mais que aparecer no Brasil inteiro.",
    color: "text-g-yellow",
  },
  {
    num: "04",
    title: "Sem promessa que eu não posso entregar.",
    text: "Resultado vem de método e tempo, não de discurso.",
    color: "text-g-green",
  },
];

export default function ComoTrabalho() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative bg-ink-900 py-[clamp(6rem,12vh,10rem)]"
      aria-label="Como trabalho"
    >
      <div className="mx-auto max-w-7xl px-[clamp(1.5rem,5vw,4rem)]" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-500"
        >
          05 / Princípios
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl font-fraunces text-[clamp(2rem,4vw,3rem)] font-light leading-tight tracking-[-0.03em] text-ink-100"
        >
          Como eu trabalho.
        </motion.h2>

        <div className="space-y-16 lg:space-y-20">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
              className="grid items-start gap-6 lg:grid-cols-[120px_1fr] lg:gap-12"
            >
              <span className={`font-fraunces text-[clamp(3rem,5vw,4.5rem)] font-light leading-none ${p.color}`}>
                {p.num}
              </span>
              <div className="max-w-xl">
                <h3 className="mb-3 font-fraunces text-xl italic text-ink-100">
                  {p.title}
                </h3>
                <p className="text-[1.0625rem] leading-relaxed text-ink-500">
                  {p.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}