(function(t){function e(e){for(var o,i,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"382657bd"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var u=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",[n("v-list-item-avatar",[n("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/78.jpg"}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Admin")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{link:""}},[n("router-link",{attrs:{to:e.path}},[n("div",[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)])],1)})),1)],1),n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}})],1),n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("span",{staticClass:"mr-2"},[t._v("Menu")]),n("v-icon",[t._v("mdi-menu")])],1)],1),n("v-main",[t._v(" "+t._s(t.parcel_list)+" ")])],1)},a=[],i=n("5530"),c=n("2f62"),s={name:"App",components:{},data:function(){return{drawer:null,items:[{title:"Zbiorniki",path:"/",icon:"mdi-view-dashboard"},{title:"W trasie",path:"/on-the-road",icon:"mdi-road"},{title:"Historia",path:"/history",icon:"mdi-history"}]}},mounted:function(){this.$store.dispatch("common/loadParcelList")},computed:Object(i["a"])({},Object(c["b"])("common",["parcel_list"]))},u=s,l=(n("034f"),n("2877")),p=n("6544"),d=n.n(p),f=n("7496"),m=n("40dc"),v=n("8336"),h=n("ce7e"),b=n("132d"),g=n("adda"),w=n("8860"),y=n("da13"),_=n("8270"),k=n("5d23"),j=n("34c3"),O=n("f6c4"),V=n("f774"),A=n("2fa4"),P=Object(l["a"])(u,r,a,!1,null,null,null),L=P.exports;d()(P,{VApp:f["a"],VAppBar:m["a"],VBtn:v["a"],VDivider:h["a"],VIcon:b["a"],VImg:g["a"],VList:w["a"],VListItem:y["a"],VListItemAvatar:_["a"],VListItemContent:k["a"],VListItemIcon:j["a"],VListItemTitle:k["b"],VMain:O["a"],VNavigationDrawer:V["a"],VSpacer:A["a"]});n("d3b7");var S=n("8c4f"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"})},T=[],I={name:"Home",components:{},mounted:function(){}},x=I,C=Object(l["a"])(x,E,T,!1,null,null,null),M=C.exports;o["a"].use(S["a"]);var N=[{path:"/",name:"Home",component:M},{path:"/on-the-road",name:"OnTheRoad",component:function(){return n.e("about").then(n.bind(null,"f436"))}},{path:"/history",name:"History",component:function(){return n.e("about").then(n.bind(null,"e4bb"))}}],H=new S["a"]({routes:N}),$=H,B=n("bc3a"),R=n.n(B),q=n("a7fe"),D=n.n(q),F=function(t){R.a.get("".concat(t.rootState.api_url,"posts"),{headers:{}}).then((function(e){t.commit("SAVE_PARCEL_LIST",e.data)})).catch((function(){}))},J={loadParcelList:F},K=function(t,e){t.parcel_list=e},W={SAVE_PARCEL_LIST:K};o["a"].use(c["a"]),o["a"].use(D.a,R.a);var Z=function(){return{parcel_list:[]}},z={namespaced:!0,state:Z,actions:J,mutations:W};o["a"].use(c["a"]),o["a"].use(D.a,R.a);var G=new c["a"].Store({strict:"production",state:{apitoken:"",api_url:"api/"},actions:{setApiToken:function(t,e){var n=t.commit;n("SET_API_TOKEN",e)}},mutations:{SET_API_TOKEN:function(t,e){this.state.apitoken=e}},modules:{common:z}}),Q=n("9483");Object(Q["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var U=n("f309");o["a"].use(U["a"]);var X=new U["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:$,store:G,vuetify:X,render:function(t){return t(L)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.37640a78.js.map