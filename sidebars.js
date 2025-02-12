//sidebar.js
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
    apiSidebar: [
      {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items:[
        {
          type: 'category',
          label: 'App',
          collapsed: true,
          items: [
            'api/app/api-app-new'
          ]
        },
        {
          type: 'category',
          label: 'Config',
          collapsed: true,
          items: [
            'api/config/api-config-new', 
          ],
        },
        {
          type: 'category',
          label: 'Context',
          collapsed: true,
          items: [
            'api/context/api-context-new', 
          ],
        },
        {
          type: 'category',
          label: 'Extensions',
          collapsed: true,
          items: [
            'api/extensions/api-extensions-new', 
          ],
        },
        {
          type: 'category',
          label: 'Feature',
          collapsed: true,
          items: [
            'api/feature/api-feature-new', 
          ],
        },
        {
          type: 'category',
          label: 'Helper',
          collapsed: true,
          items: [
            'api/helper/api-helper-new', 
          ],
        },
        {
          type: 'category',
          label: 'Manifest',
          collapsed: true,
          items: [
            'api/manifest/api-manifest-new', 
          ],
        },
        {
          type: 'category',
          label: 'util',
          collapsed: true,  
          items: [
            'api/util/api-util-new', 
          ],
        },
      ],
      },
    ],

    tutorialSidebar: [
      {
        type: 'doc',
        id: 'config', // Existing document ID
        label: 'placeholder',
      },
    ],
    // api: [
    //   {
    //     type: 'category',
    //     label: 'API Reference',
    //     items: [
    //       {
    //         type: 'doc',
    //         id: 'app', 
    //         label: 'app',
    //       },
         
    //     ],
    //   },
    // ],
};
