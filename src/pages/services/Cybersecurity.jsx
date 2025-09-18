// src/components/Cybersecurity.jsx
import Section from "../../components/Section";
import useReveal from "../../hooks/useReveal";

// no hero image for now
const heroImg = null;

const expertise = [
  "Risk Assessment and Management",
  "Incident Response and Threat Hunting",
  "Security Awareness Training",
  "Managed Security Services",
  "Compliance and Governance Consulting",
];

export default function Cybersecurity() {
  const heroRef = useReveal();
  const valueRef = useReveal();
  const gridRef = useReveal();
  const ctaRef = useReveal();

  return (
    <>
      {/* HERO */}
      <header className="section" ref={heroRef} style={{ paddingTop: 48 }}>
        <div className="container">
          <div
            className="grid"
            style={{ gridTemplateColumns: "1.1fr 1fr", alignItems: "center" }}
          >
            <div>
              <div className="hero-kicker">
                <span className="badge">Services</span>
                <span style={{ margin: "0 .5rem" }}>•</span>
                <span className="badge">Cybersecurity</span>
              </div>

              <h1 style={{ marginTop: 12 }}>
                Cybersecurity solutions that protect your digital frontiers.
              </h1>
              <p className="lead">
                From risk assessments and secure architecture to SOC services and
                incident response—we help you prevent, detect, and respond to threats.
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
                  <h3>Prevent • Detect • Respond</h3>
                  <p className="lead" style={{ marginTop: 8 }}>
                    Assess → Harden → Monitor → Hunt → Contain → Recover.
                  </p>
                  <p className="lead">Aligned to your risks and regulations.</p>
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
              <Value item="Custom solutions tailored to your risk profile & industry" />
              <Value item="Proactive threat hunting & continuous monitoring" />
              <Value item="Compliance-ready frameworks (GDPR, HIPAA, PCI DSS, etc.)" />
              <Value item="Seasoned experts across architecture, GRC, and SOC" />
            </div>
          </div>
        </div>
      </Section>

      {/* OVERVIEW + QUICK FACTS */}
      <Section>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "1.05fr 1fr", gap: 28 }}>
            <div className="card" style={{ padding: 24 }}>
              <h2>Cybersecurity</h2>
              <p>
                Threats evolve daily. Our team stays ahead of the curve to design
                and run a security program that fits your business—covering risk
                assessments, incident response planning, secure architecture, and
                vendor risk management.
              </p>
              <p>
                We align prevention, detection, and response with your compliance
                needs, so your organization is resilient and audit-ready.
              </p>
              <div className="hero-actions">
                <a className="btn" href="/#contact">Let’s talk</a>
                <a className="btn ghost" href="mailto:info@thecervantesgroup.com">Email us</a>
              </div>
            </div>

            <div className="stat-grid">
              <div className="stat"><h3>24×7</h3><p>Monitoring & detection</p></div>
              <div className="stat"><h3>Minutes</h3><p>Mean time to respond</p></div>
              <div className="stat"><h3>GRC</h3><p>Policies & controls</p></div>
              <div className="stat"><h3>Zero-Trust</h3><p>Security by design</p></div>
            </div>
          </div>
        </div>
      </Section>

      {/* EXPERTISE GRID */}
      <Section refProp={gridRef}>
        <div className="container">
          <h2>Areas of expertise</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))" }}>
            {expertise.map((e) => (
              <div key={e} className="card" style={{ padding: "18px 18px" }}>
                <h3 style={{ margin: 0, fontSize: "1.05rem" }}>{e}</h3>
                <p className="lead" style={{ margin: "6px 0 0" }}>
                  Delivered with assessments, playbooks, and measurable outcomes.
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
              <h2 style={{ margin: 0 }}>Ready to strengthen your security posture?</h2>
              <p className="lead" style={{ marginTop: 6 }}>
                We’ll design a roadmap and run the program with you.
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
