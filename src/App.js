import "./index.css";
import "./theme.css"; // <-- add this so the new theme actually loads

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Background
import BackgroundFX from "./components/BackgroundFX";

// HomePage
import Navbar from "./components/Navbar";
import Hero from "./pages/homepage/Hero";
import Stats from "./pages/homepage/Stats";
import Services from "./pages/homepage/Services";
import Leadership from "./pages/homepage/Leadership";
import Locations from "./pages/homepage/Locations";
import Contact from "./pages/homepage/Contact";
import Footer from "./pages/homepage/Footer";

// Legal & privacy policy
import LegalNotice from "./pages/legal/LegalNotice";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";

// Who Are We Pages
import LeadershipPage from "./pages/who-we-are/LeadershipPage";
import About from "./pages/who-we-are/About";
import CaseStudiesPage from "./pages/who-we-are/CaseStudies";
import DiversityPage from "./pages/who-we-are/Diversity";

// Service detail pages
import Consultancy from "./pages/services/Consultancy";
import ManagedServices from "./pages/services/ManagedServices";
import Cybersecurity from "./pages/services/Cybersecurity";
import ApplicationOutsourcing from "./pages/services/ApplicationOutsourcing";

// PANZAJobs
import Jobs from "./pages/careers/Jobs";

/** Smoothly handle hash links and scroll to top on route change (with sticky-nav offset) */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (!el) return;

        // Read --sticky-nav so the target isn't hidden under the sticky header
        const rootStyle = getComputedStyle(document.documentElement);
        const stickyVar = rootStyle.getPropertyValue("--sticky-nav").trim();
        const sticky = parseInt(stickyVar || "0", 10) || 0;

        const y = el.getBoundingClientRect().top + window.scrollY - sticky - 14; // extra breathing room
        window.scrollTo({ top: y, left: 0, behavior: "smooth" });
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
      <BackgroundFX />
      <Navbar />
      <ScrollManager />
      <BackgroundFX variant="globe" />
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
          <Route path="/diversity" element={<DiversityPage />} />

          {/* PANZAJobs */}
          <Route path="/careers/jobs" element={<Jobs />} />

          {/* Legal and Privacy */}
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
