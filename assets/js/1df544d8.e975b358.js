"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[363],{3931:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"api/config/api-config-fromJson","title":"fromJson","description":"In Konn, you can generate a plain object using k.config(). This function allows you to define an object with specific properties:","source":"@site/docs/api/config/fromJson.md","sourceDirName":"api/config","slug":"/api/config/api-config-fromJson","permalink":"/docusaurus/api/config/api-config-fromJson","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/config/fromJson.md","tags":[],"version":"current","frontMatter":{"id":"api-config-fromJson","title":"fromJson"},"sidebar":"apiSidebar","previous":{"title":"fromYaml","permalink":"/docusaurus/api/config/api-config-fromYaml"},"next":{"title":"new","permalink":"/docusaurus/api/config/api-config-new"}}');var o=t(4848),r=t(8453),i=t(5537),s=t(9329);const l={id:"api-config-fromJson",title:"fromJson"},c=void 0,u={},d=[{value:"In Konn, you can generate a plain object using k.config(). This function allows you to define an object with specific properties:",id:"in-konn-you-can-generate-a-plain-object-using-kconfig-this-function-allows-you-to-define-an-object-with-specific-properties",level:3},{value:"Using .fromJson() for Template-Based Object Creation",id:"using-fromjson-for-template-based-object-creation",level:3}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"in-konn-you-can-generate-a-plain-object-using-kconfig-this-function-allows-you-to-define-an-object-with-specific-properties",children:"In Konn, you can generate a plain object using k.config(). This function allows you to define an object with specific properties:"}),"\n",(0,o.jsxs)(i.A,{children:[(0,o.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"local k = import 'konn/main.libsonnet';\nk.config(function(ctx, props)\n{\n    type: 'test',\n})\n"})})}),(0,o.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"body:\ntype: test\n"})})})]}),"\n",(0,o.jsx)(n.h3,{id:"using-fromjson-for-template-based-object-creation",children:"Using .fromJson() for Template-Based Object Creation"}),"\n",(0,o.jsxs)(n.p,{children:["Similar to ",(0,o.jsx)(n.a,{href:"api-config-fromYaml",children:"fromYaml"}),"\nIf you prefer to generate an object from a JSON string instead, Konn provides .fromJson(), which allows you to convert JSON text into an equivalent object."]}),"\n",(0,o.jsxs)(i.A,{children:[(0,o.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"local k = import 'konn/main.libsonnet';\nk.fromJson('{ \"kind\" : \"ConfigMap\"}')\n"})})}),(0,o.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"body:\n- kind: ConfigMap\n\n"})})})]}),"\n",(0,o.jsxs)(i.A,{children:[(0,o.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'\nlocal k = import \'konn/main.libsonnet\';\nk.lib.config.fromJson(\'{"apiVersion":"v1", "kind":"Pod", "metadata":{"name": "%(name)s"}}\',{\n    name: \'nginx\',\n})\n'})})}),(0,o.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"body:\napiVersion: v1\nkind: Pod\nmetadata:\n    name: nginx\n"})})})]}),"\n",(0,o.jsx)(n.admonition,{title:"Use case",type:"tip",children:(0,o.jsx)(n.p,{children:"Using .fromJson() is useful when you have JSON-based configurations and need to transform them dynamically while maintaining JSON format."})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var a=t(4164);const o={tabItem:"tabItem_Ymn6"};var r=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>k});var a=t(6540),o=t(4164),r=t(5627),i=t(6347),s=t(372),l=t(604),c=t(1861),u=t(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=f(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=m({queryString:t,groupId:o}),[h,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,u.Dv)(t);return[o,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),g=(()=>{const e=c??h;return p({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=t(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),o=s[t].value;o!==a&&(c(n),i(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...r,className:(0,o.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function x(e){const n=h(e);return(0,j.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(y,{...n,...e})]})}function k(e){const n=(0,b.A)();return(0,j.jsx)(x,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(6540);const o={},r=a.createContext(o);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);