"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[208],{9977:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"api/config/api-config-override","title":"override","description":"Override is way of completely overriding props no matter what if you override it it will not change.","source":"@site/docs/api/config/override.md","sourceDirName":"api/config","slug":"/api/config/api-config-override","permalink":"/docusaurus/api/config/api-config-override","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/config/override.md","tags":[],"version":"current","frontMatter":{"id":"api-config-override","title":"override"},"sidebar":"apiSidebar","previous":{"title":"extend","permalink":"/docusaurus/api/config/api-config-extend"},"next":{"title":"get","permalink":"/docusaurus/api/config/api-config-get"}}');var a=t(4848),o=t(8453),i=t(5537),s=t(9329);const l={id:"api-config-override",title:"override"},u=void 0,c={},d=[];function p(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Override is way of completely overriding props no matter what if you override it it will not change.\nif it`s overridden it locks it at that point meaning that anything that passed from a higher point will never change it."}),"\n",(0,a.jsx)(n.admonition,{title:"Use Case",type:"tip",children:(0,a.jsx)(n.p,{children:"If you want to stop pollution from your props because you want to take only props from a particular place and passed them down in your function\notherwise if a config renders it will get all of the props but if we want to get particular props we use override"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(s.A,{value:"jsonnet",label:"Jsonnet",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"local k = import 'konn/main.libsonnet';\n\nlocal a = {\ntype: 'config',\n};\n\nlocal b = {\nrender(ctx, props):: {\n    type: 'config',\n},\n};\n\nlocal c = k.config(function(ctx, props) {\ntype: 'config',\nkind: 'Service',\nprops: props,\nmetadata: {\n    name: 'bananas',\n},\n}, {\nbar: 'foo',\n});\n\nlocal e = c.override({\nbar: 'baz',\n});\n\n{\na: a, \nb: b,\nc: c.render(props={\n    foo: 'bar',\n}),\ne: e.render(props= {\n    bar: 'foo',  // we try to change bar to foo here but it will not change due to override\n})\n}\n"})})}),(0,a.jsx)(s.A,{value:"yaml",label:"YAML Output",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"a:\ntype: config\nb: {}\nc:\nkind: Service\nmetadata:\n    name: bananas\nprops:\n    bar: foo\n    foo: bar\ntype: config\ne:\nkind: Service\nmetadata:\n    name: bananas\nprops:\n    bar: baz\ntype: config\n\n"})})})]})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var o=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(6540),a=t(4164),o=t(5627),i=t(6347),s=t(372),l=t(604),u=t(1861),c=t(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[u,d]=m({queryString:t,groupId:a}),[b,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),g=(()=>{const e=u??b;return f({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var h=t(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==r&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function x(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...n,...e}),(0,v.jsx)(w,{...n,...e})]})}function k(e){const n=(0,h.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(6540);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);