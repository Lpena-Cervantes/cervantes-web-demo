// src/app/who-we-are/DiversityPage.jsx
import Section from "../../components/Section";
import { HeartHandshake, Scale, Users2, Quote } from "lucide-react";
import BostonImg from "../../assets/who-we-are/img/Boston-Tea-Party.jpg"
import DivImg from "../../assets/who-we-are/img/diversity.jpg"
import Culture from "../../assets/who-we-are/pdf/cervantes_culture.pdf"
import Eeo from "../../assets/who-we-are/pdf/eeo_policy.pdf"

/**
 * If you already have a data file (Who-we-are-data/diversity),
 * you can keep using it. This version is self-contained for convenience.
 */
const diversity = {
  hero: {
    title: "Honoring Our Values",
    intro:
      "At Cervantes, we draw inspiration from timeless ideals—justice, loyalty, and noble purpose. These guide how we treat one another, how we serve clients, and how we show up in our communities.",
    bullets: [
      "Chivalry and respect in every interaction",
      "Loyalty to our people, partners, and clients",
      "Integrity and honor as the foundation of our work",
    ],
    image: DivImg,
    imageAlt: "Cervantes team celebrating shared values",
  },
  values: {
    commitment: {
      title: "Chivalry & Honor",
      text:
        "We uphold fairness, justice, and respect—ensuring every individual is treated with dignity. To us, honor means doing the right thing, even when no one is watching.",
      cta: { label: "Our Commitments", href: Culture },
    },
    eeo: {
      title: "Loyalty & Human Worth",
      text:
        "Like Don Quixote and Sancho Panza, we believe in loyalty and standing by one another. We celebrate each person’s unique contributions and ensure opportunity and growth for all—without discrimination.",
      cta: { label: "Fair Practices & EEO", href: Eeo },
    },
  },
  culture: {
    title: "A Culture of Noble Purpose",
    text:
      "Our culture blends courage, humility, and service. We invest in each other’s growth, build trusted partnerships, and give back through philanthropy, volunteerism, and moments of shared celebration.",
    image: BostonImg,
    imageAlt: "Cervantes team event",
  },
  testimonials: [
    {
      quote:
        "Here, respect and loyalty aren’t just words—they shape how we collaborate and deliver for clients.",
      name: "Ana Rodríguez",
      role: "Project Manager",
    },
    {
      quote:
        "Cervantes honors human worth. I’ve always felt supported to grow and challenged to do my best work.",
      name: "David Chen",
      role: "Senior Consultant",
    },
  ],
  legal: {
    heading: "Equal Opportunity & Fair Practices",
    text:
      "Cervantes provides equal opportunity for all employees and applicants. We do not discriminate based on race, color, religion, sex, national origin, age, disability, genetic information, marital status, veteran status, or any other status protected by applicable law. We are committed to accessible hiring practices and a respectful, harassment-free workplace.",
    linkLabel: "Read our policy",
    linkHref: "/equal-opportunity",
  },
};

export default function DiversityPage() {
  const { hero, values, culture, testimonials, legal } = diversity;

  return (
    <Section id="diversity" className="diversity" noReveal>
      <div className="container">
        {/* HERO */}
        <header className="dv-hero card">
          <div className="dv-hero-copy">
            <p className="eyebrow">Who we are</p>
            <h1 className="dv-title">{hero.title}</h1>
            <p className="lead">{hero.intro}</p>

            <ul className="dv-bullets">
              {hero.bullets.map((b, i) => (
                <li key={i}>
                  <span className="dot" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <figure className="dv-hero-media">
            <img src={hero.image} alt={hero.imageAlt} />
          </figure>
        </header>

        {/* VALUES GRID */}
        <div className="dv-grid">
          <article className="dv-card card">
            <div className="dv-card-icon" aria-hidden>
              <HeartHandshake />
            </div>
            <h3 className="dv-card-title">{values.commitment.title}</h3>
            <p>{values.commitment.text}</p>
            <a
              className="btn small"
              href={values.commitment.cta.href}
              target="_blank"
              rel="noreferrer"
            >
              {values.commitment.cta.label}
            </a>
          </article>

          <article className="dv-card card">
            <div className="dv-card-icon" aria-hidden>
              <Scale />
            </div>
            <h3 className="dv-card-title">{values.eeo.title}</h3>
            <p>{values.eeo.text}</p>
            <a
              className="btn small"
              href={values.eeo.cta.href}
              target="_blank"
              rel="noreferrer"
            >
              {values.eeo.cta.label}
            </a>
          </article>
        </div>

        {/* CULTURE FEATURE */}
        <section className="dv-feature">
          <div className="dv-feature-copy">
            <p className="eyebrow">Life at CERVANTES</p>
            <h2>{culture.title}</h2>
            <p className="muted">{culture.text}</p>
            <div className="dv-feature-tags" aria-label="Highlights">
              <span className="chip">Community</span>
              <span className="chip">Philanthropy</span>
              <span className="chip">Events</span>
            </div>
          </div>

          <figure className="dv-feature-media card">
            <img src={culture.image} alt={culture.imageAlt} />
            <figcaption>Boston team event</figcaption>
          </figure>
        </section>

        {/* TESTIMONIALS */}
        <section className="dv-testimonials">
          <header className="dv-testimonials-head">
            <p className="eyebrow">Voices</p>
            <h2>Honor & Loyalty in Practice</h2>
          </header>

          <div className="dv-quote-grid">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="dv-quote card">
                <Quote className="dv-quote-icon" aria-hidden />
                <p className="dv-quote-text">“{t.quote}”</p>
                <footer className="dv-quote-meta">
                  <Users2 className="meta-icon" aria-hidden />
                  <span className="name">{t.name}</span>
                  <span className="sep">—</span>
                  <span className="role">{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* LEGAL / EEO */}
        <section className="dv-legal card">
          <h3 className="dv-legal-title">{legal.heading}</h3>
          <p className="dv-legal-text">{legal.text}</p>
          <a className="btn ghost small" href={legal.linkHref}>
            {legal.linkLabel}
          </a>
        </section>
      </div>
    </Section>
  );
}
