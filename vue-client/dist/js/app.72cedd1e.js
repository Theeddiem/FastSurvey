(function(t){function e(e){for(var r,s,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01b9":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"App-container"},[n("NavBar"),n("router-view"),n("Footer")],1)},o=[];n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}))},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"199c":function(t,e){},"23be":function(t,e,n){"use strict";var r=n("199c"),o=n.n(r);e["default"]=o.a},"2faf":function(t,e,n){},"3dfd":function(t,e,n){"use strict";var r=n("01b9"),o=n("23be"),a=(n("034f"),n("2877")),s=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},4076:function(t,e,n){t.exports=n.p+"img/copyLinkIcon.1f683b2d.svg"},"52e7":function(t,e,n){"use strict";var r=n("2faf"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("8c4f"),a=n("3dfd"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"surveyCreate-container"},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.question,expression:"question",modifiers:{lazy:!0}}],staticClass:"survey-create-group",attrs:{type:"text",placeholder:"Enter Question"},domProps:{value:t.question},on:{change:function(e){t.question=e.target.value}}}),t._l(t.options,(function(e,r){return n("OptionInput",{key:r,attrs:{index:r},on:{OnSetOption:t.setOption}})})),n("button",{staticClass:"surveyCreate-main-btn-group",on:{click:t.addOption}},[t._v("Add")]),n("button",{staticClass:"surveyCreate-main-btn-group",on:{click:t.submitPoll}},[t._v("Submits")])],2)},i=[],c=(n("4de4"),n("d3b7"),n("96cf"),n("cb29"),n("d81d"),n("0d03"),n("ac1f"),n("25f0"),n("5319"),n("9f12"));function u(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8;return n.toString(16)}))}var l=function t(e,n){Object(c["a"])(this,t),this.id=u(),this.question=e,this.options=new Array(n.length).fill(0).map((function(t){return{counter:0,optionName:"",voterNames:[]}}));for(var r=0;r<n.length;r++)this.options[r].optionName=n[r]},p=n("3d20"),d=n.n(p);function h(t,e){"warning"===e?d.a.fire({title:t,position:"top",customClass:"swal-warning",showConfirmButton:!1,showClass:{popup:"animated fadeInDown faster"},hideClass:{popup:"animated fadeOutUp faster"},timer:1200}):"copylink"===e&&d.a.fire({title:t,position:"top",customClass:"swal-copyclipboard",showConfirmButton:!1,showClass:{popup:"animated fadeInDown faster"},hideClass:{popup:"animated fadeOutUp faster"},timer:1200})}var f="http://localhost:5000/api/surveys",v=f;function m(t){var e,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,regeneratorRuntime.awrap(fetch("".concat(v,"/").concat(t),{headers:{Accept:"application/json","Content-Type":"application/json"}}));case 3:return e=r.sent,r.next=6,regeneratorRuntime.awrap(e.json());case 6:return n=r.sent,r.abrupt("return",n);case 10:r.prev=10,r.t0=r["catch"](0),console.log(r.t0);case 13:case"end":return r.stop()}}),null,null,[[0,10]])}function x(t){var e,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(t),e="".concat(v,"/").concat(t.id),r.prev=2,r.next=5,regeneratorRuntime.awrap(fetch(e,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}));case 5:return n=r.sent,r.abrupt("return",n.status);case 9:throw r.prev=9,r.t0=r["catch"](2),console.error("Error:",r.t0);case 12:case"end":return r.stop()}}),null,null,[[2,9]])}function g(t){var e,n,r;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return e="".concat(v),o.prev=1,o.next=4,regeneratorRuntime.awrap(fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}));case 4:return n=o.sent,o.next=7,regeneratorRuntime.awrap(n.json());case 7:r=o.sent,console.log("Success:",JSON.stringify(r)),o.next=14;break;case 11:throw o.prev=11,o.t0=o["catch"](1),console.error("Error:",o.t0);case 14:case"end":return o.stop()}}),null,null,[[1,11]])}var y={data:function(){return{options:["",""],question:""}},methods:{submitPoll:function(){var t,e;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(t=this.options.filter((function(t){return""!==t})),""!==this.question){n.next=4;break}return d.a.fire({title:text,position:"top",customClass:"swal-warning",showConfirmButton:!1,showClass:{popup:"animated fadeInDown faster"},hideClass:{popup:"animated fadeOutUp faster"},timer:1200}),n.abrupt("return");case 4:if(console.log(t.length),!(t.length<2)){n.next=9;break}h("Enter at least 2 options","warning"),n.next=13;break;case 9:return e=new l(this.question,t),n.next=12,regeneratorRuntime.awrap(g(e));case 12:this.$router.push("/survey/".concat(e.id));case 13:case"end":return n.stop()}}),null,this)},setOption:function(t,e){this.options[e]=t},addOption:function(){this.options.push("")}}},w=y,b=(n("5cef"),n("2877")),O=Object(b["a"])(w,s,i,!1,null,null,null),_=O.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.value,expression:"value",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"Add Option..."},domProps:{value:t.value},on:{change:[function(e){t.value=e.target.value},t.getValue]}})},k=[],S={props:["index"],data:function(){return{value:""}},methods:{getValue:function(){this.$emit("OnSetOption",this.value,this.index)}}},$=S,j=Object(b["a"])($,C,k,!1,null,null,null),I=j.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"surveyPage-container"},[n("h1",{attrs:{id:"surveyPage-survey-question"}},[t._v(t._s(t.question))]),t.reRender?t._l(t.options,(function(e,r){return n("SingleOption",{key:r,attrs:{index:r,currentOption:e,eachVote:t.eachVote}})})):t._e(),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.voterName,expression:"voterName",modifiers:{lazy:!0}}],staticClass:"survey-answer-group",attrs:{id:"input-name",type:"text",placeholder:"Enter name...",autofocus:""},domProps:{value:t.voterName},on:{change:function(e){t.voterName=e.target.value}}}),n("button",{attrs:{id:"add-btn"}},[t._v("Add Option")]),n("button",{attrs:{id:"submit-option"},on:{click:t.vote}},[t._v("Vote")])],2)},R=[],N=(n("4160"),n("159b"),{data:function(){return{reRender:!0,eachVote:0,id:this.$route.params.id,options:null,question:"",voterName:""}},methods:{vote:function(){var t,e=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return t={name:this.voterName,indexs:this.$store.state.voterIndexs,id:this.$route.params.id},console.log("indexs",this.$store.state.voterIndexs),n.next=4,regeneratorRuntime.awrap(x(t));case 4:if(n.t0=n.sent,400!==n.t0){n.next=9;break}h("Alredy Voted For that Option","warning"),n.next=14;break;case 9:return this.$store.state.voterIndexs=[],n.next=12,regeneratorRuntime.awrap(this.loadData());case 12:this.reRender=!1,this.$nextTick((function(){e.reRender=!0}));case 14:case"end":return n.stop()}}),null,this)},loadData:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("t1",this.$store.state.currentSurvey),e.next=3,regeneratorRuntime.awrap(m(this.id));case 3:this.$store.state.currentSurvey=e.sent,console.log("t2",this.$store.state.currentSurvey),this.options=this.$store.state.currentSurvey.options,this.question=this.$store.state.currentSurvey.question,t=0,this.$store.state.currentSurvey.options.forEach((function(e){t+=e.counter})),0!==t&&(this.eachVote=Math.floor(100/t));case 10:case"end":return e.stop()}}),null,this)}},created:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:this.loadData(),console.log("hi");case 2:case"end":return t.stop()}}),null,this)}}),E=N,q=Object(b["a"])(E,P,R,!1,null,null,null),A=q.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("div",{staticClass:"navBar",on:{click:t.goToHomePage}},[t._m(0),t._m(1)])])},V=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("img",{attrs:{id:"homepageImg",src:n("8dcc"),height:"48px"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"active",attrs:{id:"homepage"}},[t._v("Home")])])}],B={methods:{goToHomePage:function(){console.log("homePage")}}},D=B,M=Object(b["a"])(D,T,V,!1,null,null,null),z=M.exports,F=n("2f62");r["a"].use(F["a"]);var L=new F["a"].Store({state:{options:["",""],title:"",currentSurvey:null,voterIndexs:[]},mutations:{},actions:{},modules:{}}),J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"optionSingleDiv"},[n("div",{attrs:{id:"myProgress"}},[t._v(" "+t._s(t.currentOption.optionName)+" "),n("div",{style:t.styleObject,attrs:{"v-if":Math.random()>.5,id:"myBar"}},[t._v(t._s(t.styleObject.width)+" ")])]),n("input",{staticClass:"dynamicCheckBox",attrs:{type:"checkbox"},on:{change:t.onInputChange}})])])},U=[],H=(n("caad"),n("2532"),{props:["currentOption","eachVote","index"],data:function(){return{percentage:0,checked:!1,styleObject:{width:"0%"}}},methods:{onInputChange:function(){var t=this;this.checked=!this.checked,this.checked?this.$store.state.voterIndexs.includes(this.index)||this.$store.state.voterIndexs.push(this.index):this.$store.state.voterIndexs=this.$store.state.voterIndexs.filter((function(e){return e!==t.index}))}},created:function(){var t=function(){n>=e?clearInterval(o):(n++,r.width=n+"%")},e=this.currentOption.counter*this.eachVote;console.log(this.$store.state.currentSurvey);var n=0,r=this.styleObject,o=setInterval(t,10)}}),Q=H,Y=(n("52e7"),Object(b["a"])(Q,J,U,!1,null,null,null)),G=Y.exports,K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-container"},[r("img",{staticClass:"shareIcon",attrs:{id:"whatsApp-share",src:n("a9ed"),height:"35"},on:{click:t.whatsAppLink}}),r("img",{staticClass:"shareIcon",attrs:{id:"copyLink-share",src:n("4076"),height:"30"},on:{click:t.copyLink}})])},W=[],X=(n("99af"),{data:function(){return{}},methods:{whatsAppLink:function(){null==this.$store.state.currentSurvey?window.location.href="https://api.whatsapp.com/send?text=Create Your Free Survey-".concat(window.location.href):window.location.href="https://api.whatsapp.com/send?text=".concat(this.$store.state.currentSurvey.question,"-").concat(window.location.href)},copyLink:function(){var t=document.createElement("textarea");t.value=window.location.href,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),h("link copied","copylink")}},created:function(){}}),Z=X,tt=(n("760c"),Object(b["a"])(Z,K,W,!1,null,null,null)),et=tt.exports,nt=[{path:"",component:_},{path:"/survey/:id",component:A}];r["a"].use(o["a"]);var rt=new o["a"]({routes:nt,mode:"history"});r["a"].config.productionTip=!1,r["a"].component("Footer",et),r["a"].component("NavBar",z),r["a"].component("SurveyCreateForm",_),r["a"].component("OptionInput",I),r["a"].component("SurveyPageForm",A),r["a"].component("SingleOption",G),new r["a"]({router:rt,store:L,render:function(t){return t(a["default"])}}).$mount("#app")},"5cef":function(t,e,n){"use strict";var r=n("a429"),o=n.n(r);o.a},"760c":function(t,e,n){"use strict";var r=n("c3f5"),o=n.n(r);o.a},"85ec":function(t,e,n){},"8dcc":function(t,e,n){t.exports=n.p+"img/iconfinder_poll red_10494.3cff7b1a.png"},a429:function(t,e,n){},a9ed:function(t,e,n){t.exports=n.p+"img/whatsAppIcon.547cd823.svg"},c3f5:function(t,e,n){}});
//# sourceMappingURL=app.72cedd1e.js.map