(()=>{"use strict";var e={2770:(e,t,o)=>{o.d(t,{A:()=>l});var n=o(9379),r=o(1594),a=o(9521),i=o(1144),c=o(4718);const l=function(e){var t=e.nowCurrencyUnit,o=e.showTitle,l=e.currencyList,s=e.id,u=e.setUnit,d=t.currencyId,f=(0,r.useMemo)((function(){var e=[];return l.forEach((function(t){d===t.currencyId?e.unshift(t):e.push(t)})),e}),[d,l]);return 0===l.length?null:(0,c.jsxs)("div",{className:"ul-box currency-ul-box",id:s,children:[o&&(0,c.jsx)("h4",{className:"ul-title",id:"footer-title-currency",children:(0,i.Tl)("home_footersetting_text2_local_currency")}),(0,c.jsx)("div",{className:"list-ul currency-list","aria-labelledby":"footer-title-currency",role:"group",children:f.map((function(e,t){var o=e.isoCode,r=0===t,i={};r&&(i={"aria-current":"true"});var l="currency_id_".concat(e.currencyId);return(0,c.jsx)(a.V4,{targetSelector:"#".concat(l),onClick:function(t){t.preventDefault(),u({currencyId:e.currencyId,refresh:!0})},children:(0,c.jsxs)("a",(0,n.A)((0,n.A)({className:"item ".concat(r?"selected":""),id:l,tabIndex:"0",role:"link"},i),{},{children:[o,r&&(0,c.jsx)("i",{className:"icon okx-header-footer-check select-icon"})]}))},l)}))})]})}},1659:(e,t,o)=>{o.d(t,{A:()=>u});var n=o(9379),r=o(1594),a=o(1259),i=o(3989),c=o(2113),l=o(1144),s=o(4718);const u=function(e){var t=(a.A||{}).locale,o=(0,c.j)(!1,!0),u=e.languageList,d=void 0===u?[]:u,f=e.showTitle,h=e.languageMap,v=e.id,m=e.setLanguage,g=e.route,p=(0,r.useMemo)((function(){var e=[];return d.forEach((function(o){t===o.language?e.unshift(o):e.push(o)})),e}),[d,t]);return 0===d.length?null:(0,s.jsxs)("div",{className:"ul-box language-ul",id:v,children:[f&&(0,s.jsx)("h4",{className:"ul-title",id:"footer-title-language",children:(0,l.Tl)("home_header_language_dropdowntitle_language")}),(0,s.jsx)("div",{className:"list-ul language-li","aria-labelledby":"footer-title-language",role:"group",children:p.map((function(e){var o=e.language,r=e.text,c=t===o,l=function(e,t,o){var n=(a.A||{}).langPath,r=e[t]||{},c=o.pathname,l=o.search,s=o.hash,u=void 0===s?"":s,d=c.replace(/\/{2,}/g,"/"),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e;if(e&&e.includes("?")){var o=e.substring(e.indexOf("?")+1).split("&").filter((function(e){var t=e.toLowerCase();return!(t.startsWith("channelid")||t.startsWith("channelflag"))}));t=o.length>0?"?".concat(o.join("&")):""}return t}(l),h=r.langPath?"/".concat(r.langPath):"/";if(r.href)return(0,i.YW)(r.href);if("/"===d||d===n)return(0,i.YW)("".concat(h).concat(f).concat(u));var v="",m=d,g=/(\/help\/section\/[^/?#]+)\/page\/\d+/;g.test(d)&&(m=d.replace(g,"$1"));var p=/(\/learn\/.*)(\/page\/\d+)/;p.test(d)&&(m=d.replace(p,"$1"));var _="".concat(m).concat(f).concat(u);return v=n.length?_.replace(n,h):"".concat(h).concat(_),(0,i.YW)(v.replace("//","/"))}(h,o,g),u="language_".concat(o),d={role:"link",tabIndex:"0"};c&&(d={"aria-current":"true"});return(0,s.jsxs)("a",(0,n.A)((0,n.A)({className:"item ".concat(c?"selected":""),href:l,id:u},d),{},{onClick:function(e){e.preventDefault(),m(o)},children:[r,c&&(0,s.jsx)("i",{className:"icon okx-header-footer-check select-icon"})]}))}))},o)]})}},4274:(e,t,o)=>{o.d(t,{Xz:()=>n});var n={project:{id:160,token:"b32011805ecf66fdb148c22d63d2803d"}}},6997:(e,t,o)=>{o.d(t,{A:()=>f});var n=o(675),r=o(467),a=o(5544),i=o(1594),c=o(3039),l=o(8565),s=o(2096),u=o.n(s),d=o(5066);const f=function(){var e=(0,i.useState)(""),t=(0,a.A)(e,2),o=t[0],s=t[1],f=(0,i.useState)(""),h=(0,a.A)(f,2),v=h[0],m=h[1],g=(0,l.A)(),p=g.isSm,_=g.isMd;return(0,i.useEffect)((function(){function e(){return(e=(0,r.A)((0,n.A)().mark((function e(){return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.eV)();case 2:p||_||o||u().getDownloadQrCode().then((function(e){s(e)})).catch((function(){}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[p,_,o]),(0,i.useEffect)((function(){m((0,c.CZ)("/download"))}),[]),{url:o,downloadUrl:v}}},9791:(e,t,o)=>{o.d(t,{D:()=>u});var n=o(5544),r=o(1594),a=o(1259),i=o(401),c=o(8899),l=o(2096),s=o.n(l),u=function(){var e=s().getSeoLanguageList(),t=Object.values(e),o=(0,r.useState)(e),l=(0,n.A)(o,2),u=l[0],d=l[1],f=(0,r.useState)(t),h=(0,n.A)(f,2),v=h[0],m=h[1],g=(0,r.useState)({}),p=(0,n.A)(g,2),_=p[0],x=p[1],k=(0,r.useState)({}),b=(0,n.A)(k,2),w=b[0],y=b[1],A=(0,r.useState)([]),j=(0,n.A)(A,2),C=j[0],T=j[1],N=(0,r.useState)(!1),S=(0,n.A)(N,2),E=S[0],L=S[1],D=a.A.locale;(0,r.useEffect)((function(){(0,i.f)()||(L(!0),s().preference.getLanguageList().then((function(e){if(e&&Object.keys(e).length>0){d(e),x(e[D]);var t=Object.values(e);m(t)}})).catch((function(){})),s().preference.getUnit().then((function(e){var t=e.nowCurrencyUnit,o=e.allCurrencyUnit;y(t),T(o)})).catch((function(){})),c.A.listen("global_updated_currency",(function(e){y(e)})))}),[]);var O=(0,r.useCallback)((function(e){var t={nowLocale:e};s().preference.setLanguage(t)}),[]),P=(0,r.useCallback)((function(e){s().preference.setUnit(e)}),[]);return{languageList:v,nowLanguage:_,languageMap:u,nowCurrencyUnit:w,setNowCurrencyUnit:y,currencyList:C,setUnit:P,setLanguage:O,showTitle:E}}},5010:(e,t,o)=>{o.d(t,{A:()=>r,t:()=>a});var n=o(1594);function r(e,t,o){var r=o||{},a=r.targetSelector,i=r.target,c=r.eventName,l=void 0===c?"keyup":c,s=r.capture,u=r.once,d=r.passive,f=r.enable,h=void 0===f||f,v=r.stopPropagation,m=(0,n.useRef)(t);m.current=t;var g=(0,n.useRef)(null);(0,n.useEffect)((function(){if(!h||!e||!t||!(a||i))return function(){};var o=function(t){var o,n;t.keyCode===e&&(null===(o=m.current)||void 0===o||o.call(m,t),v&&t.stopPropagation());Array.isArray(e)&&e.includes(t.keyCode)&&(null===(n=m.current)||void 0===n||n.call(m,t),v&&t.stopPropagation())};g.current&&(clearTimeout(g.current),g.current=null);var n=function(e){e.addEventListener(l,o,{capture:s,once:u,passive:d})};return g.current=setTimeout((function(){a&&document.querySelectorAll(a).forEach(n),i&&n(i)}),50),function(){var e=function(e){e.removeEventListener(l,o,{capture:s,once:u,passive:d})};a&&document.querySelectorAll(a).forEach(e),i&&e(i)}}),[e,h,l,s,u,d,i,a])}var a={ENTER:[13,32],SPACE:32,ESC:27,TAB:9}},2113:(e,t,o)=>{o.d(t,{j:()=>l});var n=o(675),r=o(467),a=o(5544),i=o(1594),c=o(5066);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=(0,i.useState)(e),l=(0,a.A)(o,2),s=l[0],u=l[1];return(0,i.useEffect)((function(){function e(){return(e=(0,r.A)((0,n.A)().mark((function e(){return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.eV)();case 2:u(t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),s}},3784:(e,t,o)=>{o.d(t,{io:()=>a,lY:()=>i});var n={act:function(){}};"undefined"!==typeof window&&(n=window.utils.monitor.newInstance({product:"app_web_homepage",commonParams:{}}));var r=n,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.is_login,o=e.button_name;r.act({action:"WebHomepage_Footercta_Button_Click",anchor:"WebHomepage_Footercta_Button_Click",params:{is_login:t,button_name:o},actionType:"",elementType:"",ampProject:"okx"})},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.button_name_tr,o=e.button_name;r.act({action:"HomePage_Footer_Url_Click",anchor:"HomePage_Footer_Url_Click",params:{button_name_tr:t,button_name:o},actionType:"",elementType:"",ampProject:"okx"})}},1144:(e,t,o)=>{o.d(t,{Tl:()=>l,W5:()=>s,b3:()=>u,cU:()=>d});var n=o(6683),r=o(401),a=o(1259),i=(o(2096),o(7185)),c=o.n(i),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,n.kW)(e,t,o)};var s=function(){return!(0,r.f)()&&!(null===c()||void 0===c()||!c().isLogin())},u=function(){var e,t=a.A.site;return!(null===t||void 0===t||null===(e=t.is)||void 0===e||!e.US)},d=function(){return"us"===a.A.market.toLocaleLowerCase()}},3086:(e,t,o)=>{var n=o(9379),r=o(5544),a=o(1594),i=o(401),c=o(1259),l=o(917),s=o(2401),u=o(5991),d=o(4274),f=o(867),h=o(4718);const v=function(e){var t=e.title,o=e.className,n=void 0===o?"":o;return(0,h.jsxs)("div",{className:"footer-alert-container ".concat(n),children:[(0,h.jsx)("i",{className:"icon iconfont footer-alert-icon okx-header-footer-info"}),(0,h.jsx)("div",{className:"footer-alert-msg-box",children:(0,h.jsx)("div",{className:"footer-alert-title",children:t})})]})};var m=o(436),g=o(1144),p=o(4467),_=o(3039),x=o(8565),k=o(9521),b=o(3784);const w=function(e){var t=e.ssr,o=e.columnIndex,r=e.list,a=e.title,i=e.handleActivity,c=e.activitiesData,l=e.isTR,s=(0,x.A)().media,u=l?"button_name_tr":"button_name",d="footer-nav-title-col-".concat(o),f="sm"===s,v={};return f&&(v={"aria-current":c[o]?"true":"false",role:"button"}),(0,h.jsxs)("div",{className:"f-c-list ".concat(c[o]||""),children:[(0,h.jsx)(k.V4,{targetSelector:"#".concat(d),onClick:f?function(){i(o)}:void 0,children:(0,h.jsxs)("h3",(0,n.A)((0,n.A)({className:"title-box",id:d},v),{},{children:[a,!t&&f&&(0,h.jsx)("span",{className:"icon okx-header-footer-arrow-chevrons-down user-arrow"})]}))}),(0,h.jsx)("div",{className:"item-box",role:"group","aria-labelledby":d,children:r.map((function(e){var t=e.link,o=e.title,r=e.eventTrackingKey,a=e.attr,i=void 0===a?{}:a;if(!o)return null;var c="footer_list_col".concat(o),l=(0,_.CZ)(t),s=function(){e.onClick?e.onClick():(0,b.lY)((0,p.A)({},u,r))},d=null!==l&&void 0!==l&&l.includes("http")||null!==l&&void 0!==l&&l.includes("https")?"_blank":void 0;return l?(0,h.jsx)("a",{className:"link",href:l,target:d,onClick:s,children:o},c):(0,h.jsx)("button",(0,n.A)((0,n.A)({className:"link",type:"button",onClick:s},i),{},{children:o}),c)}))})]},a)};const y=function(e){var t=e.ssr,o=e.data,i=e.isTR,c=e.enableOnetrustScripts,l=(0,a.useState)((null===o||void 0===o?void 0:o.childComponentNodes)||[]),s=(0,r.A)(l,2),u=s[0],d=s[1],f=(0,a.useState)({}),v=(0,r.A)(f,2),p=v[0],_=v[1],x=function(e){var t=(0,n.A)({},p);t[e]?t[e]="":t[e]="active",_(t)};return(0,a.useEffect)((function(){var e,t,o={title:(0,g.Tl)("home_footer_colbody1_cookie_preference"),rec:"cookie_preference",attr:{"aria-haspopup":"dialog"},onClick:function(){var e,t;null===(e=window)||void 0===e||null===(t=e.OneTrust)||void 0===t||t.ToggleInfoDisplay()}},n=(null===(e=u[0])||void 0===e?void 0:e.childComponentNodes)||[],r=n[n.length-1]||{};c&&!r.rec&&(null===(t=u[0])||void 0===t||t.childComponentNodes.push(o));d((0,m.A)(u))}),[c]),(0,h.jsx)("nav",{className:"f-c-main","aria-label":(0,g.Tl)("home_footer_okx_directory_alt"),children:u.map((function(e,o){var r=e.title,a=e.childComponentNodes,c=void 0===a?[]:a,l=e.onClick;return r?(0,h.jsx)(w,{title:r,list:c,columnIndex:o,ssr:t,handleActivity:x,activitiesData:p,isTR:i,onClick:l},"col".concat(r)):(0,h.jsx)("div",{className:"f-c-list list-container ",children:c.map((function(e,r){var a=e.title,c=e.childComponentNodes,l=void 0===c?[]:c,s=e.onClick,u=l.map((function(e,t){return(0,n.A)((0,n.A)({},e),{},{columnIndex:"".concat(o,"-").concat(r,"-").concat(t)})}));return u.length&&(0,h.jsx)(w,{title:a,list:u,columnIndex:"".concat(o,"-").concat(r),ssr:t,handleActivity:x,activitiesData:p,isTR:i,onClick:s},"twoCol".concat(a))}))},"two_list_".concat(o))}))})};var A=o(9905),j=o(2096),C=o.n(j),T=o(6997);const N=function(){var e=(0,a.useState)(!1),t=(0,r.A)(e,2),o=t[0],n=t[1];return(0,a.useEffect)((function(){var e=(0,g.W5)();n(e)}),[]),{loginStatus:o}};const S=function(e){var t=C().restriction.spot.hidden,o=N().loginStatus,n=e.isTR,r=void 0!==n&&n,a=(0,T.A)().url,i=function(e){e.preventDefault(),(0,b.io)({is_login:o,button_name:o?"to_trade":"to_register"}),(0,A.u)(e.target.href,"_self")};return(0,h.jsxs)("div",{className:"footer-download",children:[(0,h.jsx)("h3",{className:"footer-download-title",children:r?(0,g.Tl)("tr_home_footer_slogan_trade_on_the_go"):(0,g.Tl)("home_footer_slogan_trade_with_okx")}),o&&!t&&(0,h.jsx)("a",{className:"footer-trade-link",href:(0,_.CZ)("/trade-spot"),onClick:i,children:(0,g.Tl)("home_footer_btn_trade")}),!o&&(0,h.jsx)("a",{className:"footer-register-link",href:(0,_.CZ)("/account/register"),onClick:i,children:(0,g.Tl)("home_footer_btn_register")}),(0,h.jsxs)("div",{className:"footer-scan-box",children:[(0,h.jsx)("img",{className:"footer-qrcode-img",src:a,alt:(0,g.Tl)("home_footer_qrcode_scan_to_download",{},{useBr:!1})}),(0,h.jsx)("div",{className:"footer-scan-desc",children:r?(0,g.Tl)("tr_home_footer_qrcode_scan_to_download"):(0,g.Tl)("home_footer_qrcode_scan_to_download")})]})]})};var E=o(5922),L=o(8444),D=o(1454),O=o(9105);const P=function(e){var t=e.locale,o=e.isTR,i=void 0!==o&&o,l=e.isHK,s=void 0!==l&&l,u=i?(0,g.Tl)("tr_home_footer_text_copyright",{currentYear:(0,E.z)((new Date).getFullYear())}):(0,g.Tl)("exp_footer_text_copyright",{0:(0,E.z)((new Date).getFullYear())}),d=(0,g.cU)()||(0,g.b3)(),f=(0,a.useState)(0),v=(0,r.A)(f,2),m=v[0],p=v[1],_=(0,a.useRef)(),x=function(){var e=c.A.cdnBaseUrl,t=c.A.envSign,o=(new Date).getTime(),n="prod"===t?"".concat(e,"/cdn/assets/okfe/okt/ok-helper-v3/okscript/index.js?t=").concat(o):"".concat(e,"/cdnpre/assets/okfe/okt/ok-helper-v3/okscript/index.js?t=").concat(o);(0,L.k)({url:n}).catch((function(){}))},k=(0,a.useCallback)((function(){if(D.T.isMobile){var e=m+1;if(1===e&&(_.startTime=(new Date).getTime()),p(e),6===e)O.A.set("with-okfe-extension",2,{expires:30}),O.A.set("okhelper-installed",2,{expires:30}),localStorage.setItem("isTotalSwitchOpen",1),(new Date).getTime()-_.startTime<=2e3&&x(),p(0)}}),[m]);(0,a.useEffect)((function(){if(D.T.isMobile){var e=!!O.A.get("with-okfe-extension"),t=!!O.A.get("okhelper-installed"),o=!!localStorage.getItem("isTotalSwitchOpen");e&&t&&o&&x()}}),[]);var b="zh_CN"!==t||s?"logo-e":"logo-c";i&&(b="logo-tr");var w={onClick:k};return(0,h.jsxs)("div",{className:"footer-section footer-top-box",children:[(0,h.jsx)("div",{className:"footer-top-logo ".concat(b)}),!i&&(0,h.jsx)("div",(0,n.A)((0,n.A)({className:"footer-copyright"},w),{},{children:u})),i&&(0,h.jsxs)("div",(0,n.A)((0,n.A)({className:"footer-copyright-fr"},w),{},{children:[(0,h.jsx)("span",{className:"copy-item",children:u}),(0,h.jsx)("span",{className:"copy-item",children:(0,g.Tl)("tr_home_footer_text_full_name")}),(0,h.jsx)("span",{className:"copy-item",children:(0,g.Tl)("tr_home_footer_text_mersis")}),(0,h.jsx)("span",{className:"copy-item",children:(0,g.Tl)("tr_home_footer_text_kep")})]})),i&&(0,h.jsx)("div",{className:"footer-company-address",children:(0,g.Tl)("tr_home_footer_text_registered_address")}),d&&(0,h.jsx)("div",{className:"footer-company-address footer-company-us",children:(0,g.Tl)("web_homepage_footer_nmls")}),d&&(0,h.jsx)("div",{className:"footer-company-address footer-company-us",children:(0,g.Tl)("web_homepage_support_email")})]})};var I=o(9698),R=o(5010),M=o(2770),U=o(1659),H=o(9791),F=function(e){var t=e.isSsr,o=e.locale,n=(0,H.D)(t),i=n.nowCurrencyUnit,c=n.languageMap,l=n.languageList,s=n.currencyList,u=n.setUnit,d=n.setLanguage,f=n.showTitle,v=(0,a.useState)({search:"",pathname:""}),m=(0,r.A)(v,2),g=m[0],p=m[1];return(0,a.useEffect)((function(){var e=window.location,t=e.search,o=e.pathname,n=e.hash;p({search:t,pathname:o,hash:n})}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(U.A,{locale:o,showTitle:f,languageMap:c,languageList:l,setLanguage:d,route:g}),(0,h.jsx)(M.A,{showTitle:f,nowCurrencyUnit:i,currencyList:s,setUnit:u,id:""})]})},W=function(e){var t=e.onActiveHandle,o=e.onHoverHandle,n=e.setIsHoverd,r=e.isHoverd,i=(0,H.D)(!1),c=i.nowLanguage,l=void 0===c?{}:c,s=i.nowCurrencyUnit,u=void 0===s?{}:s,d=(u||{}).isoCode,f=void 0===d?"":d,v=function(){o(),n(!0)},m=function(){n(!1)};(0,R.A)(R.t.ENTER,(function(e){e.stopPropagation(),r?n(!1):v()}),{targetSelector:"#footerContainer .footer-wrap #language",stopPropagation:!0}),(0,R.A)(R.t.ESC,(function(){m()}),{targetSelector:"body"}),(0,a.useEffect)((function(){return document.body.addEventListener("mousedown",m),function(){document.body.removeEventListener("mousedown",m)}}),[]);var p=(0,a.useMemo)((function(){var e=(l||{}).text,t=void 0===e?"":e,o=t?"".concat(t,"/"):"";return f?"".concat(o).concat(f):t}),[l,f]);return(0,h.jsxs)("button",{id:"language",className:"now-language okx-header-footer-language",type:"button","aria-expanded":r?"true":"false","aria-controls":"footer-language-list","aria-label":(0,g.Tl)("home_footer_dropdown_language_currency_alt",{lang:l.text,currency:u.isoCode}),onClick:t,onMouseEnter:v,onMouseLeave:function(){n(!1)},children:[(0,h.jsx)("span",{className:"text",children:p}),(0,h.jsx)("i",{className:"icon okx-header-footer-arrow-chevrons-down arrow-icon ".concat(r?"show-arrow":"")})]})};const z=function(e){var t=e.ssr,o=(0,a.useState)(!1),n=(0,r.A)(o,2),l=n[0],s=n[1],u=(0,a.useState)(!1),d=(0,r.A)(u,2),f=d[0],v=d[1],m=(0,a.useState)(!1),g=(0,r.A)(m,2),p=g[0],_=g[1],x=c.A.locale,k=void 0===x?"zh_CN":x,b=(0,a.useRef)(null),w=(0,a.useCallback)((function(){var e=(0,I.A)().media;if("sm"===e||"md"===e){var t=!l;if(t){var o=b.current.getBoundingClientRect().top;_(o<370)}s(t)}}),[l]),y=(0,a.useCallback)((function(){var e=(0,I.A)().media;if("sm"!==e&&"md"!==e){var t=b.current.getBoundingClientRect().top;_(t<322)}}),[]),A=(0,a.useMemo)((function(){var e="f-l ";return l&&(e+=" active"),e}),[l]);return(0,h.jsxs)("div",{className:A,ref:b,children:[!t&&(0,h.jsx)(W,{onActiveHandle:w,onHoverHandle:y,isHoverd:f,setIsHoverd:v}),(0,h.jsx)("div",{className:"language-list ".concat(f?"show-language-list":""," ").concat(t?"":"drop-animation"," ").concat(p?"placement-bottom":"placement-top"),id:"footer-language-list",onMouseEnter:function(){v(!0)},onMouseLeave:function(){v(!1)},children:(0,i.f)()?"HEADER_LANGUAGE_CONTENT_PLACEHOLDER":(0,h.jsx)(F,{locale:k,isSsr:!1})})]})};var G=o(8598),Y={"icon-biyong11":"okx-header-footer-biyong","icon-biyong1":"okx-header-footer-biyong","icon-biyong2":"okx-header-footer-biyong","icon-discord":"okx-header-footer-discord","icon-Discord":"okx-header-footer-discord","icon-Instagram":"okx-header-footer-instagram","icon-weibo":"okx-header-footer-weibo","icon-weibo2":"okx-header-footer-weibo","icon-weibo1":"okx-header-footer-weibo","icon-facebook2":"okx-header-footer-facebook","icon-facebook3":"okx-header-footer-facebook","icon-line1":"okx-header-footer-line","icon-Linkedin":"okx-header-footer-linkedin","icon-PressRoom":"okx-header-footer-press-room","icon-reddit":"okx-header-footer-reddit","icon-reddit1":"okx-header-footer-reddit","icon-twitter":"okx-header-footer-twitter-1","icon-twitter1":"okx-header-footer-twitter-1","icon-twitter2":"okx-header-footer-twitter-1","icon-youtube":"okx-header-footer-youtube","icon-youtube1":"okx-header-footer-youtube","icon-telegram":"okx-header-footer-telegram","icon-telegram1":"okx-header-footer-telegram","icon-Telegram":"okx-header-footer-telegram","icon-VK21":"okx-header-footer-vk","icon-a-VK21":"okx-header-footer-vk","okx-support-community-tradingview":"okx-header-footer-tradingview"};const B=function(e){var t=e.ssr,o=e.locale,c=(0,a.useState)([]),l=(0,r.A)(c,2),s=l[0],u=l[1],d=function(){var e=(0,a.useState)({}),t=(0,r.A)(e,2),o=t[0],c=t[1];return(0,a.useEffect)((function(){(0,i.f)()||C().allAssociation&&C().allAssociation.then((function(e){c(e)}))}),[]),(0,i.f)()?{}:(0,n.A)({},o)}(),f=d.mediaInfo,v=void 0===f?[]:f;(0,a.useEffect)((function(){var e=Math.min(v.length,8),t=v.filter((function(e){return!0===e.isLink})).slice(0,e);u(t)}),[v.length]);var m="zh_CN"===o,p=(0,_.CZ)("/community"),x=C().restriction.community.hidden;return t||x?null:(0,h.jsxs)("div",{className:"f-m",children:[(0,h.jsx)("h3",{className:"f-m-title",id:"footerMediaTitle",children:(0,g.Tl)("home_footer_bottom_community")}),(0,h.jsxs)("nav",{className:"f-m-list",id:"footerMedia","aria-labelledby":"footerMediaTitle",children:[s.length>0&&s.map((function(e){var t=e.nameEn,o=e.linkUrl,n=e.iconName,r=e.name,a=t.replace(/\s/g,"").toLowerCase(),i=Y[n]||n,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e.includes("http")||e.includes("https"))return e.replace(/^https?:\/\/(.*?)(:\d+)?\/.*$/,"$1")===window.location.host;return!0}(o),l=c||"telegram"===a&&m;return(0,h.jsx)("a",{href:"telegram"===a&&m?p:o,className:"icon-some-chat icon footer-icon ".concat(i),target:l?"":"_blank",rel:l?"noreferrer":"nofollow noreferrer","aria-label":r,onClick:function(){(0,G.mG4)({footerCommunitychannels:t})}},"media_".concat(n))})),(0,h.jsx)("a",{href:p,className:"icon-some-chat footer-icon okx-header-footer-more","aria-label":(0,g.Tl)("home_footer_okx_community_page_alt"),onClick:G.FrL})]})]})};const q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{locale:"",langPath:"",i18nData:void 0},t=e.i18nData;(0,i.f)()||(t=window.__INIT_STATE__.headerContext.i18nData);var o=c.A.locale,m=c.A.langPath,g=c.A.enableOnetrustScripts,p={locale:o,langPath:m,enableOnetrustScripts:void 0!==g&&g,ssr:!0},_=(0,a.useState)(p),x=(0,r.A)(_,2),k=x[0],b=x[1],w=e.templateConfig,A=(null===w||void 0===w?void 0:w.body)||w,j=(null===w||void 0===w?void 0:w.notes)||{},C=(null===j||void 0===j?void 0:j.top)||{},T=(null===j||void 0===j?void 0:j.bottom)||{};return(0,a.useEffect)((function(){b((0,n.A)((0,n.A)({},k),{},{ssr:!1}))}),[]),(0,a.useEffect)((function(){window.setTimeout((function(){if(["www.okx"].includes(window.location.host)){var e=(0,u.XY)({isDetector:!0});if(e){var t=document.querySelector(".hometpl"),o=null===t||void 0===t?void 0:t.innerHTML;l.v.info("global info error",{length:c.A.dl,id:e,str:o,templateExist:!!t,customConfig:d.Xz})}}(0,u.TW)()}),6e3)}),[]),(0,h.jsx)(s.A,{isDev:!0,localeData:t,noRemoteData:!0,fetchConfig:f.D,children:(0,h.jsxs)("div",{className:"footer-wrap",children:[(0,h.jsxs)("div",{className:"f-b",children:[C.title?(0,h.jsxs)("div",{className:"footer-ru-container",children:[(0,h.jsx)(P,(0,n.A)({},k)),(0,h.jsx)(v,{className:"footer-ru-tip",title:C.title,closable:!1})]}):(0,h.jsx)(P,(0,n.A)({},k)),(0,h.jsx)(z,{ssr:k.ssr}),(0,h.jsxs)("div",{className:"f-c",children:[(0,h.jsx)(y,(0,n.A)((0,n.A)({},k),{},{data:A})),(0,h.jsx)(S,(0,n.A)({},k))]}),(0,h.jsx)(B,(0,n.A)({},k))]}),T.title&&(0,h.jsx)(v,{className:"footer-ru-tip ru-tip-bottom",title:T.title,closable:!1})]})})};var V=o(5531),$=o(3936);!function(e){var t,o,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=document.getElementById("footerContainer"),s=null===(t=window)||void 0===t||null===(o=t.__INIT_STATE__)||void 0===o||null===(r=o.footerContext)||void 0===r?void 0:r.templateConfig,u=i&&0===i.childNodes.length,f=c.A.isApp;if(u){var v=i&&(0,V.createRoot)(i);i&&v.render((0,h.jsx)(e,(0,n.A)((0,n.A)({},a),{},{templateConfig:s})))}else{var m=c.A.lazyHydration?(0,h.jsx)($.O,{children:(0,h.jsx)(e,(0,n.A)((0,n.A)({},a),{},{templateConfig:s}))}):(0,h.jsx)(e,(0,n.A)((0,n.A)({},a),{},{templateConfig:s}));i&&(0,V.hydrateRoot)(i,m,{onRecoverableError:function(e,t){["prod"].includes(c.A.envSign)&&!f&&e?l.v.error("nav footer hydrate fail!",(0,n.A)((0,n.A)({},t),{},{error:e.message,customConfig:d.Xz})):console.error(e)}})}}(q)},9521:(e,t,o)=>{o.d(t,{V4:()=>i});var n=o(1594),r=o.n(n),a=(o(1144),o(5010)),i=(o(4718),function(e){var t=e.onClick,o=e.children,n=e.targetSelector;return(0,a.A)(a.t.ENTER,(function(e){t(e)}),{targetSelector:n,stopPropagation:!0}),r().cloneElement(o,{onClick:t})})},8598:(e,t,o)=>{o.d(t,{FrL:()=>s,mG4:()=>u});var n={act:function(){}};if("undefined"!==typeof window){var r=window.utils.monitor,a=(window._okGlobal||window.okGlobal).site,i=(void 0===a?{}:a).sign,c=void 0===i?"okex":i;n=r.newInstance({site:c.toLocaleLowerCase(),product:"seo",commonParams:{}})}var l=n,s=function(){l.act({action:"web_footer_navigation_support_community_more_click",anchor:"web_footer_navigation_support_community_more_click",params:{},actionType:"",elementType:""})},u=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).footerCommunitychannels;l.act({action:"web_footer_navigation_support_community_channels_click",anchor:"web_footer_navigation_support_community_channels_click",params:{footerCommunitychannels:e},actionType:"",elementType:""})}},1594:e=>{e.exports=React},5206:e=>{e.exports=ReactDOM},2096:e=>{e.exports=okxGlobal},7185:e=>{e.exports=utils.ont},867:e=>{e.exports=JSON.parse('{"D":{"project":"okx_web_seo_tdk","site":"okx"}}')}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,(()=>{var e=[];o.O=(t,n,r,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,r,a]=e[u],c=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(c=!1,a<i&&(i=a));if(c){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]}})(),o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.e=()=>Promise.resolve(),o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j=1574,(()=>{try{if(o.miniCssF){var e=o.miniCssF;o.miniCssF=function(t){var o=e(t);if("string"!==typeof o)return o;var n=window._okGlobal||window.okGlobal;return n&&n.isRTL&&/\.css$/.test(o)?o.replace(/\.css$/,".rtl.css"):o}}}catch(t){}})(),(()=>{var e={1574:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[i,c,l]=n,s=0;if(i.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(l)var u=l(o)}for(t&&t(n);s<i.length;s++)a=i[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=self.webpackChunkokx_nav=self.webpackChunkokx_nav||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=o.O(void 0,[5271,4121],(()=>o(3086)));n=o.O(n)})();
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/okx-nav/footer/index.e844afa7.js.map