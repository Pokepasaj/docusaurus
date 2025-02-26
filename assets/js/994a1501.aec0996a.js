"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[791],{155:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"api/app/api-app-extend","title":"extend","description":"Table of Contents","source":"@site/docs/api/app/extend.md","sourceDirName":"api/app","slug":"/api/app/api-app-extend","permalink":"/docusaurus/api/app/api-app-extend","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/app/extend.md","tags":[],"version":"current","frontMatter":{"id":"api-app-extend","title":"extend"},"sidebar":"apiSidebar","previous":{"title":"extensions","permalink":"/docusaurus/api/app/api-app-extensions"},"next":{"title":"filter","permalink":"/docusaurus/api/app/api-app-filter"}}');var r=t(4848),l=t(8453),i=t(5537),s=t(9329);const o={id:"api-app-extend",title:"extend"},c="extend",d={},u=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Examples",id:"usage-examples",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"extend",children:(0,r.jsx)(n.code,{children:"extend"})})}),"\n",(0,r.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#extend",children:(0,r.jsx)(n.code,{children:"extend"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#table-of-contents",children:"Table of Contents"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#overview",children:"Overview"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#parameters",children:"Parameters"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#return-value",children:"Return Value"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#usage-examples",children:"Usage Examples"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Creates a new application definition by extending an existing one. It enables the addition of configurations, properties, profiles, and extensions while maintaining the original structure."}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"features"})})," (",(0,r.jsx)(n.code,{children:"array"}),", ",(0,r.jsx)(n.code,{children:"default"})," ",(0,r.jsx)(n.code,{children:"[]"}),") - Additional features to be merged with the existing ones."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"props"})})," (",(0,r.jsx)(n.code,{children:"object"}),", ",(0,r.jsx)(n.code,{children:"default"})," ",(0,r.jsx)(n.code,{children:"{}"}),") - Additional properties to be included in the extended application."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"profiles"})})," (",(0,r.jsx)(n.code,{children:"object"}),", ",(0,r.jsx)(n.code,{children:"default"})," ",(0,r.jsx)(n.code,{children:"{}"}),") - Additional profiles that define different variations of the application."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"extensions"})})," (",(0,r.jsx)(n.code,{children:"array"}),", ",(0,r.jsx)(n.code,{children:"default"})," ",(0,r.jsx)(n.code,{children:"[]"}),") - Additional extensions that modify or enhance the application behavior."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"filter"})})," (",(0,r.jsx)(n.code,{children:"function"}),", ",(0,r.jsx)(n.code,{children:"default"})," ",(0,r.jsx)(n.code,{children:"true"}),") - A function that determines whether a configuration should be included in the final output."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"map"})})," (",(0,r.jsx)(n.code,{children:"function"}),", ",(0,r.jsx)(n.code,{children:"default"})," ",(0,r.jsx)(n.code,{children:"identity function"}),") - A function that modifies each configuration before rendering."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Returns a new application manifest object that includes the extended properties, features, and configurations."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"local app = import '../../vendor/konn/app.libsonnet';\nlocal config = import '../../vendor/konn/config.libsonnet';\n\nlocal myApp = app.new(\n  features=[\n    function(ctx, props) {\n      kind: 'Deployment',\n      metadata: {\n        name: 'nginx',\n      },\n    },\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: 'flask',\n      },\n    },\n  ],\n).extend(\n  [\n    config.new(\n      function(ctx, props) {\n        kind: 'Deployment',\n        metadata: {\n          name: props.name,\n        },\n      },\n    ),\n  ],\n  {\n    name: 'kong',\n  }\n);\n{\n  output: myApp.resolve(),\n}\n"})})}),(0,r.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"output:\n  - body:\n      kind: Deployment\n      metadata:\n        name: nginx\n  - body:\n      kind: Deployment\n      metadata:\n        name: flask\n  - body:\n      kind: Deployment\n      metadata:\n        name: kong\n"})})}),(0,r.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "output": [\n      {\n         "body": {\n            "kind": "Deployment",\n            "metadata": {\n               "name": "nginx"\n            }\n         }\n      },\n      {\n         "body": {\n            "kind": "Deployment",\n            "metadata": {\n               "name": "flask"\n            }\n         }\n      },\n      {\n         "body": {\n            "kind": "Deployment",\n            "metadata": {\n               "name": "kong"\n            }\n         }\n      }\n   ]\n}\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var a=t(4164);const r={tabItem:"tabItem_Ymn6"};var l=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>k});var a=t(6540),r=t(4164),l=t(5627),i=t(6347),s=t(372),o=t(604),c=t(1861),d=t(8749);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=p(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[c,u]=f({queryString:t,groupId:r}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),b=(()=>{const e=c??x;return h({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=t(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),r=s[t].value;r!==a&&(c(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{o.push(e)},onKeyDown:u,onClick:d,...l,className:(0,r.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:l}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(6540);const r={},l=a.createContext(r);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);