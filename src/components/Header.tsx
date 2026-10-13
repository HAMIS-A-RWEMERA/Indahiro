import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenSuggestionBox: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSuggestionBox }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'The Journey', href: '/journey' },
    { label: 'Who We Select', href: '/selection' },
    { label: 'Mentors', href: '/mentors' },
    { label: 'Fellows', href: '/fellows' },
    { label: 'Legal Gazette', href: '/journal' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0D0E11]/95 backdrop-blur-md border-b border-[#22252E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Official Logo Lockup */}
          <Link
            to="/"
            className="flex items-center group transition-transform duration-150 hover:scale-[1.02]"
            aria-label="Indahiro Fellowship Home"
          >
            <Logo variant="dark" mode="full" size="md" />
          </Link>

          {/* Zone 2: Multi-Page Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-stone-300">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#F7D875] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#E2B742]'
                      : 'hover:text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#E2B742] after:scale-x-0 hover:after:scale-x-100 after:transition-transform'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary actions */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <button
              onClick={onOpenSuggestionBox}
              className="px-3 py-2 text-xs font-medium text-stone-300 hover:text-white bg-[#151821] hover:bg-[#1E2330] border border-[#2B3040] rounded transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              title="Submit a recommendation or idea to the Secretariat"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#F7D875]" />
              <span>Suggestion Box</span>
            </button>
            <Link
              to="/apply"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0D0E11] bg-gradient-to-r from-[#F7D875] via-[#E2B742] to-[#D5A52A] hover:brightness-105 rounded shadow-sm transition-all duration-150 whitespace-nowrap cursor-pointer flex items-center gap-1.5"
            >
              <span>Apply for Fellowship</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden space-x-2">
            <Link
              to="/apply"
              className="px-3 py-1.5 text-xs font-bold text-[#0D0E11] bg-[#E2B742] rounded sm:hidden"
            >
              Apply
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#12141A] border-b border-[#22252E] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-stone-200 hover:text-white hover:bg-[#1B1E28] rounded transition-colors"
          >
            Home Overview
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium rounded transition-colors ${
                location.pathname === link.href
                  ? 'text-[#F7D875] bg-[#1A1E29] font-semibold'
                  : 'text-stone-200 hover:text-white hover:bg-[#1B1E28]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#22252E] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSuggestionBox();
              }}
              className="w-full py-2.5 text-xs font-medium text-stone-200 bg-[#1A1F2C] border border-[#2F374A] rounded flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#F7D875]" />
              <span>Suggestion Box (Secretariat)</span>
            </button>
            <Link
              to="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-[#0D0E11] bg-gradient-to-r from-[#F7D875] via-[#E2B742] to-[#D5A52A] rounded shadow-sm text-center cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Apply for Fellowship</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
