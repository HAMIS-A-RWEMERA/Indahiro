import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck } from 'lucide-react';
import { MentorCategory } from '../types';

interface BecomeMentorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BecomeMentorModal: React.FC<BecomeMentorModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    category: 'Advocates' as Exclude<MentorCategory, 'All'>,
    yearsOfExperience: '10-15',
    areaOfExpertise: '',
    motivation: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
      <div className="bg-[#FAF8F5] w-full max-w-xl rounded-xl border border-[#DCD5C6] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 bg-[#0B1320] text-white flex items-center justify-between border-b border-stone-800">
          <div>
            <span className="text-[10px] font-mono text-[#E8C568] uppercase tracking-widest block">
              Professional Mentorship Network
            </span>
            <h3 className="text-xl font-serif font-bold text-white">
              Join the Indahiro Mentor Ecosystem
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-md text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#0B1320]">
                Expression of Interest Received
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold">{formData.fullName}</span>. The Indahiro Academic & Professional Board reviews mentor applications on a rolling basis. Our secretariat will contact you shortly to schedule an introductory dialogue.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B1320] rounded hover:bg-stone-800 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs text-stone-800">
              <p className="text-stone-600 text-xs leading-relaxed">
                We welcome distinguished advocates, judges, prosecutors, academics, and policy professionals who are prepared to dedicate structured time to apprentice Rwanda’s next generation of lawyers.
              </p>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Full Name & Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Me. Jean-Paul Gasana / Hon. Justice..."
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded focus:outline-none focus:border-[#0B1320] text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="advocate@chambers.rw"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded focus:outline-none focus:border-[#0B1320] text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+250 788 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded focus:outline-none focus:border-[#0B1320] text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Professional Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded focus:outline-none focus:border-[#0B1320] text-xs"
                  >
                    <option value="Advocates">Advocate (Rwanda Bar)</option>
                    <option value="Judges">Judge / Jurist</option>
                    <option value="Prosecutors">Prosecutor (NPPA)</option>
                    <option value="Academics">Academic / Faculty</option>
                    <option value="Legal Practitioners">Legal Practitioner / In-House Counsel</option>
                    <option value="Policy Professionals">Policy Professional / Government</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Years of Practice *
                  </label>
                  <select
                    value={formData.yearsOfExperience}
                    onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded focus:outline-none focus:border-[#0B1320] text-xs"
                  >
                    <option value="5-9">5 – 9 Years</option>
                    <option value="10-15">10 – 15 Years</option>
                    <option value="15-20">15 – 20 Years</option>
                    <option value="20+">20+ Years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Chambers / Institution / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Trust Law Chambers / High Court / MINIJUST"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded focus:outline-none focus:border-[#0B1320] text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Primary Areas of Expertise & Practice *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Commercial Litigation, Tax, Criminal Defense, Land Disputes"
                  value={formData.areaOfExpertise}
                  onChange={(e) => setFormData({ ...formData, areaOfExpertise: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded focus:outline-none focus:border-[#0B1320] text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Why do you wish to mentor an Indahiro Fellow? (Brief statement) *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your mentorship philosophy and what aspects of legal practice you are eager to impart..."
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded focus:outline-none focus:border-[#0B1320] text-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B1320] hover:bg-[#182842] rounded transition-colors shadow-sm cursor-pointer"
                >
                  Submit Mentor Expression of Interest
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
