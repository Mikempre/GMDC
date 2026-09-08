import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';

const stages = [
  { num: "01", title: "Detailing", desc: "Garments are inspected and prepared for cleaning: fabric identification, ornamental detailing and identify marks or imperfections.", color: "bg-brandBlue-500" },
  { num: "02", title: "Stain Removal and Repairs", desc: "All spots are treated by stain specialist before the item is cleaned. Loose buttons, threads, small tears and fraying are marked and repaired at no charge.", color: "bg-brandBlue-400" },
  { num: "03", title: "Cleaning and Fabric Label Examination", desc: "The most appropriate method is chosen depending on the material and the detailing of each garment. Gran Maestro will only employ the finest technology and purest of cleaning methods.", color: "bg-brandBlue-600" },
  { num: "04", title: "Hand Finishing", desc: "Expert pressers use specialized equipment to restore the garment's original shape, drape, and crispness.", color: "bg-gray-500" },
  { num: "05", title: "Minor repairs", desc: "We handle any minor adjustments needed to ensure your garment is perfect before it leaves our facility.", color: "bg-brandBlue-500" },
  { num: "06", title: "Inspection", desc: "A rigorous final inspection ensures stains are gone and the fabric integrity is perfectly maintained to our high standards.", color: "bg-brandBlue-800" },
  { num: "07", title: "Packaging", desc: "Garments are beautifully packaged to preserve their fresh pressing and safely delivered back to you.", color: "bg-brandBlue-700" }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-gray-50 dark:bg-[#041333] relative overflow-hidden transition-colors duration-500">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Our 7 Stages of Garment Care" 
          subtitle="A meticulous, multi-step workflow ensuring every garment receives the highest standard of premium care."
          dark={false}
        />

        {/* Circular "Flower" Layout */}
        <div className="mt-16 mb-24 flex justify-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[320px] h-[320px] md:scale-125 lg:scale-150 transform origin-top"
          >
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 w-40 h-40 -ml-20 -mt-20 bg-white dark:bg-navy-900 rounded-full shadow-2xl z-20 flex flex-col items-center justify-center p-4 border-4 border-gray-50 dark:border-navy-800 text-center">
              <span className="text-xs font-bold tracking-widest text-gray-400 mb-1 uppercase">Our</span>
              <span className="text-xl font-black text-brandBlue-900 dark:text-white leading-tight">7 STAGES</span>
              <span className="text-xs font-bold tracking-widest text-gray-400 mt-1 uppercase">of Garment Care</span>
            </div>

            {/* Petals */}
            {stages.map((stage, index) => {
              const radius = 110; // distance from center
              const angle = index * (360 / 7);
              
              return (
                <div 
                  key={index}
                  className="absolute top-1/2 left-1/2 w-28 h-28 -ml-14 -mt-14 z-10"
                  style={{ transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)` }}
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className={`w-full h-full rounded-full shadow-sm ${stage.color} flex flex-col items-center justify-center text-white border-4 border-white dark:border-[#041333] cursor-default group`}
                  >
                    <span className="text-2xl font-black mb-1">{stage.num}</span>
                    
                    {/* Tooltip-like label that appears outside the circle on desktop hover */}
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-navy-900 text-brandBlue-900 dark:text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap pointer-events-none z-30"
                         style={{ transform: `translateY(${angle > 90 && angle < 270 ? '60px' : '-60px'})` }}>
                      {stage.title}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Detailed Vertical Timeline */}
        <div className="mt-32 max-w-3xl mx-auto space-y-12 md:space-y-16">
          {stages.map((stage, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-6 group"
            >
              {/* Number Circle */}
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-300 dark:border-navy-700 flex items-center justify-center text-3xl md:text-4xl font-light text-gray-400 dark:text-gray-500 group-hover:border-brandRed-500 group-hover:text-brandRed-500 transition-colors duration-300 bg-white dark:bg-navy-900 shadow-sm">
                {parseInt(stage.num)}
              </div>
              
              {/* Text Content */}
              <div className="pt-2 md:pt-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-brandBlue-600 dark:group-hover:text-brandBlue-400 transition-colors">
                  {stage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed md:text-lg">
                  {stage.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
