(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-690a8aa0"],{1276:function(e,t,r){"use strict";var n=r("d784"),i=r("44e7"),a=r("825a"),s=r("1d80"),c=r("4840"),o=r("8aa5"),u=r("50c4"),l=r("14c3"),d=r("9263"),p=r("d039"),f=[].push,v=Math.min,g=4294967295,h=!p((function(){return!RegExp(g,"y")}));n("split",2,(function(e,t,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var n=String(s(this)),a=void 0===r?g:r>>>0;if(0===a)return[];if(void 0===e)return[n];if(!i(e))return t.call(n,e,a);var c,o,u,l=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,h=new RegExp(e.source,p+"g");while(c=d.call(h,n)){if(o=h.lastIndex,o>v&&(l.push(n.slice(v,c.index)),c.length>1&&c.index<n.length&&f.apply(l,c.slice(1)),u=c[0].length,v=o,l.length>=a))break;h.lastIndex===c.index&&h.lastIndex++}return v===n.length?!u&&h.test("")||l.push(""):l.push(n.slice(v)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var i=s(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,i,r):n.call(String(i),t,r)},function(e,i){var s=r(n,e,this,i,n!==t);if(s.done)return s.value;var d=a(e),p=String(this),f=c(d,RegExp),x=d.unicode,_=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(h?"y":"g"),b=new f(h?d:"^(?:"+d.source+")",_),m=void 0===i?g:i>>>0;if(0===m)return[];if(0===p.length)return null===l(b,p)?[p]:[];var y=0,w=0,E=[];while(w<p.length){b.lastIndex=h?w:0;var R,I=l(b,h?p:p.slice(w));if(null===I||(R=v(u(b.lastIndex+(h?0:w)),p.length))===y)w=o(p,w,x);else{if(E.push(p.slice(y,w)),E.length===m)return E;for(var S=1;S<=I.length-1;S++)if(E.push(I[S]),E.length===m)return E;w=y=R}}return E.push(p.slice(y)),E}]}),!h)},"14c3":function(e,t,r){var n=r("c6b6"),i=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var a=r.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"44e7":function(e,t,r){var n=r("861d"),i=r("c6b6"),a=r("b622"),s=a("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==i(e))}},6619:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("center",[n("br"),n("br"),n("div",{staticClass:"recipe-footer"},[n("div",{staticClass:"recipe-title",staticStyle:{"text-decoration-line":"underline"},attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),n("br"),n("div",{staticClass:"recipe-body",attrs:{pill:""}},[n("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}})]),n("br"),n("ul",{staticClass:"recipe-overview"},[n("b-list-group",[n("dt",[e._v(e._s(e.recipe.readyInMinutes)+" minutes to prepare")]),n("dt",[e._v(e._s(e.recipe.servings)+" servings")]),n("dt",[e._v(e._s(e.recipe.aggregateLikes)+" "),n("img",{staticStyle:{width:"30px"},attrs:{src:r("8e44")}}),e._v(" this recipe")]),e.recipe.vegan?n("dt",[n("img",{staticStyle:{width:"30px"},attrs:{src:r("7bea")}}),e._v(" Vegan")]):e._e(),e.recipe.vegetarian?n("dt",[n("img",{staticStyle:{width:"30px"},attrs:{src:r("183b")}}),e._v(" Vegeterian")]):e._e(),e.recipe.glutenFree?n("dt",[n("img",{staticStyle:{width:"30px"},attrs:{src:r("0545")}}),e._v(" Gluten Free")]):e._e(),e.recipe.is_favorite?n("dt",[n("img",{staticStyle:{width:"30px"},attrs:{src:r("6c8d")}}),e._v(" Favorite Recipe")]):e._e(),e.recipe.is_watched?n("dt",[n("img",{staticStyle:{width:"25px"},attrs:{src:r("f0c8")}}),e._v(" Viewed Recipe")]):e._e(),n("br"),n("center",[e.API_route?n("b-button",{staticClass:"btn-warning w-15 h-20",attrs:{id:"favoritesButton",size:"sm"},on:{click:e.AddToFavorites}},[e._v(" add to favorites")]):e._e()],1)],1),n("br"),n("h3",{attrs:{id:"IngredientsTitle"}},[e._v("Ingredients")]),e._v(" "),n("br"),n("center",e._l(e.recipe.extendedIngredients,(function(t){return n("div",{key:t.name},[e._v(" "+e._s(t.amount)+" "+e._s(t.name)+" ")])})),0),n("br"),n("div",{attrs:{id:"instructions"}},[n("h3",{attrs:{id:"InstructionsTitle"}},[e._v("Instructions")]),e._v(" "),n("br"),e._v(" "+e._s(e.instructions))])],1)])])},i=[],a=(r("ac1f"),r("1276"),r("a4d3"),r("e01a"),r("d28b"),r("277d"),r("e260"),r("d3b7"),r("3ca3"),r("ddb0"),r("06c5"));function s(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=Object(a["a"])(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,c=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){o=!0,s=e},f:function(){try{c||null==r["return"]||r["return"]()}finally{if(o)throw s}}}}r("96cf");var c=r("1da1"),o={name:"Recipeview",data:function(){return{recipe:{},instructions:"",recipe_id:"",API_route:!1}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n,i,a,c,o,u,l,d,p,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,r=e.$route.path.split("/")[2].split("%2F")[2],n=e.$route.path.split("/")[4],"lastWatched"!=r&&"random"!=r&&"favorites"!=r&&"search"!=r){t.next=19;break}return e.API_route=!0,t.next=7,e.axios.get(e.$root.store.server_domain+"/recipes/FullRecipeDetailsAPI/"+n);case 7:i=t.sent,a=i.data.instructions,c=s(a);try{for(c.s();!(o=c.n()).done;){u=o.value,l=s(u.steps);try{for(l.s();!(d=l.n()).done;)p=d.value,e.instructions=e.instructions+p.step}catch(v){l.e(v)}finally{l.f()}}}catch(v){c.e(v)}finally{c.f()}if(e.recipe=i.data,e.recipe_id=i.data.id,!e.$root.store.username){t.next=17;break}return t.next=16,e.axios.post(e.$root.store.server_domain+"/users/lastWatched/",{recipe_id:e.recipe_id});case 16:t.sent;case 17:t.next=25;break;case 19:return t.next=21,e.axios.get(e.$root.store.server_domain+"/users/FullRecipeDetailsDB/"+n);case 21:f=t.sent,e.recipe=f.data[0],e.instructions=f.data[0].instructions,e.recipe_id=f.data[0].id;case 25:t.next=30;break;case 27:t.prev=27,t.t0=t["catch"](0),console.log(t.t0);case 30:case"end":return t.stop()}}),t,null,[[0,27]])})))()},AddToFavorites:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.post(e.$root.store.server_domain+"/users/favorites",{recipe_id:e.recipe_id});case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()}}},u=o,l=(r("8dd2"),r("2877")),d=Object(l["a"])(u,n,i,!1,null,"3dcfa256",null);t["default"]=d.exports},"6c8d":function(e,t,r){e.exports=r.p+"img/star.45dd5470.png"},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"8dd2":function(e,t,r){"use strict";var n=r("a1ad"),i=r.n(n);i.a},9263:function(e,t,r){"use strict";var n=r("ad6d"),i=r("9f7f"),a=RegExp.prototype.exec,s=String.prototype.replace,c=a,o=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=o||l||u;d&&(c=function(e){var t,r,i,c,d=this,p=u&&d.sticky,f=n.call(d),v=d.source,g=0,h=e;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),h=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,g++),r=new RegExp("^(?:"+v+")",f)),l&&(r=new RegExp("^"+v+"$(?!\\s)",f)),o&&(t=d.lastIndex),i=a.call(p?r:d,h),p?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:o&&i&&(d.lastIndex=d.global?i.index+i[0].length:t),l&&i&&i.length>1&&s.call(i[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),e.exports=c},"9f7f":function(e,t,r){"use strict";var n=r("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a1ad:function(e,t,r){},ac1f:function(e,t,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),i=r("d039"),a=r("b622"),s=r("9263"),c=r("9112"),o=a("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,d){var v=a(e),g=!i((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),h=g&&!i((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return t=!0,null},r[v](""),!t}));if(!g||!h||"replace"===e&&(!u||!l||p)||"split"===e&&!f){var x=/./[v],_=r(v,""[e],(function(e,t,r,n,i){return t.exec===s?g&&!i?{done:!0,value:x.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=_[0],m=_[1];n(String.prototype,e,b),n(RegExp.prototype,v,2==t?function(e,t){return m.call(e,this,t)}:function(e){return m.call(e,this)})}d&&c(RegExp.prototype[v],"sham",!0)}},f0c8:function(e,t,r){e.exports=r.p+"img/check.f0978157.png"}}]);
//# sourceMappingURL=chunk-690a8aa0.b4df1508.js.map