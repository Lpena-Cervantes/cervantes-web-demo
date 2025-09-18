import { useState } from "react";
import Section from "../../components/Section";
import { FaLinkedin } from "react-icons/fa6";

// images you already have
import joanna from "../../assets/owner/joanna.jpg";
import tim from "../../assets/owner/tim.jpg";
import will from "../../assets/team-members/will.png";
import ashley from "../../assets/team-members/ashley.jpg";

const leaders = [
  {
    name: "Joanna M. Bauza",
    role: "President / Co-Founder",
    img: joanna,
    linkedin: "https://www.linkedin.com/in/joannambauza/",
    summary:
      "25+ years in tech across Boston, Chicago, San Juan & Madrid; led TCG to multiple INC Fastest Growing wins and Zenit Young Entrepreneur award.",
    bullets: [
      "Global Board of Trustees — Marquette University",
      "5× INC Fastest Growing Private Companies (U.S.)",
      "Zenit “Young Entrepreneur of the Year”",
    ],
    bio:
      "Joanna is well-versed in technology with 25+ years’ experience spanning startups, global enterprises, and academia. She has served on university boards and led TCG’s growth across U.S., Puerto Rico, and Spain.",
  },
  {
    name: "Timothy B. Mullen",
    role: "Co-Founder & Managing Partner",
    img: tim,
    linkedin: "https://www.linkedin.com/in/timothymullen/",
    summary:
      "25+ years in technology services; led national & international managed services, call centers, and large delivery teams across the U.S., Canada & Caribbean.",
    bullets: [
      "Top 40 under 40 — Caribbean Business",
      "Zenit “Young Entrepreneur of the Year”",
      "International managed services leadership",
    ],
    bio:
      "Tim built and led multi-national delivery organizations and executive sales teams, establishing national agreements and operations across the Americas.",
  },
  {
    name: "William Lee Stephens",
    role: "VP of Sales, Global Operations",
    img: will,
    linkedin: "https://www.linkedin.com/in/williamleeStephens/",
    summary:
      "Bilingual (EN/ES) leader with track record across enterprise, SMB, and startups; spans recruiting, delivery ops, and business development.",
    bullets: [
      "Enterprise & multinational account leadership",
      "Operational methodologies & team enablement",
      "Bilingual English/Spanish",
    ],
    bio:
      "Will combines sales leadership with delivery operations, building repeatable methods and multi-market growth programs in the U.S. and Caribbean.",
  },
  {
    name: "Ashley A. Otero Naranjo",
    role: "Senior Finance & HR Operations Manager",
    img: ashley,
    linkedin: "https://www.linkedin.com/in/ashley-otero/",
    summary:
      "Grew from sales support to national finance/HR leadership; oversees payroll, AP/AR, compliance and multi-state HR operations.",
    bullets: [
      "Multi-state HR & payroll leadership",
      "AP/AR and audit/controls ownership",
      "Culture & team engagement champion",
    ],
    bio:
      "Ashley leads finance and HR operations nationally—owning payroll, benefits, compliance, and controls—while championing team culture and engagement.",
  },
];

function Leader({ person }) {
  const [open, setOpen] = useState(false);
  const bioId = `${person.name.replace(/\s+/g, "-").toLowerCase()}-bio`;

  return (
    <li className="leader-row">
      <img
        className="leader-photo"
        src={person.img}
        alt={person.name}
        width={120}
        height={120}
        loading="lazy"
        sizes="(max-width: 700px) 84px, 120px"
      />

      <div className="leader-content">
        <div className="leader-top">
          <div className="leader-id">
            <h3 className="leader-name">{person.name}</h3>
            <div className="leader-role">{person.role}</div>
          </div>

          {person.linkedin && (
            <a
              className="btn small ghost leader-cta"
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${person.name} on LinkedIn`}
            >
              <FaLinkedin /> LinkedIn
            </a>
          )}
        </div>

        <p className="leader-summary">{person.summary}</p>

        {!!person.bullets?.length && (
          <ul className="leader-bullets">
            {person.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        {person.bio && (
          <div className={`leader-bio ${open ? "is-open" : ""}`}>
            <button
              className="chip"
              aria-expanded={open}
              aria-controls={bioId}
              onClick={() => setOpen(v => !v)}
            >
              {open ? "Hide bio" : "Read bio"}
            </button>
            <div id={bioId} className="leader-bio-panel">
              <p className="leader-bio-text">{person.bio}</p>
            </div>
          </div>
        )}
      </div>
    </li>
  );
}

export default function LeadershipPage() {
  return (
    <Section>
      <div className="container">
        <header className="page-head">
          <h1>Leadership</h1>
          <p className="about-lead" style={{ maxWidth: 720 }}>
            Our leadership team blends enterprise rigor with startup speed—spanning
            delivery operations, finance &amp; HR, and multi-market growth across the
            U.S., Puerto Rico, and Spain.
          </p>
        </header>

        <ul className="leader-list">
          {leaders.map((p) => (
            <Leader key={p.name} person={p} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
