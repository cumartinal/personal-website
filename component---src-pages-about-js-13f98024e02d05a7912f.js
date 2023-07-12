"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[682],{540:function(e,n,t){t.r(n),t.d(n,{Head:function(){return O},default:function(){return M}});var r=t(7294);function a(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}var i=t(7326),l=t(4578),s=t(9864),c=t(8679),u=t.n(c);function h(e,n){if(!e){var t=new Error("loadable: "+n);throw t.framesToPop=1,t.name="Invariant Violation",t}}var d=r.createContext();var f={initialChunks:{}},p="PENDING",m="RESOLVED",y="REJECTED";var v=function(e){var n=function(n){return r.createElement(d.Consumer,null,(function(t){return r.createElement(e,Object.assign({__chunkExtractor:t},n))}))};return e.displayName&&(n.displayName=e.displayName+"WithChunkExtractor"),n},g=function(e){return e};function k(e){var n=e.defaultResolveComponent,t=void 0===n?g:n,c=e.render,d=e.onLoad;function k(e,n){void 0===n&&(n={});var g=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),k={};function b(e){return n.cacheKey?n.cacheKey(e):g.resolve?g.resolve(e):"static"}function w(e,r,a){var o=n.resolveComponent?n.resolveComponent(e,r):t(e);if(n.resolveComponent&&!(0,s.isValidElementType)(o))throw new Error("resolveComponent returned something that is not a React component!");return u()(a,o,{preload:!0}),o}var E=function(e){var n=b(e),t=k[n];return t&&t.status!==y||((t=g.requireAsync(e)).status=p,k[n]=t,t.then((function(){t.status=m}),(function(n){console.error("loadable-components: failed to asynchronously load component",{fileName:g.resolve(e),chunkName:g.chunkName(e),error:n?n.message:n}),t.status=y}))),t},C=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={result:null,error:null,loading:!0,cacheKey:b(t)},h(!t.__chunkExtractor||g.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),t.__chunkExtractor?(!1===n.ssr||(g.requireAsync(t).catch((function(){return null})),r.loadSync(),t.__chunkExtractor.addChunk(g.chunkName(t))),(0,i.Z)(r)):(!1!==n.ssr&&(g.isReady&&g.isReady(t)||g.chunkName&&f.initialChunks[g.chunkName(t)])&&r.loadSync(),r)}(0,l.Z)(t,e),t.getDerivedStateFromProps=function(e,n){var t=b(e);return o({},n,{cacheKey:t,loading:n.loading||n.cacheKey!==t})};var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===y&&this.setCache(),this.state.loading&&this.loadAsync()},r.componentDidUpdate=function(e,n){n.cacheKey!==this.state.cacheKey&&this.loadAsync()},r.componentWillUnmount=function(){this.mounted=!1},r.safeSetState=function(e,n){this.mounted&&this.setState(e,n)},r.getCacheKey=function(){return b(this.props)},r.getCache=function(){return k[this.getCacheKey()]},r.setCache=function(e){void 0===e&&(e=void 0),k[this.getCacheKey()]=e},r.triggerOnLoad=function(){var e=this;d&&setTimeout((function(){d(e.state.result,e.props)}))},r.loadSync=function(){if(this.state.loading)try{var e=w(g.requireSync(this.props),this.props,I);this.state.result=e,this.state.loading=!1}catch(n){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:g.resolve(this.props),chunkName:g.chunkName(this.props),error:n?n.message:n}),this.state.error=n}},r.loadAsync=function(){var e=this,n=this.resolveAsync();return n.then((function(n){var t=w(n,e.props,I);e.safeSetState({result:t,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(n){return e.safeSetState({error:n,loading:!1})})),n},r.resolveAsync=function(){var e=this.props,n=(e.__chunkExtractor,e.forwardedRef,a(e,["__chunkExtractor","forwardedRef"]));return E(n)},r.render=function(){var e=this.props,t=e.forwardedRef,r=e.fallback,i=(e.__chunkExtractor,a(e,["forwardedRef","fallback","__chunkExtractor"])),l=this.state,s=l.error,u=l.loading,h=l.result;if(n.suspense&&(this.getCache()||this.loadAsync()).status===p)throw this.loadAsync();if(s)throw s;var d=r||n.fallback||null;return u?d:c({fallback:d,result:h,options:n,props:o({},i,{ref:t})})},t}(r.Component),_=v(C),I=r.forwardRef((function(e,n){return r.createElement(_,Object.assign({forwardedRef:n},e))}));return I.displayName="Loadable",I.preload=function(e){I.load(e)},I.load=function(e){return E(e)},I}return{loadable:k,lazy:function(e,n){return k(e,o({},n,{suspense:!0}))}}}var b=k({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var n=e.result,t=e.props;return r.createElement(n,t)}}),w=b.loadable,E=b.lazy,C=k({onLoad:function(e,n){e&&n.forwardedRef&&("function"==typeof n.forwardedRef?n.forwardedRef(e):n.forwardedRef.current=e)},render:function(e){var n=e.result,t=e.props;return t.children?t.children(n):null}}),_=C.loadable,I=C.lazy;var R=w;R.lib=_,E.lib=I;var S=R,A=t(4117),N=t(9966),x=t(8897);const K=S((()=>Promise.all([t.e(532),t.e(325)]).then(t.bind(t,1325))),{ssr:!1}),O=()=>r.createElement("title",null,"About Me | Martín Cuesta Allende");function M(){return r.createElement(A.Z,null,r.createElement(N.Z,null),r.createElement("main",null,r.createElement("h1",null,"About Me"),r.createElement("p",null,"I’m a 4th Year MEng student at the University of Manchester doing a Computer Science (Human Computer Interaction) degree. My academic and professional interests include accessibility, user experience and anything related to working with data. I have also done an internship at Zebra Technologies, developing accessible and responsive front-end user interfaces with Flutter."),r.createElement("p",null,"I’m currently seeking graduate opportunities in London, so if you want to know more about my work experience and projects, please check the rest of this website. And, if you think I’m a good fit for something, why not reach out to me on"," ",r.createElement("a",{href:"https://www.linkedin.com/in/cumartinal/",target:"_blank",rel:"noreferrer"},"LinkedIn")," ","or email me at"," ",r.createElement("a",{href:"mailto:cumartinal@gmail.com"},"cumartinal@gmail.com"),"?"),r.createElement("p",null,"Also, I do stuff outside of university and work 👇!"),r.createElement("h2",null,"Non-professional stuff"),r.createElement("p",null,"I was born in Spain, moved to France when I was 13 and then once again to the UK for university. This has given me the opportunity to learn multiple languages, being completely fluent in English, Spanish and French, and having a beginner level in German and Italian. I’m also currently teaching myself Mandarin."),r.createElement("p",null,"Also, I like cooking 🍳! A lot! I don't really have a preferred style, but I rather try to explore different cuisines and methods of cooking (think 🥘🍜🍪🌯🍝...). I’m currently doing a personal project where I make one characteristic dish from each country. Right now, I’m planning Bolivia’s dish, but check out some of the things I’ve cooked below!"),r.createElement(K,null),r.createElement(x.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-about-js-13f98024e02d05a7912f.js.map