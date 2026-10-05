import React, { useState, useEffect } from 'react';
import {
  X,
  Shield,
  Search,
  CheckCircle2,
  Sliders,
  UserCheck,
  Calendar,
  Award,
  ArrowUpDown,
  Layers,
  Sparkles,
  Lock,
  Unlock,
  ChevronRight,
  MessageSquare,
  Download,
  Mail,
  FileSpreadsheet,
  Inbox,
  MessageSquareText,
  Eye,
  EyeOff,
  LogOut,
  KeyRound,
} from 'lucide-react';
import { ApplicationSubmission, ApplicationStatus } from '../types';
import { Logo } from './Logo';
import { SUGGESTIONS_STORAGE_KEY, SuggestionRecord, OFFICIAL_INBOX_EMAIL } from './SuggestionBoxModal';

interface SelectionDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  applications: ApplicationSubmission[];
  onUpdateApplication: (updated: ApplicationSubmission) => void;
}

const COMMITTEE_AUTH_STORAGE_KEY = 'indahiro_committee_auth_v1';
const AUTHORIZED_EMAIL = 'indahirofellowship@gmail.com';
const AUTHORIZED_PASSWORD = 'indahiro@123';

export const SelectionDashboardModal: React.FC<SelectionDashboardModalProps> = ({
  isOpen,
  onClose,
  applications,
  onUpdateApplication,
}) => {
  // Authentication / Selector Access Gate
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(COMMITTEE_AUTH_STORAGE_KEY) === 'true';
  });
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = emailInput.trim().toLowerCase();
    const cleanPassword = passwordInput.trim();

    if (cleanEmail === AUTHORIZED_EMAIL && cleanPassword === AUTHORIZED_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError('');
      sessionStorage.setItem(COMMITTEE_AUTH_STORAGE_KEY, 'true');
    } else {
      setAuthError('Access Denied: Incorrect email or password. Authorized email is indahirofellowship@gmail.com.');
    }
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(COMMITTEE_AUTH_STORAGE_KEY);
    setPasswordInput('');
  };

  // Selector View State
  const [activeTab, setActiveTab] = useState<'applications' | 'compare' | 'ranking' | 'suggestions'>('applications');
  const [selectedAppId, setSelectedAppId] = useState<string>(applications[0]?.id || '');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [uniFilter, setUniFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Comparison State
  const [compareIdA, setCompareIdA] = useState<string>(applications[0]?.id || '');
  const [compareIdB, setCompareIdB] = useState<string>(applications[1]?.id || '');

  // Active App Note Input
  const [newComment, setNewComment] = useState('');

  // Suggestions state
  const [suggestions, setSuggestions] = useState<SuggestionRecord[]>([]);

  useEffect(() => {
    if (isOpen) {
      try {
        const raw = localStorage.getItem(SUGGESTIONS_STORAGE_KEY);
        if (raw) {
          setSuggestions(JSON.parse(raw));
        }
      } catch (err) {
        console.error('Error loading suggestions', err);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentApp = applications.find((a) => a.id === selectedAppId) || applications[0];

  const handleScoreChange = (dimension: keyof ApplicationSubmission['scores'], value: number) => {
    if (!currentApp) return;
    const updated = {
      ...currentApp,
      scores: {
        ...currentApp.scores,
        [dimension]: value,
      },
    };
    onUpdateApplication(updated);
  };

  const handleStatusChange = (newStatus: ApplicationStatus) => {
    if (!currentApp) return;
    onUpdateApplication({ ...currentApp, status: newStatus });
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !currentApp) return;
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const noteWithMeta = `[Selector Board · ${timestamp}]: ${newComment.trim()}`;
    const updatedNotes = [...(currentApp.committeeNotes || []), noteWithMeta];
    onUpdateApplication({ ...currentApp, committeeNotes: updatedNotes });
    setNewComment('');
  };

  const handleAssignInterview = (slot: string, score?: number) => {
    if (!currentApp) return;
    onUpdateApplication({
      ...currentApp,
      interviewSlot: slot,
      interviewScore: score !== undefined ? score : currentApp.interviewScore,
      status: 'interviewed',
    });
  };

  const filteredApps = applications.filter((app) => {
    const matchesStatus = statusFilter === 'All' || app.status === statusFilter;
    const matchesUni = uniFilter === 'All' || app.personal.university.includes(uniFilter);
    const matchesSearch =
      app.personal.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesUni && matchesSearch;
  });

  // Calculate composite total
  const getAppTotal = (app: ApplicationSubmission) => {
    const sc = app.scores;
    const writtenTotal =
      (sc.analyticalReasoning || 0) +
      (sc.advocacyPotential || 0) +
      (sc.publicServiceIntegrity || 0) +
      (sc.commitmentDiscipline || 0) +
      (sc.practicalScore || 0);
    // If interview score exists (0-100), blend 60% written assessment + 40% interview
    if (app.interviewScore !== undefined) {
      return Math.round(writtenTotal * 0.6 + app.interviewScore * 0.4);
    }
    return writtenTotal;
  };

  // Sorted for ranking leaderboard
  const rankedApps = [...applications].sort((a, b) => getAppTotal(b) - getAppTotal(a));

  const compareAppA = applications.find((a) => a.id === compareIdA) || applications[0];
  const compareAppB = applications.find((a) => a.id === compareIdB) || applications[1] || applications[0];

  const exportToCSV = () => {
    const headers = [
      'Application ID',
      'Submitted At',
      'Status',
      'Full Name',
      'Email',
      'Phone',
      'University',
      'Year of Study',
      'Programme',
      'GPA/Class',
      'Total Score',
      'Moot Experience',
      'Why Indahiro',
      'Legal Problem',
      'Case Memorandum',
      'Referee Name',
      'Referee Email',
      'Referee Phone',
    ];

    const rows = applications.map((app) => [
      `"${app.id}"`,
      `"${app.submittedAt}"`,
      `"${app.status}"`,
      `"${(app.personal?.fullName || '').replace(/"/g, '""')}"`,
      `"${(app.personal?.email || '').replace(/"/g, '""')}"`,
      `"${(app.personal?.phone || '').replace(/"/g, '""')}"`,
      `"${(app.personal?.university || '').replace(/"/g, '""')}"`,
      `"${(app.personal?.yearOfStudy || '').replace(/"/g, '""')}"`,
      `"${(app.academic?.programme || '').replace(/"/g, '""')}"`,
      `"${(app.academic?.gpaOrClass || '').replace(/"/g, '""')}"`,
      `"${getAppTotal(app)}"`,
      `"${(app.experience?.mootCourt || '').replace(/"/g, '""')}"`,
      `"${(app.motivation?.whyIndahiro || '').replace(/"/g, '""')}"`,
      `"${(app.motivation?.legalProblemCareAbout || '').replace(/"/g, '""')}"`,
      `"${(app.practicalAssessment?.answer || '').replace(/"/g, '""')}"`,
      `"${(app.references?.refereeName || '').replace(/"/g, '""')}"`,
      `"${(app.references?.refereeEmail || '').replace(/"/g, '""')}"`,
      `"${(app.references?.refereePhone || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `indahiro_cohort1_applicants_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(applications, null, 2));
    const link = document.createElement('a');
    link.setAttribute('href', dataStr);
    link.setAttribute('download', `indahiro_applications_dossier_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const forwardCandidateToEmail = (app: ApplicationSubmission) => {
    const subject = encodeURIComponent(`[Indahiro Candidate Dossier] ${app.personal.fullName} (${app.id})`);
    const body = encodeURIComponent(
      `INDAHIRO FELLOWSHIP CANDIDATE DOSSIER\n` +
      `ID: ${app.id}\n` +
      `Name: ${app.personal.fullName}\n` +
      `University: ${app.personal.university} (${app.personal.yearOfStudy})\n` +
      `Email: ${app.personal.email} | Phone: ${app.personal.phone}\n` +
      `Status: ${app.status.toUpperCase()}\n` +
      `GPA / Class: ${app.academic.gpaOrClass}\n` +
      `Total Rubric Score: ${getAppTotal(app)} / 100\n\n` +
      `-- SCORES BREAKDOWN --\n` +
      `Analytical Reasoning: ${app.scores.analyticalReasoning}/25\n` +
      `Advocacy Potential: ${app.scores.advocacyPotential}/25\n` +
      `Integrity & Ethics: ${app.scores.publicServiceIntegrity}/20\n` +
      `Commitment: ${app.scores.commitmentDiscipline}/15\n` +
      `Practical Score: ${app.scores.practicalScore}/15\n\n` +
      `-- MOTIVATION --\n` +
      `Why Indahiro:\n${app.motivation.whyIndahiro}\n\n` +
      `Specific Legal Problem in Rwanda:\n${app.motivation.legalProblemCareAbout}\n\n` +
      `-- PRACTICAL CASE MEMORANDUM --\n` +
      `${app.practicalAssessment.answer}\n\n` +
      `-- REFEREE --\n` +
      `${app.references.refereeName} (${app.references.refereeInstitution}) - ${app.references.refereeEmail} / ${app.references.refereePhone}\n`
    );
    window.location.href = `mailto:${OFFICIAL_INBOX_EMAIL}?subject=${subject}&body=${body}`;
  };

  // If not authenticated, require institutional committee login
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xs">
        <div className="bg-[#FAF8F5] w-full max-w-md rounded-2xl border border-[#D5CEC0] shadow-2xl overflow-hidden relative flex flex-col">
          
          {/* Top Header */}
          <div className="p-5 sm:p-6 bg-[#0B0D11] text-white flex items-center justify-between border-b border-stone-800">
            <div className="flex items-center space-x-3">
              <Logo variant="dark" mode="mark" size="md" />
              <div>
                <span className="text-[10px] font-mono text-[#F7D875] uppercase tracking-widest block">
                  Restricted Admissions Console
                </span>
                <h3 className="text-lg font-serif font-bold text-white">
                  Selection Committee Login
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Close portal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-8 space-y-5 text-stone-800">
            <div className="flex items-start space-x-3 p-3.5 bg-[#F2EDE2] rounded-lg border border-[#DDD5C5] text-xs">
              <Shield className="w-4 h-4 text-[#8F6E15] mt-0.5 shrink-0" />
              <p className="text-stone-700 leading-relaxed font-light">
                This portal contains confidential student application dossiers, legal reasoning memorandums, referee contact records, and standardized scoring rubrics. Only authorized selection jurists may enter.
              </p>
            </div>

            {authError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-center space-x-2 animate-in fade-in duration-200">
                <span className="font-bold">Error:</span>
                <span>{authError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Committee Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="indahirofellowship@gmail.com"
                    value={emailInput}
                    onChange={(e) => {
                      setEmailInput(e.target.value);
                      setAuthError('');
                    }}
                    className="w-full pl-9 pr-3 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Security Passcode *
                </label>
                <div className="relative">
                  <KeyRound className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter committee password..."
                    value={passwordInput}
                    onChange={(e) => {
                      setPasswordInput(e.target.value);
                      setAuthError('');
                    }}
                    className="w-full pl-9 pr-10 py-2 bg-white border border-[#D5CEC0] rounded text-xs focus:border-[#0B1320] focus:outline-none font-mono tracking-wider"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#0B0D11] bg-gradient-to-r from-[#F7D875] via-[#E2B742] to-[#D5A52A] hover:brightness-105 rounded shadow-sm flex items-center justify-center space-x-2 cursor-pointer transition-all mt-2"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Unlock Selection Console</span>
              </button>
            </form>

            <div className="pt-2 text-center text-[11px] text-stone-500 font-mono">
              <span>Secretariat Inquiries: </span>
              <a href="mailto:indahirofellowship@gmail.com" className="text-stone-700 hover:underline font-semibold">
                indahirofellowship@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-xs">
      <div className="bg-[#FAF8F5] w-full max-w-6xl rounded-xl border border-[#D5CEC0] shadow-2xl overflow-hidden relative max-h-[94vh] flex flex-col">
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-[#0B0D11] text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center space-x-3">
            <Logo variant="dark" mode="mark" size="md" />
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono text-[#F7D875] uppercase tracking-widest block">
                  Official Selection Committee Panel · Cohort I (2026/2027)
                </span>
                <span className="text-[9px] font-mono text-emerald-300 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800 hidden sm:inline">
                  Inbox: {OFFICIAL_INBOX_EMAIL}
                </span>
              </div>
              <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                <span>Indahiro Admissions & Scoring Console</span>
                <span className="text-xs font-mono font-normal text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  Standardized Rubric Active
                </span>
              </h3>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Export Buttons */}
            <div className="hidden lg:flex items-center space-x-1.5 bg-[#142032] p-1 rounded-lg border border-stone-800 text-[11px]">
              <button
                onClick={exportToCSV}
                className="px-2.5 py-1 text-stone-300 hover:text-white hover:bg-stone-800 rounded transition-colors flex items-center gap-1 cursor-pointer"
                title="Download CSV spreadsheet of all submitted applications"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                <span>Export CSV</span>
              </button>
              <button
                onClick={exportToJSON}
                className="px-2.5 py-1 text-stone-300 hover:text-white hover:bg-stone-800 rounded transition-colors flex items-center gap-1 cursor-pointer"
                title="Download JSON dossier"
              >
                <Download className="w-3.5 h-3.5 text-sky-400" />
                <span>JSON</span>
              </button>
            </div>

            {/* View switcher tabs */}
            <div className="hidden sm:flex items-center p-1 bg-[#142032] rounded-lg text-xs font-medium border border-stone-800">
              <button
                onClick={() => setActiveTab('applications')}
                className={`px-3 py-1.5 rounded transition-colors ${
                  activeTab === 'applications'
                    ? 'bg-[#C59B27] text-[#0B1320] font-semibold'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                Candidate Review
              </button>
              <button
                onClick={() => setActiveTab('compare')}
                className={`px-3 py-1.5 rounded transition-colors ${
                  activeTab === 'compare'
                    ? 'bg-[#C59B27] text-[#0B1320] font-semibold'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                Compare Candidates
              </button>
              <button
                onClick={() => setActiveTab('ranking')}
                className={`px-3 py-1.5 rounded transition-colors ${
                  activeTab === 'ranking'
                    ? 'bg-[#C59B27] text-[#0B1320] font-semibold'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                Rankings & Top 10 Cutoff
              </button>
              <button
                onClick={() => setActiveTab('suggestions')}
                className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
                  activeTab === 'suggestions'
                    ? 'bg-[#C59B27] text-[#0B1320] font-semibold'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                <MessageSquareText className="w-3.5 h-3.5" />
                <span>Suggestions ({suggestions.length})</span>
              </button>
            </div>

            {/* Lock / Sign Out Button */}
            <button
              onClick={handleSignOut}
              className="px-2.5 py-1.5 text-xs text-stone-300 hover:text-white hover:bg-stone-800 rounded transition-colors flex items-center gap-1 cursor-pointer border border-stone-700/60"
              title="Lock Selection Committee Portal"
            >
              <LogOut className="w-3.5 h-3.5 text-red-400" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile View Switcher */}
        <div className="sm:hidden flex p-1.5 bg-[#142032] text-xs font-medium border-b border-stone-800 overflow-x-auto gap-1">
          <button
            onClick={() => setActiveTab('applications')}
            className={`flex-1 py-1.5 px-2 text-center rounded whitespace-nowrap ${activeTab === 'applications' ? 'bg-[#C59B27] text-[#0B1320] font-bold' : 'text-stone-300'}`}
          >
            Review
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`flex-1 py-1.5 px-2 text-center rounded whitespace-nowrap ${activeTab === 'compare' ? 'bg-[#C59B27] text-[#0B1320] font-bold' : 'text-stone-300'}`}
          >
            Compare
          </button>
          <button
            onClick={() => setActiveTab('ranking')}
            className={`flex-1 py-1.5 px-2 text-center rounded whitespace-nowrap ${activeTab === 'ranking' ? 'bg-[#C59B27] text-[#0B1320] font-bold' : 'text-stone-300'}`}
          >
            Top 10
          </button>
          <button
            onClick={() => setActiveTab('suggestions')}
            className={`flex-1 py-1.5 px-2 text-center rounded whitespace-nowrap ${activeTab === 'suggestions' ? 'bg-[#C59B27] text-[#0B1320] font-bold' : 'text-stone-300'}`}
          >
            Ideas ({suggestions.length})
          </button>
          <button
            onClick={exportToCSV}
            className="py-1.5 px-2 text-center rounded whitespace-nowrap text-stone-300 bg-stone-800 flex items-center gap-1 cursor-pointer"
          >
            <Download className="w-3 h-3 text-emerald-400" />
            <span>CSV</span>
          </button>
        </div>

        {/* Tab 1: Candidate Review View */}
        {activeTab === 'applications' && (
          <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column (4 cols): Filter & Applicant List */}
            <div className="lg:col-span-4 border-r border-[#D5CEC0] bg-[#F5F2EB] flex flex-col h-full overflow-hidden">
              
              {/* Search & Filters */}
              <div className="p-3 border-b border-[#D5CEC0] space-y-2 bg-white">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search candidate or ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-2 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded focus:outline-none"
                  />
                </div>

                <div className="flex gap-2">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="flex-1 py-1 px-2 text-[11px] bg-stone-50 border border-stone-300 rounded text-stone-700"
                  >
                    <option value="All">All Statuses</option>
                    <option value="submitted">Submitted</option>
                    <option value="under_review">Under Review</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="interviewed">Interviewed</option>
                    <option value="selected">Selected</option>
                  </select>

                  <select
                    value={uniFilter}
                    onChange={(e) => setUniFilter(e.target.value)}
                    className="flex-1 py-1 px-2 text-[11px] bg-stone-50 border border-stone-300 rounded text-stone-700"
                  >
                    <option value="All">All Universities</option>
                    <option value="University of Rwanda">UR</option>
                    <option value="University of Kigali">UoK</option>
                    <option value="Mount Kigali">MKU</option>
                    <option value="ULK">ULK</option>
                    <option value="UNILAK">UNILAK</option>
                    <option value="INES">INES</option>
                  </select>
                </div>
              </div>

              {/* Applicant List Scroll */}
              <div className="flex-1 overflow-y-auto divide-y divide-[#E2DDD3]">
                {filteredApps.length === 0 ? (
                  <div className="p-8 text-center text-xs text-stone-500">
                    No candidates match the specified filter criteria.
                  </div>
                ) : (
                  filteredApps.map((app) => {
                    const isSelected = app.id === selectedAppId;
                    const totalScore = getAppTotal(app);
                    return (
                      <div
                        key={app.id}
                        onClick={() => setSelectedAppId(app.id)}
                        className={`p-3.5 cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-[#0B1320] text-white shadow-xs'
                            : 'hover:bg-stone-200/60 text-stone-900 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className={`text-[10px] font-mono font-bold ${
                              isSelected ? 'text-[#E8C568]' : 'text-[#8F6E15]'
                            }`}
                          >
                            {app.id}
                          </span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded capitalize ${
                              app.status === 'shortlisted' || app.status === 'selected'
                                ? 'bg-emerald-100 text-emerald-800'
                                : app.status === 'under_review'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-stone-200 text-stone-700'
                            }`}
                          >
                            {app.status.replace('_', ' ')}
                          </span>
                        </div>

                        <h5 className="font-serif font-bold text-sm truncate">
                          {app.personal.fullName}
                        </h5>

                        <div className="flex items-center justify-between mt-1 text-[11px] opacity-80">
                          <span className="truncate max-w-[170px]">
                            {app.personal.university.split('(')[0]}
                          </span>
                          <span className="font-mono font-bold text-xs">
                            Score: {totalScore}/100
                          </span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Right Column (8 cols): Applicant Detail & Scoring Console */}
            {currentApp ? (
              <div className="lg:col-span-8 flex flex-col h-full overflow-y-auto p-6 space-y-6">
                
                {/* Candidate Overview Card */}
                <div className="bg-white p-5 rounded-lg border border-[#D5CEC0] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center space-x-2 text-[11px] text-[#8F6E15] font-mono mb-1">
                      <span>{currentApp.id}</span>
                      <span>·</span>
                      <span>{currentApp.personal.yearOfStudy}</span>
                      <span>·</span>
                      <span>{currentApp.academic.gpaOrClass}</span>
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-[#0B1320]">
                      {currentApp.personal.fullName}
                    </h4>
                    <p className="text-xs text-stone-600">
                      {currentApp.personal.university} · {currentApp.personal.email} · {currentApp.personal.phone}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => forwardCandidateToEmail(currentApp)}
                      className="px-3 py-1.5 text-xs font-semibold text-[#0B1320] bg-[#F7D875] hover:bg-[#E2B742] rounded shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                      title="Send this candidate's full profile & rubric to indahirofellowship@gmail.com"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email to Admissions Desk</span>
                    </button>

                    <div className="flex items-center space-x-1.5">
                      <span className="text-xs text-stone-500">Status:</span>
                      <select
                        value={currentApp.status}
                        onChange={(e) => handleStatusChange(e.target.value as ApplicationStatus)}
                        className="px-3 py-1.5 text-xs font-semibold bg-white border border-stone-300 rounded shadow-xs focus:outline-none"
                      >
                        <option value="submitted">Submitted</option>
                        <option value="under_review">Under Review</option>
                        <option value="shortlisted">Shortlisted</option>
                        <option value="interviewed">Interviewed</option>
                        <option value="selected">Selected for Cohort I</option>
                        <option value="declined">Declined</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Standardized Scoring Console Slider */}
                <div className="bg-[#0B1320] text-white p-6 rounded-xl border border-stone-800 shadow-md space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                    <div className="flex items-center space-x-2">
                      <Sliders className="w-4 h-4 text-[#C59B27]" />
                      <h5 className="font-serif font-bold text-white text-base">
                        Standardized Rubric Scoring System
                      </h5>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-stone-400 font-mono block">COMPOSITE SCORE</span>
                      <span className="text-xl font-mono font-bold text-[#E8C568]">
                        {getAppTotal(currentApp)} / 100
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    
                    {/* Dimension 1: Analytical Reasoning */}
                    <div className="bg-[#111C2E] p-3 rounded border border-stone-800">
                      <div className="flex justify-between mb-1">
                        <span className="text-stone-300 font-medium">1. Analytical Reasoning</span>
                        <span className="font-mono text-[#E8C568]">{currentApp.scores.analyticalReasoning} / 25</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={25}
                        value={currentApp.scores.analyticalReasoning}
                        onChange={(e) => handleScoreChange('analyticalReasoning', Number(e.target.value))}
                        className="w-full accent-[#C59B27]"
                      />
                    </div>

                    {/* Dimension 2: Advocacy & Moot Potential */}
                    <div className="bg-[#111C2E] p-3 rounded border border-stone-800">
                      <div className="flex justify-between mb-1">
                        <span className="text-stone-300 font-medium">2. Advocacy & Moot Potential</span>
                        <span className="font-mono text-[#E8C568]">{currentApp.scores.advocacyPotential} / 25</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={25}
                        value={currentApp.scores.advocacyPotential}
                        onChange={(e) => handleScoreChange('advocacyPotential', Number(e.target.value))}
                        className="w-full accent-[#C59B27]"
                      />
                    </div>

                    {/* Dimension 3: Public Service Integrity */}
                    <div className="bg-[#111C2E] p-3 rounded border border-stone-800">
                      <div className="flex justify-between mb-1">
                        <span className="text-stone-300 font-medium">3. Public Service & Integrity</span>
                        <span className="font-mono text-[#E8C568]">{currentApp.scores.publicServiceIntegrity} / 20</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={20}
                        value={currentApp.scores.publicServiceIntegrity}
                        onChange={(e) => handleScoreChange('publicServiceIntegrity', Number(e.target.value))}
                        className="w-full accent-[#C59B27]"
                      />
                    </div>

                    {/* Dimension 4: Commitment & Discipline */}
                    <div className="bg-[#111C2E] p-3 rounded border border-stone-800">
                      <div className="flex justify-between mb-1">
                        <span className="text-stone-300 font-medium">4. Commitment & Discipline</span>
                        <span className="font-mono text-[#E8C568]">{currentApp.scores.commitmentDiscipline} / 15</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={15}
                        value={currentApp.scores.commitmentDiscipline}
                        onChange={(e) => handleScoreChange('commitmentDiscipline', Number(e.target.value))}
                        className="w-full accent-[#C59B27]"
                      />
                    </div>

                    {/* Dimension 5: Practical Case Assessment */}
                    <div className="sm:col-span-2 bg-[#111C2E] p-3 rounded border border-stone-800">
                      <div className="flex justify-between mb-1">
                        <span className="text-stone-300 font-medium">5. Practical Legal Reasoning Memo Assessment</span>
                        <span className="font-mono text-[#E8C568]">{currentApp.scores.practicalScore} / 15</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={15}
                        value={currentApp.scores.practicalScore}
                        onChange={(e) => handleScoreChange('practicalScore', Number(e.target.value))}
                        className="w-full accent-[#C59B27]"
                      />
                    </div>

                  </div>

                  {/* Interview Slot and Score Recording */}
                  <div className="pt-3 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-[#C59B27]" />
                      <span>Interview Slot:</span>
                      <input
                        type="datetime-local"
                        value={currentApp.interviewSlot ? currentApp.interviewSlot.slice(0, 16) : ''}
                        onChange={(e) => handleAssignInterview(e.target.value)}
                        className="px-2 py-1 bg-stone-900 border border-stone-700 rounded text-stone-200 text-xs"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <span>Interview Score (0–100):</span>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        placeholder="e.g. 90"
                        value={currentApp.interviewScore !== undefined ? currentApp.interviewScore : ''}
                        onChange={(e) =>
                          handleAssignInterview(
                            currentApp.interviewSlot || new Date().toISOString(),
                            e.target.value ? Number(e.target.value) : undefined
                          )
                        }
                        className="w-20 px-2 py-1 bg-stone-900 border border-stone-700 rounded text-stone-200 text-xs font-mono font-bold"
                      />
                    </div>
                  </div>
                </div>

                {/* Candidate Practical Assessment Memo */}
                <div className="bg-white p-5 rounded-lg border border-[#D5CEC0]">
                  <div className="flex items-center justify-between border-b border-stone-200 pb-2 mb-3">
                    <h5 className="font-serif font-bold text-base text-[#0B1320]">
                      Candidate Practical Memorandum (AgriTech Case)
                    </h5>
                    <span className="text-[11px] font-mono text-stone-500">
                      {currentApp.practicalAssessment.wordCount} Words
                    </span>
                  </div>
                  <div className="p-4 bg-[#FBF9F5] rounded border border-stone-200 text-xs font-mono whitespace-pre-wrap leading-relaxed text-stone-800 max-h-56 overflow-y-auto">
                    {currentApp.practicalAssessment.answer || 'No practical memorandum provided.'}
                  </div>
                </div>

                {/* Motivation & Background Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="bg-white p-4 rounded-lg border border-[#D5CEC0] space-y-2">
                    <h6 className="font-bold text-[#0B1320] uppercase text-[11px]">
                      Why Indahiro?
                    </h6>
                    <p className="text-stone-700 leading-relaxed font-light">
                      {currentApp.motivation.whyIndahiro}
                    </p>
                    <h6 className="font-bold text-[#0B1320] uppercase text-[11px] pt-2 border-t border-stone-100">
                      Legal Problem They Care About
                    </h6>
                    <p className="text-stone-700 leading-relaxed font-light">
                      {currentApp.motivation.legalProblemCareAbout}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-[#D5CEC0] space-y-2">
                    <h6 className="font-bold text-[#0B1320] uppercase text-[11px]">
                      Moot Court & Advocacy Track Record
                    </h6>
                    <p className="text-stone-700 leading-relaxed font-light">
                      {currentApp.experience.mootCourt}
                    </p>
                    <h6 className="font-bold text-[#0B1320] uppercase text-[11px] pt-2 border-t border-stone-100">
                      Academic Referee
                    </h6>
                    <p className="text-stone-700 leading-relaxed font-light">
                      <strong>{currentApp.references.refereeName}</strong> ({currentApp.references.refereeTitle}, {currentApp.references.refereeInstitution}) · {currentApp.references.relationship}
                    </p>
                  </div>
                </div>

                {/* Committee Remarks & Comments */}
                <div className="bg-white p-5 rounded-lg border border-[#D5CEC0] space-y-3">
                  <h5 className="font-serif font-bold text-base text-[#0B1320] flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#8F6E15]" />
                    <span>Selection Committee Deliberation Notes</span>
                  </h5>

                  <div className="space-y-2">
                    {currentApp.committeeNotes?.map((note, i) => (
                      <div key={i} className="p-2.5 bg-stone-50 rounded border border-stone-200 text-xs text-stone-700">
                        {note}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleAddComment} className="flex gap-2 pt-2">
                    <input
                      type="text"
                      placeholder="Add selector observation or recommendation..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="flex-1 px-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-1.5 text-xs font-semibold bg-[#0B1320] text-white rounded hover:bg-stone-800 transition-colors cursor-pointer"
                    >
                      Record Note
                    </button>
                  </form>
                </div>

              </div>
            ) : (
              <div className="lg:col-span-8 flex items-center justify-center p-12 text-stone-500 text-xs">
                Select an applicant from the left to view and score.
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Compare Candidates Mode */}
        {activeTab === 'compare' && (
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-300 pb-4">
              <div>
                <h4 className="text-xl font-serif font-bold text-[#0B1320]">
                  Side-by-Side Candidate Comparison
                </h4>
                <p className="text-xs text-stone-600">
                  Direct comparative evaluation across standardized rubric scores, academic standing, moot background, and practical legal writing.
                </p>
              </div>

              {/* Selector Dropdowns */}
              <div className="flex items-center space-x-3 text-xs">
                <div>
                  <span className="block text-[10px] text-stone-500 font-semibold mb-1">Candidate A</span>
                  <select
                    value={compareIdA}
                    onChange={(e) => setCompareIdA(e.target.value)}
                    className="px-2.5 py-1.5 bg-white border border-stone-300 rounded text-xs"
                  >
                    {applications.map((app) => (
                      <option key={app.id} value={app.id}>
                        {app.personal.fullName} ({app.id})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <span className="block text-[10px] text-stone-500 font-semibold mb-1">Candidate B</span>
                  <select
                    value={compareIdB}
                    onChange={(e) => setCompareIdB(e.target.value)}
                    className="px-2.5 py-1.5 bg-white border border-stone-300 rounded text-xs"
                  >
                    {applications.map((app) => (
                      <option key={app.id} value={app.id}>
                        {app.personal.fullName} ({app.id})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              
              {/* Candidate A Card */}
              <div className="bg-white p-6 rounded-xl border border-[#D5CEC0] shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-3">
                    <div>
                      <span className="text-[10px] font-mono text-[#8F6E15] uppercase font-bold">{compareAppA.id}</span>
                      <h5 className="text-xl font-serif font-bold text-[#0B1320]">{compareAppA.personal.fullName}</h5>
                      <p className="text-xs text-stone-600">{compareAppA.personal.university}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-stone-500 block">TOTAL SCORE</span>
                      <span className="text-2xl font-mono font-bold text-[#8F6E15]">{getAppTotal(compareAppA)}/100</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-stone-50 rounded border border-stone-200">
                      <span className="font-semibold text-stone-800 block mb-1">Rubric Breakdown:</span>
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-600 font-mono">
                        <div>Analytical: {compareAppA.scores.analyticalReasoning}/25</div>
                        <div>Advocacy: {compareAppA.scores.advocacyPotential}/25</div>
                        <div>Integrity: {compareAppA.scores.publicServiceIntegrity}/20</div>
                        <div>Discipline: {compareAppA.scores.commitmentDiscipline}/15</div>
                        <div>Practical Memo: {compareAppA.scores.practicalScore}/15</div>
                        <div>Interview: {compareAppA.interviewScore ?? 'N/A'}/100</div>
                      </div>
                    </div>

                    <div>
                      <span className="font-semibold text-stone-800 block text-[11px] uppercase">Academic Standing & Honors:</span>
                      <p className="text-stone-600">{compareAppA.academic.gpaOrClass} · {compareAppA.academic.honors || 'No honors specified'}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-stone-800 block text-[11px] uppercase">Moot Court Experience:</span>
                      <p className="text-stone-600 leading-relaxed">{compareAppA.experience.mootCourt}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-stone-800 block text-[11px] uppercase">Practical Memo Excerpt:</span>
                      <p className="text-stone-600 italic bg-[#FAF8F5] p-2.5 rounded border border-stone-200 line-clamp-4">
                        &ldquo;{compareAppA.practicalAssessment.answer}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                  <span className="capitalize font-medium text-stone-700">Status: {compareAppA.status}</span>
                  <button
                    onClick={() => {
                      setSelectedAppId(compareAppA.id);
                      setActiveTab('applications');
                    }}
                    className="text-xs font-semibold text-[#8F6E15] hover:underline"
                  >
                    Open in Full Review →
                  </button>
                </div>
              </div>

              {/* Candidate B Card */}
              <div className="bg-white p-6 rounded-xl border border-[#D5CEC0] shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-3">
                    <div>
                      <span className="text-[10px] font-mono text-[#8F6E15] uppercase font-bold">{compareAppB.id}</span>
                      <h5 className="text-xl font-serif font-bold text-[#0B1320]">{compareAppB.personal.fullName}</h5>
                      <p className="text-xs text-stone-600">{compareAppB.personal.university}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-stone-500 block">TOTAL SCORE</span>
                      <span className="text-2xl font-mono font-bold text-[#8F6E15]">{getAppTotal(compareAppB)}/100</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-stone-50 rounded border border-stone-200">
                      <span className="font-semibold text-stone-800 block mb-1">Rubric Breakdown:</span>
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-600 font-mono">
                        <div>Analytical: {compareAppB.scores.analyticalReasoning}/25</div>
                        <div>Advocacy: {compareAppB.scores.advocacyPotential}/25</div>
                        <div>Integrity: {compareAppB.scores.publicServiceIntegrity}/20</div>
                        <div>Discipline: {compareAppB.scores.commitmentDiscipline}/15</div>
                        <div>Practical Memo: {compareAppB.scores.practicalScore}/15</div>
                        <div>Interview: {compareAppB.interviewScore ?? 'N/A'}/100</div>
                      </div>
                    </div>

                    <div>
                      <span className="font-semibold text-stone-800 block text-[11px] uppercase">Academic Standing & Honors:</span>
                      <p className="text-stone-600">{compareAppB.academic.gpaOrClass} · {compareAppB.academic.honors || 'No honors specified'}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-stone-800 block text-[11px] uppercase">Moot Court Experience:</span>
                      <p className="text-stone-600 leading-relaxed">{compareAppB.experience.mootCourt}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-stone-800 block text-[11px] uppercase">Practical Memo Excerpt:</span>
                      <p className="text-stone-600 italic bg-[#FAF8F5] p-2.5 rounded border border-stone-200 line-clamp-4">
                        &ldquo;{compareAppB.practicalAssessment.answer}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                  <span className="capitalize font-medium text-stone-700">Status: {compareAppB.status}</span>
                  <button
                    onClick={() => {
                      setSelectedAppId(compareAppB.id);
                      setActiveTab('applications');
                    }}
                    className="text-xs font-semibold text-[#8F6E15] hover:underline"
                  >
                    Open in Full Review →
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Rankings & Top 10 Cutoff View */}
        {activeTab === 'ranking' && (
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-300 pb-4">
              <div>
                <h4 className="text-xl font-serif font-bold text-[#0B1320]">
                  Official National Ranking & Top 10 Cohort Cutoff
                </h4>
                <p className="text-xs text-stone-600">
                  Composite standings calculated from standardized rubric dimensions and oral interview panel scores.
                </p>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono text-[#8F6E15] font-bold bg-[#EAE5DA] px-3 py-1.5 rounded border border-[#D5CEC0]">
                  COHORT CAPACITY: 10 FELLOWS
                </span>
              </div>
            </div>

            {/* Ranking Table */}
            <div className="bg-white rounded-lg border border-[#D5CEC0] overflow-hidden shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#0B1320] text-stone-200 uppercase font-mono text-[10px] tracking-wider">
                    <th className="py-3 px-4">Rank</th>
                    <th className="py-3 px-4">Candidate</th>
                    <th className="py-3 px-4">University</th>
                    <th className="py-3 px-4 text-center">Written (60)</th>
                    <th className="py-3 px-4 text-center">Interview (40)</th>
                    <th className="py-3 px-4 text-center font-bold text-[#E8C568]">Total (100)</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {rankedApps.map((app, index) => {
                    const rank = index + 1;
                    const isWithinTop10 = rank <= 10;
                    const total = getAppTotal(app);
                    return (
                      <React.Fragment key={app.id}>
                        {rank === 11 && (
                          <tr className="bg-amber-100/70 border-y-2 border-amber-500">
                            <td colSpan={8} className="py-2.5 px-4 text-center text-xs font-mono font-bold text-amber-950 uppercase tracking-widest">
                              ——— STRICT INAUGURAL COHORT I CUTOFF THRESHOLD (10 FELLOWS) ———
                            </td>
                          </tr>
                        )}
                        <tr
                          className={`hover:bg-stone-50 transition-colors ${
                            isWithinTop10 ? 'bg-emerald-50/20' : ''
                          }`}
                        >
                          <td className="py-3 px-4 font-mono font-bold">
                            <span
                              className={`w-6 h-6 rounded-full inline-flex items-center justify-center text-xs ${
                                isWithinTop10
                                  ? 'bg-[#C59B27] text-[#0B1320] font-bold'
                                  : 'bg-stone-200 text-stone-600'
                              }`}
                            >
                              {rank}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-serif font-bold text-stone-900 text-sm">
                            {app.personal.fullName}
                            <span className="block font-mono text-[10px] text-stone-500 font-normal">
                              {app.id}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-stone-600">
                            {app.personal.university.split('(')[0]}
                          </td>
                          <td className="py-3 px-4 text-center font-mono font-medium">
                            {(app.scores.analyticalReasoning || 0) +
                              (app.scores.advocacyPotential || 0) +
                              (app.scores.publicServiceIntegrity || 0) +
                              (app.scores.commitmentDiscipline || 0) +
                              (app.scores.practicalScore || 0)}
                          </td>
                          <td className="py-3 px-4 text-center font-mono">
                            {app.interviewScore !== undefined ? app.interviewScore : '—'}
                          </td>
                          <td className="py-3 px-4 text-center font-mono font-bold text-sm text-[#0B1320]">
                            {total}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-mono capitalize ${
                                app.status === 'selected'
                                  ? 'bg-emerald-100 text-emerald-800 font-bold'
                                  : app.status === 'shortlisted'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-stone-100 text-stone-700'
                              }`}
                            >
                              {app.status.replace('_', ' ')}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              onClick={() => {
                                setSelectedAppId(app.id);
                                setActiveTab('applications');
                              }}
                              className="text-xs font-semibold text-[#8F6E15] hover:text-[#0B1320]"
                            >
                              Review →
                            </button>
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Suggestion Box Entries */}
        {activeTab === 'suggestions' && (
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#FAF8F5]">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-[#D5CEC0] shadow-xs">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8F6E15] font-semibold">
                      Public Submissions & Feedback
                    </span>
                    <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                      Linked to: {OFFICIAL_INBOX_EMAIL}
                    </span>
                  </div>
                  <h4 className="text-xl font-serif font-bold text-[#0B1320] mt-1">
                    Community Suggestion Box Repository
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Feedback, curriculum proposals, and jurist recommendations submitted by law students, advocates, and citizens.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${OFFICIAL_INBOX_EMAIL}?subject=Indahiro%20Secretariat%20Inbox`}
                    className="px-3.5 py-2 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 rounded border border-stone-300 flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#8F6E15]" />
                    <span>Open {OFFICIAL_INBOX_EMAIL}</span>
                  </a>
                </div>
              </div>

              {suggestions.length === 0 ? (
                <div className="p-12 text-center bg-white rounded-xl border border-[#D5CEC0] space-y-3">
                  <Inbox className="w-12 h-12 text-stone-300 mx-auto" />
                  <h5 className="font-serif font-bold text-base text-stone-700">No Suggestions Submitted Yet</h5>
                  <p className="text-xs text-stone-500 max-w-md mx-auto">
                    When visitors or candidates submit recommendations via the Suggestion Box modal, they will be delivered to {OFFICIAL_INBOX_EMAIL} and archived here.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {suggestions.map((sug) => (
                    <div
                      key={sug.id}
                      className="bg-white p-5 rounded-xl border border-[#D5CEC0] shadow-xs space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-200 pb-3 gap-2">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-mono font-bold text-[#8F6E15] bg-[#F7D875]/20 px-2 py-0.5 rounded">
                              {sug.id}
                            </span>
                            <span className="text-xs font-semibold text-[#0B1320] bg-stone-100 px-2 py-0.5 rounded">
                              {sug.category}
                            </span>
                            <span className="text-[11px] text-stone-500 font-mono">
                              {sug.affiliation}
                            </span>
                          </div>
                          <h5 className="font-serif font-bold text-base text-[#0B1320] mt-1.5">
                            {sug.subject}
                          </h5>
                        </div>
                        <div className="text-right text-[11px] text-stone-500 font-mono">
                          {new Date(sug.submittedAt).toLocaleString()}
                        </div>
                      </div>

                      <p className="text-xs text-stone-700 leading-relaxed whitespace-pre-wrap font-light">
                        {sug.message}
                      </p>

                      <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-stone-600 gap-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-stone-800">
                            {sug.isAnonymous ? 'Anonymous Contributor' : sug.name}
                          </span>
                          {!sug.isAnonymous && sug.email && (
                            <>
                              <span className="text-stone-400">·</span>
                              <a
                                href={`mailto:${sug.email}?subject=RE: Indahiro Suggestion [${sug.id}]`}
                                className="text-[#8F6E15] hover:underline font-mono"
                              >
                                {sug.email}
                              </a>
                            </>
                          )}
                          {!sug.isAnonymous && sug.phone && (
                            <>
                              <span className="text-stone-400">·</span>
                              <span className="font-mono">{sug.phone}</span>
                            </>
                          )}
                        </div>

                        {!sug.isAnonymous && sug.email && (
                          <a
                            href={`mailto:${sug.email}?subject=RE: Indahiro Suggestion [${sug.id}]: ${encodeURIComponent(sug.subject)}`}
                            className="text-xs font-medium text-[#8F6E15] hover:text-[#0B1320] flex items-center gap-1"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Reply to Contributor</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
