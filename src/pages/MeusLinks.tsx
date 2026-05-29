import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const links = [
  {
    label: "Orçamentos",
    href: "https://wa.me/5534984036039?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento.",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: "from-g-green to-g-blue",
    glow: "rgba(52,168,83,0.35)",
  },
  {
    label: "Meu Site",
    href: "/",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.467.732-3.558" />
      </svg>
    ),
    color: "from-g-blue to-g-blue",
    glow: "rgba(66,133,244,0.35)",
    internal: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/guiilherme.f01?igsh=OXllZ3I3azM5eTZu&utm_source=qr",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    color: "from-g-red to-g-yellow",
    glow: "rgba(234,67,53,0.3)",
  },
];

export default function MeusLinks() {
  return (
    <div className="relative min-h-screen bg-ink-950 flex items-center justify-center overflow-hidden">
      {/* Noise texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: "url(/textures/noise.svg)", backgroundRepeat: "repeat" }}
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-g-blue/[0.06] blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-g-green/[0.05] blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-g-red/[0.04] blur-[100px]" />

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-md px-6 py-16"
      >
        {/* Avatar */}
        <motion.div custom={0} variants={fade} className="flex flex-col items-center mb-10">
          <div className="relative mb-5">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-g-blue via-g-red to-g-yellow opacity-70 blur-sm" />
            <img
              src="/minha-foto/guilherme.jpg"
              alt="Guilherme Ferreira"
              className="relative h-28 w-28 rounded-full object-cover border-2 border-ink-900"
            />
          </div>

          <h1 className="font-fraunces text-2xl font-semibold tracking-[-0.02em] text-ink-50">
            Guilherme Ferreira
          </h1>
          <p className="mt-1 font-mono text-xs text-ink-500 tracking-wide">
            Gestor de Tráfego & Web Designer
          </p>
          <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-ink-600">
            Uberaba — MG
          </p>

          {/* Google colors bar */}
          <div className="mt-5 flex gap-1">
            <span className="h-[2px] w-6 rounded-full bg-g-blue" />
            <span className="h-[2px] w-6 rounded-full bg-g-red" />
            <span className="h-[2px] w-6 rounded-full bg-g-yellow" />
            <span className="h-[2px] w-6 rounded-full bg-g-green" />
          </div>
        </motion.div>

        {/* Link buttons */}
        <div className="space-y-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              custom={i + 1}
              variants={fade}
              href={link.href}
              target={link.internal ? undefined : "_blank"}
              rel={link.internal ? undefined : "noopener noreferrer"}
              className="group relative flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-ink-900/60 backdrop-blur-sm px-6 py-4 font-mono text-sm text-ink-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.12]"
              whileHover={{
                boxShadow: `0 0 50px -12px ${link.glow}`,
              }}
            >
              {/* Gradient left accent */}
              <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[3px] rounded-full bg-gradient-to-b ${link.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

              <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${link.color} text-white shadow-lg`}>
                {link.icon}
              </span>

              <span className="font-medium tracking-wide">{link.label}</span>

              <svg className="ml-auto h-4 w-4 text-ink-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Footer tagline */}
        <motion.p
          custom={links.length + 2}
          variants={fade}
          className="mt-12 text-center font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-700"
        >
          Colocando negócios no mapa
        </motion.p>
      </motion.div>
    </div>
  );
}
