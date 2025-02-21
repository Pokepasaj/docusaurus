"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8442],{3236:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"api/context/api-context-kget","title":"kget","description":"Overview","source":"@site/docs/api/context/kget.md","sourceDirName":"api/context","slug":"/api/context/api-context-kget","permalink":"/docusaurus/api/context/api-context-kget","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/context/kget.md","tags":[],"version":"current","frontMatter":{"id":"api-context-kget","title":"kget"},"sidebar":"apiSidebar","previous":{"title":"get","permalink":"/docusaurus/api/context/api-context-get"},"next":{"title":"has","permalink":"/docusaurus/api/context/api-context-has"}}');var n=a(4848),l=a(8453),s=a(5537),u=a(9329);const o={id:"api-context-kget",title:"kget"},i=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Example",id:"usage-example",level:3}];function p(e){const t={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n",(0,n.jsx)(t.h3,{id:"usage-example",children:"Usage Example"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(u.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js"})})}),(0,n.jsx)(u.A,{value:"yaml",label:"YAML Output",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml"})})}),(0,n.jsx)(u.A,{value:"json",label:"JSON Output",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},9329:(e,t,a)=>{a.d(t,{A:()=>s});a(6540);var r=a(4164);const n={tabItem:"tabItem_Ymn6"};var l=a(4848);function s(e){let{children:t,hidden:a,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,s),hidden:a,children:t})}},5537:(e,t,a)=>{a.d(t,{A:()=>w});var r=a(6540),n=a(4164),l=a(5627),s=a(6347),u=a(372),o=a(604),i=a(1861),c=a(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,d]=h({queryString:a,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),v=(()=>{const e=i??f;return m({value:e,tabValues:l})?e:null})();(0,u.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=a(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(4848);function x(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:u}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),c=e=>{const t=e.currentTarget,a=o.indexOf(t),n=u[a].value;n!==r&&(i(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:u.map((e=>{let{value:t,label:a,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:c,...l,className:(0,n.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:l}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function k(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(t))}},8453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>u});var r=a(6540);const n={},l=r.createContext(n);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);