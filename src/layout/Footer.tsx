import React from 'react';

import logo from '../assets/logo.png';

interface FooterProps {
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms }) => {
  return (
    <footer className="bg-brandBlue-900 text-white pt-16 pb-8 border-t-[6px] border-brandBlue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="mb-6 bg-white inline-block p-4 rounded-2xl shadow-lg">
              <img src={logo} alt="Gran Maestro Drycleaners Logo" className="h-24 w-auto" />
            </div>
            <p className="text-brandBlue-300 font-bold tracking-wider text-sm mb-2">RC No. : 1981166</p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Experience the best of garment care. Premium drycleaning, expert laundry, and exceptional service delivered to your door step.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#services" className="hover:text-brandBlue-500 transition-colors">Our Service</a></li>
              <li><a href="#process" className="hover:text-brandBlue-500 transition-colors">How It Works</a></li>
              <li><a href="#faq" className="hover:text-brandBlue-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Us</h4>
            <div className="text-gray-300 space-y-4">
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brandBlue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span><strong>BODIJA OUTLET 1 (ADEYI AVENUE):</strong> 3, Adeyi Avenue, (Opposite Aweni House), Off Awolowo Avenue, Old Bodija, Ibadan<br/><span className="text-sm text-brandBlue-400">Tel: 0818 888 4275, 0802 615 3163</span></span>
              </p>
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brandBlue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span><strong>BODIJA OUTLET 2 (AARE AVENUE):</strong> No 14, Aare Avenue, (Beside Priceworth Supermarket), New Bodija, Ibadan<br/><span className="text-sm text-brandBlue-400">Tel: 0901 790 9450, 0813 601 1404</span></span>
              </p>
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brandBlue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span><strong>JERICHO OUTLET:</strong> Plot 302A, Magazine Road (Opposite University Press PLC), Jericho, Ibadan<br/><span className="text-sm text-brandBlue-400">Tel: 0909 333 6428, 0909 777 6428</span></span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brandBlue-800 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Gran Maestro Drycleaners. All rights reserved.</p>
          <div className="space-x-4">
            <button onClick={onOpenTerms} className="hover:text-white transition-colors">Terms and Conditions of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
