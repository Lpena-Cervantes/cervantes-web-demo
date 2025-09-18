import Section from "../../components/Section";
import { Search, Globe2, Zap, ShieldCheck, Rocket, ExternalLink } from "lucide-react";

export default function Jobs() {
  return (
    <>
      {/* Hero */}
      <Section className="about-hero">
        <div className="container">
          <div className="dv-heroish">
            <div className="dv-heroish-copy">
              <span className="badge">Careers</span>
              <h1 className="m-0">Hot Jobs</h1>
              <p className="about-lead" style={{ maxWidth: 680 }}>
                PANZA<span style={{ letterSpacing: ".02em" }}>Jobs</span> is our
                dedicated job portal where candidates can explore opportunities,
                apply online, and connect with recruiters. It’s continuously
                updated with new roles across industries and regions.
              </p>

              <ul className="dv-kpis">
                <li>
                  <ShieldCheck size={16} />
                  Secure applications
                </li>
                <li>
                  <Globe2 size={16} />
                  US • PR • EU • LATAM
                </li>
                <li>
                  <Zap size={16} />
                  Real-time updates
                </li>
              </ul>
            </div>

            <div className="dv-heroish-art" aria-hidden="true">
              <div className="dv-orb" />
              <div className="dv-orb sm" />
            </div>
          </div>
        </div>
      </Section>

      {/* Why PANZAJobs */}
      <Section>
        <div className="container">
          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}
          >
            <Feature
                icon={<Search size={20} />}
                title="Always updated"
                text="Postings refresh in real time, so you’re always seeing the latest opportunities."
            />
            <Feature
                icon={<Globe2 size={20} />}
                title="Global reach"
                text="From the U.S. to Europe and Latin America, roles span multiple markets."
            />
            <Feature 
                icon={<Zap size={20} />} 
                title="Easy to apply" 
                text="Submit in a few clicks—fast, secure and mobile-friendly." 
            />

          </div>
        </div>
      </Section>

      {/* Simple steps (no JS, pure CSS) */}
      <Section>
        <div className="container">
          <h2>How it works</h2>
          <ol className="dv-steps">
            <li>
              <span className="num">1</span>
              <div>
                <strong>Browse roles</strong>
                <p className="about-lead">
                  Filter by location, skill and seniority on PANZAJobs.
                </p>
              </div>
            </li>
            <li>
              <span className="num">2</span>
              <div>
                <strong>Apply securely</strong>
                <p className="about-lead">
                  Your application goes straight to our recruiting team.
                </p>
              </div>
            </li>
            <li>
              <span className="num">3</span>
              <div>
                <strong>Connect & interview</strong>
                <p className="about-lead">
                  We’ll coordinate next steps and keep you updated.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="container">
          <div className="card round dv-cta">
            <h2>Find your next opportunity</h2>
            <p className="about-lead" style={{ marginBottom: 16 }}>
              Whether you’re seeking a new challenge or your first step in tech,
              PANZAJobs lists roles from leading companies worldwide.
            </p>
            <a
              className="btn"
              href="https://www.panzajobs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Rocket size={18} />
              Visit PANZAJobs
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="card round dv-feature-tile">
      <div className="dv-feature-icon">{icon}</div>
      <h3 className="m-0">{title}</h3>
      <p style={{ color: "var(--muted)" }}>{text}</p>
    </div>
  );
}
