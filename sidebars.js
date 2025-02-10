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
  ],

  LearnSidebar: [
    {
      type: 'category',
      label: 'Konn Modules',
      items: [
        'app',
        'config', 
        'context',
        'extensions',
        'feature',
        'lib',
        'manifest',
        'util',
        'main',
      ],
    },
  ],
};
