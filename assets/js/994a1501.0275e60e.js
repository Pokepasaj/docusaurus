"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[791],{155:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"api/app/api-app-extend","title":"extend","description":"Overview","source":"@site/docs/api/app/extend.md","sourceDirName":"api/app","slug":"/api/app/api-app-extend","permalink":"/docusaurus/api/app/api-app-extend","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/app/extend.md","tags":[],"version":"current","frontMatter":{"id":"api-app-extend","title":"extend"},"sidebar":"apiSidebar","previous":{"title":"extensions","permalink":"/docusaurus/api/app/api-app-extensions"},"next":{"title":"filter","permalink":"/docusaurus/api/app/api-app-filter"}}');var l=a(4848),i=a(8453),r=a(5537),s=a(9329);const o={id:"api-app-extend",title:"extend"},p=void 0,d={},c=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Example with features",id:"example-with-features",level:3},{value:"feature documentation.",id:"feature-documentation",level:4},{value:"Example with props",id:"example-with-props",level:3},{value:"Example with profiles",id:"example-with-profiles",level:3},{value:"Example with extensions",id:"example-with-extensions",level:3},{value:"extensions documentation",id:"extensions-documentation",level:4},{value:"feature documentation.",id:"feature-documentation-1",level:4},{value:"Example with filter",id:"example-with-filter",level:3},{value:"Example with map",id:"example-with-map",level:3},{value:"Cross-linking to Other API Docs",id:"cross-linking-to-other-api-docs",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,l.jsx)(n.p,{children:"Creates a new application definition by extending an existing one. It enables the addition of configurations, properties, profiles, and extensions while maintaining the original structure."}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"features"})})," (",(0,l.jsx)(n.code,{children:"array"}),", ",(0,l.jsx)(n.code,{children:"default"})," ",(0,l.jsx)(n.code,{children:"[]"}),") - Additional features to be merged with the existing ones. See ",(0,l.jsx)(n.a,{href:"/api/app/api-app-features",children:"features"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"props"})})," (",(0,l.jsx)(n.code,{children:"object"}),", ",(0,l.jsx)(n.code,{children:"default"})," ",(0,l.jsx)(n.code,{children:"{}"}),") - Additional properties to be included in the extended application. See ",(0,l.jsx)(n.a,{href:"/api/app/api-app-new#example-with-props",children:"props"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"profiles"})})," (",(0,l.jsx)(n.code,{children:"object"}),", ",(0,l.jsx)(n.code,{children:"default"})," ",(0,l.jsx)(n.code,{children:"{}"}),") - Additional profiles that define different variations of the application. See ",(0,l.jsx)(n.a,{href:"/api/app/api-app-new#example-with-profiles",children:"profiles"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"extensions"})})," (",(0,l.jsx)(n.code,{children:"array"}),", ",(0,l.jsx)(n.code,{children:"default"})," ",(0,l.jsx)(n.code,{children:"[]"}),") - Additional extensions that modify or enhance the application behavior. See ",(0,l.jsx)(n.a,{href:"/api/app/api-app-extensions",children:"extensions"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"filter"})})," (",(0,l.jsx)(n.code,{children:"function"}),", ",(0,l.jsx)(n.code,{children:"default"})," ",(0,l.jsx)(n.code,{children:"true"}),") - A function that determines whether a configuration should be included in the final output. See [filter]/api/app/(api-app-filter)."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"map"})})," (",(0,l.jsx)(n.code,{children:"function"}),", ",(0,l.jsx)(n.code,{children:"default"})," ",(0,l.jsx)(n.code,{children:"identity function"}),") - A function that modifies each configuration before rendering. See ",(0,l.jsx)(n.a,{href:"/api/app/api-app-map",children:"map"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Returns a new application manifest object that includes the extended properties, features, and configurations."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,l.jsxs)(n.h3,{id:"example-with-features",children:["Example with ",(0,l.jsx)(n.a,{href:"/api/app/api-app-features",children:"features"})]}),"\n",(0,l.jsxs)(n.h4,{id:"feature-documentation",children:[(0,l.jsx)(n.a,{href:"/api/feature/api-feature-new",children:"feature documentation"}),"."]}),"\n",(0,l.jsxs)(r.A,{children:[(0,l.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"local app = import '../../vendor/konn/app.libsonnet';\nlocal feature = import '../../vendor/konn/feature.libsonnet';\n\nlocal baseApp = app.new(\n  features=[\n    feature.new([\n      function(ctx, props) {\n        kind: 'Deployment',\n        metadata: {\n          name: props.name,\n        },\n      },\n    ]),\n  ],\n  props={\n    name: 'example-app',\n  }\n);\n\nlocal extendedApp = baseApp.extend(\n  [\n    feature.new([\n      function(ctx, props) {\n        kind: 'Service',\n        metadata: {\n          name: props.name,\n        },\n      },\n    ]),\n  ]);\n\nextendedApp.resolve()\n"})})}),(0,l.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"- kind: Deployment\n  metadata:\n    name: example-app\n- kind: Service\n  metadata:\n    name: example-app\n"})})}),(0,l.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n   {\n      "kind": "Deployment",\n      "metadata": {\n         "name": "example-app"\n      }\n   },\n   {\n      "kind": "Service",\n      "metadata": {\n         "name": "example-app"\n      }\n   }\n]\n'})})})]}),"\n",(0,l.jsx)(n.h3,{id:"example-with-props",children:"Example with props"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/api/feature/api-feature-new",children:"feature documentation"})}),"\n",(0,l.jsxs)(r.A,{children:[(0,l.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"local app = import '../../vendor/konn/app.libsonnet';\nlocal feature = import '../../vendor/konn/feature.libsonnet';\n\nlocal baseApp = app.new([\n    ([\n       function(ctx, props) {\n         kind: 'Deployment',\n         metadata: {\n           name: props.name,\n         },\n         spec: {\n           replicas: props.replicas,\n         },\n       },\n     ]),\n  ],\n  props={\n    name: 'example-app',\n    replicas: 3,\n  }\n);\nlocal extendedApp = baseApp.extend();\n\nextendedApp.resolve()\n\n"})})}),(0,l.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"- kind: Deployment\n  metadata:\n    name: example-app\n  spec:\n    replicas: 3\n"})})}),(0,l.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n   {\n      "kind": "Deployment",\n      "metadata": {\n         "name": "example-app"\n      },\n      "spec": {\n         "replicas": 3\n      }\n   }\n]\n'})})})]}),"\n",(0,l.jsx)(n.h3,{id:"example-with-profiles",children:"Example with profiles"}),"\n",(0,l.jsxs)(n.p,{children:["Also an example using profiles can be found ",(0,l.jsx)(n.a,{href:"/api/app/api-app-init#adding-envs",children:"here"})]}),"\n",(0,l.jsxs)(r.A,{children:[(0,l.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"local app = import '../../vendor/konn/app.libsonnet';\nlocal extension = import '../../vendor/konn/extension.libsonnet';\nlocal feature = import '../../vendor/konn/feature.libsonnet';\n\nlocal ext = extension.new(\n  function(ctx, target, props) target {\n    metadata+: {\n      profile: ctx.profile(),\n    },\n  },\n);\nlocal baseApp = app.new(\n  profiles={\n    dev: {\n      name: 'dev-deployment',\n    },\n    prd: {\n      name: 'prd-deployment',\n    },\n  },\n  features=[\n    feature.new([\n      function(ctx, props) {\n        kind: 'Deployment',\n        metadata: {\n          name: 'nginx',\n        },\n      },\n    ], extensions=[ext]),\n  ]);\nbaseApp.init(profile='dev')\n"})})}),(0,l.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"- kind: Deployment\n  metadata:\n    name: nginx\n    profile: dev\n"})})}),(0,l.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n   {\n      "kind": "Deployment",\n      "metadata": {\n         "name": "nginx",\n         "profile": "dev"\n      }\n   }\n]\n'})})})]}),"\n",(0,l.jsx)(n.h3,{id:"example-with-extensions",children:"Example with extensions"}),"\n",(0,l.jsx)(n.h4,{id:"extensions-documentation",children:(0,l.jsx)(n.a,{href:"/api/extensions/api-extensions-new",children:"extensions documentation"})}),"\n",(0,l.jsxs)(n.h4,{id:"feature-documentation-1",children:[(0,l.jsx)(n.a,{href:"/api/feature/api-feature-new",children:"feature documentation"}),"."]}),"\n",(0,l.jsxs)(r.A,{children:[(0,l.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"local app = import '../../vendor/konn/app.libsonnet';\nlocal extension = import '../../vendor/konn/extension.libsonnet';\nlocal feature = import '../../vendor/konn/feature.libsonnet';\n\nlocal addLabelsAndReplicas = extension.new(\n  function(ctx, target, props) target {\n    metadata+: {\n      labels: props.labels,\n    },\n    spec+: {\n      replicas: props.replicas,\n    },\n  },\n  {\n    labels: 'default-label',\n    replicas: 1,\n  }\n);\n\nlocal baseApp = app.new([\n    ([\n       function(ctx, props) {\n         kind: 'Deployment',\n         metadata: {\n           name: props.name,\n         },\n       },\n     ]),\n  ],\n  props={\n    name: 'base-app',\n  },\n  extensions=[addLabelsAndReplicas]\n);\n\nlocal extendedApp = baseApp.extend([\n    ([\n       function(ctx, props) {\n         kind: 'Service',\n         metadata: {\n           name: props.name,\n         },\n       },\n     ]),\n  ]\n);\n\nextendedApp.resolve()\n"})})}),(0,l.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"- body:\n    kind: Deployment\n    metadata:\n      name: base-app\n- body:\n    kind: Service\n    metadata:\n      name: base-app\n"})})}),(0,l.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n   {\n      "body": {\n         "kind": "Deployment",\n         "metadata": {\n            "name": "base-app"\n         }\n      }\n   },\n   {\n      "body": {\n         "kind": "Service",\n         "metadata": {\n            "name": "base-app"\n         }\n      }\n   }\n]\n'})})})]}),"\n",(0,l.jsx)(n.h3,{id:"example-with-filter",children:"Example with filter"}),"\n",(0,l.jsxs)(r.A,{children:[(0,l.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"local app = import '../../vendor/konn/app.libsonnet';\n\nlocal baseApp = app.new([\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: 'nginx',\n      },\n    },\n    {\n      kind: 'Service',\n      metadata: {\n        name: 'nginx-svc',\n      },\n    },\n  ],\n  filter=function(ctx, config, props) config.get('kind') == 'Deployment'\n);\n\nlocal extendedApp = baseApp.extend([]);\n\nextendedApp.resolve()\n"})})}),(0,l.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"- kind: Deployment\n  metadata:\n    name: nginx\n"})})}),(0,l.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n   {\n      "kind": "Deployment",\n      "metadata": {\n         "name": "nginx"\n      }\n   }\n]\n'})})})]}),"\n",(0,l.jsx)(n.h3,{id:"example-with-map",children:"Example with map"}),"\n",(0,l.jsxs)(r.A,{children:[(0,l.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"local app = import '../../vendor/konn/app.libsonnet';\n\nlocal baseApp = app.new([\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: 'nginx',\n      },\n    },\n  ],\n  map=function(ctx, config, props) config {\n    metadata+: {\n      labels: {\n        env: 'production',\n      },\n    },\n  });\n\nlocal extendedApp = baseApp.extend();\n\nextendedApp.resolve()\n"})})}),(0,l.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"- kind: Deployment\n  metadata:\n    labels:\n      env: production\n    name: nginx\n"})})}),(0,l.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n   {\n      "kind": "Deployment",\n      "metadata": {\n         "labels": {\n            "env": "production"\n         },\n         "name": "nginx"\n      }\n   }\n]\n'})})})]}),"\n",(0,l.jsx)(n.h3,{id:"cross-linking-to-other-api-docs",children:"Cross-linking to Other API Docs"}),"\n",(0,l.jsxs)(n.p,{children:["For more details on config, please refer to the ",(0,l.jsx)(n.a,{href:"/api/config/api-config-new",children:"config documentation"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},9329:(e,n,a)=>{a.d(n,{A:()=>r});a(6540);var t=a(4164);const l={tabItem:"tabItem_Ymn6"};var i=a(4848);function r(e){let{children:n,hidden:a,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,r),hidden:a,children:n})}},5537:(e,n,a)=>{a.d(n,{A:()=>A});var t=a(6540),l=a(4164),i=a(5627),r=a(6347),s=a(372),o=a(604),p=a(1861),d=a(8749);function c(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:l}}=e;return{value:n,label:a,attributes:t,default:l}}))}(a);return function(e){const n=(0,p.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:a}=e;const l=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(l.location.search);n.set(i,e),l.replace({...l.location,search:n.toString()})}),[i,l])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:l}=e,i=u(e),[r,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[p,c]=x({queryString:a,groupId:l}),[m,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,i]=(0,d.Dv)(a);return[l,(0,t.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:l}),j=(()=>{const e=p??m;return h({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{j&&o(j)}),[j]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,i]),tabValues:i}}var f=a(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(4848);function b(e){let{className:n,block:a,selectedValue:t,selectValue:r,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),d=e=>{const n=e.currentTarget,a=o.indexOf(n),l=s[a].value;l!==t&&(p(n),r(l))},c=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{o.push(e)},onKeyDown:c,onClick:d,...i,className:(0,l.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function g(e){let{lazy:n,children:a,selectedValue:i}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,v.jsx)(b,{...n,...e}),(0,v.jsx)(g,{...n,...e})]})}function A(e){const n=(0,f.A)();return(0,v.jsx)(w,{...e,children:c(e.children)},String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>s});var t=a(6540);const l={},i=t.createContext(l);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);