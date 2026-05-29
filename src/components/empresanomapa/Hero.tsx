import { motion } from "framer-motion";
import { useRef } from "react";

const blur = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-[0.12]"
          poster="/minha-foto/guilherme.jpg"
        >
          <source src="/minha-foto/video-banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/60 to-ink-950" />
      </div>

      {/* Glow orb */}
      <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-g-blue/[0.07] blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full px-[clamp(1.5rem,5vw,4rem)] py-32 lg:py-0">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          {/* Left — headline */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.p
              custom={0}
              variants={fade}
              className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-500"
            >
              Tráfego &middot; Design &middot; Presença Digital
            </motion.p>

            <div className="space-y-1">
              <motion.h1
                custom={1}
                variants={blur}
                className="font-fraunces text-[clamp(2.8rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-ink-50"
              >
                Negócios locais
              </motion.h1>
              <motion.h1
                custom={2}
                variants={blur}
                className="font-fraunces text-[clamp(2.8rem,7vw,5.5rem)] font-light italic leading-[0.95] tracking-[-0.03em] text-ink-300"
              >
                precisam{" "}
                <span className="bg-gradient-to-r from-g-blue via-g-red to-g-yellow bg-clip-text text-transparent">
                  aparecer
                </span>
              </motion.h1>
              <motion.h1
                custom={3}
                variants={blur}
                className="font-fraunces text-[clamp(2.8rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-ink-50"
              >
                onde as pessoas procuram.
              </motion.h1>
            </div>

            <motion.p
              custom={5}
              variants={fade}
              className="max-w-md text-[1.0625rem] leading-relaxed text-ink-500"
            >
              Gestão de tráfego pago, sites que convertem e perfis no Google que
              colocam seu negócio na frente de quem realmente está procurando.
            </motion.p>
          </motion.div>

          {/* Right — photo + info */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6 lg:items-start"
          >
            <motion.div
              custom={3}
              variants={fade}
              className="relative aspect-[3/4] w-56 overflow-hidden rounded-2xl border border-white/[0.06] lg:w-64"
            >
              <img
                src="/minha-foto/guilherme.jpg"
                alt="Guilherme Ferreira, gestor de tráfego e web designer em Uberaba MG"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
            </motion.div>

            <motion.div custom={4} variants={fade} className="space-y-1 text-center lg:text-left">
              <p className="font-mono text-sm text-ink-100">Guilherme Ferreira</p>
              <p className="font-mono text-xs text-ink-500">
                Gestor de Tráfego &amp; Web Designer
              </p>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink-500">
                📍 Uberaba — MG
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-500">
            role a página
          </span>
          <motion.div
            animate={{ height: ["0%", "100%", "0%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px bg-ink-500/50"
            style={{ height: 40 }}
          />
        </motion.div>
      </div>
    </section>
  );
}