(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0293"],{6795:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("h1",{staticClass:"font-weight-light display-3"},[t._v("\n      Sensor Name: "+t._s(t.sensor.name)+"\n      "),s("br")]),s("v-divider"),s("br"),s("br"),s("br"),t.hasRead?s("v-flex",{attrs:{xs12:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"font-weight-light display-3 blue--text "},[t._v("Min")])]),s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"font-weight-light display-3"},[t._v("Average")])]),s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"font-weight-light display-3 red--text darken-4"},[t._v("Max")])])],1)],1):t._e(),t.hasRead?s("v-flex",{attrs:{xs12:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"font-weight-light display-3 blue--text "},[t._v(t._s(t.min))])]),s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"font-weight-light display-3"},[t._v(t._s(t.avg))])]),s("v-flex",{attrs:{xs4:""}},[s("h3",{staticClass:"font-weight-light display-3 red--text darken-4"},[t._v(t._s(t.max))])])],1)],1):s("v-flex",{attrs:{xs12:""}},[s("h3",{staticClass:"font-weight-light display-3"},[t._v("The sensor has no reading for the time")])])],1),s("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[s("v-flex",{attrs:{xs10:"","offset-xs1":""}},[s("lineChart",{attrs:{id:"chart","chart-data":t.datacol}})],1)],1),s("v-flex",{attrs:{xs12:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs3:""}},[s("v-img",{attrs:{src:e("f959")}})],1),s("v-flex",{attrs:{xs3:""}},[s("v-img",{attrs:{src:e("8534")}})],1),s("v-flex",{attrs:{xs3:""}},[s("v-img",{attrs:{src:e("c4c8")}})],1),s("v-flex",{attrs:{xs3:""}},[s("v-img",{attrs:{src:e("0975")}})],1)],1)],1)],1)},r=[],l=(e("ac6a"),e("7f7f"),e("4a88")),n=e("6b40"),i={data:function(){return{sensor:null,datacol:{},data:null,labels:null,max:null,min:null,avg:null,hasRead:!1}},props:{name:String},methods:{getReading:function(t){var a=this,e="/readSensor?name="+this.$options.propsData.name;"setup"!=t&&(e+="&datespan="+t),e=encodeURI(e),this.axios.get(e).then(function(e){var s=[],r=[],l=e.data.result,n=0;if(0==l.length?a.hasRead=!1:a.hasRead=!0,"setup"==t){l.reverse();for(var i=l.length;n<10&&0!=i;i--,n++){var o=l[i-1];s.push(parseFloat(o.value));var h=new Date(o.date);r.push(h.getDate()+"/"+(h.getMonth()+1)+"/"+h.getFullYear())}}else l.forEach(function(t){s.push(parseFloat(t.value));var a=new Date(t.date);r.push(a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear())});a.data=s,a.labels=r,a.min=Math.min.apply(Math,s),a.max=Math.max.apply(Math,s);var d=s.reduce(function(t,a){return t+a}),v=d/s.length;a.avg=v}).finally(function(){a.axios.get("/getSensorInfo?name="+a.$options.propsData.name).then(function(t){var e=t.data.result,s=new Date(e.register),r=s.getDate()+"/"+(s.getMonth()+1)+"/"+s.getFullYear();e.register=r,a.sensor=e;var l=Math.round,n=Math.random,i=255,o="rgba("+l(n()*i)+","+l(n()*i)+","+l(n()*i)+","+n().toFixed(1)+")";a.datacol={labels:a.labels,datasets:[{label:a.sensor.unit,backgroundColor:o,data:a.data}]}})})}},mounted:function(){this.getReading("setup")},components:{lineChart:l["a"],gmap:n["a"]}},o=i,h=e("2877"),d=e("6544"),v=e.n(d),u=e("ce7e"),g=e("0e8f"),f=e("adda"),x=e("a722"),c=Object(h["a"])(o,s,r,!1,null,null,null);a["default"]=c.exports;v()(c,{VDivider:u["a"],VFlex:g["a"],VImg:f["a"],VLayout:x["a"]})}}]);
//# sourceMappingURL=chunk-2d0d0293.6a39bca4.js.map