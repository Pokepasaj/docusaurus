"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9967],{4982:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"konn-install","title":"Installation","description":"There will be a github link to konn here somewhere","source":"@site/docs/konn-install.md","sourceDirName":".","slug":"/konn-install","permalink":"/docusaurus/konn-install","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/konn-install.md","tags":[],"version":"current","frontMatter":{"id":"konn-install","title":"Installation"},"sidebar":"konnSidebar","previous":{"title":"Get Started","permalink":"/docusaurus/konn-intro"}}');var s=t(4848),i=t(8453);const r={id:"konn-install",title:"Installation"},l=void 0,a={},c=[{value:"There will be a github link to konn here somewhere",id:"there-will-be-a-github-link-to-konn-here-somewhere",level:3},{value:"Install the Jsonnet command line tool",id:"install-the-jsonnet-command-line-tool",level:2},{value:"Prerequisites for VScode",id:"prerequisites-for-vscode",level:2},{value:"Jsonnet Language Server",id:"jsonnet-language-server",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"there-will-be-a-github-link-to-konn-here-somewhere",children:"There will be a github link to konn here somewhere"}),"\n",(0,s.jsx)(n.h2,{id:"install-the-jsonnet-command-line-tool",children:"Install the Jsonnet command line tool"}),"\n",(0,s.jsx)(n.p,{children:"The Jsonnet git repo contains all necessary steps for the installation of jsonnet:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/google/jsonnet",children:"https://github.com/google/jsonnet"})}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"verify jsonnet is installed using"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"jsonnet -v\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites-for-vscode",children:"Prerequisites for VScode"}),"\n",(0,s.jsx)(n.h3,{id:"jsonnet-language-server",children:"Jsonnet Language Server"}),"\n",(0,s.jsx)(n.p,{children:"Plugin for Vscode"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=Grafana.vscode-jsonnet",children:"https://marketplace.visualstudio.com/items?itemName=Grafana.vscode-jsonnet"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"1."})," Create .vscode folder in your base directory and create the following files \u2192 settings.json \u2192 exetensions.json"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"2."})," populate them as follows\n\u2022 settings.json"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n  "jsonnet.languageServer.jpath": [\n    "./",\n    "./lib",  \n    "./vendor",\n    // you need to point to konn and/or other libsonnet you will be referring to here\n  ],\n  "jsonnet.languageServer.resolvePathsWithTanka": true,\n  "cSpell.words": [\n    "multisite"\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u2022 exetensions.json"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:' {\n  "recommendations": [\n    "grafana.vscode-jsonnet"\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"3."})," Go to extension in vscode and install Jsonnet Language Server\nMake sure you have a vendor folder in your base directory if you don`t create one and have konn inside of it (this can be change but keep in mind you need to change settings.json for your lib location)"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var o=t(6540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);