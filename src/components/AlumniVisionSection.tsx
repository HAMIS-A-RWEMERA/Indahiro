import React from 'react';
import { Network, Scale, Building, Landmark, Compass, Award } from 'lucide-react';

export const AlumniVisionSection: React.FC = () => {
  const destinationSectors = [
    {
      title: 'Judicial Clerkships & The Bench',
      icon: Scale,
      detail: 'Clerking at the Supreme Court of Rwanda, Court of Appeal, and Commercial High Court.',
    },
    {
      title: 'Top Commercial Law Chambers',
      icon: Building,
      detail: 'Associate counsel at premier Rwandan and pan-African corporate dispute firms.',
    },
    {
      title: 'State Justice Directorates & NPPA',
      icon: Landmark,
      detail: 'Public prosecutors, legislative drafters at MINIJUST, and state attorneys defending the public good.',
    },
    {
      title: 'International Arbitration & Trade',
      icon: Award,
      detail: 'Practitioners leading arbitrations at KIAC and East African Court of Justice (EACJ).',
    },
  ];

  return (
    <section id="alumni" className="py-24 bg-[#080E18] text-white relative overflow-hidden border-b border-[#1A2638]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C59B27]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#E8C568] font-semibold">
              The 10-Year National Horizon
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white tracking-tight">
            The Indahiro Alumni Network
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            Every elite institution begins with a singular first step. While our inaugural cohort finishes its practice year, the groundwork for a generational transformation is underway.
          </p>
        </div>

        {/* The Key Banner: "The first generation is coming." */}
        <div className="p-8 sm:p-14 bg-[#0F1A2A] rounded-2xl border border-[#22334D] shadow-2xl relative overflow-hidden mb-16 text-center max-w-4xl mx-auto">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
          
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#E8C568] block mb-4">
            Cohort I Induction · 2026 / 2027
          </span>

          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight mb-4">
            &ldquo;The first generation is coming.&rdquo;
          </h3>

          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Ten fellows who will carry the Indahiro standard into the Rwanda Bar Association, the judiciary, state prosecution, and ministries—forming a lifelong brotherhood and sisterhood of legal integrity.
          </p>

          <div className="inline-flex items-center space-x-3 text-xs font-mono text-[#E8C568] bg-[#162338] px-5 py-2.5 rounded-full border border-[#2B3E5E]">
            <Network className="w-4 h-4 text-[#C59B27]" />
            <span>10 Fellows / Year · 100 Alumni Across Rwanda by 2036</span>
          </div>
        </div>

        {/* 10-Year Vision Map Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h4 className="text-xs uppercase tracking-widest text-[#E8C568] font-semibold mb-1">
              Where Indahiro Fellows Will Lead
            </h4>
            <p className="text-2xl font-serif font-semibold text-white">
              A Connected National Justice Network
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinationSectors.map((sector) => {
              const IconComp = sector.icon;
              return (
                <div
                  key={sector.title}
                  className="p-6 bg-[#0E1726] rounded-xl border border-stone-800 hover:border-[#C59B27]/60 transition-all text-center flex flex-col items-center justify-between"
                >
                  <div className="w-12 h-12 rounded-full bg-[#18263B] text-[#E8C568] flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h5 className="text-base font-serif font-bold text-white mb-2">
                    {sector.title}
                  </h5>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    {sector.detail}
                  </p>
                  <div className="mt-4 pt-3 border-t border-stone-800/80 w-full text-[10px] font-mono text-stone-500">
                    TARGET: 2027–2036 PLACEMENT
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
