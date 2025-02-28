"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6706],{7676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"api/helpers/api-helpers-apply-extension","title":"apply-extension","description":"Overview","source":"@site/docs/api/helpers/apply-extension.md","sourceDirName":"api/helpers","slug":"/api/helpers/api-helpers-apply-extension","permalink":"/docusaurus/api/helpers/api-helpers-apply-extension","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/helpers/apply-extension.md","tags":[],"version":"current","frontMatter":{"id":"api-helpers-apply-extension","title":"apply-extension"},"sidebar":"apiSidebar","previous":{"title":"kget","permalink":"/docusaurus/api/feature/api-feature-kget"},"next":{"title":"get-path","permalink":"/docusaurus/api/helpers/api-helpers-get-path"}}');var l=t(4848),s=t(8453),o=t(5537),r=t(9329);const i={id:"api-helpers-apply-extension",title:"apply-extension"},c=void 0,p={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Example with extensions",id:"example-with-extensions",level:3},{value:"Example with context",id:"example-with-context",level:3},{value:"Example with configs",id:"example-with-configs",level:3},{value:"Example with props",id:"example-with-props",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,l.jsx)(n.p,{children:"Applies a list of extensions to a list of configurations using the provided context and properties."}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"extensions"})})," - (array) An array of extensions to apply. See ",(0,l.jsx)(n.a,{href:"#example-with-extensions",children:"example with extensions"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"ctx"})})," - (object) The context to use when applying the extensions. See ",(0,l.jsx)(n.a,{href:"#example-with-context",children:"example with context"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"configs"})})," - (array) An array of configurations to which the extensions will be applied. See ",(0,l.jsx)(n.a,{href:"#example-with-configs",children:"example with configs"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"props"})})," - (object, optional) Additional properties to pass to the extensions. Defaults to an empty object. See ",(0,l.jsx)(n.a,{href:"#example-with-props",children:"example with props"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,l.jsx)(n.p,{children:"Returns an array of configurations with the extensions applied."}),"\n",(0,l.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,l.jsxs)(n.h3,{id:"example-with-extensions",children:["Example with ",(0,l.jsx)(n.a,{href:"/api/extensions/api-extensions-new",children:"extensions"})]}),"\n",(0,l.jsxs)(o.A,{children:[(0,l.jsx)(r.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"local config = import '../../vendor/konn/config.libsonnet';\nlocal context = import '../../vendor/konn/context.libsonnet';\nlocal extension = import '../../vendor/konn/extension.libsonnet';\nlocal helpers = import '../../vendor/konn/helpers.libsonnet';\n\nlocal ctx = context.new({\n  env: 'production',\n});\n\nlocal baseConfig = config.new(\n  function(ctx, props) {\n    kind: 'Deployment',\n    metadata: {\n      name: 'base-app',\n    },\n  },\n);\n\nlocal myExtension = extension.new(\n  render=function(ctx, config, props)\n    config {\n      metadata+: {\n        labels: {\n          app: props.label,\n        },\n      },\n    },\n  props={\n    label: 'extended-app',\n  },\n);\n\nlocal extendedConfigs = helpers.applyExtensions([myExtension], ctx, [baseConfig]);\n\nextendedConfigs\n"})})}),(0,l.jsx)(r.A,{value:"yaml",label:"YAML Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"- kind: Deployment\n  metadata:\n    labels:\n      app: extended-app\n    name: base-app\n"})})}),(0,l.jsx)(r.A,{value:"json",label:"JSON Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "kind": "Deployment",\n    "metadata": {\n      "labels": {\n        "app": "extended-app"\n      },\n      "name": "base-app"\n    }\n  }\n]\n'})})})]}),"\n",(0,l.jsxs)(n.h3,{id:"example-with-context",children:["Example with ",(0,l.jsx)(n.a,{href:"/api/context/api-context-new",children:"context"})]}),"\n",(0,l.jsxs)(o.A,{children:[(0,l.jsx)(r.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"local config = import '../../vendor/konn/config.libsonnet';\nlocal context = import '../../vendor/konn/context.libsonnet';\nlocal extension = import '../../vendor/konn/extension.libsonnet';\nlocal helpers = import '../../vendor/konn/helpers.libsonnet';\n\nlocal ctx = context.new({\n  env: 'staging',\n  region: 'us-west-1',\n});\n\nlocal baseConfig = config.new(\n  function(ctx, props) {\n    kind: 'Service',\n    metadata: {\n      name: 'base-service',\n    },\n  },\n);\n\nlocal myExtension = extension.new(\n  render=function(ctx, config, props)\n    config {\n      metadata+: {\n        annotations: {\n          'env': ctx.env,\n          'region': ctx.region,\n        },\n      },\n    },\n);\n\nlocal extendedConfigs = helpers.applyExtensions([myExtension], ctx, [baseConfig]);\n\nextendedConfigs\n"})})}),(0,l.jsx)(r.A,{value:"yaml",label:"YAML Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"- kind: Service\n  metadata:\n    name: base-service\n    annotations:\n      env: staging\n      region: us-west-1\n"})})}),(0,l.jsx)(r.A,{value:"json",label:"JSON Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "kind": "Service",\n    "metadata": {\n      "name": "base-service",\n      "annotations": {\n        "env": "staging",\n        "region": "us-west-1"\n      }\n    }\n  }\n]\n'})})})]}),"\n",(0,l.jsxs)(n.h3,{id:"example-with-configs",children:["Example with ",(0,l.jsx)(n.a,{href:"/api/config/api-config-new",children:"configs"})]}),"\n",(0,l.jsxs)(o.A,{children:[(0,l.jsx)(r.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"local config = import '../../vendor/konn/config.libsonnet';\nlocal context = import '../../vendor/konn/context.libsonnet';\nlocal extension = import '../../vendor/konn/extension.libsonnet';\nlocal helpers = import '../../vendor/konn/helpers.libsonnet';\n\nlocal ctx = context.new({\n  env: 'development',\n});\n\nlocal baseConfig1 = config.new(\n  function(ctx, props) {\n    kind: 'Deployment',\n    metadata: {\n      name: 'config1',\n    },\n  },\n);\n\nlocal baseConfig2 = config.new(\n  function(ctx, props) {\n    kind: 'Service',\n    metadata: {\n      name: 'config2',\n    },\n  },\n);\n\nlocal myExtension = extension.new(\n  render=function(ctx, config, props)\n    config {\n      metadata+: {\n        labels: {\n          env: ctx.env,\n        },\n      },\n    },\n);\n\nlocal extendedConfigs = helpers.applyExtensions([myExtension], ctx, [baseConfig1, baseConfig2]);\n\nextendedConfigs\n"})})}),(0,l.jsx)(r.A,{value:"yaml",label:"YAML Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"- kind: Deployment\n  metadata:\n    labels:\n      env: development\n    name: config1\n- kind: Service\n  metadata:\n    labels:\n      env: development\n    name: config2\n"})})}),(0,l.jsx)(r.A,{value:"json",label:"JSON Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "kind": "Deployment",\n    "metadata": {\n      "labels": {\n        "env": "development"\n      },\n      "name": "config1"\n    }\n  },\n  {\n    "kind": "Service",\n    "metadata": {\n      "labels": {\n        "env": "development"\n      },\n      "name": "config2"\n    }\n  }\n]\n'})})})]}),"\n",(0,l.jsx)(n.h3,{id:"example-with-props",children:"Example with props"}),"\n",(0,l.jsxs)(o.A,{children:[(0,l.jsx)(r.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"local config = import '../../vendor/konn/config.libsonnet';\nlocal context = import '../../vendor/konn/context.libsonnet';\nlocal extension = import '../../vendor/konn/extension.libsonnet';\nlocal helpers = import '../../vendor/konn/helpers.libsonnet';\n\nlocal ctx = context.new({\n  env: 'test',\n});\n\nlocal baseConfig = config.new(\n  function(ctx, props) {\n    kind: 'Deployment',\n    metadata: {\n      name: 'base-app',\n    },\n  },\n);\n\nlocal myExtension = extension.new(\n  render=function(ctx, config, props)\n    config {\n      metadata+: {\n        labels: {\n          app: props.label,\n          version: props.version,\n        },\n      },\n    },\n  props={\n    label: 'extended-app',\n    version: 'v1.0',\n  },\n);\n\nlocal extendedConfigs = helpers.applyExtensions([myExtension], ctx, [baseConfig]);\n\nextendedConfigs\n"})})}),(0,l.jsx)(r.A,{value:"yaml",label:"YAML Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"- kind: Deployment\n  metadata:\n    labels:\n      app: extended-app\n      version: v1.0\n    name: base-app\n"})})}),(0,l.jsx)(r.A,{value:"json",label:"JSON Output",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "kind": "Deployment",\n    "metadata": {\n      "labels": {\n        "app": "extended-app",\n        "version": "v1.0"\n      },\n      "name": "base-app"\n    }\n  }\n]\n'})})})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var a=t(4164);const l={tabItem:"tabItem_Ymn6"};var s=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,o),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(6540),l=t(4164),s=t(5627),o=t(6347),r=t(372),i=t(604),c=t(1861),p=t(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const l=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})}),[s,l])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,s=u(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,d]=h({queryString:t,groupId:l}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,s]=(0,p.Dv)(t);return[l,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:l}),g=(()=>{const e=c??m;return x({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function b(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:r}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),p=e=>{const n=e.currentTarget,t=i.indexOf(n),l=r[t].value;l!==a&&(c(n),o(l))},d=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{i.push(e)},onKeyDown:d,onClick:p,...s,className:(0,l.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,l.A)("tabs-container",g.tabList),children:[(0,v.jsx)(b,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(6540);const l={},s=a.createContext(l);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);