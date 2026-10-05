import React, { useState } from 'react';
import { MENTORS_DATA } from '../data/mockData';
import { MentorCategory } from '../types';
import { UserPlus, Award, Building, Sparkles } from 'lucide-react';
import { BecomeMentorModal } from './BecomeMentorModal';

export const MentorsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MentorCategory>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories: MentorCategory[] = [
    'All',
    'Advocates',
    'Judges',
    'Prosecutors',
    'Academics',
    'Legal Practitioners',
    'Policy Professionals',
  ];

  const filteredMentors =
    selectedCategory === 'All'
      ? MENTORS_DATA
      : MENTORS_DATA.filter((m) => m.category === selectedCategory);

  return (
    <section id="mentors" className="py-24 bg-[#F5F2EB] text-[#1A1A1A] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-8 h-[1.5px] bg-[#C59B27]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#8F6E15] font-semibold">
                The Professional Ecosystem
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B1320] font-semibold tracking-tight">
              Our Mentors & Jurists
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
              Distinguished practitioners who walk with fellows through the nuances of the courtroom, ethical crossroads, and high-stakes advocacy that textbooks cannot teach.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B1320] hover:bg-[#1C2C45] rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 self-start md:self-auto cursor-pointer"
          >
            <UserPlus className="w-4 h-4 text-[#E8C568]" />
            <span>Become a Mentor</span>
          </button>
        </div>

        {/* Category Filter Tabs (Zero-Pill Discipline, Segmented Control) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EAE5DA] rounded-lg mb-10 w-fit">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#0B1320] shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-xl border border-[#E2DDD3] p-6 hover:border-[#C59B27]/60 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Clean unboxed metadata */}
                <div className="flex items-center space-x-2 text-[11px] text-[#8F6E15] font-mono mb-2">
                  <span>{mentor.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{mentor.yearsExperience} Yrs Practice</span>
                </div>

                <h3 className="text-lg font-serif font-bold text-[#0B1320] leading-snug mb-1">
                  {mentor.name}
                </h3>

                <p className="text-xs text-stone-600 font-medium mb-3 flex items-center gap-1">
                  <Building className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span className="truncate">{mentor.institution}</span>
                </p>

                <p className="text-xs text-stone-500 font-light mb-4 line-clamp-3 leading-relaxed">
                  {mentor.bio}
                </p>
              </div>

              <div>
                <div className="pt-3 border-t border-stone-100 flex flex-wrap gap-1.5">
                  {mentor.expertise.slice(0, 3).map((exp, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-stone-600 bg-stone-100 px-2 py-0.5 rounded font-medium"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Ecosystem Mission Statement */}
        <div className="mt-14 p-6 bg-[#0B1320] rounded-xl text-stone-200 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-stone-800">
          <div className="space-y-1">
            <span className="text-[#E8C568] font-mono text-[11px] uppercase tracking-wider block">
              The Mentorship Covenant
            </span>
            <p className="font-serif italic text-base sm:text-lg text-white">
              &ldquo;We walk with fellows through the aspects of the legal profession that textbooks cannot teach.&rdquo;
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-xs font-semibold uppercase tracking-wider text-[#0B1320] bg-[#C59B27] hover:bg-[#E8C568] px-4 py-2.5 rounded transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Apply to Guide Fellows
          </button>
        </div>

      </div>

      {/* Become Mentor Modal */}
      <BecomeMentorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
