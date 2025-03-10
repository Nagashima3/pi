"use strict";(self.webpackChunk_ok_universe_swap=self.webpackChunk_ok_universe_swap||[]).push([[2962],{62137:(r,t,e)=>{e.d(t,{l:()=>c,p:()=>a,q:()=>Z,r:()=>$,s:()=>i});var n=e(89379);e(27717),e(67300);r=e.hmd(r);Object.defineProperty;var o="okxWidget";function a(r,t,e){var a=(0,n.A)({key:o,method:t},"object"==typeof e?e:{});null==r||r.postMessage(a,"*")}function c(r,t,e){var n=r=>{!function(r){return"object"==typeof r&&null!==r&&"key"in r&&"method"in r&&"string"==typeof r.key&&"string"==typeof r.method}(r.data)||r.data.key!==o||r.data.method!==t||e(r.data)};return r.addEventListener("message",n),n}function i(r,t,e){r.removeEventListener("message",e)}var u=(r=>(r.EVM="EVM",r.SOLANA="SOLANA",r.WALLET_CONNECT="WALLET_CONNECT",r))(u||{});var f="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,y="object"==typeof self&&self&&self.Object===Object&&self,b=f||y||Function("return this")(),p=b.Symbol,l=Object.prototype,s=l.hasOwnProperty,v=l.toString,j=p?p.toStringTag:void 0;var h=Object.prototype.toString;var g=p?p.toStringTag:void 0;function A(r){return null==r?void 0===r?"[object Undefined]":"[object Null]":g&&g in Object(r)?function(r){var t=s.call(r,j),e=r[j];try{r[j]=void 0;var n=!0}catch(a){}var o=v.call(r);return n&&(t?r[j]=e:delete r[j]),o}(r):function(r){return h.call(r)}(r)}function d(r){return null!=r&&"object"==typeof r}var w=Array.isArray;function O(r){var t=typeof r;return null!=r&&("object"==t||"function"==t)}var E=/^(?:0|[1-9]\d*)$/;function m(r,t){var e,n=typeof r;return!!(t=null!==(e=t)&&void 0!==e?e:9007199254740991)&&("number"==n||"symbol"!=n&&E.test(r))&&r>-1&&r%1==0&&r<t}function T(r){return"number"==typeof r&&r>-1&&r%1==0&&r<=9007199254740991}function U(r){return null!=r&&T(r.length)&&!function(r){if(!O(r))return!1;var t=A(r);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}(r)}var k=Object.prototype;function x(r){return d(r)&&"[object Arguments]"==A(r)}var N=Object.prototype,L=N.hasOwnProperty,S=N.propertyIsEnumerable,C=x(function(){return arguments}())?x:function(r){return d(r)&&L.call(r,"callee")&&!S.call(r,"callee")};var M="object"==typeof exports&&exports&&!exports.nodeType&&exports,_=M&&r&&!r.nodeType&&r,F=_&&_.exports===M?b.Buffer:void 0,P=(F?F.isBuffer:void 0)||function(){return!1},B={};B["[object Float32Array]"]=B["[object Float64Array]"]=B["[object Int8Array]"]=B["[object Int16Array]"]=B["[object Int32Array]"]=B["[object Uint8Array]"]=B["[object Uint8ClampedArray]"]=B["[object Uint16Array]"]=B["[object Uint32Array]"]=!0,B["[object Arguments]"]=B["[object Array]"]=B["[object ArrayBuffer]"]=B["[object Boolean]"]=B["[object DataView]"]=B["[object Date]"]=B["[object Error]"]=B["[object Function]"]=B["[object Map]"]=B["[object Number]"]=B["[object Object]"]=B["[object RegExp]"]=B["[object Set]"]=B["[object String]"]=B["[object WeakMap]"]=!1;var V,q="object"==typeof exports&&exports&&!exports.nodeType&&exports,W=q&&r&&!r.nodeType&&r,D=W&&W.exports===q&&f.process,I=function(){try{return W&&W.require&&W.require("util").types||D&&D.binding&&D.binding("util")}catch(r){}}(),z=I&&I.isTypedArray,G=z?(V=z,function(r){return V(r)}):function(r){return d(r)&&T(r.length)&&!!B[A(r)]},R=Object.prototype.hasOwnProperty;function H(r,t){var e=w(r),n=!e&&C(r),o=!e&&!n&&P(r),a=!e&&!n&&!o&&G(r),c=e||n||o||a,i=c?function(r,t){for(var e=-1,n=Array(r);++e<r;)n[e]=t(e);return n}(r.length,String):[],u=i.length;for(var f in r)R.call(r,f)&&(!c||!("length"==f||o&&("offset"==f||"parent"==f)||a&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||m(f,u)))&&i.push(f);return i}var J=function(r,t){return function(e){return r(t(e))}}(Object.keys,Object),K=Object.prototype.hasOwnProperty;function Q(r){if(!function(r){var t=r&&r.constructor;return r===("function"==typeof t&&t.prototype||k)}(r))return J(r);var t=[];for(var e in Object(r))K.call(r,e)&&"constructor"!=e&&t.push(e);return t}function X(r){return U(r)?H(r):Q(r)}var Y=function(r,t,e){for(var n=-1,o=Object(r),a=e(r),c=a.length;c--;){var i=a[++n];if(!1===t(o[i],i,o))break}return r};var Z={[u.EVM]:"metamask",[u.SOLANA]:"phantom",[u.WALLET_CONNECT]:"walletconnect"},$=501;var rr=function(r){if(r.length>=255)throw new TypeError("Alphabet too long");for(var t=new Uint8Array(256),e=0;e<t.length;e++)t[e]=255;for(var n=0;n<r.length;n++){var o=r.charAt(n),a=o.charCodeAt(0);if(255!==t[a])throw new TypeError(o+" is ambiguous");t[a]=n}var c=r.length,i=r.charAt(0),u=Math.log(c)/Math.log(256),f=Math.log(256)/Math.log(c);function y(r){if("string"!=typeof r)throw new TypeError("Expected String");if(0===r.length)return new Uint8Array;for(var e=0,n=0,o=0;r[e]===i;)n++,e++;for(var a=(r.length-e)*u+1>>>0,f=new Uint8Array(a);r[e];){var y=t[r.charCodeAt(e)];if(255===y)return;for(var b=0,p=a-1;(0!==y||b<o)&&-1!==p;p--,b++)y+=c*f[p]>>>0,f[p]=y%256>>>0,y=y/256>>>0;if(0!==y)throw new Error("Non-zero carry");o=b,e++}for(var l=a-o;l!==a&&0===f[l];)l++;for(var s=new Uint8Array(n+(a-l)),v=n;l!==a;)s[v++]=f[l++];return s}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===t.length)return"";for(var e=0,n=0,o=0,a=t.length;o!==a&&0===t[o];)o++,e++;for(var u=(a-o)*f+1>>>0,y=new Uint8Array(u);o!==a;){for(var b=t[o],p=0,l=u-1;(0!==b||p<n)&&-1!==l;l--,p++)b+=256*y[l]>>>0,y[l]=b%c>>>0,b=b/c>>>0;if(0!==b)throw new Error("Non-zero carry");n=p,o++}for(var s=u-n;s!==u&&0===y[s];)s++;for(var v=i.repeat(e);s<u;++s)v+=r.charAt(y[s]);return v},decodeUnsafe:y,decode:function(r){var t=y(r);if(t)return t;throw new Error("Non-base"+c+" character")}}};rr("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");!function(){var r=Date.now().toString()}()},12962:(r,t,e)=>{e.d(t,{Pr:()=>n.r,TA:()=>n.p,VE:()=>n.q,mB:()=>n.l,ql:()=>n.s});var n=e(62137)}}]);
//# sourceMappingURL=https://static-daily.okg.com/crash/okexchain/universe-swap/2962/index.bc1b5ffc.js.map