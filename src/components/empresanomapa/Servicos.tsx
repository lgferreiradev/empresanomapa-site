import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "Tráfego Pago",
    text: "Campanhas no Google Ads e Meta Ads que colocam seu negócio na frente de quem já está procurando. Vender, gerar contato, posicionar marca — cada campanha com objetivo claro e investimento controlado.",
    tags: ["GOOGLE ADS", "META ADS"],
    color: "bg-g-blue",
    size: "lg:col-span-2",
  },
  {
    num: "02",
    title: "Sites de alta conversão",
    text: "Web design e desenvolvimento front-end com foco real em conversão. Não só bonito — funcional, rápido e pensado para que cada visitante se torne um contato.",
    tags: ["WEB DESIGN", "FRONT-END", "CONVERSÃO"],
    color: "bg-g-red",
    size: "lg:row-span-2",
  },
  {
    num: "03",
    title: "Google Meu Negócio",
    text: "Seu negócio visível no Google Maps e na busca local. Perfil otimizado, fotos atualizadas, avaliações gerenciadas — para que quem busca perto encontre você primeiro.",
    tags: ["GMB", "SEO LOCAL", "MAPS"],
    color: "bg-g-green",
    size: "lg:col-span-2",
  },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18 + 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Servicos() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-[clamp(6rem,12vh,10rem)]"
      aria-label="Serviços"
    >
      <div className="mx-auto max-w-7xl px-[clamp(1.5rem,5vw,4rem)]" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-g-red"
        >
          02 / Serviços
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-2xl font-fraunces text-[clamp(2rem,4vw,3rem)] font-light leading-tight tracking-[-0.03em] text-ink-100"
        >
          Três peças que funcionam como <span className="italic text-ink-300">uma só.</span>
        </motion.h2>

        {/* Service grid — asymmetric */}
        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fade}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/60 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-g-blue/30 ${s.size}`}
            >
              {/* Ordinal indicator */}
              <span className="absolute right-6 top-6 font-mono text-[0.65rem] text-ink-700">
                {s.num}
              </span>

              {/* Color accent dot */}
              <div className={`mb-6 h-2 w-2 rounded-full ${s.color}`} />

              <h3 className="mb-4 font-fraunces text-2xl font-normal text-ink-50">
                {s.title}
              </h3>
              <p className="mb-6 max-w-lg text-[0.9375rem] leading-relaxed text-ink-500">
                {s.text}
              </p>

              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.06] px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-ink-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Subtle glow on hover */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-g-blue/[0.04] opacity-0 blur-[60px] transition-opacity duration-700 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-20 text-center font-fraunces text-[clamp(1.3rem,2.5vw,2rem)] font-light italic leading-snug text-ink-300"
        >
          "Um serviço puxa o outro. Quem entende isso, sai na frente."
        </motion.blockquote>
      </div>

      {/* SVG connecting lines — decorative */}
      <svg
        className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-[0.04]"
        aria-hidden="true"
      >
        <line x1="33%" y1="30%" x2="66%" y2="40%" stroke="#F4F4F5" strokeWidth="1" />
        <line x1="66%" y1="40%" x2="33%" y2="70%" stroke="#F4F4F5" strokeWidth="1" />
      </svg>
    </section>
  );
}