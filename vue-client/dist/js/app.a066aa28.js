(function(t){function e(e){for(var o,s,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"0f77":function(t,e,n){"use strict";var o=n("a92e"),r=n.n(o);r.a},"199c":function(t,e){},"23be":function(t,e,n){"use strict";var o=n("199c"),r=n.n(o);e["default"]=r.a},"2faf":function(t,e,n){},"3dfd":function(t,e,n){"use strict";var o=n("bb44"),r=n("23be"),a=(n("034f"),n("2877")),s=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},4076:function(t,e,n){t.exports=n.p+"img/copyLinkIcon.1f683b2d.svg"},4503:function(t,e,n){t.exports=n.p+"img/peopleIcon.060425ca.svg"},"52e7":function(t,e,n){"use strict";var o=n("2faf"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=n("8c4f"),a=n("3dfd"),s=n("2f62");o["a"].use(s["a"]);var i=new s["a"].Store({state:{options:["",""],title:"",currentSurvey:null,voterIndexs:[]},mutations:{},actions:{},modules:{}}),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"surveyCreate-container"},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.question,expression:"question",modifiers:{lazy:!0}}],staticClass:"input-group",attrs:{type:"text",placeholder:"Enter Question"},domProps:{value:t.question},on:{change:function(e){t.question=e.target.value}}}),t._l(t.options,(function(e,o){return n("OptionInput",{key:o,staticClass:"input-group",attrs:{index:o},on:{OnSetOption:t.setOption}})})),n("button",{staticClass:"button-group",on:{click:t.addOption}},[t._v("Add")]),n("button",{staticClass:"button-group",on:{click:t.submitPoll}},[t._v("Submit")])],2)},u=[],l=(n("4de4"),n("d3b7"),n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal-fade"}},[n("div",{staticClass:"modal-backdrop"},[n("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[n("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[t._t("header",[t._v(" This is the default tile! "),n("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close modal"},on:{click:t.close}},[t._v(" x ")])])],2),n("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[t._t("body",[t._v(" I'm the default body! ")])],2),n("footer",{staticClass:"modal-footer"},[t._t("footer",[t._v(" I'm the default footer! "),n("button",{staticClass:"btn-green",attrs:{type:"button","aria-label":"Close modal"},on:{click:t.close}},[t._v(" Close me! ")])])],2)])])])}),p=[],d={name:"modal",methods:{close:function(){this.$emit("close")}}},h=d,f=(n("0f77"),n("2877")),v=Object(f["a"])(h,l,p,!1,null,null,null),m=v.exports,g=(n("cb29"),n("d81d"),n("0d03"),n("ac1f"),n("25f0"),n("5319"),n("9f12"));function x(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,n="x"==t?e:3&e|8;return n.toString(16)}))}var y=function t(e,n){Object(g["a"])(this,t),this.id=x(),this.question=e,this.options=new Array(n.length).fill(0).map((function(t){return{counter:0,optionName:"",voterNames:[]}}));for(var o=0;o<n.length;o++)this.options[o].optionName=n[o]},b=n("3d20"),w=n.n(b);function _(t,e){"warning"===e?w.a.fire({title:t,position:"top",customClass:"swal-warning",showConfirmButton:!1,showClass:{popup:"animated fadeInDown faster"},hideClass:{popup:"animated fadeOutUp faster"},timer:1200}):"copylink"===e&&w.a.fire({title:t,position:"top",customClass:"swal-copyclipboard",showConfirmButton:!1,showClass:{popup:"animated fadeInDown faster"},hideClass:{popup:"animated fadeOutUp faster"},timer:1200})}var O="/api/surveys";function C(t){var e,n;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,regeneratorRuntime.awrap(fetch("".concat(O,"/").concat(t),{headers:{Accept:"application/json","Content-Type":"application/json"}}));case 3:return e=o.sent,o.next=6,regeneratorRuntime.awrap(e.json());case 6:return n=o.sent,o.abrupt("return",n);case 10:o.prev=10,o.t0=o["catch"](0),console.log(o.t0);case 13:case"end":return o.stop()}}),null,null,[[0,10]])}function k(t){var e,n;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return console.log(t),e="".concat(O,"/").concat(t.id),o.prev=2,o.next=5,regeneratorRuntime.awrap(fetch(e,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}));case 5:return n=o.sent,o.abrupt("return",n.status);case 9:throw o.prev=9,o.t0=o["catch"](2),console.error("Error:",o.t0);case 12:case"end":return o.stop()}}),null,null,[[2,9]])}function $(t){var e,n,o;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return e="".concat(O),r.prev=1,r.next=4,regeneratorRuntime.awrap(fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}));case 4:return n=r.sent,r.next=7,regeneratorRuntime.awrap(n.json());case 7:o=r.sent,console.log("Success:",JSON.stringify(o)),r.next=14;break;case 11:throw r.prev=11,r.t0=r["catch"](1),console.error("Error:",r.t0);case 14:case"end":return r.stop()}}),null,null,[[1,11]])}var j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.value,expression:"value",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"Add Option..."},domProps:{value:t.value},on:{change:[function(e){t.value=e.target.value},t.getValue]}})},S=[],I={props:["index"],data:function(){return{value:""}},methods:{getValue:function(){this.$emit("OnSetOption",this.value,this.index)}}},N=I,P=Object(f["a"])(N,j,S,!1,null,null,null),R=P.exports,E={components:{OptionInput:R,modal:m},data:function(){return{options:["",""],question:"",isModalVisible:!1}},methods:{showModal:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},submitPoll:function(){var t,e;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(t=this.options.filter((function(t){return""!==t})),""!==this.question){n.next=4;break}return _("Enter question first","warning"),n.abrupt("return");case 4:if(console.log(t.length),!(t.length<2)){n.next=9;break}_("Enter at least 2 options","warning"),n.next=13;break;case 9:return e=new y(this.question,t),n.next=12,regeneratorRuntime.awrap($(e));case 12:this.$router.push("/survey/".concat(e.id));case 13:case"end":return n.stop()}}),null,this)},setOption:function(t,e){this.options[e]=t},addOption:function(){this.options.push("")}}},q=E,A=Object(f["a"])(q,c,u,!1,null,null,null),T=A.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"surveyPage-container"},[n("h1",{attrs:{id:"surveyPage-survey-question"}},[t._v(t._s(t.question))]),t.reRender?t._l(t.options,(function(e,o){return n("SingleOption",{key:o,attrs:{index:o,currentOption:e,eachVote:t.eachVote}})})):t._e(),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.voterName,expression:"voterName",modifiers:{lazy:!0}}],staticClass:"input-group",attrs:{type:"text",placeholder:"Enter name...",autofocus:""},domProps:{value:t.voterName},on:{change:function(e){t.voterName=e.target.value}}}),n("button",{staticClass:"button-group"},[t._v("Add Option")]),n("button",{staticClass:"button-group",attrs:{id:"submit-option"},on:{click:t.vote}},[t._v("Vote")])],2)},V=[],D=(n("4160"),n("159b"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("modals-container"),o("div",{staticClass:"optionSingleDiv"},[o("img",{staticClass:"votersInfo",attrs:{src:n("4503"),height:"20"},on:{click:t.votersName}}),o("div",{attrs:{id:"myProgress"}},[t._v(" "+t._s(t.currentOption.optionName)+" "),o("div",{style:t.styleObject,attrs:{"v-if":Math.random()>.5,id:"myBar"}},[t._v(t._s(t.styleObject.width)+" ")])]),o("input",{staticClass:"dynamicCheckBox",attrs:{type:"checkbox"},on:{change:t.onInputChange}})])],1)}),B=[],z=(n("caad"),n("2532"),{props:["currentOption","eachVote","index"],data:function(){return{styleObject:{width:"0%"},result:"",percentage:0,checked:!1}},methods:{votersName:function(){var t=this.currentOption.voterNames;if(1===t.length)this.result=t[0];else for(var e=0;e<t.length;e++){var n=t[e];e===t.length-1?this.result+=n+" ":this.result+=n+", "}this.$modal.show("voterNames")},onInputChange:function(){var t=this;this.checked=!this.checked,this.checked?this.$store.state.voterIndexs.includes(this.index)||this.$store.state.voterIndexs.push(this.index):this.$store.state.voterIndexs=this.$store.state.voterIndexs.filter((function(e){return e!==t.index}))}},created:function(){var t=function(){n>=e?clearInterval(r):(n++,o.width=n+"%")},e=this.currentOption.counter*this.eachVote;console.log(this.$store.state.currentSurvey);var n=0,o=this.styleObject,r=setInterval(t,10)}}),L=z,J=(n("52e7"),Object(f["a"])(L,D,B,!1,null,null,null)),F=J.exports,H={components:{SingleOption:F},data:function(){return{reRender:!0,eachVote:0,id:this.$route.params.id,options:null,question:"",voterName:""}},methods:{vote:function(){var t,e=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return t={name:this.voterName,indexs:this.$store.state.voterIndexs,id:this.$route.params.id},console.log("indexs",this.$store.state.voterIndexs),n.next=4,regeneratorRuntime.awrap(k(t));case 4:if(n.t0=n.sent,400!==n.t0){n.next=9;break}_("Alredy Voted For that Option","warning"),n.next=14;break;case 9:return this.$store.state.voterIndexs=[],n.next=12,regeneratorRuntime.awrap(this.loadData());case 12:this.reRender=!1,this.$nextTick((function(){e.reRender=!0}));case 14:case"end":return n.stop()}}),null,this)},loadData:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("t1",this.$store.state.currentSurvey),e.next=3,regeneratorRuntime.awrap(C(this.id));case 3:this.$store.state.currentSurvey=e.sent,console.log("t2",this.$store.state.currentSurvey),this.options=this.$store.state.currentSurvey.options,this.question=this.$store.state.currentSurvey.question,t=0,this.$store.state.currentSurvey.options.forEach((function(e){t+=e.counter})),0!==t&&(this.eachVote=Math.floor(100/t));case 10:case"end":return e.stop()}}),null,this)}},created:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:this.loadData(),console.log("hi");case 2:case"end":return t.stop()}}),null,this)}},U=H,Q=Object(f["a"])(U,M,V,!1,null,null,null),Y=Q.exports,G=[{path:"",component:T},{path:"/survey/:id",component:Y}],K=(n("1881"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("div",{staticClass:"navBar",on:{click:t.goToHomePage}},[t._m(0),t._m(1)])])}),W=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("img",{attrs:{id:"homepageImg",src:n("8dcc"),height:"48px"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"active",attrs:{id:"homepage"}},[t._v("Home")])])}],X={methods:{goToHomePage:function(){console.log("homePage")}}},Z=X,tt=Object(f["a"])(Z,K,W,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer-container"},[o("img",{staticClass:"shareIcon",attrs:{id:"whatsApp-share",src:n("a9ed"),height:"35"},on:{click:t.whatsAppLink}}),o("img",{staticClass:"shareIcon",attrs:{id:"copyLink-share",src:n("4076"),height:"30"},on:{click:t.copyLink}})])},ot=[],rt=(n("99af"),{data:function(){return{}},methods:{whatsAppLink:function(){null==this.$store.state.currentSurvey?window.location.href="https://api.whatsapp.com/send?text=Create Your Free Survey-".concat(window.location.href):window.location.href="https://api.whatsapp.com/send?text=".concat(this.$store.state.currentSurvey.question,"-").concat(window.location.href)},copyLink:function(){var t=document.createElement("textarea");t.value=window.location.href,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),_("link copied","copylink")}},created:function(){}}),at=rt,st=(n("760c"),Object(f["a"])(at,nt,ot,!1,null,null,null)),it=st.exports;o["a"].component("NavBar",et),o["a"].component("Footer",it),o["a"].component("ModalDirection",m),o["a"].use(r["a"]);var ct=new r["a"]({routes:G,mode:"history"});o["a"].config.productionTip=!1,new o["a"]({router:ct,store:i,render:function(t){return t(a["default"])}}).$mount("#app")},"760c":function(t,e,n){"use strict";var o=n("c3f5"),r=n.n(o);r.a},"85ec":function(t,e,n){},"8dcc":function(t,e,n){t.exports=n.p+"img/iconfinder_poll red_10494.3cff7b1a.png"},a92e:function(t,e,n){},a9ed:function(t,e,n){t.exports=n.p+"img/whatsAppIcon.547cd823.svg"},bb44:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"App-container"},[n("NavBar"),n("router-view"),n("Footer")],1)},r=[];n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}))},c3f5:function(t,e,n){}});
//# sourceMappingURL=app.a066aa28.js.map