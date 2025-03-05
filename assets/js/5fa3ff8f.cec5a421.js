"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9504],{9716:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"api/extensions/api-extensions-configure","title":"configure","description":"Overview","source":"@site/docs/api/extensions/configure.md","sourceDirName":"api/extensions","slug":"/api/extensions/api-extensions-configure","permalink":"/docusaurus/api/extensions/api-extensions-configure","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/extensions/configure.md","tags":[],"version":"current","frontMatter":{"id":"api-extensions-configure","title":"configure"},"sidebar":"apiSidebar","previous":{"title":"new","permalink":"/docusaurus/api/extensions/api-extensions-new"},"next":{"title":"extend","permalink":"/docusaurus/api/extensions/api-extensions-extend"}}');var r=t(4848),s=t(8453),i=t(5537),o=t(9329);const l={id:"api-extensions-configure",title:"configure"},u=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Cross-linking to Other API Docs",id:"cross-linking-to-other-api-docs",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"configure"})," function is an alias to ",(0,r.jsx)(n.a,{href:"api-extensions-override",children:"override"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"props"})})," - (Required) A function or an object that takes the current properties of the configuration and returns the modified properties. This allows dynamic configuration updates."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.p,{children:["Returns a new configuration with the updated properties, reflecting the changes made through the ",(0,r.jsx)(n.code,{children:"configure"})," function."]}),"\n",(0,r.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(o.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"local extension = import '../../vendor/konn/extension.libsonnet';\nlocal manifest = import '../../vendor/konn/manifest.libsonnet';\n\nlocal testManifest = manifest.new(\n  function(ctx, props) [\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: props.name_nginx,\n      },\n    },\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: props.name_flask,\n      },\n    },\n  ],\n  {\n    name_nginx: 'placeholder',\n    name_flask: 'placeholder',\n  }\n).configure(function(props) {\n  name_nginx: 'nginx-app',  // Overriding placeholders\n  name_flask: 'flask-app',\n});\n\ntestManifest.render()\n"})})}),(0,r.jsx)(o.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"- kind: Deployment\n  metadata:\n    name: nginx-app\n- kind: Deployment\n  metadata:\n    name: flask-app\n"})})}),(0,r.jsx)(o.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n   {\n      "kind": "Deployment",\n      "metadata": {\n         "name": "nginx-app"\n      }\n   },\n   {\n      "kind": "Deployment",\n      "metadata": {\n         "name": "flask-app"\n      }\n   }\n]\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"cross-linking-to-other-api-docs",children:"Cross-linking to Other API Docs"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/manifest/api-manifest-new",children:"manifest documentation"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var a=t(4164);const r={tabItem:"tabItem_Ymn6"};var s=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(6540),r=t(4164),s=t(5627),i=t(6347),o=t(372),l=t(604),u=t(1861),c=t(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[u,d]=h({queryString:t,groupId:r}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),v=(()=>{const e=u??f;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=t(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function b(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(u(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(6540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);