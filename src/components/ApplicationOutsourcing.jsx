// src/components/ApplicationOutsourcing.jsx
import Section from "./Section";
import useReveal from "../hooks/useReveal";

// no hero image for now
const heroImg = null;

const specialties = [
  "Application & Data Architecture",
  "Data Governance & Quality",
  "Data Warehousing",
  "QA & Software Testing",
  "BI & Cloud Computing",
  "Enterprise Analytics & Reporting",
  "Business Process Improvement",
  "ERP & CRM Management",
  "eB/e-Commerce",
];

export default function ApplicationOutsourcing() {
  const heroRef = useReveal();
  const valueRef = useReveal();
  const gridRef  = useReveal();
  const ctaRef   = useReveal();

  return (
    <>
      {/* HERO */}
      <header className="section" ref={heroRef} style={{ paddingTop: 48 }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "1.1fr 1fr", alignItems: "center" }}>
            <div>
              <div className="hero-kicker">
                <span className="badge">Services</span>
                <span style={{ margin: "0 .5rem" }}>•</span>
                <span className="badge">Application Outsourcing</span>
              </div>

              <h1 style={{ marginTop: 12 }}>
                Build, modernize, and run applications—end to end.
              </h1>
              <p className="lead">
                We design, develop, integrate, and operate apps—from web and mobile to data platforms—
                aligning capabilities with your business goals at predictable cost.
              </p>

              <div className="hero-actions">
                <a className="btn" href="/#contact">Start a project</a>
                <a className="btn ghost" href="/#services">Back to services</a>
              </div>
            </div>

            <div className="card round" aria-hidden="true" style={{ minHeight: 280 }}>
              {heroImg ? (
                <img
                  src={heroImg}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 18 }}
                />
              ) : (
                <div style={{ padding: 24 }}>
                  <h3>Design • Build • Integrate • Operate</h3>
                  <p className="lead" style={{ marginTop: 8 }}>
                    Legacy → Modern → Cloud. Clear SLAs. Predictable costs.
                  </p>
                  <p className="lead">Business outcomes in sync with app capabilities.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* VALUE PROPS */}
      <Section refProp={valueRef}>
        <div className="container">
          <div className="card" style={{ padding: 24 }}>
            <h2>Why partner with us</h2>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))" }}>
              <Value item="Full-stack delivery: web, mobile, data, and integrations" />
              <Value item="Legacy modernization and middleware/portal integration" />
              <Value item="SLA-driven engagement with fixed & predictable costs" />
              <Value item="Quality built-in: QA, automation, and CI/CD practices" />
            </div>
          </div>
        </div>
      </Section>

      {/* OVERVIEW + STATS */}
      <Section>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "1.05fr 1fr", gap: 28 }}>
            <div className="card" style={{ padding: 24 }}>
              <h2>Application Outsourcing</h2>
              <p>
                We bring the engineering depth to build and integrate applications—plus the
                process expertise to align them with your operating model. Our contracts define
                support and performance parameters up front, so you get consistent service levels
                and measurable outcomes.
              </p>
              <p>
                From new builds and cloud migrations to portals, middleware, and data platforms,
                we deliver and operate solutions that scale with your roadmap.
              </p>
              <div className="hero-actions">
                <a className="btn" href="/#contact">Let’s talk</a>
                <a className="btn ghost" href="mailto:info@thecervantesgroup.com">Email us</a>
              </div>
            </div>

            <div className="stat-grid">
              <div className="stat"><h3>SLA</h3><p>Clear uptime & response</p></div>
              <div className="stat"><h3>Agile</h3><p>Iterative delivery</p></div>
              <div className="stat"><h3>DevOps</h3><p>CI/CD & automation</p></div>
              <div className="stat"><h3>Cloud</h3><p>Modern architectures</p></div>
            </div>
          </div>
        </div>
      </Section>

      {/* SPECIALTIES GRID */}
      <Section refProp={gridRef}>
        <div className="container">
          <h2>Specialization</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))" }}>
            {specialties.map((s) => (
              <div key={s} className="card" style={{ padding: "18px 18px" }}>
                <h3 style={{ margin: 0, fontSize: "1.05rem" }}>{s}</h3>
                <p className="lead" style={{ margin: "6px 0 0" }}>
                  Delivered via assessments, roadmaps, and managed execution.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section refProp={ctaRef}>
        <div className="container">
          <div className="card" style={{
            padding: 24, display: "grid", gap: 12, alignItems: "center",
            gridTemplateColumns: "1fr auto"
          }}>
            <div>
              <h2 style={{ margin: 0 }}>Ready to accelerate your app roadmap?</h2>
              <p className="lead" style={{ marginTop: 6 }}>
                Tell us your goals—most inquiries get a same-day response.
              </p>
            </div>
            <a className="btn" href="/#contact">Talk to an expert</a>
          </div>
        </div>
      </Section>
    </>
  );
}

function Value({ item }) {
  return (
    <div className="card" style={{ padding: "16px 18px" }}>
      <div className="badge" aria-hidden="true">✓</div>
      <p className="lead" style={{ margin: "8px 0 0" }}>{item}</p>
    </div>
  );
}
