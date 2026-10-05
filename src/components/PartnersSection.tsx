import React, { useState } from 'react';
import { PARTNERS_DATA } from '../data/mockData';
import { PartnerCategory } from '../types';
import { Building2, Landmark, Scale, BookOpen, Handshake, Globe } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: ('All' | PartnerCategory)[] = [
    'All',
    'Government',
    'Legal Profession',
    'Judiciary',
    'Universities',
    'Law Firms',
  ];

  const filteredPartners =
    selectedCategory === 'All'
      ? PARTNERS_DATA
      : PARTNERS_DATA.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (cat: PartnerCategory) => {
    switch (cat) {
      case 'Government':
        return Landmark;
      case 'Judiciary':
        return Scale;
      case 'Legal Profession':
        return Handshake;
      case 'Universities':
        return BookOpen;
      default:
        return Building2;
    }
  };

  return (
    <section id="partners" className="py-24 bg-[#F5F2EB] text-[#1A1A1A] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#C59B27]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8F6E15] font-semibold">
              Institutional Cooperation
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B1320] font-semibold tracking-tight">
            Institutional Ecosystem & Partners
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Indahiro functions at the intersection of Rwanda’s judiciary, executive justice ministries, the independent bar, academic faculties, and leading commercial law practices.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EAE5DA] rounded-lg mb-10 w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-[#0B1320] shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPartners.map((partner) => {
            const IconComp = getCategoryIcon(partner.category);
            return (
              <div
                key={partner.id}
                className="bg-white rounded-xl border border-[#E2DDD3] p-6 hover:border-[#C59B27] transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-[#8F6E15] uppercase tracking-wider font-semibold">
                      {partner.category}
                    </span>
                    <div className="p-2 rounded bg-stone-100 text-stone-700">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#0B1320] mb-1">
                    {partner.name}
                  </h3>

                  {partner.acronym && (
                    <span className="text-xs font-mono font-medium text-stone-500 block mb-3">
                      ({partner.acronym})
                    </span>
                  )}

                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    {partner.roleDescription}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-100 text-[10px] font-mono text-stone-400">
                  RWANDA JUSTICE SECTOR ECOSYSTEM
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Callout */}
        <div className="mt-14 p-8 bg-[#0B1320] rounded-xl text-white border border-stone-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E8C568]">
              Partnership Inquiries
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Collaborate With the Indahiro Fellowship
            </h3>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              We welcome chambers, regional tribunals, non-governmental justice organizations, and international arbitration institutions seeking to support Rwanda’s legal talent pipeline.
            </p>
          </div>
          <a
            href="mailto:indahirofellowship@gmail.com?subject=Indahiro%20Fellowship%20Partnership%20Inquiry"
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B1320] bg-[#C59B27] hover:bg-[#E8C568] rounded transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Inquire About Partnership
          </a>
        </div>

      </div>
    </section>
  );
};
