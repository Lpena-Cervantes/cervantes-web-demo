export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="section" style={{paddingTop:32}}>
      <div className="container" style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:18}}>
        <p>© The Cervantes Group 2004–{year}. All rights reserved.</p>
        <p>
          <a href="legal-notice.html">Legal Notice</a> &nbsp;|&nbsp; <a href="privacy-policy.html">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}
