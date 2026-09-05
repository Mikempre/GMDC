import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import processImg from '../assets/process_image.png';

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const steps = [
    { num: "01", title: "Receive", desc: "Garments are carefully inspected, tagged, and categorized based on fabric type and specific care instructions." },
    { num: "02", title: "Spot Clean", desc: "Expert stain specialists identify and pre-treat any spots using advanced, fabric-safe solutions." },
    { num: "03", title: "Cleaning", desc: "Garments undergo our premium dry cleaning or wet cleaning process in state-of-the-art machines." },
    { num: "04", title: "Quality Control", desc: "A rigorous inspection ensures stains are gone and the fabric integrity is perfectly maintained." },
    { num: "05", title: "Hand Finishing", desc: "Expert pressers use specialized equipment to restore the garment's original shape, drape, and crispness." },
    { num: "06", title: "Delivery", desc: "Garments are beautifully packaged and safely delivered back to your door, ready to wear." }
  ];

  return (
    <section id="process" className="py-32 bg-[#060d1f] relative overflow-hidden transition-colors duration-500">
      {/* Background grids and blurs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" className="text-navy-700"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brandRed-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <SectionTitle 
          title="The Gran Maestro Process" 
          subtitle="Our meticulous 6-step workflow ensures every garment receives the highest standard of care, from drop-off to delivery."
          dark={true}
        />

        <div className="mt-24 relative">
          {/* Central Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-navy-800 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-brandRed-500 via-gold-500 to-brandRed-500 rounded-full"
              style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            />
          </div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-16' : 'lg:pr-16'}`}>
                    <div className="glass-dark p-8 rounded-3xl border border-navy-700/50 hover:border-brandRed-500/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(211,26,33,0.15)] relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brandRed-500/10 to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-brandRed-400 transition-colors relative z-10">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors relative z-10">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-navy-900 border-2 border-navy-700 items-center justify-center text-2xl font-black text-brandRed-500 z-10 shadow-xl overflow-hidden group">
                    <motion.div 
                      className="absolute inset-0 bg-brandRed-500 opacity-0 group-hover:opacity-10 transition-opacity"
                    />
                    <span className="relative z-10">{step.num}</span>
                  </div>

                  {/* Mobile Node (Hidden on Desktop) */}
                  <div className="lg:hidden w-16 h-16 rounded-2xl bg-navy-900 border-2 border-brandRed-500/50 flex items-center justify-center text-2xl font-black text-brandRed-500 z-10 shadow-xl shrink-0 self-start">
                    {step.num}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mt-32 relative w-full rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-[400px] lg:h-[500px] group border border-navy-700/50"
        >
          <img src={processImg} alt="Premium dry cleaning and laundry" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent opacity-80"></div>
          <div className="absolute inset-0 bg-mesh-dark mix-blend-screen opacity-30"></div>
          <div className="absolute bottom-12 left-8 sm:left-12 max-w-2xl">
            <h4 className="text-4xl lg:text-5xl font-serif font-black text-white mb-4 leading-tight">Expertise in <br/>Every Thread.</h4>
            <p className="text-gray-300 text-lg">Delivering perfection through meticulous attention to detail.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
