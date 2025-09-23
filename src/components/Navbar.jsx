import { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import logo from "../assets/cervantes-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);          // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile drawer
  const { pathname, hash } = useLocation();
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const innerRef = useRef(null);
  const menuId = "who-we-are-menu";

  // close desktop dropdown on route/hash change
  useEffect(() => setOpen(false), [pathname, hash]);
  // close mobile drawer on route/hash change
  useEffect(() => setMobileOpen(false), [pathname, hash]);

  // ESC closes both
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") { setOpen(false); setMobileOpen(false); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // close desktop dropdown when focus leaves trigger+menu
  function handleBlur() {
    setTimeout(() => {
      const next = document.activeElement;
      if (!btnRef.current?.contains(next) && !menuRef.current?.contains(next)) {
        setOpen(false);
      }
    }, 0);
  }

  // Keep --sticky-nav synced to actual height
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      document.documentElement.style.setProperty("--sticky-nav", `${el.offsetHeight}px`);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    const { style } = document.body;
    const prev = style.overflow;
    style.overflow = mobileOpen ? "hidden" : prev || "";
    return () => { style.overflow = prev; };
  }, [mobileOpen]);

  return (
    <header className="nav">
      <nav className="container" aria-label="Primary">
        <div className="nav-inner" ref={innerRef}>
          <Link to="/" className="logo" aria-label="Home">
            <img src={logo} alt="The Cervantes Group" />
          </Link>

          {/* Shows on wide containers */}
          <div className="nav-chips" role="navigation" aria-label="Primary sections">
            <Link to="/#services" className="badge">Services</Link>
            <Link to="careers/jobs" className="badge">PANZAJobs</Link>

            {/* Desktop dropdown */}
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
                <Link to="/case-studies" role="menuitem" tabIndex={open ? 0 : -1}>Case Studies</Link>
                <Link to="/diversity" role="menuitem" tabIndex={open ? 0 : -1}>Diversity</Link>
              </div>
            </div>

            <Link to="/#locations" className="badge">Locations</Link>
          </div>

          <div className="nav-cta">
            <Link to="/#contact" className="btn">Contact us</Link>
            <div className="socials">
              <a aria-label="LinkedIn" href="https://www.linkedin.com/company/the-cervantes-group" target="_blank" rel="noreferrer"><FaLinkedin size={20}/></a>
              <a aria-label="X" href="https://twitter.com/cervantesgroup" target="_blank" rel="noreferrer"><FaXTwitter size={20}/></a>
              <a aria-label="Facebook" href="https://www.facebook.com/cervantesgroupteam" target="_blank" rel="noreferrer"><FaFacebook size={20}/></a>
            </div>
          </div>

          {/* Shows on narrow containers */}
          <button
            className="nav-menu-trigger"
            aria-haspopup="dialog"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(v => !v)}
            title="Open menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && createPortal(
        <div
          id="mobile-nav"
          className="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          onClick={() => setMobileOpen(false)}   // click backdrop closes
        >
          <aside
            className="mobile-sheet"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-sheet-head">
              <span>Who we are</span>
              <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">✕</button>
            </div>

            <div className="mobile-list">
              <Link to="/#services" className="mobile-link">Services</Link>
              <Link to="careers/jobs" className="mobile-link">PANZAJobs</Link>

              <div className="mobile-group">
                <div className="mobile-group-title">Who we are</div>
                <Link to="/about" className="mobile-sublink">About Us</Link>
                <Link to="/leadership" className="mobile-sublink">Leadership</Link>
                <Link to="/case-studies" className="mobile-sublink">Case Studies</Link>
                <Link to="/diversity" className="mobile-sublink">Diversity</Link>
              </div>

              <Link to="/#locations" className="mobile-link">Locations</Link>

              <div className="mobile-cta">
                <Link to="/#contact" className="btn" onClick={() => setMobileOpen(false)}>Contact us</Link>
              </div>

              <div className="mobile-socials">
                <a aria-label="LinkedIn" href="https://www.linkedin.com/company/the-cervantes-group" target="_blank" rel="noreferrer">in</a>
                <a aria-label="X" href="https://twitter.com/cervantesgroup" target="_blank" rel="noreferrer">X</a>
                <a aria-label="Facebook" href="https://www.facebook.com/cervantesgroupteam" target="_blank" rel="noreferrer">f</a>
              </div>
            </div>
          </aside>
        </div>,
        document.body
      )}


      <a href="#main" className="visually-hidden-focusable">Skip to content</a>
    </header>
  );
}
