(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"3db2":function(t,e,s){"use strict";s("9404")},"495d":function(t,e,s){},"8b37":function(t,e,s){},"91f4":function(t,e,s){},9404:function(t,e,s){},e4bb:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"history-div"},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.delivered_tanks_list,"items-per-page":5},on:{"click:row":t.openDialog}}),t.dialog?s("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",{attrs:{tile:""}},[s("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[s("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[s("v-icon",[t._v("mdi-close")])],1),s("v-toolbar-title",[t._v("Zbiornik")]),s("v-spacer")],1),s("v-card-text",[s("TankForm",{attrs:{formData:t.formData,action:t.action,parcelId:"0",slotId:"0"}})],1)],1)],1):t._e()],1)},a=[],o=s("5530"),r=s("3be6"),n=s("2f62"),l={name:"History",components:{TankForm:r["a"]},data:function(){return{action:"history",formData:{},dialog:!1,headers:[{text:"Nazwa",align:"start",sortable:!1,value:"name"},{text:"Miasto",value:"city"},{text:"Ulica",value:"street"}]}},created:function(){this.$store.getters["authentication/isLoggedIn"]||this.$router.push("/login"),this.$store.dispatch("common/loadDeliveredTanksList")},methods:{openDialog:function(t){console.log(t),this.formData=t,this.dialog=!0}},computed:Object(o["a"])({},Object(n["b"])("common",["delivered_tanks_list"]))},p=l,h=s("2877"),d=s("6544"),c=s.n(d),u=s("8336"),m=s("b0af"),g=s("99d9"),b=(s("91f4"),s("80d2")),f=s("2b0e"),v=f["a"].extend({name:"v-data",inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},options:{type:Object,default:()=>({})},sortBy:{type:[String,Array],default:()=>[]},sortDesc:{type:[Boolean,Array],default:()=>[]},customSort:{type:Function,default:b["C"]},mustSort:Boolean,multiSort:Boolean,page:{type:Number,default:1},itemsPerPage:{type:Number,default:10},groupBy:{type:[String,Array],default:()=>[]},groupDesc:{type:[Boolean,Array],default:()=>[]},customGroup:{type:Function,default:b["u"]},locale:{type:String,default:"en-US"},disableSort:Boolean,disablePagination:Boolean,disableFiltering:Boolean,search:String,customFilter:{type:Function,default:b["B"]},serverItemsLength:{type:Number,default:-1}},data(){let t={page:this.page,itemsPerPage:this.itemsPerPage,sortBy:Object(b["E"])(this.sortBy),sortDesc:Object(b["E"])(this.sortDesc),groupBy:Object(b["E"])(this.groupBy),groupDesc:Object(b["E"])(this.groupDesc),mustSort:this.mustSort,multiSort:this.multiSort};this.options&&(t=Object.assign(t,this.options));const{sortBy:e,sortDesc:s,groupBy:i,groupDesc:a}=t,o=e.length-s.length,r=i.length-a.length;return o>0&&t.sortDesc.push(...Object(b["l"])(o,!1)),r>0&&t.groupDesc.push(...Object(b["l"])(r,!1)),{internalOptions:t}},computed:{itemsLength(){return this.serverItemsLength>=0?this.serverItemsLength:this.filteredItems.length},pageCount(){return this.internalOptions.itemsPerPage<=0?1:Math.ceil(this.itemsLength/this.internalOptions.itemsPerPage)},pageStart(){return-1!==this.internalOptions.itemsPerPage&&this.items.length?(this.internalOptions.page-1)*this.internalOptions.itemsPerPage:0},pageStop(){return-1===this.internalOptions.itemsPerPage?this.itemsLength:this.items.length?Math.min(this.itemsLength,this.internalOptions.page*this.internalOptions.itemsPerPage):0},isGrouped(){return!!this.internalOptions.groupBy.length},pagination(){return{page:this.internalOptions.page,itemsPerPage:this.internalOptions.itemsPerPage,pageStart:this.pageStart,pageStop:this.pageStop,pageCount:this.pageCount,itemsLength:this.itemsLength}},filteredItems(){let t=this.items.slice();return!this.disableFiltering&&this.serverItemsLength<=0&&(t=this.customFilter(t,this.search)),t},computedItems(){let t=this.filteredItems.slice();return!this.disableSort&&this.serverItemsLength<=0&&(t=this.sortItems(t)),!this.disablePagination&&this.serverItemsLength<=0&&(t=this.paginateItems(t)),t},groupedItems(){return this.isGrouped?this.groupItems(this.computedItems):null},scopedProps(){return{sort:this.sort,sortArray:this.sortArray,group:this.group,items:this.computedItems,options:this.internalOptions,updateOptions:this.updateOptions,pagination:this.pagination,groupedItems:this.groupedItems,originalItemsLength:this.items.length}},computedOptions(){return{...this.options}}},watch:{computedOptions:{handler(t,e){Object(b["i"])(t,e)||this.updateOptions(t)},deep:!0,immediate:!0},internalOptions:{handler(t,e){Object(b["i"])(t,e)||this.$emit("update:options",t)},deep:!0,immediate:!0},page(t){this.updateOptions({page:t})},"internalOptions.page"(t){this.$emit("update:page",t)},itemsPerPage(t){this.updateOptions({itemsPerPage:t})},"internalOptions.itemsPerPage"(t){this.$emit("update:items-per-page",t)},sortBy(t){this.updateOptions({sortBy:Object(b["E"])(t)})},"internalOptions.sortBy"(t,e){!Object(b["i"])(t,e)&&this.$emit("update:sort-by",Array.isArray(this.sortBy)?t:t[0])},sortDesc(t){this.updateOptions({sortDesc:Object(b["E"])(t)})},"internalOptions.sortDesc"(t,e){!Object(b["i"])(t,e)&&this.$emit("update:sort-desc",Array.isArray(this.sortDesc)?t:t[0])},groupBy(t){this.updateOptions({groupBy:Object(b["E"])(t)})},"internalOptions.groupBy"(t,e){!Object(b["i"])(t,e)&&this.$emit("update:group-by",Array.isArray(this.groupBy)?t:t[0])},groupDesc(t){this.updateOptions({groupDesc:Object(b["E"])(t)})},"internalOptions.groupDesc"(t,e){!Object(b["i"])(t,e)&&this.$emit("update:group-desc",Array.isArray(this.groupDesc)?t:t[0])},multiSort(t){this.updateOptions({multiSort:t})},"internalOptions.multiSort"(t){this.$emit("update:multi-sort",t)},mustSort(t){this.updateOptions({mustSort:t})},"internalOptions.mustSort"(t){this.$emit("update:must-sort",t)},pageCount:{handler(t){this.$emit("page-count",t)},immediate:!0},computedItems:{handler(t){this.$emit("current-items",t)},immediate:!0},pagination:{handler(t,e){Object(b["i"])(t,e)||this.$emit("pagination",this.pagination)},immediate:!0}},methods:{toggle(t,e,s,i,a,o){let r=e.slice(),n=s.slice();const l=r.findIndex(e=>e===t);return l<0?(o||(r=[],n=[]),r.push(t),n.push(!1)):l>=0&&!n[l]?n[l]=!0:a?n[l]=!1:(r.splice(l,1),n.splice(l,1)),Object(b["i"])(r,e)&&Object(b["i"])(n,s)||(i=1),{by:r,desc:n,page:i}},group(t){const{by:e,desc:s,page:i}=this.toggle(t,this.internalOptions.groupBy,this.internalOptions.groupDesc,this.internalOptions.page,!0,!1);this.updateOptions({groupBy:e,groupDesc:s,page:i})},sort(t){if(Array.isArray(t))return this.sortArray(t);const{by:e,desc:s,page:i}=this.toggle(t,this.internalOptions.sortBy,this.internalOptions.sortDesc,this.internalOptions.page,this.internalOptions.mustSort,this.internalOptions.multiSort);this.updateOptions({sortBy:e,sortDesc:s,page:i})},sortArray(t){const e=t.map(t=>{const e=this.internalOptions.sortBy.findIndex(e=>e===t);return e>-1&&this.internalOptions.sortDesc[e]});this.updateOptions({sortBy:t,sortDesc:e})},updateOptions(t){this.internalOptions={...this.internalOptions,...t,page:this.serverItemsLength<0?Math.max(1,Math.min(t.page||this.internalOptions.page,this.pageCount)):t.page||this.internalOptions.page}},sortItems(t){let e=this.internalOptions.sortBy,s=this.internalOptions.sortDesc;return this.internalOptions.groupBy.length&&(e=[...this.internalOptions.groupBy,...e],s=[...this.internalOptions.groupDesc,...s]),this.customSort(t,e,s,this.locale)},groupItems(t){return this.customGroup(t,this.internalOptions.groupBy,this.internalOptions.groupDesc)},paginateItems(t){return-1===this.serverItemsLength&&t.length<=this.pageStart&&(this.internalOptions.page=Math.max(1,this.internalOptions.page-1)),t.slice(this.pageStart,this.pageStop)}},render(){return this.$scopedSlots.default&&this.$scopedSlots.default(this.scopedProps)}}),y=(s("495d"),s("b974")),$=s("9d26"),S=s("afdd"),O=f["a"].extend({name:"v-data-footer",props:{options:{type:Object,required:!0},pagination:{type:Object,required:!0},itemsPerPageOptions:{type:Array,default:()=>[5,10,15,-1]},prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},itemsPerPageAllText:{type:String,default:"$vuetify.dataFooter.itemsPerPageAll"},showFirstLastPage:Boolean,showCurrentPage:Boolean,disablePagination:Boolean,disableItemsPerPage:Boolean,pageText:{type:String,default:"$vuetify.dataFooter.pageText"}},computed:{disableNextPageIcon(){return this.options.itemsPerPage<=0||this.options.page*this.options.itemsPerPage>=this.pagination.itemsLength||this.pagination.pageStop<0},computedDataItemsPerPageOptions(){return this.itemsPerPageOptions.map(t=>"object"===typeof t?t:this.genDataItemsPerPageOption(t))}},methods:{updateOptions(t){this.$emit("update:options",Object.assign({},this.options,t))},onFirstPage(){this.updateOptions({page:1})},onPreviousPage(){this.updateOptions({page:this.options.page-1})},onNextPage(){this.updateOptions({page:this.options.page+1})},onLastPage(){this.updateOptions({page:this.pagination.pageCount})},onChangeItemsPerPage(t){this.updateOptions({itemsPerPage:t,page:1})},genDataItemsPerPageOption(t){return{text:-1===t?this.$vuetify.lang.t(this.itemsPerPageAllText):String(t),value:t}},genItemsPerPageSelect(){let t=this.options.itemsPerPage;const e=this.computedDataItemsPerPageOptions;return e.length<=1?null:(e.find(e=>e.value===t)||(t=e[0]),this.$createElement("div",{staticClass:"v-data-footer__select"},[this.$vuetify.lang.t(this.itemsPerPageText),this.$createElement(y["a"],{attrs:{"aria-label":this.itemsPerPageText},props:{disabled:this.disableItemsPerPage,items:e,value:t,hideDetails:!0,auto:!0,minWidth:"75px"},on:{input:this.onChangeItemsPerPage}})]))},genPaginationInfo(){let t=["–"];if(this.pagination.itemsLength&&this.pagination.itemsPerPage){const e=this.pagination.itemsLength,s=this.pagination.pageStart+1,i=e<this.pagination.pageStop||this.pagination.pageStop<0?e:this.pagination.pageStop;t=this.$scopedSlots["page-text"]?[this.$scopedSlots["page-text"]({pageStart:s,pageStop:i,itemsLength:e})]:[this.$vuetify.lang.t(this.pageText,s,i,e)]}return this.$createElement("div",{class:"v-data-footer__pagination"},t)},genIcon(t,e,s,i){return this.$createElement(S["a"],{props:{disabled:e||this.disablePagination,icon:!0,text:!0},on:{click:t},attrs:{"aria-label":s}},[this.$createElement($["a"],i)])},genIcons(){const t=[],e=[];return t.push(this.genIcon(this.onPreviousPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.prevPage"),this.$vuetify.rtl?this.nextIcon:this.prevIcon)),e.push(this.genIcon(this.onNextPage,this.disableNextPageIcon,this.$vuetify.lang.t("$vuetify.dataFooter.nextPage"),this.$vuetify.rtl?this.prevIcon:this.nextIcon)),this.showFirstLastPage&&(t.unshift(this.genIcon(this.onFirstPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.firstPage"),this.$vuetify.rtl?this.lastIcon:this.firstIcon)),e.push(this.genIcon(this.onLastPage,this.options.page>=this.pagination.pageCount||-1===this.options.itemsPerPage,this.$vuetify.lang.t("$vuetify.dataFooter.lastPage"),this.$vuetify.rtl?this.firstIcon:this.lastIcon))),[this.$createElement("div",{staticClass:"v-data-footer__icons-before"},t),this.showCurrentPage&&this.$createElement("span",[this.options.page.toString()]),this.$createElement("div",{staticClass:"v-data-footer__icons-after"},e)]}},render(){return this.$createElement("div",{staticClass:"v-data-footer"},[this.genItemsPerPageSelect(),this.genPaginationInfo(),this.genIcons()])}}),x=s("e4cd"),P=s("7560"),I=s("58df"),E=s("d9bd"),w=Object(I["a"])(x["a"],P["a"]).extend({name:"v-data-iterator",props:{...v.options.props,itemKey:{type:String,default:"id"},value:{type:Array,default:()=>[]},singleSelect:Boolean,expanded:{type:Array,default:()=>[]},mobileBreakpoint:{...x["a"].options.props.mobileBreakpoint,default:600},singleExpand:Boolean,loading:[Boolean,String],noResultsText:{type:String,default:"$vuetify.dataIterator.noResultsText"},noDataText:{type:String,default:"$vuetify.noDataText"},loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideDefaultFooter:Boolean,footerProps:Object,selectableKey:{type:String,default:"isSelectable"}},data:()=>({selection:{},expansion:{},internalCurrentItems:[]}),computed:{everyItem(){return!!this.selectableItems.length&&this.selectableItems.every(t=>this.isSelected(t))},someItems(){return this.selectableItems.some(t=>this.isSelected(t))},sanitizedFooterProps(){return Object(b["d"])(this.footerProps)},selectableItems(){return this.internalCurrentItems.filter(t=>this.isSelectable(t))}},watch:{value:{handler(t){this.selection=t.reduce((t,e)=>(t[Object(b["o"])(e,this.itemKey)]=e,t),{})},immediate:!0},selection(t,e){Object(b["i"])(Object.keys(t),Object.keys(e))||this.$emit("input",Object.values(t))},expanded:{handler(t){this.expansion=t.reduce((t,e)=>(t[Object(b["o"])(e,this.itemKey)]=!0,t),{})},immediate:!0},expansion(t,e){if(Object(b["i"])(t,e))return;const s=Object.keys(t).filter(e=>t[e]),i=s.length?this.items.filter(t=>s.includes(String(Object(b["o"])(t,this.itemKey)))):[];this.$emit("update:expanded",i)}},created(){const t=[["disable-initial-sort","sort-by"],["filter","custom-filter"],["pagination","options"],["total-items","server-items-length"],["hide-actions","hide-default-footer"],["rows-per-page-items","footer-props.items-per-page-options"],["rows-per-page-text","footer-props.items-per-page-text"],["prev-icon","footer-props.prev-icon"],["next-icon","footer-props.next-icon"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(E["a"])(t,e,this)});const e=["expand","content-class","content-props","content-tag"];e.forEach(t=>{this.$attrs.hasOwnProperty(t)&&Object(E["e"])(t)})},methods:{toggleSelectAll(t){const e=Object.assign({},this.selection);for(let s=0;s<this.selectableItems.length;s++){const i=this.selectableItems[s];if(!this.isSelectable(i))continue;const a=Object(b["o"])(i,this.itemKey);t?e[a]=i:delete e[a]}this.selection=e,this.$emit("toggle-select-all",{items:this.internalCurrentItems,value:t})},isSelectable(t){return!1!==Object(b["o"])(t,this.selectableKey)},isSelected(t){return!!this.selection[Object(b["o"])(t,this.itemKey)]||!1},select(t,e=!0,s=!0){if(!this.isSelectable(t))return;const i=this.singleSelect?{}:Object.assign({},this.selection),a=Object(b["o"])(t,this.itemKey);if(e?i[a]=t:delete i[a],this.singleSelect&&s){const t=Object.keys(this.selection),e=t.length&&Object(b["o"])(this.selection[t[0]],this.itemKey);e&&e!==a&&this.$emit("item-selected",{item:this.selection[e],value:!1})}this.selection=i,s&&this.$emit("item-selected",{item:t,value:e})},isExpanded(t){return this.expansion[Object(b["o"])(t,this.itemKey)]||!1},expand(t,e=!0){const s=this.singleExpand?{}:Object.assign({},this.expansion),i=Object(b["o"])(t,this.itemKey);e?s[i]=!0:delete s[i],this.expansion=s,this.$emit("item-expanded",{item:t,value:e})},createItemProps(t){return{item:t,select:e=>this.select(t,e),isSelected:this.isSelected(t),expand:e=>this.expand(t,e),isExpanded:this.isExpanded(t),isMobile:this.isMobile}},genEmptyWrapper(t){return this.$createElement("div",t)},genEmpty(t,e){if(0===t&&this.loading){const t=this.$slots.loading||this.$vuetify.lang.t(this.loadingText);return this.genEmptyWrapper(t)}if(0===t){const t=this.$slots["no-data"]||this.$vuetify.lang.t(this.noDataText);return this.genEmptyWrapper(t)}if(0===e){const t=this.$slots["no-results"]||this.$vuetify.lang.t(this.noResultsText);return this.genEmptyWrapper(t)}return null},genItems(t){const e=this.genEmpty(t.originalItemsLength,t.pagination.itemsLength);return e?[e]:this.$scopedSlots.default?this.$scopedSlots.default({...t,isSelected:this.isSelected,select:this.select,isExpanded:this.isExpanded,expand:this.expand}):this.$scopedSlots.item?t.items.map(t=>this.$scopedSlots.item(this.createItemProps(t))):[]},genFooter(t){if(this.hideDefaultFooter)return null;const e={props:{...this.sanitizedFooterProps,options:t.options,pagination:t.pagination},on:{"update:options":e=>t.updateOptions(e)}},s=Object(b["p"])("footer.",this.$scopedSlots);return this.$createElement(O,{scopedSlots:s,...e})},genDefaultScopedSlot(t){const e={...t,someItems:this.someItems,everyItem:this.everyItem,toggleSelectAll:this.toggleSelectAll};return this.$createElement("div",{staticClass:"v-data-iterator"},[Object(b["r"])(this,"header",e,!0),this.genItems(t),this.genFooter(t),Object(b["r"])(this,"footer",e,!0)])}},render(){return this.$createElement(v,{props:this.$props,on:{"update:options":(t,e)=>!Object(b["i"])(t,e)&&this.$emit("update:options",t),"update:page":t=>this.$emit("update:page",t),"update:items-per-page":t=>this.$emit("update:items-per-page",t),"update:sort-by":t=>this.$emit("update:sort-by",t),"update:sort-desc":t=>this.$emit("update:sort-desc",t),"update:group-by":t=>this.$emit("update:group-by",t),"update:group-desc":t=>this.$emit("update:group-desc",t),pagination:(t,e)=>!Object(b["i"])(t,e)&&this.$emit("pagination",t),"current-items":t=>{this.internalCurrentItems=t,this.$emit("current-items",t)},"page-count":t=>this.$emit("page-count",t)},scopedSlots:{default:this.genDefaultScopedSlot}})}}),j=(s("f823"),s("34ef")),_=s("9e88"),B=s("5607"),C=Object(I["a"])().extend({directives:{ripple:B["a"]},props:{headers:{type:Array,default:()=>[]},options:{type:Object,default:()=>({page:1,itemsPerPage:10,sortBy:[],sortDesc:[],groupBy:[],groupDesc:[],multiSort:!1,mustSort:!1})},sortIcon:{type:String,default:"$sort"},everyItem:Boolean,someItems:Boolean,showGroupBy:Boolean,singleSelect:Boolean,disableSort:Boolean},methods:{genSelectAll(){const t={props:{value:this.everyItem,indeterminate:!this.everyItem&&this.someItems},on:{input:t=>this.$emit("toggle-select-all",t)}};return this.$scopedSlots["data-table-select"]?this.$scopedSlots["data-table-select"](t):this.$createElement(_["a"],{staticClass:"v-data-table__checkbox",...t})},genSortIcon(){return this.$createElement($["a"],{staticClass:"v-data-table-header__icon",props:{size:18}},[this.sortIcon])}}}),D=Object(I["a"])(C).extend({name:"v-data-table-header-mobile",props:{sortByText:{type:String,default:"$vuetify.dataTable.sortBy"}},methods:{genSortChip(t){const e=[t.item.text],s=this.options.sortBy.findIndex(e=>e===t.item.value),i=s>=0,a=this.options.sortDesc[s];return e.push(this.$createElement("div",{staticClass:"v-chip__close",class:{sortable:!0,active:i,asc:i&&!a,desc:i&&a}},[this.genSortIcon()])),this.$createElement(j["a"],{staticClass:"sortable",on:{click:e=>{e.stopPropagation(),this.$emit("sort",t.item.value)}}},e)},genSortSelect(t){return this.$createElement(y["a"],{props:{label:this.$vuetify.lang.t(this.sortByText),items:t,hideDetails:!0,multiple:this.options.multiSort,value:this.options.multiSort?this.options.sortBy:this.options.sortBy[0],menuProps:{closeOnContentClick:!0}},on:{change:t=>this.$emit("sort",t)},scopedSlots:{selection:t=>this.genSortChip(t)}})}},render(t){const e=[],s=this.headers.find(t=>"data-table-select"===t.value);s&&!this.singleSelect&&e.push(this.$createElement("div",{class:["v-data-table-header-mobile__select",...Object(b["E"])(s.class)],attrs:{width:s.width}},[this.genSelectAll()]));const i=this.headers.filter(t=>!1!==t.sortable&&"data-table-select"!==t.value).map(t=>({text:t.text,value:t.value}));!this.disableSort&&i.length&&e.push(this.genSortSelect(i));const a=t("th",[t("div",{staticClass:"v-data-table-header-mobile__wrapper"},e)]),o=t("tr",[a]);return t("thead",{staticClass:"v-data-table-header v-data-table-header-mobile"},[o])}}),k=Object(I["a"])(C).extend({name:"v-data-table-header-desktop",methods:{genGroupByToggle(t){return this.$createElement("span",{on:{click:e=>{e.stopPropagation(),this.$emit("group",t.value)}}},["group"])},getAria(t,e){const s=t=>this.$vuetify.lang.t("$vuetify.dataTable.ariaLabel."+t);let i="none",a=[s("sortNone"),s("activateAscending")];return t?(e?(i="descending",a=[s("sortDescending"),s(this.options.mustSort?"activateAscending":"activateNone")]):(i="ascending",a=[s("sortAscending"),s("activateDescending")]),{ariaSort:i,ariaLabel:a.join(" ")}):{ariaSort:i,ariaLabel:a.join(" ")}},genHeader(t){const e={attrs:{role:"columnheader",scope:"col","aria-label":t.text||""},style:{width:Object(b["g"])(t.width),minWidth:Object(b["g"])(t.width)},class:["text-"+(t.align||"start"),...Object(b["E"])(t.class),t.divider&&"v-data-table__divider"],on:{}},s=[];if("data-table-select"===t.value&&!this.singleSelect)return this.$createElement("th",e,[this.genSelectAll()]);if(s.push(this.$scopedSlots[t.value]?this.$scopedSlots[t.value]({header:t}):this.$createElement("span",[t.text])),!this.disableSort&&(t.sortable||!t.hasOwnProperty("sortable"))){e.on.click=()=>this.$emit("sort",t.value);const i=this.options.sortBy.findIndex(e=>e===t.value),a=i>=0,o=this.options.sortDesc[i];e.class.push("sortable");const{ariaLabel:r,ariaSort:n}=this.getAria(a,o);e.attrs["aria-label"]+=`${t.text?": ":""}${r}`,e.attrs["aria-sort"]=n,a&&(e.class.push("active"),e.class.push(o?"desc":"asc")),"end"===t.align?s.unshift(this.genSortIcon()):s.push(this.genSortIcon()),this.options.multiSort&&a&&s.push(this.$createElement("span",{class:"v-data-table-header__sort-badge"},[String(i+1)]))}return this.showGroupBy&&!1!==t.groupable&&s.push(this.genGroupByToggle(t)),this.$createElement("th",e,s)}},render(){return this.$createElement("thead",{staticClass:"v-data-table-header"},[this.$createElement("tr",this.headers.map(t=>this.genHeader(t)))])}});function A(t){if(t.model&&t.on&&t.on.input)if(Array.isArray(t.on.input)){const e=t.on.input.indexOf(t.model.callback);e>-1&&t.on.input.splice(e,1)}else delete t.on.input}var T=s("d9f7");function L(t,e){const s=[];for(const i in t)t.hasOwnProperty(i)&&s.push(e("template",{slot:i},t[i]));return s}var F=f["a"].extend({name:"v-data-table-header",functional:!0,props:{...C.options.props,mobile:Boolean},render(t,{props:e,data:s,slots:i}){A(s);const a=L(i(),t);return s=Object(T["a"])(s,{props:e}),e.mobile?t(D,s,a):t(k,s,a)}}),H=f["a"].extend({name:"row",functional:!0,props:{headers:Array,item:Object,rtl:Boolean},render(t,{props:e,slots:s,data:i}){const a=s(),o=e.headers.map(s=>{const o=[],r=Object(b["o"])(e.item,s.value),n=s.value,l=i.scopedSlots&&i.scopedSlots[n],p=a[n];l?o.push(l({item:e.item,header:s,value:r})):p?o.push(p):o.push(null==r?r:String(r));const h="text-"+(s.align||"start");return t("td",{class:{[h]:!0,"v-data-table__divider":s.divider}},o)});return t("tr",i,o)}}),W=f["a"].extend({name:"row-group",functional:!0,props:{value:{type:Boolean,default:!0},headerClass:{type:String,default:"v-row-group__header"},contentClass:String,summaryClass:{type:String,default:"v-row-group__summary"}},render(t,{slots:e,props:s}){const i=e(),a=[];return i["column.header"]?a.push(t("tr",{staticClass:s.headerClass},i["column.header"])):i["row.header"]&&a.push(...i["row.header"]),i["row.content"]&&s.value&&a.push(...i["row.content"]),i["column.summary"]?a.push(t("tr",{staticClass:s.summaryClass},i["column.summary"])):i["row.summary"]&&a.push(...i["row.summary"]),a}}),R=(s("8b37"),Object(I["a"])(P["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(b["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})),V=f["a"].extend({name:"row",functional:!0,props:{headers:Array,hideDefaultHeader:Boolean,item:Object,rtl:Boolean},render(t,{props:e,slots:s,data:i}){const a=s(),o=e.headers.map(s=>{const o={"v-data-table__mobile-row":!0},r=[],n=Object(b["o"])(e.item,s.value),l=s.value,p=i.scopedSlots&&i.scopedSlots[l],h=a[l];p?r.push(p({item:e.item,header:s,value:n})):h?r.push(h):r.push(null==n?n:String(n));const d=[t("div",{staticClass:"v-data-table__mobile-row__cell"},r)];return"dataTableSelect"===s.value||e.hideDefaultHeader||d.unshift(t("div",{staticClass:"v-data-table__mobile-row__header"},[s.text])),t("td",{class:o},d)});return t("tr",{...i,staticClass:"v-data-table__mobile-table-row"},o)}}),G=s("297c");function N(t,e,s){return i=>{const a=Object(b["o"])(t,i.value);return i.filter?i.filter(a,e,t):s(a,e,t)}}function M(t,e,s,i,a){return e="string"===typeof e?e.trim():null,t.filter(t=>{const o=s.every(N(t,e,b["j"])),r=!e||i.some(N(t,e,a));return o&&r})}var K=Object(I["a"])(w,G["a"]).extend({name:"v-data-table",directives:{ripple:B["a"]},props:{headers:{type:Array,default:()=>[]},showSelect:Boolean,showExpand:Boolean,showGroupBy:Boolean,height:[Number,String],hideDefaultHeader:Boolean,caption:String,dense:Boolean,headerProps:Object,calculateWidths:Boolean,fixedHeader:Boolean,headersLength:Number,expandIcon:{type:String,default:"$expand"},customFilter:{type:Function,default:b["j"]},itemClass:{type:[String,Function],default:()=>""},loaderHeight:{type:[Number,String],default:4}},data(){return{internalGroupBy:[],openCache:{},widths:[]}},computed:{computedHeaders(){if(!this.headers)return[];const t=this.headers.filter(t=>void 0===t.value||!this.internalGroupBy.find(e=>e===t.value)),e={text:"",sortable:!1,width:"1px"};if(this.showSelect){const s=t.findIndex(t=>"data-table-select"===t.value);s<0?t.unshift({...e,value:"data-table-select"}):t.splice(s,1,{...e,...t[s]})}if(this.showExpand){const s=t.findIndex(t=>"data-table-expand"===t.value);s<0?t.unshift({...e,value:"data-table-expand"}):t.splice(s,1,{...e,...t[s]})}return t},colspanAttrs(){return this.isMobile?void 0:{colspan:this.headersLength||this.computedHeaders.length}},columnSorters(){return this.computedHeaders.reduce((t,e)=>(e.sort&&(t[e.value]=e.sort),t),{})},headersWithCustomFilters(){return this.headers.filter(t=>t.filter&&(!t.hasOwnProperty("filterable")||!0===t.filterable))},headersWithoutCustomFilters(){return this.headers.filter(t=>!t.filter&&(!t.hasOwnProperty("filterable")||!0===t.filterable))},sanitizedHeaderProps(){return Object(b["d"])(this.headerProps)},computedItemsPerPage(){const t=this.options&&this.options.itemsPerPage?this.options.itemsPerPage:this.itemsPerPage,e=this.sanitizedFooterProps.itemsPerPageOptions;if(e&&!e.find(e=>"number"===typeof e?e===t:e.value===t)){const t=e[0];return"object"===typeof t?t.value:t}return t}},created(){const t=[["sort-icon","header-props.sort-icon"],["hide-headers","hide-default-header"],["select-all","show-select"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(E["a"])(t,e,this)})},mounted(){this.calculateWidths&&(window.addEventListener("resize",this.calcWidths),this.calcWidths())},beforeDestroy(){this.calculateWidths&&window.removeEventListener("resize",this.calcWidths)},methods:{calcWidths(){this.widths=Array.from(this.$el.querySelectorAll("th")).map(t=>t.clientWidth)},customFilterWithColumns(t,e){return M(t,e,this.headersWithCustomFilters,this.headersWithoutCustomFilters,this.customFilter)},customSortWithHeaders(t,e,s,i){return this.customSort(t,e,s,i,this.columnSorters)},createItemProps(t){const e=w.options.methods.createItemProps.call(this,t);return Object.assign(e,{headers:this.computedHeaders})},genCaption(t){return this.caption?[this.$createElement("caption",[this.caption])]:Object(b["r"])(this,"caption",t,!0)},genColgroup(t){return this.$createElement("colgroup",this.computedHeaders.map(t=>this.$createElement("col",{class:{divider:t.divider}})))},genLoading(){const t=this.$createElement("th",{staticClass:"column",attrs:this.colspanAttrs},[this.genProgress()]),e=this.$createElement("tr",{staticClass:"v-data-table__progress"},[t]);return this.$createElement("thead",[e])},genHeaders(t){const e={props:{...this.sanitizedHeaderProps,headers:this.computedHeaders,options:t.options,mobile:this.isMobile,showGroupBy:this.showGroupBy,someItems:this.someItems,everyItem:this.everyItem,singleSelect:this.singleSelect,disableSort:this.disableSort},on:{sort:t.sort,group:t.group,"toggle-select-all":this.toggleSelectAll}},s=[Object(b["r"])(this,"header",e)];if(!this.hideDefaultHeader){const t=Object(b["p"])("header.",this.$scopedSlots);s.push(this.$createElement(F,{...e,scopedSlots:t}))}return this.loading&&s.push(this.genLoading()),s},genEmptyWrapper(t){return this.$createElement("tr",{staticClass:"v-data-table__empty-wrapper"},[this.$createElement("td",{attrs:this.colspanAttrs},t)])},genItems(t,e){const s=this.genEmpty(e.originalItemsLength,e.pagination.itemsLength);return s?[s]:e.groupedItems?this.genGroupedRows(e.groupedItems,e):this.genRows(t,e)},genGroupedRows(t,e){return t.map(t=>(this.openCache.hasOwnProperty(t.name)||this.$set(this.openCache,t.name,!0),this.$scopedSlots.group?this.$scopedSlots.group({group:t.name,options:e.options,items:t.items,headers:this.computedHeaders}):this.genDefaultGroupedRow(t.name,t.items,e)))},genDefaultGroupedRow(t,e,s){const i=!!this.openCache[t],a=[this.$createElement("template",{slot:"row.content"},this.genRows(e,s))],o=()=>this.$set(this.openCache,t,!this.openCache[t]),r=()=>s.updateOptions({groupBy:[],groupDesc:[]});if(this.$scopedSlots["group.header"])a.unshift(this.$createElement("template",{slot:"column.header"},[this.$scopedSlots["group.header"]({group:t,groupBy:s.options.groupBy,items:e,headers:this.computedHeaders,isOpen:i,toggle:o,remove:r})]));else{const e=this.$createElement(S["a"],{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:o}},[this.$createElement($["a"],[i?"$minus":"$plus"])]),n=this.$createElement(S["a"],{staticClass:"ma-0",props:{icon:!0,small:!0},on:{click:r}},[this.$createElement($["a"],["$close"])]),l=this.$createElement("td",{staticClass:"text-start",attrs:this.colspanAttrs},[e,`${s.options.groupBy[0]}: ${t}`,n]);a.unshift(this.$createElement("template",{slot:"column.header"},[l]))}return this.$scopedSlots["group.summary"]&&a.push(this.$createElement("template",{slot:"column.summary"},[this.$scopedSlots["group.summary"]({group:t,groupBy:s.options.groupBy,items:e,headers:this.computedHeaders,isOpen:i,toggle:o})])),this.$createElement(W,{key:t,props:{value:i}},a)},genRows(t,e){return this.$scopedSlots.item?this.genScopedRows(t,e):this.genDefaultRows(t,e)},genScopedRows(t,e){const s=[];for(let i=0;i<t.length;i++){const e=t[i];s.push(this.$scopedSlots.item({...this.createItemProps(e),index:i})),this.isExpanded(e)&&s.push(this.$scopedSlots["expanded-item"]({item:e,headers:this.computedHeaders}))}return s},genDefaultRows(t,e){return this.$scopedSlots["expanded-item"]?t.map(t=>this.genDefaultExpandedRow(t)):t.map(t=>this.genDefaultSimpleRow(t))},genDefaultExpandedRow(t){const e=this.isExpanded(t),s={"v-data-table__expanded v-data-table__expanded__row":e},i=this.genDefaultSimpleRow(t,s),a=this.$createElement("tr",{staticClass:"v-data-table__expanded v-data-table__expanded__content"},[this.$scopedSlots["expanded-item"]({item:t,headers:this.computedHeaders})]);return this.$createElement(W,{props:{value:e}},[this.$createElement("template",{slot:"row.header"},[i]),this.$createElement("template",{slot:"row.content"},[a])])},genDefaultSimpleRow(t,e={}){const s=Object(b["p"])("item.",this.$scopedSlots),i=this.createItemProps(t);if(this.showSelect){const e=s["data-table-select"];s["data-table-select"]=e?()=>e(i):()=>this.$createElement(_["a"],{staticClass:"v-data-table__checkbox",props:{value:i.isSelected,disabled:!this.isSelectable(t)},on:{input:t=>i.select(t)}})}if(this.showExpand){const t=s["data-table-expand"];s["data-table-expand"]=t?()=>t(i):()=>this.$createElement($["a"],{staticClass:"v-data-table__expand-icon",class:{"v-data-table__expand-icon--active":i.isExpanded},on:{click:t=>{t.stopPropagation(),i.expand(!i.isExpanded)}}},[this.expandIcon])}return this.$createElement(this.isMobile?V:H,{key:Object(b["o"])(t,this.itemKey),class:Object(T["b"])({...e,"v-data-table__selected":i.isSelected},Object(b["q"])(t,this.itemClass)),props:{headers:this.computedHeaders,hideDefaultHeader:this.hideDefaultHeader,item:t,rtl:this.$vuetify.rtl},scopedSlots:s,on:{click:()=>this.$emit("click:row",t,i),contextmenu:t=>this.$emit("contextmenu:row",t,i),dblclick:t=>this.$emit("dblclick:row",t,i)}})},genBody(t){const e={...t,expand:this.expand,headers:this.computedHeaders,isExpanded:this.isExpanded,isMobile:this.isMobile,isSelected:this.isSelected,select:this.select};return this.$scopedSlots.body?this.$scopedSlots.body(e):this.$createElement("tbody",[Object(b["r"])(this,"body.prepend",e,!0),this.genItems(t.items,t),Object(b["r"])(this,"body.append",e,!0)])},genFooters(t){const e={props:{options:t.options,pagination:t.pagination,itemsPerPageText:"$vuetify.dataTable.itemsPerPageText",...this.sanitizedFooterProps},on:{"update:options":e=>t.updateOptions(e)},widths:this.widths,headers:this.computedHeaders},s=[Object(b["r"])(this,"footer",e,!0)];return this.hideDefaultFooter||s.push(this.$createElement(O,{...e,scopedSlots:Object(b["p"])("footer.",this.$scopedSlots)})),s},genDefaultScopedSlot(t){const e={height:this.height,fixedHeader:this.fixedHeader,dense:this.dense};return this.$createElement(R,{props:e},[this.proxySlot("top",Object(b["r"])(this,"top",t,!0)),this.genCaption(t),this.genColgroup(t),this.genHeaders(t),this.genBody(t),this.proxySlot("bottom",this.genFooters(t))])},proxySlot(t,e){return this.$createElement("template",{slot:t},e)}},render(){return this.$createElement(v,{props:{...this.$props,customFilter:this.customFilterWithColumns,customSort:this.customSortWithHeaders,itemsPerPage:this.computedItemsPerPage},on:{"update:options":(t,e)=>{this.internalGroupBy=t.groupBy||[],!Object(b["i"])(t,e)&&this.$emit("update:options",t)},"update:page":t=>this.$emit("update:page",t),"update:items-per-page":t=>this.$emit("update:items-per-page",t),"update:sort-by":t=>this.$emit("update:sort-by",t),"update:sort-desc":t=>this.$emit("update:sort-desc",t),"update:group-by":t=>this.$emit("update:group-by",t),"update:group-desc":t=>this.$emit("update:group-desc",t),pagination:(t,e)=>!Object(b["i"])(t,e)&&this.$emit("pagination",t),"current-items":t=>{this.internalCurrentItems=t,this.$emit("current-items",t)},"page-count":t=>this.$emit("page-count",t)},scopedSlots:{default:this.genDefaultScopedSlot}})}}),z=s("169a"),q=s("132d"),U=s("2fa4"),J=s("71d9"),Z=s("2a7f"),Q=Object(h["a"])(p,i,a,!1,null,null,null);e["default"]=Q.exports;c()(Q,{VBtn:u["a"],VCard:m["a"],VCardText:g["c"],VDataTable:K,VDialog:z["a"],VIcon:q["a"],VSpacer:U["a"],VToolbar:J["a"],VToolbarTitle:Z["b"]})},f436:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"exported-tanks-div"},t._l(t.exported_tanks_list,(function(e){return s("div",{key:e.id,staticClass:"exported-tank"},[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[s("v-card-title",[t._v(" "+t._s(e.name)+" ")]),s("v-card-subtitle",[t._v(" "+t._s(new Date(e.exportDate).toLocaleString())+" ")]),s("v-card-actions",[3!=t.user.userRole?s("v-btn",{attrs:{color:"black",text:""},on:{click:function(s){return t.tankExport(e.id)}}},[t._v(" Anuluj ")]):t._e(),3!=t.user.userRole?s("v-btn",{attrs:{color:"green"},on:{click:function(s){return t.tankDeliver(e.id)}}},[t._v(" Dostarcz ")]):t._e(),s("v-spacer"),s("v-btn",{attrs:{icon:""},on:{click:function(s){t.show=e.id}}},[s("v-icon",[t._v(t._s(t.show==e.id?"":"mdi-chevron-down"))])],1),t.show==e.id?s("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!1}}},[s("v-icon",[t._v(t._s(t.show==e.id?"mdi-close":"mdi-chevron-down"))])],1):t._e()],1),s("v-expand-transition",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show==e.id,expression:"show == tank.id"}]},[s("v-divider"),s("v-card-text",[s("p",[t._v("Miasto: "+t._s(e.city))]),s("p",[t._v("Ulica: "+t._s(e.street))]),s("p",[t._v("Producent: "+t._s(e.manufacturer))])])],1)])],1)],1)})),0)},a=[],o=s("5530"),r=s("2f62"),n={name:"OnTheRoad",components:{},data:function(){return{show:!1}},methods:{tankExport:function(t){this.$store.dispatch("common/exportTank",{isExported:0,city:"",street:"",id:t}),this.$store.dispatch("common/loadExportedTanksList"),this.$emit("tankExport")},tankDeliver:function(t){this.$store.dispatch("common/deliverTank",{id:t}),this.$store.dispatch("common/loadExportedTanksList"),this.$emit("tankExport")}},created:function(){this.$store.getters["authentication/isLoggedIn"]||this.$router.push("/login"),this.$store.dispatch("common/loadExportedTanksList")},computed:Object(o["a"])(Object(o["a"])({},Object(r["b"])("common",["exported_tanks_list"])),Object(r["b"])("authentication",["user"]))},l=n,p=(s("3db2"),s("2877")),h=s("6544"),d=s.n(h),c=s("8336"),u=s("b0af"),m=s("99d9"),g=s("ce7e"),b=s("0789"),f=s("132d"),v=s("2fa4"),y=Object(p["a"])(l,i,a,!1,null,"f973fed6",null);e["default"]=y.exports;d()(y,{VBtn:c["a"],VCard:u["a"],VCardActions:m["a"],VCardSubtitle:m["b"],VCardText:m["c"],VCardTitle:m["d"],VDivider:g["a"],VExpandTransition:b["a"],VIcon:f["a"],VSpacer:v["a"]})},f823:function(t,e,s){}}]);
//# sourceMappingURL=about.3d85046e.js.map