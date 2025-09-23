// BackgroundFX.jsx
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

/** Usage:
 *  <BackgroundFX />                    // particles (default)
 *  <BackgroundFX variant="globe" />    // rotating wireframe globe
 */
export default function BackgroundFX({ variant = "particles" }) {
  return variant === "globe" ? <GlobeFX /> : <ParticlesFX />;
}

/* -------------------- Particles (your current one) -------------------- */
function ParticlesFX() {
  const reduce = useReducedMotion();
  const COUNT = reduce ? 0 : 50;

  const seeds = useMemo(
    () =>
      Array.from({ length: COUNT }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: 2 + Math.random() * 3.5,
        d: 18 + Math.random() * 14,
        a: 10 + Math.random() * 18,
        delay: Math.random() * 8,
        b: Math.random() < 0.18,
      })),
    [COUNT]
  );

  return (
    <div className="site-bg" aria-hidden="true">
      <div className="bg-glow tl" />
      <div className="bg-glow br" />

      {seeds.map((p, i) => (
        <motion.span
          key={i}
          className={`bg-particle${p.b ? " bright" : ""}`}
          style={{ left: `${p.x}vw`, top: `${p.y}vh`, width: p.s, height: p.s }}
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

      <div className="bg-vignette" />
    </div>
  );
}

/* -------------------- Bold wireframe globe (Safari-safe) -------------------- */
function GlobeFX() {
  const reduce = useReducedMotion();

  // Lat/long rings
  const longs = Array.from({ length: 12 }, (_, i) => i);
  const lats = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="site-bg" aria-hidden="true">
      <div className="bg-glow tl" />
      <div className="bg-glow br" />

      {/* Wrapper only positions the globe; no transforms here */}
      <div className="globe-wrap">
        {/* Inner element rotates (CSS keyframes) */}
        <div className={`globe-inner${reduce ? " reduce" : ""}`}>
          <div className="globe-halo" />
          <svg className="globe" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <defs>
              {/* Unique IDs to avoid Safari gradient glitches */}
              <radialGradient id="glb-grad-a" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="rgba(255,166,0,.6)" />
                <stop offset="70%" stopColor="rgba(255,122,0,.25)" />
                <stop offset="100%" stopColor="rgba(255,122,0,0)" />
              </radialGradient>
              <linearGradient id="glb-stroke-a" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,166,0,.8)" />
                <stop offset="50%" stopColor="rgba(255,122,0,.55)" />
                <stop offset="100%" stopColor="rgba(255,166,0,.8)" />
              </linearGradient>
            </defs>

            {/* core gradient fill */}
            <circle cx="50" cy="50" r="34" fill="url(#glb-grad-a)" opacity="0.25" />

            {/* equator */}
            <circle className="globe-line" cx="50" cy="50" r="34" />

            {/* longitude lines */}
            {longs.map((n) => {
              const a = (Math.PI * n) / longs.length;
              const rx = 34 * Math.abs(Math.cos(a)) + 0.0001;
              const ry = 34;
              return (
                <ellipse
                  key={`lo-${n}`}
                  className="globe-line"
                  cx="50"
                  cy="50"
                  rx={rx}
                  ry={ry}
                  transform={`rotate(${(180 * n) / longs.length} 50 50)`}
                />
              );
            })}

            {/* latitude lines */}
            {lats.map((n) => {
              const t = (n + 1) / (lats.length + 1);
              const r = 34 * Math.cos((t - 0.5) * Math.PI);
              const ry = 34 * Math.sin((t - 0.5) * Math.PI);
              return <ellipse key={`la-${n}`} className="globe-line" cx="50" cy="50" rx={r} ry={ry} />;
            })}
          </svg>
        </div>
      </div>

      <div className="bg-vignette" />
    </div>
  );
}

