'use client';

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqData: FaqItem[];
  title?: string;
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqData, title = "Frequently Asked Questions" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0b0b17] flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full rounded-xl">
        <h2 className="text-3xl font-semibold text-center text-white py-10">
          <span className="text-white/30">{title.split(' ')[0]} </span>
          {title.split(' ').slice(1).join(' ')}
        </h2>
        <div className="bg-[#0b0b17] rounded-3xl overflow-hidden divide-y divide-white/100 border border-white/80">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-white/80">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center py-5 px-6 text-left text-white text-sm md:text-base font-semibold focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-white bg-white/10 p-2 rounded-full">
                  {openIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    className="px-6 pb-6 text-sm text-gray-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
