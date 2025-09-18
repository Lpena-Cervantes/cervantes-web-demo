import { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/cervantes-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const menuId = "who-we-are-menu";

  // close dropdown when route/hash changes
  useEffect(() => setOpen(false), [pathname, hash]);

  // close on Escape
  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") setOpen(false); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // close when focus leaves trigger+menu
  function handleBlur(e) {
    // wait a tick so focus can move to a child first
    setTimeout(() => {
      const next = document.activeElement;
      if (!btnRef.current?.contains(next) && !menuRef.current?.contains(next)) {
        setOpen(false);
      }
    }, 0);
  }

  return (
    <header className="nav">
      <nav className="container" aria-label="Primary">
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 0"}}>
          <Link to="/" className="logo">
            <img src={logo} alt="The Cervantes Group" style={{ height: 40 }} />
          </Link>

          <div style={{display:"flex", alignItems:"center", gap:18}}>
            <Link to="/#services" className="badge">Services</Link>
            <Link to="careers/jobs" className="badge">PANZAJobs</Link>

            {/* Who we are dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              onBlur={handleBlur}
            >
              <button
                ref={btnRef}
                className="badge nav-drop-trigger"
                aria-haspopup="menu"
                aria-expanded={open}
                aria-controls={menuId}
                onClick={() => setOpen(v => !v)}
                onFocus={() => setOpen(true)}
              >
                Who we are ▾
              </button>

              <div
                id={menuId}
                ref={menuRef}
                className={`nav-dropdown-menu ${open ? "is-open" : ""}`}
                role="menu"
              > 
                <Link to="/about" role="menuitem" tabIndex={open ? 0 : -1}>About Us</Link>
                <Link to="/leadership" role="menuitem" tabIndex={open ? 0 : -1}>Leadership</Link>
                {/* <Link to="/news" role="menuitem" tabIndex={open ? 0 : -1}>News</Link> */}
                <Link to="/case-studies" role="menuitem" tabIndex={open ? 0 : -1}>Case Studies</Link>
                <Link to="/diversity" role="menuitem" tabIndex={open ? 0 : -1}>Diversity</Link>
              </div>
            </div>

            <Link to="/#locations" className="badge">Locations</Link>
            <Link to="/#contact" className="btn">Contact us</Link>

            <div style={{display:"flex", gap:10}}>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/company/the-cervantes-group" target="_blank" rel="noreferrer"><FaLinkedin size={20}/></a>
              <a aria-label="X" href="https://twitter.com/cervantesgroup" target="_blank" rel="noreferrer"><FaXTwitter size={20}/></a>
              <a aria-label="Facebook" href="https://www.facebook.com/cervantesgroupteam" target="_blank" rel="noreferrer"><FaFacebook size={20}/></a>
            </div>
          </div>
        </div>
      </nav>
      <a href="#main" className="visually-hidden-focusable">Skip to content</a>
    </header>
  );
}
