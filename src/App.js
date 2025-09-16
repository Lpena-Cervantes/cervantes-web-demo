import "./index.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Leadership from "./components/Leadership";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Who Are We Pages
import LeadershipPage from "./components/LeadershipPage";
import About from "./components/About";

// Service detail pages
import Consultancy from "./components/Consultancy";
import ManagedServices from "./components/ManagedServices";
import Cybersecurity from "./components/Cybersecurity";
import ApplicationOutsourcing from "./components/ApplicationOutsourcing";

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

        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
