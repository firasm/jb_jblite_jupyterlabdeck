var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,a,o,i,l,u,s,d,f,c,p,h,v,m,b,y,g,j,w,k={299:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(529),t.e(703)]).then((()=>()=>t(703))),"./extension":()=>Promise.all([t.e(529),t.e(703)]).then((()=>()=>t(703))),"./style":()=>t.e(534).then((()=>()=>t(534)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n=t.S.default,a="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>a,init:()=>o})}},S={};function P(e){var r=S[e];if(void 0!==r)return r.exports;var t=S[e]={id:e,exports:{}};return k[e](t,t.exports,P),t.exports}P.m=k,P.c=S,P.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return P.d(r,{a:r}),r},P.d=(e,r)=>{for(var t in r)P.o(r,t)&&!P.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},P.f={},P.e=e=>Promise.all(Object.keys(P.f).reduce(((r,t)=>(P.f[t](e,r),r)),[])),P.u=e=>e+"."+{529:"3c3c2f104dcf72c8809e",534:"85e69c2df7be895f0574",679:"c2423c3488dd26a3f8a7",703:"14142c44f41a8dff22c0",732:"1d7150b0e900a588a3fb"}[e]+".js?v="+{529:"3c3c2f104dcf72c8809e",534:"85e69c2df7be895f0574",679:"c2423c3488dd26a3f8a7",703:"14142c44f41a8dff22c0",732:"1d7150b0e900a588a3fb"}[e],P.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),P.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="jupyterlab-link-share:",P.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,P.nc&&i.setAttribute("nonce",P.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},P.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{P.S={};var e={},r={};P.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];P.o(P.S,t)||(P.S[t]={});var o=P.S[t],i="jupyterlab-link-share",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},l=a[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[r]={get:t,from:i,eager:!!n})},u=[];switch(t){case"default":l("@retrolab/application","0.3.13",(()=>Promise.all([P.e(732),P.e(679),P.e(529)]).then((()=>()=>P(732))))),l("jupyterlab-link-share","0.2.4",(()=>Promise.all([P.e(529),P.e(703)]).then((()=>()=>P(703)))))}return e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;P.g.importScripts&&(e=P.g.location+"");var r=P.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),P.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():a(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,d,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(d=(typeof(s=r[i]))[0]))return!u||("u"==f?l>n&&!a:""==f!=a);if("u"==d){if(!u||"u"!=f)return!1}else if(u)if(f==d)if(l<=n){if(s!=e[l])return!1}else{if(a?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=f&&"n"!=f){if(a||l<=n)return!1;u=!1,l--}else{if(l<=n||d<f!=a)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,l--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},i=(e,r)=>{var t=P.S[e];if(!t||!P.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},l=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||n(e,r)?r:e),0))&&t[r]},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},s=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+a(t)+")",d=(e,r,t,n)=>{var a=u(e,t);return o(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(s(t,a,n)),h(e[t][a])},f=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},c=(e,r,t,n)=>{var o=e[t];return"No satisfying version ("+a(n)+") of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(o).map((e=>e+" from "+o[e].from)).join(", ")},p=(e,r,t,n)=>{"undefined"!=typeof console&&console.warn&&console.warn(c(e,r,t,n))},h=e=>(e.loaded=1,e.get()),m=(v=e=>function(r,t,n,a){var o=P.I(r);return o&&o.then?o.then(e.bind(e,r,P.S[r],t,n,a)):e(r,P.S[r],t,n,a)})(((e,r,t,n)=>(i(e,t),h(f(r,t,n)||p(r,e,t,n)||l(r,t))))),b=v(((e,r,t,n)=>(i(e,t),d(r,0,t,n)))),y=v(((e,r,t,n,a)=>{var o=r&&P.o(r,t)&&f(r,t,n);return o?h(o):a()})),g={},j={369:()=>b("default","@jupyterlab/translation",[1,3,2,4]),387:()=>b("default","@jupyterlab/coreutils",[1,5,2,4]),706:()=>b("default","@lumino/widgets",[1,1,19,0]),825:()=>b("default","@jupyterlab/apputils",[1,3,2,4]),584:()=>b("default","@jupyterlab/services",[1,6,2,4]),919:()=>y("default","@retrolab/application",[2,0,3,13],(()=>Promise.all([P.e(732),P.e(679)]).then((()=>()=>P(732))))),958:()=>b("default","@jupyterlab/mainmenu",[1,3,2,4]),129:()=>b("default","@lumino/disposable",[1,1,4,3]),168:()=>b("default","@lumino/signaling",[1,1,4,3]),211:()=>b("default","@lumino/messaging",[1,1,4,3]),458:()=>b("default","@jupyterlab/application",[1,3,2,4]),459:()=>b("default","@jupyterlab/rendermime",[1,3,2,4]),562:()=>b("default","@lumino/properties",[1,1,2,3]),797:()=>b("default","@lumino/coreutils",[1,1,5,3]),850:()=>b("default","@lumino/algorithm",[1,1,3,3]),954:()=>m("default","@jupyterlab/docregistry",[1,3,2,4]),971:()=>b("default","@jupyterlab/ui-components",[1,3,2,4])},w={529:[369,387,706,825],679:[129,168,211,458,459,562,797,850,954,971],703:[584,919,958]},P.f.consumes=(e,r)=>{P.o(w,e)&&w[e].forEach((e=>{if(P.o(g,e))return r.push(g[e]);var t=r=>{g[e]=0,P.m[e]=t=>{delete P.c[e],t.exports=r()}},n=r=>{delete g[e],P.m[e]=t=>{throw delete P.c[e],r}};try{var a=j[e]();a.then?r.push(g[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={710:0};P.f.j=(r,t)=>{var n=P.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(52|67)9$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=P.p+P.u(r),i=new Error;P.l(o,(t=>{if(P.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,l]=t,u=0;for(n in i)P.o(i,n)&&(P.m[n]=i[n]);for(l&&l(P),r&&r(t);u<o.length;u++)a=o[u],P.o(e,a)&&e[a]&&e[a][0](),e[o[u]]=0},t=self.webpackChunkjupyterlab_link_share=self.webpackChunkjupyterlab_link_share||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var E=P(299);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["jupyterlab-link-share"]=E})();