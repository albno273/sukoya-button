(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{349:function(t,e,r){var content=r(365);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("77fce818",content,!0,{sourceMap:!1})},364:function(t,e,r){"use strict";r(349)},365:function(t,e,r){(e=r(13)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=M+PLUS+Rounded+1c:wght@500&display=swap);"]),e.push([t.i,".v-expansion-panel-header[data-v-2d421673],a[data-v-2d421673]{color:var(--v-official-base)!important}.v-navigation-drawer__content[data-v-2d421673]{border-bottom:1px solid #fff}.v-navigation-drawer__border[data-v-2d421673]{background-color:#fff!important}.v-card[data-v-2d421673],.v-divider[data-v-2d421673]{border-color:var(--v-official-base)!important}.text-card .v-card__title[data-v-2d421673]{color:#fff;font-size:1.5rem;border:1px solid var(--v-official-base);border-radius:23px 2px 0 0!important;background-color:var(--v-official-base)}.text-card .v-card__text[data-v-2d421673]{color:var(--v-text-base);padding-top:16px}.text-card .v-card__text div[data-v-2d421673]{color:var(--v-text-base)}.v-btn[data-v-2d421673]{background:var(--v-official2-base)}.v-btn.outlined[data-v-2d421673]{border-radius:24px 4px}.v-app-bar__nav-icon.v-btn[data-v-2d421673],.v-btn.v-btn--icon[data-v-2d421673]{background:transparent}.v-list-item__action>i[data-v-2d421673],.v-list-item__title[data-v-2d421673]{color:var(--v-text-base)}.v-list-item--active .v-list-item__title[data-v-2d421673]{color:var(--v-official-base)}.v-footer span[data-v-2d421673]{color:var(--v-text-base)}.yt-desc[data-v-2d421673]:not(:last-child){margin-bottom:5px}.yt-desc-costars-box[data-v-2d421673]{display:flex}.yt-desc-costars-box-title[data-v-2d421673]{margin-top:3px;margin-right:4px}",""]),t.exports=e},397:function(t,e,r){"use strict";r.r(e);r(18),r(19),r(4),r(40);var o=r(16),n=r(22),c=r(20),d=r(10),l=r(9),v=r(35),f=r(30),y=r(366);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=Object(d.a)(t);if(e){var n=Object(d.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(c.a)(this,r)}}var h=function(t,e,r,desc){var o,n=arguments.length,c=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(n<3?o(c):n>3?o(e,r,c):o(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c},O=function(t){Object(n.a)(r,t);var e=m(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(f.a)(r,[{key:"vtuberChUrl",value:function(t){return"https://www.youtube.com/channel/"+t.youTubeId}},{key:"vtuberTwUrl",value:function(t){return"https://twitter.com/"+t.twitterId}},{key:"isOriginal",get:function(){return this.song.isOriginal}}]),r}(v.Vue);h([Object(v.Prop)({type:Object})],O.prototype,"song",void 0),h([Object(v.Prop)({type:Array})],O.prototype,"coStars",void 0);var I=O=h([v.Component],O),_=(r(364),r(43)),j=r(56),C=r.n(j),x=r(200),w=r(134),component=Object(_.a)(I,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"yt-desc yt-desc-costars-box"},[t.coStars?r("div",{staticClass:"yt-desc-costars-box-title"},[t._v("共演:")]):t._e(),t._v(" "),r("div",{staticClass:"yt-desc-costars-box-items"},t._l(t.coStars,(function(e,o){return r("div",{key:o},[r("span",[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),r("v-btn",{attrs:{icon:"",small:"",color:"red",href:t.vtuberChUrl(e),target:"=blank"}},[r("v-icon",[t._v(" mdi-youtube ")])],1),t._v(" "),r("v-btn",{attrs:{icon:"",small:"",color:"cyan",href:t.vtuberTwUrl(e),target:"=blank"}},[r("v-icon",[t._v(" mdi-twitter ")])],1)],1)})),0)]),t._v(" "),!t.isOriginal&&t.song.artist?r("div",{staticClass:"yt-desc"},[t._v("原曲: "+t._s(t.song.artist))]):t._e(),t._v(" "),t.song.from?r("div",{staticClass:"yt-desc"},[t._v(t._s(t.song.from)+" より")]):t._e(),t._v(" "),r("div",[t.song.lyricist===t.song.composer?r("div",[t.song.lyricist&&t.song.composer?r("div",{staticClass:"yt-desc"},[t._v("作詞曲: "+t._s(t.song.lyricist))]):t._e()]):r("div",[t.song.lyricist?r("div",{staticClass:"yt-desc"},[t._v("作詞: "+t._s(t.song.lyricist))]):t._e(),t._v(" "),t.song.composer?r("div",{staticClass:"yt-desc"},[t._v("作曲: "+t._s(t.song.composer))]):t._e()])]),t._v(" "),t.song.remixed?r("div",{staticClass:"yt-desc"},[t._v("リミックス: "+t._s(t.song.remixed))]):t._e()])}),[],!1,null,"2d421673",null),R=component.exports;function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=Object(d.a)(t);if(e){var n=Object(d.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(c.a)(this,r)}}C()(component,{VBtn:x.a,VIcon:w.a});var k=function(t,e,r,desc){var o,n=arguments.length,c=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(n<3?o(c):n>3?o(e,r,c):o(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c},S=function(t){Object(n.a)(r,t);var e=P(r);function r(){var t;return Object(o.a)(this,r),(t=e.apply(this,arguments)).isOpenModal=!1,t}return Object(f.a)(r,[{key:"ready",value:function(){}},{key:"ended",value:function(){}},{key:"playing",value:function(){}},{key:"onCloseModal",value:function(){this.$refs.youtube.player.pauseVideo()}},{key:"thumbnailUrl",get:function(){return"https://img.youtube.com/vi/"+this.videoData.videoId+"/sddefault.jpg"}},{key:"isSong",get:function(){return void 0!==this.videoData.song}},{key:"title",get:function(){return this.isSong&&this.videoData.song?this.videoData.song.title:this.videoData.title||""}},{key:"date",get:function(){return y.DateTime.fromISO(this.videoData.date).toFormat("yyyy/M/d")}}]),r}(v.Vue);k([Object(v.Prop)({type:Object})],S.prototype,"videoData",void 0);var D=S=k([Object(v.Component)({components:{YouTubeCardDescription:R}})],S),T=r(358),U=r(344),E=r(399),V=r(115),M=r(133),N=Object(_.a)(D,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"mx-auto",attrs:{outlined:"",shaped:"",color:"official--text"}},[r("v-img",{attrs:{src:t.thumbnailUrl,"aspect-ratio":16/9},on:{click:function(e){e.stopPropagation(),t.isOpenModal=!0}}}),t._v(" "),r("v-card-title",[t._v(t._s(t.title)+" ")]),t._v(" "),r("v-card-subtitle",[t._v(" "+t._s(t.date)+" ")]),t._v(" "),r("v-card-text",[r("you-tube-card-description",{attrs:{song:t.videoData.song,"co-stars":t.videoData.coStars}})],1)],1),t._v(" "),r("v-dialog",{attrs:{"max-width":640},on:{"click:outside":t.onCloseModal},model:{value:t.isOpenModal,callback:function(e){t.isOpenModal=e},expression:"isOpenModal"}},[r("v-responsive",{attrs:{"max-width":640,"max-height":360,"aspect-ratio":16/9}},[r("youtube",{ref:"youtube",attrs:{"video-id":t.videoData.videoId,resize:!0,"resize-delay":1,"fit-parent":!0},on:{ready:t.ready,ended:t.ended,playing:t.playing}})],1)],1)],1)}),[],!1,null,null,null),A=N.exports;C()(N,{VCard:T.a,VCardSubtitle:U.a,VCardText:U.b,VCardTitle:U.c,VDialog:E.a,VImg:V.a,VResponsive:M.a});var L={name:"早瀬走",unit:"Nijisanji",youTubeId:"UC2OacIzd2UxGHRGhdHl1Rhw",twitterId:"SouHayase"},G={name:"相羽ういは",unit:"Nijisanji",youTubeId:"UCnRQYHTnRLSF0cLJwMnedCg",twitterId:"AibaUiha"},H=[{name:"シェリン・バーガンディ",unit:"Nijisanji",youTubeId:"UCHBhnG2G-qN0JrrWmMO2FTA",twitterId:"ShellinBurgundy"},L],K=[{name:"白雪巴",unit:"Nijisanji",youTubeId:"UCuvk5PilcvDECU7dDZhQiEw",twitterId:"Tomoe_Shirayuki"}],Y=[{videoId:"oO2IfPx9IGo",song:{title:"うっせぇわ",isOriginal:!1,artist:"Ado",lyricist:"syudou",composer:"syudou"},date:"2021-01-17"},{videoId:"EBigFJSufIQ",song:{title:"DIVE TO WORLD",isOriginal:!1,artist:"CHERRYBLOSSOM",lyricist:"MEEKO",composer:"83"},coStars:[{name:"朝ノ瑠璃",unit:"other",youTubeId:"UCODNLyn3L83wEmC0DLL0cxA",twitterId:"asanoruri"}],date:"2021-01-01"},{videoId:"-_9gCnAQzP4",song:{title:"KING -DJ WILDPARTY remix-",isOriginal:!1,artist:"Kanaria feat. GUMI",lyricist:"Kanaria",composer:"Kanaria",remixed:"DJ WILDPARTY"},date:"2020-12-31"},{videoId:"mCsHw1FLvXQ",song:{title:"Snow halation",isOriginal:!1,artist:"μ's",lyricist:"畑亜貴",composer:"山田高弘"},coStars:K,date:"2020-12-25"},{videoId:"EpEJlvpP0RU",song:{title:"KING",isOriginal:!1,artist:"Kanaria feat. GUMI",lyricist:"Kanaria",composer:"Kanaria"},date:"2020-12-16"},{videoId:"TdM11hdAZy0",song:{title:"フラレガイガール",isOriginal:!1,artist:"酸欠少女さユり",lyricist:"野田洋次郎",composer:"野田洋次郎"},date:"2020-12-02"},{videoId:"cBpL2bCYuYU",song:{title:"ヴィラン",isOriginal:!1,artist:"てにをは feat. flower",lyricist:"てにをは",composer:"てにをは"},coStars:K,date:"2020-10-31"},{videoId:"gUlRw08VLHY",song:{title:"メランコリック",isOriginal:!1,artist:"Junky feat. 鏡音リン",lyricist:"Junky",composer:"Junky"},coStars:[G],date:"2020-10-11"},{videoId:"e0EbOtN8dcQ",song:{title:"きょうもハレバレ",isOriginal:!1,artist:"ふわりP feat. GUMI's",lyricist:"ふわりP",composer:"ふわりP"},coStars:H,date:"2020-09-19"},{videoId:"Kjoe1vXlmxQ",song:{title:"蝶々結び",isOriginal:!1,artist:"Aimer",lyricist:"野田洋次郎",composer:"野田洋次郎"},date:"2020-09-13"},{videoId:"Kf0CmsrNBCM",song:{title:"Tulip",isOriginal:!1,artist:"LiPPS",lyricist:"森由里子",composer:"石濱翔"},date:"2020-09-13"},{videoId:"Q3unv8bSGms",song:{title:"ECHO",isOriginal:!1,artist:"Crusher-P feat. GUMI V3",lyricist:"Crusher-P",composer:"Crusher-P"},coStars:[{name:"ZEA Cornelia",unit:"Nijisanji ID",youTubeId:"UCA3WE2WRSpoIvtnoVGq4VAw",twitterId:"ZEA_Cornelia"}],date:"2020-08-20"},{videoId:"6km7iBmjSnE",song:{title:"乙女解剖",isOriginal:!1,artist:"DECO*27 feat. 初音ミク",lyricist:"DECO*27",composer:"DECO*27"},date:"2020-08-09"},{videoId:"jmpCiKKcRco",song:{title:"ピニャコラーダ",isOriginal:!1,artist:"ねじ式 feat. 結月ゆかり, IA",lyricist:"ねじ式",composer:"ねじ式"},coStars:K,date:"2020-07-16"},{videoId:"soqst5tbXPc",song:{title:"だから僕は■■■を辞めた",isOriginal:!1,from:"『だから僕は音楽を辞めた』",artist:"ヨルシカ",lyricist:"n-buna",composer:"n-buna"},date:"2020-07-01"},{videoId:"2OvEh2nEDr8",song:{title:"リスキーゲーム",isOriginal:!1,artist:"黒うさP feat. 初音ミク",lyricist:"黒うさP",composer:"黒うさP"},date:"2020-06-17"},{videoId:"v6kxNhlDhBg",song:{title:"てあらいうがいの歌",isOriginal:!0,lyricist:"弦月藤士郎, 健屋花那",composer:"弦月藤士郎"},coStars:[{name:"名取さな",youTubeId:"UCIdEIHpS0TdkqRkHL5OkLtA",twitterId:"sana_natori"}],date:"2020-06-07"},{videoId:"rumx2dpdu08",song:{title:"ハッピーシンセサイザ",isOriginal:!1,artist:"EasyPop feat. 巡音ルカ, GUMI",lyricist:"EasyPop",composer:"EasyPop"},coStars:[G],date:"2020-06-04"},{videoId:"BZv18yiPaNA",song:{title:"Hail Holy Queen",isOriginal:!1,from:"映画『天使にラブソングを』"},coStars:[{name:"レヴィ・エリファ",unit:"Nijisanji",youTubeId:"UCtnO2N4kPTXmyvedjGWdx3Q",twitterId:"Levi_E_2434"},{name:"長尾景",unit:"Nijisanji",youTubeId:"UCXW4MqCQn-jCaxlX-nn-BYg",twitterId:"kei_nagao2434"},{name:"でびでび・でびる",unit:"Nijisanji",youTubeId:"UCjlmCrq4TP1I4xguOtJ-31w",twitterId:"debidebiru_sama"},{name:"メリッサ・キンレンカ",unit:"Nijisanji",youTubeId:"UCwcyyxn6h9ex4sMXGtpQE_g",twitterId:"melissa_2434"},{name:"弦月藤士郎",unit:"Nijisanji",youTubeId:"UCGw7lrT-rVZCWHfdG9Frcgg",twitterId:"1O46V"},{name:"轟京子",unit:"Nijisanji",youTubeId:"UCRV9d6YCYIMUszK-83TwxVA",twitterId:"KT_seeds"},{name:"シスター・クレア",unit:"Nijisanji",youTubeId:"UC1zFJrfEKvCixhsjNSb1toQ",twitterId:"SisterCleaire"},L],date:"2020-05-15"},{videoId:"B-VRImY__i8",song:{title:"ファンサ",isOriginal:!1,artist:"mona (CV: 夏川椎菜)",lyricist:"HoneyWorks",composer:"HoneyWorks"},date:"2020-05-14"},{videoId:"FMU_F8ktRmg",song:{title:"magnet",isOriginal:!1,artist:"minato (流星P) feat. 初音ミク, 巡音ルカ",lyricist:"minato (流星P)",composer:"minato (流星P)"},coStars:K,date:"2020-05-05"},{videoId:"fxzBmLVfLOw",song:{title:"インタビュア",isOriginal:!1,artist:"クワガタP feat. 巡音ルカ",lyricist:"クワガタP",composer:"クワガタP"},date:"2020-03-21"},{videoId:"GfTY3q3e2Mk",song:{title:"神のまにまに",isOriginal:!1,artist:"れるりり feat. 初音ミク, 鏡音リン, GUMI",lyricist:"れるりり",composer:"れるりり"},coStars:H,date:"2020-03-19"}];function B(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=Object(d.a)(t);if(e){var n=Object(d.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(c.a)(this,r)}}var J=function(t,e,r,desc){var o,n=arguments.length,c=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(n<3?o(c):n>3?o(e,r,c):o(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c},Q=function(t){Object(n.a)(r,t);var e=B(r);function r(){var t;return Object(o.a)(this,r),(t=e.apply(this,arguments)).songs=Y,t}return r}(v.Vue),W=Q=J([Object(v.Component)({components:{YouTubeCard:A}})],Q),z=r(393),F=r(394),X=r(395),Z=r(37),$=Object(_.a)(W,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"fill-height overflow-y-auto"},t._l(t.songs,(function(e,o){return r("v-col",{key:o,attrs:{cols:"12",xs:"12",sm:"6",md:"4",lg:"3",xl:"3"}},[r("v-sheet",{staticClass:"fill-height",attrs:{color:"transparent","min-height":"250"}},[r("v-lazy",{staticClass:"fill-height",attrs:{options:{threshold:.5}},model:{value:e.isActive,callback:function(r){t.$set(e,"isActive",r)},expression:"song.isActive"}},[r("you-tube-card",{staticClass:"fill-height",attrs:{"video-data":e}})],1)],1)],1)})),1)}),[],!1,null,null,null);e.default=$.exports;C()($,{VCol:z.a,VLazy:F.a,VRow:X.a,VSheet:Z.a})}}]);