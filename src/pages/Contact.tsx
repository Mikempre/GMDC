import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';

const locations = [
  {
    name: "BODIJA",
    address: "3, Adeyi Avenue, Off Awolowo Avenue, (Near Davies Hotel), Bodija, Ibadan"
  },
  {
    name: "JERICHO",
    address: "Plot 302A, Magazine Road (Opposite University Press PLC), Jericho, Ibadan"
  },
  {
    name: "AARE AVENUE, BODIJA",
    address: "No 14, Aare Avenue, New Bodija, Ibadan"
  }
];

export const Contact: React.FC = () => {
  return (
    <main className="pt-32 md:pt-48 pb-24 bg-gray-50 dark:bg-[#041333] min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Contact" 
          subtitle="We are always here to help. Reach out or visit any of our strategically located outlets."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Locations */}
          <div className="space-y-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-brandBlue-900 rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-100 dark:border-brandBlue-800"
            >
              <h3 className="text-2xl font-black text-brandBlue-900 dark:text-white mb-8 border-b border-gray-100 dark:border-brandBlue-800 pb-4">OUTLET LOCATIONS</h3>
              <div className="space-y-8">
                {locations.map((loc, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-brandBlue-50 dark:bg-brandBlue-800 flex items-center justify-center text-brandBlue-500 flex-shrink-0 group-hover:scale-110 group-hover:bg-brandBlue-500 group-hover:text-white transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brandBlue-900 dark:text-white mb-1 tracking-wide">{loc.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-brandBlue-500 rounded-[2rem] p-8 md:p-10 shadow-xl text-white flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div>
                <h3 className="text-2xl font-black mb-2">Need Immediate Assistance?</h3>
                <p className="text-brandBlue-100">Call us or schedule a pickup directly.</p>
              </div>
              <div className="flex flex-col gap-3 min-w-[200px]">
                <a href="tel:+2348188884275" className="bg-white text-brandBlue-500 px-6 py-3 rounded-full font-bold text-center hover:bg-gray-100 transition-colors shadow-lg">0818 888 4275</a>
                <a href="tel:+2348026153163" className="bg-brandBlue-600 border border-brandBlue-400 text-white px-6 py-3 rounded-full font-bold text-center hover:bg-brandBlue-700 transition-colors">0802 615 3163</a>
              </div>
            </motion.div>

          </div>

          {/* Contact Form Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-brandBlue-900 rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-100 dark:border-brandBlue-800"
          >
            <h3 className="text-2xl font-black text-brandBlue-900 dark:text-white mb-2">Send us a Message</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Have a question? Drop us a line below.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-brandBlue-950 border border-gray-200 dark:border-brandBlue-800 focus:outline-none focus:ring-2 focus:ring-brandBlue-500 transition-shadow text-brandBlue-900 dark:text-white" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-brandBlue-950 border border-gray-200 dark:border-brandBlue-800 focus:outline-none focus:ring-2 focus:ring-brandBlue-500 transition-shadow text-brandBlue-900 dark:text-white" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-brandBlue-950 border border-gray-200 dark:border-brandBlue-800 focus:outline-none focus:ring-2 focus:ring-brandBlue-500 transition-shadow text-brandBlue-900 dark:text-white resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-brandBlue-900 dark:bg-brandBlue-500 text-white font-bold py-4 rounded-xl hover:bg-brandBlue-500 dark:hover:bg-brandBlue-600 transition-colors shadow-lg">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
