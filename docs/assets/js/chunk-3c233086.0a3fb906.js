(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c233086"],{"1f64":function(e,t,n){"use strict";var r=n("b0ad"),a=n.n(r);a.a},"58a0":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"overview-favorite-pokemon__title"},[e._v("Selected Pokemon")]),n("router-link",{staticClass:"nes-btn",attrs:{to:"/"}},[e._v("Go back")]),n("div",{staticClass:"overview-favorite-pokemon"},e._l(e.stateFavoritePokemonList,function(e,t){return n("pokemon-card",{key:t,attrs:{"pokemon-name":e}})}),1)],1)},a=[],o=n("cebc"),s=n("2f62"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.pokemonData&&e.pokemonDescription?n("div",{staticClass:"pokemon-card nes-container is-rounded"},[n("div",{staticClass:"pokemon-card__image"},[n("img",{attrs:{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+e.pokemonData.id+".png",alt:e.pokemonData.name}})]),n("div",{staticClass:"pokemon-card__text"},[n("p",[e._v("Name: "+e._s(e.pokemonData.name))]),n("p",[e._v("No. "+e._s(e.pokemonData.id))]),n("p",[e._v("\n          Type:\n          "),e._l(e.pokemonData.types,function(t,r){return n("span",{key:"type"+r},[e._v(e._s(t.type.name))])})],2),n("p",[e._v(e._s(e.pokemonDescription[0].flavor_text))])])]):e._e()])},c=[],p=(n("7f7f"),n("96cf"),n("3b8d")),u={name:"PokemonCard",props:{pokemonName:{type:String,default:""}},data:function(){return{pokemonData:null,pokemonDescription:null}},created:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.pokemonName){e.next=7;break}return e.next=3,this.getDataSpecificPokemon(this.pokemonName);case 3:return this.pokemonData=e.sent,e.next=6,this.getPokemonDescription(this.pokemonData);case 6:this.pokemonDescription=e.sent;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{getDataSpecificPokemon:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t,"/"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),getPokemonDescription:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t.species.url));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.flavor_text_entries.filter(function(e){return"en"===e.language.name}));case 7:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}},m=u,k=(n("7c1c"),n("2877")),f=Object(k["a"])(m,i,c,!1,null,"0bf0af58",null),l=f.exports,v={components:{PokemonCard:l},computed:Object(o["a"])({},Object(s["c"])(["stateFavoritePokemonList"]))},d=v,h=(n("1f64"),Object(k["a"])(d,r,a,!1,null,"7a1a8d1b",null));t["default"]=h.exports},"7c1c":function(e,t,n){"use strict";var r=n("9d20"),a=n.n(r);a.a},"9d20":function(e,t,n){},b0ad:function(e,t,n){}}]);
//# sourceMappingURL=chunk-3c233086.0a3fb906.js.map