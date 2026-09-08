import React from 'react';
import { motion } from 'framer-motion';

export const Founder: React.FC = () => {
  return (
    <main className="pt-32 md:pt-48 pb-24 bg-gray-50 dark:bg-[#041333] min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-brandBlue-900 rounded-[2rem] p-8 md:p-16 shadow-2xl border border-gray-100 dark:border-brandBlue-800 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brandBlue-50 dark:bg-brandBlue-500/5 rounded-bl-[100%] pointer-events-none"></div>
          <div className="absolute top-10 right-10 opacity-10 dark:opacity-5 pointer-events-none">
            <svg className="w-24 h-24 text-brandBlue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          </div>

          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-brandBlue-900 dark:text-white mb-4 leading-tight">
              FROM THE DESK OF THE <span className="text-brandBlue-500">FOUNDER/CEO</span>
            </h1>
            <div className="w-20 h-1 bg-brandBlue-500 mb-12 rounded-full"></div>

            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 font-serif">
              <p className="font-semibold text-xl text-brandBlue-900 dark:text-gray-100">Dear Valued Stakeholders,</p>
              
              <p>I would like to sincerely appreciate every one of you for your continued commitment, support, trust, and contribution to the growth and development of our company.</p>
              
              <p>As a laundry and drycleaning business, we are not merely in the business of washing and cleaning clothes. We are in the business of providing convenience, preserving value, creating confidence, and delivering exceptional customer experiences. Every garment entrusted to us represents a customer's trust, and that trust must never be taken for granted.</p>
              
              <p>As we continue to grow, our expectations must grow with us. We must operate with a stronger sense of professionalism, accountability, discipline, efficiency, innovation, and customer-centricity. Every member of our team and every stakeholder has an important role to play in building a company that can compete with the best in the industry.</p>
              
              <div className="bg-gray-50 dark:bg-brandBlue-950 p-8 rounded-2xl border-l-4 border-brandBlue-500 my-10 shadow-inner">
                <p className="font-bold text-brandBlue-900 dark:text-white mb-6 uppercase tracking-wider">Our immediate priorities are clear:</p>
                <ul className="space-y-4 list-none pl-0">
                  {[
                    "Exceptional service delivery and consistent quality.",
                    "Timely turnaround and reliable delivery to our customers.",
                    "Accountability at every level of the organisation.",
                    "Operational efficiency and elimination of waste.",
                    "Business growth and expansion across our various markets.",
                    "Continuous improvement and adoption of technology.",
                    "Strong teamwork, communication, and respect among all stakeholders.",
                    "Protection of the company's reputation, assets, and values."
                  ].map((priority, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1 text-brandBlue-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span>{priority}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>I want everyone to understand that growth comes with responsibility. We cannot demand a bigger and better organisation while maintaining old habits, poor communication, complacency, or a lack of accountability.</p>
              
              <p>As Founder and CEO, I am committed to providing the leadership, resources, systems, and direction required to take this company to the next level. However, the success of this vision depends on the collective commitment of every stakeholder.</p>
              
              <p>To our employees, I ask for your dedication and professionalism. To our managers and supervisors, I expect leadership by example, ownership of responsibilities, and measurable results. To our customers, thank you for trusting us with your garments and your business. To our partners, vendors, investors, and other stakeholders, we value your contribution and look forward to building even stronger relationships with you.</p>
              
              <p>The future of this company is bigger than where we are today. We have an opportunity to build a truly outstanding laundry and drycleaning brand—one recognised for quality, reliability, innovation, integrity, and excellent customer service.</p>
              
              <p className="font-semibold italic">Let us therefore move forward with urgency, unity, discipline, and a shared determination to succeed.</p>
              
              <p className="font-bold text-brandBlue-900 dark:text-white text-xl py-4 border-y border-gray-200 dark:border-brandBlue-800 text-center">We must not only work in the business; we must work together to build the business.</p>
              
              <p>Thank you for your continued support and commitment. Together, we will build a stronger, bigger and more professionally managed organisation.</p>

              <div className="mt-16 pt-8 border-t border-gray-100 dark:border-brandBlue-800">
                <p className="mb-6">Warm regards,</p>
                {/* Simulated Signature */}
                <div className="mb-4">
                  <svg className="h-16 text-brandBlue-900 dark:text-white opacity-80" viewBox="0 0 200 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 40c10-10 20-30 30-30s10 30 20 30 15-20 25-20 10 20 20 20c10 0 15-15 25-15s15 15 25 15" />
                    <path d="M40 50l60-10" />
                  </svg>
                </div>
                <p className="font-bold text-xl text-brandBlue-900 dark:text-white">TAIWO O. A. OGUNBODEDE (Esq.)</p>
                <p className="text-gray-500 dark:text-gray-400 font-sans tracking-widest uppercase text-sm mt-1">Founder/CEO</p>
                <p className="text-brandBlue-500 font-sans font-medium mt-1">Gran Maestro Drycleaners</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
};
