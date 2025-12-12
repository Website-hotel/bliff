import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-charcoal">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-champagne font-bold tracking-widest text-sm uppercase mb-2 block">Get in Touch</span>
            <h1 className="text-5xl font-serif text-white mb-8">Let's Discuss Your Future Home</h1>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
              Whether you are looking to buy, sell, or simply explore the market, our team at Bliff Real Estate is here to provide you with exceptional service.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-champagne shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white text-lg font-serif mb-1">Visit Our Office</h4>
                  <p className="text-gray-400">45 Alexandra Place,<br/>Colombo 07, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-champagne shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white text-lg font-serif mb-1">Call Us</h4>
                  <p className="text-gray-400">+94 11 234 5678<br/>+94 77 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-champagne shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white text-lg font-serif mb-1">Email Us</h4>
                  <p className="text-gray-400">hello@bliffrealestate.lk<br/>sales@bliffrealestate.lk</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-panel p-8 md:p-12 rounded-xl border border-white/10">
            <h3 className="text-2xl font-serif text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-champagne uppercase font-bold tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-black/30 border border-white/10 rounded-sm p-4 text-white focus:border-champagne outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-champagne uppercase font-bold tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-black/30 border border-white/10 rounded-sm p-4 text-white focus:border-champagne outline-none transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-champagne uppercase font-bold tracking-wider">Email</label>
                <input type="email" className="w-full bg-black/30 border border-white/10 rounded-sm p-4 text-white focus:border-champagne outline-none transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-champagne uppercase font-bold tracking-wider">Subject</label>
                <select className="w-full bg-black/30 border border-white/10 rounded-sm p-4 text-white focus:border-champagne outline-none transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Buying</option>
                  <option>Selling</option>
                  <option>Valuation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-champagne uppercase font-bold tracking-wider">Message</label>
                <textarea rows={5} className="w-full bg-black/30 border border-white/10 rounded-sm p-4 text-white focus:border-champagne outline-none transition-colors"></textarea>
              </div>

              <button className="w-full py-4 bg-champagne text-black font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
