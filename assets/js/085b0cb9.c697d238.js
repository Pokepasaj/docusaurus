"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3690],{2196:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"lib","title":"lib","description":"This is a utility module that provides helper functions for working with configurations, manifests, and rendering logic.","source":"@site/docs/lib.md","sourceDirName":".","slug":"/lib","permalink":"/docusaurus/lib","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/lib.md","tags":[],"version":"current","frontMatter":{"id":"lib","title":"lib"}}');var s=t(4848),r=t(8453);const o={id:"lib",title:"lib"},a=void 0,l={},c=[{value:"Examples",id:"examples",level:3}];function d(e){const n={h3:"h3",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This is a utility module that provides helper functions for working with configurations, manifests, and rendering logic."}),"\n",(0,s.jsx)(n.p,{children:"This module supports feature rendering (feature.libsonnet) by providing functions for processing configs."}),"\n",(0,s.jsx)(n.p,{children:"It ensures that extensions, mappings, and filters work dynamically.\nFunctions like getPath() and resolveProps() help manage and override configurations smoothly."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 applyExtensions\nApplies a list of extensions to configurations.\nIterates over each config and applies all extensions in order."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 getPath\nRetrieves a nested value from an object using dot notation.\nIf the path doesn't exist, it returns the default value."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 isConfig\nChecks if an object is a valid config or manifest by verifying its type."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 isRenderable\nDetermines whether an object has a render() or resolve() function."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 mapConfigs\nApplies a transformation function (fn) to each configuration.\nExtends the config object with the provided function."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 renderConfigs\nIterates through the given configurations and renders them.\nFilters out null results."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 render\nCalls render() on a renderable object.\nUsed mainly for testing."}),"\n",(0,s.jsx)(n.p,{children:"\u2022 resolveProps\nMerges properties with default values.\nApplies any overrides."}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);