"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[129],{1300:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"konn-intro","title":"Introduction to Konn","description":"Welcome to the Konn documentation!","source":"@site/docs/konn-intro.md","sourceDirName":".","slug":"/konn-intro","permalink":"/docusaurus/konn-intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/konn-intro.md","tags":[],"version":"current","frontMatter":{"id":"konn-intro","title":"Introduction to Konn"},"sidebar":"konnSidebar","next":{"title":"Installation","permalink":"/docusaurus/konn-install"}}');var i=o(4848),a=o(8453);const s={id:"konn-intro",title:"Introduction to Konn"},r=void 0,c={},l=[{value:"Description",id:"description",level:3},{value:"Key capabilities of the tool:",id:"key-capabilities-of-the-tool",level:3},{value:"Why Use Konn?",id:"why-use-konn",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",h3:"h3",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Welcome to the Konn documentation!"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image description",src:o(8512).A+"",width:"1024",height:"1024"})}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Konn is an open-source project which offer Jsonnet-based configuration management library that provides structured methods to create, transform, and manage Kubernetes manifests, JSON, and YAML configurations."}),"\n",(0,i.jsxs)(n.p,{children:["Prerequisites:\nMake sure you are introduced to jsonnet if you want a tutorial which will give you a solid foundation the below is recommended:\n",(0,i.jsx)(n.a,{href:"https://jsonnet.org/learning/tutorial.html",children:"https://jsonnet.org/learning/tutorial.html"})]}),"\n",(0,i.jsx)(n.p,{children:"About Jsonnet:\nJsonnet is a data templating language which comes from google and is used to introduce programing to your yaml/jsonnet files\nYou can use it to template and extend your kubernetes manifests."}),"\n",(0,i.jsx)(n.p,{children:"About Konn:\nKonn brings several advantages over plain Jsonnet, especially in the context of large-scale configuration management and feature-driven development"}),"\n",(0,i.jsx)(n.h3,{id:"key-capabilities-of-the-tool",children:"Key capabilities of the tool:"}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Modular and Composable Configuration: you can create manifests from objects, arrays, YAML, and JSON strings\n\u2022 allows you to define features and extensions in a modular way, making it easy to compose and reuse configuration logic across multiple projects."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"With plain Jsonnet, you would need to manually manage and compose multiple configurations, which can lead to redundant code and increased complexity as the system grows."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Profiles and Context-Aware Configuration:  makes it easy to define and manage different profiles (e.g., dev, stg, prd), allowing configurations to be tailored to each environment automatically."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"In plain Jsonnet, managing environment-specific configurations requires more boilerplate code and manual handling of different profiles or contexts."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Feature and Extension Composition: introduces the concept of features and extensions, which enables configuration logic to be composed and applied flexibly."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"While plain Jsonnet allows you to define functions and objects, the feature and extension model in Konn makes it much easier to modify and extend parts of the configuration based on different use cases, without repeating logic."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Dynamic Configuration Rendering : provides dynamic rendering of configurations based on profiles, context, and properties, making it ideal for scenarios where configurations need to adapt to    runtime conditions."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"In plain Jsonnet, you would need to manually manage this dynamic behavior, often requiring more verbose and less flexible code."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Simplified Overrides: you can easily override specific parts of your configuration (e.g., the name of resources) without affecting other parts, allowing for greater flexibility and less duplication."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"In plain Jsonnet, overriding specific properties may require more cumbersome logic to isolate and modify individual elements of a configuration."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u2022 Cleaner and More Declarative Approach:  focuses on being declarative, where you define the desired outcome, and it handles the complexity of how to achieve it through features and extensions."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Plain Jsonnet can be more imperative, requiring you to manually specify how configurations should be composed and adjusted in different scenarios."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"why-use-konn",children:"Why Use Konn?"}),"\n",(0,i.jsx)(n.p,{children:"Konn enhances the ability to write maintainable, reusable, and flexible configurations,\nespecially in complex environments where managing multiple profiles, features, and extensions is necessary.\nIt abstracts away much of the boilerplate and manual configuration management found in plain Jsonnet,\nmaking it easier to maintain and evolve your configuration over time."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8512:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/konn-3c238ff902840b4c9f0b7fae761860cd.jpg"},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>r});var t=o(6540);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);