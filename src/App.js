import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ContactPage from './pages/ContactPage/ContactPage';
import FaqPage from './pages/FaqPage';
import PrivacyPolicy from './pages/Privacypolicy/Privacypolicy';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';
import AboutPage from './pages/AboutPage/AboutPage';
import TeamPage from './pages/TeamPage/TeamPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/Faqs" element={<FaqPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
