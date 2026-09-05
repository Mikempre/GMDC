import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#081630] relative transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#0B2046] px-8 py-16 md:px-16 md:py-24 text-center border border-navy-700/50"
        >
          {/* Background Abstract Glows */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute -top-[50%] -right-[20%] w-[70%] h-[150%] rounded-full bg-brandRed-500/20 blur-[100px]"></div>
            <div className="absolute -bottom-[50%] -left-[20%] w-[50%] h-[150%] rounded-full bg-blue-500/10 blur-[100px]"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white mb-6 leading-tight max-w-3xl">
              Ready to elevate your <span className="text-brandRed-500">wardrobe?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the Gran Maestro difference today. Schedule your pickup and let our experts take care of the rest.
            </p>
            
            <a href="https://wa.me/2348188884275" target="_blank" rel="noopener noreferrer" className="inline-block">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-pulse"></div>
                <Button size="lg" className="relative w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white text-lg px-10 py-5 rounded-full border-2 border-transparent hover:border-[#128C7E]">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Schedule Your Pickup
                </Button>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
