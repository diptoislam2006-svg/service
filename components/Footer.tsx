import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c1e22] text-[#FAF6F0]/60 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center">
              <span className="text-3xl dipto-logo-text">DIPTO</span>
            </Link>
            <p className="text-[#FAF6F0]/40 text-sm leading-relaxed font-medium">
              We translate brand vision into performance reality. Modern marketing for the elite business landscape.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="p-2.5 bg-white/5 rounded-xl hover:text-[#657b88] transition-colors border border-white/5"><Twitter size={20} /></a>
              <a href="#" className="p-2.5 bg-white/5 rounded-xl hover:text-[#657b88] transition-colors border border-white/5"><Linkedin size={20} /></a>
              <a href="#" className="p-2.5 bg-white/5 rounded-xl hover:text-[#657b88] transition-colors border border-white/5"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[#FAF6F0] font-bold mb-8 uppercase tracking-widest text-xs">Directory</h4>
            <ul className="space-y-5">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-[#657b88] transition-colors text-sm font-semibold">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#FAF6F0] font-bold mb-8 uppercase tracking-widest text-xs">Specialties</h4>
            <ul className="space-y-5">
              <li><Link to="/services" className="hover:text-[#657b88] transition-colors text-sm font-semibold">SEO Strategy</Link></li>
              <li><Link to="/services" className="hover:text-[#657b88] transition-colors text-sm font-semibold">Performance Ads</Link></li>
              <li><Link to="/services" className="hover:text-[#657b88] transition-colors text-sm font-semibold">Social Media</Link></li>
              <li><Link to="/services" className="hover:text-[#657b88] transition-colors text-sm font-semibold">Branding & Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FAF6F0] font-bold mb-8 uppercase tracking-widest text-xs">Stay Ahead</h4>
            <p className="text-sm text-[#FAF6F0]/40 mb-6 font-medium">Join 5,000+ marketing leaders receiving our weekly brief.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-[#FAF6F0] focus:ring-2 focus:ring-[#657b88] outline-none transition-all placeholder:text-[#FAF6F0]/20"
              />
              <button className="absolute right-2 top-2 p-2 bg-[#657b88] text-[#FAF6F0] rounded-xl hover:opacity-90 transition-opacity">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-[0.2em] text-[#FAF6F0]/20 space-y-6 md:space-y-0">
          <p>© 2024 DIPTO Growth Agency. Redefining Scale.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;