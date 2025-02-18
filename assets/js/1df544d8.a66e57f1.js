"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6363],{3931:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"api/config/api-config-fromJson","title":"fromJson","description":"Overview","source":"@site/docs/api/config/fromJson.md","sourceDirName":"api/config","slug":"/api/config/api-config-fromJson","permalink":"/docusaurus/api/config/api-config-fromJson","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/config/fromJson.md","tags":[],"version":"current","frontMatter":{"id":"api-config-fromJson","title":"fromJson"},"sidebar":"apiSidebar","previous":{"title":"fromYaml","permalink":"/docusaurus/api/config/api-config-fromYaml"},"next":{"title":"new","permalink":"/docusaurus/api/config/api-config-new"}}');var r=a(4848),s=a(8453),o=a(5537),i=a(9329);const l={id:"api-config-fromJson",title:"fromJson"},u=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Using props",id:"using-props",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["The fromJson function converts a JSON string into an equivalent Jsonnet object. It is similar to ",(0,r.jsx)(n.a,{href:"api-config-fromYaml",children:"fromYaml"}),"\nbut specifically handles JSON-formatted text."]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"json"})})," (string): A JSON-formatted string representing a configuration."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"props"})})," (object, optional): Key-value pairs used for templating within the JSON string."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["props defaults to ",(0,r.jsx)(n.code,{children:"{}"})]})}),"\n",(0,r.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.p,{children:"A config object derived from the JSON input, with placeholders resolved using props."}),"\n",(0,r.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,r.jsx)(n.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,r.jsx)(n.p,{children:"Convert a JSON string into a config object:"}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(i.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"local k = import 'konn/main.libsonnet';\nk.fromJson('{ \"kind\" : \"ConfigMap\"}')\n"})})}),(0,r.jsx)(i.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"body:\n- kind: ConfigMap\n"})})}),(0,r.jsx)(i.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n"body": [\n    {\n        "kind": "ConfigMap"\n    }\n]\n}\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"using-props",children:"Using props"}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(i.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'\nlocal k = import \'konn/main.libsonnet\';\nk.fromJson(\'{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "%(name)s"}}\',{\n    name: \'nginx\',\n})\n'})})}),(0,r.jsx)(i.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"body:\napiVersion: v1\nkind: Pod\nmetadata:\n    name: nginx\n"})})}),(0,r.jsx)(i.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "body": [\n     {\n        "apiVersion": "v1",\n        "kind": "Pod",\n        "metadata": {\n          "name": "nginx"\n        }\n     }\n  ]\n}\n'})})})]}),"\n",(0,r.jsx)(n.admonition,{title:"Use case",type:"tip",children:(0,r.jsx)(n.p,{children:"Using fromJson is useful when you have JSON-based configurations and need to transform them dynamically while maintaining JSON format."})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9329:(e,n,a)=>{a.d(n,{A:()=>o});a(6540);var t=a(4164);const r={tabItem:"tabItem_Ymn6"};var s=a(4848);function o(e){let{children:n,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,o),hidden:a,children:n})}},5537:(e,n,a)=>{a.d(n,{A:()=>w});var t=a(6540),r=a(4164),s=a(5627),o=a(6347),i=a(372),l=a(604),u=a(1861),c=a(8749);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:a}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function h(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=p(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[u,d]=f({queryString:a,groupId:r}),[h,g]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),b=(()=>{const e=u??h;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=a(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(4848);function x(e){let{className:n,block:a,selectedValue:t,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,a=l.indexOf(n),r=i[a].value;r!==t&&(u(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:s}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=h(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var t=a(6540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);