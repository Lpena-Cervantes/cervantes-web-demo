import { Link } from "react-router-dom";

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="section" style={{paddingTop:32, position:"relative", zIndex:1}}>
      <div className="container" style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:18}}>
        <p>© The Cervantes Group 2004–{year}. All rights reserved.</p>
        <p style={{display:"flex", gap:12, flexWrap:"wrap"}}>
          <Link to="/legal-notice">Legal Notice</Link>
          <span aria-hidden="true">|</span>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}
