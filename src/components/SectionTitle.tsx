import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  dark = false
}) => {
  const alignment = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className={`mb-12 ${alignment[align]} max-w-3xl`}
    >
      <h2 className={`text-4xl md:text-5xl font-serif font-black mb-4 ${dark ? 'text-white' : 'text-navy-900 dark:text-white'} relative inline-block transition-colors`}>
        {title}
        <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full ${dark ? 'bg-brandRed-500' : 'bg-brandRed-500'} ${align === 'left' ? 'left-0 transform-none' : ''}`}></span>
      </h2>
      {subtitle && (
        <p className={`text-lg mt-6 ${dark ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'} transition-colors`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
