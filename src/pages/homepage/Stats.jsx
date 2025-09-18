import { useEffect, useRef, useState } from "react";
import Section from "../../components/Section";

function useCountTo(target, inView){
  const [n, setN] = useState(0);
  useEffect(()=>{
    if(!inView) return;
    let start = 0;
    const end = target;
    const duration = 900;
    const startTime = performance.now();
    let raf;
    const tick = (t)=>{
      const p = Math.min((t - startTime)/duration, 1);
      const eased = 1 - Math.pow(1-p, 3);
      start = Math.round(eased * end);
      setN(start);
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
    const io = new IntersectionObserver(([e])=> setInView(e.isIntersecting), { threshold:.3 });
    if(ref.current) io.observe(ref.current);
    return ()=>io.disconnect();
  },[]);
  const y1 = useCountTo(20, inView);   // years
  const y2 = useCountTo(100, inView);  // employees+
  const y3 = useCountTo(5, inView);    // global offices

  return (
    <Section id="stats">
      <div ref={ref} className="card round" style={{padding:"32px 28px"}}>
        <div className="grid" style={{gridTemplateColumns:"repeat(3,minmax(0,1fr))", alignItems:"center"}}>
          <div>
            <h2 style={{marginBottom:6}}>Trusted at scale</h2>
            <p className="lead">A track record of enterprise delivery across industries—financial services, healthcare, retail, and beyond.</p>
          </div>
          <div className="center" style={{flexDirection:"column", gap:6}}>
            <div style={{fontSize:42, fontWeight:900, color:"var(--accent)"}}>{y1}+ </div>
            <small className="lead">Years delivering results</small>
          </div>
          <div className="center" style={{flexDirection:"column", gap:6}}>
            <div style={{fontSize:42, fontWeight:900, color:"var(--accent)"}}>{y2}+ </div>
            <small className="lead">Experts worldwide</small>
          </div>
        </div>

        <hr className="hr" />

        <div className="grid" style={{gridTemplateColumns:"repeat(3,minmax(0,1fr))"}}>
          <div className="center" style={{flexDirection:"column", gap:6}}>
            <div style={{fontSize:42, fontWeight:900, color:"var(--accent)"}}>{y3}</div>
            <small className="lead">Global offices</small>
          </div>
          <div className="center round" style={{padding:"14px 10px", background:"#121214", border:"1px dashed #2a2a2a"}}>
            <small>WBENC & NMSDC certified</small>
          </div>
          <div className="center round" style={{padding:"14px 10px", background:"#121214", border:"1px dashed #2a2a2a"}}>
            <small>Multi-lingual, multi-cultural delivery</small>
          </div>
        </div>
      </div>
    </Section>
  );
}
