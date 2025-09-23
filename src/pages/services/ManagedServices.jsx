import Section from "../../components/Section";
import useReveal from "../../hooks/useReveal";

// no hero image for now
const heroImg = null;

const expertise = [
  "IT Infrastructure Management",
  "Helpdesk & End-User Support",
  "Cloud Services & Management",
  "IT Security Management",
  "BCDR & Planning",
];

export default function ManagedServices() {
  const heroRef = useReveal();
  const valueRef = useReveal();
  const gridRef = useReveal();
  const ctaRef = useReveal();

  return (
    <>
      {/* HERO */}
      <header className="section services-hero" ref={heroRef}>
        <div className="container two-col">
          <div>
            <div className="hero-kicker">
              <span className="badge">Services</span>
              <span style={{ margin: "0 .5rem" }}>•</span>
              <span className="badge">Managed Services</span>
            </div>

            <h1 style={{ marginTop: 12 }}>
              Run stable, secure, and cost-efficient operations.
            </h1>
            <p className="lead">
              We manage and continually improve your IT landscape — infra, cloud,
              endpoints, and service desk — so your teams can focus on the business.
            </p>

            <div className="hero-actions">
              <a className="btn" href="/#contact">Start a conversation</a>
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
                <h3>Operate & improve</h3>
                <p className="lead" style={{ marginTop: 8 }}>
                  Monitor → Support → Patch → Backup → Secure → Report.
                </p>
                <p className="lead">SLAs, automation, and continuous improvement.</p>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* VALUE PROPS */}
      <Section refProp={valueRef}>
        <div className="container">
          <div className="card" style={{ padding: 24 }}>
            <h2>Why partner with us</h2>
            <div className="value-grid">
              <Value item="Comprehensive IT support from infra to end-users" />
              <Value item="Scales up or down with your business" />
              <Value item="Cost-efficient operations with automation & clear SLAs" />
              <Value item="Security baked into every layer and workflow" />
            </div>
          </div>
        </div>
      </Section>

      {/* OVERVIEW + QUICK FACTS */}
      <Section>
        <div className="container services-overview">
          <div className="overview-grid">
            <div className="card" style={{ padding: 24 }}>
              <h2>Managed Services</h2>
              <p>
                Complexity keeps rising while teams are stretched thin. We become your
                operational backbone — proactively managing your environment and
                anticipating issues before they impact the business.
              </p>
              <p>
                With our integrated approach, your estate isn’t just maintained — it’s
                continually optimized to improve reliability, security, and cost.
              </p>
              <div className="hero-actions">
                <a className="btn" href="/#contact">Let’s talk</a>
                <a className="btn ghost" href="mailto:info@thecervantesgroup.com">Email us</a>
              </div>
            </div>

            <div className="stat-grid">
              <div className="stat"><h3>24×7</h3><p>Monitoring & support</p></div>
              <div className="stat"><h3>SLA</h3><p>Clear response & resolution</p></div>
              <div className="stat"><h3>ISO-style</h3><p>Ops playbooks & runbooks</p></div>
              <div className="stat"><h3>Security</h3><p>By design & default</p></div>
            </div>
          </div>
        </div>
      </Section>

      {/* EXPERTISE GRID */}
      <Section refProp={gridRef}>
        <div className="container">
          <h2>Areas of expertise</h2>
          <div className="expertise-grid">
            {expertise.map((e) => (
              <div key={e} className="card" style={{ padding: "18px 18px" }}>
                <h3 style={{ margin: 0, fontSize: "1.05rem" }}>{e}</h3>
                <p className="lead" style={{ margin: "6px 0 0" }}>
                  Delivered with proactive monitoring, automation, and reporting.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section refProp={ctaRef}>
        <div className="container services-cta">
          <div className="card cta-bar">
            <div>
              <h2 className="m-0">Need reliable day-to-day operations?</h2>
              <p className="lead" style={{ marginTop: 6 }}>
                We’ll tailor a managed services plan around your stack and SLAs.
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
