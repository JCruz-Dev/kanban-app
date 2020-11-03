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
  { id: '145h87f', title: "Shopping Form", description: "https://blog.gesrepair.com/", tag: "Longform", date: '09/15/201' },
  { id: '12hd7f', title: "Contact Form", description: "https://blog.gesrepair.com/", tag: "Longform", date: '09/15/201' },
  { id: "1h8uyl2", title: "Wakanda's History", description: "https://blog.gesrepair.com/", tag: "SEO article", date: '09/15/201' },
  { id: "1plkxj", title: "Tips for Developers", description: "https://blog.gesrepair.com/", tag: "Blog post", date: '09/15/201' },
  { id: "truvshr", title: "Meta tags for your site", description: "https://blog.gesrepair.com/", tag: "SEO article", date: '09/15/201' },
  { id: "9i8shj4", title: "IT management form", description: "https://blog.gesrepair.com/", tag: "Longform", date: '09/15/201' }
];

export const columnsFromBackend = {
  ['0o9h87f']: {
    name: "To do",
    items: itemsFromBackend
  },
  ['11q2we']: {
    name: "In Progress",
    items: []
  },
  ['20kduy']: {
    name: "Done",
    items: []
  }
};