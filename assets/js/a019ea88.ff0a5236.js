"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[76],{8993:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"manifests","title":"manifest","description":"Responsible for creating, processing, and transforming manifests.","source":"@site/docs/manifest.md","sourceDirName":".","slug":"/manifests","permalink":"/docusaurus/manifests","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/manifest.md","tags":[],"version":"current","frontMatter":{"id":"manifests","title":"manifest"},"sidebar":"tutorialSidebar","previous":{"title":"Features","permalink":"/docusaurus/features"}}');var t=s(4848),a=s(8453);const r={id:"manifests",title:"manifest"},o=void 0,c={},l=[{value:"Creating a Manifest",id:"creating-a-manifest",level:2},{value:"Rendering and Resolving Manifests",id:"rendering-and-resolving-manifests",level:2},{value:"Extending and Modifying Manifests",id:"extending-and-modifying-manifests",level:2},{value:"Querying Configs",id:"querying-configs",level:2},{value:"Examples",id:"examples",level:3}];function d(e){const n={h2:"h2",h3:"h3",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Responsible for creating, processing, and transforming manifests."}),"\n",(0,t.jsx)(n.p,{children:"Handles Kubernetes manifests efficiently.\nSupports Jsonnet-based templating.\nAllows dynamic filtering & transformation.\nMakes querying configs easy (get(), kget())."}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-manifest",children:"Creating a Manifest"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 from(source, props=",")\nConverts an input (source) into a manifest.\nAccepts:\nA renderable object (calls .render()).\nAn object (wraps it in an array).\nAn array (returns it directly).\nA manifest (returns as-is)."]}),"\n",(0,t.jsx)(n.p,{children:"Use case: Dynamically wrapping objects into manifests."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 fromYaml(yaml, props=",", filter, map, single, template)\nParses YAML strings into a manifest."]}),"\n",(0,t.jsx)(n.p,{children:"Use case: Converting Kubernetes manifests from YAML to Jsonnet."}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 fromJson(json, props=",", filter, map)\nSimilar to fromYaml(), but for JSON."]}),"\n",(0,t.jsx)(n.h2,{id:"rendering-and-resolving-manifests",children:"Rendering and Resolving Manifests"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 new(render, props, filter, map)\nCreates a new manifest instance which takes data from the brackets above"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 render\nCalls .resolve() and processes all configs.\nUses lib.renderConfigs() to generate final output."}),"\n",(0,t.jsx)(n.p,{children:"\u2022 resolve\nRuns the .render() function.\nConverts each object in the manifest into a config object (config.new()).\nApplies filtering (filter()) and transformation (map()).\nEnsures output is always an array.\nUse case: Processing and preparing Kubernetes manifests."}),"\n",(0,t.jsx)(n.h2,{id:"extending-and-modifying-manifests",children:"Extending and Modifying Manifests"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 extend(render, props, filter, map)\nReturns a new manifest with additional transformations.\nCalls the provided render() function on existing manifests.\nUse case: Applying global transformations."}),"\n",(0,t.jsx)(n.p,{children:"\u2022 override\nOverrides properties.\nSupports both objects and functions as overrides.\nAlias: configure()."}),"\n",(0,t.jsx)(n.p,{children:"\u2022 filter\nApplies a filter function to remove unwanted configs."}),"\n",(0,t.jsx)(n.p,{children:"\u2022 map\nTransforms each config using a function."}),"\n",(0,t.jsx)(n.h2,{id:"querying-configs",children:"Querying Configs"}),"\n",(0,t.jsx)(n.p,{children:"\u2022 find(fn)\nReturns the first config that matches the function."}),"\n",(0,t.jsx)(n.p,{children:"\u2022 get(path, matcher)\nRetrieves a config by a specific path."}),"\n",(0,t.jsx)(n.p,{children:"\u2022 kget(kind, name='')\nRetrieves a config by kind and metadata.name.\nUse case: Finding a specific Kubernetes resource in the manifest."}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(6540);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);