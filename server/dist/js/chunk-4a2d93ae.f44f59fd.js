(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a2d93ae"],{6795:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-layout",{attrs:{row:"",wrap:"","fill-height":""}},[s("v-flex",{attrs:{xs12:"","v-if":null!=t.sensor}},[s("h1",{staticClass:"font-weight-light display-3 text-xs-center"},[t._v("\n      Sensor Name: "+t._s(t.sensor.name)+"\n      "),s("br")]),s("h1",{staticClass:"font-weight-light display-3 text-xs-center"},[t._v("Register: "+t._s(t.sensor.register))]),s("h1",{staticClass:"font-weight-light display-3 text-xs-center"},[t._v("Unit description : "+t._s(t.sensor.unitdesd))]),s("h1",{staticClass:"font-weight-light display-3 text-xs-center"},[t._v("Owner : "+t._s(t.owner))]),s("v-divider"),s("br"),s("br"),s("br"),t.hasRead?s("v-flex",{attrs:{xs12:"","text-xs-center":""}},[s("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"text-xs-center font-weight-light display-3 blue--text font-weight-black"},[t._v("MIN")])]),s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"font-weight-light display-3 text-center font-weight-black"},[t._v("AVG")])]),s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"font-weight-light display-3 red--text darken-4 text-center font-weight-black"},[t._v("MAX")])])],1)],1):t._e(),t.hasRead?s("v-flex",{attrs:{xs12:"","text-xs-center":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"font-weight-light display-4 blue--text"},[t._v("\n            "+t._s(t.min)+"\n            "),s("span",{staticClass:"display-1 blue--text"},[t._v(t._s(t.sensor.unit))])])]),s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"font-weight-light display-4 text-center"},[t._v("\n            "+t._s(t.avg)+"\n            "),s("span",{staticClass:"display-1"},[t._v(t._s(t.sensor.unit))])])]),s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"font-weight-light display-4 red--text darken-4 text-center"},[t._v("\n            "+t._s(t.max)+"\n            "),s("span",{staticClass:"display-1 red--text darken-4"},[t._v(t._s(t.sensor.unit))])])])],1)],1):s("v-flex",{attrs:{xs12:""}},[s("h3",{staticClass:"font-weight-light display-3"},[t._v("The sensor has no reading for the time")])])],1),s("br"),s("br"),s("v-flex",{attrs:{xs10:"","offset-xs1":""}},[s("lineChart",{attrs:{id:"chart","chart-data":t.datacol,fontSize:40}}),s("v-spacer")],1),s("v-flex",{attrs:{xs12:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs3:""}},[s("v-img",{attrs:{src:e("f959")}})],1),s("v-flex",{attrs:{xs3:""}},[s("v-img",{attrs:{src:e("8534")}})],1),s("v-flex",{attrs:{xs3:""}},[s("v-img",{attrs:{src:e("c4c8")}})],1),s("v-flex",{attrs:{xs3:""}},[s("v-img",{attrs:{src:e("0975")}})],1)],1)],1)],1)},n=[],r=e("75fc"),l=e("768b"),i=(e("ffc1"),e("456d"),e("55dd"),e("ac6a"),e("28a5"),e("bd86")),o=e("cebc"),h=(e("7f7f"),e("4a88")),c={data:function(){return{sensor:null,datacol:{},data:null,labels:null,max:null,min:null,avg:null,hasRead:!1,minlbl:null,maxlbl:null,owner:null,realdata:[],realdatamin:[],realdatamax:[],datamin:[],datamax:[]}},props:{name:String,time:String},methods:{getReading:function(t){var a=this;this.realdata=[],this.realdatamin=[],this.realdatamax=[];var e="/readSensor?name="+this.$options.propsData.name;"setup"!=t&&(e+="&datespan="+t),e=encodeURI(e),this.axios.get(e).then(function(e){var s=[],n=[],h=e.data.result,c=0,u=function(t){return function(a){return a.reduce(function(a,e){return Object(o["a"])({},a,Object(i["a"])({},e[t],(a[e[t]]||[]).concat(e)))},{})}},d=function(e,i){for(var o=u(e),c=o(h),d=function(t,a){var e=new Date,s=new Date,n=t.split("/"),r=a.split("/");return e.setDate(n[0]),e.setMonth(n[1]-1),s.setDate(r[0]),s.setMonth(r[1]-1),e-s},f=0,g=Object.entries(c);f<g.length;f++){var p=Object(l["a"])(g[f],2),v=p[0],x=p[1],m=[];x.forEach(function(t){m.push(parseFloat(t.value))});var b=m.reduce(function(t,a){return t+a});b/=x.length,a.realdata.push(b),a.realdatamin.push(Math.min.apply(Math,Object(r["a"])(m))),a.realdatamax.push(Math.max.apply(Math,Object(r["a"])(m)))}if("1d"==t)for(var w=0;w<24;w++)c.hasOwnProperty(w)||(c[w]=[{value:0}]);if("1w"==t){for(var y=0;y<7;y++){var M=new Date;M.setDate(M.getDate()-y),c.hasOwnProperty(M.getDate()+"/"+(M.getMonth()+1))||(c[M.getDate()+"/"+(M.getMonth()+1)]=[{value:0}])}var _=c;c={},Object.keys(_).sort(d).forEach(function(t){c[t]=_[t]})}if("1m"==t){for(var D=0;D<30;D++){M=new Date;M.setDate(M.getDate()-D),c.hasOwnProperty(M.getDate()+"/"+(M.getMonth()+1))||(c[M.getDate()+"/"+(M.getMonth()+1)]=[{value:0}])}_=c;c={},Object.keys(_).sort(d).forEach(function(t){c[t]=_[t]})}if("1y"==t)for(var C=0;C<12;C++)c.hasOwnProperty(C+1)||(c[C+1]=[{value:0}]);for(var O=0,k=Object.entries(c);O<k.length;O++){var j=Object(l["a"])(k[O],2);v=j[0],x=j[1],m=[];x.forEach(function(t){m.push(parseFloat(t.value))});b=m.reduce(function(t,a){return t+a});b/=x.length,i(v,b,s,n,x),a.datamin.push(Math.min.apply(Math,Object(r["a"])(m))),a.datamax.push(Math.max.apply(Math,Object(r["a"])(m)))}};if(h.forEach(function(t){var a=new Date(t.date);t.day=a.getDate()+"/"+(a.getMonth()+1),t.month=a.getMonth()+1,t.year=a.getFullYear(),t.hour=a.getHours()-3,t.minute=a.getMinutes(),t.second=a.getSeconds()}),0==h.length?a.hasRead=!1:a.hasRead=!0,"setup"==t){h.reverse();for(var f=h.length;c<10&&0!=f;f--,c++){var g=h[f-1];s.push(parseFloat(g.value)),a.realdata.push(parseFloat(g.value));var p=new Date(g.date);n.push(p.getDate()+"/"+(p.getMonth()+1)+"/"+p.getFullYear())}}else"1d"==t?d("hour",function(t,a,e,s){e.push(a),s.push(t+"h")}):d("1w"==t||"1m"==t?"day":"month",function(t,a,e,s,n){e.push(a),s.push(t)});a.data=s,a.labels=n;var v=a.realdata.reduce(function(t,a){return t+a}),x=v/a.realdata.length;a.avg=Math.round(10*x)/10,a.min=Math.round(10*Math.min.apply(Math,Object(r["a"])(a.realdatamin)))/10,a.max=Math.round(10*Math.max.apply(Math,Object(r["a"])(a.realdatamax)))/10}).finally(function(){a.axios.get("/getSensorInfo?name="+a.$options.propsData.name).then(function(t){var e=t.data.result,s=new Date(e.register),n=s.getDate()+"/"+(s.getMonth()+1)+"/"+s.getFullYear();e.register=n,a.sensor=e,a.datacol={labels:a.labels,datasets:[{label:"Avarage",backgroundColor:"rgba(0, 0, 0, 1)",borderColor:"rgba(0, 0, 0, 0.3)",data:a.data,fill:!1,stack:"1"},{label:"Maximum",backgroundColor:"rgba(255, 31, 31, 1)",borderColor:"rgba(255, 31, 31, 0.3)",data:a.datamax,fill:!1,stack:"1"},{label:"Minimum",backgroundColor:"rgba(31, 87, 255, 1)",borderColor:"rgba(31, 87, 255, 0.3)",data:a.datamin,fill:!1,stack:"1"}]};var r=a;a.axios.get("/getAllSensors").then(function(t){t.data.result.forEach(function(t){t.sensors.forEach(function(a){a.name==r.sensor.name&&(r.owner=t.name)})})})})})}},mounted:function(){this.getReading(this.$options.propsData.time)},components:{lineChart:h["a"]}},u=c,d=(e("bf69"),e("2877")),f=e("6544"),g=e.n(f),p=e("ce7e6"),v=e("0e8f"),x=e("adda"),m=e("a722"),b=e("9910"),w=Object(d["a"])(u,s,n,!1,null,null,null);a["default"]=w.exports;g()(w,{VDivider:p["a"],VFlex:v["a"],VImg:x["a"],VLayout:m["a"],VSpacer:b["a"]})},bf69:function(t,a,e){"use strict";var s=e("dc6a"),n=e.n(s);n.a},dc6a:function(t,a,e){}}]);
//# sourceMappingURL=chunk-4a2d93ae.f44f59fd.js.map