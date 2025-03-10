var discover;(()=>{"use strict";var e={41594:e=>{e.exports=React},75206:e=>{e.exports=ReactDOM},32096:e=>{e.exports=okxGlobal},47185:e=>{e.exports=utils.ont}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,t.amdO={},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},(()=>{var e,r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;t.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var a=Object.create(null);t.r(a);var i={};e=e||[null,r({}),r([]),r(r)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=r(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,t.d(a,i),a}})(),t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,n)=>(t.f[n](e,r),r)),[])),t.u=e=>4477===e?"4477/index.04b5c4f0.js":7095===e?"7095/index.21c1d40d.js":4049===e?"4049/index.672e2dea.js":8311===e?"8311/index.d1bac3f9.js":556===e?"556/index.f5f471da.js":9040===e?"9040/index.a6c4f7f9.js":5745===e?"5745/index.1429567c.js":"common/"+e+"."+{272:"008b4f61",297:"67b8e952",726:"a129c285",958:"846fc3d1",995:"49866c40",1263:"86c0e18f",1528:"579db556",1575:"61b13f35",2220:"61a08ead",2418:"71b0eab5",2529:"b571841f",2869:"f4b482b2",2964:"abbd4e7e",3633:"1cee6418",3872:"98b26b3e",4096:"cc1d1fe0",4183:"b5eb7209",4197:"d469531c",4578:"b1817215",5456:"0c2568b6",5973:"69c85788",6118:"2e35b104",6436:"8995a3cb",6442:"9df14a05",6516:"2d1443cb",6524:"c42ba667",6594:"8d19dd1e",6595:"cb0efcc6",6629:"04428713",6763:"195083ca",6831:"454f6cc1",6870:"0a01aed4",6992:"7ed49c50",7335:"de7a1ed8",8498:"0014a4ef",9058:"938bad0c",9153:"06698df5",9226:"467cbbbc",9257:"b5edc753",9264:"53bf01da",9397:"1cf1ee20",9422:"d5b35824",9780:"a530da84",9782:"2d3ecc7e",9845:"c769700e"}[e]+".js",t.miniCssF=e=>4477===e?"4477/index.8fe54298.css":8311===e?"8311/index.b8d88464.css":556===e?"556/index.e306a5af.css":9040===e?"9040/index.acd9818f.css":5745===e?"5745/index.a893aa02.css":"common/"+e+"."+{726:"c6cc1f93",1575:"1f1308b2",2964:"d6f8240e",3872:"677b8b3b",6524:"d37deac8",6870:"4cd3b811"}[e]+".css",t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="@ok/discover:";t.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,d;if(void 0!==a)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var l=c[f];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==r+a){s=l;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+a),s.src=n),e[n]=[o];var u=(r,t)=>{s.onerror=s.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),d&&document.head.appendChild(s)}}})(),t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={},r={};t.f.remotes=(n,o)=>{t.o(e,n)&&e[n].forEach((e=>{var n=t.R;n||(n=[]);var a=r[e];if(!(n.indexOf(a)>=0)){if(n.push(a),a.p)return o.push(a.p);var i=r=>{r||(r=new Error("Container missing")),"string"===typeof r.message&&(r.message+='\nwhile loading "'+a[1]+'" from '+a[2]),t.m[e]=()=>{throw r},a.p=0},s=(e,r,t,n,s,d)=>{try{var c=e(r,t);if(!c||!c.then)return s(c,n,d);var f=c.then((e=>s(e,n)),i);if(!d)return f;o.push(a.p=f)}catch(l){i(l)}},d=(e,r,t)=>s(r.get,a[1],n,0,c,t),c=r=>{a.p=1,t.m[e]=e=>{e.exports=r()}};s(t,a[2],0,0,((e,r,n)=>e?s(t.I,a[0],0,e,d,n):i()),1)}}))}})(),(()=>{t.S={};var e={},r={};t.I=(n,o)=>{o||(o=[]);var a=r[n];if(a||(a=r[n]={}),!(o.indexOf(a)>=0)){if(o.push(a),e[n])return e[n];t.o(t.S,n)||(t.S[n]={});t.S[n];var i=[];return i.length?e[n]=Promise.all(i).then((()=>e[n]=1)):e[n]=1}}})(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../"})(),(()=>{try{if(t.miniCssF){var e=t.miniCssF;t.miniCssF=function(r){var t=e(r);if("string"!==typeof t)return t;var n=window._okGlobal||window.okGlobal;return n&&n.isRTL&&/\.css$/.test(t)?t.replace(/\.css$/,".rtl.css"):t}}}catch(r){}})(),(()=>{if("undefined"!==typeof document){var e=e=>new Promise(((r,n)=>{var o=t.miniCssF(e),a=t.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===r)return i}})(o,a))return r();((e,r,n,o,a)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",t.nc&&(i.nonce=t.nc),i.onerror=i.onload=t=>{if(i.onerror=i.onload=null,"load"===t.type)o();else{var n=t&&t.type,s=t&&t.target&&t.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+s+")");d.name="ChunkLoadError",d.code="CSS_CHUNK_LOAD_FAILED",d.type=n,d.request=s,i.parentNode&&i.parentNode.removeChild(i),a(d)}},i.href=r,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i)})(e,a,null,r,n)})),r={8842:0};t.f.miniCss=(t,n)=>{r[t]?n.push(r[t]):0!==r[t]&&{556:1,726:1,1575:1,2964:1,3872:1,4477:1,5745:1,6524:1,6870:1,8311:1,9040:1}[t]&&n.push(r[t]=e(t).then((()=>{r[t]=0}),(e=>{throw delete r[t],e})))}}})(),(()=>{var e={8842:0};t.f.j=(r,n)=>{var o=t.o(e,r)?e[r]:void 0;if(0!==o)if(o)n.push(o[2]);else if(556!=r){var a=new Promise(((t,n)=>o=e[r]=[t,n]));n.push(o[2]=a);var i=t.p+t.u(r),s=new Error;t.l(i,(n=>{if(t.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,n)=>{var o,a,[i,s,d]=n,c=0;if(i.some((r=>0!==e[r]))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(d)d(t)}for(r&&r(n);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0},n=self.webpackChunk_ok_discover=self.webpackChunk_ok_discover||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var n={};(()=>{var e=n,r={"./Feeds":()=>Promise.all([t.e(4477),t.e(7095),t.e(4049),t.e(8311),t.e(2964)]).then((()=>()=>t(3355)))},o=(e,n)=>(t.R=n,n=t.o(r,e)?r[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,n),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(e,{get:()=>o,init:()=>a})})(),discover=n})();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/discovery/1.5.42/discoverRemoteEntry.js.map