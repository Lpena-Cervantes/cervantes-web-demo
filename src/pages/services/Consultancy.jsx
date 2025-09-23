import Section from "../../components/Section";
import useReveal from "../../hooks/useReveal";
// If you have a hero image, import it. Otherwise leave null.
const heroImg = null;

const expertise = [
  "DevOps",
  "Business & IT Architecture",
  "Business Process & Change Management",
  "IT Process & Service Management",
  "Project Management",
  "IT Strategy",
  "Business & Technology Optimization",
  "Cloud Advisory Services",
];

export default function Consultancy() {
  const heroRef = useReveal();
  const valRef  = useReveal();
  const gridRef = useReveal();
  const ctaRef  = useReveal();

  return (
    <>
      {/* HERO */}
      <header className="section services-hero" ref={heroRef}>
        <div className="container two-col">
          <div>
            <div className="hero-kicker">
              <span className="badge">Services</span>
              <span style={{margin:"0 .5rem"}}>•</span>
              <span className="badge">Consultancy</span>
            </div>
            <h1 style={{marginTop:12}}>
              Consultancy that turns strategy into measurable outcomes.
            </h1>
            <p className="lead">
              We partner end-to-end—from discovery and architecture through delivery
              and ongoing optimization—so you ship faster, reduce risk, and scale with confidence.
            </p>
            <div className="hero-actions">
              <a className="btn" href="/#contact">Start a project</a>
              <a className="btn ghost" href="/#services">Back to services</a>
            </div>
          </div>

          <div className="card round" aria-hidden="true" style={{minHeight:280}}>
            {heroImg ? (
              <img
                src={heroImg}
                alt=""
                style={{width:"100%", height:"100%", objectFit:"cover", borderRadius:18}}
              />
            ) : (
              <div style={{padding:24}}>
                <h3>Outcome-driven delivery</h3>
                <p className="lead" style={{marginTop:8}}>
                  Discovery → Architecture → Design → Build → Operate.
                </p>
                <p className="lead">Security baked into every stage.</p>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* VALUE BLOCK */}
      <Section refProp={valRef}>
        <div className="container">
          <div className="card" style={{padding:24}}>
            <h2>Why partner with us</h2>
            <div className="value-grid">
              <Value item="Proven enterprise delivery with agile speed" />
              <Value item="Near-shore collaboration in your time zone" />
              <Value item="Security by design across architecture & delivery" />
              <Value item="Multilingual, multicultural teams across the Americas & Europe" />
            </div>
          </div>
        </div>
      </Section>

      {/* NARRATIVE */}
      <Section>
        <div className="container services-overview">
          <div className="overview-grid">
            <div className="card" style={{padding:24}}>
              <h2>Consultancy</h2>
              <p>
                As an IT services and business solutions partner, clients trust us because
                we listen and we deliver. We add real value to global organizations—bridging
                cultural and language barriers with expertise, solution delivery, and
                world-class service. We don’t just advise; we make it happen.
              </p>
              <p>
                Working closely at every level of your organization, we identify the life-cycle
                of your goals, define effective strategies, and implement innovative solutions
                that drive measurable results.
              </p>
              <div className="hero-actions">
                <a className="btn" href="/#contact">Let’s talk</a>
                <a className="btn ghost" href="mailto:info@thecervantesgroup.com">Email us</a>
              </div>
            </div>

            {/* Quick facts / badges */}
            <div className="stat-grid">
              <div className="stat"><h3>20+</h3><p>Years delivering results</p></div>
              <div className="stat"><h3>100+</h3><p>Experts worldwide</p></div>
              <div className="stat"><h3>ISO-style</h3><p>Delivery playbooks</p></div>
              <div className="stat"><h3>WBENC & NMSDC</h3><p>Certified</p></div>
            </div>
          </div>
        </div>
      </Section>

      {/* EXPERTISE GRID */}
      <Section refProp={gridRef}>
        <div className="container">
          <h2>Areas of expertise</h2>
          <div className="expertise-grid">
            {expertise.map((item)=>(
              <div key={item} className="card" style={{padding:"18px 18px"}}>
                <h3 style={{margin:0, fontSize:"1.05rem"}}>{item}</h3>
                <p className="lead" style={{margin:"6px 0 0"}}>
                  Engagements include discovery workshops, roadmaps, and hands-on delivery.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA BAR */}
      <Section refProp={ctaRef}>
        <div className="container services-cta">
          <div className="card cta-bar">
            <div>
              <h2 className="m-0">Ready to explore a consultancy engagement?</h2>
              <p className="lead" style={{marginTop:6}}>
                Tell us about your goals—most inquiries get a same-day response.
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
    <div className="card" style={{padding:"16px 18px"}}>
      <div className="badge" aria-hidden="true">✓</div>
      <p className="lead" style={{margin:"8px 0 0"}}>{item}</p>
    </div>
  );
}
