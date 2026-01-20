import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 border-b border-black/10 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-3xl dipto-logo-text">DIPTO</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm font-semibold transition-colors hover:text-[#657b88] ${location.pathname === link.path ? 'text-[#0c1e22]' : 'text-[#0c1e22]/60'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="px-6 py-2.5 bg-[#0c1e22] text-[#FAF6F0] rounded-full text-sm font-bold btn-gradient shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#0c1e22]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FAF6F0] border-b border-black/10 shadow-xl p-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-[#0c1e22] hover:text-[#657b88] px-4"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-4 bg-[#0c1e22] text-[#FAF6F0] rounded-xl font-bold btn-gradient"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;