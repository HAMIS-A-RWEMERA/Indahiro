import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/mockData';
import { JournalArticle } from '../types';
import { X, BookOpen, Clock, Calendar, ArrowRight, Quote } from 'lucide-react';

export const JournalSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Fellow Story',
    'Legal Article',
    'Mentor Reflection',
    'Policy Discussion',
  ];

  const filteredArticles =
    activeCategory === 'All'
      ? JOURNAL_ARTICLES
      : JOURNAL_ARTICLES.filter((art) => art.category === activeCategory);

  return (
    <section id="journal" className="py-24 bg-[#FBF9F5] text-[#1A1A1A] border-b border-[#E2DDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1.5px] bg-[#C59B27]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8F6E15] font-semibold">
              The Indahiro Gazette & Journal
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0B1320] font-semibold tracking-tight">
            Stories, Research & Judicial Reflections
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Written voices from inside Rwanda’s courtroom benches, chamber drafting desks, and moot competitions. Demonstrating the intellectual rigor the fellowship produces.
          </p>
        </div>

        {/* Categories (Zero-Pill Discipline) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EAE5DA] rounded-lg mb-10 w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-[#0B1320] shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles 3-Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredArticles.map((article, index) => (
            <article
              key={article.id}
              className={`bg-white rounded-xl border border-[#E2DDD3] p-8 hover:border-[#C59B27] transition-all shadow-xs flex flex-col justify-between ${
                index === 0 ? 'lg:col-span-2 bg-[#FAF8F5]' : ''
              }`}
            >
              <div>
                {/* Clean unboxed metadata with dot separators */}
                <div className="flex items-center space-x-2 text-xs text-stone-500 font-mono mb-3">
                  <span className="text-[#8F6E15] font-semibold">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3
                  className={`font-serif font-bold text-[#0B1320] leading-tight mb-2 hover:text-[#8F6E15] transition-colors cursor-pointer ${
                    index === 0 ? 'text-2xl sm:text-3xl' : 'text-xl'
                  }`}
                  onClick={() => setSelectedArticle(article)}
                >
                  {article.title}
                </h3>

                <p className="text-xs text-stone-500 font-medium mb-4">
                  By {article.author} — {article.authorRole}
                </p>

                <p className="text-stone-700 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-serif italic text-stone-500">
                  Vol. I · Indahiro Legal Papers
                </span>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-xs font-semibold text-[#0B1320] hover:text-[#C59B27] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="bg-[#FAF8F5] w-full max-w-3xl rounded-xl border border-[#D5CEC0] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
            
            {/* Modal Top Bar */}
            <div className="p-6 bg-[#0B1320] text-white flex items-center justify-between border-b border-stone-800">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#E8C568]">
                <span>{selectedArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Editorial Reading Canvas */}
            <div className="p-6 sm:p-10 overflow-y-auto max-w-2xl mx-auto space-y-6">
              
              <div className="border-b border-stone-200 pb-6">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1320] leading-snug">
                  {selectedArticle.title}
                </h3>
                <p className="text-sm font-serif italic text-stone-600 mt-2">
                  {selectedArticle.subtitle}
                </p>
                <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>Author: {selectedArticle.author} ({selectedArticle.authorRole})</span>
                  <span>{selectedArticle.date}</span>
                </div>
              </div>

              {selectedArticle.keyQuote && (
                <div className="p-5 bg-white rounded-lg border-l-4 border-[#C59B27] shadow-xs">
                  <Quote className="w-4 h-4 text-[#C59B27] mb-1" />
                  <p className="font-serif italic text-base text-[#0B1320] leading-relaxed">
                    &ldquo;{selectedArticle.keyQuote}&rdquo;
                  </p>
                </div>
              )}

              <div className="space-y-4 text-sm text-stone-800 leading-relaxed font-light">
                {selectedArticle.content.map((para, i) => (
                  <p key={i} className={i === 0 ? 'first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#0B1320]' : ''}>
                    {para}
                  </p>
                ))}
              </div>

              <div className="pt-8 border-t border-stone-200 text-xs text-stone-500 font-mono flex items-center justify-between">
                <span>INDAHIRO FELLOWSHIP LEGAL JOURNAL</span>
                <span>KIGALI, RWANDA</span>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 text-xs font-semibold text-[#0B1320] bg-white border border-stone-300 rounded hover:bg-stone-50 transition-colors cursor-pointer"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
