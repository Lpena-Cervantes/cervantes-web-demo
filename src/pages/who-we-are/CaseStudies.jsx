import { useEffect } from "react";
import Section from "../../components/Section";
import studies from "../../components/Who-we-are-data/caseStudies";

const tabs = [
  { id: "finance", label: "Finance" },
  { id: "health", label: "Health" },
  { id: "insurance", label: "Insurance" },
  { id: "telecommunication", label: "Telecommunication" },
  { id: "pharmacy", label: "Health Care IT (HIT)" },
];

export default function CaseStudiesPage() {
  // optional: if there is a #hash in URL, smooth scroll to it on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <Section id="case-studies">
      <div className="container">
        <header className="page-head">
          <h1>Case Studies</h1>
          <p className="lead">
            A few real-world snapshots of how The Cervantes Group helps clients deliver.
          </p>
        </header>

        <div className="study-layout">
          {/* Side nav */}
          <nav className="study-side" aria-label="Case study categories">
            <ul className="study-nav">
              {tabs.map((t) => (
                <li key={t.id}>
                  <a className="chip block" href={`#${t.id}`}>
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content */}
          <div className="study-content">
            {studies.map((s) => (
              <article key={s.id} id={s.id} className="study-section card">
                <h2 className="study-title">{s.title}</h2>
                {s.blocks.map(([sub, text], i) => (
                  <section key={i} className="study-block">
                    <h3 className="study-sub">{sub}</h3>
                    <p className="study-text">{text}</p>
                  </section>
                ))}

                <div className="study-cta">
                  <a className="btn small ghost" href="#case-studies">Back to top</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
