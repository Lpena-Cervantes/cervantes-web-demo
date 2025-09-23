import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="section">
      <div className="container hero hero-grid">
        <div>
          <div className="badge" aria-label="Tagline">
            Tech Consulting • Software • Cybersecurity • Managed Services
          </div>

          <h1 className="hero-title">We build technology that moves your business forward.</h1>

          <p className="lead">
            Strategy, design, and engineering—delivered by a multilingual team
            across the Americas &amp; Europe. From rapid product delivery to
            cybersecurity and managed services, we partner with you end-to-end.
          </p>

          <div className="hero-actions">
            <a className="btn" href="#contact">Start a project</a>
            <a className="btn ghost" href="#services">Explore services</a>
          </div>

          <hr className="hr" />

          <ul className="kpi-grid">
            <li className="card round center kpi"><small>ISO-style delivery</small></li>
            <li className="card round center kpi"><small>Near-/On-shore teams</small></li>
            <li className="card round center kpi"><small>Security by design</small></li>
          </ul>
        </div>

        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="hero-highlight"
          aria-hidden="true"
        >
          <p className="m-0">
            <strong>Outcome-driven delivery.</strong> Discovery → Architecture → Design → Build → Operate.
            We integrate with your teams or run fully managed programs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
