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
    { id: 1, content: "First task" },
    { id: 2, content: "Second task" },
    { id: 3, content: "Third task" },
    { id: 4, content: "Fourth task" },
    { id: 5, content: "Fifth task" }
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