"use strict";(self.webpackChunk_ok_universe_swap=self.webpackChunk_ok_universe_swap||[]).push([[9739],{47643:(e,t,s)=>{s.d(t,{A:()=>a});var n=s(41594),r=s(96583);class a extends n.PureComponent{constructor(e){super(e),this.state={hasError:!1,error:void 0,errorInfo:{}}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t}),r.Ay.error(r.Nz.ERROR_BOUNDARY,{error:e,errorInfo:t}),this.props.onError&&this.props.onError(e,t)}render(){var e=this.state,t=e.error,s=e.errorInfo;return e.hasError?this.props.fallbackComponent({error:t,errorInfo:s}):this.props.children}}},9632:(e,t,s)=>{s.d(t,{A:()=>o});s(41594);var n=s(35840),r=s(28667),a=s(72447),i=(s(44418),s(65983));const o=()=>(0,i.jsx)("div",{className:"mt-50",children:(0,i.jsx)(a.A,{pastDelay:!1,error:!0,delayTime:1e4,alt:"dexGenericError",retry:()=>{(0,n.u)((0,r.A)().pathname,"_self")}})})},91905:(e,t,s)=>{s.d(t,{A:()=>f});var n=s(89379),r=s(53986),a=s(41594),i=s(47778),o=(s(11947),s(52759)),c=s(70001),l=s(5544),h=s(35293),d=s(8715),u=s(4679),v=s(46273);var A=s(65983),p=["children","href","target","withLangPath","handleStyle","disable"];const f=e=>{var t=e.children,s=e.href,f=e.target,C=void 0===f?"_self":f,w=e.withLangPath,g=void 0===w||w,m=e.handleStyle,E=void 0===m||m,S=e.disable,I=void 0!==S&&S,_=(0,r.A)(e,p),b=(0,c.A)(s),k=function(e,t){var s=(0,a.useState)(e),n=(0,l.A)(s,2),r=n[0],i=n[1];return(0,a.useEffect)((()=>{var s=(0,h.A)(t,d.A.href);i(v.fO||!s||(0,u.A)()?"_blank":e)}),[e,t]),r}(C,b),T=(0,o.ul)(k);return I?(0,A.jsx)("span",(0,n.A)((0,n.A)({},_),{},{children:t})):(0,A.jsx)(i.A,(0,n.A)((0,n.A)({href:b,target:k,withLangPath:g,handleStyle:E,rel:T},_),{},{children:t}))}},70001:(e,t,s)=>{s.d(t,{A:()=>i});var n=s(5544),r=s(41594),a=s(52759);const i=e=>{var t=(0,r.useState)(e),s=(0,n.A)(t,2),i=s[0],o=s[1];return(0,r.useEffect)((()=>{var t=(0,a.Ay)(e);o(t)}),[e]),i}},78720:(e,t,s)=>{s.d(t,{H:()=>r,e:()=>n});var n="",r="hide_detail_alert"},85213:(e,t,s)=>{s.d(t,{Ay:()=>h,Ru:()=>o});var n=s(53986),r=s(89379),a=s(83268),i=["fromAmount"],o={SUCCESS:"success",FAIL:"fail",REJECT:"reject",TXHASH:"txhash",APPROVE:"approve",CONNECT:"connect",APP_STATUS:"appStatus",CLOSE:"close"},c=Object.values(o);class l{constructor(){var e=this;this.toast=!0,this.setToast=e=>{this.toast=e},this.chainList=[],this.setChainList=e=>{this.chainList=e},this.quote={},this.updateQuote=e=>{this.quote=(0,r.A)((0,r.A)({},this.quote),e)},this.portal="",this.setPortal=e=>{this.portal=e||""},this.swapParams={},this.setSwapParams=e=>{var t=e.fromAmount,s=(0,n.A)(e,i);this.swapParams=(0,r.A)((0,r.A)({},s),{},{fromAmount:(0,a.gf)(t)?t:"1"})},this.status="",this.reset=()=>{this.to={},this.from={},this.events={},this.swapParams={}},this.on=(e,t)=>{if(!c.includes(e))return new Error("Not support event!!");if("function"!==typeof t)return{};this.events[e]||(this.events[e]=[]);var s="".concat(e).concat(this.events[e].length);return this.events[e].push({cb:t,eventId:s}),{eventId:s,remove:()=>{this.remove(e,s)}}},this.emit=function(t){for(var s=arguments.length,n=new Array(s>1?s-1:0),r=1;r<s;r++)n[r-1]=arguments[r];var a=e.events[t];a&&a.length&&a.forEach((t=>{var s=t.cb;s&&s.apply(e,n)}))},this.remove=function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.events[t];n&&s&&n.forEach(((e,t)=>{e.eventId===s&&n.splice(t,1)}))},this.removeAll=()=>{this.events={}},this.events={}}static init(e){return this.instance||(this.instance=new l(e)),this.instance}}l.instance=null;const h=new l},69268:(e,t,s)=>{s.d(t,{A:()=>k});var n=s(90675),r=s(10467),a=s(89379),i=s(53986),o=s(44497),c=s(3296),l=(s(49825),s(47185)),h=s.n(l),d=s(84039),u=s(95323),v=s(78720),A=s(85213),p=s(29153),f=s(46273),C=s(40476),w=s(5375),g=s(63021),m=s(78340),E=s(84975),S=(e,t)=>{for(var s=e.split(".").map(Number),n=t.split(".").map(Number),r=Math.max(s.length,n.length),a=0;a<r;a++){var i=s[a]||0,o=n[a]||0;if(i>o)return 1;if(i<o)return-1}return 0};class I{constructor(){var e=this;this.btcAddressType="",this.setBtcAddressType=e=>{this.btcAddressType=e},this.commonStore=null,this.userForbiddenWithBridge=u.OXG,this.setUserForbiddenBridge=e=>{this.userForbiddenWithBridge=e},this.defaultWalletConfig=u.z2U,this.walletConfig=this.defaultWalletConfig,this.hasInitWalletInfo=!1,this.chainId=v.e,this.setChainId=e=>{this.chainId=e},this.fromChainId=v.e,this.setFromChainId=e=>{this.fromChainId=e},this.walletSupportMev=!1,this.setWalletSupportMev=e=>{this.walletSupportMev=e},this.checkOkxVersion=(0,r.A)((0,n.A)().mark((function t(){var s,r,a,i,o,c,l;return(0,n.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a="2.82.31",i=e.walletConfig.isOkxWallet,!(e.isConnectedWallet&&i&&null!==(s=window)&&void 0!==s&&null!==(r=s.okxwallet)&&void 0!==r&&r.getVersion)){t.next=11;break}return t.next=5,window.okxwallet.getVersion();case 5:o=t.sent,c=S(o,a),l=c>=0,e.setWalletSupportMev(l),t.next=12;break;case 11:e.setWalletSupportMev(!1);case 12:case"end":return t.stop()}}),t)})))}getDeviceId(){}getChainId(){}get scanAppType(){throw new Error("scanAppType is not defined")}get walletType(){throw new Error("walletType is not defined")}get address(){return v.e}get computedForbiddenBridge(){return(0,g.A)(this.rootStore,"fromToStore",{}).computedIsCrossChain?this.userForbiddenWithBridge:u.OXG}get computedAccountId(){return this.walletConfig.walletId}setWalletConfig(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.walletConfig=e}getAddressByChainId(){}get isConnectedWallet(){return!!this.walletConfig.walletId}get computedNonsupportChain(){return!(!this.isConnectedWallet||!(0,E.Jx)(this.fromChainId))&&!this.address}get computedAccountWalletAddresses(){return(0,m.A)((0,g.A)(this,"walletConfig.address",[])).join(",")||this.address}get computedAccountWalletAddressesArray(){return(0,m.A)((0,g.A)(this,"walletConfig.address",[]))||[this.address]}get computedSpecialWalletAddress(){return this.getAddressByChainId(u.aj.BTC_MAINNET)}}const _=(0,s(92394).A)(["walletConfig","chainId","hasInitWalletInfo","fromChainId","btcAddressType"],["computedAccountId","isConnectedWallet","computedNonsupportChain","computedAccountWalletAddresses","computedAccountWalletAddressesArray","address","computedSpecialWalletAddress"]);var b=["currentAccount"];class k extends I{constructor(e){var t;super(),t=this,this.walletChange=function(){var e,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((0,p.w)()&&s.walletType&&d.A.createAdapter({isForce:!0}),t.hasInitWalletInfo=!0,null===(e=s.currentAccount)||void 0===e||!e.isWatched){var n=s.currentAccount,r=(0,i.A)(s,b),o=(0,a.A)((0,a.A)((0,a.A)({},t.defaultWalletConfig),n),r);o.walletId!==t.walletConfig.walletId&&t.resetWithAccount(),o.walletId&&!t.walletConfig.walletId&&A.Ay.emit(A.Ru.CONNECT,{status:0}),t.setWalletConfig(o)}},this.chainChange=(e,t)=>{var s,n,r;if(null!==(s=this.commonStore)&&void 0!==s&&s.getChainByID&&!this.commonStore.getChainByID(e))return void c.A.error({title:(0,C.kW)("swaptrade_placeorder_toast_error_unsupported_network")});(this.setChainId(Number(e)),t)&&(this.resetWithAccount(),this.isConnectedWallet&&(null===(n=this.rootStore.fromToStore)||void 0===n||n.resetFromTo(Number(e)),null===(r=this.rootStore.fromToStore)||void 0===r||r.getSwapTokenBalance()))},this.resetWithAccount=()=>{var e,t;null===(e=this.rootStore)||void 0===e||null===(t=e.approveStore)||void 0===t||t.clearNonApprovingTokensConfig(),this.clearModal()},this.disconnectAccount=()=>{this.clearModal(),(0,w.GZ)()},this.clearModal=()=>{var e=this.rootStore,t=e.tokenModalStore,s=e.recentTransactionStore,n=e.swapStore,r=e.swapBtnStore,a=e.limitOrderConfirmStore;t&&s&&(s.closeModal(),t.tokenModalVisible=!1,n.setConfirmSwapVisible(!1),null===r||void 0===r||r.closeErrorTipsDialog()),a&&!a.secondConfirmLoading&&a.setSecondConfirmDialogVisible(!1)},this.getAddressByChainId=e=>{var t;return(null===(t=this.walletConfig.chainIdAddressMap)||void 0===t?void 0:t[e])||v.e},this.rootStore=e,this.commonStore=e.commonStore,(0,o.makeObservable)(this,(0,a.A)({},_))}getDeviceId(){return(0,r.A)((0,n.A)().mark((function e(){return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h().getDeviceId());case 1:case"end":return e.stop()}}),e)})))()}getChainId(){return(0,w.TH)()}get address(){var e=this.fromChainId;return f.fO&&!u.DLr.includes(Number(e))?v.e:this.getAddressByChainId(e)}}},52759:(e,t,s)=>{s.d(t,{Ay:()=>d,ul:()=>u});var n=s(46952),r=s(35293),a=s(8715),i=s(75170),o=s(55774),c="",l="www.oklink.com",h="/web3/explorer";function d(e){if(!(0,n.A)(e))return"";if((0,o.A)())return e;try{var t=new URL(e);if([c,l].map((e=>"https://".concat(e))).find((t=>(0,r.A)(e,t)))||(0,r.A)(e,a.A.href)){var s=e.replace(t.origin,"");return s=t.host===l?"".concat(h).concat(s):s,(0,i.CZ)(s)}return e}catch(d){return e}}function u(e){return"_blank"===e?"nofollow":"noreferrer"}},179:(e,t,s)=>{s.d(t,{A:()=>l});var n=s(10954),r=s(18191),a=s(26684),i=r.m.SUBSCRIBE,o=r.m.UNSUBSCRIBE,c=r.m.PING;class l{constructor(){this.wsInstance=null,this.initDone=!1,this.authenticated=!0,this.disconnected=!1,this.dataFnsMap=new Map,this.channelCache=new Map,this.wsDataCache={},this.errorFnsList=new Set}connect(){if(!this.initDone){this.initDone=!0;var e=this.getWsUrl();this.wsInstance=new n.A({connectUrl:e,reconnectTime:1e4,maxPendingTime:2e4}),this.wsInstance.onSocketConnected(this.connectedCallback.bind(this)),this.wsInstance.setPushDataResolver(this.dataCallback.bind(this)),this.wsInstance.onSocketError(this.errorCallback.bind(this)),this.wsInstance.onPushDiscontinue((()=>{this.wsInstance.sendChannel(c)})),this.wsInstance.connect()}}subscribe(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{needLogin:!1}).needLogin,s=(0,a.$r)(e),n=[];s.forEach((e=>{var t=(0,a.RW)(e),s=this.channelCache.get(t);if(s){var r;this.channelCache.set(t,s+1);var i=e.channel,o=(0,a.el)(i),c=null===(r=this.wsDataCache[o])||void 0===r?void 0:r[t];c&&(0,a.wf)(this.dataFnsMap.get(o),c)}else this.channelCache.set(t,1),n.push(e)})),this.initDone?this.isConnected()&&(t&&!this.authenticated||this.sendChannel({op:i,args:n})):this.connect()}unsubscribe(e){var t=(0,a.$r)(e),s=[];t.forEach((e=>{var t,n=(0,a.RW)(e),r=this.channelCache.get(n);if(r>1)this.channelCache.set(n,r-1);else{this.channelCache.delete(n),s.push(e);var i=(0,a.el)(e.channel);i&&(null===(t=this.wsDataCache[i])||void 0===t||delete t[n])}})),this.initDone&&this.isConnected()&&this.sendChannel({op:o,args:s})}sendChannel(e){var t=e.op,s=e.args,n=void 0===s?[]:s;this.isConnected()&&n.length&&this.wsInstance.sendChannel(JSON.stringify({op:t,args:n}))}dataCallback(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.arg;if(null!==t&&void 0!==t&&t.channel){(0,a.wf)(this.dataFnsMap.get(t.channel),e);var s=(0,a.el)(null===t||void 0===t?void 0:t.channel);if(s){var n=(0,a.RW)(t);this.wsDataCache[s]?this.wsDataCache[s][n]=e:this.wsDataCache[s]={[n]:e}}}}addListenerData(e,t){return this.dataFnsMap.get(e)||this.dataFnsMap.set(e,new Set),this.wsDataCache[e]&&Object.values(this.wsDataCache[e]).forEach((e=>{t({event:i}),t(e)})),(0,a.DW)(this.dataFnsMap.get(e),t)}remoteListenerData(e,t){return(0,a.Cn)(this.dataFnsMap.get(e),t)}addListenerError(e){return(0,a.DW)(this.errorFnsList,e)}errorCallback(e){this.disconnected=!0,(0,a.wf)(this.errorFnsList,e)}connectedCallback(){var e=[];this.channelCache.forEach(((t,s)=>{try{e.push(JSON.parse(s))}catch(n){}})),this.sendChannel({op:i,args:e})}isConnected(){var e;return!(null===(e=this.wsInstance)||void 0===e||!e.isConnected())}getWsUrl(){return""}}},37163:(e,t,s)=>{s.d(t,{w:()=>r,y:()=>n});var n={DEX_MARKET_CHANNEL:"dex-market",DEX_MARKET_TX_CHANNEL:"dex-market-v3",DEX_MARKET_HOLDER_CHANNEL:"dex-market-holder",DEX_MARKET_HOLDER_CHANNEL_V2:"dex-market-holder-v2",DEX_MARKET_TRANSACTION_HISTORY_CHANNEL:"dex-market-trade-history",DEX_MARKET_ADDRESS_SWAP_HISTORY:"dex-market-address-swap-history",DEX_MARKET_POOL_CHANGES_CHANNEL:"dex-market-pool-history",DEX_MARKET_PNL_LATEST:"dex-market-pnl-latest",DEX_MARKET_PNL_HISTORY:"dex-market-pnl-history",DEX_MARKET_TOKEN_KLINE_BAR:"dex-token-candle{bar}",DEX_MARKET_KLINE_HOLDER_BS:"dex-market-kline-bs",DEX_MARKET_HOLDER_TRADE_STATISTICS:"dex-market-trade-history-statistics"},r={DEX_PUSH_ENGINE:"dex-across-order-info",WALLET_ASSET:"wallet-asset"}},18191:(e,t,s)=>{s.d(t,{m:()=>n,x:()=>r});var n={JWT:"jwt",SUBSCRIBE:"subscribe",UNSUBSCRIBE:"unsubscribe",PING:"ping",PONG:"pong",LOGIN:"login",LOGOUT:"logout"},r=()=>{}},14585:(e,t,s)=>{s.d(t,{A:()=>d});var n=s(84854),r=s(22038),a=s(96583),i=s(55774),o=s(179),c=s(18191),l=s(26684);class h extends o.A{constructor(){super(...arguments),this.connectedFnsList=new Set,this.authenticated=!1,this.loginResolveFn=c.x,this.loginRejectFn=c.x,this.tokens=""}connectedCallback(){this.tokens&&this.login(this.tokens).then((()=>{this.authenticated=!0,super.connectedCallback(),(0,l.wf)(this.connectedFnsList,{disconnected:this.disconnected})})).catch((()=>{a.Ay.stuff("ws login fail")}))}addListenerConnected(e){return(0,l.DW)(this.connectedFnsList,e)}dataCallback(e){var t=e.event,s=e.code;if(t===c.m.LOGIN){if(0===Number(s))return void this.loginResolveFn();this.loginRejectFn()}else super.dataCallback(e)}login(e){return new Promise(((t,s)=>{this.wsInstance.sendChannel(JSON.stringify({op:c.m.LOGIN,args:(0,l.ei)(e)})),this.loginResolveFn=t,this.loginRejectFn=s}))}logout(e){this.authenticated&&this.isConnected()&&(this.authenticated=!1,this.wsInstance.sendChannel(JSON.stringify({op:c.m.LOGOUT,args:(0,l.ei)(e)})))}getWsUrl(){var e,t,s,o,c="";(0,i.A)()?c="wss://".concat(null===(e=r.A.global)||void 0===e?void 0:e.getWssHostname()):c=null===(t=n.A.socketBaseUrls)||void 0===t?void 0:t.dex;c||a.Ay.error("SOCKET_BASE_URL_EMPTY",{wallet:"wss://".concat(null===(s=r.A.global)||void 0===s?void 0:s.getWssHostname()),webDev:"wss://wsdexpre.coinall.ltd:8443",web:null===(o=n.A.socketBaseUrls)||void 0===o?void 0:o.dex});return"".concat(c,"/ws/v5/iprivate")}}const d=new h},42299:(e,t,s)=>{s.d(t,{A:()=>l});var n=s(84854),r=s(22038),a=s(55774),i=s(179),o=s(26684);class c extends i.A{constructor(){super(...arguments),this.connectedFnsList=new Set}connectedCallback(){super.connectedCallback(),(0,o.wf)(this.connectedFnsList,{disconnected:this.disconnected})}addListenerConnected(e){return(0,o.DW)(this.connectedFnsList,e)}getWsUrl(){var e,t,s=localStorage.getItem("dev_ct_wsPress"),i="";(0,a.A)()?i="wss://".concat(null===(e=r.A.global)||void 0===e?void 0:e.getWssHostname()):i=null===(t=n.A.socketBaseUrls)||void 0===t?void 0:t.dex;return s||"".concat(i||"","/ws/v5/ipublic")}}const l=new c},26684:(e,t,s)=>{s.d(t,{$r:()=>c,Cn:()=>i,DW:()=>o,RW:()=>l,ei:()=>h,el:()=>d,wf:()=>a});var n=s(99692),r=s(37163);function a(e,t){e&&e.forEach((e=>{e(t)}))}function i(e,t){e.has(t)&&e.delete(t)}function o(e,t){return(0,n.f)()||e.add(t),()=>i(e,t)}function c(e){return Array.isArray(e)?e:[e]}function l(e){if(!e)return"";var t={};return Object.keys(e).sort().forEach((s=>{t[s]=e[s]})),JSON.stringify(t)}var h=e=>e?e.split(",").map((e=>({token:e}))):[];function d(e){switch(e){case"dex-token-candle1m":case"dex-token-candle15m":case"dex-token-candle4H":case r.w.WALLET_ASSET:case r.w.DEX_PUSH_ENGINE:return e;default:return""}}},37007:(e,t,s)=>{s.d(t,{A:()=>a});var n=s(41594),r=s(29153);const a=e=>{var t=(e||{}).isFull,s=void 0!==t&&t,a=(0,r.w)();return(0,n.useMemo)((()=>a?{headerLine:!1,transitionProps:{type:"slide",placement:"bottom",timeout:300},isFull:s}:{}),[a,s])}}}]);
//# sourceMappingURL=https://static-daily.okg.com/crash/okexchain/universe-swap/9739/index.de899672.js.map