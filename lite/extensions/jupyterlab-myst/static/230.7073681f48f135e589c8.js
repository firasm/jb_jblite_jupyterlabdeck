/*! For license information please see 230.7073681f48f135e589c8.js.LICENSE.txt */
"use strict";(self.webpackChunkjupyterlab_myst=self.webpackChunkjupyterlab_myst||[]).push([[230,12],{31012:(e,r,t)=>{t.r(r),t.d(r,{MermaidNodeRenderer:()=>i,MermaidRenderer:()=>a});var n=t(85893),o=t(56271);function a({id:e,value:r}){const[a,i]=(0,o.useState)(),[c,s]=(0,o.useState)();return(0,o.useEffect)((()=>{(function(e,r){return n=this,o=void 0,i=function*(){const{default:n}=yield Promise.all([t.e(956),t.e(700)]).then(t.bind(t,94136));return yield new Promise((t=>{n.render(e,r,(e=>{t(e)}))}))},new((a=void 0)||(a=Promise))((function(e,r){function t(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(r){var n;r.done?e(r.value):(n=r.value,n instanceof a?n:new a((function(e){e(n)}))).then(t,c)}s((i=i.apply(n,o||[])).next())}));var n,o,a,i})(e,r).then((e=>{i(e),s(void 0)})).catch((e=>{i(void 0),s(e)}))}),[]),(0,n.jsxs)("figure",Object.assign({className:""},{children:[a&&(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:a}}),c&&(0,n.jsxs)("pre",{children:["Error parsing mermaid graph.","\n\n",r]})]}))}const i=e=>(0,n.jsx)(a,{id:e.key,value:e.value},e.key)},27418:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,c,s=o(e),u=1;u<arguments.length;u++){for(var f in i=Object(arguments[u]))t.call(i,f)&&(s[f]=i[f]);if(r){c=r(i);for(var l=0;l<c.length;l++)n.call(i,c[l])&&(s[c[l]]=i[c[l]])}}return s}},75251:(e,r,t)=>{t(27418);var n=t(56271),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),r.Fragment=a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,a={},u=null,f=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(f=r.ref),r)c.call(r,n)&&!s.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:u,ref:f,props:a,_owner:i.current}}r.jsx=u,r.jsxs=u},85893:(e,r,t)=>{e.exports=t(75251)}}]);