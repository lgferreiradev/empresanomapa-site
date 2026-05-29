import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  { number: "+5", label: "anos de\nexperiência" },
  { label: "Especialidade", value: "Tráfego Pago\n& Web Design" },
  { label: "Atendimento", value: "Uberaba e região\nRemoto — Brasil" },
];

const stagger = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 + 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Sobre() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative bg-ink-900 py-[clamp(6rem,12vh,10rem)]"
      aria-label="Sobre"
    >
      <div className="mx-auto max-w-7xl px-[clamp(1.5rem,5vw,4rem)]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mb-12 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-g-blue"
          ref={ref}
        >
          01 / Sobre
        </motion.p>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-[58ch] space-y-6 text-[1.0625rem] leading-[1.7] text-ink-300"
          >
            <p>
              Meu nome é Guilherme, tenho 29 anos e moro em Uberaba, Minas Gerais.
              Trabalho com tráfego pago, criação de sites e gestão de perfis
              empresariais no Google — o que muita gente conhece como Google Meu
              Negócio ou Google Maps.
            </p>
            <p>
              Na prática, eu ajudo negócios locais a serem encontrados por quem
              realmente está procurando. Isso significa montar campanhas no Google
              Ads e Meta Ads que trazem gente qualificada, criar sites que
              transformam visitante em contato, e garantir que o perfil do negócio
              no Google esteja visível e bem posicionado.
            </p>
            <p>
              Essas três coisas formam um <span className="text-ink-100 font-medium">sistema</span>.
              Um anúncio sem site bom não converte. Um site sem tráfego não recebe
              visita. E um perfil no Google abandonado é invisível pra quem busca
              "perto de mim". Quando os três funcionam juntos, o resultado aparece.
            </p>
            <p className="text-ink-100 font-fraunces text-xl italic">
              Clareza no trabalho, resultado como consequência — não como promessa.
            </p>
          </motion.div>

          {/* Info cards */}
          <div className="flex flex-col gap-4 lg:pt-8">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={stagger}
                className="rounded-2xl border border-white/[0.06] bg-ink-900 p-8 backdrop-blur-sm"
              >
                {card.number ? (
                  <>
                    <span className="font-fraunces text-5xl font-light text-ink-50">
                      {card.number}
                    </span>
                    <p className="mt-2 whitespace-pre-line font-mono text-xs uppercase tracking-[0.1em] text-ink-500">
                      {card.label}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink-500">
                      {card.label}
                    </p>
                    <p className="mt-2 whitespace-pre-line font-fraunces text-lg text-ink-100">
                      {card.value}
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}