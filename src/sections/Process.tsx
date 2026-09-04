import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import processImg from '../assets/process_image.png';

export const Process: React.FC = () => {
  const steps = [
    { num: "01", title: "Receive", desc: "Garments are carefully inspected, tagged, and categorized based on fabric type and specific care instructions." },
    { num: "02", title: "Spot Clean", desc: "Expert stain specialists identify and pre-treat any spots using advanced, fabric-safe solutions." },
    { num: "03", title: "Cleaning", desc: "Garments undergo our premium dry cleaning or wet cleaning process in state-of-the-art machines." },
    { num: "04", title: "Quality Control", desc: "A rigorous inspection ensures stains are gone and the fabric integrity is perfectly maintained." },
    { num: "05", title: "Hand Finishing", desc: "Expert pressers use specialized equipment to restore the garment's original shape, drape, and crispness." },
    { num: "06", title: "Delivery", desc: "Garments are beautifully packaged and safely delivered back to your door, ready to wear." }
  ];

  return (
    <section id="process" className="py-32 bg-[#081630] relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" className="text-white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="The Gran Maestro Process" 
          subtitle="Our meticulous 6-step workflow ensures every garment receives the highest standard of care, from drop-off to delivery."
          dark={true}
        />

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Connector Line */}
                {index !== steps.length - 1 && index !== 2 && index !== 5 && (
                   <div className="hidden lg:block absolute top-10 left-24 right-0 h-[2px] bg-navy-700 w-[calc(100%-4rem)] z-0 group-hover:bg-brandRed-500 transition-colors duration-500"></div>
                )}
                
                <div className="flex flex-col items-start relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-navy-800 border-2 border-navy-700 flex items-center justify-center text-2xl font-black text-brandRed-500 mb-6 group-hover:bg-brandRed-500 group-hover:text-white group-hover:border-brandRed-500 transition-all duration-300 transform group-hover:-translate-y-2 shadow-lg">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brandRed-500 transition-colors">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed pr-6 group-hover:text-gray-300 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 relative w-full rounded-[2rem] overflow-hidden shadow-2xl h-64 sm:h-96">
          <img src={processImg} alt="Premium dry cleaning and laundry" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-60"></div>
          <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12">
            <h4 className="text-3xl font-black text-white">Expertise in Every Thread.</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
