import React from 'react';
import { motion } from 'framer-motion';


const reasons = [
  {
    title: "Professional & Dedicated Staff",
    description: "Our team is professional, experienced, and committed to handling every garment with care, attention, and expertise.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    )
  },
  {
    title: "Customer-Centric Services",
    description: "We put our customers at the heart of everything we do, providing personalised services designed to meet their individual needs and expectations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    )
  },
  {
    title: "Prompt & Efficient Service Delivery",
    description: "We value our customers' time and are committed to delivering fast, reliable, and efficient services without compromising quality.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    title: "Expert Fabric Care",
    description: "We understand that different fabrics require different treatments. From delicate fabrics to everyday garments and special outfits, we apply the appropriate care.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    )
  },
  {
    title: "Comprehensive Cleaning & Care",
    description: "We offer a complete range of fabric-care services, including dry cleaning, laundry, ironing and pressing, stain removal, alterations, and household fabric care.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    title: "Quality You Can Trust",
    description: "We are committed to maintaining high standards in cleaning, finishing, and garment presentation, ensuring that every item is returned fresh, clean, and well-presented.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
    )
  },
  {
    title: "Care for Every Garment",
    description: "From corporate wear, native attire, and delicate fabrics to wedding gowns, children's clothing, uniforms, and household items, every item receives the care it deserves.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    )
  },
  {
    title: "Competitive & Transparent Pricing",
    description: "Our services are competitively priced, with a comprehensive pricing structure designed to provide value across different categories of garments and household items.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    title: "Bulk & Corporate Orders",
    description: "We are equipped to handle bulk orders and provide dependable fabric-care solutions for businesses, organisations, families, and other high-volume customers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    )
  },
  {
    title: "Years of Experience",
    description: "With nearly 20 years of fabric-care experience, Gran Maestro Drycleaners brings knowledge, professionalism, and consistency to every service we provide.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12z" /></svg>
    )
  }
];

export const WhyUs: React.FC = () => {
  return (
    <main className="pt-32 pb-24 bg-gray-50 dark:bg-[#041333] min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-6 py-2 rounded-full bg-brandBlue-50 dark:bg-brandBlue-500/10 text-brandBlue-500 font-semibold tracking-wide text-sm uppercase border border-brandBlue-100 dark:border-brandBlue-500/20"
          >
            The Gran Maestro Difference
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-brandBlue-900 dark:text-white mb-6"
          >
            Why Choose Us?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            We don't just clean clothes; we care for them. Here are 10 reasons why Gran Maestro is the trusted choice for premium garment care.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-brandBlue-900 rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-100 dark:border-brandBlue-800 hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brandBlue-50 dark:bg-brandBlue-800 flex items-center justify-center text-brandBlue-500 mb-8 group-hover:scale-110 group-hover:bg-brandBlue-500 group-hover:text-white transition-all duration-500">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-brandBlue-900 dark:text-white mb-4 leading-tight group-hover:text-brandBlue-500 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center bg-brandBlue-900 rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[50%] h-[150%] rounded-full bg-brandBlue-500 blur-[120px]"></div>
          </div>
          <h2 className="relative z-10 text-3xl md:text-5xl font-serif font-black text-white mb-4">
            WE CARE. WE CLEAN. YOU LOOK YOUR BEST.
          </h2>
          <p className="relative z-10 text-brandBlue-400 font-medium text-lg md:text-xl uppercase tracking-widest mt-6">
            Gran Maestro Drycleaners
          </p>
        </motion.div>
      </div>
    </main>
  );
};
