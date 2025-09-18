// src/app/who-we-are/DiversityPage.jsx
import Section from "../../components/Section";
import diversity from "../../components/Who-we-are-data/diversity";
// if you already use lucide-react or similar, great; otherwise swap the spans for plain text
import { HeartHandshake, Scale, Users2, Quote } from "lucide-react";

export default function DiversityPage() {
  const { hero, values, culture, testimonials } = diversity;

  return (
    <Section id="diversity" className="diversity">
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
            <div className="dv-card-icon"><HeartHandshake /></div>
            <h3 className="dv-card-title">{values.commitment.title}</h3>
            <p>{values.commitment.text}</p>
            <a className="btn small" href={values.commitment.cta.href} target="_blank" rel="noreferrer">
              {values.commitment.cta.label}
            </a>
          </article>

          <article className="dv-card card">
            <div className="dv-card-icon"><Scale /></div>
            <h3 className="dv-card-title">{values.eeo.title}</h3>
            <p>{values.eeo.text}</p>
            <a className="btn small" href={values.eeo.cta.href} target="_blank" rel="noreferrer">
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
            <div className="dv-feature-tags">
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
            <h2>Testimonials</h2>
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
      </div>
    </Section>
  );
}
