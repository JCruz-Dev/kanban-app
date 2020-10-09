export const header_options = [
  {
    icon: 'show_chart',
    name: 'REPORTING',
    items: [
      { name: 'Overview' },
      { name: 'LeadManagerFX', has_arrow: true },
      { name: 'CallTrackerFX', has_arrow: true },
      { name: 'CompanyTrackerFx' },
      { name: 'CPLdashboardFX', has_arrow: true },
      { name: 'ContentAnalyticsFX', has_arrow: true },
      { name: 'CustomExport' },
    ],
  },
  {
    icon: 'fingerprint',
    name: 'MARKETING & INTELLIGENCE',
    items: [
      { name: 'CompetitorSpyFX', has_arrow: true },
      { name: 'PredictionGeniusFX', has_arrow: true },
      { name: 'LeadNurtureFX', has_arrow: true },
      { name: 'ReviewBoostFX', has_arrow: true },
      { name: 'PersonalizeFX', has_arrow: true },
      { name: 'ClickBoostFX', has_arrow: true },
      { name: 'Audience Targeting', has_beta: true },
      { name: 'Local FX', has_arrow: true, has_beta: true },
    ],
  },
  {
    icon: 'layers',
    name: 'CONTENT',
    items: [
      { name: 'ContentGeniusFX', isActive: true },
      { name: 'Link Campaing History' },
      { name: 'DeepLearningFX', has_beta: true },
    ],
  },
  {
    icon: 'settings',
    name: 'CONFIGURATION',
    items: [{ name: 'Settings' }],
  },
];
export const itemsFromBackend = [
  { id: '145h87f', title: "Task 1", description: "https://blog.gesrepair.com/", tag: "longform", date: '09/15/201' },
  { id: "1h8uyl2", title: "Task 2", description: "https://blog.gesrepair.com/", tag: "longform", date: '09/15/201' },
  { id: "1plkxj", title: "Task 3", description: "https://blog.gesrepair.com/", tag: "longform", date: '09/15/201' },
  { id: "truvshr", title: "Task 4", description: "https://blog.gesrepair.com/", tag: "longform", date: '09/15/201' },
  { id: "9i8shj4", title: "Task 5", description: "https://blog.gesrepair.com/", tag: "longform", date: '09/15/201' }
];

export const columnsFromBackend = {
  ['1o9h87f']: {
    name: "To do",
    items: itemsFromBackend
  },
  ['a1q2we']: {
    name: "In Progress",
    items: []
  },
  ['00kduy']: {
    name: "Done",
    items: []
  }
};