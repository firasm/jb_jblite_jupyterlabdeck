/*! For license information please see 537.89ea8bd1b74e69f51508.js.LICENSE.txt */
(self.webpackChunkjupyterlab_myst=self.webpackChunkjupyterlab_myst||[]).push([[537],{48738:n=>{n.exports=function(n){return null!=n&&null!=n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n)}},7493:(n,t,e)=>{"use strict";var r;e.d(t,{F:()=>r}),function(n){n.string="string",n.number="number",n.boolean="boolean",n.parsed="parsed"}(r||(r={}))},96904:(n,t,e)=>{"use strict";e.d(t,{Bc:()=>j,Lh:()=>m,Mc:()=>h,_r:()=>s,Q6:()=>c,fX:()=>v,_W:()=>y,Eq:()=>g,lr:()=>b});var r=e(76579);let i=n=>crypto.getRandomValues(new Uint8Array(n)),o=(n,t=21)=>((n,t,e)=>{let r=(2<<Math.log(n.length-1)/Math.LN2)-1,i=-~(1.6*r*t/n.length);return(o=t)=>{let l="";for(;;){let t=e(i),u=i;for(;u--;)if(l+=n[t[u]&r]||"",l.length===o)return l}}})(n,t,i);var l=function(){return l=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},l.apply(this,arguments)};function u(n,t){return(null==t?void 0:t.note)&&(n.note=null==t?void 0:t.note),(null==t?void 0:t.url)&&(n.url=null==t?void 0:t.url),(null==t?void 0:t.fatal)&&(n.fatal=!0),n}function s(n,t,e){return u(n.message(t,null==e?void 0:e.node,null==e?void 0:e.source),l(l({},e),{fatal:!0}))}function c(n,t,e){return u(n.message(t,null==e?void 0:e.node,null==e?void 0:e.source),e)}var a="abcdefghijklmnopqrstuvwxyz",p=a+a.toUpperCase(),f=o(p,1),d=o(p+"0123456789",9);function h(){return f()+d()}function y(n){if(n){var t=n.replace(/[\t\n\r ]+/g," ").trim().toLowerCase();return{identifier:t,label:n,html_id:m(t)}}}function m(n){if(n)return n.toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/^([0-9-])/,"id-$1").replace(/-[-]+/g,"-").replace(/(?:^[-]+)|(?:[-]+$)/g,"")}function v(n,t){(0,r.U)(n,(function(n){var e,r,i=null===(r=null===(e=n.children)||void 0===e?void 0:e.map((function(n){return n.type===t&&n.children?n.children:n})))||void 0===r?void 0:r.flat();return n&&null==n.children&&delete n.children,void 0!==i&&(n.children=i),n}))}function g(n,t){n.children=[{type:"text",value:t}]}function b(n){return n?Array.isArray(n)?n.map((function(n){return n&&"string"!=typeof n?"value"in n?n.value:"children"in n&&n.children?b(n.children):"":n||""})).join(""):b([n]):""}function j(n){return JSON.parse(JSON.stringify(n))}},76579:(n,t,e)=>{"use strict";function r(n,t){return function n(e,r,i){var o=Object.assign({},t(e,r,i));return"children"in e&&(o.children=e.children.map((function(t,r){return n(t,r,e)}))),o}(n,null,null)}e.d(t,{U:()=>r})},78518:(n,t,e)=>{"use strict";function r(n){return n&&"object"==typeof n?"position"in n||"type"in n?o(n.position):"start"in n||"end"in n?o(n):"line"in n||"column"in n?i(n):"":""}function i(n){return l(n&&n.line)+":"+l(n&&n.column)}function o(n){return i(n&&n.start)+"-"+i(n&&n.end)}function l(n){return n&&"number"==typeof n?n:1}e.d(t,{$:()=>u});class u extends Error{constructor(n,t,e){const i=[null,null];let o={start:{line:null,column:null},end:{line:null,column:null}};if(super(),"string"==typeof t&&(e=t,t=void 0),"string"==typeof e){const n=e.indexOf(":");-1===n?i[1]=e:(i[0]=e.slice(0,n),i[1]=e.slice(n+1))}t&&("type"in t||"position"in t?t.position&&(o=t.position):"start"in t||"end"in t?o=t:("line"in t||"column"in t)&&(o.start=t)),this.name=r(t)||"1:1",this.message="object"==typeof n?n.message:n,this.stack="","object"==typeof n&&n.stack&&(this.stack=n.stack),this.reason=this.message,this.fatal,this.line=o.start.line,this.column=o.start.column,this.position=o,this.source=i[0],this.ruleId=i[1],this.file,this.actual,this.expected,this.url,this.note}}u.prototype.file="",u.prototype.name="",u.prototype.reason="",u.prototype.message="",u.prototype.stack="",u.prototype.fatal=null,u.prototype.column=null,u.prototype.line=null,u.prototype.source=null,u.prototype.ruleId=null,u.prototype.position=null}}]);