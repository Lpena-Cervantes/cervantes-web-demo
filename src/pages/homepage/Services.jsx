import { Link } from "react-router-dom";
import Section from "../../components/Section";

const items = [
  {
    key: "consultancy",
    title: "Consultancy",
    desc:
      "IT strategy, discovery, architecture, and program leadership—contract consulting and outcome-based delivery.",
    to: "/services/consultancy",
    tag: "Advisory • Delivery",
    internal: true,
  },
  {
    key: "outsourcing",
    title: "Application Outsourcing",
    desc:
      "Design & build platforms and apps, integrate legacy, cloud-native modernization, QA automation, DevOps.",
    to: "/services/application-outsourcing",
    tag: "Build • Modernize",
    internal: true,
  },
  {
    key: "cyber",
    title: "Cybersecurity",
    desc:
      "Threat modeling, IAM, SOC enablement, SIEM, endpoint, vulnerability mgmt, incident response, pen testing.",
    to: "/services/cybersecurity",
    tag: "Protect • Comply",
    internal: true,
  },
  {
    key: "managed",
    title: "Managed Services",
    desc:
      "RMM, service desk, cloud & infra ops, patching, backup & DR, SLAs and continuous improvement.",
    to: "/services/managed-services",
    tag: "Operate • Optimize",
    internal: true,
  },
];

export default function Services() {
  return (
    <Section id="services">
      <h2>What we do</h2>
      <p className="lead" style={{ marginBottom: 22 }}>
        End-to-end services to plan, build, and run mission-critical systems.
      </p>

      <div className="services-grid">
        {items.map((s) => (
          <article key={s.key} className="service-card card round">
            <div className="service-card-body">
              <span className="badge" aria-hidden="true">{s.tag}</span>
              <h3 style={{ color: "var(--accent)", marginTop: 10 }}>{s.title}</h3>
              <p style={{ color: "var(--muted)" }}>{s.desc}</p>
            </div>

            <div className="service-card-actions">
              {s.internal ? (
                <Link
                  className="btn"
                  to={s.to}
                  aria-label={`Learn more about ${s.title}`}
                >
                  Learn more
                </Link>
              ) : (
                <a
                  className="btn"
                  href={s.href}
                  aria-label={`Learn more about ${s.title}`}
                >
                  Learn more
                </a>
              )}
              <a className="btn ghost" href="/#contact">
                Talk to an expert
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
