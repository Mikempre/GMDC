import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Terms } from './sections/Terms';
import { FloatingCTA } from './components/FloatingCTA';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { WhyUs } from './pages/WhyUs';
import { Founder } from './pages/Founder';
import { Contact } from './pages/Contact';

function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased text-gray-800 bg-gray-50 overflow-x-hidden">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer onOpenTerms={() => setIsTermsOpen(true)} />
        <Terms isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;
