"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9401],{5454:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"api/extensions/api-extensions-selector","title":"selector","description":"Overview","source":"@site/docs/api/extensions/selector.md","sourceDirName":"api/extensions","slug":"/api/extensions/api-extensions-selector","permalink":"/docusaurus/api/extensions/api-extensions-selector","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/extensions/selector.md","tags":[],"version":"current","frontMatter":{"id":"api-extensions-selector","title":"selector"},"sidebar":"apiSidebar","previous":{"title":"render","permalink":"/docusaurus/api/extensions/api-extensions-render"},"next":{"title":"new","permalink":"/docusaurus/api/feature/api-feature-new"}}');var s=t(4848),r=t(8453),i=t(5537),o=t(9329);const l={id:"api-extensions-selector",title:"selector"},c=void 0,u={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Usage Examples",id:"usage-examples",level:2}];function m(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"selector"})," function filters and modifies existing Kubernetes manifests based on specific conditions. It enables selective modification of resources while maintaining the structure of the original manifest."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"render"})})," \u2013 A function that modifies selected configurations. It takes ",(0,s.jsx)(n.code,{children:"ctx"}),", ",(0,s.jsx)(n.code,{children:"config"}),", and ",(0,s.jsx)(n.code,{children:"props"})," as arguments and extends the metadata."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"selector"})})," \u2013 A function that determines which objects should be modified. It checks if a resource meets specific criteria, such as matching ",(0,s.jsx)(n.code,{children:"kind"})," or ",(0,s.jsx)(n.code,{children:"name"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"extends"})})," \u2013 The base manifest containing the resources to be filtered and modified."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(n.p,{children:"Returns an array of modified Kubernetes manifests."}),"\n",(0,s.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(o.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"local extension = import '../../vendor/konn/extension.libsonnet';\nlocal manifest = import '../../vendor/konn/manifest.libsonnet';\n\nlocal testManifest = manifest.new(function(ctx, props) [{\n  kind: 'Deployment',\n  metadata: {\n    name: 'nginx',\n  },\n}, {\n  kind: 'Deployment',\n  metadata: {\n    name: 'flask',\n  },\n}, {\n  kind: 'Deployment',\n  metadata: {\n    name: 'kong',\n  },\n}]);\n\nlocal testExtension = extension.new(\n  render=function(ctx, config, props) config {\n    metadata+: {\n      label: 'extended',\n    },\n  },\n  selector=function(ctx, config, props) config.is('Deployment', 'kong'),\n  extends=testManifest\n);\n\n{\n  output: testExtension.render(),\n}\n"})})}),(0,s.jsx)(o.A,{value:"yaml",label:"YAML Output",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"output:\n  - kind: Deployment\n    metadata:\n      name: nginx\n  - kind: Deployment\n    metadata:\n      name: flask\n  - kind: Deployment\n    metadata:\n      label: extended\n      name: kong\n"})})}),(0,s.jsx)(o.A,{value:"json",label:"JSON Output",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n   "output": [\n      {\n         "kind": "Deployment",\n         "metadata": {\n            "name": "nginx"\n         }\n      },\n      {\n         "kind": "Deployment",\n         "metadata": {\n            "name": "flask"\n         }\n      },\n      {\n         "kind": "Deployment",\n         "metadata": {\n            "label": "extended",\n            "name": "kong"\n         }\n      }\n   ]\n}\n'})})})]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(o.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"local extension = import '../../vendor/konn/extension.libsonnet';\nlocal manifest = import '../../vendor/konn/manifest.libsonnet';\n\nlocal testManifest = manifest.new(function(ctx, props) [{\n  kind: 'Deployment',\n  metadata: {\n    name: 'nginx',\n  },\n}, {\n  kind: 'Service',\n  metadata: {\n    name: 'nginx-service',\n  },\n}, {\n  kind: 'Deployment',\n  metadata: {\n    name: 'flask',\n  },\n}, {\n  kind: 'Service',\n  metadata: {\n    name: 'flask-service',\n  },\n}]);\n\nlocal serviceAnnotationExt = extension.new(\n  render=function(ctx, config, props) config {\n    metadata+: {\n      annotations+: {\n        'custom-annotation': 'added-via-extension',\n      },\n    },\n  },\n  selector=function(ctx, config, props) config.is('Service'),\n  extends=testManifest\n);\n\n{\n  output: serviceAnnotationExt.render(),\n}\n"})})}),(0,s.jsx)(o.A,{value:"yaml",label:"YAML Output",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"output:\n  - kind: Deployment\n    metadata:\n      name: nginx\n  - kind: Service\n    metadata:\n      annotations:\n        custom-annotation: added-via-extension\n      name: nginx-service\n  - kind: Deployment\n    metadata:\n      name: flask\n  - kind: Service\n    metadata:\n      annotations:\n        custom-annotation: added-via-extension\n      name: flask-service\n"})})}),(0,s.jsx)(o.A,{value:"json",label:"JSON Output",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n   "output": [\n      {\n         "kind": "Deployment",\n         "metadata": {\n            "name": "nginx"\n         }\n      },\n      {\n         "kind": "Service",\n         "metadata": {\n            "annotations": {\n               "custom-annotation": "added-via-extension"\n            },\n            "name": "nginx-service"\n         }\n      },\n      {\n         "kind": "Deployment",\n         "metadata": {\n            "name": "flask"\n         }\n      },\n      {\n         "kind": "Service",\n         "metadata": {\n            "annotations": {\n               "custom-annotation": "added-via-extension"\n            },\n            "name": "flask-service"\n         }\n      }\n   ]\n}\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var a=t(4164);const s={tabItem:"tabItem_Ymn6"};var r=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,i),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(6540),s=t(4164),r=t(5627),i=t(6347),o=t(372),l=t(604),c=t(1861),u=t(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=m(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=f({queryString:t,groupId:s}),[h,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),v=(()=>{const e=c??h;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,r]),tabValues:r}}var x=t(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function g(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==a&&(c(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=h(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,b.jsx)(g,{...n,...e}),(0,b.jsx)(j,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,b.jsx)(k,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(6540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);