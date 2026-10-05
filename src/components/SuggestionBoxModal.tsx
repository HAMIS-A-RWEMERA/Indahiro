import React, { useState } from 'react';
import { X, Send, MessageSquare, CheckCircle2, Shield, Mail, Sparkles, AlertCircle } from 'lucide-react';
import { Logo } from './Logo';

interface SuggestionBoxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SuggestionRecord {
  id: string;
  submittedAt: string;
  name: string;
  email: string;
  phone?: string;
  affiliation: string;
  category: string;
  subject: string;
  message: string;
  isAnonymous: boolean;
}

export const SUGGESTIONS_STORAGE_KEY = 'indahiro_submitted_suggestions_v1';
export const OFFICIAL_INBOX_EMAIL = 'rwemera30@gmail.com';

export const SuggestionBoxModal: React.FC<SuggestionBoxModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [affiliation, setAffiliation] = useState('Law Student');
  const [category, setCategory] = useState('Curriculum & Practical Training Ideas');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [deliveryStatus, setDeliveryStatus] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const refCode = `SUG-${Math.floor(1000 + Math.random() * 9000)}`;

    const record: SuggestionRecord = {
      id: refCode,
      submittedAt: new Date().toISOString(),
      name: isAnonymous ? 'Anonymous Contributor' : fullName,
      email: isAnonymous ? 'anonymous@indahiro.rw' : email,
      phone: phone.trim() || undefined,
      affiliation,
      category,
      subject,
      message,
      isAnonymous,
    };

    // Save to local suggestions registry
    try {
      const existing = localStorage.getItem(SUGGESTIONS_STORAGE_KEY);
      const list = existing ? JSON.parse(existing) : [];
      localStorage.setItem(SUGGESTIONS_STORAGE_KEY, JSON.stringify([record, ...list]));
    } catch (err) {
      console.error('Failed to save suggestion locally', err);
    }

    // Attempt direct dispatch to rwemera30@gmail.com via FormSubmit endpoint
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${OFFICIAL_INBOX_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `[Indahiro Suggestion Box] ${category}: ${subject}`,
          Reference_Code: refCode,
          Submitted_At: new Date().toLocaleString('en-GB', { timeZone: 'Africa/Kigali' }) + ' CAT',
          Contributor_Name: isAnonymous ? 'Anonymous Contributor' : fullName,
          Contributor_Email: isAnonymous ? 'Anonymous' : email,
          Phone_Number: phone || 'N/A',
          Affiliation: affiliation,
          Category: category,
          Subject: subject,
          Detailed_Suggestion: message,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setDeliveryStatus(`Delivered directly to ${OFFICIAL_INBOX_EMAIL}`);
      } else {
        setDeliveryStatus(`Saved locally & queued for ${OFFICIAL_INBOX_EMAIL}`);
      }
    } catch (err) {
      console.warn('FormSubmit background dispatch note:', err);
      setDeliveryStatus(`Saved locally & ready to forward to ${OFFICIAL_INBOX_EMAIL}`);
    }

    setIsSubmitting(false);
    setSubmittedRef(refCode);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
    setIsAnonymous(false);
  };

  const mailtoBody = encodeURIComponent(
    `Indahiro Fellowship Suggestion Box Submission\nReference: ${submittedRef || 'NEW'}\n\nCategory: ${category}\nAffiliation: ${affiliation}\nFrom: ${isAnonymous ? 'Anonymous' : `${fullName} (${email}, ${phone || 'No phone'})`}\n\nSubject: ${subject}\n\nSuggestion / Message:\n${message}\n`
  );
  const mailtoLink = `mailto:${OFFICIAL_INBOX_EMAIL}?subject=${encodeURIComponent(`[Indahiro Suggestion] ${subject || 'New Feedback'}`)}&body=${mailtoBody}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs">
      <div className="bg-[#FAF8F5] w-full max-w-2xl rounded-xl border border-[#D5CEC0] shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#0B0D11] text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center space-x-3">
            <Logo variant="dark" mode="mark" size="md" />
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono text-[#F7D875] uppercase tracking-widest block">
                  Community & Stakeholder Voice
                </span>
                <span className="text-[9px] font-mono bg-[#E2B742]/20 text-[#F7D875] px-1.5 py-0.5 rounded border border-[#E2B742]/30">
                  Inbox: {OFFICIAL_INBOX_EMAIL}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                <span>Indahiro Suggestion Box</span>
              </h3>
              <p className="text-[11px] text-stone-400 font-mono mt-0.5">
                Share curriculum ideas, jurist recommendations, or constructive feedback.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-xs text-stone-800">
          {submittedRef ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#0B1320]">
                Suggestion Received
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Thank you for contributing to the standards of the Indahiro Fellowship. Your input has been registered under:
              </p>
              <div className="inline-block p-3 bg-[#0B1320] text-[#E8C568] font-mono font-bold text-lg rounded-lg border border-[#C59B27]/40 tracking-wider">
                {submittedRef}
              </div>
              <div className="p-3 bg-[#EBF5EE] text-[#1E4620] rounded border border-[#C7E3CA] text-xs max-w-md mx-auto">
                <p className="font-semibold flex items-center justify-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Target Inbox: {OFFICIAL_INBOX_EMAIL}</span>
                </p>
                <p className="text-[11px] text-emerald-800 mt-1">
                  {deliveryStatus || `Forwarded to ${OFFICIAL_INBOX_EMAIL}`}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={mailtoLink}
                  className="px-5 py-2 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded hover:bg-stone-50 flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-stone-500" />
                  <span>Open in Email App (Backup)</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2 text-xs font-semibold text-stone-800 bg-stone-200 hover:bg-stone-300 rounded transition-colors"
                >
                  Submit Another Suggestion
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B0D11] bg-gradient-to-r from-[#F7D875] to-[#E2B742] rounded hover:brightness-105 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Info banner */}
              <div className="p-3.5 bg-[#F4EFE6] rounded-lg border border-[#E0D7C6] flex items-start space-x-3 text-[11px] text-stone-700">
                <Shield className="w-4 h-4 text-[#8F6E15] mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <p className="font-semibold text-[#0B1320]">
                    Direct Channel to the Indahiro Leadership & Secretariat
                  </p>
                  <p className="leading-relaxed">
                    Submissions are routed directly to <span className="font-mono font-semibold text-[#8F6E15]">{OFFICIAL_INBOX_EMAIL}</span>. We welcome critical thoughts on curriculum, recommendations for jurists and mentors, court chambers, or how we can better elevate Rwandan legal talent.
                  </p>
                </div>
              </div>

              {/* Anonymity toggle */}
              <div className="flex items-center justify-between p-3 bg-white rounded border border-[#D5CEC0]">
                <div>
                  <span className="text-xs font-semibold text-stone-800 block">
                    Submit Anonymously?
                  </span>
                  <span className="text-[11px] text-stone-500">
                    If enabled, your personal contact details won&apos;t be required.
                  </span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0B1320]"></div>
                </label>
              </div>

              {/* Contact info (if not anonymous) */}
              {!isAnonymous && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required={!isAnonymous}
                      placeholder="e.g. Me. Jean Claude / Student Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required={!isAnonymous}
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+250 788 000 000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Your Primary Affiliation
                    </label>
                    <select
                      value={affiliation}
                      onChange={(e) => setAffiliation(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                    >
                      <option value="Law Student">Law Student (UR / UoK / MKU / ULK / UNILAK / INES)</option>
                      <option value="Legal Practitioner / Advocate">Legal Practitioner / Advocate (Rwanda Bar)</option>
                      <option value="Judicial Officer / Magistrate">Judicial Officer / Magistrate</option>
                      <option value="Law Faculty / Academic">Law Faculty Member / Academic</option>
                      <option value="Civil Society / Justice Sector Partner">Civil Society / Justice Partner</option>
                      <option value="Prospective Applicant / Alumni">Prospective Applicant / Alumni</option>
                      <option value="Other">Other Concerned Citizen</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Category and Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Suggestion Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                  >
                    <option value="Curriculum & Practical Training Ideas">Curriculum & Practical Advocacy Modules</option>
                    <option value="Mentorship & Jurist Recommendations">Mentor & Jurist Recommendations</option>
                    <option value="University & Law School Partnerships">University Collaborations (UR, UoK, MKU, etc.)</option>
                    <option value="Chamber & Internship Placements">Law Firm & Court Chamber Placements</option>
                    <option value="Fellow Selection & Rubric Feedback">Admissions & Selection Process Feedback</option>
                    <option value="Legal Gazette & Research Topics">Legal Gazette / Research Topics</option>
                    <option value="General Constructive Feedback">General Inquiries & Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Subject / Topic *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Introducing cross-border arbitration simulation"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Your Suggestion / Detailed Message *
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Detail your recommendation, practical experience, or proposed collaboration..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center space-x-2 text-[11px] text-stone-500">
                  <Mail className="w-3.5 h-3.5 text-[#8F6E15]" />
                  <span>Will be dispatched directly to: <span className="font-mono text-stone-700">{OFFICIAL_INBOX_EMAIL}</span></span>
                </div>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs text-stone-600 hover:text-stone-900 border border-stone-300 rounded hover:bg-stone-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B0D11] bg-gradient-to-r from-[#F7D875] via-[#E2B742] to-[#D5A52A] hover:brightness-105 rounded shadow-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Suggestion</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
