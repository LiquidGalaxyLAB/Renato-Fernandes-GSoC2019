(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc8cfecc"],{"2ee3":function(t,e,a){var n,r;(function(l,i){if(null===l)throw new Error("Google-maps package can be used only in browser");n=i,r="function"===typeof n?n.call(e,a,e,t):n,void 0===r||(t.exports=r)})("undefined"!==typeof window?window:null,function(){"use strict";var t="3.31",e=null,a=null,n=!1,r=[],l=[],i=null,o={URL:"https://maps.googleapis.com/maps/api/js",KEY:null,LIBRARIES:[],CLIENT:null,CHANNEL:null,LANGUAGE:null,REGION:null};o.VERSION=t,o.WINDOW_CALLBACK_NAME="__google_maps_api_provider_initializator__",o._googleMockApiObject={},o.load=function(t){null===a?!0===n?t&&r.push(t):(n=!0,window[o.WINDOW_CALLBACK_NAME]=function(){s(t)},o.createLoader()):t&&t(a)},o.createLoader=function(){e=document.createElement("script"),e.type="text/javascript",e.src=o.createUrl(),document.body.appendChild(e)},o.isLoaded=function(){return null!==a},o.createUrl=function(){var t=o.URL;return t+="?callback="+o.WINDOW_CALLBACK_NAME,o.KEY&&(t+="&key="+o.KEY),o.LIBRARIES.length>0&&(t+="&libraries="+o.LIBRARIES.join(",")),o.CLIENT&&(t+="&client="+o.CLIENT),o.CHANNEL&&(t+="&channel="+o.CHANNEL),o.LANGUAGE&&(t+="&language="+o.LANGUAGE),o.REGION&&(t+="&region="+o.REGION),o.VERSION&&(t+="&v="+o.VERSION),t},o.release=function(s){var u=function(){o.KEY=null,o.LIBRARIES=[],o.CLIENT=null,o.CHANNEL=null,o.LANGUAGE=null,o.REGION=null,o.VERSION=t,a=null,n=!1,r=[],l=[],"undefined"!==typeof window.google&&delete window.google,"undefined"!==typeof window[o.WINDOW_CALLBACK_NAME]&&delete window[o.WINDOW_CALLBACK_NAME],null!==i&&(o.createLoader=i,i=null),null!==e&&(e.parentElement.removeChild(e),e=null),s&&s()};n?o.load(function(){u()}):u()},o.onLoad=function(t){l.push(t)},o.makeMock=function(){i=o.createLoader,o.createLoader=function(){window.google=o._googleMockApiObject,window[o.WINDOW_CALLBACK_NAME]()}};var s=function(t){var e;for(n=!1,null===a&&(a=window.google),e=0;e<l.length;e++)l[e](a);for(t&&t(a),e=0;e<r.length;e++)r[e](a);r=[]};return o})},"554e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xs":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("h1",{staticClass:"font-weight-light"},[t._v("\n        Sensor Name: "+t._s(t.sensor.name)+"\n        "),a("br")]),a("h3",[t._v("Registered on: "+t._s(t.sensor.register))]),a("h3",[t._v("Description: "+t._s(t.sensor.description))]),a("h3",[t._v("Unit description: "+t._s(t.sensor.unitdesd))]),a("v-divider"),a("br"),t.hasRead?a("v-flex",{attrs:{xs12:""}},[a("h3",[t._v("Min reading:"+t._s(t.min))]),a("h3",[t._v("Max reading:"+t._s(t.max))]),a("h3",[t._v("Average: "+t._s(t.avg))])]):a("v-flex",{attrs:{xs12:""}},[a("h3",[t._v("The sensor has no reading for the time")])]),a("v-btn",{attrs:{flat:""},on:{click:function(e){return t.closeSite()}}},[a("span",[t._v("Close site")])]),a("v-btn",{attrs:{flat:""},on:{click:function(e){return t.openballon()}}},[a("span",[t._v("Open ballon")])]),a("v-btn",{attrs:{flat:""},on:{click:function(e){return t.closeBallon()}}},[a("span",[t._v("Close Ballon")])])],1),a("v-flex",{attrs:{xs6:""}},[a("lineChart",{key:t.redender,attrs:{id:"chart","chart-data":t.datacol}}),a("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[a("v-btn-toggle",{attrs:{"justify-center":""},model:{value:t.toggle_exclusive,callback:function(e){t.toggle_exclusive=e},expression:"toggle_exclusive"}},[a("v-btn",{attrs:{flat:""},on:{click:function(e){return t.getReading("setup")}}},[a("span",[t._v("all")])]),a("v-btn",{attrs:{flat:""},on:{click:function(e){return t.getReading("1y")}}},[a("span",[t._v("1y")])]),a("v-btn",{attrs:{flat:""},on:{click:function(e){return t.getReading("1m")}}},[a("span",[t._v("1m")])]),a("v-btn",{attrs:{flat:""},on:{click:function(e){return t.getReading("1w")}}},[a("span",[t._v("1w")])]),a("v-btn",{attrs:{flat:""},on:{click:function(e){return t.getReading("1d")}}},[a("span",[t._v("1d")])])],1)],1)],1)],1)],1)},r=[],l=a("75fc"),i=a("768b"),o=(a("ffc1"),a("456d"),a("55dd"),a("ac6a"),a("28a5"),a("bd86")),s=a("cebc"),u=(a("7f7f"),a("4a88")),c=a("6b40"),d={data:function(){return{sensor:null,datacol:{},data:null,labels:null,max:null,min:null,avg:null,hasRead:!1,redender:0,realdata:[],realdatamin:[],realdatamax:[],toinclude:[]}},props:{name:String},methods:{getReading:function(t){var e=this;this.realdata=[],this.realdatamin=[],this.realdatamax=[];var a="/readSensor?name="+this.$options.propsData.name;"setup"!=t&&(a+="&datespan="+t),a=encodeURI(a),this.axios.get(a).then(function(a){var n=[],r=[],u=a.data.result,c=0,d=function(t){return function(e){return e.reduce(function(e,a){return Object(s["a"])({},e,Object(o["a"])({},a[t],(e[a[t]]||[]).concat(a)))},{})}},h=function(a,o){for(var s=d(a),c=s(u),h=function(t,e){var a=new Date,n=new Date,r=t.split("/"),l=e.split("/");return a.setDate(r[0]),a.setMonth(r[1]-1),n.setDate(l[0]),n.setMonth(l[1]-1),a-n},p=0,f=Object.entries(c);p<f.length;p++){var g=Object(i["a"])(f[p],2),v=g[0],m=g[1],b=[];m.forEach(function(t){b.push(parseFloat(t.value))});var y=b.reduce(function(t,e){return t+e});y/=m.length,e.realdata.push(y)}if("1d"==t)for(var _=0;_<24;_++)c.hasOwnProperty(_)||(c[_]=[{value:0}]);if("1w"==t){for(var E=0;E<7;E++){var A=new Date;A.setDate(A.getDate()-E),c.hasOwnProperty(A.getDate()+"/"+(A.getMonth()+1))||(c[A.getDate()+"/"+(A.getMonth()+1)]=[{value:0}])}var V=c;c={},Object.keys(V).sort(h).forEach(function(t){c[t]=V[t]})}if("1m"==t){for(var w=0;w<30;w++){A=new Date;A.setDate(A.getDate()-w),c.hasOwnProperty(A.getDate()+"/"+(A.getMonth()+1))||(c[A.getDate()+"/"+(A.getMonth()+1)]=[{value:0}])}V=c;c={},Object.keys(V).sort(h).forEach(function(t){c[t]=V[t]})}if("1y"==t)for(var x=0;x<12;x++)c.hasOwnProperty(x+1)||(c[x+1]=[{value:0}]);for(var L=0,M=Object.entries(c);L<M.length;L++){var I=Object(i["a"])(M[L],2);v=I[0],m=I[1],b=[];m.forEach(function(t){b.push(parseFloat(t.value))});y=b.reduce(function(t,e){return t+e});y/=m.length,o(v,y,n,r,m),e.realdatamin.push(Math.min.apply(Math,Object(l["a"])(b))),e.realdatamax.push(Math.max.apply(Math,Object(l["a"])(b)))}};if(u.forEach(function(t){var e=new Date(t.date);t.day=e.getDate()+"/"+(e.getMonth()+1),t.month=e.getMonth()+1,t.year=e.getFullYear(),t.hour=e.getHours()-3,t.minute=e.getMinutes(),t.second=e.getSeconds()}),0==u.length?e.hasRead=!1:e.hasRead=!0,"setup"==t){u.reverse();for(var p=u.length;c<10&&0!=p;p--,c++){var f=u[p-1];n.push(parseFloat(f.value)),e.realdata.push(parseFloat(f.value));var g=new Date(f.date);r.push(g.getDate()+"/"+(g.getMonth()+1)+"/"+g.getFullYear())}}else"1d"==t?h("hour",function(t,e,a,n){a.push(e),n.push(t+"h")}):h("1w"==t||"1m"==t?"day":"month",function(t,e,a,n,r){a.push(e),n.push(t)});e.data=n,e.labels=r;var v=e.realdata.reduce(function(t,e){return t+e}),m=v/e.realdata.length;e.avg=Math.round(10*m)/10,e.min=Math.round(10*Math.min.apply(Math,Object(l["a"])(e.realdatamin)))/10,e.max=Math.round(10*Math.max.apply(Math,Object(l["a"])(e.realdatamax)))/10}).finally(function(){e.axios.get("/getSensorInfo?name="+e.$options.propsData.name).then(function(a){var n=a.data.result,r=new Date(n.register),l=r.getDate()+"/"+(r.getMonth()+1)+"/"+r.getFullYear();n.register=l,e.sensor=n,e.datacol={labels:e.labels,datasets:[{label:"Avarage",backgroundColor:"rgba(0, 0, 0, 1)",borderColor:"rgba(0, 0, 0, 0.3)",data:e.data,fill:!1,stack:"1"},{label:"Maximum",backgroundColor:"rgba(255, 31, 31, 1)",borderColor:"rgba(255, 31, 31, 0.3)",data:e.realdatamax,fill:!1,stack:"1"},{label:"Minimum",backgroundColor:"rgba(31, 87, 255, 1)",borderColor:"rgba(31, 87, 255, 0.3)",data:e.realdatamin,fill:!1,stack:"1"}]},e.redender+=1,e.axios.post("/movelg",{lat:n.y,lng:n.x,host:"192.168.0.155",username:"lg",password:"lq"}).then(function(){}).catch(function(t){}).finally(function(){});var i=Object({VUE_APP_backEnd:"",VUE_APP_ericbe:"http://192.168.0.155:8888",VUE_APP_masterIp:"192.168.0.155",VUE_APP_slaveIp:"192.168.0.141",VUE_APP_key:"lq",VUE_APP_user:"lg",VUE_APP_localip:"http://192.168.0.190:8888",NODE_ENV:"production",BASE_URL:"/"});e.axios.post(i.VUE_APP_backEnd+"/opensite",{serverurl:encodeURI(i.VUE_APP_localip+"/front/"+e.sensor.name+"/lgDetail/"+t),lgurl:i.VUE_APP_slaveIp,lguser:i.VUE_APP_user,lgkey:i.VUE_APP_key}).then(function(){}).catch(function(t){})})})},closeSite:function(){this.axios.post("/closesite",{lgurl:"192.168.0.141",lguser:"lg",lgkey:"lq"}).then(function(){})},closeBallon:function(){this.axios.get("http://192.168.0.155:8888/kml/manage/balloon/"+this.sensor.sensorid+"/0")},openballon:function(){this.axios.get("http://192.168.0.155:8888/kml/manage/balloon/"+this.sensor.sensorid+"/1")}},mounted:function(){this.getReading("1d")},components:{lineChart:u["a"],gmap:c["a"]}},h=d,p=a("2877"),f=a("6544"),g=a.n(f),v=a("8336"),m=(a("934c"),a("58dbb"),a("2b0e"));function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function y(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return m["default"].extend({name:"proxyable",model:{prop:t,event:e},props:b({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:b({},t,function(t){this.internalLazyValue=t})})}var _=y(),E=_,A=a("6a18"),V=a("58df"),w=a("d9bd"),x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},L=Object(V["a"])(E,A["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return x({},this.themeClasses)},selectedItems:function(){var t=this;return this.items.filter(function(e,a){return t.toggleMethod(t.getValue(e,a))})},selectedValues:function(){return Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:function(){this.$nextTick(this.updateItemsState)}},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(w["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t,e){this.updateInternalValue(this.getValue(t,e))},register:function(t){var e=this,a=this.items.push(t)-1;t.$on("change",function(){return e.onClick(t,a)}),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,a)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),a=this.getValue(t,e);this.items.splice(e,1);var n=this.selectedValues.indexOf(a);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(a);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(function(t){return t!==a}):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var a=this.getValue(t,e);t.isActive=this.toggleMethod(a)},updateItemsState:function(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=t?this.items.length-1:0;this.updateInternalValue(this.getValue(this.items[e],e))}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],a=e.slice(),n=a.findIndex(function(e){return e===t});this.mandatory&&n>-1&&a.length-1<1||null!=this.max&&n<0&&a.length+1>this.max||(n>-1?a.splice(n,1):a.push(t),this.internalValue=a)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",{staticClass:"v-item-group",class:this.classes},this.$slots.default)}}),M=(L.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),L.extend({name:"button-group",provide:function(){return{btnToggle:this}},props:{activeClass:{type:String,default:"v-btn--active"}},computed:{classes:function(){return L.options.computed.classes.call(this)}}})),I=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},O=M.extend({name:"v-btn-toggle",props:{activeClass:{type:String,default:"v-btn--active"}},computed:{classes:function(){return I({},M.options.computed.classes.call(this),{"v-btn-toggle":!0,"v-btn-toggle--only-child":1===this.selectedItems.length,"v-btn-toggle--selected":this.selectedItems.length>0})}}}),k=a("a523"),C=a("ce7e6"),N=a("0e8f"),D=a("a722"),R=Object(p["a"])(h,n,r,!1,null,null,null);e["default"]=R.exports;g()(R,{VBtn:v["a"],VBtnToggle:O,VContainer:k["a"],VDivider:C["a"],VFlex:N["a"],VLayout:D["a"]})},"58dbb":function(t,e,a){},"6b40":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{attrs:{id:"map"}})])],1)],1)},r=[],l=(a("c5f6"),a("2ee3")),i=a.n(l);i.a.KEY="AIzaSyCX0EVea8pRdiSdso5s78fahE7VTm0YtaA",i.a.LIBRARIES=["places"];var o={data:function(){return{latLng:"",localizationName:null,markers:[]}},props:{lat:Number,lng:Number,editable:Boolean,setMark:Boolean,img:String},watch:{latLng:function(){}},mounted:function(){var t,e=this;i.a.load(function(a){var n=new a.maps.Map(document.getElementById("map"),{zoom:16,center:{lat:e.$options.propsData.lat,lng:e.$options.propsData.lng}});e.$options.propsData.editable?(n.addListener("click",function(r){null!=t&&t.setMap(null),t=new a.maps.Marker({position:r.latLng,map:n}),e.latLng=r.latLng,e.$store.dispatch("setCoord",r.latLng)}),e.$options.propsData.setMark&&(t=new a.maps.Marker({position:{lat:e.$options.propsData.lat,lng:e.$options.propsData.lng},map:n}))):t=new a.maps.Marker({position:{lat:e.$options.propsData.lat,lng:e.$options.propsData.lng},map:n})})}},s=o,u=(a("bdef"),a("2877")),c=a("6544"),d=a.n(c),h=a("a523"),p=a("0e8f"),f=a("a722"),g=Object(u["a"])(s,n,r,!1,null,null,null);e["a"]=g.exports;d()(g,{VContainer:h["a"],VFlex:p["a"],VLayout:f["a"]})},"6ba5":function(t,e,a){},"934c":function(t,e,a){},bdef:function(t,e,a){"use strict";var n=a("6ba5"),r=a.n(n);r.a}}]);
//# sourceMappingURL=chunk-dc8cfecc.f3b95e04.js.map