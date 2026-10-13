import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowUpRight, Scale, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenApplication?: () => void;
  onOpenDashboard: () => void;
  onOpenSuggestionBox: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDashboard,
  onOpenSuggestionBox,
}) => {
  const OFFICIAL_EMAIL = 'indahirofellowship@gmail.com';

  return (
    <footer className="bg-[#08090C] text-stone-300 border-t border-[#1C202B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Brand, Links, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#1E222D]">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="mb-2">
              <Link to="/" aria-label="Indahiro Fellowship Home">
                <Logo variant="dark" mode="full" size="lg" />
              </Link>
            </div>
            
            <p className="text-sm font-serif italic text-[#F7D875]">
              A national fellowship for Rwanda&apos;s law students.
            </p>
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed font-light">
              From understanding the law to knowing how to use it. A selective incubator instilling courtroom poise, advocacy excellence, practical legal writing, and integrity across Rwanda’s justice sector.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <Link
                to="/apply"
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0B0D11] bg-gradient-to-r from-[#F7D875] via-[#E2B742] to-[#D5A52A] hover:brightness-105 rounded transition-all cursor-pointer inline-block"
              >
                Apply for Fellowship
              </Link>
              <button
                onClick={onOpenSuggestionBox}
                className="px-3.5 py-2 text-xs text-stone-300 hover:text-white bg-[#141823] hover:bg-[#1B2232] border border-[#2A3245] rounded transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#F7D875]" />
                <span>Suggestion Box</span>
              </button>
            </div>
          </div>

          {/* Navigation Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#E2B742] block mb-2">
              Navigation
            </span>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Indahiro
                </Link>
              </li>
              <li>
                <Link to="/journey" className="hover:text-white transition-colors">
                  The Fellowship Journey
                </Link>
              </li>
              <li>
                <Link to="/selection" className="hover:text-white transition-colors">
                  Who We Select & Criteria
                </Link>
              </li>
              <li>
                <Link to="/mentors" className="hover:text-white transition-colors">
                  Mentors & Jurists
                </Link>
              </li>
              <li>
                <Link to="/fellows" className="hover:text-white transition-colors">
                  Cohort I Fellows & Alumni
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-white transition-colors">
                  Legal Gazette & Articles
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-[#F7D875] hover:underline font-semibold transition-colors">
                  Application Portal →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#E2B742] block mb-2">
              Official Inquiries & Secretariat
            </span>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-stone-400">
                <MapPin className="w-4 h-4 text-[#E2B742] mt-0.5 shrink-0" />
                <span>Kigali, Rwanda</span>
              </div>

              <div className="pt-1 space-y-1.5">
                <span className="text-[11px] font-mono text-stone-400 block font-semibold">
                  Official Secretariat Email:
                </span>
                <div className="flex items-center space-x-2 p-2 bg-[#12151D] rounded border border-[#212634]">
                  <Mail className="w-4 h-4 text-[#F7D875] shrink-0" />
                  <a
                    href={`mailto:${OFFICIAL_EMAIL}`}
                    className="transition-colors font-mono text-xs text-[#F7D875] font-semibold hover:underline"
                  >
                    {OFFICIAL_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center space-x-4 text-xs text-stone-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-stone-500" />
              </a>
              <span className="text-stone-700">·</span>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>X / Twitter</span>
                <ArrowUpRight className="w-3 h-3 text-stone-500" />
              </a>
              <span className="text-stone-700">·</span>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Legal Gazette</span>
                <ArrowUpRight className="w-3 h-3 text-stone-500" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Institutional Attribution with Wesley Steganography */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 font-mono gap-4">
          <p className="flex items-center flex-wrap">
            <span>© {new Date().getFullYear()} INDAHIRO FELLOWSHIP. ALL RIGHTS RESERVED</span>
            <button
              onClick={onOpenDashboard}
              className="text-stone-500 hover:text-stone-400 focus:outline-none cursor-pointer px-0.5 select-none transition-colors"
              title=""
              aria-label="Institutional attribution period"
            >
              .
            </button>
            <span className="ml-1">KIGALI, REPUBLIC OF RWANDA.</span>
          </p>
          <p className="flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5 text-[#E2B742]" />
            <span>Dedicated to the Advancement of the Rule of Law in Rwanda</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
