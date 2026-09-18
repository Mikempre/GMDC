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
            className="absolute inset-0 bg-brandBlue-900/60 backdrop-blur-sm"
          />
          
          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl max-h-[85vh] bg-white dark:bg-brandBlue-950 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border border-gray-100 dark:border-brandBlue-700"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-brandBlue-700 bg-gray-50 dark:bg-brandBlue-900/50">
              <h2 className="text-2xl font-serif font-black text-brandBlue-900 dark:text-white">Terms and Conditions of Service</h2>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white dark:bg-brandBlue-800 flex items-center justify-center text-gray-500 hover:text-brandBlue-500 hover:bg-brandBlue-50 dark:hover:bg-brandBlue-500/20 transition-colors shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            
            {/* Content (Scrollable) */}
            <div className="p-6 md:p-8 overflow-y-auto text-gray-600 dark:text-gray-400">
              <div className="mb-8">
                <h3 className="text-lg font-black text-brandBlue-900 dark:text-white mb-3">1. Items Accepted for Cleaning</h3>
                <p className="leading-relaxed">
                  Gran Maestro Drycleaners shall be responsible only for materials/items that have been officially documented and received by our facility for cleaning and processing.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-black text-brandBlue-900 dark:text-white mb-3">2. Collection of Items</h3>
                <p className="leading-relaxed">
                  Upon collection, customers are required to present their original invoice or valid proof of payment before their items can be released.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-black text-brandBlue-900 dark:text-white mb-3">3. Colour Run and Fabric Damage</h3>
                <p className="leading-relaxed">
                  Management shall not be held liable for colour runs, shrinkage, or any other damage resulting from weak fibres, poor fabric quality, inferior materials, or inherent defects in the garment.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-black text-brandBlue-900 dark:text-white mb-3">4. Liability for Loss or Damage</h3>
                <p className="leading-relaxed">
                  In the unlikely event of loss of or damage to any material/item accepted by Gran Maestro Drycleaners for cleaning, our liability shall be limited to five (5) times the cost of the cleaning service as stated on the customer's invoice.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-black text-brandBlue-900 dark:text-white mb-3">5. Unclaimed Items</h3>
                <p className="leading-relaxed">
                  Management shall not be responsible for any clothing or other items left unclaimed for six (6) weeks after the due/collection date stated on the invoice.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-black text-brandBlue-900 dark:text-white mb-3">6. Auction of Unclaimed Items</h3>
                <p className="leading-relaxed">
                  Items that remain uncollected for a period exceeding six (6) months from the due/collection date may be disposed of or auctioned by management to recover applicable costs.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-black text-brandBlue-900 dark:text-white mb-3">7. Customer Verification Upon Collection</h3>
                <p className="leading-relaxed">
                  Dear Esteemed Clients, you are advised to carefully check and confirm that all your items are complete and in satisfactory condition before leaving the outlet after collection. Any concern regarding missing or damaged items should be reported to our staff immediately.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-brandBlue-800">
                <p className="leading-relaxed font-semibold mb-1">Thank you for choosing Gran Maestro Drycleaners.</p>
                <p className="italic text-brandBlue-600 dark:text-brandBlue-400">Freshness Redefined.</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
