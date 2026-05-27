import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/szolgaltatasok', label: t.nav.services },
    { to: '/rolunk', label: t.nav.about },
    { to: '/folyamat', label: t.nav.process },
    { to: '/kapcsolat', label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'nav-glass py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
           <div className="w-10 h-10 bg-bolyan-accent rounded-lg flex items-center justify-center"> 
             <Shield className="w-6 h-6 text-white" />
           </div>
            <span className="font-serif text-xl sm:text-2xl font-bold text-white">
              Bolyán Certificate
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`hover:text-bolyan-accent transition-colors text-sm ${
                  location.pathname === link.to
                    ? 'text-bolyan-accent font-semibold'
                    : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <LanguageSwitcher />

            <Link
              to="/kapcsolat"
              className="btn-primary text-white text-sm"
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <LanguageSwitcher />

            <button
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 glass-card p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block hover:text-bolyan-accent transition-colors ${
                  location.pathname === link.to
                    ? 'text-bolyan-accent font-semibold'
                    : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
