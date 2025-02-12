"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[476],{9266:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"api/config/api-config-from","title":"from","description":"from","source":"@site/docs/api/config/from.md","sourceDirName":"api/config","slug":"/api/config/api-config-from","permalink":"/docusaurus/api/config/api-config-from","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/config/from.md","tags":[],"version":"current","frontMatter":{"id":"api-config-from","title":"from"},"sidebar":"apiSidebar","previous":{"title":"new","permalink":"/docusaurus/api/app/api-app-new"},"next":{"title":"fromYaml","permalink":"/docusaurus/api/config/api-config-fromYaml"}}');var t=o(4848),r=o(8453);const a={id:"api-config-from",title:"from"},s=void 0,c={},l=[{value:"from",id:"from",level:3}];function f(n){const e={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h3,{id:"from",children:"from"}),"\n",(0,t.jsx)(e.p,{children:"from is used for conversions, and every type has some way of converting a plane object into its own type, or if it's already of its own type, it will return it."}),"\n",(0,t.jsx)(e.p,{children:"If its a config, then it wont do it."}),"\n",(0,t.jsxs)(e.p,{children:["If you already have a config and you pass it into ",(0,t.jsx)(e.code,{children:"from"}),", it's just going to return the same thing."]}),"\n",(0,t.jsx)(e.p,{children:"It basically means you can use plain objects and functions anywhere throughout the code and it will automatically determine roughly what it should be."}),"\n",(0,t.jsxs)(e.admonition,{title:"FYI",type:"tip",children:[(0,t.jsx)(e.p,{children:"when it`s looking for from it will prioritize a render function and it will use it first."}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"local k = import 'konn/main.libsonnet';\n\nlocal a = {\n    type: 'config',\n};\n\nlocal b = {\n    render(ctx, props):: {\n    type: 'config',\n    },\n};\nlocal c = k.lib.config.from(b);\n\n\n{\n    a: a,\n    b: b,\n    c: c,\n}\n"})})]})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(f,{...n})}):f(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>a,x:()=>s});var i=o(6540);const t={},r=i.createContext(t);function a(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);