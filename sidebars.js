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
            'api/app/api-app-new',
            'api/app/api-app-render',
            'api/app/api-app-resolve',
            'api/app/api-app-extensions',
            'api/app/api-app-extend',
            'api/app/api-app-filter',
            'api/app/api-app-map',
            'api/app/api-app-find',
            'api/app/api-app-get',
            'api/app/api-app-kget',
            'api/app/api-app-init',
            'api/app/api-app-features',
          ]
        },
        {
          type: 'category',
          label: 'Config',
          collapsed: true,
          items: [
            'api/config/api-config-from', 
            'api/config/api-config-fromYaml', 
            'api/config/api-config-fromJson', 
            'api/config/api-config-new', 
            'api/config/api-config-render', 
            'api/config/api-config-extend', 
            'api/config/api-config-override', 
            'api/config/api-config-get', 
            'api/config/api-config-is', 
          ],
        },
        {
          type: 'category',
          label: 'Context',
          collapsed: true,
          items: [
            'api/context/api-context-new', 
            'api/context/api-context-filter', 
            'api/context/api-context-find', 
            'api/context/api-context-extend', 
            'api/context/api-context-get', 
            'api/context/api-context-kget', 
            'api/context/api-context-has', 
            'api/context/api-context-khas', 
            'api/context/api-context-profile', 

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
            'api/feature/api-feature-render', 
            'api/feature/api-feature-resolve', 
            'api/feature/api-feature-extensions', 
            'api/feature/api-feature-extend',
            'api/feature/api-feature-overrides',
            'api/feature/api-feature-override',
            'api/feature/api-feature-configure',
            'api/feature/api-feature-filter',
            'api/feature/api-feature-map',
            'api/feature/api-feature-find',
            'api/feature/api-feature-get',
            'api/feature/api-feature-kget',
          ],
        },
        {
          type: 'category',
          label: 'Helpers',
          collapsed: true,
          items: [
            'api/helpers/api-helpers-new', 
          ],
        },
        {
          type: 'category',
          label: 'Manifest',
          collapsed: true,
          items: [
            'api/manifest/api-manifest-new', 
            'api/manifest/api-manifest-render', 
            'api/manifest/api-manifest-resolve',
            'api/manifest/api-manifest-extend',
            'api/manifest/api-manifest-override', 
            'api/manifest/api-manifest-overrides', 
            'api/manifest/api-manifest-configure',  
            'api/manifest/api-manifest-filter', 
            'api/manifest/api-manifest-map', 
            'api/manifest/api-manifest-find', 
            'api/manifest/api-manifest-from', 
            'api/manifest/api-manifest-get', 
            'api/manifest/api-manifest-kget', 
            'api/manifest/api-manifest-fromJson', 
            'api/manifest/api-manifest-fromYaml', 
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
        id: 'config', 
        label: 'Config',
      },
      {
        type: 'doc',
        id: 'features', 
        label: 'Features',
      },
      {
        type: 'doc',
        id: 'manifests', 
        label: 'Manifests',
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
