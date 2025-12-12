import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f0f0f] pt-24 pb-8 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div>
            <Link to="/" className="text-3xl font-serif font-bold text-white tracking-widest flex items-center gap-2 mb-8">
              <span className="text-champagne">B</span>LIFF
            </Link>
            <p className="text-gray-500 text-sm leading-7 mb-8">
              Bliff Real Estate represents the pinnacle of luxury living in Sri Lanka. Connecting discerning clients with exceptional properties since 2008.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-champagne hover:text-black transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-champagne transition-colors">Home</Link></li>
              <li><Link to="/listings" className="hover:text-champagne transition-colors">Properties</Link></li>
              <li><Link to="/faq" className="hover:text-champagne transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-champagne transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-champagne mt-1 shrink-0" />
                <span>45 Alexandra Place,<br/>Colombo 07, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-champagne shrink-0" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-champagne shrink-0" />
                <span>hello@bliffrealestate.lk</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-6">Market insights and exclusive listings sent to your inbox.</p>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 p-3 rounded-sm text-white text-sm focus:border-champagne outline-none transition-colors" />
              <button className="bg-champagne text-black text-xs font-bold uppercase py-3 px-4 rounded-sm hover:bg-white transition-colors tracking-widest">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Bliff Real Estate. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
