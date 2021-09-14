webpackJsonp([1],{MAhM:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i=a("woOf"),r=a.n(i);var l={name:"number-input",props:["label","placeholder","unit","step","help","color","value"],data:function(){return{internalValue:null}},computed:{style:function(){return"border: 1px solid "+this.color}},watch:{internalValue:function(){var t;this.$emit("input",""===(t=this.$data.internalValue)?null:t)}},created:function(){this.internalValue=this.value}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[t.label?a("label",{staticClass:"label",attrs:{for:""}},[t._v(t._s(t.label))]):t._e(),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.internalValue,expression:"internalValue",modifiers:{number:!0}}],staticClass:"form-control",style:t.style,attrs:{type:"number",step:t.step,placeholder:t.placeholder},domProps:{value:t.internalValue},on:{input:function(e){e.target.composing||(t.internalValue=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),t._v(" "),t.unit?a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[t._v(t._s(t.unit))])]):t._e()]),t._v(" "),t.help?a("small",{staticClass:"form-text text-muted"},[t._v("\n    "+t._s(t.help)+"\n  ")]):t._e()])},staticRenderFns:[]};var o=a("VU/8")(l,s,!1,function(t){a("yU6G")},"data-v-67e12d0a",null).exports,c=a("WaEV"),u=a.n(c),d=a("cNRp"),p=a.n(d),v=6,f=[{id:"mph",label:"MPH",multiplier:1},{id:"kph",label:"KM/H",multiplier:1.60934}],m=[{label:"1st",color:"#ff6384"},{label:"2nd",color:"#ff9f40"},{label:"3rd",color:"#ffcd56"},{label:"4th",color:"#4bc0c0"},{label:"5th",color:"#36a2eb"},{label:"6th",color:"#9966ff"}],h={tyreWidth:235,tyreProfile:45,rimSize:17,redLine:7500,finalDrive:4.307,tyreDiameter:25.33,unitId:f[0].id,inputMode:0,gears:[{name:"1st",value:3},{name:"2nd",value:2},{name:"3rd",value:1.47},{name:"4th",value:1.11},{name:"5th",value:.857},{name:"6th",value:0}]};u.a.plugins.unregister(p.a);var b={type:"scatter",plugins:[p.a],data:{labels:[],datasets:[{fill:!1,backgroundColor:"white",borderColor:"white",data:[],showLine:!0,lineTension:.4,borderWidth:2,showTooltip:!1,pointRadius:3,datalabels:{align:"bottom",color:"black",backgroundColor:"rgba(255, 255, 255, 0.7)",formatter:function(t,e){return Math.round(t.y)+" RPM"}}}].concat(new Array(v).fill(0).map(function(t,e){return e}).map(function(t){return{label:m[t].label,fill:!1,backgroundColor:m[t].color,borderColor:m[t].color,data:[],showLine:!0,datalabels:{display:!1}}}))},options:{responsive:!0,legend:{display:!1},scales:{xAxes:[{display:!0,scaleLabel:{display:!1,labelString:"RPM"}}],yAxes:[{display:!0,scaleLabel:{display:!1,labelString:"MPH"},ticks:{beginAtZero:!0,steps:10,stepValue:5}}]},hover:{mode:"index",axis:"y",intersect:!1},elements:{point:{radius:0},line:{tension:0,borderWidth:3}},tooltips:{enabled:!0,mode:"index",axis:"y",intersect:!1,titleFontFamily:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',bodyFontFamily:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',custom:function(t){var e=t.title;e&&0!==e.length&&(t.titleFontColor=parseInt(e[0])>=this._data.redLine?"#ff0000":"#ffffff")},callbacks:{title:function(t){return t[0].yLabel+" RPM"},label:function(t,e){var a=e.datasets[t.datasetIndex],n=function(t,e){return t.toFixed(e)}(a.data[t.index].x,2),i=e.datasets.map(function(e){if(!e)return 0;var a=e.data[t.index];return a?parseInt(a.x).toString().length:0}).sort().slice(-1)[0]+2+1;return a.label+": "+n.padStart(i," ")}},filter:function(t){return t.datasetIndex>0}}}};function _(t,e){var a=e.redLine+0,n=Array(a/100+1).fill(0);t.data.redLine=e.redLine,t.data.maxRPM=a;for(var i=e.values.map(function(t){return 0===t?null:n.map(function(e,n){return{x:t*(1-100*n/a),y:a/1-100*n}}).reverse()}),r=e.values.map(function(t,a){var n=e.values[a+1];if(t&&n)return t/n}),l=0;l<i.length;l++){var s=l+1,o=i[l];if(o){var c=r[l];c&&o.push({x:o[o.length-1].x,y:Math.round(e.redLine*c)}),t.data.datasets[s].data=o}else t.data.datasets[s].borderWidth=0}t.data.datasets[0].data=r.map(function(t,a){return{x:e.values[a],y:e.redLine*t}}),t.update()}var y={name:"chart",props:["values","redLine","unit"],data:function(){return{}},mounted:function(){var t=document.getElementById("chart").getContext("2d");this.chart=new u.a(t,b),_(this.chart,this.$props)},watch:{values:function(){_(this.chart,this.$props)}}},C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"container"}},[e("canvas",{attrs:{id:"chart"}})])}]};var g={name:"calculator",data:function(){return r()({},h)},computed:{gearSpeeds:function(){var t,e,a,n=this;return function(t,e,a,n){return t&&e&&a&&n&&n.length===v?n.map(function(n){return n?e/(n*a)*t*60/63360:0}):new Array(v).fill(0)}(function(t){return t*Math.PI}(this.$data.inputMode===this.INPUT_MODES[1].id?(t=this.tyreWidth,e=this.tyreProfile,a=this.rimSize,t*(e/100)/25.4*2+a):this.$data.tyreDiameter),this.redLine,this.finalDrive,this.gears.map(function(t){return t.value})).map(function(t){return t*n.unit.multiplier})},rpmValues:function(){return Array(51).fill(0).map(function(t,e){return 5e3+100*e})},unit:function(){var t=this;return f.filter(function(e){return e.id===t.unitId})[0]}},created:function(){this.UNITS=f,this.GEARS=m,this.INPUT_MODES=[{id:0,title:"Diameter"},{id:1,title:"Calculate Diameter"}]},methods:{},components:{NumberInput:o,Chart:a("VU/8")(y,C,!1,function(t){a("X2/0")},"data-v-61ba9a52",null).exports}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("ul",{staticClass:"nav nav-tabs card-header-tabs"},t._l(t.INPUT_MODES,function(e){return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:t.inputMode===e.id},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.inputMode=e.id}}},[t._v("\n            "+t._s(e.title)+"\n          ")])])}))]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.inputMode===t.INPUT_MODES[0].id,expression:"inputMode === INPUT_MODES[0].id"}],staticClass:"form-row"},[a("div",{staticClass:"col col-sm-6 col-lg-4"},[a("number-input",{attrs:{label:"Tyre Diameter",unit:"Inches"},model:{value:t.tyreDiameter,callback:function(e){t.tyreDiameter=t._n(e)},expression:"tyreDiameter"}})],1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.inputMode===t.INPUT_MODES[1].id,expression:"inputMode === INPUT_MODES[1].id"}],staticClass:"form-row"},[a("div",{staticClass:"col-12 col-sm-4"},[a("number-input",{attrs:{label:"Tyre Width",unit:"mm"},model:{value:t.tyreWidth,callback:function(e){t.tyreWidth=t._n(e)},expression:"tyreWidth"}})],1),t._v(" "),a("div",{staticClass:"col-12 col-sm-4"},[a("number-input",{attrs:{label:"Tyre Profile",unit:"mm"},model:{value:t.tyreProfile,callback:function(e){t.tyreProfile=t._n(e)},expression:"tyreProfile"}})],1),t._v(" "),a("div",{staticClass:"col-12 col-sm-4"},[a("number-input",{attrs:{label:"Rim Size",unit:"Inches"},model:{value:t.rimSize,callback:function(e){t.rimSize=t._n(e)},expression:"rimSize"}})],1)])])]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col col-sm-6 col-lg-4"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Redline")]),t._v(" "),a("div",{staticClass:"input-group"},[a("select",{directives:[{name:"model",rawName:"v-model.number",value:t.redLine,expression:"redLine",modifiers:{number:!0}}],staticClass:"custom-select",attrs:{name:"",id:"red-line"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(e){var a="_value"in e?e._value:e.value;return t._n(a)});t.redLine=e.target.multiple?a:a[0]}}},t._l(t.rpmValues,function(e){return a("option",{domProps:{value:e}},[t._v(t._s(e))])})),t._v(" "),t._m(0)])])])]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col col-sm-6 col-lg-4"},[a("number-input",{attrs:{label:"Final Drive",unit:":1",step:"0.1"},model:{value:t.finalDrive,callback:function(e){t.finalDrive=e},expression:"finalDrive"}})],1)]),t._v(" "),a("div",{staticClass:"form-row"},t._l(t.gears,function(e,n){return a("div",{staticClass:"col-6 col-md-4 col-lg-2"},[a("number-input",{attrs:{label:t.GEARS[n].label,color:t.GEARS[n].color,unit:":1",step:"0.1"},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"gear.value"}})],1)}))])]),t._v(" "),a("div",{staticClass:"card",attrs:{id:"results-container"}},[a("div",{staticClass:"card-header"},[a("ul",{staticClass:"nav nav-pills card-header-pills justify-content-end"},t._l(t.UNITS,function(e){return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:t.unitId===e.id},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.unitId=e.id}}},[t._v("\n            "+t._s(e.label)+"\n          ")])])}))]),t._v(" "),a("div",{staticClass:"card-body"},[a("chart",{attrs:{id:"chart-container",values:t.gearSpeeds,redLine:t.redLine,unit:t.unit}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text"},[this._v("Max RPM")])])}]};var M={name:"app",data:function(){return{title:"Neat Calculator"}},components:{Calculator:a("VU/8")(g,x,!1,function(t){a("MAhM")},"data-v-33b53a9b",null).exports}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("main",[e("h1",[this._v(this._s(this.title))]),this._v(" "),e("calculator")],1),this._v(" "),e("footer",{staticClass:"footer"},[e("p",[this._v("© Neat Gearboxes "+this._s((new Date).getFullYear()))])])])},staticRenderFns:[]};var w=a("VU/8")(M,S,!1,function(t){a("cLNn")},null,null).exports;n.a.config.productionTip=!1,a("X6ck"),new n.a({el:"#app",template:"<App/>",components:{App:w}})},"X2/0":function(t,e){},X6ck:function(t,e){},cLNn:function(t,e){},yU6G:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fe7c95b7aae1218c8976.js.map