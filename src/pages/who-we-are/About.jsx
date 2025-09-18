import Section from "../../components/Section";
import { motion } from "framer-motion";
import {
  Building2,
  Users2,
  Sparkles,
  Globe2,
  Award,
} from "lucide-react";

const facts = [
  { label: "Founded", value: "2004", icon: Building2 },
  { label: "Employees", value: "50+", icon: Users2 },
  { label: "Strengths", value: "Fast • Professional • Efficient", icon: Sparkles },
  {
    label: "Locations",
    value:
      "Boston, MA • Chicago, IL • San Juan, PR • Madrid, Spain • Querétaro, Mexico",
    icon: Globe2,
  },
  {
    label: "Awards",
    value:
      "Zenit 2011 • Inc 500/5000 • Fastest Growing Companies 2011 & 2020 • Top 40 under 40 • Spirit of Marquette • Excellence in Quality of Service 2015",
    icon: Award,
  },
  {
    label: "Certifications",
    value:
      "WBENC (Woman-owned) • Minority Supplier Development Council (Intl.)",
    icon: Award,
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
      {/* ===== Hero ===== */}
      <section className="section about-hero">
        <div className="container about-hero-grid">
          <div>
            <span className="badge">Who we are</span>
            <h1>About The Cervantes Group</h1>
            <p className="about-lead">
              We deliver strategy, engineering, and managed services that help
              enterprises move faster and safer. Our multilingual on-shore and
              near-shore teams integrate with yours to plan, build, and operate
              mission-critical systems.
            </p>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="about-hero-note card"
            aria-hidden="true"
          >
            <strong>Our mission:</strong> anticipate change, pinpoint client
            needs, and let customers focus on their core business while we handle
            delivery.
          </motion.aside>
        </div>
      </section>

      {/* ===== Story ===== */}
      <Section className="about-story">
        <div className="container grid-2">
          <article className="card">
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

          <article className="card muted">
            <h3 className="sr-only">How we deliver</h3>
            <p>
              Multilingual delivery across time zones. Enterprise standards.
              Startup speed.
            </p>
          </article>
        </div>
      </Section>

      {/* ===== Values ===== */}
      <Section className="about-values">
        <div className="container">
          <h2>What we believe</h2>
          <div className="grid-2">
            <div className="card">
              <span className="badge">Core values</span>
              <h3>Integrity &amp; excellence</h3>
              <p className="about-lead m-0">
                Integrity, expertise, continuous learning, collaboration, and
                excellence guide every engagement.
              </p>
            </div>
            <div className="card">
              <span className="badge">Philosophy</span>
              <h3>Grow people, grow impact</h3>
              <p className="about-lead m-0">
                We invest in people—celebrating differences, encouraging growth,
                and balancing hard work with having fun.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== Fast facts ===== */}
      <Section className="about-facts">
        <div className="container">
          <h2>Fast facts</h2>
          <div className="fact-grid">
            {facts.map(({ label, value, icon: Icon }) => (
              <div key={label} className="fact-tile card">
                <div className="fact-icon" aria-hidden>
                  <Icon size={18} />
                </div>
                <div className="fact-content">
                  <div className="fact-value">{value}</div>
                  <div className="fact-label">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== Testimonials ===== */}
      <Section className="about-testimonials">
        <div className="container">
          <h2>What partners say</h2>
          <div className="quote-grid">
            {testimonials.map((t, i) => (
              <figure key={i} className="quote card">
                <blockquote className="quote-text">“{t.quote}”</blockquote>
                <figcaption className="quote-footer">
                  <strong>{t.author}</strong>
                  <br />
                  <small className="muted">{t.role}</small>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
