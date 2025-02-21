"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6105],{1872:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"api/config/api-config-fromYaml","title":"fromYaml","description":"Overview","source":"@site/docs/api/config/fromYaml.md","sourceDirName":"api/config","slug":"/api/config/api-config-fromYaml","permalink":"/docusaurus/api/config/api-config-fromYaml","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/config/fromYaml.md","tags":[],"version":"current","frontMatter":{"id":"api-config-fromYaml","title":"fromYaml"},"sidebar":"apiSidebar","previous":{"title":"from","permalink":"/docusaurus/api/config/api-config-from"},"next":{"title":"fromJson","permalink":"/docusaurus/api/config/api-config-fromJson"}}');var t=a(4848),s=a(8453),l=a(5537),i=a(9329);const o={id:"api-config-fromYaml",title:"fromYaml"},c=void 0,u={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Using Props",id:"using-props",level:3}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Using fromYaml for YAML-Based Object Creation"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.a,{href:"api-config-fromJson",children:"fromJson"}),",\nfromYaml function converts a YAML string into an equivalent Jsonnet object."]}),"\n",(0,t.jsx)(n.p,{children:"It ensures that the YAML input is a single document and provides a structured way to create configurations dynamically."}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"yaml"})})," (string): A YAML-formatted string representing a configuration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"props"})})," (object, optional): Additional properties merged with the configuration."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["props defaults to ",(0,t.jsx)(n.code,{children:"{}"})]})}),"\n",(0,t.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsx)(n.p,{children:"Returns a config object created from the YAML input."}),"\n",(0,t.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,t.jsx)(n.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(i.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'local k = import \'konn/main.libsonnet\';\nk.fromYaml(\'{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "flask"}}\')\n'})})}),(0,t.jsx)(i.A,{value:"yaml",label:"YAML Output",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"body:\n- apiVersion: v1\n  kind: Pod\n  metadata:\n    name: flask\n"})})}),(0,t.jsx)(i.A,{value:"json",label:"JSON Output",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n"body": [\n    {\n        "apiVersion": "v1",\n        "kind": "Pod",\n        "metadata": {\n            "name": "flask"\n        }\n    }\n  ]\n}\n'})})})]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(i.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"local k = import 'konn/main.libsonnet';\n\nlocal config = k.fromYaml(\n  'apiVersion: v1\\nkind: Pod\\nmetadata:\\n  name: flask\\nspec:\\n  containers:\\n    - name: flask-container\\n      image: python:3.9'\n);\nconfig\n"})})}),(0,t.jsx)(i.A,{value:"yaml",label:"YAML Output",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"body:\n  - apiVersion: v1\n    kind: Pod\n    metadata:\n      name: flask\n    spec:\n      containers:\n        - image: python:3.9\n          name: flask-container\n"})})}),(0,t.jsx)(i.A,{value:"json",label:"JSON Output",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n   "body": [\n      {\n         "apiVersion": "v1",\n         "kind": "Pod",\n         "metadata": {\n            "name": "flask"\n         },\n         "spec": {\n            "containers": [\n               {\n                  "image": "python:3.9",\n                  "name": "flask-container"\n               }\n            ]\n         }\n      }\n   ]\n}\n'})})})]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(i.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'local k = import \'konn/main.libsonnet\';\n\nlocal config = k.fromYaml(\n  \'{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "flask"}}\'\n);\n\n\nconfig {\n  spec+: {\n    containers: [\n      {\n        name: \'flask-container\',\n        image: \'python:3.9\',\n      },\n    ],\n  },\n}\n'})})}),(0,t.jsx)(i.A,{value:"yaml",label:"YAML Output",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"body:\n  - apiVersion: v1\n    kind: Pod\n    metadata:\n      name: flask\nspec:\n  containers:\n    - image: python:3.9\n      name: flask-container\n"})})}),(0,t.jsx)(i.A,{value:"json",label:"JSON Output",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n   "body": [\n      {\n         "apiVersion": "v1",\n         "kind": "Pod",\n         "metadata": {\n            "name": "flask"\n         }\n      }\n   ],\n   "spec": {\n      "containers": [\n         {\n            "image": "python:3.9",\n            "name": "flask-container"\n         }\n      ]\n   }\n}\n'})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"This approach is helpful when working with Kubernetes manifests or other YAML-based configurations, allowing seamless integration into your Jsonnet workflow."})}),"\n",(0,t.jsx)(n.h3,{id:"using-props",children:"Using Props"}),"\n",(0,t.jsx)(n.p,{children:"You can pass additional properties that will be resolved within the YAML structure."}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(i.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'\nlocal k = import \'konn/main.libsonnet\';\nk.fromYaml(\'{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "%(name)s"}}\',{\n    name: \'nginx\',\n})\n'})})}),(0,t.jsx)(i.A,{value:"yaml",label:"YAML Output",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"body:\napiVersion: v1\nkind: Pod\nmetadata:\n    name: nginx\n"})})}),(0,t.jsx)(i.A,{value:"json",label:"JSON Output",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "body": [\n     {\n        "apiVersion": "v1",\n        "kind": "Pod",\n        "metadata": {\n          "name": "nginx"\n        }\n     }\n  ]\n}\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},9329:(e,n,a)=>{a.d(n,{A:()=>l});a(6540);var r=a(4164);const t={tabItem:"tabItem_Ymn6"};var s=a(4848);function l(e){let{children:n,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,l),hidden:a,children:n})}},5537:(e,n,a)=>{a.d(n,{A:()=>y});var r=a(6540),t=a(4164),s=a(5627),l=a(6347),i=a(372),o=a(604),c=a(1861),u=a(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}}))}(a);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:a}=e;const t=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,s=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=h({queryString:a,groupId:t}),[f,g]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,u.Dv)(a);return[t,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:t}),b=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=a(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(4848);function j(e){let{className:n,block:a,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,a=o.indexOf(n),t=i[a].value;t!==r&&(c(n),l(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...s,className:(0,t.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function x(e){let{lazy:n,children:a,selectedValue:s}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,v.jsx)(j,{...n,...e}),(0,v.jsx)(x,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>i});var r=a(6540);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);