(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},o={app:0},r={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e62c38c0"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"b8020714"}[t]+".css",r=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[t],p.parentNode.removeChild(p),a(i)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}r[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"119d":function(t,e,a){},1621:function(t,e,a){},"1c24":function(t,e,a){"use strict";a("1621")},"21bb":function(t,e,a){"use strict";a("2dad")},2633:function(t,e,a){},2955:function(t,e,a){"use strict";a("2633")},"2dad":function(t,e,a){},"4f08":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/78.jpg"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.username))])],1),a("button",{attrs:{type:"button",title:"Wyloguj",value:"Logout"},on:{click:t.logout}},[a("v-icon",[t._v("mdi-logout")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:""}},[a("router-link",{attrs:{to:e.path}},[a("div",[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)])],1)})),1)],1),a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}})],1),a("v-spacer"),t.loggedIn?a("v-btn",{attrs:{text:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[a("span",{staticClass:"mr-2"},[t._v("Menu")]),a("v-icon",[t._v("mdi-menu")])],1):t._e()],1),a("v-main",[a("router-view")],1),a("notifications",{attrs:{group:"foo"}})],1)},r=[],i={name:"App",components:{},data:function(){return{drawer:null,username:"",loggedIn:!1,items:[{title:"Zbiorniki",path:"/",icon:"mdi-view-dashboard"},{title:"W trasie",path:"/on-the-road",icon:"mdi-road"},{title:"Historia",path:"/history",icon:"mdi-history"}]}},methods:{logout:function(){this.$store.dispatch("authentication/logout"),this.loggedIn=!1,"/login"!==this.$router.path&&this.$router.push("/login")}},beforeCreate:function(){console.log(1)},created:function(){console.log(2)},beforeMount:function(){console.log(3)},mounted:function(){this.loggedIn=this.$store.getters["authentication/isLoggedIn"],this.username=this.$store.getters["authentication/getUser"].username},beforeUpdate:function(){this.loggedIn=this.$store.getters["authentication/isLoggedIn"],this.username=this.$store.getters["authentication/getUser"].username},updated:function(){console.log(6)},activated:function(){console.log(7)},deactivated:function(){console.log(8)},beforeDestroy:function(){console.log(9)},destroyed:function(){console.log(10)}},s=i,c=(a("034f"),a("2877")),l=a("6544"),u=a.n(l),d=a("7496"),p=a("40dc"),f=a("8336"),m=a("ce7e"),v=a("132d"),h=a("adda"),g=a("8860"),b=a("da13"),k=a("8270"),_=a("5d23"),T=a("34c3"),S=a("f6c4"),w=a("f774"),y=a("2fa4"),I=Object(c["a"])(s,o,r,!1,null,null,null),E=I.exports;u()(I,{VApp:d["a"],VAppBar:p["a"],VBtn:f["a"],VDivider:m["a"],VIcon:v["a"],VImg:h["a"],VList:g["a"],VListItem:b["a"],VListItemAvatar:k["a"],VListItemContent:_["a"],VListItemIcon:T["a"],VListItemTitle:_["b"],VMain:S["a"],VNavigationDrawer:w["a"],VSpacer:y["a"]});var x=a("8c4f"),A=(a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-wrapper"},[a("validation-observer",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var n=e.invalid;return[a("form",{on:{submit:function(e){return e.preventDefault(),t.signUp(e)}}},[a("validation-provider",{attrs:{name:"Login",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-text-field",{attrs:{"error-messages":n,label:"Login",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-text-field",{ref:"password",attrs:{type:"password","min-length":"6","error-messages":n,label:"Hasło",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"cofirm",rules:"required|password:@password"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-text-field",{attrs:{type:"password","min-length":"6",required:"","error-messages":n,label:"Powtórz hasło"},model:{value:t.password_repeat,callback:function(e){t.password_repeat=e},expression:"password_repeat"}})]}}],null,!0)}),a("v-btn",{staticClass:"mr-4",attrs:{disabled:n,type:"submit"}},[t._v(" Zarejestruj ")]),a("p",{staticClass:"form-question"},[t._v("Masz już konto ? "),a("a",{attrs:{href:"#/login"}},[t._v("Zaloguj się")])])],1)]}}])})],1)}),D=[],L=(a("96cf"),a("1da1")),O=a("5530"),C=a("79dc"),j=a("fb74");Object(j["d"])("eager"),Object(j["c"])("password",{params:["target"],validate:function(t,e){var a=e.target;return t===a},message:"Hasła muszą być takie same."}),Object(j["c"])("required",Object(O["a"])(Object(O["a"])({},C["b"]),{},{message:"Pole {_field_} nie może być puste"})),Object(j["c"])("min",Object(O["a"])(Object(O["a"])({},C["a"]),{},{message:"Minimalna długość znaków to {length}"}));var V={components:{ValidationProvider:j["b"],ValidationObserver:j["a"]},data:function(){return{username:"",password:"",password_repeat:"",msg:""}},methods:{signUp:function(){var t=this;return Object(L["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a={username:t.username,password:t.password,password_repeat:t.password_repeat},e.next=4,t.$store.dispatch("authentication/signUp",a);case 4:n=e.sent,t.msg=n.msg,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.msg=e.t0.response.data.msg;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},P=V,N=(a("b336"),a("8654")),$=Object(c["a"])(P,A,D,!1,null,"1038d966",null),R=$.exports;u()($,{VBtn:f["a"],VTextField:N["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-wrapper"},[a("validation-observer",{ref:"observer"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("validation-provider",{attrs:{name:"Login",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-text-field",{attrs:{"error-messages":n,label:"Login",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})]}}])}),a("validation-provider",{attrs:{name:"Hasło",rules:"required|min:6"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-text-field",{ref:"password",attrs:{type:"password","error-messages":n,label:"Hasło",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})]}}])}),a("v-btn",{staticClass:"mr-4",attrs:{type:"submit"}},[t._v(" Zaloguj ")]),a("p",{staticClass:"form-question"},[t._v("Nie masz konta ? "),a("a",{attrs:{href:"#/sign-up"}},[t._v("Zarejestruj się")])])],1)]),a("loading",{attrs:{show:t.loader.show}})],1)},z=[],K=a("15b3"),M=a.n(K);Object(j["d"])("eager"),Object(j["c"])("required",Object(O["a"])(Object(O["a"])({},C["b"]),{},{message:"Pole {_field_} nie może być puste"})),Object(j["c"])("min",Object(O["a"])(Object(O["a"])({},C["a"]),{},{message:"Minimalna długość znaków to {length}"}));var U={components:{ValidationProvider:j["b"],ValidationObserver:j["a"],loading:M.a},data:function(){return{username:"",password:"",msg:"",loader:{show:!1}}},created:function(){this.$store.getters["authentication/isLoggedIn"]&&this.$router.push("/")},methods:{login:function(){var t=this;return Object(L["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loader.show=!0,t.$refs.observer.validate(),e.prev=2,a={username:t.username,password:t.password},e.next=6,t.$store.dispatch("authentication/login",a).then((function(){t.loader.show=!1})).catch((function(e){t.loader.show=!1,console.log(e)}));case 6:e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](2),t.loader.show=!1,t.msg=e.t0.response.data.msg;case 12:case"end":return e.stop()}}),e,null,[[2,8]])})))()}}},B=U,F=(a("dfb6"),Object(c["a"])(B,q,z,!1,null,"307aa987",null)),H=F.exports;u()(F,{VBtn:f["a"],VTextField:N["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},t._l(t.parcel_list,(function(e){return a("Parcel",{key:e.id,attrs:{parcel:e},on:{addTank:function(e){return t.addHandle()}}})})),1)},Z=[],W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"parcel",attrs:{id:t.parcel.id}},[a("div",{staticClass:"title"},[t._v(" "+t._s(t.parcel.name)+" ")]),a("div",{staticClass:"slots"},t._l(t.parcel.size,(function(e){return a("div",{key:e,staticClass:"slot",attrs:{id:t.parcel.id+"_"+e}},[a("v-btn",{staticClass:"ma-2",attrs:{color:"default",dark:""},on:{click:function(a){return t.openDialog(a,t.parcel.id,e)}}},[a("parcelSlot",{attrs:{index:e,parcel:t.parcel}})],1)],1)})),0),t.dialog?a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{tile:""}},[a("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1,t.action="add"}}},[a("v-icon",[t._v("mdi-close")])],1),a("v-toolbar-title",[t._v("Zbiornik")]),a("v-spacer")],1),a("v-card-text",[a("TankForm",{attrs:{formData:t.formData,action:t.action,parcelId:t.activeParcel,slotId:t.activeSlot},on:{addTank:function(e){return t.addHandle()}}})],1)],1)],1):t._e()],1)},X=[],J=(a("99af"),a("4de4"),a("2f62")),G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-tabs",{attrs:{centered:"","icons-and-text":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tabs-slider"),a("v-tab",{attrs:{href:"#tab-1"}},[t._v(" Zbornik ")]),"edit"==t.action?a("v-tab",{attrs:{href:"#tab-2"}},[t._v(" Wywóz ")]):t._e()],1),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",{attrs:{value:"tab-1"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("validation-observer",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var n=e.invalid;return[a("form",{on:{submit:function(e){return e.preventDefault(),t.addEditTank(e)}}},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-text-field",{attrs:{"error-messages":n,label:"Numer zbiornika",required:""},model:{value:t.tankData.name,callback:function(e){t.$set(t.tankData,"name",e)},expression:"tankData.name"}})]}}],null,!0)}),a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-select",{attrs:{items:t.tankManufacturerList,"item-text":"name","item-value":"id","error-messages":n,label:"Producent","data-vv-name":"manufacturer",required:""},model:{value:t.tankData.manufacturerId,callback:function(e){t.$set(t.tankData,"manufacturerId",e)},expression:"tankData.manufacturerId"}})]}}],null,!0)}),a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-select",{attrs:{"item-text":"name","item-value":"id",items:t.tankCapacityList,"error-messages":n,label:"Pojemność","data-vv-name":"capacity",required:""},model:{value:t.tankData.capacityId,callback:function(e){t.$set(t.tankData,"capacityId",e)},expression:"tankData.capacityId"}})]}}],null,!0)}),a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-select",{attrs:{"item-text":"name","item-value":"id",items:t.tankOwnerList,"error-messages":n,label:"Właściciel","data-vv-name":"owner",required:""},model:{value:t.tankData.ownerId,callback:function(e){t.$set(t.tankData,"ownerId",e)},expression:"tankData.ownerId"}})]}}],null,!0)}),a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-select",{attrs:{"item-text":"name","item-value":"id",items:t.tankValveList,"error-messages":n,label:"Zawór","data-vv-name":"valve",required:""},model:{value:t.tankData.valveId,callback:function(e){t.$set(t.tankData,"valveId",e)},expression:"tankData.valveId"}})]}}],null,!0)}),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-control"},[a("label",{attrs:{for:"productionYear"}},[t._v("Rok produkcji "),a("datepicker",{attrs:{format:"yyyy",minimumView:"year",maximumView:"year"},model:{value:t.tankData.productionYear,callback:function(e){t.$set(t.tankData,"productionYear",e)},expression:"tankData.productionYear"}})],1)]),a("div",{staticClass:"form-control"},[a("v-radio-group",{model:{value:t.tankData.pin,callback:function(e){t.$set(t.tankData,"pin",e)},expression:"tankData.pin"}},[a("v-radio",{attrs:{label:"P",value:"P"}},[t._v("P")]),a("v-radio",{attrs:{label:"N",value:"N"}},[t._v("N")])],1)],1)]),a("v-textarea",{attrs:{solo:"",label:"Uwagi"},model:{value:t.tankData.comment,callback:function(e){t.$set(t.tankData,"comment",e)},expression:"tankData.comment"}}),a("v-textarea",{attrs:{solo:"",label:"Uwagi do wykonanej pracy"},model:{value:t.tankData.workComment,callback:function(e){t.$set(t.tankData,"workComment",e)},expression:"tankData.workComment"}}),a("v-btn",{staticClass:"mr-4",attrs:{type:"submit",disabled:n}},[t._v(" Zapisz ")])],1)]}}])})],1)],1)],1),"edit"===t.action?a("v-tab-item",{attrs:{value:"tab-2"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("validation-observer",{ref:"observer2",scopedSlots:t._u([{key:"default",fn:function(e){var n=e.invalid;return[a("form",{on:{submit:function(e){return e.preventDefault(),t.tankExport(e)}}},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-text-field",{attrs:{counter:10,"error-messages":n,label:"Miasto",required:""},model:{value:t.exportData.city,callback:function(e){t.$set(t.exportData,"city",e)},expression:"exportData.city"}})]}}],null,!0)}),a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-text-field",{attrs:{"error-messages":n,label:"Ulica",required:""},model:{value:t.exportData.street,callback:function(e){t.$set(t.exportData,"street",e)},expression:"exportData.street"}})]}}],null,!0)}),a("v-btn",{staticClass:"mr-4",attrs:{type:"submit",disabled:n}},[t._v(" Wywóz ")])],1)]}}],null,!1,1788069124)})],1)],1)],1):t._e()],1)],1)},Q=[],tt=a("77f7");Object(j["c"])("required",Object(O["a"])(Object(O["a"])({},C["b"]),{},{message:"Pole {_field_} nie może być puste"})),Object(j["c"])("min",Object(O["a"])(Object(O["a"])({},C["a"]),{},{message:"Minimalna długość znaków to {length}"}));var et={name:"TankForm",props:["formData","action","parcelId","slotId"],components:{ValidationProvider:j["b"],ValidationObserver:j["a"],Datepicker:tt["a"]},data:function(){return{tab:null,tankData:{name:"",manufacturerId:"",capacityId:"",ownerId:"",valveId:"",productionYear:new Date,pin:"P",comment:"",workComment:""},exportData:{city:"",street:""}}},created:function(){this.$store.dispatch("tank/getManufacturerList"),this.$store.dispatch("tank/getCapacityList"),this.$store.dispatch("tank/getOwnerList"),this.$store.dispatch("tank/getValveList")},mounted:function(){"edit"===this.action&&(this.tankData=this.formData,this.tankData.productionYear=new Date(this.tankData.productionYear))},methods:{addEditTank:function(){this.tankData.parcelId=this.parcelId,this.tankData.slotId=this.slotId,this.tankData.productionYear=this.tankData.productionYear.getFullYear(),"edit"===this.action?(this.$store.dispatch("common/editTank",this.tankData),this.$emit("addTank")):"add"===this.action&&(this.$store.dispatch("common/addTank",this.tankData),this.$emit("addTank"))},tankExport:function(){this.tankData.parcelId=this.parcelId,this.tankData.slotId=this.slotId,this.$store.dispatch("common/exportTank",{parcelId:this.parcelId,slotId:this.slotId,isExported:1,city:this.exportData.city,street:this.exportData.street,id:this.tankData.id}),this.$emit("addTank")}},computed:Object(O["a"])(Object(O["a"])(Object(O["a"])({},Object(J["b"])("tank",["tankManufacturerList","tankCapacityList","tankOwnerList","tankValveList"])),Object(J["b"])("authentication",["user","token"])),Object(J["b"])(["api_url"]))},at=et,nt=(a("1c24"),a("b0af")),ot=a("99d9"),rt=a("67b6"),it=a("43a6"),st=a("b974"),ct=a("71a3"),lt=a("c671"),ut=a("fe57"),dt=a("aac8"),pt=a("9a96"),ft=a("a844"),mt=Object(c["a"])(at,G,Q,!1,null,null,null),vt=mt.exports;u()(mt,{VBtn:f["a"],VCard:nt["a"],VCardText:ot["c"],VRadio:rt["a"],VRadioGroup:it["a"],VSelect:st["a"],VTab:ct["a"],VTabItem:lt["a"],VTabs:ut["a"],VTabsItems:dt["a"],VTabsSlider:pt["a"],VTextField:N["a"],VTextarea:ft["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v(t._s(t.id))]),a("p",{staticClass:"slot-name"},[t._v(t._s(t.name))])])},gt=[],bt=(a("b0c0"),{props:["parcel","index"],data:function(){return{name:"",id:""}},created:function(){var t=this;console.log(this.props),this.parcel.slots.filter((function(e){e.slotId==t.index&&(t.name=e.name,t.id=e.id)}))}}),kt=bt,_t=Object(c["a"])(kt,ht,gt,!1,null,"6d2f77c6",null),Tt=_t.exports,St=a("bc3a"),wt=a.n(St),yt={name:"Parcel",data:function(){return{dialog:!1,activeParcel:"",activeSlot:"",action:"add",formData:""}},components:{TankForm:vt,parcelSlot:Tt},props:["parcel"],mounted:function(){},methods:{openDialog:function(t,e,a){var n=this;console.log(t.target.outerText),this.activeParcel=e,this.activeSlot=a,""!=t.target.outerText?(this.action="edit",this.parcel_list[e-1].slots.filter((function(t){t.slotId==a&&wt.a.get("".concat(n.api_url,"tank/get/").concat(t.id),{headers:{Authorization:n.token}}).then((function(t){n.formData=t.data[0],n.dialog=!0}))}))):this.dialog=!0},addHandle:function(){window.localStorage.removeItem("vuex/common"),this.dialog=!1,this.activeParcel="",this.activeSlot="",this.$emit("addTank"),this.$router.push("/login")}},computed:Object(O["a"])(Object(O["a"])(Object(O["a"])({},Object(J["b"])("common",["parcel_list"])),Object(J["b"])("authentication",["user","token"])),Object(J["b"])(["api_url"]))},It=yt,Et=(a("2955"),a("169a")),xt=a("71d9"),At=a("2a7f"),Dt=Object(c["a"])(It,W,X,!1,null,null,null),Lt=Dt.exports;u()(Dt,{VBtn:f["a"],VCard:nt["a"],VCardText:ot["c"],VDialog:Et["a"],VIcon:v["a"],VSpacer:y["a"],VToolbar:xt["a"],VToolbarTitle:At["a"]});var Ot={name:"Home",components:{Parcel:Lt},data:function(){return{secretContent:"",username:""}},created:function(){var t=this;this.$store.getters["authentication/isLoggedIn"]||this.$router.push("/login"),this.$store.dispatch("authentication/getSecretContent").then((function(){t.secretContent=t.$store.getters["authentication/getSecretContent"]})),this.username=this.$store.getters["authentication/getUser"].username},mounted:function(){this.$store.dispatch("common/loadParcelList")},methods:{addHandle:function(){}},computed:Object(O["a"])({},Object(J["b"])("common",["parcel_list"]))},Ct=Ot,jt=(a("21bb"),Object(c["a"])(Ct,Y,Z,!1,null,null,null)),Vt=jt.exports,Pt=[{path:"/sign-up",name:"sign-up",component:R},{path:"/login",name:"login",component:H},{path:"/",name:"Home",component:Vt},{path:"/on-the-road",name:"OnTheRoad",component:function(){return a.e("about").then(a.bind(null,"f436"))}},{path:"/history",name:"History",component:function(){return a.e("about").then(a.bind(null,"e4bb"))}}],Nt=Pt;n["a"].use(x["a"]);var $t=new x["a"]({routes:Nt}),Rt=$t,qt=a("a7fe"),zt=a.n(qt),Kt=function(t,e){wt.a.get("".concat(t.rootState.api_url,"parcel/get-parcel-tanks/").concat(e),{headers:{Authorization:t.rootState.authentication.token}}).then((function(a){t.commit("SAVE_PARCEL_TANKS_LIST",{data:a.data,id:e})})).catch((function(){}))},Mt=function(t){wt.a.get("".concat(t.rootState.api_url,"parcel/get-parcel-list"),{headers:{Authorization:t.rootState.authentication.token}}).then((function(e){t.commit("SAVE_PARCEL_LIST",e.data);for(var a=function(e){wt.a.get("".concat(t.rootState.api_url,"parcel/get-parcel-tanks/").concat(e),{headers:{Authorization:t.rootState.authentication.token}}).then((function(a){t.commit("SAVE_PARCEL_TANKS_LIST",{data:a.data,id:e-1})})).catch((function(){}))},n=1;n<=e.data.length;n++)a(n)})).catch((function(){}))},Ut=function(t){wt.a.get("".concat(t.rootState.api_url,"tank/get-exported-tanks"),{headers:{Authorization:t.rootState.authentication.token}}).then((function(e){t.commit("SAVE_EXPORTED_TANKS_LIST",e.data)})).catch((function(){}))},Bt=function(t){wt.a.get("".concat(t.rootState.api_url,"tank/get-delivered-tanks"),{headers:{Authorization:t.rootState.authentication.token}}).then((function(e){t.commit("SAVE_DELIVERED_TANKS_LIST",e.data)})).catch((function(){}))},Ft=function(t,e){wt.a.post("".concat(t.rootState.api_url,"tank/add"),e,{headers:{Authorization:t.rootState.authentication.token}}).then((function(a){var n={slotId:e.slotId,name:e.name,id:a.data.insertId};t.commit("ADD_TANK_TO_PARCEL",{data:n,id:e.parcelId-1})})).catch((function(){}))},Ht=function(t,e){wt.a.post("".concat(t.rootState.api_url,"tank/edit"),e,{headers:{Authorization:t.rootState.authentication.token}}).then((function(a){console.log(a),t.commit("EDIT_TANK_IN_PARCEL",{payload:e,id:e.parcelId-1})})).catch((function(){}))},Yt=function(t,e){wt.a.post("".concat(t.rootState.api_url,"tank/export"),e,{headers:{Authorization:t.rootState.authentication.token}}).then((function(t){console.log(t)})).catch((function(){}))},Zt=function(t,e){wt.a.post("".concat(t.rootState.api_url,"tank/deliver"),e,{headers:{Authorization:t.rootState.authentication.token}}).then((function(t){console.log(t)})).catch((function(){}))},Wt={loadParcelList:Mt,loadParcelTanksList:Kt,loadExportedTanksList:Ut,loadDeliveredTanksList:Bt,addTank:Ft,editTank:Ht,exportTank:Yt,deliverTank:Zt},Xt=function(t){return t.parcel_list},Jt={getParcelList:Xt},Gt=function(t,e){t.parcel_list=e},Qt=function(t,e){var a=t.parcel_list;a[e.id].slots=e.data,n["a"].set(t,"parcel_list",a)},te=function(t,e){var a=t.parcel_list;a[e.id].slots.push(e.data),n["a"].set(t,"parcel_list",a)},ee=function(t,e){var a=t.parcel_list;a[e.id].slots.filter((function(t){t.slotId==e.slotId&&(t.name=e.name)})),n["a"].set(t,"parcel_list",a)},ae=function(t,e){t.exported_tanks_list=e},ne=function(t,e){t.delivered_tanks_list=e},oe=function(t,e){for(var a=t.parcel_list,o=0;o<=a[e.parcelId-1].slots.length;o++)a[e.parcelId-1].slots[o].slotId==e.slotId&&delete a[e.parcelId-1].slots[o].slotId;n["a"].set(t,"parcel_list",a)},re={SAVE_PARCEL_LIST:Gt,SAVE_PARCEL_TANKS_LIST:Qt,SAVE_EXPORTED_TANKS_LIST:ae,SAVE_DELIVERED_TANKS_LIST:ne,ADD_TANK_TO_PARCEL:te,EDIT_TANK_TO_PARCEL:ee,EXPORT_TANK_FROM_PARCEL:oe};n["a"].use(J["a"]),n["a"].use(zt.a,wt.a);var ie=function(){return{parcel_list:[],parcel_tanks_list:[],exported_tanks_list:[],delivered_tanks_list:[]}},se={namespaced:!0,state:ie,getters:Jt,actions:Wt,mutations:re},ce=function(t,e){wt.a.post("".concat(t.rootState.api_url,"sign-up"),e,{headers:{}}).then((function(t){console.log(t),n["a"].notify({group:"foo",type:"success",title:"Sukces!",text:"Użytkownik został zarejestrowany."})})).catch((function(t){n["a"].notify({group:"foo",type:"error",title:"Błąd",text:t.response.data.msg})}))},le=function(t,e){wt.a.post("".concat(t.rootState.api_url,"login"),e,{headers:{}}).then((function(e){t.commit("SET_TOKEN",e.data.token),t.commit("SET_USER",e.data.user),Rt.push("/"),wt.a.defaults.headers.common["Authorization"]="Bearer ".concat(e.data.token)})).catch((function(t){n["a"].notify({group:"foo",type:"error",title:"Błąd",text:t.response.data.msg})}))},ue=function(t){wt.a.get("".concat(t.rootState.api_url,"secret-route"),{headers:{Authorization:t.state.token}}).then((function(e){t.commit("SET_SECRET_CONTENT",e.data)})).catch((function(){}))},de=function(t){var e=t.commit;e("RESET","")},pe={signUp:ce,login:le,getSecretContent:ue,logout:de},fe=function(t){return t.token},me=function(t){return t.user},ve=function(t){return t.secretContent},he={isLoggedIn:fe,getUser:me,getSecretContent:ve},ge=function(t,e){t.token=e},be=function(t,e){t.user=e},ke=function(t,e){t.secretContent=e},_e=function(t){t.secretContent="",t.user={},t.token=""},Te={SET_TOKEN:ge,SET_USER:be,SET_SECRET_CONTENT:ke,RESET:_e};n["a"].use(J["a"]),n["a"].use(zt.a,wt.a);var Se=function(){return{token:"",user:{},secretContent:""}},we=Se(),ye={namespaced:!0,getDefaultState:Se,state:we,getters:he,actions:pe,mutations:Te},Ie=function(t,e){wt.a.get("".concat(t.rootState.api_url,"tank/get/").concat(e.id),{headers:{Authorization:t.rootState.authentication.token}}).then((function(e){t.commit("SET_ACTIVE_TANK",e.data[0])})).catch((function(){}))},Ee=function(t){wt.a.get("".concat(t.rootState.api_url,"tank/get-manufacturer-list"),{headers:{Authorization:t.rootState.authentication.token}}).then((function(e){t.commit("SET_TANK_MANUFACTURER_LIST",e.data)})).catch((function(){}))},xe=function(t){wt.a.get("".concat(t.rootState.api_url,"tank/get-capacity-list"),{headers:{Authorization:t.rootState.authentication.token}}).then((function(e){t.commit("SET_TANK_CAPACITY_LIST",e.data)})).catch((function(){}))},Ae=function(t){wt.a.get("".concat(t.rootState.api_url,"tank/get-owner-list"),{headers:{Authorization:t.rootState.authentication.token}}).then((function(e){t.commit("SET_TANK_OWNER_LIST",e.data)})).catch((function(){}))},De=function(t){wt.a.get("".concat(t.rootState.api_url,"tank/get-valve-list"),{headers:{Authorization:t.rootState.authentication.token}}).then((function(e){t.commit("SET_TANK_VALVE_LIST",e.data)})).catch((function(){}))},Le={loadTankData:Ie,getManufacturerList:Ee,getCapacityList:xe,getOwnerList:Ae,getValveList:De},Oe=function(t){return t.activeTank},Ce={getActiveTank:Oe},je=function(t,e){t.tankManufacturerList=e},Ve=function(t,e){t.tankCapacityList=e},Pe=function(t,e){t.tankOwnerList=e},Ne=function(t,e){t.tankValveList=e},$e=function(t,e){n["a"].set(t,"activeTank",e)},Re={SET_TANK_MANUFACTURER_LIST:je,SET_TANK_CAPACITY_LIST:Ve,SET_TANK_OWNER_LIST:Pe,SET_TANK_VALVE_LIST:Ne,SET_ACTIVE_TANK:$e};n["a"].use(J["a"]),n["a"].use(zt.a,wt.a);var qe=function(){return{tankManufacturerList:"",tankCapacityList:"",tankOwnerList:"",tankValveList:"",activeTank:""}},ze={namespaced:!0,state:qe,getters:Ce,actions:Le,mutations:Re},Ke=a("0e44");n["a"].use(J["a"]),n["a"].use(zt.a,wt.a);var Me=new J["a"].Store({plugins:[Object(Ke["a"])()],strict:"production",state:{apitoken:"",api_url:"api/"},actions:{setApiToken:function(t,e){var a=t.commit;a("SET_API_TOKEN",e)}},mutations:{SET_API_TOKEN:function(t,e){this.state.apitoken=e}},modules:{authentication:ye,common:se,tank:ze}}),Ue=a("9483");Object(Ue["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Be=a("f309");n["a"].use(Be["a"]);var Fe=new Be["a"]({}),He=(a("5363"),a("66d6")),Ye=a.n(He);n["a"].use(Ye.a),n["a"].config.productionTip=!1,wt.a.defaults.headers.common["Authorization"]="Bearer ".concat(Me.state.token),new n["a"]({router:Rt,store:Me,vuetify:Fe,render:function(t){return t(E)}}).$mount("#app")},"85ec":function(t,e,a){},b336:function(t,e,a){"use strict";a("119d")},dfb6:function(t,e,a){"use strict";a("4f08")}});
//# sourceMappingURL=app.cca3600e.js.map