/*
  Meet & Confer Portal Database
  Edit this file to update the public site. It is intentionally plain JavaScript
  so it works on GitHub Pages without a server, database, or build step.
*/
window.MC_DB = {
  meta: {
    district: 'Agua Fria Union High School District',
    siteTitle: 'Meet & Confer Data Portal',
    cycle: '2025–2026',
    phase: 'Priorities in progress',
    boardAction: 'Pending',
    focusAreas: ['Compensation', 'Benefits', 'Working Conditions'],
    contact: 'gturnbull@aguafria.org',
    lastUpdated: '2026-07-07'
  },

  budget: [
    { id: 'gbl-fy25', label: 'General Budget Limit', value: 88700721, type: 'Recurring / mostly unrestricted', note: 'FY2025 GBL', canSupport: 'Recurring commitments when legally available and budgeted.' },
    { id: 'override-fy25', label: 'M&O Override', value: 10770505, type: 'Recurring while authorized', note: 'FY2025 override', canSupport: 'Recurring priorities while override remains voter-authorized.' },
    { id: 'daa-fy25', label: 'District Additional Assistance', value: 6671650, type: 'Unrestricted capital-related', note: 'DAA in UNR', canSupport: 'Capital and legally allowable unrestricted needs; verify use before attaching to salary proposals.' },
    { id: 'carryforward-fy25', label: 'Carryforward', value: 5850651, type: 'One-time / reserve-like', note: 'Carryforward into FY2025', canSupport: 'One-time payments, transitions, reserves, or short-term investments; not ideal for permanent raises.' }
  ],

  affordability: [
    { title: 'Recurring compensation', status: 'Needs recurring unrestricted capacity', detail: 'Salary increases, step movement, and permanent benefit contribution increases should be matched with recurring funding.' },
    { title: 'One-time options', status: 'Best matched with one-time dollars', detail: 'Stipends, transition payments, pilot programs, and temporary supports can be matched with carryforward or other one-time resources.' },
    { title: 'Restricted funds', status: 'Use depends on legal purpose', detail: 'Classroom Site Fund, grants, bonds, and other restricted sources may have rules that limit employee compensation use.' },
    { title: 'Board action', status: 'Final approval required', detail: 'Meet & Confer produces recommendations. Governing Board action is required for final salary, benefit, policy, and contract decisions.' }
  ],

  priorities: [
    { id: 'insurance-contribution', topic: 'Insurance Contribution', category: 'Benefits', priority: 'Cover insurance increase / increase district contribution', year: '2021–2023', status: 'In Discussion', fiscalType: 'Recurring', outcome: 'Open', notes: 'Repeated certified and classified priority.' },
    { id: 'salary-increase', topic: 'Salary Increase', category: 'Compensation', priority: 'Certified, classified, and administrative salary increases', year: '2020–2023', status: 'In Discussion', fiscalType: 'Recurring', outcome: 'Open', notes: 'Appears across multiple employee groups.' },
    { id: 'working-conditions', topic: 'Working Conditions', category: 'Working Conditions', priority: 'Improve working conditions', year: '2022–2023', status: 'Open', fiscalType: 'Mixed', outcome: 'Needs definition', notes: 'Needs current-year issue breakdown.' },
    { id: 'lunch-duty', topic: 'Lunch Duty Stipend', category: 'Working Conditions', priority: 'Increase lunch duty stipend', year: '2022–2023', status: 'Needs Update', fiscalType: 'Recurring or annual stipend', outcome: 'Needs current status', notes: 'Track current stipend and proposed adjustment.' },
    { id: 'internal-coverage', topic: 'Internal Coverage Pay', category: 'Working Conditions', priority: 'Increase substitute rate/internal coverage pay', year: '2022–2023', status: 'Needs Update', fiscalType: 'Recurring / variable', outcome: 'Needs current status', notes: 'Connect to coverage and substitute fill-rate data.' },
    { id: 'classified-performance', topic: 'Classified Performance Pay', category: 'Compensation', priority: 'Classified performance pay', year: '2021–2023', status: 'Open', fiscalType: 'Recurring or one-time depending design', outcome: 'Open', notes: 'Show eligibility, amount, and funding source.' },
    { id: 'classified-growth', topic: 'Classified Professional Growth', category: 'Professional Growth', priority: 'Classified professional growth opportunities', year: '2022–2023', status: 'Open', fiscalType: 'Mixed', outcome: 'Open', notes: 'Could become a PD/career ladder dashboard.' },
    { id: 'class-size', topic: 'Class Size', category: 'Working Conditions', priority: 'Class size/caps/student load', year: '2019–2021', status: 'Open', fiscalType: 'Staffing / recurring', outcome: 'Open', notes: 'Add department and site-level data if available.' },
    { id: 'extra-duty', topic: 'Extra Duty Stipends', category: 'Compensation', priority: 'Coaches, band, extracurricular and extra duty stipends', year: '2017–2021', status: 'Needs Update', fiscalType: 'Recurring stipend schedule', outcome: 'Needs current status', notes: 'Link to extra duty schedule and comparison data.' },
    { id: 'sick-leave', topic: 'Sick Leave Buyback', category: 'Benefits', priority: 'Sick leave buyback', year: '2019–2020', status: 'Open', fiscalType: 'Policy / cost variable', outcome: 'Open', notes: 'Archive or mark current policy status.' }
  ],

  historicalYears: [
    { year: '2024–2025', title: 'Priorities for 2025–2026 SY', outcomeStatus: 'In progress', summary: 'Current public site identifies this as the active priority cycle.', priorities: ['Current-year priority list should be entered after review.'], documents: ['Home'] },
    { year: '2023–2024', title: 'Priorities for 2024–2025 SY', outcomeStatus: 'Needs outcome coding', summary: 'Annual priority cycle listed on current site.', priorities: ['Annual priorities listed on current site; outcomes should be attached.'], documents: ['Home'] },
    { year: '2022–2023', title: 'Priorities for 2023–2024 SY', outcomeStatus: 'Needs outcome coding', summary: 'Priorities included insurance, position protection, working conditions, duty/coverage pay, and classified growth.', priorities: ['Cover insurance increase', 'Protect positions', 'Working conditions', 'Lunch duty stipend increase', 'Substitute rate/internal coverage increase in pay', 'Classified performance pay', 'Classified professional growth'], documents: ['Home'] },
    { year: '2021–2022', title: 'Priorities for 2022–2023 SY', outcomeStatus: 'Needs outcome coding', summary: 'Priorities spanned administration, certified, and classified employee groups.', priorities: ['Admin: better pay for assistant principals', 'Less expensive healthcare', 'Cell phone stipend increase', 'Certified salary increase', 'Increase district contribution to insurance', 'Classified salary increase', 'Classified performance pay', 'Holiday compensation'], documents: ['Home'] },
    { year: '2020–2021', title: 'Priorities for 2021–2022 SY', outcomeStatus: 'Needs outcome coding', summary: 'Major themes included salary transparency, healthcare costs, class size, stipends, classified wages, driver pay, and sick leave buyback.', priorities: ['Salary transparency', 'Medical insurance costs', 'Class size capped', 'Extra duty stipends', 'Certified non-teaching healthcare costs', 'Competitive classified wages', 'Bus driver pay', 'Sick leave buyback'], documents: ['Home'] },
    { year: '2018–2019', title: 'Priorities for 2019–2020 SY', outcomeStatus: 'Archive', summary: 'Classified compensation and stipend competitiveness were major themes.', priorities: ['Increase classified pay to attract qualified candidates', 'Classified percentage increase', 'Coaches and extracurricular stipends', 'Band stipend increases'], documents: ['Home'] },
    { year: '2017–2018', title: 'Priorities for 2018–2019 SY', outcomeStatus: 'Archive', summary: 'Classified compensation and extracurricular stipend priorities appeared in this cycle.', priorities: ['Classified percentage increase', 'Pay for classified staff to increase qualified candidates', 'Coaches, extracurricular, and band stipends'], documents: ['Home'] }
  ],

  benefits: [
    { name: 'Health Insurance', provider: 'United Healthcare', detail: '1-866-873-3903 · Group 908186', category: 'Benefits' },
    { name: 'Vision Insurance', provider: 'Avesis', detail: '1-800-828-9341 · Group 11007-1017 · Plan #924', category: 'Benefits' },
    { name: 'Dental Insurance', provider: 'Delta Dental / Cigna HMO', detail: 'Delta Dental 1-800-352-6132 · Group 14267-0380 · Cigna 1-800-Cigna24', category: 'Benefits' }
  ],

  financeTerms: [
    { term: 'M&O', category: 'Finance', definition: 'Maintenance and Operations funding supports the operating side of the district budget.' },
    { term: 'RCL', category: 'Finance', definition: 'Revenue Control Limit is a central component of Arizona school district budget capacity.' },
    { term: 'DAA', category: 'Finance', definition: 'District Additional Assistance is included in the FY2025 unrestricted snapshot on the current site.' },
    { term: 'Carryforward', category: 'Finance', definition: 'Unspent budget capacity carried into a later fiscal year; often treated cautiously for recurring commitments.' },
    { term: 'Classroom Site Fund', category: 'Finance', definition: 'A restricted funding source connected to statutory requirements, including performance-based compensation rules.' },
    { term: 'Prop 123', category: 'Finance', definition: 'Included in the current site description of what is reflected in the FY2025 budget snapshot.' }
  ],

  law: [
    { title: 'Committee representation', category: 'Law & Policy', text: 'The committee represents employee groups including administrative leadership, certified employees, and classified employees.' },
    { title: 'Good-faith process', category: 'Law & Policy', text: 'Meeting, consulting, and discussing are the primary objectives. Participants are expected to act in good faith and be respectful.' },
    { title: 'Board authority', category: 'Law & Policy', text: 'Nothing in the process abrogates or usurps the Board as final determinant of policy, salary, or contract provisions.' },
    { title: 'Performance pay', category: 'Law & Policy', text: 'A.R.S. 15-977 requires a performance-based compensation system and a 70% affirmative vote of eligible certified staff.' }
  ],

  comparisons: {
    neighbors: ['Agua Fria Union High School District', 'Tolleson Union High School District', 'Buckeye', 'Dysart', 'Peoria', 'Deer Valley'],
    peers: ['Agua Fria Union High School District', 'Amphitheater Unified School District', 'Flagstaff Unified School District', 'Higley Unified School District', 'Marana Unified School District', 'Queen Creek Unified School District', 'Sunnyside Unified School District', 'Tempe Union High School District', 'Tolleson Union High School District', 'Vail Unified School District', 'Yuma Union High School District']
  },

  documents: [
    { title: 'Home', category: 'Overview', use: 'Purpose statement, descriptions by year, annual priorities', url: 'https://sites.google.com/aguafria.org/meetandconfer/home' },
    { title: 'Budget FY25', category: 'Finance', use: 'Budget snapshot cards and finance explorer', url: 'https://sites.google.com/aguafria.org/meetandconfer/District-Financial-Information/budget-fy25' },
    { title: 'District Financial Information', category: 'Finance', use: 'Glossary and Arizona school finance explainer', url: 'https://sites.google.com/aguafria.org/meetandconfer/District-Financial-Information' },
    { title: 'Budget Spending Comparison', category: 'Comparison', use: 'Neighboring and peer district comparison hub', url: 'https://sites.google.com/aguafria.org/meetandconfer/District-Financial-Information/budget-spending-comparison' },
    { title: 'Certified', category: 'Compensation', use: 'Certified salary benchmarks and COLA explanation', url: 'https://sites.google.com/aguafria.org/meetandconfer/staff-compensation/Certified' },
    { title: 'Classified', category: 'Compensation', use: 'Classified salary history and starting-pay comparison section', url: 'https://sites.google.com/aguafria.org/meetandconfer/staff-compensation/Classified' },
    { title: 'Administration', category: 'Compensation', use: 'Administrative compensation comparison methodology', url: 'https://sites.google.com/aguafria.org/meetandconfer/staff-compensation/Administration' },
    { title: 'Benefits', category: 'Benefits', use: 'Provider contacts and benefit document index', url: 'https://sites.google.com/aguafria.org/meetandconfer/Benefits' },
    { title: 'Law & Policy', category: 'Law & Policy', use: 'Legal status, procedure, and Board authority language', url: 'https://sites.google.com/aguafria.org/meetandconfer/home/law-policy' }
  ],

  databaseCollections: [
    { name: 'priorities', purpose: 'Feeds proposal tracker, filters, status chart, and global search.', updateCadence: 'After each Meet & Confer meeting' },
    { name: 'historicalYears', purpose: 'Feeds year-by-year outcome pages and historical chart.', updateCadence: 'At the end of each cycle, then when old records are cleaned up' },
    { name: 'budget + affordability', purpose: 'Feeds FY budget cards, finance chart, and Can We Afford It dashboard.', updateCadence: 'After adopted/proposed budget updates' },
    { name: 'documents', purpose: 'Feeds source library, search, and update queue.', updateCadence: 'Whenever a PDF, agenda, presentation, or source page changes' },
    { name: 'financeTerms + law', purpose: 'Feeds glossary, legal explainer, and global search.', updateCadence: 'As policy/legal references are updated' },
    { name: 'comparisons', purpose: 'Feeds district comparison hub and future ranking charts.', updateCadence: 'After salary schedules and benefits are published' }
  ]
};
