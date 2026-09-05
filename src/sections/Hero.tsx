import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/Button';
import heroImage1 from '../assets/hero_image.png';
import heroImage2 from '../assets/hero_delivery.png';
import heroImage3 from '../assets/hero_ironing.png';
import heroImage4 from '../assets/hero_folded.png';

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-[#060d1f] transition-colors duration-500 pt-20 pb-12">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-mesh-light dark:bg-mesh-dark opacity-40 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-700"></div>
        <motion.div 
          className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-brandRed-400/30 to-brandRed-600/10 blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-[40%] -left-[20%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-navy-400/20 to-navy-800/10 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-0 right-[20%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full bg-gold-400/10 blur-[60px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        
        {/* Text Content */}
        <div className="text-center lg:text-left lg:col-span-6 xl:col-span-7 pt-8 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass dark:glass-dark mb-8"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-brandRed-500 animate-pulse-slow shadow-[0_0_8px_rgba(211,26,33,0.8)]"></span>
            <span className="text-sm font-semibold tracking-wide text-navy-900 dark:text-gray-200 uppercase">Premium Fabric Care</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-serif font-black text-navy-900 dark:text-white tracking-tight leading-[1.05] mb-6"
          >
            Elevate Your <br className="hidden md:block"/>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brandRed-500 to-brandRed-600 dark:from-brandRed-400 dark:to-gold-500">
                Wardrobe
              </span>
              <motion.svg 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                className="absolute w-full h-2.5 -bottom-1 left-0 text-brandRed-300 dark:text-brandRed-900/60 -z-0" 
                viewBox="0 0 100 10" preserveAspectRatio="none"
              >
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
              </motion.svg>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            Experience the <span className="font-semibold text-navy-900 dark:text-white">Gran Maestro</span> difference. Nearly 20 years of fabricare revolution, delivering impeccable laundry and dry cleaning directly to your door.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href="https://wa.me/2348188884275" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </Button>
            </a>
            <a href="tel:+2348188884275" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/50 dark:bg-navy-900/50 backdrop-blur-sm border-2 hover:bg-white dark:hover:bg-navy-800 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                Call Us Now
              </Button>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-200 dark:border-navy-800 flex items-center justify-center lg:justify-start gap-12"
          >
             <div className="flex flex-col items-center lg:items-start group">
               <span className="text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-900 to-navy-700 dark:from-white dark:to-gray-300 group-hover:scale-110 transition-transform">20+</span>
               <span className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mt-1">Years Exp.</span>
             </div>
             <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
             <div className="flex flex-col items-center lg:items-start group">
               <span className="text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-brandRed-500 to-brandRed-600 dark:from-gold-400 dark:to-gold-500 group-hover:scale-110 transition-transform">10k+</span>
               <span className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mt-1">Happy Clients</span>
             </div>
          </motion.div>
        </div>

        {/* Image / Visual Content */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0.2 }}
          className="relative block mt-12 lg:mt-0 lg:col-span-6 xl:col-span-5 h-full min-h-[400px]"
        >
          <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center group">
            {/* Decorative background for image */}
            <div className="absolute inset-4 rounded-[3rem] border-2 border-brandRed-200 dark:border-navy-700 transform rotate-6 group-hover:rotate-12 transition-transform duration-700 z-0"></div>
            <div className="absolute inset-4 rounded-[3rem] border-2 border-navy-200 dark:border-brandRed-900/50 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-700 z-0"></div>

            {/* Main Image Carousel */}
            <div className="relative z-10 w-full max-w-md aspect-[4/5] rounded-[2.5rem] shadow-2xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500 bg-navy-900">
              <AnimatePresence>
                <motion.img 
                  key={currentImageIndex}
                  src={heroImages[currentImageIndex]} 
                  alt="Gran Maestro Premium Dry Cleaning Process" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-10000" 
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 sm:-left-12 top-1/4 glass dark:glass-dark p-4 rounded-2xl flex items-center gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.15)] z-20 border border-white/40 dark:border-white/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-brandRed-400 to-brandRed-600 text-white rounded-full flex items-center justify-center shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div className="pr-2">
                <p className="text-sm font-bold text-navy-900 dark:text-white">Spotless Clean</p>
                <p className="text-xs text-gray-500 dark:text-gray-300 font-medium">100% Guaranteed</p>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 sm:-right-8 bottom-1/4 glass dark:glass-dark p-4 rounded-2xl flex items-center gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.15)] z-20 border border-white/40 dark:border-white/10"
            >
               <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-navy-900 text-gold-400 rounded-full flex items-center justify-center shadow-inner">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div className="pr-2">
                <p className="text-sm font-bold text-navy-900 dark:text-white">Fast Turnaround</p>
                <p className="text-xs text-gray-500 dark:text-gray-300 font-medium">Express Available</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
