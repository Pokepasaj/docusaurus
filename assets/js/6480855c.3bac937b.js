"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6052],{6592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"api/feature/api-feature-find","title":"find","description":"Overview","source":"@site/docs/api/feature/find.md","sourceDirName":"api/feature","slug":"/api/feature/api-feature-find","permalink":"/docusaurus/api/feature/api-feature-find","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/feature/find.md","tags":[],"version":"current","frontMatter":{"id":"api-feature-find","title":"find"},"sidebar":"apiSidebar","previous":{"title":"map","permalink":"/docusaurus/api/feature/api-feature-map"},"next":{"title":"get","permalink":"/docusaurus/api/feature/api-feature-get"}}');var r=t(4848),s=t(8453),u=t(5537),l=t(9329);const i={id:"api-feature-find",title:"find"},o=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Usage Examples",id:"usage-examples",level:2}];function f(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"find"})," function searches through the configurations and returns the first match based on a custom condition."]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"fn"})})," - (function) The function that defines the condition to match configurations."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.p,{children:"The first matching configuration found."}),"\n",(0,r.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,r.jsxs)(u.A,{children:[(0,r.jsx)(l.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"local feature = import '../../vendor/konn/feature.libsonnet';\n\nlocal testFeature = feature.new(\n  [{\n    kind: 'Service',\n    metadata: {\n      name: 'nginx',\n    },\n  }, {\n    kind: 'Deployment',\n    metadata: {\n      name: 'flask',\n    },\n  }]\n);\n\n// Using `find` to get the first Deployment\n{\n  found_config: testFeature.find(\n    function(ctx, config, props) config.get('kind') == 'Deployment'\n  ).render(),\n}\n"})})}),(0,r.jsx)(l.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"found_config:\n  kind: Deployment\n  metadata:\n    name: flask\n"})})}),(0,r.jsx)(l.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "found_config": {\n      "kind": "Deployment",\n      "metadata": {\n         "name": "flask"\n      }\n   }\n}\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>u});t(6540);var a=t(4164);const r={tabItem:"tabItem_Ymn6"};var s=t(4848);function u(e){let{children:n,hidden:t,className:u}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,u),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(6540),r=t(4164),s=t(5627),u=t(6347),l=t(372),i=t(604),o=t(1861),c=t(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,u.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=f(e),[u,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[o,d]=h({queryString:t,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),v=(()=>{const e=o??m;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:u,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==a&&(o(n),u(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const u=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=u.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:u.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>u,x:()=>l});var a=t(6540);const r={},s=a.createContext(r);function u(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:u(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);