(function(t){function e(e){for(var a,i,c=e[0],s=e[1],l=e[2],u=0,p=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},r=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e587eab4"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=a);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var l=new Error;r=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}o[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"21bb":function(t,e,n){"use strict";var a=n("2dad"),o=n.n(a);o.a},2633:function(t,e,n){},2955:function(t,e,n){"use strict";var a=n("2633"),o=n.n(a);o.a},"2dad":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",[n("v-list-item-avatar",[n("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/78.jpg"}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Admin")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{link:""}},[n("router-link",{attrs:{to:e.path}},[n("div",[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)])],1)})),1)],1),n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}})],1),n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("span",{staticClass:"mr-2"},[t._v("Menu")]),n("v-icon",[t._v("mdi-menu")])],1)],1),n("v-main",[n("Home")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},t._l(t.parcel_list,(function(t){return n("Parcel",{key:t.id,attrs:{parcel:t}})})),1)},c=[],s=n("5530"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"parcel",attrs:{id:t.parcel.id}},[n("div",{staticClass:"title"},[t._v(" "+t._s(t.parcel.name)+" ")]),n("div",{staticClass:"slots"},t._l(t.parcel.size,(function(e){return n("div",{key:e,staticClass:"slot",attrs:{id:t.parcel.id+"_"+e}},[n("v-btn",{staticClass:"ma-2",attrs:{color:"default",dark:""},on:{click:function(e){t.dialog=!0}}},[t._v(" "+t._s(e)+" ")])],1)})),0),n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{attrs:{tile:""}},[n("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),n("v-toolbar-title",[t._v("Zbiornik")]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Save ")])],1),n("v-menu",{attrs:{bottom:"",right:"","offset-y":""}})],1),n("v-card-text")],1)],1)],1)},u=[],d=n("2f62"),p={name:"Parcel",data:function(){return{dialog:!1,dialog2:!1,dialog3:!1,notifications:!1,sound:!0,widgets:!1}},components:{},props:["parcel"],mounted:function(){},computed:Object(s["a"])({},Object(d["b"])("common",["parcel_list"]))},f=p,v=(n("2955"),n("2877")),m=n("6544"),b=n.n(m),h=n("8336"),g=n("b0af"),_=n("99d9"),y=n("169a"),w=n("132d"),k=n("e449"),V=n("2fa4"),j=n("71d9"),O=n("2a7f"),P=Object(v["a"])(f,l,u,!1,null,null,null),T=P.exports;b()(P,{VBtn:h["a"],VCard:g["a"],VCardText:_["a"],VDialog:y["a"],VIcon:w["a"],VMenu:k["a"],VSpacer:V["a"],VToolbar:j["a"],VToolbarItems:O["a"],VToolbarTitle:O["b"]});var C={name:"Home",components:{Parcel:T},mounted:function(){this.$store.dispatch("common/loadParcelList")},computed:Object(s["a"])({},Object(d["b"])("common",["parcel_list"]))},S=C,x=(n("21bb"),Object(v["a"])(S,i,c,!1,null,null,null)),A=x.exports,E={name:"App",components:{Home:A},data:function(){return{drawer:null,items:[{title:"Zbiorniki",path:"/",icon:"mdi-view-dashboard"},{title:"W trasie",path:"/on-the-road",icon:"mdi-road"},{title:"Historia",path:"/history",icon:"mdi-history"}]}},mounted:function(){}},L=E,I=(n("034f"),n("7496")),M=n("40dc"),H=n("ce7e"),N=n("adda"),$=n("8860"),B=n("da13"),D=n("8270"),R=n("5d23"),q=n("34c3"),F=n("f6c4"),J=n("f774"),K=Object(v["a"])(L,o,r,!1,null,null,null),Z=K.exports;b()(K,{VApp:I["a"],VAppBar:M["a"],VBtn:h["a"],VDivider:H["a"],VIcon:w["a"],VImg:N["a"],VList:$["a"],VListItem:B["a"],VListItemAvatar:D["a"],VListItemContent:R["a"],VListItemIcon:q["a"],VListItemTitle:R["b"],VMain:F["a"],VNavigationDrawer:J["a"],VSpacer:V["a"]});n("d3b7");var z=n("8c4f");a["a"].use(z["a"]);var W=[{path:"/",name:"Home",component:A},{path:"/on-the-road",name:"OnTheRoad",component:function(){return n.e("about").then(n.bind(null,"f436"))}},{path:"/history",name:"History",component:function(){return n.e("about").then(n.bind(null,"e4bb"))}}],G=new z["a"]({routes:W}),Q=G,U=n("bc3a"),X=n.n(U),Y=n("a7fe"),tt=n.n(Y),et=function(t){X.a.get("".concat(t.rootState.api_url,"parcel/get-parcel-list"),{headers:{}}).then((function(e){t.commit("SAVE_PARCEL_LIST",e.data)})).catch((function(){}))},nt={loadParcelList:et},at=function(t,e){t.parcel_list=e},ot={SAVE_PARCEL_LIST:at};a["a"].use(d["a"]),a["a"].use(tt.a,X.a);var rt=function(){return{parcel_list:[]}},it={namespaced:!0,state:rt,actions:nt,mutations:ot};a["a"].use(d["a"]),a["a"].use(tt.a,X.a);var ct=new d["a"].Store({strict:"production",state:{apitoken:"",api_url:"api/"},actions:{setApiToken:function(t,e){var n=t.commit;n("SET_API_TOKEN",e)}},mutations:{SET_API_TOKEN:function(t,e){this.state.apitoken=e}},modules:{common:it}}),st=n("9483");Object(st["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var lt=n("f309");a["a"].use(lt["a"]);var ut=new lt["a"]({});n("5363");a["a"].config.productionTip=!1,new a["a"]({router:Q,store:ct,vuetify:ut,render:function(t){return t(Z)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.669b1ce1.js.map