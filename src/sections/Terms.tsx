import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TermsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Terms: React.FC<TermsProps> = ({ isOpen, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"
          />
          
          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl max-h-[85vh] bg-white dark:bg-navy-950 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border border-gray-100 dark:border-navy-700"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-navy-700 bg-gray-50 dark:bg-navy-900/50">
              <h2 className="text-2xl font-serif font-black text-navy-900 dark:text-white">Terms of Service</h2>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white dark:bg-navy-800 flex items-center justify-center text-gray-500 hover:text-brandRed-500 hover:bg-brandRed-50 dark:hover:bg-brandRed-500/20 transition-colors shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            
            {/* Content (Scrollable) */}
            <div className="p-6 md:p-8 overflow-y-auto text-gray-600 dark:text-gray-400">
              <div className="mb-8">
                <h3 className="text-lg font-black text-navy-900 dark:text-white mb-3">1. Service Quality Guarantee</h3>
                <p className="leading-relaxed">
                  Gran Maestro Drycleaners is committed to providing the highest quality of garment care. We use industry-standard processes, eco-friendly solvents, and expert handling. However, we cannot guarantee the removal of all stains or the prevention of inherent fabric weaknesses from showing during the cleaning process.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-black text-navy-900 dark:text-white mb-3">2. Care Labels & Liability</h3>
                <p className="leading-relaxed">
                  We follow the manufacturer's care instructions on the garment label. If a care label is missing or unreadable, we will process the item using our professional judgment, but we will not be held liable for damage that occurs as a result of improper manufacturing or hidden defects. Liability for any lost or damaged item is limited to 10 times the cleaning charge for that specific item.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-black text-navy-900 dark:text-white mb-3">3. Pickup & Delivery</h3>
                <p className="leading-relaxed">
                  We offer pickup and delivery services. Customers must ensure that items handed over are properly counted and checked. Any discrepancies in count or claimed damages must be reported within 24 hours of delivery. Gran Maestro is not responsible for items left in garments (e.g., money, jewelry, pens).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-black text-navy-900 dark:text-white mb-3">4. Unclaimed Garments</h3>
                <p className="leading-relaxed">
                  Garments must be picked up or delivery arranged within 30 days of completion. After 90 days, unclaimed garments may be donated to charity to clear our storage facilities, and Gran Maestro will not be held liable for such items.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
