import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  dark?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, dark = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className={`relative p-8 rounded-[2rem] border transition-all duration-500 overflow-hidden group
      ${dark 
        ? 'bg-navy-800/80 backdrop-blur-md border-navy-700/50 hover:border-brandRed-500/50 hover:shadow-[0_0_30px_rgba(238,43,71,0.15)] text-white' 
        : 'bg-white/80 backdrop-blur-md border-gray-100 hover:border-brandRed-200 hover:shadow-[0_0_30px_rgba(238,43,71,0.1)] text-navy-900'}
      `}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brandRed-500/20 to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150`}></div>
      
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-colors duration-500 ${dark ? 'bg-navy-900 text-brandRed-400 group-hover:bg-brandRed-500' : 'bg-brandRed-50 text-brandRed-500 group-hover:bg-brandRed-500 group-hover:text-white'}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 relative z-10 transition-colors">{title}</h3>
      <p className={`text-base leading-relaxed relative z-10 transition-colors
        ${dark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'}
      `}>
        {description}
      </p>
    </motion.div>
  );
};
