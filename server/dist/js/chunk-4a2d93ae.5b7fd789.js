(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a2d93ae"],{6795:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-layout",{attrs:{row:"",wrap:"","fill-height":""}},[s("v-flex",{attrs:{xs12:"","v-if":null!=t.sensor}},[s("h1",{staticClass:"font-weight-light display-3"},[t._v("\n      Sensor Name: "+t._s(t.sensor.name)+"\n      "),s("br")]),s("v-divider"),s("br"),s("br"),s("br"),t.hasRead?s("v-flex",{attrs:{xs12:"","text-xs-center":""}},[s("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"text-xs-center font-weight-light display-3 blue--text text-capitalize"},[t._v("MIN")])]),s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"font-weight-light display-3 text-center text-capitalize"},[t._v("AVG")])]),s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"font-weight-light display-3 red--text darken-4 text-center text-capitalize"},[t._v("MAX")])])],1)],1):t._e(),t.hasRead?s("v-flex",{attrs:{xs12:"","text-xs-center":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"font-weight-light display-6 blue--text text-center font-weight-black"},[t._v(t._s(t.min)+" "+t._s(t.sensor.unit))])]),s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"font-weight-light display-6 text-center font-weight-black"},[t._v(t._s(t.avg)+" "+t._s(t.sensor.unit))])]),s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"font-weight-light display-6 red--text darken-4 text-center font-weight-black"},[t._v(t._s(t.max)+" "+t._s(t.sensor.unit))])])],1)],1):s("v-flex",{attrs:{xs12:""}},[s("h3",{staticClass:"font-weight-light display-3"},[t._v("The sensor has no reading for the time")])])],1),s("br"),s("br"),s("v-layout",{attrs:{row:"",wrap:"","fill-height":""}},[s("v-flex",{attrs:{xs10:"","offset-xs1":""}},[s("lineChart",{attrs:{id:"chart","chart-data":t.datacol}}),s("v-spacer")],1),s("v-flex",{attrs:{xs12:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs3:""}},[s("v-img",{attrs:{src:e("f959")}})],1),s("v-flex",{attrs:{xs3:""}},[s("v-img",{attrs:{src:e("8534")}})],1),s("v-flex",{attrs:{xs3:""}},[s("v-img",{attrs:{src:e("c4c8")}})],1),s("v-flex",{attrs:{xs3:""}},[s("v-img",{attrs:{src:e("0975")}})],1)],1)],1)],1)],1)},n=[],r=(e("ac6a"),e("7f7f"),e("4a88")),l={data:function(){return{sensor:null,datacol:{},data:null,labels:null,max:null,min:null,avg:null,hasRead:!1,minlbl:null,maxlbl:null}},props:{name:String,time:String},methods:{getReading:function(t){var a=this,e="/readSensor?name="+this.$options.propsData.name;"setup"!=t&&(e+="&datespan="+t),e=encodeURI(e),this.axios.get(e).then(function(e){var s=[],n=[],r=e.data.result,l=0;if(0==r.length?a.hasRead=!1:a.hasRead=!0,"setup"==t){r.reverse();for(var i=r.length;l<10&&0!=i;i--,l++){var o=r[i-1];s.push(parseFloat(o.value));var h=new Date(o.date);n.push(h.getDate()+"/"+(h.getMonth()+1)+"/"+h.getFullYear())}}else r.forEach(function(t){s.push(parseFloat(t.value));var a=new Date(t.date);n.push(a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear())});a.data=s,a.labels=n,a.min=Math.min.apply(Math,s),a.max=Math.max.apply(Math,s),a.minlbl=n[s.indexOf(Math.min.apply(Math,s))],a.maxlbl=n[s.indexOf(Math.max.apply(Math,s))];var c=s.reduce(function(t,a){return t+a}),x=c/s.length;a.avg=Math.round(100*x)/100}).finally(function(){a.axios.get("/getSensorInfo?name="+a.$options.propsData.name).then(function(t){var e=t.data.result,s=new Date(e.register),n=s.getDate()+"/"+(s.getMonth()+1)+"/"+s.getFullYear();e.register=n,a.sensor=e;var r=Math.round,l=Math.random,i=255,o="rgba("+r(l()*i)+","+r(l()*i)+","+r(l()*i)+","+l().toFixed(1)+")";a.datacol={labels:a.labels,datasets:[{label:a.sensor.unit,backgroundColor:o,data:a.data}]}})})}},mounted:function(){this.getReading(this.$options.propsData.time)},components:{lineChart:r["a"]}},i=l,o=(e("bf69"),e("2877")),h=e("6544"),c=e.n(h),x=e("ce7e"),u=e("0e8f"),f=e("adda"),d=e("a722"),g=e("9910"),v=Object(o["a"])(i,s,n,!1,null,null,null);a["default"]=v.exports;c()(v,{VDivider:x["a"],VFlex:u["a"],VImg:f["a"],VLayout:d["a"],VSpacer:g["a"]})},bf69:function(t,a,e){"use strict";var s=e("dc6a"),n=e.n(s);n.a},dc6a:function(t,a,e){}}]);
//# sourceMappingURL=chunk-4a2d93ae.5b7fd789.js.map