import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  dark?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image, dark = false }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className={`relative h-full flex flex-col rounded-[2rem] border overflow-hidden group transition-all duration-300 ease-out glass-card
        ${dark 
          ? 'border-brandBlue-700/50 hover:border-brandBlue-500/50 text-white bg-brandBlue-900/20' 
          : 'border-white/50 hover:border-brandBlue-300/80 text-brandBlue-900 bg-white/40'}
        `}
      >
        {/* Animated Glow Effect */}
        <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-brandBlue-500/20 via-brandBlue-400/10 to-transparent rounded-bl-full -mr-24 -mt-24 transition-transform duration-700 group-hover:scale-[2] ease-out`}></div>
        
        {/* Shine Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out pointer-events-none z-20"></div>
        
        {image && (
          <div className="w-full h-48 sm:h-56 relative overflow-hidden flex-shrink-0">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
            {icon && (
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-md text-white shadow-lg border border-white/20">
                {icon}
              </div>
            )}
          </div>
        )}

        <div className={`p-8 flex flex-col flex-grow ${image ? 'pt-6' : 'pt-8'}`}>
          {!image && icon && (
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative z-10 transition-all duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(0,80,210,0.3)] group-hover:-translate-y-2
              ${dark ? 'bg-brandBlue-900/80 text-brandBlue-400 group-hover:bg-brandBlue-500 group-hover:text-white' : 'bg-white/90 text-brandBlue-500 group-hover:bg-gradient-to-br group-hover:from-brandBlue-500 group-hover:to-brandBlue-600 group-hover:text-white'}`}>
              {icon}
            </div>
          )}
          
          <h3 className="text-2xl font-serif font-bold mb-4 relative z-10 transition-colors group-hover:text-brandBlue-600 dark:group-hover:text-brandBlue-400">
            {title}
          </h3>
          
          <p className={`text-base leading-relaxed relative z-10 transition-colors font-light flex-grow
            ${dark ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-brandBlue-900'}
          `}>
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
