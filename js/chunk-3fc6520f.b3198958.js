(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fc6520f"],{"0d10":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"title"},[t._v(" "+t._s(t._f("toUpperCase")(t.title))+" "),r("span",{staticClass:"title__subtitile"},[t._v(t._s(t.subtitle))])])},i=[],a=(r("ac1f"),r("5319"),{filters:{toUpperCase:function(t){return t?t.replace(/_/g," ").toUpperCase():""}},props:{title:{type:String,required:!0},subtitle:{type:String,required:!0}}}),o=a,c=(r("55e1"),r("2877")),s=Object(c["a"])(o,n,i,!1,null,"0c71fae4",null);e["a"]=s.exports},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),a=r("17c2"),o=r("9112");for(var c in i){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==a)try{o(u,"forEach",a)}catch(f){u.forEach=a}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),a=r("ae40"),o=i("forEach"),c=a("forEach");t.exports=o&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},2532:function(t,e,r){"use strict";var n=r("23e7"),i=r("5a34"),a=r("1d80"),o=r("ab13");n({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~String(a(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"26bd":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagination"},[r("button",{staticClass:"pagination__button",on:{click:function(e){return t.$emit("load-more")}}},[t._v(" LOAD MORE ")])])},i=[],a=(r("d69b"),r("2877")),o={},c=Object(a["a"])(o,n,i,!1,null,"2426af7e",null);e["a"]=c.exports},2817:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main"},[r("MoviesListTitle",{staticClass:"main__title",attrs:{title:t.genre,subtitle:"movies"}}),r("MoviesList",t._l(t.genreDataMovies,(function(t){return r("MoviesListItem",{key:t.id,attrs:{movie:t}})})),1),r("MoviesListPagination",{staticClass:"main__pagination",class:{main__pagination_hidden:t.hidePagination||!t.genreData.results},on:{"load-more":t.loadMoreMovies}})],1)},i=[],a=(r("7db0"),r("caad"),r("b0c0"),r("ac1f"),r("2532"),r("5319"),r("96cf"),r("1da1")),o=r("5530"),c=r("0d10"),s=r("f0e3"),u=r("ae01"),f=r("26bd"),l=r("2f62"),d={components:{MoviesListTitle:c["a"],MoviesList:s["a"],MoviesListItem:u["a"],MoviesListPagination:f["a"]},props:{genre:{type:String,required:!0}},data:function(){return{hidePagination:!1}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(l["e"])({genreData:function(t){return t.genres.genreData},genreDataMovies:function(t){return t.genres.genreDataMovies},genresList:function(t){return t.genres.genresList}})),Object(l["c"])(["genresListNames"])),{},{genreId:function(){var t=this;return this.genresList.find((function(e){return e.name.toLowerCase()===t.$route.params.genre.replace(/_/g," ").toLowerCase()})).id}}),mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.genresListNames.length){e.next=3;break}return e.next=3,t.fetchGenresList();case 3:if(t.genresListNames.includes(t.$route.params.genre)){e.next=7;break}t.$router.push("/"),e.next=10;break;case 7:return e.next=9,t.fetchGenreData([t.genreId]);case 9:t.genreData.page>=t.genreData.total_pages&&(t.hidePagination=!0);case 10:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){this.clearGenreData()},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(l["d"])(["clearGenreData"])),Object(l["b"])(["fetchGenreData","fetchGenresList"])),{},{loadMoreMovies:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchGenreData([t.genreId,t.genreData.page+1]);case 2:t.genreData.page>=t.genreData.total_pages&&(t.hidePagination=!0);case 3:case"end":return e.stop()}}),e)})))()}})},p=d,g=(r("d317"),r("2877")),b=Object(g["a"])(p,n,i,!1,null,"35aa215a",null);e["default"]=b.exports},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"44e7":function(t,e,r){var n=r("861d"),i=r("c6b6"),a=r("b622"),o=a("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,a=r("1dde"),o=r("ae40"),c=a("filter"),s=o("filter");n({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"55e1":function(t,e,r){"use strict";r("684a")},"5a34":function(t,e,r){var n=r("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"684a":function(t,e,r){},"6afb":function(t,e,r){"use strict";r("d30a")},"7db0":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").find,a=r("44d2"),o=r("ae40"),c="find",s=!0,u=o(c);c in[]&&Array(1)[c]((function(){s=!1})),n({target:"Array",proto:!0,forced:s||!u},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(c)},"84bb":function(t,e,r){},"8eff":function(t,e,r){},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,r){var n=r("b622"),i=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[i]=!1,"/./"[t](e)}catch(n){}}return!1}},ae01:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"movie-item",attrs:{href:"https://www.themoviedb.org/movie/"+t.movie.id,target:"_blank",title:t.movie.title}},[n("div",{staticClass:"container"},[t.movie.poster_path?n("img",{staticClass:"movie-item__poster",attrs:{src:(t.configuration.images?t.configuration.images.secure_base_url:"https://image.tmdb.org/t/p/")+"w342"+t.movie.poster_path}}):n("img",{staticClass:"movie-item__poster",attrs:{src:r("bd21")}}),n("div",{staticClass:"container__rating"},[t._v(" "+t._s(0===t.movie.vote_count?"Not Rated":t.movie.vote_average+"/10")+" ")])]),n("div",{staticClass:"movie-item__description"},[t._v(" "+t._s(t.movie.title)+" ")])])},i=[],a=r("2f62"),o={props:{movie:{type:Object,required:!0}},computed:Object(a["e"])({configuration:function(t){return t.configuration.configurationData}})},c=o,s=(r("d741"),r("2877")),u=Object(s["a"])(c,n,i,!1,null,"7274735e",null);e["a"]=u.exports},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),a=r("df75"),o=r("d039"),c=o((function(){a(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return a(i(t))}})},bd21:function(t,e,r){t.exports=r.p+"img/no-image.39a42581.png"},caad:function(t,e,r){"use strict";var n=r("23e7"),i=r("4d64").includes,a=r("44d2"),o=r("ae40"),c=o("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!c},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d30a:function(t,e,r){},d317:function(t,e,r){"use strict";r("8eff")},d69b:function(t,e,r){"use strict";r("d788")},d741:function(t,e,r){"use strict";r("84bb")},d788:function(t,e,r){},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),a=r("56ef"),o=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=o(t),i=c.f,u=a(n),f={},l=0;while(u.length>l)r=i(n,e=u[l++]),void 0!==r&&s(f,e,r);return f}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),a=r("fc6a"),o=r("06cf").f,c=r("83ab"),s=i((function(){o(1)})),u=!c||s;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return o(a(t),e)}})},f0e3:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"movie-container"},[t._t("default")],2)},i=[],a=(r("6afb"),r("2877")),o={},c=Object(a["a"])(o,n,i,!1,null,"f56a8d78",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-3fc6520f.b3198958.js.map