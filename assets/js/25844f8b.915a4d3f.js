"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6316],{4543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"api/feature/api-feature-filter","title":"filter","description":"Overview","source":"@site/docs/api/feature/filter.md","sourceDirName":"api/feature","slug":"/api/feature/api-feature-filter","permalink":"/docusaurus/api/feature/api-feature-filter","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/feature/filter.md","tags":[],"version":"current","frontMatter":{"id":"api-feature-filter","title":"filter"},"sidebar":"apiSidebar","previous":{"title":"configure","permalink":"/docusaurus/api/feature/api-feature-configure"},"next":{"title":"map","permalink":"/docusaurus/api/feature/api-feature-map"}}');var r=n(4848),l=n(8453),u=n(5537),s=n(9329);const i={id:"api-feature-filter",title:"filter"},o=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Usage Examples",id:"usage-examples",level:2}];function f(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"filter"})," function allows for applying a filter to the configurations of the feature, excluding configurations based on a custom condition."]}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"fn"})})," - (function) The filter function that defines which configurations to keep."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(t.p,{children:"The extended feature object with the filter applied to the configurations."}),"\n",(0,r.jsx)(t.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,r.jsxs)(u.A,{children:[(0,r.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"local feature = import '../../vendor/konn/feature.libsonnet';\n\nlocal testFeature = feature.new(\n[{\n    kind: 'Deployment',\n    metadata: {\n    name: 'nginx',\n    },\n}, {\n    kind: 'Deployment',\n    metadata: {\n    name: 'flask',\n    },\n}],\nfilter=function(ctx, config, props) config.get('metadata').name == 'flask'\n);\n\n{\nfilter_output: testFeature.render(),\n}\n"})})}),(0,r.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"filter_output:\n- kind: Deployment\n    metadata:\n    name: flask\n"})})}),(0,r.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n"filter_output": [\n    {\n        "kind": "Deployment",\n        "metadata": {\n            "name": "flask"\n        }\n    }\n  ]\n}\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>u});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var l=n(4848);function u(e){let{children:t,hidden:n,className:u}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,u),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(6540),r=n(4164),l=n(5627),u=n(6347),s=n(372),i=n(604),o=n(1861),c=n(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=f(e),[u,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,d]=h({queryString:n,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=o??m;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{v&&i(v)}),[v]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){let{className:t,block:n,selectedValue:a,selectValue:u,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),r=s[n].value;r!==a&&(o(t),u(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...l,className:(0,r.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:l}=e;const u=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:u.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>u,x:()=>s});var a=n(6540);const r={},l=a.createContext(r);function u(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:u(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);