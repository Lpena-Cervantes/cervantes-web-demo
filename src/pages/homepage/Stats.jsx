import { useEffect, useRef, useState } from "react";
import Section from "../../components/Section";

function useCountTo(target, inView){
  const [n, setN] = useState(0);
  useEffect(()=>{
    if(!inView) return;
    const duration = 900;
    const startTime = performance.now();
    let raf;
    const tick = (t)=>{
      const p = Math.min((t - startTime)/duration, 1);
      const eased = 1 - Math.pow(1-p, 3);
      setN(Math.round(eased * target));
      if(p<1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return ()=>cancelAnimationFrame(raf);
  },[target, inView]);
  return n;
}

export default function Stats(){
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(()=>{
    const io = new IntersectionObserver(
      ([e])=> setInView(e.isIntersecting),
      { threshold:.3, rootMargin: "80px 0px" } // start a bit earlier on mobile
    );
    if(ref.current) io.observe(ref.current);
    return ()=>io.disconnect();
  },[]);

  const y1 = useCountTo(20, inView);   // years
  const y2 = useCountTo(100, inView);  // experts
  const y3 = useCountTo(5, inView);    // offices

  return (
    <Section id="stats">
      <div ref={ref} className="card round stats-card">
        <div className="stats-top">
          <div className="stats-left">
            <h2 className="m-0">Trusted at scale</h2>
            <p className="lead m-0">
              A track record of enterprise delivery across industries—financial services, healthcare, retail, and beyond.
            </p>
          </div>

          <div className="stat">
            <div className="stat-num">{y1}+</div>
            <small className="stat-note">Years delivering results</small>
          </div>

          <div className="stat">
            <div className="stat-num">{y2}+</div>
            <small className="stat-note">Experts worldwide</small>
          </div>
        </div>

        <hr className="hr" />

        <div className="stats-bottom">
          <div className="stat">
            <div className="stat-num">{y3}</div>
            <small className="stat-note">Global offices</small>
          </div>

          <div className="pill dashed">WBENC &amp; NMSDC certified</div>
          <div className="pill dashed">Multi-lingual, multi-cultural delivery</div>
        </div>
      </div>
    </Section>
  );
}
