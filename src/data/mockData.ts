import {
  Fellow,
  Mentor,
  Partner,
  ApplicationSubmission,
  JournalArticle,
  CompetencyStandard,
} from '../types';

export const COMPETENCY_STANDARDS: CompetencyStandard[] = [
  {
    id: 'comp-1',
    capability: 'Research a legal problem independently',
    rationale:
      'A fellow does not wait for a supervisor to curate authorities. They can navigate Rwandan primary legislation, the Official Gazette, regional East African Community (EAC) jurisprudence, and comparative common/civil law precedents to synthesize cogent solutions.',
    indicators: [
      'Mastery of the Rwanda Official Gazette and judiciary digital repositories',
      'Systematic identification of conflicting provisions and statutory hierarchy',
      'Rapid contextualization of emerging legal issues in commerce, tech, and land rights',
    ],
    practiceBenchmark:
      'Capable of delivering a 10-page verified legal memorandum within 48 hours of an uncurated brief.',
  },
  {
    id: 'comp-2',
    capability: 'Write a professional legal argument',
    rationale:
      'Legal writing in practice is disciplined, concise, and persuasive. An Indahiro Fellow rejects dense academic circumlocution in favor of crisp, structured advocacy.',
    indicators: [
      'Strict adherence to IRAC/CRAC analytical architecture',
      'Drafting flawless pleadings, skeleton arguments, and memorial submissions',
      'Clarity of prose that aids judicial economy without sacrificing legal nuance',
    ],
    practiceBenchmark:
      'Pleadings require zero structural revision prior to filing before Rwandan High Courts or arbitration panels.',
  },
  {
    id: 'comp-3',
    capability: 'Defend an argument orally',
    rationale:
      'Oral advocacy is a dialogue with the bench, not a recited speech. Fellows learn to read judicial skepticism, concede untenable positions with grace, and pivot swiftly to winning arguments.',
    indicators: [
      'Direct, respectful responsiveness to judicial interjections',
      'Modular time management under stringent moot court and courtroom limits',
      'Poise, pitch modulation, and uncompromising clarity under aggressive questioning',
    ],
    practiceBenchmark:
      'Capable of sustaining a 20-minute adversarial bench interrogation without departing from core propositions.',
  },
  {
    id: 'comp-4',
    capability: 'Think critically under pressure',
    rationale:
      'Courtrooms and negotiation tables are unpredictable. Fellows develop the intellectual resilience to recalibrate legal theories when unexpected evidence or adverse precedents surface.',
    indicators: [
      'Instantaneous spot-analysis of opposing counsel submissions',
      'Separating factual noise from dispositive legal issues',
      'Stress inoculation acquired through timed simulations and bench interrogations',
    ],
    practiceBenchmark:
      'Formulates valid counter-arguments and statutory rebuttals within minutes during live advocacy.',
  },
  {
    id: 'comp-5',
    capability: 'Work ethically with clients',
    rationale:
      'Professional competence without integrity damages the justice system. Fellows understand confidentiality, conflict of interest, and fiduciary duty from day one.',
    indicators: [
      'Unwavering adherence to Rwanda Bar Association Code of Ethics',
      'Managing client expectations with candor rather than false reassurance',
      'Pro bono empathy balanced with disciplined professional detachment',
    ],
    practiceBenchmark:
      'Identifies ethical dilemmas in complex multi-party representations and navigates disclosure duties.',
  },
  {
    id: 'comp-6',
    capability: 'Communicate professionally',
    rationale:
      'Legal practice requires seamless bilingual and trilingual communication across Kinyarwanda, English, and French across diverse stakeholder tiers.',
    indicators: [
      'Precision in written client advisories, formal notices, and executive summaries',
      'Dignified professional etiquette with court clerks, registrars, and opposing counsel',
      'Demystifying intricate statutory frameworks for vulnerable community clients',
    ],
    practiceBenchmark:
      'Produces client-ready correspondence that communicates risk clearly to non-lawyer executives and citizens.',
  },
  {
    id: 'comp-7',
    capability: 'Understand the realities of legal practice',
    rationale:
      'Classrooms rarely teach court registries, filing deadlines, execution of judgments, case management software, or fee structures. Fellows gain grounded operational literacy.',
    indicators: [
      'Hands-on fluency with the Integrated Electronic Case Management System (IECMS)',
      'Understanding law chamber economics, billable stewardship, and retainer mechanics',
      'Realistic appraisal of prosecutorial discretion and judicial caseload burdens',
    ],
    practiceBenchmark:
      'Executes procedural filings on the national IECMS portal without administrative rejection.',
  },
  {
    id: 'comp-8',
    capability: 'Compete internationally',
    rationale:
      'Rwanda is positioning Kigali as an international financial and dispute resolution hub (Kigali International Arbitration Centre). Fellows must rival peers from Oxford, Harvard, and Pretoria.',
    indicators: [
      'Fluency with international commercial arbitration rules (KIAC, ICC, LCIA)',
      'High-tier competition in global moot courts (Jessup, Vis, All Africa Moot)',
      'Comparative comprehension of transnational investment treaties and EAC trade protocols',
    ],
    practiceBenchmark:
      'Qualifies for regional and international moot knockout rounds with memorials recognized for scholarly rigor.',
  },
  {
    id: 'comp-9',
    capability: 'Serve the public with integrity',
    rationale:
      'The law exists to protect human dignity and social cohesion. Indahiro Fellows dedicate structured hours to legal aid clinics and community legal literacy.',
    indicators: [
      'Active pro bono representation assistance for indigent detainees and rural citizens',
      'Community education on property rights, succession law, and mediation mechanisms',
      'Commitment to the rule of law as the bedrock of Rwanda’s socioeconomic transformation',
    ],
    practiceBenchmark:
      'Completes minimum 60 supervised pro bono clinic hours before cohort graduation.',
  },
];

export const MENTORS_DATA: Mentor[] = [
  {
    id: 'm-1',
    name: 'Me. Jeannette Uwase',
    title: 'Senior Partner & Dispute Resolution Head',
    institution: 'Trust Law Chambers, Kigali',
    category: 'Advocates',
    bio: 'Over 18 years representing domestic and multinational corporations in high-stakes commercial litigation and cross-border project finance throughout East Africa.',
    expertise: ['Commercial Litigation', 'Cross-Border Arbitration', 'Corporate Finance', 'Ethics'],
    yearsExperience: 18,
  },
  {
    id: 'm-2',
    name: 'Hon. Justice Emmanuel Karenzi',
    title: 'Judge of the High Court of Rwanda',
    institution: 'High Court (Commercial & Economic Chamber)',
    category: 'Judges',
    bio: 'Distinguished jurist with over two decades of public service in the Rwandan judiciary, focusing on judicial ethics, contractual remedies, and appellate jurisprudence.',
    expertise: ['Appellate Advocacy', 'Judicial Decision-Making', 'Commercial Law', 'Statutory Construction'],
    yearsExperience: 22,
  },
  {
    id: 'm-3',
    name: 'Alain Christian Nshimiyimana',
    title: 'Senior State Attorney & Lead Prosecutor',
    institution: 'National Public Prosecution Authority (NPPA)',
    category: 'Prosecutors',
    bio: 'Leads specialized financial crimes and cross-border asset recovery prosecutions, mentoring junior advocates on evidentiary burden, witness examination, and prosecutorial ethics.',
    expertise: ['Evidentiary Law', 'Financial Crimes', 'Trial Strategy', 'Witness Examination'],
    yearsExperience: 15,
  },
  {
    id: 'm-4',
    name: 'Dr. Solange Mukamana, PhD',
    title: 'Dean & Associate Professor of Public Law',
    institution: 'University of Rwanda, School of Law',
    category: 'Academics',
    bio: 'Leading scholar in constitutionalism, East African Community law, and comparative legal systems. Coach to numerous African Human Rights Moot Championship teams.',
    expertise: ['Constitutional Law', 'EAC Community Law', 'International Mooting', 'Scholarly Writing'],
    yearsExperience: 16,
  },
  {
    id: 'm-5',
    name: 'Me. Patrick Mugabo',
    title: 'Managing Partner & Arbitrator',
    institution: 'Kigali International Arbitration Centre (KIAC) Panel / Mugabo & Associates',
    category: 'Legal Practitioners',
    bio: 'Fellow of the Chartered Institute of Arbitrators (FCIArb), actively sitting on energy, infrastructure, and mining arbitration panels in Rwanda and the EAC region.',
    expertise: ['International Arbitration', 'Energy & Infrastructure', 'Contract Drafting', 'ADR'],
    yearsExperience: 20,
  },
  {
    id: 'm-6',
    name: 'Diane Kayitesi',
    title: 'Director General of Legislative Drafting & Policy',
    institution: 'Ministry of Justice (MINIJUST)',
    category: 'Policy Professionals',
    bio: 'Architect of foundational reform legislation aligning Rwanda’s legal framework with modern economic policies, civil procedure reform, and international treaty obligations.',
    expertise: ['Legislative Drafting', 'Policy Analysis', 'Regulatory Reform', 'Public International Law'],
    yearsExperience: 14,
  },
  {
    id: 'm-7',
    name: 'Me. Olivier Habimana',
    title: 'Criminal Defense Advocate & Bar Councilor',
    institution: 'Rwanda Bar Association',
    category: 'Advocates',
    bio: 'Renowned courtroom trial lawyer with deep dedication to pro bono representation and the training of pupillage candidates at the Rwanda Bar Association.',
    expertise: ['Criminal Defense', 'Oral Examination', 'Bar Ethics', 'Pro Bono Strategy'],
    yearsExperience: 19,
  },
  {
    id: 'm-8',
    name: 'Dr. Jean-Baptiste Rwigamba',
    title: 'Director of Academic Programs',
    institution: 'Institute of Legal Practice and Development (ILPD), Nyanza',
    category: 'Academics',
    bio: 'Pioneered post-graduate practical legal training methodologies that bridge university theoretical degrees with professional bar examinations and judicial clerkships.',
    expertise: ['Practical Legal Pedagogy', 'Civil Procedure', 'Memorial Drafting', 'Judicial Training'],
    yearsExperience: 17,
  },
];

export const INAUGURAL_FELLOWS: Fellow[] = [
  {
    id: 'fel-1',
    name: 'Kezia Mutoni',
    university: 'University of Rwanda (UR), Huye',
    yearOfStudy: 'Final Year (LL.B)',
    areaOfInterest: 'International Commercial Arbitration & Trade Law',
    bio: 'President of the UR Law Students Moot Society and Best Oralist at the East African Community Regional Moot 2025. Deeply driven to advance Kigali as an international arbitral seat.',
    mootExperience: 'Lead Oralist, 33rd African Human Rights Moot; Winner, UR National Moot Championship.',
    researchInterests: 'Enforcement of foreign arbitral awards under the New York Convention in East African courts.',
    mentorName: 'Me. Patrick Mugabo',
    mentorTitle: 'Managing Partner & Arbitrator, KIAC Panel',
    achievements: ['UR Dean’s Academic Roll', 'Best Memorial Drafting Award (EAC Moot 2025)'],
    quote: 'Indahiro transforms how we approach the law: not as static provisions in a gazette, but as an active instrument of economic development and justice.',
  },
  {
    id: 'fel-2',
    name: 'David Karekezi',
    university: 'Kigali Independent University (ULK)',
    yearOfStudy: 'Third Year (LL.B)',
    areaOfInterest: 'Criminal Procedure & Evidentiary Reform',
    bio: 'Passionate advocate for indigent criminal defense and modern forensic evidentiary standards in Rwandan trial jurisprudence.',
    mootExperience: 'Semifinalist, National Inter-University Constitutional Law Moot; President, ULK Debate Union.',
    researchInterests: 'Digital forensics admissibility under Rwanda’s Code of Criminal Procedure.',
    mentorName: 'Alain Christian Nshimiyimana',
    mentorTitle: 'Lead Prosecutor, National Public Prosecution Authority (NPPA)',
    achievements: ['Founded Legal Literacy Clinic in Gisozi', 'First-Class Standing in Criminal Law'],
    quote: 'Understanding statutory elements in lecture halls is only the baseline. Indahiro has trained me to test witness credibility on my feet under severe scrutiny.',
  },
  {
    id: 'fel-3',
    name: 'Aline Ingabire',
    university: 'University of Lay Adventists of Kigali (UNILAK)',
    yearOfStudy: 'Final Year (LL.B)',
    areaOfInterest: 'Environmental Governance & Land Rights Law',
    bio: 'Researcher with a focus on green energy regulation, agrarian land tenure disputes, and community mediation frameworks in Rwanda’s Southern Province.',
    mootExperience: 'Participant, International Environmental Moot Court Competition.',
    researchInterests: 'Statutory balancing of expropriation in the public interest versus tenure security under Law No. 27/2021.',
    mentorName: 'Diane Kayitesi',
    mentorTitle: 'Director General of Legislative Drafting, MINIJUST',
    achievements: ['Published commentary on agricultural cooperative disputes in Rwandan Law Review'],
    quote: 'The fellowship gave me direct access to the legislative architects shaping our nation. Textbooks simply cannot replace that.',
  },
  {
    id: 'fel-4',
    name: 'Calvin Nkurunziza',
    university: 'University of Rwanda (UR), Gikondo',
    yearOfStudy: 'Third Year (LL.B)',
    areaOfInterest: 'Financial Technology Regulation & Corporate Law',
    bio: 'Focuses on the intersection of payment gateway licensing, data protection compliance under Law No. 058/2021, and venture capital financing in Rwanda.',
    mootExperience: 'Best Researcher, National Commercial Moot Competition 2025.',
    researchInterests: 'Cross-border data transfers and regulatory sandboxes for fintech startups in Kigali.',
    mentorName: 'Me. Jeannette Uwase',
    mentorTitle: 'Senior Partner, Trust Law Chambers',
    achievements: ['Top-ranked memorial score in 2025 National Moot', 'Student Editor, UR Legal Digest'],
    quote: 'Rigorous legal writing requires an economy of words. Indahiro stripped away academic fluff and taught us the language of high-stakes corporate counsel.',
  },
  {
    id: 'fel-5',
    name: 'Sonia Umutoniwase',
    university: 'INES Ruhengeri',
    yearOfStudy: 'Final Year (LL.B)',
    areaOfInterest: 'Taxation Law & Cross-Border Customs Integration',
    bio: 'Top law scholar from INES Ruhengeri focused on tax dispute resolution, transfer pricing litigation, and regional customs tariffs within the Northern Corridor.',
    mootExperience: 'Finalist, EAC Northern Corridor Trade Law Moot.',
    researchInterests: 'Dispute escalation mechanisms before the Rwanda Revenue Authority Appeals Committee.',
    mentorName: 'Hon. Justice Emmanuel Karenzi',
    mentorTitle: 'Judge, High Court of Rwanda (Commercial Chamber)',
    achievements: ['Excellence Award in Public Finance & Tax Law', 'Co-organizer of Musanze Legal Aid Days'],
    quote: 'Indahiro proves that ambition knows no geographic boundaries in Rwanda. We are held to identical international benchmarks regardless of campus.',
  },
  {
    id: 'fel-6',
    name: 'Jean-Luc Habiyaremye',
    university: 'University of Rwanda (UR), Huye',
    yearOfStudy: 'Final Year (LL.B)',
    areaOfInterest: 'Constitutional Law & Public Interest Litigation',
    bio: 'Student leader committed to constitutional jurisprudence, access to justice for vulnerable persons, and fundamental human rights jurisprudence.',
    mootExperience: 'Quarterfinalist, All Africa Moot Competition; Winner, UR Huye Inter-Class Trial Tournament.',
    researchInterests: 'Constitutional review jurisdiction of the Supreme Court of Rwanda under Article 96.',
    mentorName: 'Dr. Solange Mukamana, PhD',
    mentorTitle: 'Dean & Associate Professor, UR School of Law',
    achievements: ['President of UR Student Legal Aid Bureau', 'Authored brief on prisoner legal literacy'],
    quote: 'The fellowship instilled in us a profound ethic: that elite legal competence is a debt owed back to the public and the rule of law.',
  },
  {
    id: 'fel-7',
    name: 'Clarisse Gakire',
    university: 'Kigali Independent University (ULK)',
    yearOfStudy: 'Third Year (LL.B)',
    areaOfInterest: 'Intellectual Property & Creative Industry Law',
    bio: 'Dedicated to legal frameworks protecting Rwandan innovators, musicians, and digital creators under Law No. 31/2009 on the Protection of Intellectual Property.',
    mootExperience: 'ULK Moot Team Captain; 2nd Place, Kigali IP Moot Challenge.',
    researchInterests: 'Copyright protection in AI-generated artistic works under Rwandan and regional regimes.',
    mentorName: 'Me. Patrick Mugabo',
    mentorTitle: 'Managing Partner & Arbitrator, KIAC Panel',
    achievements: ['Drafted standard-form copyright assignment contracts for Kigali artist collective'],
    quote: 'Having a senior advocate critique my drafting sentence by sentence was the sharpest learning curve of my legal education.',
  },
  {
    id: 'fel-8',
    name: 'Eric Manzi',
    university: 'University of Lay Adventists of Kigali (UNILAK)',
    yearOfStudy: 'Final Year (LL.B)',
    areaOfInterest: 'Labour Law, Mediation & Alternative Dispute Resolution',
    bio: 'Specialist in collective bargaining agreements, wrongful termination jurisprudence, and mandatory mediation procedures before labor inspectors.',
    mootExperience: 'Best Oralist, UNILAK Intra-University ADR Competition.',
    researchInterests: 'The role of Abunzi (community mediation) principles in institutionalizing modern ADR.',
    mentorName: 'Me. Olivier Habimana',
    mentorTitle: 'Criminal Defense Advocate & Bar Councilor',
    achievements: ['Facilitated over 40 community mediation sessions under supervision'],
    quote: 'A courtroom battle avoided through sound legal drafting and ethical negotiation is often the greatest victory a lawyer can secure for a client.',
  },
  {
    id: 'fel-9',
    name: 'Sandrine Uwamahoro',
    university: 'University of Rwanda (UR), Huye',
    yearOfStudy: 'Third Year (LL.B)',
    areaOfInterest: 'Banking, Insolvency & Secured Transactions',
    bio: 'Keen legal analyst examining mortgages, pledges, and corporate restructuring under Law No. 067/2021 relating to commercial recovery and insolvency.',
    mootExperience: 'UR Team Researcher, Jessup International Law Moot Competition (National Rounds).',
    researchInterests: 'Priority rules between floating charges and statutory preferential debts in Rwandan bankruptcy.',
    mentorName: 'Me. Jeannette Uwase',
    mentorTitle: 'Senior Partner, Trust Law Chambers',
    achievements: ['Highest cumulative score in Law of Property & Commercial Contracts at UR'],
    quote: 'Indahiro forces you to abandon the passive student mindset. You are treated as a junior colleague whose arguments must hold water in real court.',
  },
  {
    id: 'fel-10',
    name: 'Thierry Mugisha',
    university: 'Kigali Independent University (ULK)',
    yearOfStudy: 'Final Year (LL.B)',
    areaOfInterest: 'Public Procurement & Administrative Law',
    bio: 'Focused on the legal compliance of public tenders, administrative tribunals, and judicial review of administrative action before the High Court of Rwanda.',
    mootExperience: 'National Moot Finalist 2024; Co-founder of ULK Public Law Discussion Society.',
    researchInterests: 'Standards of judicial deference to administrative decisions under Rwandan administrative procedure.',
    mentorName: 'Dr. Jean-Baptiste Rwigamba',
    mentorTitle: 'Director of Academic Programs, ILPD Nyanza',
    achievements: ['Presented research at the Annual Rwanda Justice Sector Symposium 2025'],
    quote: 'The fellowship showed us that the measure of an advocate is not how loudly they speak, but how relentlessly they anchor their propositions in authority and principle.',
  },
];

export const PARTNERS_DATA: Partner[] = [
  {
    id: 'p-1',
    name: 'Ministry of Justice',
    acronym: 'MINIJUST',
    category: 'Government',
    roleDescription:
      'Providing policy coordination, access to legislative drafting clinics, and institutional guidance for justice sector capacity development.',
  },
  {
    id: 'p-2',
    name: 'Rwanda Bar Association',
    acronym: 'RBA',
    category: 'Legal Profession',
    roleDescription:
      'Facilitating senior advocate mentorship pairings, courtroom shadowing opportunities, and seamless pupillage orientation for fellows.',
  },
  {
    id: 'p-3',
    name: 'Judiciary of Rwanda',
    acronym: 'Supreme & High Courts',
    category: 'Judiciary',
    roleDescription:
      'Hosting fellows for courtroom observation, judge dialogues on advocacy ethics, and appellate bench simulations.',
  },
  {
    id: 'p-4',
    name: 'National Public Prosecution Authority',
    acronym: 'NPPA',
    category: 'Government',
    roleDescription:
      'Exposing fellows to criminal prosecution strategy, evidence handling, public interest representation, and state attorney practice.',
  },
  {
    id: 'p-5',
    name: 'Institute of Legal Practice and Development',
    acronym: 'ILPD',
    category: 'Universities',
    roleDescription:
      'Collaborating on practical skills curricula, judicial simulation facilities in Nyanza, and post-graduate transition frameworks.',
  },
  {
    id: 'p-6',
    name: 'University of Rwanda School of Law',
    acronym: 'UR Law',
    category: 'Universities',
    roleDescription:
      'Academic partnership facilitating talent identification, faculty mentorship, moot facility access, and scholarly research collaboration.',
  },
  {
    id: 'p-7',
    name: 'Leading Kigali Commercial Law Chambers',
    category: 'Law Firms',
    roleDescription:
      'Offering direct clerkships, commercial memorial drafting masterclasses, and international client simulation exercises.',
  },
  {
    id: 'p-8',
    name: 'Kigali International Arbitration Centre',
    acronym: 'KIAC',
    category: 'Legal Profession',
    roleDescription:
      'Providing fellows with observer status in institutional arbitration hearings, tribunal rules workshops, and ADR moot preparation.',
  },
];

export const INITIAL_APPLICATIONS: ApplicationSubmission[] = [
  {
    id: 'IND-2026-0012',
    submittedAt: '2026-09-18T14:22:00Z',
    status: 'shortlisted',
    personal: {
      fullName: 'Marcella Umugwaneza',
      email: 'm.umugwaneza@ur.ac.rw',
      phone: '+250 788 341 902',
      university: 'University of Rwanda (UR), Huye',
      yearOfStudy: 'Year 3',
      nationalId: '1199980045231089',
      location: 'Huye / Kigali',
    },
    academic: {
      programme: 'Bachelor of Laws (LL.B Honors)',
      gpaOrClass: 'First Class Distinction (GPA 3.82 / 4.0)',
      relevantCourses: 'Law of Contract, Criminal Procedure, Evidence, Administrative Law, International Law',
      honors: 'Dean’s Honour List 2024 & 2025; Top Student in Rwandan Law of Property',
    },
    experience: {
      mootCourt: 'Lead Oralist for UR at the East African Inter-University Human Rights Moot (Arusha, 2025). Reached semifinals.',
      debate: 'Captain of UR Huye Debate Team. Finalist in Kigali Youth Parliamentary Debate.',
      legalResearch: 'Conducted 6-month research assistantship with Prof. Mukamana on comparative EAC tax harmonization.',
      leadership: 'Head of Student Welfare, UR Law Society; Editor-in-Chief of Student Legal Bulletin.',
      volunteering: '40 hours at Nyanza Community Legal Clinic assisting self-represented litigants with civil claim drafting.',
      internships: 'Two-month judicial internship at the Intermediate Court of Huye.',
      publications: 'Published article: "The Doctrine of Legitimate Expectation under Rwandan Administrative Review" in UR Law Journal.',
    },
    motivation: {
      whyIndahiro: 'Law school has given me a rigorous doctrinal foundation, but when I stood before judges during my internship, I felt the sheer chasm between citing an article and surviving a judicial cross-examination. Indahiro represents the bridge I urgently need to become a decisive courtroom advocate.',
      whyLegalPractice: 'I am drawn to the discipline of the bar because the rule of law is the single most important guarantee of Rwanda’s long-term prosperity. I want to build a career where precision in language protects rights and enables commerce.',
      legalProblemCareAbout: 'The backlog in executing commercial judgments before the Commercial Court and the need for standardized fast-track enforcement for SME contracts.',
      stepsTaken: 'I authored a policy brief submitted to the RBA young lawyers committee and organized a student panel discussing alternative enforcement mechanisms with commercial bailiffs.',
    },
    practicalAssessment: {
      answer: `MEMORANDUM OF LAW
TO: Senior Partner, Commercial Practice Group
FROM: Candidate #0012
DATE: September 18, 2026
RE: AgriTech Cooperative v. District Executive Committee (Land Lease Revocation)

I. DISPOSITIVE LEGAL ISSUES
1. Whether the District Executive Committee's summary cancellation of the 25-year agricultural lease without notice constitutes an ultra vires administrative act under Law No. 27/2021 relating to Land in Rwanda.
2. Whether the Cooperative's unamortized capital investment in drip-irrigation infrastructure qualifies as compensable improvement under Article 38 of the Land Law.

II. STATUTORY & PRECEDENTIAL ANALYSIS
Under Article 14 of the Land Law, long-term emphyteutic leases grant rights in rem, revocable only through due process upon established material breach following statutory cure notices. The District’s unilateral declaration of forfeiture violated the core tenets of administrative fairness guaranteed by Article 19 of the Constitution of Rwanda and Law No. 15/2004 relating to Administrative Procedure. Furthermore, in Gasabo District v. Horizon Agribusiness (Commercial High Court, 2023), the court held that public authorities acting in private commercial capacities cannot wield expropriatory powers without indemnifying the lessee for substantiated capital improvements.

III. STRATEGIC RECOMMENDATION
Immediate filing of an urgent petition for interim conservatory measures before the Commercial Court under Article 142 of the Civil Procedure Code to freeze eviction, accompanied by a formal invitation to expedited KIAC mediation to preserve commercial continuity.`,
      wordCount: 248,
    },
    references: {
      refereeName: 'Dr. Solange Mukamana, PhD',
      refereeTitle: 'Associate Professor & Associate Dean',
      refereeInstitution: 'University of Rwanda School of Law',
      refereeEmail: 's.mukamana@ur.ac.rw',
      refereePhone: '+250 788 123 456',
      relationship: 'Academic Supervisor and Moot Coach (3 years)',
    },
    scores: {
      analyticalReasoning: 24,
      advocacyPotential: 23,
      publicServiceIntegrity: 19,
      commitmentDiscipline: 14,
      practicalScore: 15,
    },
    committeeNotes: [
      'Exceptional practical memorandum; identified statutory hierarchy immediately without excessive verbiage.',
      'Strong moot track record in Arusha. High poise under rapid interrogation.',
      'Recommended for interview panel A with Justice Karenzi and Me. Uwase.',
    ],
    interviewSlot: '2026-10-14T09:00:00',
    interviewScore: 92,
  },
  {
    id: 'IND-2026-0045',
    submittedAt: '2026-09-20T11:05:00Z',
    status: 'shortlisted',
    personal: {
      fullName: 'Patrick Gasana',
      email: 'p.gasana@ulk.ac.rw',
      phone: '+250 783 910 882',
      university: 'Kigali Independent University (ULK)',
      yearOfStudy: 'Year 4 (Finalist)',
      nationalId: '1199880091244012',
      location: 'Kigali',
    },
    academic: {
      programme: 'Bachelor of Laws (LL.B)',
      gpaOrClass: 'Upper Second Class with Honors (81.4%)',
      relevantCourses: 'Company Law, Tax Law, Commercial Contracts, Civil Procedure, ADR',
      honors: 'Winner, ULK Annual Deans Moot Cup 2025',
    },
    experience: {
      mootCourt: 'President of ULK Moot Court Committee. Coordinated training of 60 first-year law students in legal argument formatting.',
      debate: 'Participant in Kigali Inter-University Debate League.',
      legalResearch: 'Co-authored a study on arbitration clauses in Rwandan commercial contracts.',
      leadership: 'Student Representative to the Faculty Academic Council.',
      volunteering: 'Regular volunteer at Nyarugenge District Legal Aid desk on Saturday mornings.',
      internships: 'Clerked at a mid-sized Kigali commercial law practice for three months.',
      publications: 'Op-ed on the Kigali International Financial Centre (KIFC) regulatory framework published in The New Times.',
    },
    motivation: {
      whyIndahiro: 'I have observed that many graduates from private universities face an unwritten bias regarding courtroom readiness. Indahiro provides an objective, uncompromising standard where merit and demonstrable advocacy skills are all that count.',
      whyLegalPractice: 'I want to specialize in domestic and international commercial dispute resolution, representing Rwandan entrepreneurs in complex contractual negotiations.',
      legalProblemCareAbout: 'The lack of access small business owners have to high-caliber contract drafting, which leads to catastrophic litigation when disputes arise.',
      stepsTaken: 'I initiated free contract-review workshops for student entrepreneurs at the ULK business incubation center.',
    },
    practicalAssessment: {
      answer: `LEGAL ASSESSMENT: LEASE TERMINATION & ASSET PROTECTION
The unilateral termination of the 25-year lease agreement by the District Executive Committee must be scrutinized through contract law, administrative procedure, and the provisions of Law No. 27/2021. 

First, the cooperative holds legitimate title under a registered emphyteutic contract. In Rwandan law, such leases confer real rights that cannot be unilaterally rescinded absent contractual default or formal statutory expropriation with prior fair compensation. The District’s failure to issue written notice with an opportunity to remedy violates the fundamental rule of audi alteram partem codified in administrative guidelines.

Second, the cooperative is entitled to invoke Article 166 of the Law Governing Contracts (2020) regarding contractual non-performance and damages. As counsel for the cooperative, my immediate action is to seek an emergency injunction from the Commercial Court to prevent eviction while simultaneously serving a Notice of Dispute under the dispute resolution clause to open settlement channels.`,
      wordCount: 165,
    },
    references: {
      refereeName: 'Me. Jean-Claude Bizimana',
      refereeTitle: 'Lecturer in Law & Managing Partner',
      refereeInstitution: 'ULK Faculty of Law / Lex Chambers',
      refereeEmail: 'jc.bizimana@ulk.ac.rw',
      refereePhone: '+250 788 554 112',
      relationship: 'Lecturer in Civil Procedure and Moot Mentor',
    },
    scores: {
      analyticalReasoning: 21,
      advocacyPotential: 24,
      publicServiceIntegrity: 18,
      commitmentDiscipline: 15,
      practicalScore: 13,
    },
    committeeNotes: [
      'Exceptional leadership drive and commitment to peers.',
      'Demonstrated high oral confidence during past inter-university competitions.',
      'Practical assessment is structurally sound and action-oriented.',
    ],
    interviewSlot: '2026-10-14T10:30:00',
    interviewScore: 88,
  },
  {
    id: 'IND-2026-0089',
    submittedAt: '2026-09-24T16:40:00Z',
    status: 'under_review',
    personal: {
      fullName: 'Christelle Ishimwe',
      email: 'c.ishimwe@unilak.ac.rw',
      phone: '+250 789 220 144',
      university: 'University of Lay Adventists of Kigali (UNILAK)',
      yearOfStudy: 'Year 3',
      nationalId: '1200080077881023',
      location: 'Rwamagana / Kigali',
    },
    academic: {
      programme: 'Bachelor of Laws (LL.B)',
      gpaOrClass: 'First Class Standing (GPA 3.75)',
      relevantCourses: 'Constitutional Law, Land Law, Family Law, Labor Law, Criminal Law',
      honors: 'Academic Excellence Prize 2024; UNILAK Merit Scholar',
    },
    experience: {
      mootCourt: 'Participated in UNILAK Moot Court trials; runner-up in intra-faculty family law simulation.',
      debate: 'Active member of English Debating Society.',
      legalResearch: 'Researched customary land succession dynamics in Rwanda’s Eastern Province.',
      leadership: 'Secretary of UNILAK Human Rights Club.',
      volunteering: 'Assisted in paralegal outreach programs organized by Haguruka NGO.',
      internships: 'One month shadowing at Rwamagana Primary Court.',
      publications: 'Co-contributor to student commentary on matrimonial regimes and succession law.',
    },
    motivation: {
      whyIndahiro: 'I want to learn how real cases are won. In class we read appellate judgments after everything has already been resolved cleanly. Indahiro provides the messy, demanding, real-time trial preparation that textbooks can never simulate.',
      whyLegalPractice: 'To bring precision and empathy to community disputes, ensuring that vulnerable citizens do not lose lawful land rights simply because they lack articulate legal representation.',
      legalProblemCareAbout: 'Land fragmentation disputes within family succession proceedings and the delay in implementing court-ordered boundary demarcations.',
      stepsTaken: 'I have volunteered 60 hours with grassroots legal clinics explaining the 2016 Succession Law to women cooperatives in Rwamagana.',
    },
    practicalAssessment: {
      answer: `LEGAL REASONING ON DISTRICT LEASE CANCELLATION
The core issue is whether an administrative entity can terminate a commercial lease without complying with the terms of Law No. 27/2021 and contractual default mechanisms.

1. Legitimate Expectation & Contractual Security:
The Cooperative invested substantial resources based on a 25-year lease signed by the District. This creates both a contractual obligation and a legitimate expectation protected by administrative law. Under Rwanda's Law of Contracts (2020), contracts legally formed have the force of law between the parties.

2. Remedy:
The Cooperative should file an urgent application for stay of execution at the Commercial Court. The District cannot rely on generic "public interest" without proving that the cooperative committed a material breach or paying compensation as mandated by the law on expropriation.`,
      wordCount: 140,
    },
    references: {
      refereeName: 'Pasteur Dr. Emmanuel Nkurunziza',
      refereeTitle: 'Dean, Faculty of Law',
      refereeInstitution: 'UNILAK',
      refereeEmail: 'dean.law@unilak.ac.rw',
      refereePhone: '+250 788 889 001',
      relationship: 'Dean and Lecturer in Constitutional Law',
    },
    scores: {
      analyticalReasoning: 19,
      advocacyPotential: 18,
      publicServiceIntegrity: 20,
      commitmentDiscipline: 14,
      practicalScore: 12,
    },
    committeeNotes: [
      'Very strong public service orientation and proven community clinic track record.',
      'Practical assessment is clear but could delve deeper into procedural litigation remedies.',
    ],
  },
  {
    id: 'IND-2026-0104',
    submittedAt: '2026-09-28T08:15:00Z',
    status: 'under_review',
    personal: {
      fullName: 'Yves Mugisha',
      email: 'y.mugisha@ines.ac.rw',
      phone: '+250 788 661 290',
      university: 'INES Ruhengeri',
      yearOfStudy: 'Year 4 (Finalist)',
      nationalId: '1199780012234055',
      location: 'Musanze',
    },
    academic: {
      programme: 'Bachelor of Laws (LL.B)',
      gpaOrClass: 'Upper Second (79.2%)',
      relevantCourses: 'Civil Law, Commercial Law, Labor Law, Environmental Law, Public Procurement',
      honors: 'INES Ruhengeri Moot Finalist 2024',
    },
    experience: {
      mootCourt: 'Co-lead oralist in Northern Province Inter-collegiate Law Tournament.',
      debate: 'Active participant in regional youth forums on rule of law.',
      legalResearch: 'Investigated cross-border trade dispute resolution mechanisms between Rwanda and DRC border communities.',
      leadership: 'Vice President of INES Law Students Guild.',
      volunteering: 'Organized legal advice desks for cross-border informal traders in Rubavu/Musanze.',
      internships: 'Two-month clerkship at Musanze Intermediate Court.',
      publications: 'Short paper on informal trader rights under EAC Common Market Protocol.',
    },
    motivation: {
      whyIndahiro: 'Students in regional universities outside Kigali are hungry for national mentorship and elite advocacy standards. Indahiro is the first initiative that actively connects us to the highest judicial and advocate chambers in Kigali.',
      whyLegalPractice: 'To champion rigorous legal standards in commercial contracts and cross-border logistics in the Northern corridor.',
      legalProblemCareAbout: 'Arbitrary customs seizures and lack of accessible dispute mechanisms for small traders.',
      stepsTaken: 'Conducted legal literacy workshops with border women associations in Rubavu and Cyanika.',
    },
    practicalAssessment: {
      answer: `ANALYSIS OF ADMINISTRATIVE ACTION
The revocation of the lease by the District Executive Committee is legally defective on procedural and substantive grounds:

1. Procedural Irregularity: No notice of default was issued, nor was the cooperative granted an opportunity to present its defense, violating natural justice.
2. Breach of Leasehold Rights: Under Law No. 27/2021, an emphyteutic lease cannot be terminated arbitrarily. If the land is required for public interest, the procedure of expropriation must be strictly followed with fair compensation paid prior to dispossession.

Action: Approach the Commercial Court under summary proceedings to suspend the eviction order and claim full restitution.`,
      wordCount: 110,
    },
    references: {
      refereeName: 'Me. Donatien Habiyakare',
      refereeTitle: 'Senior Lecturer & Advocate',
      refereeInstitution: 'INES Ruhengeri',
      refereeEmail: 'd.habiyakare@ines.ac.rw',
      refereePhone: '+250 788 777 441',
      relationship: 'Lecturer in Commercial Law and Moot Coach',
    },
    scores: {
      analyticalReasoning: 18,
      advocacyPotential: 20,
      publicServiceIntegrity: 19,
      commitmentDiscipline: 13,
      practicalScore: 11,
    },
    committeeNotes: [
      'Strong regional representation and impressive advocacy zeal.',
      'Practical assessment covers the core principles accurately.',
    ],
  },
  {
    id: 'IND-2026-0120',
    submittedAt: '2026-10-01T15:50:00Z',
    status: 'submitted',
    personal: {
      fullName: 'Clarisse Keza',
      email: 'c.keza@ur.ac.rw',
      phone: '+250 785 100 231',
      university: 'University of Rwanda (UR), Huye',
      yearOfStudy: 'Year 2',
      nationalId: '1200180066551092',
      location: 'Huye',
    },
    academic: {
      programme: 'Bachelor of Laws (LL.B Honors)',
      gpaOrClass: 'First Class Standing (GPA 3.91)',
      relevantCourses: 'Legal Research & Writing, Constitutional Law, Law of Persons & Family, Criminal Law',
      honors: 'Top First-Year Student Award 2024/2025 Academic Year',
    },
    experience: {
      mootCourt: 'Winner of First-Year Novice Moot Court at UR Huye.',
      debate: 'Member of UR Debate Society.',
      legalResearch: 'Assisted in compiling statutory indices for the UR Law Library.',
      leadership: 'Class Academic Representative.',
      volunteering: 'Community literacy volunteer in Huye district.',
      internships: 'None yet (currently Year 2).',
      publications: 'Author of student essay on the evolution of Gacaca jurisprudence.',
    },
    motivation: {
      whyIndahiro: 'I want to enter legal practice early, not wait until graduation to discover that I do not know how to cross-examine a witness or draft an enforceable contract.',
      whyLegalPractice: 'I believe the law is the architecture that allows societies to build trust. I want to contribute to the highest level of judicial drafting in Rwanda.',
      legalProblemCareAbout: 'Access to appellate legal representation for indigent appellants in rural provinces.',
      stepsTaken: 'Shadowed volunteer advocates during regional prison outreach sessions.',
    },
    practicalAssessment: {
      answer: `LEGAL OPINION REGARDING LEASE REVOCATION
The District's decision lacks statutory justification. Under Article 14 of the Land Law, land rights granted under lease agreements cannot be cancelled unilaterally without establishing a breach of the development conditions stipulated in the contract. Even where a breach occurs, the law mandates a formal notice period allowing the tenant to cure the defect.

Furthermore, if the District is invoking public interest, it is bound by the Law on Expropriation in the Public Interest, which demands fair and prior compensation before eviction can take place. 

The cooperative should immediately request an amicable review from the District Council, and failing a resolution within 48 hours, file for emergency injunctive relief in the Commercial Court.`,
      wordCount: 128,
    },
    references: {
      refereeName: 'Dr. Denis Bikesha',
      refereeTitle: 'Senior Lecturer in Law',
      refereeInstitution: 'University of Rwanda',
      refereeEmail: 'd.bikesha@ur.ac.rw',
      refereePhone: '+250 788 300 998',
      relationship: 'Lecturer in Legal Systems and Jurisprudence',
    },
    scores: {
      analyticalReasoning: 22,
      advocacyPotential: 21,
      publicServiceIntegrity: 18,
      commitmentDiscipline: 14,
      practicalScore: 13,
    },
    committeeNotes: [
      'Remarkable analytical maturity for a Year 2 student.',
      'Consider for fast-track interview consideration if shortlisted.',
    ],
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-1',
    title: 'Beyond the Lecture Hall: What 100 Hours of Moot Court Teaches You That Textbooks Cannot',
    subtitle: 'Reflections from the inaugural cohort on transitioning from theoretical rote memory to courtroom resilience.',
    category: 'Fellow Story',
    author: 'Kezia Mutoni',
    authorRole: 'Cohort I Fellow, University of Rwanda',
    date: 'October 2026',
    readTime: '6 min read',
    excerpt:
      'In a lecture hall, the professor asks a question and waits for a hands-up response. In a moot courtroom, three appellate judges cut you off mid-sentence, dismantle your core precedent, and demand a statutory citation within three seconds. Here is why every Rwandan law student needs that shock early.',
    content: [
      'For three years at university, success meant memorizing articles of the civil code, reciting landmark holdings, and writing tidy essay answers during end-of-semester exams. It gave me a high transcript score, but it left me fundamentally unprepared for the reality of the legal profession.',
      'During our first Indahiro advocacy simulation at the Supreme Court chambers, our panel was confronted with an aggressive, rapid-fire bench comprised of a sitting High Court judge and two senior members of the Rwanda Bar Association. Within forty seconds of my opening remarks, my prepared speech was dismantled. The bench demanded: "Counsel, concede that your reliance on Article 42 is fatal to your jurisdictional claim, or show us why this court has not already ruled against you in 2023."',
      'In that moment, everything changed. You learn that advocacy is not theatrical oration; it is disciplined intellectual composure under pressure. You learn to listen to the judge’s question, concede what cannot be defended, and anchor your remaining ground in unimpeachable statutory authority.',
      'Through Indahiro’s intensive practice regimen, we have written over thirty legal memorials, defended oral pleadings under timed cross-examinations, and spent mornings in real courtroom proceedings with our mentors. The gap between theory and practice is not a small step—it is an entirely different discipline.',
    ],
    keyQuote:
      'Advocacy is not theatrical oration; it is disciplined intellectual composure under intense judicial scrutiny.',
  },
  {
    id: 'art-2',
    title: 'The Integrated Electronic Case Management System (IECMS) and the Future of Rwandan Litigation',
    subtitle: 'How Rwanda’s digital judicial infrastructure is transforming the procedural training required of next-generation advocates.',
    category: 'Legal Article',
    author: 'Me. Patrick Mugabo',
    authorRole: 'Managing Partner & Arbitrator, KIAC Panel / Indahiro Mentor',
    date: 'September 2026',
    readTime: '8 min read',
    excerpt:
      'Rwanda was among the first nations in Africa to digitize its entire judicial filing pipeline. Yet university curricula still teach procedural law as if paper briefs were stamped by hand at clerk counters. Bridging this operational disconnect is a national imperative.',
    content: [
      'The modern courtroom in Kigali is paperless. From e-filing pleadings to automated scheduling, electronic evidence disclosure, and virtual appellate hearings, the Integrated Electronic Case Management System (IECMS) has dramatically accelerated judicial turnaround.',
      'However, a recurring complaint among senior law firm partners is that incoming law graduates know how to define locus standi in Latin, but cannot upload a responsive pleading, tag electronic exhibits in compliance with court formatting rules, or track execution deadlines on the portal.',
      'Indahiro was built precisely to address this institutional friction. When our fellows graduate, they will not enter law firms requiring six months of administrative retraining. They already know how to draft, verify, and file within the digital reality of Rwandan practice.',
    ],
    keyQuote:
      'A law degree that teaches procedural law on paper in a country running on digital courts is teaching history, not law.',
  },
  {
    id: 'art-3',
    title: 'Walking With the Next Generation: A Mentor’s Perspective',
    subtitle: 'Why senior practitioners must dedicate unbilled hours to apprentice Rwanda’s aspiring legal minds.',
    category: 'Mentor Reflection',
    author: 'Me. Jeannette Uwase',
    authorRole: 'Senior Partner, Trust Law Chambers',
    date: 'August 2026',
    readTime: '5 min read',
    excerpt:
      'The most critical aspects of the legal profession—how to speak to a distressed client, when to advise settlement, how to maintain uncompromising ethical lines under commercial pressure—cannot be tested in an exam hall.',
    content: [
      'When I was admitted to the Rwanda Bar Association nearly two decades ago, mentorship was largely accidental. If you were fortunate enough to find a generous senior practitioner, you survived; if not, you made your mistakes in public courtrooms at your clients’ expense.',
      'The Indahiro Fellowship formalizes this essential tradition of apprenticeship. By pairing each fellow with an experienced advocate, judge, or prosecutor, we create a sanctuary for honest critique. I review my fellow’s draft agreements, invite them into preparation meetings for international arbitration hearings, and challenge their strategic instincts.',
      'Rwanda is rapidly growing into the arbitration and investment capital of the region. If our legal community is to stand shoulder-to-shoulder with London, Singapore, or Johannesburg, we must invest intentionally in the caliber of our young advocates today.',
    ],
    keyQuote:
      'Mentorship is not charity; it is how an elite legal profession protects its own integrity across generations.',
  },
  {
    id: 'art-4',
    title: 'The Kigali International Arbitration Centre: Preparing Students for Transnational Commercial Disputes',
    subtitle: 'Why Indahiro fellows are trained in arbitration rules and cross-border commercial litigation from year one.',
    category: 'Policy Discussion',
    author: 'Editorial Board',
    authorRole: 'Indahiro Legal Research Group',
    date: 'July 2026',
    readTime: '7 min read',
    excerpt:
      'With the rapid expansion of cross-border investments and the Kigali International Financial Centre (KIFC), the demand for lawyers who can navigate international arbitration protocols has never been higher.',
    content: [
      'For decades, major commercial disputes originating in Africa were routinely exported to Paris, London, or Geneva for resolution. The establishment and remarkable growth of the Kigali International Arbitration Centre (KIAC) challenged that paradigm directly.',
      'Today, parties across Africa and beyond select Kigali as the seat of their commercial dispute resolution. This demands advocates who are not only grounded in domestic Rwandan statutes, but who are completely at home with UNCITRAL model laws, ICC institutional rules, and cross-border award enforcement.',
      'Indahiro places our fellows directly into arbitration chambers, exposing them to witness statements, terms of reference drafting, and tribunal hearing dynamics.',
    ],
    keyQuote:
      'Our goal is simple: that when international tribunals convene in Kigali, Rwandan advocates are leading the arguments.',
  },
];
