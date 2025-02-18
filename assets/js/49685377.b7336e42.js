"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2750],{8022:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"api/manifest/api-manifest-new","title":"new","description":"Overview","source":"@site/docs/api/manifest/new.md","sourceDirName":"api/manifest","slug":"/api/manifest/api-manifest-new","permalink":"/docusaurus/api/manifest/api-manifest-new","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/manifest/new.md","tags":[],"version":"current","frontMatter":{"id":"api-manifest-new","title":"new"},"sidebar":"apiSidebar","previous":{"title":"new","permalink":"/docusaurus/api/helpers/api-helpers-new"},"next":{"title":"render","permalink":"/docusaurus/api/manifest/api-manifest-render"}}');var s=t(4848),r=t(8453);const a={id:"api-manifest-new",title:"new"},o=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Usage Examples",id:"usage-examples",level:2}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"new"})," function creates a new manifest object. It initializes the manifest with a provided render function, props, filter, and map functions. This function sets up the context and resolves any defaults or properties before rendering the manifest."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"render"})})," - (function) A render function that defines how the manifest is generated. It accepts ctx and props as arguments and should return an array of config objects."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"props"})})," - (object) The properties used in the rendering process. This allows customization and overrides for the generated manifest."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"filter"})})," - (function) A function that filters the generated configurations. It receives ctx, config, and props as arguments and should return a boolean value."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"map"})})," - (function) A function that maps over the generated configurations, allowing modifications to each config. Receives ctx, config, and props as arguments."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"render default to an empty array"}),"\n",(0,s.jsx)(n.li,{children:"filter default function returns true (no filtering)."}),"\n",(0,s.jsx)(n.li,{children:"map default function returns the config unchanged."}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(n.p,{children:"Returns a new manifest object with the following structure:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"body"})})," - The result of the render function, containing the generated configurations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"configs"})})," - The resolved configurations from the resolve function."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"props"})})," - The properties passed to the function."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"args"})})," - Contains the render function, props, filter, and map functions for further customization."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);