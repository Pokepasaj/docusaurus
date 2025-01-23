module.exports = {
  tutorialSidebar: [
    'intro', // Existing items
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started', 'setup'], // Existing items
    },
  ],
  konnSidebar: [
    {
      type: 'doc',
      id: 'konn-intro', // Corresponds to docs/konn-intro.md
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Konn Features',
      items: [
        'konn-feature1', // Corresponds to docs/konn-feature1.md
        'konn-feature2', // Corresponds to docs/konn-feature2.md
      ],
    },
  ],
};
