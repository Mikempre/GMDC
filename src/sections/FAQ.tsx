import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';

const faqs = [
  {
    question: "How long does standard dry cleaning take?",
    answer: "Our standard turnaround time is 48 hours. However, we also offer express same-day and 24-hour services for urgent needs."
  },
  {
    question: "Do you offer pickup and delivery?",
    answer: "Yes, we offer convenient pickup and delivery services across Ibadan. Just schedule a pickup via WhatsApp or phone call, and our concierge will handle the rest."
  },
  {
    question: "Are your cleaning solvents eco-friendly?",
    answer: "Absolutely. We use state-of-the-art, eco-friendly solvents that are tough on stains but gentle on your fabrics and the environment."
  },
  {
    question: "What happens if an item gets damaged?",
    answer: "We handle every garment with the utmost care. In the rare event of damage caused by our process, we have a comprehensive compensation policy outlined in our Terms of Service."
  },
  {
    question: "Can you remove tough stains like red wine or oil?",
    answer: "Our expert stain specialists use advanced spotting techniques. While we cannot guarantee 100% removal of every stain without risking fabric damage, we successfully treat the vast majority of tough stains."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-white dark:bg-[#081630] relative transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Everything you need to know about our premium services."
        />
        
        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 dark:border-navy-700 rounded-2xl overflow-hidden bg-gray-50 dark:bg-navy-900/50"
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg text-navy-900 dark:text-white pr-4">{faq.question}</span>
                <motion.span 
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="w-8 h-8 rounded-full bg-brandRed-50 dark:bg-brandRed-500/20 text-brandRed-500 flex items-center justify-center flex-shrink-0"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-navy-700 pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
