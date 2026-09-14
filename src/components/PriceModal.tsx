import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import priceListImg from '../assets/pricelist.jpg';

interface PriceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PriceModal: React.FC<PriceModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white dark:bg-brandBlue-900 rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
          >
            <div className="absolute top-4 right-4 z-10 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full">
              <button
                onClick={onClose}
                className="p-2 text-gray-800 dark:text-gray-200 hover:text-red-500 transition-colors rounded-full"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="overflow-y-auto p-4 sm:p-8 flex items-center justify-center">
              <img 
                src={priceListImg} 
                alt="Gran Maestro Drycleaners Price List" 
                className="w-full max-w-2xl h-auto rounded-xl shadow-md"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
