import { useState, useRef, useLayoutEffect, useEffect } from "react";
import Section from "../../components/Section";
import { FaLinkedin } from "react-icons/fa6";

import joanna from "../../assets/owner/joanna.jpg";
import tim from "../../assets/owner/tim.jpg";

/** Flip card that resizes to the active side */
function OwnerCard({ img, name, role, summary, highlights = [], linkedin }) {
  const [flipped, setFlipped] = useState(false);

  const frontRef = useRef(null);
  const backRef  = useRef(null);
  const [heights, setHeights] = useState({ front: 0, back: 0 });
  const [height, setHeight]   = useState(null);

  const measure = () => {
    const front = frontRef.current?.scrollHeight ?? 0;
    const back  = backRef.current?.scrollHeight ?? 0;
    setHeights({ front, back });
    setHeight(flipped ? back : front); // resize to the visible side
  };

  // Initial + responsive re-measure
  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (frontRef.current) ro.observe(frontRef.current);
    if (backRef.current)  ro.observe(backRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When flipping, animate the container height to the other side
  useEffect(() => {
    setHeight(flipped ? heights.back : heights.front);
  }, [flipped, heights]);

  return (
    <div
      className={`card round leader-card flip ${flipped ? "isFlipped" : ""}`}
      style={height ? { minHeight: height } : undefined}
    >
      <div className="flip-inner">
        {/* FRONT */}
        <div className="face front" ref={frontRef}>
          <div className="leader-stripe" />
          <header className="leader-header">
            <img
              src={img}
              alt={name}
              className="leader-avatar"
              onLoad={measure}
            />
            <div className="leader-title">
              <h3>{name}</h3>
              <p className="leader-role">{role}</p>
            </div>
            {linkedin && (
              <a
                className="btn small ghost leader-linkedin"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${name} on LinkedIn`}
              >
                <FaLinkedin /> LinkedIn
              </a>
            )}
          </header>

          <p className="leader-summary">{summary}</p>

          <div className="leader-actions">
            <button className="btn small" onClick={() => setFlipped(true)}>
              Read bio
            </button>
          </div>
        </div>

        {/* BACK */}
        <div className="face back" ref={backRef}>
          <h3 className="leader-back-title">About {name.split(" ")[0]}</h3>
          <p className="leader-bio" style={{ marginBottom: 8 }}>{summary}</p>

          {highlights.length > 0 && (
            <>
              <strong>Highlights</strong>
              <ul className="leader-highlights" style={{ marginTop: 6 }}>
                {highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </>
          )}

          <div className="leader-actions">
            <button className="btn small ghost" onClick={() => setFlipped(false)}>
              Back
            </button>
            {linkedin && (
              <a className="btn small" href={linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin /> Connect
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <Section id="leadership">
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <h2 style={{ marginBottom: 12 }}>Meet the owners</h2>
          <a className="btn small ghost" href="/leadership">
            See full leadership →
          </a>
        </div>

        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        >
          <OwnerCard
            img={joanna}
            name="Joanna M. Bauza"
            role="President / Co-Founder"
            summary="25+ years in tech across Boston, Chicago, San Juan & Madrid; led TCG to multiple INC Fastest Growing wins and Zenit Young Entrepreneur award."
            highlights={[
              "Global Board of Trustees — Marquette University",
              "5× INC Fastest Growing Private Companies (U.S.)",
              "Zenit “Young Entrepreneur of the Year”",
            ]}
            linkedin="https://www.linkedin.com/in/joannambauza/"
          />

          <OwnerCard
            img={tim}
            name="Timothy B. Mullen"
            role="Co-Founder & Managing Partner"
            summary="25+ years in technology services; led national & international managed services, call centers, and large delivery teams across the U.S., Canada & Caribbean."
            highlights={[
              "Top 40 under 40 — Caribbean Business",
              "Zenit “Young Entrepreneur of the Year”",
              "International managed services leadership",
            ]}
            linkedin="https://www.linkedin.com/in/timothymullen/"
          />
        </div>
      </div>
    </Section>
  );
}
