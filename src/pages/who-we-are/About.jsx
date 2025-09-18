import Section from "../../components/Section";
import { motion } from "framer-motion";

const facts = [
  { label: "Founded", value: "2004" },
  { label: "Employees", value: "50+" },
  { label: "Strengths", value: "Fast • Professional • Efficient" },
  {
    label: "Locations",
    value:
      "Boston, MA • Chicago, IL • San Juan, PR • Madrid, Spain • Querétaro, Mexico",
  },
  {
    label: "Awards",
    value:
      "Zenit 2011 • Inc 500/5000 • Fastest Growing Companies 2011 & 2020 • Top 40 under 40 • Spirit of Marquette • Excellence in Quality of Service 2015",
  },
  {
    label: "Certifications",
    value:
      "WBENC (Woman-owned) • Minority Supplier Development Council (Intl.)",
  },
];

const testimonials = [
  {
    quote:
      "TCG learns your business and delivers. If something goes wrong, they personally make it right.",
    author: "Jeff Surges",
    role:
      "Former CEO, Merge Healthcare; President, AllScripts – Hospital Solutions",
  },
  {
    quote:
      "We have a great working relationship. They keep bringing quality candidates who fit our needs.",
    author: "Sara Grube",
    role: "Former HR Director, Extended Care",
  },
  {
    quote:
      "They get involved, understand our needs, and have strong contacts. Faster and better with TCG.",
    author: "Israel Bravo",
    role: "Former CIO, Doral Financial Corporation",
  },
  {
    quote:
      "Strategic, high-energy, and an impact player. They stand behind their word.",
    author: "Ed Shields",
    role: "Former EVP, IT Global Operations – AON",
  },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="section" style={{ paddingTop: 96 }}>
        <div
          className="container hero-grid"
          style={{ gridTemplateColumns: "1.25fr .75fr" }}
        >
          <div>
            <div className="badge" aria-hidden="true">Who we are</div>
            <h1>About The Cervantes Group</h1>
            <p className="about-lead">
              We deliver strategy, engineering, and managed services that help
              enterprises move faster and safer. Our multilingual on-shore and
              near-shore teams integrate with yours to plan, build, and operate
              mission-critical systems.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="hero-highlight"
            aria-hidden="true"
          >
            <p style={{ margin: 0 }}>
              <strong>Our mission:</strong> anticipate change, pinpoint client
              needs, and let customers focus on their core business while we
              handle delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <Section>
        <div className="grid" style={{ gridTemplateColumns: "1.05fr .95fr" }}>
          <article className="card round" style={{ padding: 18 }}>
            <h3>Our story</h3>
            <p>
              Clients choose The Cervantes Group for our blend of experience,
              velocity, and reliability—across product engineering,
              modernization, cybersecurity, and managed services.
            </p>
            <p>
              We remove friction with clear scope, pragmatic architecture, and
              outcome-driven delivery. You get a partner who gets it right the
              first time.
            </p>
          </article>

          <article className="card round" style={{ padding: 18 }}>
            <h3 className="hidden">How we deliver</h3>
            <p style={{ color: "var(--muted)", margin: 0 }}>
              Multilingual delivery across time zones. Enterprise standards.
              Startup speed.
            </p>
          </article>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <h2>What we believe</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
          <div className="card round" style={{ padding: 18 }}>
            <span className="badge">Core values</span>
            <h3>Integrity & excellence</h3>
            <p className="about-lead" style={{ marginBottom: 0 }}>
              Integrity, expertise, continuous learning, collaboration, and
              excellence guide every engagement.
            </p>
          </div>
          <div className="card round" style={{ padding: 18 }}>
            <span className="badge">Philosophy</span>
            <h3>Grow people, grow impact</h3>
            <p className="about-lead" style={{ marginBottom: 0 }}>
              We invest in people—celebrating differences, encouraging growth,
              and balancing hard work with having fun.
            </p>
          </div>
        </div>
      </Section>

      {/* Fast facts */}
      <Section>
        <h2>Fast facts</h2>
        <div className="fact-grid">
          {facts.map((f) => (
            <div key={f.label} className="fact-tile">
              <div className="fact-value">{f.value}</div>
              <div className="fact-label">{f.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <h2>What partners say</h2>
        <div className="quote-grid">
          {testimonials.map((t, i) => (
            <figure key={i} className="quote card round">
              <blockquote className="quote-text">“{t.quote}”</blockquote>
              <figcaption className="quote-footer">
                <strong style={{ color: "var(--text)" }}>{t.author}</strong>
                <br />
                <small>{t.role}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
