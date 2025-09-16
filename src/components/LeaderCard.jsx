import { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";

export default function LeaderCard({ leader }) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped(v => !v);

  return (
    <div className={`flip ${flipped ? "isFlipped" : ""}`}>
      <div className="flip-inner card round leader-card" role="group" aria-labelledby={`${leader.id}-name`}>
        {/* FRONT */}
        <div className="face front">
          {/* Accent stripe */}
          <div className="leader-stripe" aria-hidden="true" />

          <header className="leader-header">
            <img
              src={leader.img}
              alt=""
              width="72"
              height="72"
              className="leader-avatar"
            />
            <div className="leader-title">
              <h3 id={`${leader.id}-name`}>{leader.name}</h3>
              <p className="leader-role">{leader.role}</p>
            </div>

            <a
              className="btn leader-linkedin"
              href={leader.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${leader.name} on LinkedIn`}
            >
              <FaLinkedin /> LinkedIn
            </a>
          </header>

          <p className="leader-summary">
            {leader.summary}
          </p>

          {leader.tags?.length ? (
            <div className="leader-tags">
              {leader.tags.map(t => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
          ) : null}

          <div className="leader-actions">
            <button
              className="btn ghost"
              onClick={toggle}
              aria-expanded={flipped}
              aria-controls={`${leader.id}-back`}
            >
              Read bio
            </button>
          </div>
        </div>

        {/* BACK */}
        <div id={`${leader.id}-back`} className="face back" aria-hidden={!flipped}>
          <h3 className="leader-back-title">{leader.name}</h3>
          <p className="leader-role" style={{marginTop:-6}}>{leader.role}</p>

          <p className="leader-bio">{leader.bio}</p>

          {leader.highlights?.length ? (
            <ul className="leader-highlights">
              {leader.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          ) : null}

          <div className="leader-actions">
            <a className="btn" href={leader.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <button className="btn ghost" onClick={toggle}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}
