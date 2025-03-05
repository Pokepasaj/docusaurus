"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9573],{1277:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>u,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"api/app/api-app-kget","title":"kget","description":"Overview","source":"@site/docs/api/app/kget.md","sourceDirName":"api/app","slug":"/api/app/api-app-kget","permalink":"/docusaurus/api/app/api-app-kget","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/app/kget.md","tags":[],"version":"current","frontMatter":{"id":"api-app-kget","title":"kget"},"sidebar":"apiSidebar","previous":{"title":"get","permalink":"/docusaurus/api/app/api-app-get"},"next":{"title":"init","permalink":"/docusaurus/api/app/api-app-init"}}');var r=a(4848),l=a(8453),s=a(5537),i=a(9329);const u={id:"api-app-kget",title:"kget"},o=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Examples",id:"usage-examples",level:2}];function p(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Searches for a Kubernetes resource in the manifest based on its kind and metadata name."}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"kind"})})," - (string) The Kubernetes resource type (e.g., ",(0,r.jsx)(n.code,{children:"Deployment"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"name"})})," - (string) The metadata name of the resource."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Returns the first configuration object that matches the specified kind and name, or ",(0,r.jsx)(n.code,{children:"null"})," if not found."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"local app = import '../../vendor/konn/app.libsonnet';\n\nlocal myApp = app.new([\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: 'nginx',\n      },\n    },\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: 'flask',\n      },\n    },\n  ]);\n\nmyApp.kget('Deployment', 'flask')\n"})})}),(0,r.jsx)(i.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"body:\n  kind: Deployment\n  metadata:\n    name: flask\n"})})}),(0,r.jsx)(i.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "body": {\n      "kind": "Deployment",\n      "metadata": {\n         "name": "flask"\n      }\n   }\n}\n'})})})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"local app = import '../../vendor/konn/app.libsonnet';\n\nlocal myApp = app.new([\n  {\n    kind: 'Service',\n    metadata: {\n      name: 'nginx-svc',\n    },\n  },\n  {\n    kind: 'Service',\n    metadata: {\n      name: 'flask-svc',\n    },\n  },\n]);\n\nmyApp.kget('Service', 'flask-svc')\n"})})}),(0,r.jsx)(i.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"body:\n  kind: Service\n  metadata:\n    name: flask-svc\n"})})}),(0,r.jsx)(i.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "body": {\n      "kind": "Service",\n      "metadata": {\n         "name": "flask-svc"\n      }\n   }\n}\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9329:(e,n,a)=>{a.d(n,{A:()=>s});a(6540);var t=a(4164);const r={tabItem:"tabItem_Ymn6"};var l=a(4848);function s(e){let{children:n,hidden:a,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,s),hidden:a,children:n})}},5537:(e,n,a)=>{a.d(n,{A:()=>y});var t=a(6540),r=a(4164),l=a(5627),s=a(6347),i=a(372),u=a(604),o=a(1861),c=a(8749);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:a}=e;const r=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,u.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,l=p(e),[s,u]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[o,d]=h({queryString:a,groupId:r}),[f,v]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,c.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=o??f;return m({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{b&&u(b)}),[b]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=a(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(4848);function x(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),c=e=>{const n=e.currentTarget,a=u.indexOf(n),r=i[a].value;r!==t&&(o(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;n=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;n=u[a]??u[u.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{u.push(e)},onKeyDown:d,onClick:c,...l,className:(0,r.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:l}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function k(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function y(e){const n=(0,v.A)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>i});var t=a(6540);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);