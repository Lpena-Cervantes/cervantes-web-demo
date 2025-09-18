// BackgroundFX.jsx
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

export default function BackgroundFX() {
  const reduce = useReducedMotion();

  // Fewer particles if reduced-motion is on
  const COUNT = reduce ? 0 : 50;

  // Create stable random seeds so particles don't jump on re-render
  const seeds = useMemo(
    () =>
      Array.from({ length: COUNT }, () => ({
        // start positions
        x: Math.random() * 100, // vw
        y: Math.random() * 100, // vh
        // size & speed variance
        s: 2 + Math.random() * 3.5, // px
        d: 18 + Math.random() * 14, // duration
        // slight horizontal drift amplitude
        a: 10 + Math.random() * 18,
        delay: Math.random() * 8,
        // occasional brighter particle
        b: Math.random() < 0.18,
      })),
    [COUNT]
  );

  return (
    <div className="site-bg" aria-hidden="true">
      {/* Optional: faint corner glow for depth (very subtle) */}
      <div className="bg-glow tl" />
      <div className="bg-glow br" />

      {/* Particle field */}
      {seeds.map((p, i) => (
        <motion.span
          key={i}
          className={`bg-particle${p.b ? " bright" : ""}`}
          style={{
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            width: p.s,
            height: p.s,
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: ["100vh", "-10vh"],
            x: [`${p.x}vw`, `${p.x + p.a}vw`, `${p.x - p.a}vw`, `${p.x}vw`],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.d,
            times: [0, 0.2, 0.8, 1],
            ease: "linear",
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}

      {/* Very light vignette to keep edges quiet */}
      <div className="bg-vignette" />
    </div>
  );
}
