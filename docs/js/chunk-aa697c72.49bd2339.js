(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-aa697c72"],{"6b0b":function(t,e,i){"use strict";i("9896"),i("a497");var n=i("3f50"),s=i.n(n),a=i("0a5e"),r=i.n(a);i("7e70"),i("0536");e.a=function(t,e){navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)?new r.a({wrapper:"#wrapper",src:t,isLive:e,autoplay:!0,controls:!0,playsInline:!0,preload:"auto",x5VideoPlayerFullscreen:!0,x5VideoOrientation:"landscape|portrait",xWebkitAirplay:!0,muted:!1,disableUA:["Mozilla/5.0 (Linux; Android 4.4.2; HM NOTE 1TD Build/KOT49H; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.97 Mobile Safari/537.36"]}):new s.a({wrapper:"#wrapper",src:t,autoplay:!0,isLive:e,muted:!1,controls:!0,plugins:[{name:"chimeeContextmenu",baseMenus:[{text:"VIPTV -【官方网站】",url:"http://viptv.work"}],menus:[]},{name:"chimeeControl",majorColor:"#de698c",hoverColor:"#4c4c4c",barShowByMouse:"move",children:{play:{},progressTime:!e&&{},progressBar:!e&&{},volume:{},screen:{}}}]})}},"6f29":function(t,e,i){"use strict";i("389c");var n=i("6b0b"),s=i("6fe8"),a={name:"MoviePlay",data:function(){return{Show:!0,name:this.$site.Notice,Playing:"",Urls:[],times:3}},props:{Play:Object},watch:{Play:function(t){this.name=t.name,this.Urls=t.urls},Playing:function(t){Object(n.a)(t.url[0],this.Play.islive),this.name=this.Play.name+"："+t.name}},created:function(){var t=this;this.timer=setInterval((function(){t.times--,0===t.times&&(t.doPlay(0),clearInterval(t.timer))}),1e3)},computed:{view:{get:function(){return{slidesPerView:this.Play&&this.Play.total<3?this.Play.total:3,spaceBetween:1,slidesPerGroup:this.Play&&this.Play.total<3?this.Play.total:3,loop:!0,loopFillGroupWithBlank:!0}}}},methods:{doPlay:function(t){this.Show=!1,this.Playing=this.Play.urls[t]},adsUrl:function(t){this.Show=!1,this.Playing=this.Play.urls[t]}},components:{swiper:s.swiper,swiperSlide:s.swiperSlide}},r=(i("c432"),i("4ac2")),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"myPlayer"},[i("div",{staticClass:"now_play"},[i("div",{staticClass:"bannerImg"},[i("div",{staticClass:"play_name"},[i("span",[t._v("正在播放")]),i("span",[t._v(t._s(t.name))])]),i("section",{staticClass:"iframe",attrs:{id:"wrapper"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.Show,expression:"Show"}],staticClass:"video-shade"},[i("div",{staticClass:"ad_time"},[t._v(" 请等待 "),i("span",{attrs:{id:"t"}},[t._v(t._s(t.times))]),t._v(" 秒 ")]),i("div",{staticClass:"close",on:{click:function(e){return t.doPlay(0)}}}),i("div",{staticClass:"shade-style",on:{click:function(e){return t.doPlay(0)}}},[i("img",{attrs:{src:this.Play&&t.Play.img?t.Play.img:t.$site.Playpic,alt:"本广告位招租"}})])])])])]),i("swiper",{attrs:{options:t.view}},t._l(t.Urls,(function(e,n){return i("swiper-slide",{key:e.id},[i("div",{staticClass:"list",on:{click:function(e){return t.doPlay(n)}}},[i("div",{staticClass:"match_top"},[i("li",[t._v(t._s(e.name))])])])])})),1)],1)}),[],!1,null,null,null);e.a=o.exports},"6fe8":function(t,e,i){var n;t.exports=(n=i("c006"),function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=4)}([function(t,e){t.exports=n},function(t,e){t.exports=function(t,e,i,n,s,a){var r,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(r=t,o=t.default);var c,u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId=s),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):n&&(c=n),c){var p=u.functional,d=p?u.render:u.beforeCreate;p?(u._injectStyles=c,u.render=function(t,e){return c.call(e),d(t,e)}):u.beforeCreate=d?[].concat(d,c):[c]}return{esModule:r,exports:o,options:u}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(5),s=i.n(n),a=i(8),r=i(1)(s.a,a.a,!1,null,null,null);e.default=r.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(6),s=i.n(n),a=i(7),r=i(1)(s.a,a.a,!1,null,null,null);e.default=r.exports},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.install=e.swiperSlide=e.swiper=e.Swiper=void 0;var s=n(i(0)),a=n(i(2)),r=n(i(3)),o=window.Swiper||s.default,l=r.default,c=a.default,u=function(t,e){e&&(r.default.props.globalOptions.default=function(){return e}),t.component(r.default.name,r.default),t.component(a.default.name,a.default)},p={Swiper:o,swiper:l,swiperSlide:c,install:u};e.default=p,e.Swiper=o,e.swiper=l,e.swiperSlide=c,e.install=u},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent&&this.$parent.options&&this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.update()}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(i(0)),s=window.Swiper||n.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),n=1;n<arguments.length;n++){var s=arguments[n];if(null!=s)for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(i[a]=s[a])}return i},writable:!0,configurable:!0});var a=["beforeDestroy","slideChange","slideChangeTransitionStart","slideChangeTransitionEnd","slideNextTransitionStart","slideNextTransitionEnd","slidePrevTransitionStart","slidePrevTransitionEnd","transitionStart","transitionEnd","touchStart","touchMove","touchMoveOpposite","sliderMove","touchEnd","click","tap","doubleTap","imagesReady","progress","reachBeginning","reachEnd","fromEdge","setTranslate","setTransition","resize"];e.default={name:"swiper",props:{options:{type:Object,default:function(){return{}}},globalOptions:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{swiper:null,classes:{wrapperClass:"swiper-wrapper"}}},ready:function(){this.swiper||this.mountInstance()},mounted:function(){if(!this.swiper){var t=!1;for(var e in this.classes)this.classes.hasOwnProperty(e)&&this.options[e]&&(t=!0,this.classes[e]=this.options[e]);t?this.$nextTick(this.mountInstance):this.mountInstance()}},activated:function(){this.update()},updated:function(){this.update()},beforeDestroy:function(){this.$nextTick((function(){this.swiper&&(this.swiper.destroy&&this.swiper.destroy(),delete this.swiper)}))},methods:{update:function(){this.swiper&&(this.swiper.update&&this.swiper.update(),this.swiper.navigation&&this.swiper.navigation.update(),this.swiper.pagination&&this.swiper.pagination.render(),this.swiper.pagination&&this.swiper.pagination.update())},mountInstance:function(){var t=Object.assign({},this.globalOptions,this.options);this.swiper=new s(this.$el,t),this.bindEvents(),this.$emit("ready",this.swiper)},bindEvents:function(){var t=this,e=this;a.forEach((function(i){t.swiper.on(i,(function(){e.$emit.apply(e,[i].concat(Array.prototype.slice.call(arguments))),e.$emit.apply(e,[i.replace(/([A-Z])/g,"-$1").toLowerCase()].concat(Array.prototype.slice.call(arguments)))}))}))}}}},function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.classes.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]};e.a=n},function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]};e.a=n}]))},c432:function(t,e,i){"use strict";i("f7cf")},c74c:function(t,e,i){"use strict";i.r(e);var n=i("1c03"),s=(i("9896"),i("c34a"),i("6f29")),a=i("4481"),r=i("7736"),o={data:function(){return{decode:Object(a.a)(this.$route.params.id).split("@")}},created:function(){var t=this;this.$nextTick((function(){t.$store.dispatch(t.decode[0]+"_play",t.decode[1])}))},watch:{"$route.params.id":function(t){var e=Object(a.a)(t).split("@");this.$store.dispatch(e[0]+"_play",e[1])}},computed:Object(n.a)({},Object(r.c)(["Play"])),components:{Play:s.a}},l=i("4ac2"),c=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("List",{attrs:{"item-layout":"vertical",border:"",size:"large"}},[e("template",{slot:"header"},[e("Play",{attrs:{Play:this.Play}})],1)],2)}),[],!1,null,null,null);e.default=c.exports},f7cf:function(t,e,i){}}]);