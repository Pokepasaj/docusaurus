"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3361],{4309:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"api/config/api-config-new","title":"new","description":"Table of Contents","source":"@site/docs/api/config/new.md","sourceDirName":"api/config","slug":"/api/config/api-config-new","permalink":"/docusaurus/api/config/api-config-new","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/config/new.md","tags":[],"version":"current","frontMatter":{"id":"api-config-new","title":"new"},"sidebar":"apiSidebar","previous":{"title":"fromJson","permalink":"/docusaurus/api/config/api-config-fromJson"},"next":{"title":"render","permalink":"/docusaurus/api/config/api-config-render"}}');var t=r(4848),l=r(8453),i=r(5537),s=r(9329);const o={id:"api-config-new",title:"new"},c="new",u={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Rendering multiple object by wrapping them in an array",id:"rendering-multiple-object-by-wrapping-them-in-an-array",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"new",children:(0,t.jsx)(n.code,{children:"new"})})}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#new",children:(0,t.jsx)(n.code,{children:"new"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#table-of-contents",children:"Table of Contents"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#overview",children:"Overview"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#parameters",children:"Parameters"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#return-value",children:"Return Value"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#usage-examples",children:"Usage Examples"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#rendering-multiple-object-by-wrapping-them-in-an-array",children:"Rendering multiple object by wrapping them in an array"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"new"})," function in Konn is used to create a new configuration instance by applying a rendering function and initial properties (",(0,t.jsx)(n.code,{children:"props"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"render"})})," - (function) A function that defines how the object should be rendered."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"props"})})," - (object) An object containing initial values."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsx)(n.p,{children:"The function returns an object with:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"body"})})," - The rendered output based on ",(0,t.jsx)(n.code,{children:"ctx"})," and ",(0,t.jsx)(n.code,{children:"props"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"props"})})," - The initial properties for reference."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"args"})})," - Stores the ",(0,t.jsx)(n.code,{children:"render"})," function and ",(0,t.jsx)(n.code,{children:"props"})," used."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"local k = import 'konn/main.libsonnet';\n\nk.lib.config.new(function(ctx,props){ \n  // the function is required removing it will result in an error\n  //RUNTIME ERROR: Unexpected type object, expected function\n\napiVersion: 'v1',\nkind: 'Service',\nmetadata: {\n  name: \"default\",\n  }\n})\n"})})}),(0,t.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"body:\n  apiVersion: v1\n  kind: Service\n  metadata:\n    name: default\n"})})}),(0,t.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n   "body": {\n      "apiVersion": "v1",\n      "kind": "Service",\n      "metadata": {\n         "name": "default"\n      }\n   }\n}\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"rendering-multiple-object-by-wrapping-them-in-an-array",children:"Rendering multiple object by wrapping them in an array"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"local k = import 'konn/main.libsonnet';\n\nk.lib.config.new(\n  function(ctx, props)\n    [\n      {\n        kind: 'Deployment',\n        metadata: {\n          name: 'nginx',\n        },\n      },\n      {\n        kind: 'Deployment',\n        metadata: {\n          name: 'flask',\n        },\n      },\n    ])\n"})})}),(0,t.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"body:\n  - kind: Deployment\n    metadata:\n      name: nginx\n  - kind: Deployment\n    metadata:\n      name: flask\n"})})}),(0,t.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n   "body": [\n      {\n         "kind": "Deployment",\n         "metadata": {\n            "name": "nginx"\n         }\n      },\n      {\n         "kind": "Deployment",\n         "metadata": {\n            "name": "flask"\n         }\n      }\n   ]\n}\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9329:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var a=r(4164);const t={tabItem:"tabItem_Ymn6"};var l=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,i),hidden:r,children:n})}},5537:(e,n,r)=>{r.d(n,{A:()=>y});var a=r(6540),t=r(4164),l=r(5627),i=r(6347),s=r(372),o=r(604),c=r(1861),u=r(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,l=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:r,groupId:t}),[f,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,u.Dv)(r);return[t,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:t}),x=(()=>{const e=c??f;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=r(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(4848);function g(e){let{className:n,block:r,selectedValue:a,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),t=s[r].value;t!==a&&(c(n),i(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...l,className:(0,t.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:l}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function w(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,j.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var a=r(6540);const t={},l=a.createContext(t);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);