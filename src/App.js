import "./index.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./pages/homepage/Hero"
import Stats from "./pages/homepage/Stats";
import Services from "./pages/homepage/Services";
import Leadership from "./pages/homepage/Leadership";
import Locations from "./pages/homepage/Locations";
import Contact from "./pages/homepage/Contact";
import Footer from "./pages/homepage/Footer";

// Who Are We Pages
import LeadershipPage from "./pages/who-we-are/LeadershipPage";
import About from "./pages/who-we-are/About";
import CaseStudiesPage from "./pages/who-we-are/CaseStudies";

// Service detail pages
import Consultancy from "./pages/services/Consultancy";
import ManagedServices from "./pages/services/ManagedServices";
import Cybersecurity from "./pages/services/Cybersecurity";
import ApplicationOutsourcing from "./pages/services/ApplicationOutsourcing";

/** Smoothly handle hash links and scroll to top on route change */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Leadership />
      <Locations />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollManager />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Service details */}
            <Route path="/services/consultancy" element={<Consultancy />} />
            <Route path="/services/managed-services" element={<ManagedServices />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/application-outsourcing" element={<ApplicationOutsourcing />} />
          
          {/* Who Are we */}
            <Route path="/about" element={<About />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />

        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
