import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenApplication: () => void;
  onOpenDashboard: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenApplication, onOpenDashboard }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'The Journey', href: '#journey' },
    { label: 'Who We Select', href: '#selection' },
    { label: 'The Standard', href: '#standard' },
    { label: 'Mentors', href: '#mentors' },
    { label: 'Fellows', href: '#fellows' },
    { label: 'Partners', href: '#partners' },
    { label: 'Journal', href: '#journal' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0D0E11]/95 backdrop-blur-md border-b border-[#22252E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Official Logo Lockup */}
          <a
            href="#"
            className="flex items-center group transition-transform duration-150 hover:scale-[1.02]"
            aria-label="Indahiro Fellowship Home"
          >
            <Logo variant="dark" mode="full" size="md" />
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-stone-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#E2B742] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenDashboard}
              className="px-3.5 py-2 text-xs font-medium text-stone-300 hover:text-white bg-[#151821] hover:bg-[#1E2330] border border-[#2B3040] rounded transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              title="Access Selection Committee Portal"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#E2B742]" />
              <span>Committee Portal</span>
            </button>
            <button
              onClick={onOpenApplication}
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#0D0E11] bg-gradient-to-r from-[#F7D875] via-[#E2B742] to-[#D5A52A] hover:brightness-105 rounded shadow-sm transition-all duration-150 whitespace-nowrap cursor-pointer"
            >
              Apply for Fellowship
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden space-x-2">
            <button
              onClick={onOpenApplication}
              className="px-3 py-1.5 text-xs font-bold text-[#0D0E11] bg-[#E2B742] rounded"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#12141A] border-b border-[#22252E] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-stone-200 hover:text-white hover:bg-[#1B1E28] rounded transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-[#22252E] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDashboard();
              }}
              className="w-full py-2.5 text-xs font-medium text-stone-300 bg-[#151821] border border-[#2B3040] rounded flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-[#E2B742]" />
              <span>Selection Committee Portal</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplication();
              }}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-[#0D0E11] bg-gradient-to-r from-[#F7D875] via-[#E2B742] to-[#D5A52A] rounded shadow-sm text-center cursor-pointer"
            >
              Apply for Fellowship
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

