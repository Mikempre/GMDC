import { Header } from './layout/Header';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Process } from './sections/Process';
import { Footer } from './layout/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        <Services />
        <Process />
      </main>

      <Footer />
    </div>
  );
}

export default App;
