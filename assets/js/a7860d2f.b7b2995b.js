"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9357],{8665:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"api/feature/api-feature-extend","title":"extend","description":"Overview","source":"@site/docs/api/feature/extend.md","sourceDirName":"api/feature","slug":"/api/feature/api-feature-extend","permalink":"/docusaurus/api/feature/api-feature-extend","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/feature/extend.md","tags":[],"version":"current","frontMatter":{"id":"api-feature-extend","title":"extend"},"sidebar":"apiSidebar","previous":{"title":"extensions","permalink":"/docusaurus/api/feature/api-feature-extensions"},"next":{"title":"overrides","permalink":"/docusaurus/api/feature/api-feature-overrides"}}');var l=a(4848),r=a(8453),i=a(5537),s=a(9329);const o={id:"api-feature-extend",title:"extend"},d=void 0,c={},u=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Example with configs",id:"example-with-configs",level:3},{value:"Example with props",id:"example-with-props",level:3},{value:"Example with extensions",id:"example-with-extensions",level:3},{value:"Example with filter",id:"example-with-filter",level:3},{value:"Example with map",id:"example-with-map",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"extend"})," function allows for the extension of an existing feature by adding new configurations, properties, or extensions, as well as modifying the filtering and mapping behavior."]}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"configs"})})," - (array) Additional configurations to extend the feature. See ",(0,l.jsx)(n.a,{href:"#example-with-configs",children:"configs"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"props"})})," - (object) Additional properties to extend the feature. See ",(0,l.jsx)(n.a,{href:"#example-with-props",children:"props"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"extensions"})})," - (array) Additional extensions to apply to the feature. See ",(0,l.jsx)(n.a,{href:"#example-with-extensions",children:"extensions"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"filter"})})," - (function) A filter function to refine which configurations are included. See ",(0,l.jsx)(n.a,{href:"#example-with-filter",children:"filter"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"map"})})," - (function) A map function to modify the configurations. See ",(0,l.jsx)(n.a,{href:"#example-with-map",children:"map"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(n.p,{children:"A new feature object with the extended configurations, properties, and extensions."}),"\n",(0,l.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,l.jsx)(n.h3,{id:"example-with-configs",children:"Example with configs"}),"\n",(0,l.jsxs)(i.A,{children:[(0,l.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"local config = import '../../vendor/konn/config.libsonnet';\nlocal feature = import '../../vendor/konn/feature.libsonnet';\n\nlocal testFeature = feature.new(\n  [\n    {\n      kind: 'Service',\n      metadata: {\n        name: 'nginx-svc',\n      },\n    },\n  ], {\n    name: 'flask-svc',\n  }\n).extend(\n  [\n    config.new(\n      function(ctx, props) {\n        kind: 'Service',\n        metadata: {\n          name: props.name,\n        },\n      },\n    ),\n  ]);\n\ntestFeature.render()\n"})})}),(0,l.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"- kind: Service\n  metadata:\n    name: nginx-svc\n- kind: Service\n  metadata:\n    name: flask-svc\n"})})}),(0,l.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n   {\n      "kind": "Service",\n      "metadata": {\n         "name": "nginx-svc"\n      }\n   },\n   {\n      "kind": "Service",\n      "metadata": {\n         "name": "flask-svc"\n      }\n   }\n]\n'})})})]}),"\n",(0,l.jsx)(n.h3,{id:"example-with-props",children:"Example with props"}),"\n",(0,l.jsxs)(i.A,{children:[(0,l.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"local feature = import '../../vendor/konn/feature.libsonnet';\nlocal helper = import '../../vendor/konn/helpers.libsonnet';\n\nlocal testFeature = feature.new([\n    {\n      kind: 'Service',\n      metadata: {\n        name: 'nginx-svc',\n      },\n    },\n  ]\n).extend(\n  [\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: 'nginx',\n      },\n    },\n  ],\n  {\n    additionalProp1: 'value1',\n    additionalProp2: 'value2',\n  });\n\ntestFeature.props\n"})})}),(0,l.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"additionalProp1: value1\nadditionalProp2: value2\n"})})}),(0,l.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n   "additionalProp1": "value1",\n   "additionalProp2": "value2"\n}\n'})})})]}),"\n",(0,l.jsxs)(n.h3,{id:"example-with-extensions",children:["Example with ",(0,l.jsx)(n.a,{href:"/api/feature/api-feature-extensions",children:"extensions"})]}),"\n",(0,l.jsxs)(i.A,{children:[(0,l.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"local extension = import '../../vendor/konn/extension.libsonnet';\nlocal feature = import '../../vendor/konn/feature.libsonnet';\nlocal helper = import '../../vendor/konn/helpers.libsonnet';\n\nlocal testExt = extension.new(\n  function(ctx, config, props) config {\n    metadata+: {\n      labels: {\n        app: 'extended-config',\n      },\n    },\n  });\n\nlocal testFeature = feature.new(\n  [\n    {\n      kind: 'config',\n      metadata: {\n        name: 'one',\n      },\n    },\n  ]\n).extend(\n  [\n    {\n      kind: 'config',\n      metadata: {\n        name: 'two',\n      },\n    },\n  ],\n  {},\n  [testExt]\n);\n\nhelper.render(testFeature)\n"})})}),(0,l.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"- kind: config\n  metadata:\n    labels:\n      app: extended-config\n    name: one\n- kind: config\n  metadata:\n    labels:\n      app: extended-config\n    name: two\n"})})}),(0,l.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n   {\n      "kind": "config",\n      "metadata": {\n         "labels": {\n            "app": "extended-config"\n         },\n         "name": "one"\n      }\n   },\n   {\n      "kind": "config",\n      "metadata": {\n         "labels": {\n            "app": "extended-config"\n         },\n         "name": "two"\n      }\n   }\n]\n'})})})]}),"\n",(0,l.jsxs)(n.h3,{id:"example-with-filter",children:["Example with ",(0,l.jsx)(n.a,{href:"/api/feature/api-feature-filter",children:"filter"})]}),"\n",(0,l.jsxs)(i.A,{children:[(0,l.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"local feature = import '../../vendor/konn/feature.libsonnet';\nlocal helper = import '../../vendor/konn/helpers.libsonnet';\n\nlocal testFeature = feature.new([\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: 'nginx',\n      },\n    },\n    {\n      kind: 'Service',\n      metadata: {\n        name: 'nginx',\n      },\n    },\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: 'flask',\n      },\n    },\n  ]\n).extend(\n  [\n    {\n      kind: 'Service',\n      metadata: {\n        name: 'flask',\n      },\n    },\n  ],\n  {},\n  [],\n  filter=function(ctx, config, props) config.get('metadata').name != 'flask'\n);\n\nhelper.render(testFeature)\n"})})}),(0,l.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"- kind: Deployment\n  metadata:\n    name: nginx\n- kind: Service\n  metadata:\n    name: nginx\n"})})}),(0,l.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n   {\n      "kind": "Deployment",\n      "metadata": {\n         "name": "nginx"\n      }\n   },\n   {\n      "kind": "Service",\n      "metadata": {\n         "name": "nginx"\n      }\n   }\n]\n'})})})]}),"\n",(0,l.jsxs)(n.h3,{id:"example-with-map",children:["Example with ",(0,l.jsx)(n.a,{href:"/api/feature/api-feature-map",children:"map"})]}),"\n",(0,l.jsxs)(i.A,{children:[(0,l.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"local config = import '../../vendor/konn/config.libsonnet';\nlocal feature = import '../../vendor/konn/feature.libsonnet';\nlocal helper = import '../../vendor/konn/helpers.libsonnet';\n\nlocal testFeature = feature.new([\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: 'nginx',\n      },\n    },\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: 'flask',\n      },\n    },\n  ]\n).extend(\n  [\n    config.new(function(ctx, props) {\n      kind: 'Deployment',\n      metadata: {\n        name: props.name,\n      },\n    }),\n  ],\n  {\n    name: 'kong',\n  },\n  map=function(ctx, config, props) config {\n    metadata+: {\n      name: config.metadata.name + '-deployment',\n    },\n  });\n\nhelper.render(testFeature)\n"})})}),(0,l.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"- kind: Deployment\n  metadata:\n    name: nginx-deployment\n- kind: Deployment\n  metadata:\n    name: flask-deployment\n- kind: Deployment\n  metadata:\n    name: kong-deployment\n"})})}),(0,l.jsx)(s.A,{value:"json",label:"JSON Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n   {\n      "kind": "Deployment",\n      "metadata": {\n         "name": "nginx-deployment"\n      }\n   },\n   {\n      "kind": "Deployment",\n      "metadata": {\n         "name": "flask-deployment"\n      }\n   },\n   {\n      "kind": "Deployment",\n      "metadata": {\n         "name": "kong-deployment"\n      }\n   }\n]\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},9329:(e,n,a)=>{a.d(n,{A:()=>i});a(6540);var t=a(4164);const l={tabItem:"tabItem_Ymn6"};var r=a(4848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,i),hidden:a,children:n})}},5537:(e,n,a)=>{a.d(n,{A:()=>w});var t=a(6540),l=a(4164),r=a(5627),i=a(6347),s=a(372),o=a(604),d=a(1861),c=a(8749);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:l}}=e;return{value:n,label:a,attributes:t,default:l}}))}(a);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:a}=e;const l=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function x(e){const{defaultValue:n,queryString:a=!1,groupId:l}=e,r=p(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[d,u]=h({queryString:a,groupId:l}),[x,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,c.Dv)(a);return[l,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:l}),g=(()=>{const e=d??x;return m({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=a(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(4848);function j(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,a=o.indexOf(n),l=s[a].value;l!==t&&(d(n),i(l))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{o.push(e)},onKeyDown:u,onClick:c,...r,className:(0,l.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function b(e){let{lazy:n,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,l.A)("tabs-container",g.tabList),children:[(0,v.jsx)(j,{...n,...e}),(0,v.jsx)(b,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,v.jsx)(k,{...e,children:u(e.children)},String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>s});var t=a(6540);const l={},r=t.createContext(l);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);