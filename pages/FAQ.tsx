import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-charcoal">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-champagne font-bold tracking-widest text-sm uppercase mb-2 block">Help Center</span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-gray-400">Everything you need to know about buying luxury real estate in Sri Lanka.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`glass-panel rounded-lg border transition-all duration-300 ${openIndex === index ? 'border-champagne/50 bg-white/10' : 'border-white/10 hover:border-white/30'}`}
            >
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-serif text-lg ${openIndex === index ? 'text-champagne' : 'text-white'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-champagne flex-shrink-0 ml-4" size={20} />
                ) : (
                  <Plus className="text-gray-400 flex-shrink-0 ml-4" size={20} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center glass-panel p-8 rounded-xl border border-white/10">
          <h3 className="text-2xl font-serif text-white mb-4">Still have questions?</h3>
          <p className="text-gray-400 mb-6">Our dedicated team is ready to assist you.</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-white/10 hover:bg-champagne hover:text-black border border-white/20 hover:border-champagne text-white transition-all duration-300 rounded-sm uppercase tracking-wide font-bold">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
