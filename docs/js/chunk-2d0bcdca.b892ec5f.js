(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0bcdca"],{"2a16":function(t,e,r){"use strict";r.r(e);var n=r("1c03"),o=(r("9896"),r("c34a"),r("389c"),r("147f"),r("3261"),r("ddef"),r("e6ac"),r("f18c"),r("c3ef")),a=r.n(o),s=r("7736"),u=r("4481");r("1026");if(!c)var c={map:function(t,e){var r={};return e?t.map((function(t,n){return r.index=n,e.call(r,t)})):t.slice()},naturalOrder:function(t,e){return t<e?-1:t>e?1:0},sum:function(t,e){var r={};return t.reduce(e?function(t,n,o){return r.index=o,t+e.call(r,n)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?c.map(t,e):t)}};var h=function(){function t(t,e,r){return(t<<10)+(e<<5)+r}function e(t){var e=[],r=!1;function n(){e.sort(t),r=!0}return{push:function(t){e.push(t),r=!1},peek:function(t){return r||n(),void 0===t&&(t=e.length-1),e[t]},pop:function(){return r||n(),e.pop()},size:function(){return e.length},map:function(t){return e.map(t)},debug:function(){return r||n(),e}}}function r(t,e,r,n,o,i,a){this.r1=t,this.r2=e,this.g1=r,this.g2=n,this.b1=o,this.b2=i,this.histo=a}function n(){this.vboxes=new e((function(t,e){return c.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())}))}function o(e,r){if(r.count()){var n=r.r2-r.r1+1,o=r.g2-r.g1+1,i=c.max([n,o,r.b2-r.b1+1]);if(1==r.count())return[r.copy()];var a,s,u,h,l=0,f=[],v=[];if(i==n)for(a=r.r1;a<=r.r2;a++){for(h=0,s=r.g1;s<=r.g2;s++)for(u=r.b1;u<=r.b2;u++)h+=e[t(a,s,u)]||0;f[a]=l+=h}else if(i==o)for(a=r.g1;a<=r.g2;a++){for(h=0,s=r.r1;s<=r.r2;s++)for(u=r.b1;u<=r.b2;u++)h+=e[t(s,a,u)]||0;f[a]=l+=h}else for(a=r.b1;a<=r.b2;a++){for(h=0,s=r.r1;s<=r.r2;s++)for(u=r.g1;u<=r.g2;u++)h+=e[t(s,u,a)]||0;f[a]=l+=h}return f.forEach((function(t,e){v[e]=l-t})),function(t){var e,n,o,i,s,u=t+"1",c=t+"2",h=0;for(a=r[u];a<=r[c];a++)if(f[a]>l/2){for(o=r.copy(),i=r.copy(),s=(e=a-r[u])<=(n=r[c]-a)?Math.min(r[c]-1,~~(a+n/2)):Math.max(r[u],~~(a-1-e/2));!f[s];)s++;for(h=v[s];!h&&f[s-1];)h=v[--s];return o[c]=s,i[u]=o[c]+1,[o,i]}}(i==n?"r":i==o?"g":"b")}}return r.prototype={volume:function(t){return this._volume&&!t||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(e){var r=this.histo;if(!this._count_set||e){var n,o,i,a=0;for(n=this.r1;n<=this.r2;n++)for(o=this.g1;o<=this.g2;o++)for(i=this.b1;i<=this.b2;i++)a+=r[t(n,o,i)]||0;this._count=a,this._count_set=!0}return this._count},copy:function(){return new r(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(e){var r=this.histo;if(!this._avg||e){var n,o,i,a,s=0,u=0,c=0,h=0;for(o=this.r1;o<=this.r2;o++)for(i=this.g1;i<=this.g2;i++)for(a=this.b1;a<=this.b2;a++)s+=n=r[t(o,i,a)]||0,u+=n*(o+.5)*8,c+=n*(i+.5)*8,h+=n*(a+.5)*8;this._avg=s?[~~(u/s),~~(c/s),~~(h/s)]:[~~(8*(this.r1+this.r2+1)/2),~~(8*(this.g1+this.g2+1)/2),~~(8*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(t){var e=t[0]>>3;return gval=t[1]>>3,bval=t[2]>>3,e>=this.r1&&e<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},n.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map((function(t){return t.color}))},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,r=0;r<e.size();r++)if(e.peek(r).vbox.contains(t))return e.peek(r).color;return this.nearest(t)},nearest:function(t){for(var e,r,n,o=this.vboxes,i=0;i<o.size();i++)((r=Math.sqrt(Math.pow(t[0]-o.peek(i).color[0],2)+Math.pow(t[1]-o.peek(i).color[1],2)+Math.pow(t[2]-o.peek(i).color[2],2)))<e||void 0===e)&&(e=r,n=o.peek(i).color);return n},forcebw:function(){var t=this.vboxes;t.sort((function(t,e){return c.naturalOrder(c.sum(t.color),c.sum(e.color))}));var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var r=t.length-1,n=t[r].color;n[0]>251&&n[1]>251&&n[2]>251&&(t[r].color=[255,255,255])}},{quantize:function(i,a){if(!i.length||a<2||a>256)return!1;var s=function(e){var r,n=new Array(32768);return e.forEach((function(e){r=t(e[0]>>3,e[1]>>3,e[2]>>3),n[r]=(n[r]||0)+1})),n}(i);s.forEach((function(){}));var u=function(t,e){var n,o,i,a=1e6,s=0,u=1e6,c=0,h=1e6,l=0;return t.forEach((function(t){(n=t[0]>>3)<a?a=n:n>s&&(s=n),(o=t[1]>>3)<u?u=o:o>c&&(c=o),(i=t[2]>>3)<h?h=i:i>l&&(l=i)})),new r(a,s,u,c,h,l,e)}(i,s),h=new e((function(t,e){return c.naturalOrder(t.count(),e.count())}));function l(t,e){for(var r,n=t.size(),i=0;i<1e3;){if(n>=e)return;if(i++>1e3)return;if((r=t.pop()).count()){var a=o(s,r),u=a[0],c=a[1];if(!u)return;t.push(u),c&&(t.push(c),n++)}else t.push(r),i++}}h.push(u),l(h,.75*a);for(var f=new e((function(t,e){return c.naturalOrder(t.count()*t.volume(),e.count()*e.volume())}));h.size();)f.push(h.pop());l(f,a);for(var v=new n;f.size();)v.push(f.pop());return v}}}().quantize,l=function(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=t.naturalWidth,this.height=this.canvas.height=t.naturalHeight,this.context.drawImage(t,0,0,this.width,this.height)};l.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var f=function(){};f.prototype.getColor=function(t,e){return void 0===e&&(e=10),this.getPalette(t,5,e)[0]},f.prototype.getPalette=function(t,e,r){var n=function(t){var e=t.colorCount,r=t.quality;if(void 0!==e&&Number.isInteger(e)){if(1===e)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");e=Math.max(e,2),e=Math.min(e,20)}else e=10;return(void 0===r||!Number.isInteger(r)||r<1)&&(r=10),{colorCount:e,quality:r}}({colorCount:e,quality:r}),o=new l(t),i=function(t,e,r){for(var n=t,o=[],i=0,a=void 0,s=void 0,u=void 0,c=void 0,h=void 0;i<e;i+=r)s=n[0+(a=4*i)],u=n[a+1],c=n[a+2],(void 0===(h=n[a+3])||h>=125)&&(s>250&&u>250&&c>250||o.push([s,u,c]));return o}(o.getImageData().data,o.width*o.height,n.quality),a=h(i,n.colorCount);return a?a.palette():null},f.prototype.getColorFromUrl=function(t,e,r){var n=this,o=document.createElement("img");o.addEventListener("load",(function(){var i=n.getPalette(o,5,r);e(i[0],t)})),o.src=t},f.prototype.getImageData=function(t,e){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=function(){if(200==this.status){var t=new Uint8Array(this.response);i=t.length;for(var r=new Array(i),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);var o=r.join(""),a=window.btoa(o);e("data:image/png;base64,"+a)}},r.send()},f.prototype.getColorAsync=function(t,e,r){var n=this;this.getImageData(t,(function(t){var o=document.createElement("img");o.addEventListener("load",(function(){var t=n.getPalette(o,5,r);e(t[0],this)})),o.src=t}))};var v=f,p="[00:00.00]欢迎收听VIPTV - 云音乐\n[00:04.01]QQ客服:2236639958\n[00:08.02]QQ群: 2541554",d={name:"MusicPlay",data:function(){return{decode:Object(u.a)(this.$route.params.id).split("@")}},created:function(){this.$store.dispatch(this.decode[0]+"_play",this.decode[1])},watch:{"$route.params.id":function(t){var e=Object(u.a)(t).split("@");this.$store.dispatch(e[0]+"_play",e[1])},Play:function(t){var e=new a.a({container:document.getElementById("aplayer"),theme:"#F57F17",mini:!1,order:"random",loop:"all",autoplay:!0,preload:"auto",volume:1,mutex:!0,listFolded:!1,listMaxHeight:150,lrcType:1,audio:[{name:t.name||"VIPTV云音乐",artist:"普品音质",url:t.url,lrc:t.lrc||p,cover:t.pic||"/logo.png",theme:"#505d6b"},{name:t.name||"VIPTV云音乐",artist:"高品音质",url:t.url,lrc:t.lrc||p,cover:t.pic||"/logo.png",theme:"#383838"},{name:t.name||"VIPTV云音乐",artist:"超品音质",url:t.url,lrc:t.lrc||p,cover:t.pic||"/logo.png",theme:"#ebd0c2"}]}),r=new v,n=new Image,o=new XMLHttpRequest,i=function(t){e.list.audios[t].theme||(o.onload=function(){var o=URL.createObjectURL(this.response);n.onload=function(){var i=r.getColor(n);e.theme("rgb(".concat(i[0],", ").concat(i[1],", ").concat(i[2],")"),t),URL.revokeObjectURL(o)},n.src=o},o.open("GET",e.list.audios[t].cover,!0),o.responseType="blob",o.send())};i(e.list.index),e.on("listswitch",(function(t){i(t)}))}},computed:Object(n.a)({},Object(s.c)(["Play"]))},g=r("4ac2"),m=Object(g.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("List",{attrs:{"item-layout":"vertical",border:"",size:"large"}},[e("template",{slot:"header"},[e("div",{attrs:{id:"aplayer"}})]),e("ListItem",[e("div",{staticClass:"download-box js-dialog-show "},[e("i"),e("a",{attrs:{href:this.Play&&this.Play.url,target:"_blank"}},[this._v("点击下载")])])]),e("template",{slot:"footer"})],2)}),[],!1,null,null,null);e.default=m.exports}}]);