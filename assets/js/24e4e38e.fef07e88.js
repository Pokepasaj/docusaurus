"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1027],{4555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"api/extensions/api-extensions-extend","title":"extend","description":"Overview","source":"@site/docs/api/extensions/extend.md","sourceDirName":"api/extensions","slug":"/api/extensions/api-extensions-extend","permalink":"/docusaurus/api/extensions/api-extensions-extend","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/extensions/extend.md","tags":[],"version":"current","frontMatter":{"id":"api-extensions-extend","title":"extend"},"sidebar":"apiSidebar","previous":{"title":"configure","permalink":"/docusaurus/api/extensions/api-extensions-configure"},"next":{"title":"apply","permalink":"/docusaurus/api/extensions/api-extensions-apply"}}');var r=t(4848),s=t(8453),o=t(5537),i=t(9329);const l={id:"api-extensions-extend",title:"extend"},u=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Examples",id:"usage-examples",level:2}];function p(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"extend"})," function is used to modify or extend an existing configuration. It allows you to add new configurations, or change existing configurations, by applying new logic on top of a base configuration. This function is useful for composing multiple configurations or applying reusable extensions."]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"render"})})," - (Required) A function that defines how the configuration is modified or extended. The render function takes in the ",(0,r.jsx)(n.code,{children:"ctx"})," (context), the ",(0,r.jsx)(n.code,{children:"config"})," (existing configuration), and the ",(0,r.jsx)(n.code,{children:"props"})," (properties passed to the extension) and returns the modified configuration."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.p,{children:["Returns a new configuration object that includes the extended configuration, modified according to the logic in the ",(0,r.jsx)(n.code,{children:"render"})," function."]}),"\n",(0,r.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(i.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"local ext = import '../../vendor/konn/extension.libsonnet';\n\nlocal baseExt = ext.new([\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: 'nginx',\n      },\n    },\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: 'flask',\n      },\n    },\n  ],\n).extend(\n  render=function(ctx, config, props)\n\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: 'kong',\n      },\n    });\n\nbaseExt.render()\n"})})}),(0,r.jsx)(i.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"output:\n  kind: Deployment\n  metadata:\n    name: kong\n"})})}),(0,r.jsx)(i.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "output": {\n      "kind": "Deployment",\n      "metadata": {\n         "name": "kong"\n      }\n   }\n}\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var a=t(4164);const r={tabItem:"tabItem_Ymn6"};var s=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(6540),r=t(4164),s=t(5627),o=t(6347),i=t(372),l=t(604),u=t(1861),c=t(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[u,d]=f({queryString:t,groupId:r}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),b=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=t(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==a&&(u(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(6540);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);