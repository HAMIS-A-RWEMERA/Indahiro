import React from 'react';
import { Mail, MapPin, ArrowUpRight, Scale, ShieldCheck, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenApplication: () => void;
  onOpenDashboard: () => void;
  onOpenSuggestionBox: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenApplication,
  onOpenDashboard,
  onOpenSuggestionBox,
}) => {
  const emails = [
    'rwemera30@gmail.com',
    'niyonkuruclaude0002@gmail.com',
    'theonestineunganase2@gmail.com',
    'angelocalvin100@gmail.com',
  ];

  return (
    <footer className="bg-[#08090C] text-stone-300 border-t border-[#1C202B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Brand, Links, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#1E222D]">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="mb-2">
              <Logo variant="dark" mode="full" size="lg" />
            </div>
            
            <p className="text-sm font-serif italic text-[#F7D875]">
              A national fellowship for Rwanda&apos;s law students.
            </p>
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed font-light">
              From understanding the law to knowing how to use it. A selective incubator instilling courtroom poise, advocacy excellence, practical legal writing, and integrity across Rwanda’s justice sector.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <button
                onClick={onOpenApplication}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0B0D11] bg-gradient-to-r from-[#F7D875] via-[#E2B742] to-[#D5A52A] hover:brightness-105 rounded transition-all cursor-pointer"
              >
                Apply for Fellowship
              </button>
              <button
                onClick={onOpenSuggestionBox}
                className="px-3.5 py-2 text-xs text-stone-300 hover:text-white bg-[#141823] hover:bg-[#1B2232] border border-[#2A3245] rounded transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#F7D875]" />
                <span>Suggestion Box</span>
              </button>
              <button
                onClick={onOpenDashboard}
                className="px-3.5 py-2 text-xs text-stone-400 hover:text-white bg-[#12141B] border border-[#262B38] rounded transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#E2B742]" />
                <span>Committee Portal</span>
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
                <a href="#about" className="hover:text-white transition-colors">
                  About Indahiro
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  The Fellowship Journey
                </a>
              </li>
              <li>
                <a href="#selection" className="hover:text-white transition-colors">
                  Who We Select
                </a>
              </li>
              <li>
                <a href="#standard" className="hover:text-white transition-colors">
                  The Indahiro Standard
                </a>
              </li>
              <li>
                <a href="#mentors" className="hover:text-white transition-colors">
                  Mentors & Jurists
                </a>
              </li>
              <li>
                <a href="#fellows" className="hover:text-white transition-colors">
                  Cohort I Fellows
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-white transition-colors">
                  Institutional Partners
                </a>
              </li>
              <li>
                <a href="#alumni" className="hover:text-white transition-colors">
                  Alumni Vision
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#E2B742] block mb-2">
              Official Inquiries & Secretariat
            </span>
            
            <div className="space-y-2">
              <div className="flex items-start space-x-2 text-stone-400">
                <MapPin className="w-4 h-4 text-[#E2B742] mt-0.5 shrink-0" />
                <span>Kigali, Rwanda</span>
              </div>

              <div className="pt-2 space-y-1.5">
                <span className="text-[11px] font-mono text-stone-500 block">Direct Admissions & Secretariat Emails:</span>
                {emails.map((email) => (
                  <div key={email} className="flex items-center space-x-2">
                    <Mail className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                    <a
                      href={`mailto:${email}`}
                      className="text-stone-300 hover:text-[#E2B742] transition-colors font-mono text-[11px] truncate"
                    >
                      {email}
                    </a>
                  </div>
                ))}
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

        {/* Bottom Tier: Institutional Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 font-mono gap-4">
          <p>
            © {new Date().getFullYear()} INDAHIRO FELLOWSHIP. ALL RIGHTS RESERVED. KIGALI, REPUBLIC OF RWANDA.
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

