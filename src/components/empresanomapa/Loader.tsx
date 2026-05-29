import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dots = [
  { color: "#4285F4", delay: 0 },
  { color: "#EA4335", delay: 0.1 },
  { color: "#FBBC04", delay: 0.2 },
  { color: "#34A853", delay: 0.3 },
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"dots" | "name" | "exit">("dots");

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || sessionStorage.getItem("enm-loaded")) {
      onComplete();
      return;
    }
    const t1 = setTimeout(() => setPhase("name"), 600);
    const t2 = setTimeout(() => setPhase("exit"), 1400);
    const t3 = setTimeout(() => {
      sessionStorage.setItem("enm-loaded", "1");
      onComplete();
    }, 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        key="loader"
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink-950"
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {phase === "dots" && (
          <div className="flex gap-3">
            {dots.map((d, i) => (
              <motion.div
                key={i}
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: d.color }}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: d.delay, duration: 0.3, ease: "easeOut" }}
              />
            ))}
          </div>
        )}
        {phase === "name" && (
          <motion.div className="text-center">
            <motion.h1
              className="font-fraunces text-4xl font-light tracking-tight text-ink-100 md:text-5xl"
              initial={{ opacity: 0, filter: "blur(12px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
            >
              Guilherme Ferreira
            </motion.h1>
            <motion.p
              className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              Tráfego, design e presença digital
            </motion.p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}