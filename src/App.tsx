import { useState } from 'react';
import { Header } from './layout/Header';
import { Hero } from './sections/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './sections/Services';
import { Process } from './sections/Process';
import { FAQ } from './sections/FAQ';
import { CTA } from './sections/CTA';
import { Terms } from './sections/Terms';
import { Footer } from './layout/Footer';
import { FloatingCTA } from './components/FloatingCTA';

function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <FAQ />
      </main>

      <CTA />
      <Footer onOpenTerms={() => setIsTermsOpen(true)} />
      <Terms isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <FloatingCTA />
    </div>
  );
}

export default App;
