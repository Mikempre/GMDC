import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';

// Lazy-load non-critical routes and modals for fast initial page load
const WhyUs = lazy(() => import('./pages/WhyUs').then(m => ({ default: m.WhyUs })));
const Founder = lazy(() => import('./pages/Founder').then(m => ({ default: m.Founder })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Terms = lazy(() => import('./sections/Terms').then(m => ({ default: m.Terms })));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-brandBlue-200 border-t-brandBlue-500 rounded-full animate-spin"></div>
    </div>
  );
}

function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased text-gray-800 bg-gray-50 overflow-x-hidden min-h-screen flex flex-col justify-between">
        <Header />
        
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

        <Footer onOpenTerms={() => setIsTermsOpen(true)} />
        
        <Suspense fallback={null}>
          {isTermsOpen && <Terms isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />}
        </Suspense>

        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;
