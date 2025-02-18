"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1001],{3277:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>u,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"api/manifest/api-manifest-map","title":"map","description":"","source":"@site/docs/api/manifest/map.md","sourceDirName":"api/manifest","slug":"/api/manifest/api-manifest-map","permalink":"/docusaurus/api/manifest/api-manifest-map","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/manifest/map.md","tags":[],"version":"current","frontMatter":{"id":"api-manifest-map","title":"map"},"sidebar":"apiSidebar","previous":{"title":"filter","permalink":"/docusaurus/api/manifest/api-manifest-filter"},"next":{"title":"find","permalink":"/docusaurus/api/manifest/api-manifest-find"}}');var n=a(4848),s=a(8453);a(5537),a(9329);const u={id:"api-manifest-map",title:"map"},i=void 0,l={},o=[];function c(e){return(0,n.jsx)(n.Fragment,{})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c()}},9329:(e,t,a)=>{a.d(t,{A:()=>u});a(6540);var r=a(4164);const n={tabItem:"tabItem_Ymn6"};var s=a(4848);function u(e){let{children:t,hidden:a,className:u}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,u),hidden:a,children:t})}},5537:(e,t,a)=>{a.d(t,{A:()=>k});var r=a(6540),n=a(4164),s=a(5627),u=a(6347),i=a(372),l=a(604),o=a(1861),c=a(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=p(e),[u,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[o,d]=m({queryString:a,groupId:n}),[b,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),v=(()=>{const e=o??b;return f({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,s]),tabValues:s}}var h=a(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(4848);function y(e){let{className:t,block:a,selectedValue:r,selectValue:u,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),n=i[a].value;n!==r&&(o(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...s,className:(0,n.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:s}=e;const u=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:u.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...t,...e}),(0,g.jsx)(w,{...t,...e})]})}function k(e){const t=(0,h.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},8453:(e,t,a)=>{a.d(t,{R:()=>u,x:()=>i});var r=a(6540);const n={},s=r.createContext(n);function u(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:u(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);