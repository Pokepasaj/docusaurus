"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2428],{3599:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"api/app/api-app-render","title":"render","description":"Overview","source":"@site/docs/api/app/render.md","sourceDirName":"api/app","slug":"/api/app/api-app-render","permalink":"/docusaurus/api/app/api-app-render","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/app/render.md","tags":[],"version":"current","frontMatter":{"id":"api-app-render","title":"render"},"sidebar":"apiSidebar","previous":{"title":"new","permalink":"/docusaurus/api/app/api-app-new"},"next":{"title":"resolve","permalink":"/docusaurus/api/app/api-app-resolve"}}');var r=t(4848),l=t(8453),s=t(5537),u=t(9329);const o={id:"api-app-render",title:"render"},i=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Usage Examples",id:"usage-examples",level:2}];function p(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"config"})})," -"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(u.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"local app = import '../../vendor/konn/app.libsonnet';\n\nlocal myApp = app.new(\n  features=[\n    function(ctx, props) {\n      kind: 'Deployment',\n      metadata: {\n        name: 'nginx',\n      },\n    },\n  ],\n);\n\n{\n  output: myApp.render(),  // we use render just like anywhere else\n}\n"})})}),(0,r.jsx)(u.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"output:\n  - kind: Deployment\n    metadata:\n      name: nginx\n"})})}),(0,r.jsx)(u.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "output": [\n      {\n         "kind": "Deployment",\n         "metadata": {\n            "name": "nginx"\n         }\n      }\n   ]\n}\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var a=t(4164);const r={tabItem:"tabItem_Ymn6"};var l=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(6540),r=t(4164),l=t(5627),s=t(6347),u=t(372),o=t(604),i=t(1861),c=t(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,i.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=p(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[i,d]=h({queryString:t,groupId:r}),[f,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),b=(()=>{const e=i??f;return m({value:e,tabValues:l})?e:null})();(0,u.A)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=t(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:u}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),r=u[t].value;r!==a&&(i(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:u.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{o.push(e)},onKeyDown:d,onClick:c,...l,className:(0,r.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:l}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function w(e){const n=(0,v.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>u});var a=t(6540);const r={},l=a.createContext(r);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);