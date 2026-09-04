import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import heroImage from '../assets/hero_image.png';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-[#081630] pt-20 transition-colors duration-300">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brandRed-50 dark:bg-brandRed-900/20 blur-[120px] opacity-60"></div>
        <div className="absolute top-[40%] -left-[20%] w-[60%] h-[60%] rounded-full bg-navy-50 dark:bg-navy-800/20 blur-[100px] opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="text-center lg:text-left pt-12 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-navy-800 shadow-sm border border-gray-100 dark:border-navy-700 mb-8 transition-colors"
          >
            <span className="flex h-2 w-2 rounded-full bg-brandRed-500"></span>
            <span className="text-sm font-medium text-navy-900 dark:text-gray-200">Premium Fabric Care</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-black text-navy-900 dark:text-white tracking-tight leading-[1.1] mb-6 transition-colors"
          >
            Elevate Your <br className="hidden md:block"/>
            <span className="text-brandRed-500 relative">
              Wardrobe
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brandRed-100 dark:text-brandRed-900/30 -z-10 transition-colors" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-colors"
          >
            Experience the Gran Maestro difference. Nearly 20 years of fabricare revolution, delivering impeccable laundry and dry cleaning directly to your door.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href="https://wa.me/2348188884275" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </Button>
            </a>
            <a href="tel:+2348188884275">
              <Button variant="outline" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                Call Us Now
              </Button>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex items-center justify-center lg:justify-start gap-8"
          >
             <div className="flex flex-col items-center lg:items-start">
               <span className="text-3xl font-black text-navy-900 dark:text-white transition-colors">20+</span>
               <span className="text-sm text-gray-500 dark:text-gray-400 font-medium transition-colors">Years Experience</span>
             </div>
             <div className="w-px h-12 bg-gray-200 dark:bg-gray-700 transition-colors"></div>
             <div className="flex flex-col items-center lg:items-start">
               <span className="text-3xl font-black text-navy-900 dark:text-white transition-colors">10k+</span>
               <span className="text-sm text-gray-500 dark:text-gray-400 font-medium transition-colors">Happy Clients</span>
             </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative block mt-12 lg:mt-0"
        >
          <div className="relative w-full aspect-square max-w-md lg:max-w-lg mx-auto group">
            {/* Main Image */}
            <div className="absolute inset-0 rounded-[2.5rem] shadow-2xl overflow-hidden transform group-hover:rotate-0 transition-transform duration-700">
              <img src={heroImage} alt="Gran Maestro Premium Laundry" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-1/4 glass dark:glass-dark p-4 rounded-2xl flex items-center gap-4 shadow-xl"
            >
              <div className="w-12 h-12 bg-brandRed-50 dark:bg-brandRed-500/20 text-brandRed-500 dark:text-brandRed-400 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-navy-900 dark:text-white transition-colors">Spotless Clean</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors">Guaranteed</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
