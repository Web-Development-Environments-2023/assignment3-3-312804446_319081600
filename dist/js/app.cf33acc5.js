(function(e){function t(t){for(var n,a,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0da534":"993b3023","chunk-2d0e6711":"847fd716","chunk-2d23822a":"787af79d","chunk-3149dc77":"b3e986fd","chunk-50aca3b4":"b4132995","chunk-53bde990":"1db7edea","chunk-84014ac8":"b4be2333","chunk-acba138e":"c3664b0b"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-3149dc77":1,"chunk-50aca3b4":1,"chunk-53bde990":1,"chunk-84014ac8":1,"chunk-acba138e":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d0da534":"31d6cfe0","chunk-2d0e6711":"31d6cfe0","chunk-2d23822a":"31d6cfe0","chunk-3149dc77":"ec8ab848","chunk-50aca3b4":"7685a6c6","chunk-53bde990":"4001138d","chunk-84014ac8":"dd64fbad","chunk-acba138e":"7140ef8b"}[e]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],m.parentNode.removeChild(m),r(i)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0545":function(e,t,r){e.exports=r.p+"img/gluten-free.de52456f.png"},1182:function(e,t,r){},"183b":function(e,t,r){e.exports=r.p+"img/vegetarian.d1678bcc.png"},"1aa2":function(e,t,r){},2163:function(e,t,r){},"24c0":function(e,t,r){"use strict";var n=r("fd1c"),a=r.n(n);a.a},"2cd5":function(e,t,r){"use strict";var n=r("fb5f"),a=r.n(n);a.a},"34ba":function(e,t,r){"use strict";var n=r("1182"),a=r.n(n);a.a},"3e91":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-modal",{ref:"my-modal",attrs:{id:"modal-1",title:"Create Recipe","hide-footer":""}},[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.onCreate(t)},reset:function(t){return t.preventDefault(),e.onResetCreate(t)}}},[r("b-form-group",[r("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Enter recipe name",required:""},model:{value:e.form.recipename,callback:function(t){e.$set(e.form,"recipename",t)},expression:"form.recipename"}})],1),r("b-form-group",[r("b-form-input",{attrs:{id:"input-2",type:"number",placeholder:"Enter servings number",required:""},model:{value:e.form.servings,callback:function(t){e.$set(e.form,"servings",t)},expression:"form.servings"}})],1),r("b-form-group",[r("b-form-input",{attrs:{id:"input-3",type:"number",placeholder:"Enter preparation time in minutes ",required:""},model:{value:e.form.readyInMinutes,callback:function(t){e.$set(e.form,"readyInMinutes",t)},expression:"form.readyInMinutes"}})],1),r("b-form-group",[r("b-form-input",{attrs:{id:"input-4",type:"url",placeholder:"Enter the URL image of the recipe ",required:""},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1),r("b-form",[r("b-row",[r("b-col",[r("b-form-group",[r("b-form-input",{staticStyle:{width:"220px"},attrs:{type:"text",required:"",placeholder:"Enter ingredient"},model:{value:e.form2.ingredient,callback:function(t){e.$set(e.form2,"ingredient",t)},expression:"form2.ingredient"}})],1),r("b-form-group",[r("b-form-input",{staticStyle:{width:"220px"},attrs:{type:"number",required:"",placeholder:"Enter amount"},model:{value:e.form2.amount,callback:function(t){e.$set(e.form2,"amount",t)},expression:"form2.amount"}})],1),r("b-form-group",[r("button",{on:{click:e.add_ingredient}},[e._v("ADD")])])],1),r("b-col",[r("p",[r("b",[e._v("ingredients that you added:")]),e._v(" "+e._s(this.display_ingredients)+" ")])])],1)],1),r("b-form-group",[r("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter insrtaction of recipe...",rows:"4",required:""},model:{value:e.form.insrtaction,callback:function(t){e.$set(e.form,"insrtaction",t)},expression:"form.insrtaction"}})],1),r("b-form-checkbox",{attrs:{name:"check-button1",switch:""},model:{value:e.form.checked_gluten,callback:function(t){e.$set(e.form,"checked_gluten",t)},expression:"form.checked_gluten"}},[e._v(" gluten free ")]),r("b-form-checkbox",{attrs:{name:"check-button2",switch:""},model:{value:e.form.checked_vegan,callback:function(t){e.$set(e.form,"checked_vegan",t)},expression:"form.checked_vegan"}},[e._v(" vegan ")]),r("b-form-checkbox",{attrs:{name:"check-button3",switch:""},model:{value:e.form.checked_vegetarian,callback:function(t){e.$set(e.form,"checked_vegetarian",t)},expression:"form.checked_vegetarian"}},[e._v(" vegetarian ")]),r("b-row",[r("b-col",{staticClass:"pb-2",attrs:{lg:"3"}},[r("b-button",{attrs:{type:"submit",pill:"",variant:"success"}},[e._v("Create")])],1),r("b-col",{staticClass:"pb-2",attrs:{lg:"3"}},[r("b-button",{attrs:{type:"reset",pill:"",variant:"danger"}},[e._v("Cancel")])],1)],1)],1)],1)],1)},a=[],o=(r("96cf"),r("1da1")),i={data:function(){return{form:{recipename:"",servings:"",readyInMinutes:"",image:"",checked_gluten:!1,checked_vegetarian:!1,checked_vegan:!1,insrtaction:""},form2:{ingredient:"",amount:""},ingredients:[],display_ingredients:""}},methods:{Create:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log("chack"),t.next=4,e.axios.get(e.$root.store.server_domain+"/users/userid");case 4:return r=t.sent,console.log(r.data),t.next=8,e.axios.post(e.$root.store.server_domain+"/users/CreateRecipe",{user_id:r.data,image:e.form.image,title:e.form.recipename,readyInMinutes:e.form.readyInMinutes,glutenFree:1&e.form.checked_gluten,aggregateLikes:0,instructions:e.form.insrtaction,servings:e.form.servings,vegan:1&e.form.checked_vegan,vegetarian:1&e.form.checked_vegetarian,ingredients:e.ingredients});case 8:return n=t.sent,console.log(n),t.next=12,e.onResetCreate();case 12:e.$refs["my-modal"].hide(),t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 19:case"end":return t.stop()}}),t,null,[[0,15]])})))()},onCreate:function(){this.ingredients.length>0?(this.Create(),this.$root.toast("Create","Recipes created successfully","success")):this.$root.toast("error","there is no ingredients","error")},onResetCreate:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.form={recipename:"",servings:"",readyInMinutes:"",image:"",checked_gluten:!1,checked_vegetarian:!1,checked_vegan:!1,insrtaction:""},e.form2={ingredient:"",amount:""},e.ingredients=[],e.display_ingredients="";case 2:case"end":return t.stop()}}),t)})))()},add_ingredient:function(){if(""!==this.form2.ingredient&&""!==this.form2.amount){var e={name:this.form2.ingredient,amount:this.form2.amount};this.ingredients.push(e),console.log(this.form2.ingredient+":"+this.form2.amount),this.display_ingredients=this.display_ingredients+this.form2.ingredient+":"+this.form2.amount+", ",this.reset_ingredient(),console.log(e)}},reset_ingredient:function(){this.form2={ingredient:"",amount:""}}}},s=i,c=(r("2cd5"),r("2877")),u=Object(c["a"])(s,n,a,!1,null,null,null);t["default"]=u.exports},"56d7":function(e,t,r){"use strict";r.r(t);r("4160"),r("d3b7"),r("159b"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("NavBar"),r("router-view")],1)},o=[],i=r("ade3"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueScrollFixedNavbar",[r("b-navbar",{staticClass:"nav-bar",attrs:{toggleable:"lg"}},[r("router-link",{attrs:{tag:"b-navbar-brand",to:{name:"main"}}},[r("img",{attrs:{src:"https://res.cloudinary.com/dqwbwwfui/image/upload/v1656438855/samples/logo1_kswuhs.png"}})]),r("b-navbar-nav",[r("router-link",{attrs:{tag:"b-nav-item",to:{name:"main"}}},[r("b",[e._v("Home")])])],1),r("b-navbar-nav",[r("router-link",{attrs:{tag:"b-nav-item",to:{name:"search"}}},[r("b",[e._v("Search")])])],1),r("b-navbar-nav",[r("router-link",{attrs:{tag:"b-nav-item",to:"/About"}},[r("b",[e._v("About")])])],1),e.$root.store.username?r("b-navbar-nav",[r("b-navbar-nav",[r("router-link",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{id:"modal-1",tag:"b-nav-item",to:"/users/CreateRecipe"}},[r("b",[e._v("New Recipes")])])],1),r("b-nav-item-dropdown",{staticClass:"bold-option",attrs:{text:"more"}},[r("router-link",{attrs:{tag:"b-dropdown-item",to:"/users/favorites"}},[r("b",[e._v("Favorites")])]),r("router-link",{attrs:{tag:"b-dropdown-item",to:"/users/MyRecipes"}},[r("b",[e._v("My Recupes")])]),r("router-link",{attrs:{tag:"b-dropdown-item",to:"/users/familyRecipes"}},[r("b",[e._v("My Family's Recipes")])])],1)],1):e._e(),r("b-navbar-nav",{staticClass:"ml-auto"},[e.$root.store.username?r("span",[r("b-nav-item",[e._v(" Hello "+e._s(e.$root.store.username)+":"),r("button",{attrs:{id:"button"},on:{click:e.Logout}},[r("b",[e._v("Logout")])])])],1):r("b-nav-item-dropdown",{staticClass:"bold-option",attrs:{right:"",text:"Hello guest"}},[r("router-link",{attrs:{tag:"b-dropdown-item",to:{name:"register"}}},[r("b",[e._v("Register")])]),r("router-link",{attrs:{tag:"b-dropdown-item",to:{name:"login"}}},[r("b",[e._v("Login")])])],1)],1)],1)],1)},c=[],u=(r("3e91"),{name:"NavBar",components:{},data:function(){return{}},methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}}),l=u,d=(r("34ba"),r("2877")),m=Object(d["a"])(l,s,c,!1,null,null,null),p=m.exports,f=Object(i["a"])({name:"App",components:{NavBar:p},methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))},changeRoute:function(e){this.$router.push("/users/"+e.target.value)}}},"components",{NavBar:p}),b=f,h=(r("5c0b"),Object(d["a"])(b,a,o,!1,null,null,null)),g=h.exports,v=r("a7fe"),_=r.n(v),k=r("bc3a"),y=r.n(k),w=r("0f12"),x=r.n(w),R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("br"),r("br"),r("center",[r("h1",{staticClass:"title"},[e._v("Welcome to Tasty Recipes")])]),r("br"),r("br"),r("b-row",[r("b-col",[r("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{route_name:"/recipes/random",title:"Random Recipes"}})],1),r("b-col",[e.$root.store.username?e._e():r("router-link",{attrs:{to:"/login",tag:"button"}},[e._v("You need to Login to vue this")]),r("RecipePreviewList",{staticClass:"LastViewedRecipes",class:{blur:!e.$root.store.username,center:!0},attrs:{route_name:"/users/lastWatched",title:"Last Viewed Recipes"}})],1)],1)],1)},C=[],$=r("99d8"),S={components:{RecipePreviewList:$["a"]}},j=S,E=(r("24c0"),Object(d["a"])(j,R,C,!1,null,"2ded82bc",null)),O=E.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Four Oh Four you didn't")]),r("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},L=[],M={},q=Object(d["a"])(M,P,L,!1,null,null,null),I=q.exports,T=[{path:"/",name:"main",component:O},{path:"/Register",name:"register",component:function(){return r.e("chunk-84014ac8").then(r.bind(null,"eaff"))}},{path:"/Login",name:"login",component:function(){return r.e("chunk-3149dc77").then(r.bind(null,"62cc"))}},{path:"/search",name:"search",component:function(){return r.e("chunk-53bde990").then(r.bind(null,"37906"))}},{path:"/route_name/:route_name/recipe/:recipeId",name:"recipe",component:function(){return r.e("chunk-50aca3b4").then(r.bind(null,"6619"))}},{path:"*",name:"notFound",component:I},{path:"/About",name:"About",component:function(){return r.e("chunk-acba138e").then(r.bind(null,"478b"))}},{path:"/users/familyRecipes",name:"familyRecipes",component:function(){return r.e("chunk-2d0e6711").then(r.bind(null,"9983"))}},{path:"/users/MyRecipes",name:"MyRecipesPage",component:function(){return r.e("chunk-2d23822a").then(r.bind(null,"fda7"))}},{path:"/users/favorites",name:"FavoritesPage",component:function(){return r.e("chunk-2d0da534").then(r.bind(null,"6ab5"))}},{path:"/users/CreateRecipe",name:"create",component:function(){return Promise.resolve().then(r.bind(null,"3e91"))}}],A=T,N=r("8c4f"),F=r("2b27"),D=r.n(F),B=r("1dce"),H=r.n(B),U=(r("f9e3"),r("2dd8"),r("1073")),V=r("cbd0"),G=r("b1fc"),J=r("7049"),W=r("a7e2"),K=r("f9bc"),Y=r("44d4"),z=r("cca8"),Q=r("51c2"),X=r("498a"),Z=r("c015"),ee=r("3d31"),te=r("dbbe"),re=r("a166"),ne=r("e68d");y.a.defaults.withCredentials=!0,n["default"].use(x.a),n["default"].use(N["a"]);var ae=new N["a"]({routes:A});n["default"].use(D.a),[U["a"],V["a"],G["a"],J["a"],W["a"],K["a"],Y["a"],z["a"],Q["a"],X["a"],Z["a"],ee["a"],te["a"],re["a"],ne["a"]].forEach((function(e){return n["default"].use(e)})),n["default"].use(H.a),y.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),y.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),n["default"].use(_.a,y.a),n["default"].config.productionTip=!1;var oe={username:localStorage.username,search_url_:localStorage.search_url_,server_domain:"http://localhost:3000",login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0,localStorage.removeItem("search_url_"),this.search_url_=void 0},last_search:function(e){localStorage.setItem("search_url_",e),this.search_url_=e,console.log("last search")}};console.log(oe),new n["default"]({router:ae,data:function(){return{store:oe}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:n,autoHideDelay:3e3})}},render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"7bea":function(e,t,r){e.exports=r.p+"img/vegan.5458a426.png"},"8e44":function(e,t,r){e.exports=r.p+"img/like.2bba44b4.png"},"99d8":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("br"),r("br"),r("center",[r("h1",{staticClass:"title text-center",staticStyle:{color:"#2f4f4f","font-weight":"bolder"}},[e._v(" "+e._s(e.title)+": "),e._t("default")],2)]),r("center",[r("br"),r("br"),r("br"),r("br"),r("br"),e.no_recipe?r("h1",[e._v("There Are No "+e._s(e.title))]):e._e()]),r("center",e._l(e.recipes,(function(t){return r("b-row",{key:t.id},[r("RecipePreview",{staticClass:"recipePreview",staticStyle:{"margin-left":"150px"},attrs:{recipe:t,title:e.title,route_name:e.route_name}})],1)})),1)],1)},a=[],o=r("2909"),i=(r("96cf"),r("1da1")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("center",[n("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id,route_name:e.route_name}}}},[n("div",{staticClass:"recipe-body"},[n("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"800px",width:"800px",margin:"10px"},attrs:{"no-body":""}},[n("b-row",{attrs:{"no-gutters":""}},[n("b-col",{attrs:{md:"6"}},[n("b-card-img",{staticClass:"rounded-0",attrs:{src:e.recipe.image,alt:"Image"}})],1),n("b-col",{staticClass:"recipePreviewDetails",attrs:{md:"6"}},[n("b-card-text",{staticClass:"recipePreviewDetailsText"},[n("b-card-body",{attrs:{title:e.recipe.title}},[n("b-list-group",[n("dt",[e._v(e._s(e.recipe.readyInMinutes)+" minutes to prepare")]),n("dt",[e._v(e._s(e.recipe.servings)+" servings")]),n("dt",[e._v(e._s(e.recipe.aggregateLikes)+" "),n("img",{staticStyle:{width:"25px"},attrs:{src:r("8e44")}}),e._v(" this recipe")]),e.recipe.vegan?n("dt",[n("img",{staticStyle:{width:"30px"},attrs:{src:r("7bea")}}),e._v(" Vegan")]):e._e(),e.recipe.vegetarian?n("dt",[n("img",{staticStyle:{width:"30px"},attrs:{src:r("183b")}}),e._v(" Vegeterian")]):e._e(),e.recipe.glutenFree?n("dt",[n("img",{staticStyle:{width:"25px"},attrs:{src:r("0545")}}),e._v(" Gluten Free")]):e._e()])],1)],1)],1)],1)],1)],1)])],1)},c=[],u={data:function(){return{}},props:{recipe:{type:Object,required:!0},title:{type:String,required:!0},route_name:{type:String,required:!0}}},l=u,d=(r("dac1"),r("2877")),m=Object(d["a"])(l,s,c,!1,null,"031e68db",null),p=m.exports,f={name:"RecipePreviewList",components:{RecipePreview:p},props:{title:{type:String,required:!0},route_name:{type:String,required:!0}},data:function(){return{recipes:[],no_recipe:!1}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+e.route_name);case 3:n=t.sent,0===n.data.length&&(e.no_recipe=!0),a=n.data,e.recipes=[],(r=e.recipes).push.apply(r,Object(o["a"])(a)),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},b=f,h=(r("a476"),Object(d["a"])(b,n,a,!1,null,"0b04be74",null));t["a"]=h.exports},"9c0c":function(e,t,r){},a476:function(e,t,r){"use strict";var n=r("2163"),a=r.n(n);a.a},dac1:function(e,t,r){"use strict";var n=r("1aa2"),a=r.n(n);a.a},fb5f:function(e,t,r){},fd1c:function(e,t,r){}});
//# sourceMappingURL=app.cf33acc5.js.map