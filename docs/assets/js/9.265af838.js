(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5,30],{311:function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return r})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return f})),n.d(e,"c",(function(){return m})),n.d(e,"j",(function(){return g}));n(49),n(70),n(318),n(313),n(180),n(71),n(104),n(105),n(32),n(103),n(178);var s=/#.*$/,i=/\.(md|html)$/,r=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(s,"").replace(i,"")}function l(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function p(t){if(l(t))return t;var e=t.match(s),n=e?e[0]:"",i=o(t);return r.test(i)?t:i+".html"+n}function h(t,e){var n=decodeURIComponent(t.hash),i=function(t){var e=t.match(s);if(e)return e[0]}(e);return(!i||n===i)&&o(t.path)===o(e)}function d(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){var s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var r=t.replace(/^\//,"").split("/"),a=0;a<r.length;a++){var o=r[a];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var s=o(e),i=0;i<t.length;i++)if(o(t[i].regularPath)===s)return Object.assign({},t[i],{type:"page",path:p(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function f(t,e,n,s){var i=n.pages,r=n.themeConfig,a=s&&r.locales&&r.locales[s]||r;if("auto"===(t.frontmatter.sidebar||a.sidebar||r.sidebar))return function(t){var e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=a.sidebar||r.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(s=t,/(\.html|\/)$/.test(s)?s:s+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var s;return{}}(e,o),c=l.base,u=l.config;return u?u.map((function(t){return function t(e,n,s){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return d(n,e,s);if(Array.isArray(e))return Object.assign(d(n,e[0],s),{title:e[1]});i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var r=e.children||[];return 0===r.length&&e.path?Object.assign(d(n,e.path,s),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:r.map((function(e){return t(e,n,s,i+1)})),collapsable:!1!==e.collapsable}}(t,i,c)})):[]}return[]}function m(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},319:function(t,e,n){},320:function(t,e,n){},326:function(t,e,n){"use strict";e.a={platinum_sponsors_china:[{url:"http://www.dcloud.io/?hmsr=vuejsorg&hmpl=&hmcu=&hmkw=&hmci=",img:"dcloud.gif"}],special_sponsors:[{url:"https://autocode.com",img:"autocode.svg",name:"Autocode",description:"Build app-to-app workflows and connect APIs"}],platinum_sponsors:[{url:"https://vueschool.io/?utm_source=Vuejs.org&utm_medium=Banner&utm_campaign=Sponsored%20Banner&utm_content=V1",img:"vueschool.png",name:"VueSchool"},{url:"https://vehikl.com/",img:"vehikl.png",name:"Vehikl"},{url:"https://retool.com/?utm_source=sponsor&utm_campaign=vue",img:"retool.png",name:"Retool"},{url:"https://passionatepeople.io/",img:"passionate_people.png",name:"Passionate People"},{url:"https://www.storyblok.com",img:"storyblok.png",name:"Storyblok"}],gold_sponsors:[{url:"https://www.vuemastery.com/",img:"vuemastery.png",name:"VueMastery"},{url:"https://laravel.com",img:"laravel.png",name:"Laravel"},{url:"https://htmlburger.com",img:"html_burger.png",name:"HTML Burger"},{url:"https://www.frontenddeveloperlove.com/",img:"frontendlove.png",name:"FrontendLove"},{url:"https://onsen.io/vue/",img:"onsen_ui.png",name:"Onsen UI"},{url:"https://neds.com.au/",img:"neds.png",name:"Neds"},{url:"https://vuejobs.com/?ref=vuejs",img:"vuejobs.png",name:"VueJobs"},{url:"https://tidelift.com/subscription/npm/vue",img:"tidelift.png",name:"Tidelift"},{url:"https://www.firesticktricks.com/",img:"firestick_tricks.png",name:"Firestick Tricks"},{url:"https://intygrate.com/",img:"intygrate.png",name:"Intygrate"},{url:"http://en.shopware.com/",img:"shopware_ag.png",name:"shopware AG"},{url:"https://www.vpnranks.com/",img:"vpnranks.png",name:"VPNRanks"},{url:"https://www.bacancytechnology.com",img:"bacancy_technology.png",name:"Bacancy Technology"},{url:"https://www.bestvpn.co/",img:"bestvpn_co.png",name:"BestVPN.co"},{url:"https://www.y8.com/",img:"y8.png",name:"Y8"},{url:"https://js.devexpress.com/",img:"devexpress.png",name:"DevExpress"},{url:"https://fastcoding.jp/javascript/ ",img:"fastcoding_inc.svg",name:"FASTCODING Inc"},{url:"https://usave.co.uk/utilities/broadband",img:"usave.png",name:"usave"},{url:"https://www.foo.software",img:"foo.png",name:"Foo"},{url:"https://flatlogic.com/templates",img:"flatlogic_templates.svg",name:"Flatlogic Templates"},{url:"http://moovweb.com/",img:"moovweb.png",name:"Moovweb"}],silver_sponsors:[{url:"https://roadster.com",img:"roadster.png",name:"Roadster"},{url:"https://www.inkoop.io",img:"inkoop.png",name:"Inkoop"},{url:"https://www.thecasinodb.com",img:"isolutions_uk_limited.png",name:"iSolutions UK Limited"}],bronze_sponsors:[{url:"https://www.accelebrate.com/",img:"accelebrate.png",name:"Accelebrate"},{url:"https://polyglotengineer.com/derek.pollard",img:"derek_pollard.png",name:"Derek Pollard"},{url:"https://www.earthlink.ro",img:"earthlink.png",name:"Earthlink"},{url:"https://www.webucator.com",img:"webucator.png",name:"Webucator"}],video_sponsors_china:[{url:"https://cloud.youku.com/index.php?source=vuejs",img:"youku.png"}]}},329:function(t,e,n){"use strict";n(319)},330:function(t,e,n){"use strict";n(320)},334:function(t,e,n){},335:function(t,e,n){},336:function(t,e,n){},337:function(t,e,n){},338:function(t,e,n){},339:function(t,e,n){},343:function(t,e,n){},344:function(t,e,n){},345:function(t,e,n){},346:function(t,e,n){},347:function(t,e,n){},349:function(t,e,n){},350:function(t,e,n){},351:function(t,e,n){},352:function(t,e,n){},353:function(t,e,n){},354:function(t,e,n){},355:function(t,e,n){},356:function(t,e,n){},377:function(t,e,n){"use strict";n.r(e);n(100);var s=n(311),i={name:"SidebarGroup",components:{DropdownTransition:n(381).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(377).default},methods:{isActive:s.e}},r=(n(402),n(48)),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(403),n(71);function o(t,e,n,s,i){var r={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}};return i>2&&(r.style={"padding-left":i+"rem"}),t("RouterLink",r,n)}function l(t,e,n,i,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>r?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(s.e)(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c,e.level-1),l(t,e.children,n,i,r,a+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,i=n.$page,r=(n.$site,n.$route),a=n.$themeConfig,c=n.$themeLocaleConfig,u=e.props,p=u.item,h=u.sidebarDepth,d=Object(s.e)(r,p.path),f="auto"===p.type?d||p.children.some((function(t){return Object(s.e)(r,p.basePath+"#"+t.slug)})):d,m="external"===p.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,p.path,p.title||p.path):o(t,p.path,p.title||p.path,f),g=[i.frontmatter.sidebarDepth,h,c.sidebarDepth,a.sidebarDepth,1].find((function(t){return void 0!==t})),v=c.displayAllHeaders||a.displayAllHeaders;return"auto"===p.type?[m,l(t,p.children,p.basePath,r,g)]:(f||v)&&p.headers&&!s.d.test(p.path)?[m,l(t,Object(s.c)(p.headers),p.path,r,g)]:m}};n(404);function u(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?u(t,e):"page"===e.type&&Object(s.e)(t,e.path)}))}var p={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(r.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var s=e[n];if(u(t,s))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(s.e)(this.$route,t.regularPath)}}},h=Object(r.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,s){return n("li",{key:s},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:s===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(s)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},379:function(t,e,n){"use strict";n.r(e);n(173),n(175),n(99);var s={Email:"fa-envelope",GitHub:"fa-github",Twitter:"fa-twitter",LinkedIn:"fa-linkedin-square",YouTube:"fa-youtube-square",Facebook:"fa-facebook-square",Instagram:"fa-instagram",CodePen:"fa-codepen",Medium:"fa-medium"},i={props:{link:{type:String,required:!0},type:{type:String,required:!0,validator:function(t){return Object.keys(s).includes(t)}},extraClass:{type:String}},computed:{iconClass:function(){return s[this.type]}}},r=(n(329),n(48)),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"social-icon",class:t.extraClass,attrs:{href:t.link,title:t.type}},[n("i",{staticClass:"fa",class:t.iconClass}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v(t._s(t.type))])])}),[],!1,null,"2dac9808",null);e.default=a.exports},380:function(t,e,n){"use strict";n.r(e);var s={props:{url:{required:!0,type:String}}},i=(n(330),n(48)),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{attrs:{href:t.url}},[t._t("default",(function(){return[t._v("Text")]}))],2)}),[],!1,null,"ae086852",null);e.default=r.exports},381:function(t,e,n){"use strict";var s={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(394),n(48)),r=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},382:function(t,e,n){"use strict";n(334)},383:function(t,e,n){"use strict";n(335)},384:function(t,e,n){"use strict";n(336)},385:function(t,e,n){"use strict";n(337)},386:function(t,e,n){"use strict";n(338)},387:function(t,e,n){"use strict";n(339)},393:function(t,e,n){"use strict";n(343)},394:function(t,e,n){"use strict";n(344)},395:function(t,e,n){"use strict";n(345)},396:function(t,e,n){"use strict";n(346)},397:function(t,e,n){"use strict";n(347)},398:function(t,e,n){"use strict";n(349)},400:function(t,e,n){"use strict";n(350)},401:function(t,e,n){"use strict";n(351)},402:function(t,e,n){"use strict";n(352)},404:function(t,e,n){"use strict";n(353)},405:function(t,e,n){"use strict";n(354)},406:function(t,e,n){"use strict";n(355)},407:function(t,e,n){"use strict";n(356)},448:function(t,e,n){"use strict";n.r(e);var s=n(326),i=(n(324),n(100),n(99),n(170),n(311)),r={props:{item:{type:Object,required:!0},extraClass:{type:String,default:""}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""},combinedClasses:function(){return"".concat(this.extraClass," ").concat(this.item.icon?"has-icon":"")}},methods:{focusoutAction:function(){this.$emit("focusout")}}},a=(n(382),n(48)),o=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",class:t.combinedClasses,attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t.item.icon?n("i",{staticClass:"icon",class:t.item.icon}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",class:t.combinedClasses,attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t.item.icon?n("i",{staticClass:"icon",class:t.item.icon}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,"54cb4917",null).exports,l=n(379),c=(n(8),n(12),n(14),{components:{SponsorBlock:function(){return Promise.all([n.e(0),n.e(29)]).then(n.bind(null,471))}},props:{sponsors:{type:Array,required:!0}},computed:{heading:function(){return"特别赞助"}}}),u=(n(383),Object(a.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"special-sponsors"},[e("h3",[this._v(this._s(this.heading))]),this._v(" "),e("div",{staticClass:"blocks"},this._l(this.sponsors,(function(t){return e("SponsorBlock",{key:t.name,attrs:{sponsor:t}})})),1)])}),[],!1,null,"0386a78f",null).exports),p={props:{extraClasses:{type:String,required:!1,default:""}}},h=Object(a.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sponsors",class:this.extraClasses},[e("h3",{staticClass:"heading"},[this._t("heading")],2),this._v(" "),e("div",{staticClass:"content"},[this._t("content")],2)])}),[],!1,null,null,null).exports,d={components:{SponsorsLayout:h,RoundedButton:n(380).default},props:{sponsors:{type:Object,required:!0}}},f=Object(a.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SponsorsLayout",{attrs:{"extra-classes":"sponsors__patreon"},scopedSlots:t._u([{key:"heading",fn:function(){return[t._v("Patreon 赞助商")]},proxy:!0},{key:"content",fn:function(){return[n("div",{staticClass:"platinum"},t._l(t.sponsors.platinum_sponsors,(function(t){return n("a",{key:t.name,attrs:{href:t.url,target:"_blank",rel:"sponsored noopener"}},[n("img",{attrs:{src:"/images/sponsors/"+t.img,width:"160",alt:t.name}})])})),0),t._v(" "),n("div",{staticClass:"gold"},t._l(t.sponsors.gold_sponsors,(function(t){return n("a",{key:t.name,attrs:{href:t.url,target:"_blank",rel:"sponsored noopener"}},[n("img",{attrs:{src:"/images/sponsors/"+t.img,width:"120",alt:t.name}})])})),0),t._v(" "),n("RoundedButton",{attrs:{url:"https://vuejs.org/support-vuejs/"}},[t._v("成为赞助者!")])]},proxy:!0}])})}),[],!1,null,null,null).exports,m={components:{SponsorsLayout:h},data:function(){return{featuredCount:{platium:3,gold:10}}}},g=(n(384),Object(a.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SponsorsLayout",{attrs:{"extra-classes":"sponsors__open-collective"},scopedSlots:t._u([{key:"heading",fn:function(){return[t._v("Open Collective 赞助商")]},proxy:!0},{key:"content",fn:function(){return[n("h4",[t._v("铂金")]),t._v(" "),t._l(new Array(t.featuredCount.platinum),(function(t,e){return n("a",{attrs:{href:"https://opencollective.com/vuejs/tiers/platinum-sponsors/"+e+"/website",rel:"sponsored noopener",target:"_blank"}},[n("img",{attrs:{src:"https://opencollective.com/vuejs/tiers/platinum-sponsors/"+e+"/avatar.svg",alt:"Vue.JS platinum sponsor"}})])})),t._v(" "),n("h4",[t._v("黄金")]),t._v(" "),t._l(new Array(t.featuredCount.gold),(function(t,e){return n("a",{attrs:{href:"https://opencollective.com/vuejs/tiers/gold-sponsors/"+e+"/website",rel:"sponsored noopener",target:"_blank"}},[n("img",{attrs:{src:"https://opencollective.com/vuejs/tiers/gold-sponsors/"+e+"/avatar.svg",alt:"Vue.JS gold sponsor"}})])}))]},proxy:!0}])})}),[],!1,null,"5f7a761b",null).exports),v={components:{SponsorsLayout:h},props:{sponsors:{type:Object,required:!0}}},b=(n(385),Object(a.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SponsorsLayout",{attrs:{"extra-classes":"sponsors__open-collective"},scopedSlots:t._u([{key:"heading",fn:function(){return[t._v("中国区视频托管赞助商")]},proxy:!0},{key:"content",fn:function(){return t._l(t.sponsors.video_sponsors_china,(function(t,e){return n("a",{attrs:{href:t.url,rel:"sponsored noopener",target:"_blank"}},[n("img",{attrs:{src:"/images/sponsors/"+t.img,alt:"Vue.JS sponsor"}})])}))},proxy:!0}])})}),[],!1,null,"78eee962",null).exports),_=(n(386),Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"newsletter"},[e("div",{staticClass:"inner"},[e("h3",[e("label",{attrs:{for:"member_email"}},[this._v("订阅我们的周刊 (英文)")])]),this._v(" "),e("form",{staticClass:"newsletter-form",attrs:{id:"revue-form",name:"revue-form",target:"_blank",rel:"noopener",action:"https://www.getrevue.co/profile/vuenewsletter/add_subscriber",method:"post"}},[e("input",{staticClass:"newsletter-input",attrs:{type:"email",name:"member[email]",id:"member_email",required:"",placeholder:"邮件地址"}}),this._v(" "),e("input",{staticClass:"button newsletter-button",attrs:{type:"submit",value:"订阅",name:"member[subscribe]",id:"member_submit"}})]),this._v(" "),e("p",[this._v("\n      你可以在 "),e("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[this._v("news.vuejs.org")]),this._v(" 翻阅往期的 issue，也可以收听 podcast。\n    ")])])])}],!1,null,"074f719e",null).exports),k={components:{HomeActionLink:o,SocialIcon:l.default,SpecialSponsors:u,PatreonSponsors:f,OpenCollectiveSponsors:g,ChinaVideoSponsors:b,Newsletter:_},data:function(){return{sponsors:s.a,sponsorsActive:!1}},computed:{data:function(){return this.$page.frontmatter},tagline:function(){return this.data.tagline||this.$description||"The Progressive JavaScript Framework"}},mounted:function(){window.addEventListener("scroll",this.onPageScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onPageScroll)},methods:{onPageScroll:function(){var t=this.$refs.sponsors.offsetTop;this.sponsorsActive=window.pageYOffset>t-100}}},C=(n(387),Object(a.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"left"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e()]),t._v(" "),n("div",{staticClass:"right"},[null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Vue.js"))]):t._e(),t._v(" "),t.tagline?n("h2",{staticClass:"tagline",domProps:{innerHTML:t._s(t.tagline)}}):t._e(),t._v(" "),t.data.actionButtons.length?n("div",{staticClass:"actions"},t._l(t.data.actionButtons,(function(t){return n("HomeActionLink",{key:t.link,attrs:{item:t,"extra-class":t.extraClass}})})),1):t._e()])])]),t._v(" "),t.data.features&&t.data.features.length?n("section",{staticClass:"section-features"},[n("div",{staticClass:"inner"},t._l(t.data.features,(function(e,s){return n("div",{key:s,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(e.details)}})])})),0)]):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),n("footer",{staticClass:"main-footer"},[t.data.socialIcons?n("p",t._l(t.data.socialIcons,(function(t){return n("SocialIcon",{key:t.link,attrs:{type:t.type,link:t.link,"extra-class":"inverted"}})})),1):t._e(),t._v(" "),n("p",{staticClass:"copyright",domProps:{innerHTML:t._s(t.data.footer)}})])],1)}),[],!1,null,null,null).exports),y=(n(388),n(442)),w=(n(393),Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),x=n(46),$=(n(71),n(49),n(70),n(318),n(341),n(325),{name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction:function(){this.$emit("focusout")}}}),L=Object(a.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,S=n(381),O=n(190),j=n.n(O),I={name:"DropdownLink",components:{NavLink:L,DropdownTransition:S.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return j()(e)===t}}},T=(n(395),{name:"NavLinks",components:{NavLink:L,DropdownLink:Object(a.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,s){return n("li",{key:e.link||s,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(s){return n("li",{key:s.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:s},on:{focusout:function(n){t.isLastItemOfArray(s,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,s=this.$router.options.routes,i=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(r){var a,o=e[r],l=i[r]&&i[r].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,r),s.some((function(t){return t.path===a}))||(a=r)),{text:l,link:a}}))};return[].concat(Object(x.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var s=e[n];if(new RegExp(s,"i").test(t))return s}return"Source"}}}}),E=(n(396),Object(a.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function A(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var N={name:"Navbar",components:{SidebarButton:w,NavLinks:E,SearchBox:y.a,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return!!(this.algolia&&this.algolia.apiKey&&this.algolia.indexName)}},mounted:function(){var t=this,e=parseInt(A(this.$el,"paddingLeft"))+parseInt(A(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},P=(n(397),Object(a.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[!1===t.isAlgoliaSearch&&!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"}),t._v(" "),t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):t._e()],1)],1)}),[],!1,null,null,null).exports),B=n(348),H=n.n(B),R={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=H()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,s=e.docsDir,i=void 0===s?"":s,r=e.docsBranch,a=void 0===r?"master":r,o=e.docsRepo,l=void 0===o?n:o;return t&&l&&this.$page.relativePath?this.createEditLink(n,l,i,a,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,s,r){return/bitbucket.org/.test(t)?(i.i.test(e)?e:t).replace(i.a,"")+"/src"+"/".concat(s,"/")+(n?n.replace(i.a,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(s,"&fileviewer=file-view-default"):(i.i.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(s,"/")+(n?n.replace(i.a,"")+"/":"")+r}}},D=(n(398),Object(a.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[n("div",{staticClass:"container"},[n("p",[t._v("\n      Deployed on\n      "),n("a",{attrs:{href:"https://url.netlify.com/HJ8X2mxP8"}},[t._v("Netlify")]),t._v(".\n      "),t.editLink?n("span",{staticClass:"edit-link"},[t._v("\n        Caught a mistake or want to contribute to the documentation?\n        "),n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n          "+t._s(t.editLinkText)+"\n          "),n("OutboundLink")],1)]):t._e(),t._v(" "),t.lastUpdated?[n("br"),t._v(" "),n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]:t._e()],2)])])}),[],!1,null,"24e048ac",null).exports),U=n(399),q=n.n(U),V={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return G(M.PREV,this)},next:function(){return G(M.NEXT,this)}}};var M={NEXT:{resolveLink:function(t,e){return W(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return W(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function G(t,e){var n=e.$themeConfig,s=e.$page,r=e.$route,a=e.$site,o=e.sidebarItems,l=t.resolveLink,c=t.getThemeLinkConfig,u=t.getPageLinkConfig,p=c(n),h=u(s),d=H()(h)?p:h;return!1===d?void 0:q()(d)?Object(i.k)(a.pages,d,r.path):l(s,o)}function W(t,e,n){var s=[];!function t(e,n){for(var s=0,i=e.length;s<i;s++)"group"===e[s].type?t(e[s].children||[],n):n.push(e[s])}(e,s);for(var i=0;i<s.length;i++){var r=s[i];if("page"===r.type&&r.path===decodeURIComponent(t.path))return s[i+n]}}var z=V,J=(n(400),{components:{PageEdit:D,PageNav:Object(a.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),F=(n(401),Object(a.a)(J,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"page"},[this._t("top"),this._v(" "),e("Content",{staticClass:"theme-default-content"}),this._v(" "),e("PageNav",this._b({},"PageNav",{sidebarItems:this.sidebarItems},!1)),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),X={name:"Sidebar",components:{SidebarLinks:n(377).default,NavLinks:E},props:["items"]},Y=(n(405),Object(a.a)(X,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),K="bsa-cpc-script",Q={name:"BuySellAds",props:{code:{type:String,required:!0},placement:{type:String,required:!0}},methods:{load:function(){"undefined"!=typeof _bsa&&_bsa&&_bsa.init("default",this.code,"placement:".concat(this.placement),{target:".bsa-cpc",align:"horizontal",disable_css:"true"})}},mounted:function(){var t=this;if(document.getElementById(K))this.load();else{var e=document.createElement("script");e.id=K,e.src="//m.servedby-buysellads.com/monetization.js",document.head.appendChild(e),e.onload=function(){t.load()}}}},Z=(n(406),Object(a.a)(Q,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bsa-cpc-wrapper"},[e("div",{staticClass:"bsa-cpc"})])}],!1,null,null,null).exports),tt={name:"CarbonAds",props:{code:{type:String,required:!0},placement:{type:String,required:!0}},mounted:function(){var t=document.createElement("script");t.id="_carbonads_js",t.src="//cdn.carbonads.com/carbon.js?serve=".concat(this.code,"&placement=").concat(this.placement),this.$el.appendChild(t)}},et=(n(407),{name:"Layout",components:{Home:C,Page:F,Sidebar:Y,Navbar:P,BuySellAds:Z,CarbonAds:Object(a.a)(tt,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"carbon-ads"})}),[],!1,null,null,null).exports},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]},adsConfig:function(){return this.$site.themeConfig.carbonAds}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),nt=Object(a.a)(et,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t.adsConfig?n("CarbonAds",{key:"ca:"+t.$page.path,attrs:{code:t.adsConfig.carbon,placement:t.adsConfig.placement}}):t._e(),t._v(" "),t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t.adsConfig?n("BuySellAds",{key:"bsa:"+t.$page.path,attrs:{code:t.adsConfig.custom,placement:t.adsConfig.placement}}):t._e(),t._v(" "),t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=nt.exports}}]);