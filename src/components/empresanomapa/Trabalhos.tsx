import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    name: "Ronaldo Lanches",
    type: "Lanchonete & Pizzaria",
    url: "https://ronaldolanches.site/",
    img: "/mockups/ronaldo-lanches.png",
    stack: ["SITE", "CARDÁPIO DIGITAL"],
    bg: "from-g-yellow/[0.06]",
  },
  {
    name: "Le' Glamour Studio Hair",
    type: "Salão de Beleza",
    url: "https://www.leglamour.site/",
    img: "/mockups/le-glamour.png",
    stack: ["SITE", "AGENDAMENTO"],
    bg: "from-g-red/[0.06]",
  },
  {
    name: "Amenti Terapias",
    type: "Terapias & Bem-estar",
    url: "https://www.amentiterapias.site/",
    img: "/mockups/amenti-terapias.png",
    stack: ["SITE", "CONVERSÃO"],
    bg: "from-g-blue/[0.06]",
  },
  {
    name: "Fabi Confeitaria Artesanal",
    type: "Confeitaria",
    url: "https://www.fabimaosdefada.site/",
    img: "/mockups/fabi-confeitaria.png",
    stack: ["SITE", "CATÁLOGO"],
    bg: "from-g-green/[0.06]",
  },
  {
    name: "Baterias Uberaba",
    type: "Automotivo",
    url: "https://www.bateriasuberaba.com.br/",
    img: "/mockups/baterias-uberaba.png",
    stack: ["SITE", "SEO LOCAL"],
    bg: "from-g-blue/[0.06]",
  },
];

export default function Trabalhos() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      className="relative py-[clamp(6rem,12vh,10rem)]"
      aria-label="Trabalhos"
    >
      <div className="mx-auto max-w-7xl px-[clamp(1.5rem,5vw,4rem)]" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-g-yellow"
        >
          04 / Trabalhos
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 font-fraunces text-[clamp(2rem,4vw,3rem)] font-light leading-tight tracking-[-0.03em] text-ink-100"
        >
          Projetos que saíram do papel.
        </motion.h2>

        {/* Mosaic grid — intentionally asymmetric */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {projects.map((p, i) => {
            const spans = [
              "lg:col-span-7",
              "lg:col-span-5",
              "lg:col-span-5",
              "lg:col-span-7",
              "lg:col-span-12",
            ];
            return (
              <motion.a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12 + 0.3, duration: 0.6 }}
                className={`group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-g-blue/30 ${spans[i]}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Gradient bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.bg} to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
                />

                {/* Content */}
                <div className={`relative z-10 p-6 md:p-8 ${i === 4 ? "lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center" : ""}`}>
                  {/* Real mockup screenshot */}
                  <div className={`mb-6 overflow-hidden rounded-lg border border-white/[0.04] ${i === 4 ? "lg:mb-0" : ""}`}>
                    <img
                      src={p.img}
                      alt={`Screenshot do site ${p.name}`}
                      className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="mb-1 font-fraunces text-xl text-ink-50">
                          {p.name}
                        </h3>
                        <p className="font-mono text-xs text-ink-500">{p.type}</p>
                      </div>
                      <motion.div
                        animate={{ rotate: hovered === i ? -45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-1 shrink-0 text-ink-500 transition-colors group-hover:text-g-blue"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </motion.div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.06] px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-ink-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="mt-4 font-mono text-[0.6rem] text-ink-700 transition-colors group-hover:text-g-blue/60">
                      Visitar site →
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}