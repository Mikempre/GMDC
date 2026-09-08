import React from 'react';
import { Hero } from '../sections/Hero';
import { Marquee } from '../components/Marquee';
import { Services } from '../sections/Services';
import { Process } from '../sections/Process';
import { FAQ } from '../sections/FAQ';
import { CTA } from '../sections/CTA';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Marquee />
      
      {/* The GMD Story */}
      <section className="py-24 bg-white dark:bg-[#061c47] transition-colors duration-300 border-t border-gray-100 dark:border-brandBlue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-black text-brandBlue-900 dark:text-white mb-10 leading-tight"
          >
            CREATE TIME FOR THE <span className="text-brandBlue-500">BETTER THINGS</span> OF LIFE.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-left md:text-center"
          >
            <p>
              Gran Maestro Drycleaners provides you a complete package to cater for all your laundry needs - premium laundry service, regular washing, dry cleaning service, starching, ironing, carpet/duvet/curtain cleaning, shoe & bag laundry and even suitcase, bag and shoe repairing services.
            </p>
            <p>
              Long and tiring hours at work, a tiring commute and working on weekends can sap the energy out of most of us. And then there’s the laundry to do. It leaves us wishing for quality family time, a time to put our feet up, relax and connect with people. This is where Gran Maestro can come in handy for you.
            </p>
            <p className="font-semibold text-brandBlue-500 dark:text-brandBlue-400 text-xl py-2">
              Our pickup and delivery service will save your valuable time and let you enjoy your weekends.
            </p>
            <p>
              With our 3 strategically located outlets, you also have the option of getting a more personalised service by walking into our laundry outlets nearest to you. Gran Maestro is your neighbourhood one-stop-shop for all things clothes & related items. We make it a point to understand clothes and fabrics better. So be it laundry, dry cleaning those special clothes, steam ironing those washed clothes or cleaning your shoes and bags, you can trust your clothes to us. We will launder your clothes exactly as we will treat ours. With care.
            </p>
            <p className="font-medium text-brandBlue-800 dark:text-gray-200">
              They will be packaged and sent to you in such a way that in no time you will start loving your wardrobe.
            </p>
          </motion.div>
        </div>
      </section>

      <Services />
      <Process />
      <FAQ />
      <CTA />
    </main>
  );
};
