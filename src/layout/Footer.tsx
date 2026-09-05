import React from 'react';

import logo from '../assets/logo.png';

interface FooterProps {
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms }) => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8 border-t-[6px] border-brandRed-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="mb-6 bg-white inline-block p-4 rounded-2xl shadow-lg">
              <img src={logo} alt="Gran Maestro Drycleaners Logo" className="h-24 w-auto" />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Experience the pinnacle of garment care. Premium dry cleaning, expert laundry, and exceptional service delivered to your door.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#services" className="hover:text-brandRed-500 transition-colors">Our Services</a></li>
              <li><a href="#process" className="hover:text-brandRed-500 transition-colors">How It Works</a></li>
              <li><a href="#faq" className="hover:text-brandRed-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Us</h4>
            <div className="text-gray-300 space-y-4">
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brandRed-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span><strong>HQ:</strong> No 3, Adeyi Avenue, Old Bodija, Ibadan</span>
              </p>
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brandRed-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span><strong>Branch 1:</strong> 14, Aare Avenue (Beside Price Worth Supermarket), Bodija, Ibadan</span>
              </p>
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brandRed-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span><strong>Branch 2:</strong> Plot 302A, Magazine Road (Opposite University Press PLC), Tunde Oginni Shopping Complex, Jericho, Ibadan</span>
              </p>
              <p className="flex items-start gap-3 pt-2">
                <svg className="w-5 h-5 text-brandRed-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>0818 888 4275, 0802 615 3163</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-800 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Gran Maestro Drycleaners. All rights reserved.</p>
          <div className="space-x-4">
            <button onClick={onOpenTerms} className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
