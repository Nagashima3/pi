(self.webpackChunk_ok_universe_swap=self.webpackChunk_ok_universe_swap||[]).push([[2726],{73307:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});s(41594);var i=s(57208),r=(s(39053),s(72231)),n=s(65983);const a=e=>{var t=e.tokenSymbol,s=(0,r.b)(t);return(0,n.jsx)(i.A,{title:t,disabled:s===t,children:s})}},45414:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var i=s(89379),r=s(53986),n=(s(41594),s(83573)),a=s.n(n),o=s(20376);s(99559);const h={icon:"index_icon__zs3IU"};var l=s(65983),u=["className","type","size"];function d(e){var t=e.className,s=void 0===t?"":t,n=e.type,d=void 0===n?"":n,c=e.size,v=(0,r.A)(e,u),T={fontSize:"".concat(c,"px")};return(0,l.jsx)(o.A,(0,i.A)({className:a()(d,h.icon,s),style:T},v))}},16931:(e,t,s)=>{"use strict";s.d(t,{A:()=>A});var i=s(89379),r=s(5544),n=s(53986),a=s(41594),o=s(83573),h=s.n(o),l=s(71615),u=(s(58704),s(2752));const d="index_logo-wrapper__3764L",c="index_img__mqrFT";var v=s(65983),T=["className","alt","src","size","handleError"];const A=e=>{var t=e.className,s=void 0===t?"":t,o=e.alt,A=void 0===o?"":o,p=e.src,m=void 0===p?"":p,g=e.size,L=void 0===g?32:g,I=e.handleError,b=void 0===I||I,S=(0,n.A)(e,T),E=(0,a.useState)(m||(0,u.IR)()),C=(0,r.A)(E,2),f=C[0],w=C[1];return(0,a.useEffect)((()=>{m&&w(m)}),[m]),(0,v.jsx)("div",{style:{width:L,height:L},className:h()(d,s),children:(0,v.jsx)(l.A,(0,i.A)({className:h()("base-logo",c),alt:A,src:f,onError:()=>{b&&w((0,u.IR)())}},S))})}},56494:(e,t,s)=>{"use strict";s.d(t,{EL:()=>o,dg:()=>a,ei:()=>n,mz:()=>r,yc:()=>i});var i="universe_swap",r="show_max_dialog",n="show_max_dialog_less_gas",a="okxwallet-extension",o={WALLET_DASHBOARD:"WALLET_DASHBOARD",DEX:"DEX",NFT:"NFT",MARKET:"MARKET",OKX_WALLET_EXTENSION:a,LEDGER:"LEDGER",WIDGET:"WIDGET"}},85e3:(e,t,s)=>{"use strict";s.d(t,{B:()=>r});var i=s(12962);class r{constructor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"PROVIDER_ON_EVENT";this.listeners=new Map,this.eventType=e}setEventType(e){this.eventType=e}getEventType(){return this.eventType}getListeners(){return Array.from(this.listeners.values())}updateListener(e,t){if(this.listeners.has(e)){var s=this.listeners.get(e);(0,i.ql)(window,this.eventType,s)}this.listeners.set(e,t)}removeAllListener(){this.listeners.forEach((e=>{(0,i.ql)(window,this.eventType,e)})),this.listeners.clear()}removeListener(e){if(this.listeners.has(e)){var t=this.listeners.get(e);(0,i.ql)(window,this.eventType,t),this.listeners.delete(e)}}sendMessage(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"connect",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ethereum",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3?arguments[3]:void 0,n=Date.now();this.listenMessage(n,r),(0,i.TA)(window.parent,this.eventType,{id:n,mode:"window",path:e,type:t,params:s})}sendMessageEvent(e,t,s){var r=Date.now();this.listenMessage(r,s),(0,i.TA)(window.parent,"EMIT_OKX_EVENT",{id:r,mode:"window",event:e,params:t})}sendReadyMessageEventToParent(){(0,i.TA)(window.parent,"LOAD_READY",{event:"ready"})}listenMessage(e,t){var s=(0,i.mB)(window,this.eventType,(s=>{String(s.id)===String(e)&&(t(s),this.removeAllListener())}));this.updateListener(this.eventType,s)}}},80537:(e,t,s)=>{"use strict";s.d(t,{A:()=>w});var i=s(89379),r=s(44497),n=s(99692),a=s(26204),o=s(32096),h=s.n(o),l=s(40476),u=s(84975),d=s(29153),c=s(5375),v=s(90675),T=s(10467),A=s(63021),p=s(60363),m=s(95323),g=s(56494),L=s(46414),I=s(6266),b=s(46273),S=s(23852),E=s(19081);class C{constructor(e){var t=this;this.rootStore=null,this.userUniqueId=(0,E.zv)(),this.chainListFreshCount=0,this.chainList=[],this.setChainList=e=>{this.chainList=e,this.chainListFreshCount+=1},this.transactionLoading=!1,this.setTransactionLoading=e=>{this.transactionLoading=e},this.nowCurrencyUnit={},this.tokenModalVisible=!1,this.safemoonSlippage=0,this.fetchChainList=function(){var e=(0,T.A)((0,v.A)().mark((function e(s){var r,a,o,h,l,u,d,c,T,A,p;return(0,v.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=s.businessLine,a=void 0===r?1:r,o=s.isLimit,h=void 0!==o&&o,l=s.isHistory,u=void 0!==l&&l,d=s.currentTab,c=s.chainIdConfig,T=void 0===c?{}:c,!(0,n.f)()){e.next=3;break}return e.abrupt("return",[]);case 3:return A=(0,I.e9)(I.q5.CHAIN_LIST,t.currentTab||d),e.next=6,L.Ay.get(A,{params:(0,i.A)({businessLine:h?m.Mum.LIMIT_ORDER:a},T)});case 6:return p=e.sent,!u&&t.setChainList(null===p||void 0===p?void 0:p.data),t.setCurrentTabChainList({[h?m.hY5.LIMIT_ORDER:m.hY5.SWAP]:null===p||void 0===p?void 0:p.data}),e.abrupt("return",null===p||void 0===p?void 0:p.data);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.currentTabChainList={},this.setCurrentTabChainList=e=>{this.currentTabChainList=(0,i.A)((0,i.A)({},this.currentTabChainList),e)},this.getTradeType=()=>{var e,t;return null!==(e=this.rootStore)&&void 0!==e&&null!==(t=e.fromToStore)&&void 0!==t&&t.computedIsCrossChain?m.GrU.MULTI:m.GrU.SINGLE},this.globalMessages=null,this.setGlobalMessage=e=>{this.globalMessages=e},this.cleanGlobalMessage=()=>{this.globalMessages=null},this.socketStatus=!1,this.balancePushSocketStatus=!1,this.resetFromToByTabChange=!1,this.setResetFromToByTabChange=e=>{this.resetFromToByTabChange=e},this.portal=g.EL.DEX,this.setPortal=e=>{this.portal=e},this.currencyConversion=e=>{var t=this.nowCurrencyUnit.usdToThisRate,s=p._.BigNumber(e);return!t||s.isNaN()?"":s.multipliedBy(t)},this.currencyReConversion=e=>{var t=this.nowCurrencyUnit.usdToThisRate,s=p._.BigNumber(e);return!t||s.isNaN()?"":s.dividedBy(t).toString()},this.isSensitiveChain=e=>this.computedSensitiveChainIds.some((t=>String(t)===String(e))),this.getTokenAddress=e=>(0,S.me)(e,this.isSensitiveChain(null===e||void 0===e?void 0:e.chainId)),this.equalsChainId=(e,t)=>(0,S.VK)(e,t),this.equalsToken=(e,t)=>{var s=this.isSensitiveChain(null===e||void 0===e?void 0:e.chainId);return(0,S.Wu)(e,t,s)},this.fromFillToken=!1,this.currentTab="",this.setCurrentTab=(e,t)=>{var s,i;this.currentTab!==e&&(this.setResetFromToByTabChange(!0),null===(s=this.rootStore)||void 0===s||null===(i=s.fromToStore)||void 0===i||i.clearFromTo());this.currentTab=e,this.fromFillToken=!!t},this.forceUpdateFromToByHash=0,this.forceUpdateFromTo=()=>{this.forceUpdateFromToByHash+=1},this.isFirstInit=!0,this.visibleAddFunds=!1,this.setAddFundsVisible=e=>{this.visibleAddFunds=e},this.currencyConversionWithSymbol=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.currencyConversion(e).toString(),r=t.computedNowCurrencySymbol;return(0,u.az)(i,r,s)},this.disclaimerVisible=!1,this.setDisclaimerVisible=e=>{this.disclaimerVisible=e},this.rootStore=e,b.fO&&this.setPortal(g.EL.LEDGER)}setChainType(){}get computedReserveGas(){var e=this.chainList,t=(0,A.A)(this.rootStore,"fromToStore.from.chainId"),s=e.find((e=>Number(e.chainId)===Number(t)));return(null===s||void 0===s?void 0:s.reserveGas)||""}getChainByID(e){return this.chainList.find((t=>(this.computedCurrentTabIsLimit||t.chainUsed)&&t.chainId===Number(e)))}getUserUnit(){}get computedRealSlippageValue(){return(0,A.A)(this,"rootStore.slippageStore",{}).computedRealSlippageValue||0}setSocketStatus(e){this.socketStatus=e}setBalanceSocketStatus(e){this.balancePushSocketStatus=e}get computedIsWalletEnv(){return this.portal===g.EL.OKX_WALLET_EXTENSION}get computedIsWalletDashBoard(){return this.portal===g.EL.WALLET_DASHBOARD}get computedIsMarket(){return this.portal===g.EL.MARKET}get computedNotThirdBiz(){return this.portal===g.EL.OKX_WALLET_EXTENSION||this.portal===g.EL.DEX||this.portal===g.EL.MARKET}get computedNowCurrencySymbol(){return this.nowCurrencyUnit.symbol||""}get computedSensitiveChainIds(){return this.chainList.map((e=>Number(e.isSensitive)===m.IUU.YES?e.chainId:null)).filter(Boolean)}get computedCurrentTabIsLimit(){return this.currentTab===m.hY5.LIMIT_ORDER}get computedIsUrlFillSwap(){return this.computedIsWalletDashBoard||this.computedIsWalletEnv}setIsFirstInit(e){this.isFirstInit=e}}const f=(0,s(92394).A)(["userUniqueId","chainList","transactionLoading","nowCurrencyUnit","tokenModalVisible","safemoonSlippage","globalMessages","socketStatus","balancePushSocketStatus","portal","currentTab","currentTabChainList","forceUpdateFromToByHash","isFirstInit","visibleAddFunds","disclaimerVisible"],["computedReserveGas","computedNowCurrencySymbol","computedSensitiveChainIds","computedIsWalletEnv","computedCurrentTabIsLimit"]);class w extends C{constructor(e){super(e),(0,r.makeObservable)(this,(0,i.A)({},f)),this.getUserUnit(),this.configConnectAndSwitchNetwork()}connectAndSwitchNetwork(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(0,u.Jx)(e)?e:this.rootStore.fromToStore.from.chainId;return(0,c.Uh)(t)}configConnectAndSwitchNetwork(){(0,c.WV)({onFailed(){a.A.warn((0,l.kW)("swaptrade_mid_alert_network_switch_failed"))}})}setChainType(e){return(0,c.wh)(e)}getUserUnit(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(0,n.f)()||h().preference.getUnit((t=>{var s,r=t.nowCurrencyUnit,n=t.allCurrencyUnit,a=(0,d.w)(),o=(0,i.A)({},r);a&&e&&(o=n.find((t=>t.isoCode===e))),this.nowCurrencyUnit=null!==(s=o)&&void 0!==s?s:{}}))}}},92394:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});var i=s(89379),r=s(44497);function n(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t={};(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((e=>{t[e]=r.observable}));var s={};return e.forEach((e=>{s[e]=r.computed})),(0,i.A)((0,i.A)({},t),s)}},53473:(e,t,s)=>{"use strict";s.d(t,{I:()=>a,d:()=>o});var i=s(63010),r=s(99692),n=s(56494);i.A.init({project:n.yc}),i.A.session.init({project:n.yc});var a=(0,r.f)()?i.A:i.A.getInstance(n.yc),o=(0,r.f)()?i.A.session:i.A.session.getInstance(n.yc)},72231:(e,t,s)=>{"use strict";s.d(t,{b:()=>i});var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.substring(0,10);return e.length>10?"".concat(t,"..."):e}},6266:(e,t,s)=>{"use strict";s.d(t,{e9:()=>h,l5:()=>n,nW:()=>r,q5:()=>a});var i=s(95323),r={FROM:"FROM",TO:"TO"},n={COMMON:"COMMON",COLLECTION:"COLLECTION"},a={COLLECT_LIST:"COLLECT_LIST",ALL_NETWORK:"ALL_NETWORK",CHAIN_LIST:"CHAIN_LIST",SEARCH:"SEARCH",ALL_TOKENS:"ALL_TOKENS"},o={[a.COLLECT_LIST]:{[i.hY5.SWAP]:i.tt6,[i.hY5.LIMIT_ORDER]:i.Dig,[i.hY5.BRIDGE]:i.nht},[a.ALL_NETWORK]:{[i.hY5.SWAP]:i.Ycx,[i.hY5.LIMIT_ORDER]:i.QcF,[i.hY5.BRIDGE]:i.ab4},[a.SEARCH]:{[i.hY5.SWAP]:i._Jh,[i.hY5.LIMIT_ORDER]:i.CdU,[i.hY5.BRIDGE]:i.Ik2},[a.CHAIN_LIST]:{[i.hY5.SWAP]:i.NfZ,[i.hY5.LIMIT_ORDER]:i.Ofw,[i.hY5.BRIDGE]:i.J8P},[a.ALL_TOKENS]:{[i.hY5.SWAP]:i.BFW,[i.hY5.LIMIT_ORDER]:i.BFW,[i.hY5.BRIDGE]:i.N23}},h=(e,t)=>{var s,i;return null!==(s=null===(i=o[e])||void 0===i?void 0:i[t])&&void 0!==s?s:""}},56961:(e,t,s)=>{"use strict";s.d(t,{D:()=>n,Y:()=>r});var i=s(85e3),r=new i.B,n=new i.B("NO_WALLET_CONNECT")},70212:(e,t,s)=>{"use strict";s.d(t,{G:()=>a,x:()=>n});var i=s(28667),r=s(95323);function n(){var e=(0,i.A)().pathname;return e.includes(r.T5I)||e.includes(r.lxT)}function a(){var e=(0,i.A)().pathname;return e.includes(r.XsX)||e.includes(r.pWx)}},46273:(e,t,s)=>{"use strict";s.d(t,{fO:()=>o,gS:()=>a});var i=s(99692),r=s(53473),n=s(4679),a="ledgerEmbed",o=(()=>{if((0,i.f)())return!1;if(r.d.g.get(a))return!0;try{var e=window.self.location,t=!!new URLSearchParams(e.search).get(a),s=(0,n.A)()&&t;return s&&r.d.g.set(a,"1"),s}catch(o){return!1}})()},31604:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var i=s(84039),r=s(96583),n=s(14537);class a extends n.A{constructor(){super(...arguments),this.onSub=e=>{var t=Number(e),s=t!==this.lastChainId;r.Ay.info(r.Nz.ON_CHAIN_CHANGE,{chainId:e,userTrigger:s,evtType:r.Qq}),this.handlers.forEach((e=>{e(t,s)})),this.lastChainId=t}}rawSub(){i.A.onChainChange(this.onSub)}rawUnSub(){i.A.offChainChange(this.onSub),this.lastChainId=void 0}}const o=a},14537:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});const i=class{constructor(){this.handlers=[]}rawSub(){}rawUnSub(){}onSub(){}sub(e){return this.handlers.push(e),1===this.handlers.length&&this.rawSub(),()=>{var t=this.handlers.indexOf(e);t>-1&&(this.handlers.splice(t,1),0===this.handlers.length&&this.rawUnSub())}}}},46320:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var i=s(90675),r=s(10467),n=s(96100),a=s(63021),o=s(84039),h=s(96583),l=s(14537);class u extends l.A{constructor(){super(...arguments),this.lastWalletInfoPromise=null,this.isWeb3Ready=!1,this.onSub=e=>{var t=n.A(a.A(e,"connectedAccount.chainIdAddressMap")),s=["add_connected_wallet","init_wallet"].includes(a.A(e,"actionType"));t&&s&&h.Ay.error(h.Nz.CHAIN_ID_ADDRESS_MAP_IS_EMPTY,{walletInfo:e}),this.isWeb3Ready=!0,this.lastWalletInfoPromise=Promise.resolve(e),this.handlers.forEach((t=>{t(e)})),h.Ay.info(h.Nz.WALLET_INFO,{evtType:"onWalletChange"})}}ensureWeb3Ready(){var e=this;return(0,r.A)((0,i.A)().mark((function t(){return(0,i.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isWeb3Ready){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,o.A.getProviderData();case 4:if(!t.sent.web3Provider.web3Provider){t.next=8;break}return e.isWeb3Ready=!0,t.abrupt("return");case 8:throw Error("web3.js is not ready");case 9:case"end":return t.stop()}}),t)})))()}rawSub(){this.rawSubId=o.A.onWalletChange(this.onSub)}rawUnSub(){o.A.offWalletChange(this.rawSubId),this.lastWalletInfoPromise=null}sub(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=t.needFirstPush,i=void 0!==s&&s,r=t.needWeb3Checker,n=void 0!==r&&r;if(i){this.lastWalletInfoPromise||(this.lastWalletInfoPromise=o.A.getWalletStorage().then((e=>e.getConnectedConfig())).then((e=>e.currentAccount.walletId?o.A.createAdapter().then((()=>n?this.ensureWeb3Ready():null)).then((()=>e)):e)));var a=this.lastWalletInfoPromise;a.then((t=>{this.handlers.includes(e)&&this.lastWalletInfoPromise===a&&(e(t),h.Ay.info(h.Nz.WALLET_INFO,{evtType:"first_push_success"}))})).catch((e=>{h.Ay.info(h.Nz.WALLET_INFO,{evtType:"first_push_failed",error:e})}))}return super.sub(e)}}const d=u},60395:(e,t,s)=>{"use strict";var i=s(84854),r=s(7688),n=s(70775);(0,r.ex)(),(0,r.an)(),(0,n.Wdr)(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("undefined"!==typeof window){var s=window.utils.monitor,r=i.A.site,n=(void 0===r?{}:r).sign,a=void 0===n?"okex":n;return s.newInstance({site:a.toLocaleLowerCase(),product:e,commonParams:t})}return{}}("web3_trade",(0,r._$)()))},47790:()=>{},63779:()=>{},77199:()=>{}}]);
//# sourceMappingURL=https://static-daily.okg.com/crash/okexchain/universe-swap/2726/index.6bebb3d5.js.map