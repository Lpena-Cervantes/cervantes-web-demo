import Section from "./Section";

const offices = [
  { city:"Boston, MA", lines:["1 Lincoln St.","Suite 2400","Boston, MA 02111"], map:"https://maps.app.goo.gl/tvmdwEmTh3RPUCKi9" },
  { city:"Chicago, IL", lines:["401 North Michigan Ave.","Suite 1200","Chicago, IL 60611"], map:"https://www.google.com/maps?f=q&hl=en&q=401+North+Michigan+Ave+Chicago,+IL+60611" },
  { city:"San Juan, PR", lines:["1225 Ave. Juan Ponce de León","VIG Tower, Office #BS-F","San Juan, PR 00907"], map:"https://goo.gl/maps/4bwrFfc5tbpY1PwF7" },
  { city:"Madrid, Spain", lines:["Ave Alfonso XIII","N° 21","Madrid, Spain 28002"], map:"https://goo.gl/maps/c3UAXRTimMLseikF9" },
  { city:"Mexico City, Mexico", lines:["Hamburgo 213","Cuauhtémoc Torre Summa","06600 Ciudad de México"], map:"https://www.google.com.pr/maps/search/Hamburgo+213+Cuauht%C3%A9moc+Torre+summa+CP+06600.+Ciudad+de+M%C3%A9xico/" },
];

export default function Locations(){
  return (
    <Section id="locations">
      <h2>Our locations</h2>
      <div className="grid" style={{gridTemplateColumns:"repeat( auto-fit, minmax(240px, 1fr) )"}}>
        {offices.map(o=>(
          <article key={o.city} className="card round" style={{padding:18}}>
            <h3 style={{color:"var(--accent)"}}>{o.city}</h3>
            <address style={{fontStyle:"normal", color:"var(--muted)"}}>
              {o.lines.map((l,i)=>(<div key={i}>{l}</div>))}
            </address>
            <div style={{marginTop:10}}><a className="btn ghost" href={o.map} target="_blank" rel="noreferrer">Google Map</a></div>
          </article>
        ))}
      </div>
    </Section>
  );
}
