import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="section" style={{ paddingTop: 96 }}>
      <div className="container hero-grid">
        <div>
          <div className="badge" aria-label="Tagline">
            Tech Consulting • Software • Cybersecurity • Managed Services
          </div>

          <h1>We build technology that moves your business forward.</h1>

          <p className="lead">
            Strategy, design, and engineering—delivered by a multilingual team
            across the Americas &amp; Europe. From rapid product delivery to
            cybersecurity and managed services, we partner with you end-to-end.
          </p>

          <div className="hero-actions" style={{ marginTop: 12 }}>
            <a className="btn" href="#contact">Start a project</a>
            <a className="btn ghost" href="#services">Explore services</a>
          </div>

          <hr className="hr" />

          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,minmax(0,1fr))",
              gap: 18,
              padding: 0,
              margin: 0,
              listStyle: "none",
            }}
          >
            <li className="card round center" style={{ padding: "14px 12px" }}>
              <small>ISO-style delivery</small>
            </li>
            <li className="card round center" style={{ padding: "14px 12px" }}>
              <small>Near-/On-shore teams</small>
            </li>
            <li className="card round center" style={{ padding: "14px 12px" }}>
              <small>Security by design</small>
            </li>
          </ul>
        </div>

        {/* compact highlight chip on the right (stacks below on mobile) */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="hero-highlight"
          aria-hidden="true"
        >
          <p style={{ margin: 0 }}>
            <strong>Outcome-driven delivery.</strong> Discovery → Architecture → Design → Build → Operate. We integrate with your teams or run fully managed programs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
