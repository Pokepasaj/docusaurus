"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4213],{4535:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"api/feature/api-feature-overrides","title":"overrides","description":"Overview","source":"@site/docs/api/feature/overrides.md","sourceDirName":"api/feature","slug":"/api/feature/api-feature-overrides","permalink":"/docusaurus/api/feature/api-feature-overrides","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/feature/overrides.md","tags":[],"version":"current","frontMatter":{"id":"api-feature-overrides","title":"overrides"},"sidebar":"apiSidebar","previous":{"title":"extend","permalink":"/docusaurus/api/feature/api-feature-extend"},"next":{"title":"override","permalink":"/docusaurus/api/feature/api-feature-override"}}');var a=r(4848),l=r(8453),s=r(5537),o=r(9329);const i={id:"api-feature-overrides",title:"overrides"},u=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Example",id:"usage-example",level:3}];function p(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"overrides"})," function is used to define custom properties that can supersede the original properties or extend them. This allows for greater flexibility in configuring features, enabling users to inject or modify configurations dynamically."]}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"props"})})," - The properties to override. This can either be an object containing key-value pairs of properties or a function that computes the overrides based on the current context (",(0,a.jsx)(n.code,{children:"props"}),")."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"The feature object with overridden properties."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Does not replace previously overridden values.\nIt merges new props with the existing overrides."})}),"\n",(0,a.jsx)(n.h3,{id:"usage-example",children:"Usage Example"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"local feature = import '../../vendor/konn/feature.libsonnet';\nlocal lib = import '../../vendor/konn/helpers.libsonnet';\nlocal manifest = import '../../vendor/konn/manifest.libsonnet';\n\nlocal testFeature = feature.new([\n  manifest.new(\n    function(ctx, props) [{\n      kind: 'Deployment',\n      metadata: {\n        name: props.name,\n        labels: {\n          label: props.label,\n        },\n      },\n    }],\n    {\n      name: 'default-name',\n      label: 'default-label',\n    }\n  ),\n]).override({\n  name: 'overridden-name',\n});\n\n{\n  Unchanged: testFeature,\n  custom_props: testFeature.overrides({ label: 'custom-label', name: 'this wont change override' }),\n}\n"})})}),(0,a.jsx)(o.A,{value:"yaml",label:"YAML Output",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"Unchanged:\n  body:\n    - kind: Deployment\n      metadata:\n        labels:\n          label: default-label\n        name: overridden-name\ncustom_props:\n  label: custom-label\n  name: overridden-name\n"})})}),(0,a.jsx)(o.A,{value:"json",label:"JSON Output",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n   "Unchanged": {\n      "body": [\n         {\n            "kind": "Deployment",\n            "metadata": {\n               "labels": {\n                  "label": "default-label"\n               },\n               "name": "overridden-name"\n            }\n         }\n      ]\n   },\n   "custom_props": {\n      "label": "custom-label",\n      "name": "overridden-name"\n   }\n}\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9329:(e,n,r)=>{r.d(n,{A:()=>s});r(6540);var t=r(4164);const a={tabItem:"tabItem_Ymn6"};var l=r(4848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:r,children:n})}},5537:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(6540),a=r(4164),l=r(5627),s=r(6347),o=r(372),i=r(604),u=r(1861),c=r(8749);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const a=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function h(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,l=p(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[u,d]=f({queryString:r,groupId:a}),[h,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),b=(()=>{const e=u??h;return m({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=r(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function x(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const n=e.currentTarget,r=i.indexOf(n),a=o[r].value;a!==t&&(u(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:l}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=h(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function w(e){const n=(0,v.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(6540);const a={},l=t.createContext(a);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);