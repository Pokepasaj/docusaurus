module.exports = {
  
  konnSidebar: [
    {
      type: 'doc',
      id: 'konn-intro', // Existing document ID
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'konn-install', // Existing document ID
      label: 'Installation',
    },
    {
      type: 'category',
      label: 'Konn Features',
      items: [
        'konn-feature1',
        'konn-feature2', // This ID is now available
      ],
    },
  ],
};
