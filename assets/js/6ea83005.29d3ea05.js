"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1631],{5661:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"api/feature/api-feature-configure","title":"configure","description":"Overview","source":"@site/docs/api/feature/configure.md","sourceDirName":"api/feature","slug":"/api/feature/api-feature-configure","permalink":"/docusaurus/api/feature/api-feature-configure","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/feature/configure.md","tags":[],"version":"current","frontMatter":{"id":"api-feature-configure","title":"configure"},"sidebar":"apiSidebar","previous":{"title":"override","permalink":"/docusaurus/api/feature/api-feature-override"},"next":{"title":"filter","permalink":"/docusaurus/api/feature/api-feature-filter"}}');var a=r(4848),l=r(8453),o=r(5537),u=r(9329);const s={id:"api-feature-configure",title:"configure"},i=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Usage Example",id:"usage-example",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.p,{children:["The configure function is an alias for the ",(0,a.jsx)(n.a,{href:"api-feature-override",children:"override"})," function and allows for overriding properties of the feature in a more concise manner."]}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"propsOrFunction"})})," - (object or function) The properties or function to apply as overrides."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,a.jsx)(n.p,{children:"The feature object with overridden properties."}),"\n",(0,a.jsx)(n.h3,{id:"usage-example",children:"Usage Example"}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(u.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"local feature = import '../../vendor/konn/feature.libsonnet';\nlocal lib = import '../../vendor/konn/helpers.libsonnet';\nlocal manifest = import '../../vendor/konn/manifest.libsonnet';\n\nlocal testFeature = feature.new([\nmanifest.new(function(ctx, props) [{\n    kind: 'Deployment',\n    metadata: {\n    name: props.name,\n    labels: {\n        label: props.label,\n    },\n    },\n}, \n], {\n    name: 'placeholder', // commenting out the output props these props will be used instead\n    label: 'placeholder',\n}),\n]).configure(function(props) {\nname: 'override-' + props.name,  // override passed props\n});\n\n{\noutput: lib.render(testFeature, {\n    name: 'nginx-deployment',  // this propr will be overidden\n    label: 'nginx',  // this one wont be overidden (we did not specify it under override func)\n}),\n\n}\n"})})}),(0,a.jsx)(u.A,{value:"yaml",label:"YAML Output",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"output:\n- kind: Deployment\n    metadata:\n    labels:\n        label: nginx\n    name: override-nginx-deployment\n"})})}),(0,a.jsx)(u.A,{value:"json",label:"JSON",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n"output": [\n    {\n        "kind": "Deployment",\n        "metadata": {\n            "labels": {\n            "label": "nginx"\n            },\n            "name": "override-nginx-deployment"\n        }\n    }\n]\n}\n'})})})]})]})}function f(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9329:(e,n,r)=>{r.d(n,{A:()=>o});r(6540);var t=r(4164);const a={tabItem:"tabItem_Ymn6"};var l=r(4848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,o),hidden:r,children:n})}},5537:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(6540),a=r(4164),l=r(5627),o=r(6347),u=r(372),s=r(604),i=r(1861),c=r(8749);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,i.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function f(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,s.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function h(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,l=p(e),[o,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[i,d]=m({queryString:r,groupId:a}),[h,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),v=(()=>{const e=i??h;return f({value:e,tabValues:l})?e:null})();(0,u.A)((()=>{v&&s(v)}),[v]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=r(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function x(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),c=e=>{const n=e.currentTarget,r=s.indexOf(n),a=u[r].value;a!==t&&(i(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;n=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;n=s[r]??s[s.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:u.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{s.push(e)},onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:l}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function w(e){const n=h(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>u});var t=r(6540);const a={},l=t.createContext(a);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);