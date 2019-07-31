(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4382faea"],{"11e9":function(t,e,n){var a=n("52a7"),r=n("4630"),i=n("6821"),o=n("6a99"),l=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=i(t),e=o(e,!0),s)try{return u(t,e)}catch(n){}if(l(t,e))return r(!a.f.call(t,e),t[e])}},"2ee3":function(t,e,n){var a,r;(function(i,o){if(null===i)throw new Error("Google-maps package can be used only in browser");a=o,r="function"===typeof a?a.call(e,n,e,t):a,void 0===r||(t.exports=r)})("undefined"!==typeof window?window:null,function(){"use strict";var t="3.31",e=null,n=null,a=!1,r=[],i=[],o=null,l={URL:"https://maps.googleapis.com/maps/api/js",KEY:null,LIBRARIES:[],CLIENT:null,CHANNEL:null,LANGUAGE:null,REGION:null};l.VERSION=t,l.WINDOW_CALLBACK_NAME="__google_maps_api_provider_initializator__",l._googleMockApiObject={},l.load=function(t){null===n?!0===a?t&&r.push(t):(a=!0,window[l.WINDOW_CALLBACK_NAME]=function(){s(t)},l.createLoader()):t&&t(n)},l.createLoader=function(){e=document.createElement("script"),e.type="text/javascript",e.src=l.createUrl(),document.body.appendChild(e)},l.isLoaded=function(){return null!==n},l.createUrl=function(){var t=l.URL;return t+="?callback="+l.WINDOW_CALLBACK_NAME,l.KEY&&(t+="&key="+l.KEY),l.LIBRARIES.length>0&&(t+="&libraries="+l.LIBRARIES.join(",")),l.CLIENT&&(t+="&client="+l.CLIENT),l.CHANNEL&&(t+="&channel="+l.CHANNEL),l.LANGUAGE&&(t+="&language="+l.LANGUAGE),l.REGION&&(t+="&region="+l.REGION),l.VERSION&&(t+="&v="+l.VERSION),t},l.release=function(s){var u=function(){l.KEY=null,l.LIBRARIES=[],l.CLIENT=null,l.CHANNEL=null,l.LANGUAGE=null,l.REGION=null,l.VERSION=t,n=null,a=!1,r=[],i=[],"undefined"!==typeof window.google&&delete window.google,"undefined"!==typeof window[l.WINDOW_CALLBACK_NAME]&&delete window[l.WINDOW_CALLBACK_NAME],null!==o&&(l.createLoader=o,o=null),null!==e&&(e.parentElement.removeChild(e),e=null),s&&s()};a?l.load(function(){u()}):u()},l.onLoad=function(t){i.push(t)},l.makeMock=function(){o=l.createLoader,l.createLoader=function(){window.google=l._googleMockApiObject,window[l.WINDOW_CALLBACK_NAME]()}};var s=function(t){var e;for(a=!1,null===n&&(n=window.google),e=0;e<i.length;e++)i[e](n);for(t&&t(n),e=0;e<r.length;e++)r[e](n);r=[]};return l})},"554e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xs":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs6:""}},[n("h1",{staticClass:"font-weight-light"},[t._v("\n        Sensor Name: "+t._s(t.sensor.name)+"\n        "),n("br")]),n("h3",[t._v("Registered on: "+t._s(t.sensor.register))]),n("h3",[t._v("Description: "+t._s(t.sensor.description))]),n("v-divider"),n("br"),n("br"),n("br"),t.hasRead?n("v-flex",{attrs:{xs12:""}},[n("h3",[t._v("Min reading:"+t._s(t.min))]),n("h3",[t._v("Max reading:"+t._s(t.max))]),n("h3",[t._v("Average: "+t._s(t.avg))])]):n("v-flex",{attrs:{xs12:""}},[n("h3",[t._v("The sensor has no reading for the time")])]),n("v-btn",{attrs:{flat:""},on:{click:function(e){return t.closeSite()}}},[n("span",[t._v("Close site")])])],1),n("v-flex",{attrs:{xs6:""}},[n("lineChart",{attrs:{id:"chart","chart-data":t.datacol}}),n("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[n("v-btn-toggle",{attrs:{"justify-center":""},model:{value:t.toggle_exclusive,callback:function(e){t.toggle_exclusive=e},expression:"toggle_exclusive"}},[n("v-btn",{attrs:{flat:""},on:{click:function(e){return t.getReading("setup")}}},[n("span",[t._v("all")])]),n("v-btn",{attrs:{flat:""},on:{click:function(e){return t.getReading("1y")}}},[n("span",[t._v("1y")])]),n("v-btn",{attrs:{flat:""},on:{click:function(e){return t.getReading("6m")}}},[n("span",[t._v("6m")])]),n("v-btn",{attrs:{flat:""},on:{click:function(e){return t.getReading("1m")}}},[n("span",[t._v("1m")])]),n("v-btn",{attrs:{flat:""},on:{click:function(e){return t.getReading("1w")}}},[n("span",[t._v("1w")])]),n("v-btn",{attrs:{flat:""},on:{click:function(e){return t.getReading("1d")}}},[n("span",[t._v("1d")])])],1)],1)],1)],1),n("br"),n("br"),n("br"),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("gmap",{attrs:{lat:parseFloat(t.sensor.x),lng:parseFloat(t.sensor.y),editable:!1,img:t.sensor.imgid}})],1)],1)],1)},r=[],i=(n("ac6a"),n("7f7f"),n("4a88")),o=n("6b40"),l={data:function(){return{sensor:null,datacol:{},data:null,labels:null,max:null,min:null,avg:null,hasRead:!1}},props:{name:String},methods:{getReading:function(t){var e=this,n="/readSensor?name="+this.$options.propsData.name;"setup"!=t&&(n+="&datespan="+t),n=encodeURI(n),this.axios.get(n).then(function(n){var a=[],r=[],i=n.data.result,o=0;if(0==i.length?e.hasRead=!1:e.hasRead=!0,"setup"==t){i.reverse();for(var l=i.length;o<10&&0!=l;l--,o++){var s=i[l-1];a.push(parseFloat(s.value));var u=new Date(s.date);r.push(u.getDate()+"/"+(u.getMonth()+1)+"/"+u.getFullYear())}}else i.forEach(function(t){a.push(parseFloat(t.value));var e=new Date(t.date);r.push(e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear())});e.data=a,e.labels=r,e.min=Math.min.apply(Math,a)+" on "+r[a.indexOf(Math.min.apply(Math,a))],e.max=Math.max.apply(Math,a)+" on "+r[a.indexOf(Math.max.apply(Math,a))];var c=a.reduce(function(t,e){return t+e}),p=c/a.length;e.avg=p}).finally(function(){e.axios.get("/getSensorInfo?name="+e.$options.propsData.name).then(function(t){var n=t.data.result,a=new Date(n.register),r=a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear();n.register=r,e.sensor=n;var i=Math.round,o=Math.random,l=255,s="rgba("+i(o()*l)+","+i(o()*l)+","+i(o()*l)+","+o().toFixed(1)+")";e.datacol={labels:e.labels,datasets:[{label:e.sensor.unit,backgroundColor:s,data:e.data}]},e.axios.post("/movelg",{lat:n.y,lng:n.x,host:"192.168.0.155",username:"lg",password:"lq"}).then(function(){}).catch(function(t){console.log("here"),console.log(t)}).finally(function(){console.log("ue"),console.log(window.location.pathname),console.log(encodeURI("http://192.168.0.187:8888/front/"+e.sensor.name+"lgDetail"));var t=Object({VUE_APP_backEnd:"",VUE_APP_ericbe:"http://192.168.0.155:8888",VUE_APP_masterIp:"192.168.0.155",VUE_APP_slaveIp:"192.168.0.141",VUE_APP_key:"lq",VUE_APP_user:"lg",VUE_APP_localip:"http://192.168.0.187:8888",NODE_ENV:"production",BASE_URL:"/"});e.axios.post(t.VUE_APP_backEnd+"/opensite",{serverurl:encodeURI(t.VUE_APP_localip+"/front/"+e.sensor.name+"/lgDetail"),lgurl:t.VUE_APP_slaveIp,lguser:t.VUE_APP_user,lgkey:t.VUE_APP_key}).then(function(){console.log("finally")}).catch(function(t){console.log("ta")})})})})},closeSite:function(){this.axios.post("/closesite",{lgurl:"192.168.0.141",lguser:"lg",lgkey:"lq"}).then(function(){console.log("finally")})}},mounted:function(){this.getReading("setup")},components:{lineChart:i["a"],gmap:o["a"]}},s=l,u=n("2877"),c=n("6544"),p=n.n(c),f=n("8336"),d=(n("934c"),n("58dbb"),n("2b0e"));function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return d["default"].extend({name:"proxyable",model:{prop:t,event:e},props:h({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:h({},t,function(t){this.internalLazyValue=t})})}var v=g(),m=v,_=n("6a18"),b=n("58df"),y=n("d9bd"),E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},A=Object(b["a"])(m,_["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return E({},this.themeClasses)},selectedItems:function(){var t=this;return this.items.filter(function(e,n){return t.toggleMethod(t.getValue(e,n))})},selectedValues:function(){return Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:function(){this.$nextTick(this.updateItemsState)}},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(y["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t,e){this.updateInternalValue(this.getValue(t,e))},register:function(t){var e=this,n=this.items.push(t)-1;t.$on("change",function(){return e.onClick(t,n)}),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,n)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),n=this.getValue(t,e);this.items.splice(e,1);var a=this.selectedValues.indexOf(n);if(!(a<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(function(t){return t!==n}):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState:function(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=t?this.items.length-1:0;this.updateInternalValue(this.getValue(this.items[e],e))}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],n=e.slice(),a=n.findIndex(function(e){return e===t});this.mandatory&&a>-1&&n.length-1<1||null!=this.max&&a<0&&n.length+1>this.max||(a>-1?n.splice(a,1):n.push(t),this.internalValue=n)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",{staticClass:"v-item-group",class:this.classes},this.$slots.default)}}),I=(A.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),A.extend({name:"button-group",provide:function(){return{btnToggle:this}},props:{activeClass:{type:String,default:"v-btn--active"}},computed:{classes:function(){return A.options.computed.classes.call(this)}}})),V=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},N=I.extend({name:"v-btn-toggle",props:{activeClass:{type:String,default:"v-btn--active"}},computed:{classes:function(){return V({},I.options.computed.classes.call(this),{"v-btn-toggle":!0,"v-btn-toggle--only-child":1===this.selectedItems.length,"v-btn-toggle--selected":this.selectedItems.length>0})}}}),w=n("a523"),x=n("ce7e"),L=n("0e8f"),M=n("a722"),O=Object(u["a"])(s,a,r,!1,null,null,null);e["default"]=O.exports;p()(O,{VBtn:f["a"],VBtnToggle:N,VContainer:w["a"],VDivider:x["a"],VFlex:L["a"],VLayout:M["a"]})},"58dbb":function(t,e,n){},"5dbc":function(t,e,n){var a=n("d3f4"),r=n("8b97").set;t.exports=function(t,e,n){var i,o=e.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&a(i)&&r&&r(t,i),t}},"6b40":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("div",{attrs:{id:"map"}})])],1)],1)},r=[],i=(n("c5f6"),n("2ee3")),o=n.n(i);o.a.KEY="AIzaSyCX0EVea8pRdiSdso5s78fahE7VTm0YtaA",o.a.LIBRARIES=["places"];var l={data:function(){return{latLng:"",localizationName:null,markers:[]}},props:{lat:Number,lng:Number,editable:Boolean,setMark:Boolean,img:String},watch:{latLng:function(){}},mounted:function(){var t,e=this;console.log(e.$options.propsData),o.a.load(function(n){var a=new n.maps.Map(document.getElementById("map"),{zoom:16,center:{lat:e.$options.propsData.lat,lng:e.$options.propsData.lng}});e.$options.propsData.editable?(a.addListener("click",function(r){null!=t&&t.setMap(null),t=new n.maps.Marker({position:r.latLng,map:a,icon:e.$options.propsData}),e.latLng=r.latLng,e.$store.dispatch("setCoord",r.latLng)}),e.$options.propsData.setMark&&(t=new n.maps.Marker({position:{lat:e.$options.propsData.lat,lng:e.$options.propsData.lng},map:a,icon:e.$options.propsData.img}))):t=new n.maps.Marker({position:{lat:e.$options.propsData.lat,lng:e.$options.propsData.lng},map:a,icon:e.$options.propsData.img})})}},s=l,u=(n("bdef"),n("2877")),c=n("6544"),p=n.n(c),f=n("a523"),d=n("0e8f"),h=n("a722"),g=Object(u["a"])(s,a,r,!1,null,null,null);e["a"]=g.exports;p()(g,{VContainer:f["a"],VFlex:d["a"],VLayout:h["a"]})},"6ba5":function(t,e,n){},"8b97":function(t,e,n){var a=n("d3f4"),r=n("cb7c"),i=function(t,e){if(r(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:a(t,n),t}}({},!1):void 0),check:i}},9093:function(t,e,n){var a=n("ce10"),r=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,r)}},"934c":function(t,e,n){},aa77:function(t,e,n){var a=n("5ca1"),r=n("be13"),i=n("79e5"),o=n("fdef"),l="["+o+"]",s="​",u=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),p=function(t,e,n){var r={},l=i(function(){return!!o[t]()||s[t]()!=s}),u=r[t]=l?e(f):o[t];n&&(r[n]=u),a(a.P+a.F*l,"String",r)},f=p.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=p},bdef:function(t,e,n){"use strict";var a=n("6ba5"),r=n.n(a);r.a},c5f6:function(t,e,n){"use strict";var a=n("7726"),r=n("69a8"),i=n("2d95"),o=n("5dbc"),l=n("6a99"),s=n("79e5"),u=n("9093").f,c=n("11e9").f,p=n("86cc").f,f=n("aa77").trim,d="Number",h=a[d],g=h,v=h.prototype,m=i(n("2aeb")(v))==d,_="trim"in String.prototype,b=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():f(e,3);var n,a,r,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+e}for(var o,s=e.slice(2),u=0,c=s.length;u<c;u++)if(o=s.charCodeAt(u),o<48||o>r)return NaN;return parseInt(s,a)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(m?s(function(){v.valueOf.call(n)}):i(n)!=d)?o(new g(b(e)),n,h):b(e)};for(var y,E=n("9e1e")?u(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;E.length>A;A++)r(g,y=E[A])&&!r(h,y)&&p(h,y,c(g,y));h.prototype=v,v.constructor=h,n("2aba")(a,d,h)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-4382faea.c5583e05.js.map