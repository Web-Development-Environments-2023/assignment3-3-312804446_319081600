(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-11e813ac":"b97b44f4","chunk-18ac1d06":"bec8eeb1","chunk-2d0c19e3":"aae1757d","chunk-2d0da534":"f59acb1c","chunk-2d0e6711":"1066e086","chunk-2d23822a":"29a04ea4","chunk-46d34146":"cb2ee869","chunk-746908e5":"162ab040"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-11e813ac":1,"chunk-18ac1d06":1,"chunk-46d34146":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-11e813ac":"b25b9f0d","chunk-18ac1d06":"b93de174","chunk-2d0c19e3":"31d6cfe0","chunk-2d0da534":"31d6cfe0","chunk-2d0e6711":"31d6cfe0","chunk-2d23822a":"31d6cfe0","chunk-46d34146":"2236b005","chunk-746908e5":"31d6cfe0"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0fea":function(e,t,n){"use strict";var r=n("93bc"),a=n.n(r);a.a},5236:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("4160"),n("d3b7"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:{name:"main"}}},[e._v("Vue Recipes")]),e._v("| "),n("router-link",{attrs:{to:{name:"search"}}},[e._v("Search")]),e._v("| "+e._s(!e.$root.store.username)+" "),e.$root.store.username?n("span",[n("select",{attrs:{name:"format",id:"format"},on:{change:function(t){return e.changeRoute(t)}}},[n("option"),n("option",{attrs:{value:"favorite"}},[e._v("favorite")]),n("option",{attrs:{value:"MyRecipes"}},[e._v("MyRecipes")]),n("option",{attrs:{value:"familyRecipes"}},[e._v("familyRecipes")])]),e._v(" "+e._s(e.$root.store.username)+": "),n("button",{on:{click:e.Logout}},[e._v("Logout")]),e._v("| ")]):n("span",[e._v(" Guest: "),n("router-link",{attrs:{to:{name:"register"}}},[e._v("Register")]),e._v("| "),n("router-link",{attrs:{to:{name:"login"}}},[e._v("Login")]),e._v("| ")],1)],1),n("router-view")],1)},o=[],i={name:"App",methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))},changeRoute:function(e){this.$router.push("/users/"+e.target.value)}}},c=i,u=(n("5c0b"),n("2877")),s=Object(u["a"])(c,a,o,!1,null,null,null),l=s.exports,p=n("a7fe"),d=n.n(p),f=n("bc3a"),h=n.n(f),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v("Main Page")]),n("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{title:"Randome Recipes"}}),e.$root.store.username?e._e():n("router-link",{attrs:{to:"/login",tag:"button"}},[e._v("You need to Login to vue this")]),e._v(" "+e._s(!e.$root.store.username)+" "),n("RecipePreviewList",{class:{RandomRecipes:!0,blur:!e.$root.store.username,center:!0},attrs:{title:"Last Viewed Recipes",disabled:""}})],1)},v=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),n("b-row",e._l(e.recipes,(function(e){return n("b-col",{key:e.id},[n("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},b=[],_=n("2909"),y=(n("96cf"),n("1da1")),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[n("div",{staticClass:"recipe-body"},[e.image_load?n("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}}):e._e()]),n("div",{staticClass:"recipe-footer"},[n("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),n("ul",{staticClass:"recipe-overview"},[n("li",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")]),n("li",[e._v(e._s(e.recipe.aggregateLikes)+" likes")])])])])},w=[],R=(n("a9e3"),{mounted:function(){var e=this;this.axios.get(this.recipe.image).then((function(t){e.image_load=!0}))},data:function(){return{image_load:!1}},props:{recipe:{type:Object,required:!0},id:{type:Number,required:!0},title:{type:String,required:!0},readyInMinutes:{type:Number,required:!0},image:{type:String,required:!0},aggregateLikes:{type:Number,required:!1,default:function(){}}}}),j=R,O=(n("c6ab"),Object(u["a"])(j,k,w,!1,null,"0efe8337",null)),P=O.exports,L={name:"RecipePreviewList",components:{RecipePreview:P},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/recipes/random");case 3:r=t.sent,a=r.data.random_3_recipes,e.recipes=[],(n=e.recipes).push.apply(n,Object(_["a"])(a)),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},$=L,x=(n("8050"),Object(u["a"])($,g,b,!1,null,"62830480",null)),C=x.exports,E={components:{RecipePreviewList:C}},S=E,M=(n("0fea"),Object(u["a"])(S,m,v,!1,null,"54c4e2de",null)),T=M.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Four Oh Four you didn't")]),n("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},A=[],N={},I=Object(u["a"])(N,q,A,!1,null,null,null),F=I.exports,B=[{path:"/",name:"main",component:T},{path:"/Register",name:"register",component:function(){return n.e("chunk-18ac1d06").then(n.bind(null,"eaff"))}},{path:"/Login",name:"login",component:function(){return n.e("chunk-46d34146").then(n.bind(null,"62cc"))}},{path:"/search",name:"search",component:function(){return n.e("chunk-746908e5").then(n.bind(null,"37906"))}},{path:"/recipe/:recipeId",name:"recipe",component:function(){return n.e("chunk-11e813ac").then(n.bind(null,"6619"))}},{path:"*",name:"notFound",component:F},{path:"/About",name:"About",component:function(){return n.e("chunk-2d0c19e3").then(n.bind(null,"478b"))}},{path:"/users/familyRecipes",name:"FamilyRecipes",component:function(){return n.e("chunk-2d0e6711").then(n.bind(null,"9983"))}},{path:"/users/MyRecipes",name:"MyRecipseRecipes",component:function(){return n.e("chunk-2d23822a").then(n.bind(null,"fda7"))}},{path:"/users/favorite",name:"FavoritesPage",component:function(){return n.e("chunk-2d0da534").then(n.bind(null,"6ab5"))}}],D=B,H=n("8c4f"),U=n("1dce"),G=n.n(U),J=(n("f9e3"),n("2dd8"),n("1073")),V=n("cbd0"),K=n("b1fc"),Y=n("7049"),z=n("a7e2"),Q=n("f9bc"),W=n("44d4"),X=n("cca8"),Z=n("51c2"),ee=n("498a");r["default"].use(H["a"]);var te=new H["a"]({routes:D});[J["a"],V["a"],K["a"],Y["a"],z["a"],Q["a"],W["a"],X["a"],Z["a"],ee["a"]].forEach((function(e){return r["default"].use(e)})),r["default"].use(G.a),h.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),h.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),r["default"].use(d.a,h.a),r["default"].config.productionTip=!1;var ne={username:localStorage.username,server_domain:"http://localhost:3000",login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(ne),new r["default"]({router:te,data:function(){return{store:ne}},methods:{toast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:n,solid:!0,appendToast:r,autoHideDelay:3e3})}},render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},8050:function(e,t,n){"use strict";var r=n("b384"),a=n.n(r);a.a},"93bc":function(e,t,n){},"9c0c":function(e,t,n){},b384:function(e,t,n){},c6ab:function(e,t,n){"use strict";var r=n("5236"),a=n.n(r);a.a}});
//# sourceMappingURL=app.1b6c6678.js.map