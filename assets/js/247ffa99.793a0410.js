"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8519],{9003:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"api/extensions/api-extensions-overrides","title":"overrides","description":"Overview","source":"@site/docs/api/extensions/overrides.md","sourceDirName":"api/extensions","slug":"/api/extensions/api-extensions-overrides","permalink":"/docusaurus/api/extensions/api-extensions-overrides","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/extensions/overrides.md","tags":[],"version":"current","frontMatter":{"id":"api-extensions-overrides","title":"overrides"},"sidebar":"apiSidebar","previous":{"title":"override","permalink":"/docusaurus/api/extensions/api-extensions-override"},"next":{"title":"render","permalink":"/docusaurus/api/extensions/api-extensions-render"}}');var r=t(4848),s=t(8453),l=t(5537),o=t(9329);const i={id:"api-extensions-overrides",title:"overrides"},u=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Usage Examples",id:"usage-examples",level:2}];function p(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.h3,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(n.p,{children:"The function returns an object with:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"body"})})," \u2013"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(o.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"local extension = import '../../vendor/konn/extension.libsonnet';\nlocal manifest = import '../../vendor/konn/manifest.libsonnet';\n\nlocal testExtension = manifest.new(\n  function(ctx, props) [\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: props.name_nginx,\n      },\n    },\n    {\n      kind: 'Deployment',\n      metadata: {\n        name: props.name_flask,\n      },\n    },\n  ],\n  {\n    name_nginx: 'placeholder',  // Keeping placeholders\n    name_flask: 'placeholder',\n  }\n).override(function(props) {\n  // name_nginx: 'nginx-app',  // Overriding placeholders\n  name_flask: 'flask-app',\n});\n\n{\n  output: testExtension.render(),\n  output_overrides: testExtension.overrides({ name_nginx: 'test' }),\n}\n"})})}),(0,r.jsx)(o.A,{value:"yaml",label:"YAML Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"output:\n  - kind: Deployment\n    metadata:\n      name: placeholder\n  - kind: Deployment\n    metadata:\n      name: flask-app\noutput_overrides:\n  name_flask: flask-app\n  name_nginx: test\n"})})}),(0,r.jsx)(o.A,{value:"json",label:"JSON Output",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n   "output": [\n      {\n         "kind": "Deployment",\n         "metadata": {\n            "name": "placeholder"\n         }\n      },\n      {\n         "kind": "Deployment",\n         "metadata": {\n            "name": "flask-app"\n         }\n      }\n   ],\n   "output_overrides": {\n      "name_flask": "flask-app",\n      "name_nginx": "test"\n   }\n}\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var a=t(4164);const r={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(6540),r=t(4164),s=t(5627),l=t(6347),o=t(372),i=t(604),u=t(1861),c=t(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[u,d]=h({queryString:t,groupId:r}),[f,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),b=(()=>{const e=u??f;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=t(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function g(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),r=o[t].value;r!==a&&(u(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(k,{...n,...e})]})}function y(e){const n=(0,v.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var a=t(6540);const r={},s=a.createContext(r);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);