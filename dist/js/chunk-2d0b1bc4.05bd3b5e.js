(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b1bc4"],{"20b2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xs":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs5:""}},[a("br"),a("br"),a("v-text-field",{attrs:{label:"Name",placeholder:"Sensor Name",outline:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-textarea",{attrs:{outline:"",name:"input-7-4",label:"Description",placeholder:"Description about the sensor"},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}}),a("v-overflow-btn",{attrs:{items:t.units,label:"Unit",target:"#dropdown-example"},model:{value:t.unit,callback:function(e){t.unit=e},expression:"unit"}}),a("v-btn",{attrs:{flat:"",color:"success"},on:{click:t.edit}},[t._v("Edit")])],1),a("v-flex",{attrs:{"offset-xs1":"",xs6:""}},[a("GridList")],1),a("v-flex",{attrs:{xs12:""}},[t.isFetching?a("gmap",{attrs:{lng:parseFloat(t.lataux),lat:parseFloat(t.lngaux),editable:!0,setMark:!0}}):t._e()],1)],1)],1)},s=[],l=a("bd86"),i=(a("7f7f"),a("1e04")),o=a("6b40"),r=a("2ee3"),c=a.n(r);c.a.KEY="AIzaSyCX0EVea8pRdiSdso5s78fahE7VTm0YtaA",c.a.LIBRARIES=["places"];var u={data:function(){return{units:["Celcius","Farenheit","Kelvin","KM/h"],imagelist:null,name:null,unit:null,desc:null,lataux:null,lngaux:null,oldname:null,isFetching:!1}},methods:{edit:function(){var t,e=this.$store.state,a=this,n=(t={oldname:this.oldname,name:e.user,lat:e.latlng.lat(),lng:e.latlng.lng()},Object(l["a"])(t,"name",a.name),Object(l["a"])(t,"desc",a.desc),Object(l["a"])(t,"unit",a.unit),Object(l["a"])(t,"img",e.selectedimg),t);this.axios.post("https://gsoc-renatofernandes-2019be.herokuapp.com/data/editsensor",n,{withCredentials:!0}).then(function(t){window.location.href="/sensorlist"}).catch(function(t){})}},created:function(){var t=this,e=this;this.axios.get("https://gsoc-renatofernandes-2019be.herokuapp.com/auth/check",{withCredentials:!0}).then(function(a){t.axios.get("https://gsoc-renatofernandes-2019be.herokuapp.com/getSensorInfo?name="+e.$options.propsData.nameOld).then(function(e){var a=e.data.result,n=t;t.unit=a.unit,t.name=a.name,t.oldname=a.name,t.desc=a.description,t.img=a.imgId,t.lataux=a.x,t.lngaux=a.y,c.a.load(function(t){n.$store.state.latlng=new t.maps.LatLng(a.x,a.y)}),setInterval(function(){},1e3),t.isFetching=!0}).catch(function(t){})}).catch(function(t){window.location.href="/front/signin"})},components:{GridList:i["a"],gmap:o["a"]},props:{nameOld:String}},d=u,p=a("2877"),m=a("6544"),f=a.n(m),h=a("8336"),g=a("a523"),x=a("0e8f"),b=a("a722"),v=a("de8e"),w=a("2677"),k=a("a844"),V=Object(p["a"])(d,n,s,!1,null,null,null);e["default"]=V.exports;f()(V,{VBtn:h["a"],VContainer:g["a"],VFlex:x["a"],VLayout:b["a"],VOverflowBtn:v["a"],VTextField:w["a"],VTextarea:k["a"]})}}]);
//# sourceMappingURL=chunk-2d0b1bc4.05bd3b5e.js.map