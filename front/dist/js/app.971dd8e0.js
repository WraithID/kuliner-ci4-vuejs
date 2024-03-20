(function(){"use strict";var e={3189:function(e,n,a){var r=a(9242),t=a(3396);function s(e,n){const a=(0,t.up)("router-view");return(0,t.wg)(),(0,t.j4)(a)}var o=a(89);const c={},l=(0,o.Z)(c,[["render",s]]);var i=l,u=a(2483);function p(e,n,a,r,s,o){const c=(0,t.up)("Navbar");return(0,t.wg)(),(0,t.j4)(c)}const d={class:"navbar navbar-expand-lg bg-body-tertiary"},v=(0,t.uE)('<div class="container"><a class="navbar-brand" href="#" style="color:#6c757d;">KulinerKota</a><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav mx-auto"><li class="nav-item mx-2"><a class="nav-link" aria-current="page" href="/" style="color:#6c757d;">Home</a></li><li class="nav-item mx-2"><a class="nav-link" aria-current="page" href="#" style="color:#6c757d;">Kuliner</a></li><li class="nav-item mx-2"><a class="nav-link" aria-current="page" href="/resep" style="color:#6c757d;">Resep</a></li><li class="nav-item mx-2"><a class="nav-link" aria-current="page" href="#" style="color:#6c757d;">Artikel</a></li></ul><form class="d-flex"><input class="form-control me-1" type="search" placeholder="Search" aria-label="Search"><button type="button" class="btn btn-secondary">Search</button></form></div></div>',1),f=[v];function m(e,n,a,r,s,o){return(0,t.wg)(),(0,t.iD)("nav",d,f)}var b={name:"Navbar"};const h=(0,o.Z)(b,[["render",m]]);var g=h,_={name:"Home",components:{Navbar:g}};const y=(0,o.Z)(_,[["render",p]]);var w=y;const k={class:"container-fluid"};function j(e,n,a,r,s,o){const c=(0,t.up)("Navbar"),l=(0,t.up)("Resep");return(0,t.wg)(),(0,t.iD)("div",k,[(0,t.Wm)(c),(0,t.Wm)(l)])}var x=a(7139);const O={id:"aneka",class:"aneka"},R={class:"container-fluid"},Z={class:"container"},D=(0,t._)("div",{class:"row text-start mb-3 mt-3"},[(0,t._)("div",{class:"col"},[(0,t._)("h2",null,"Aneka Resep Khas Kota")])],-1),N={class:"row text-center mb-3 my-3"},S={class:"card"},z=(0,t._)("img",{src:"",class:"card-img-top",alt:"error image"},null,-1),K={class:"card-body"},P={class:"card-title"},T={class:"card-text"};function C(e,n,a,r,s,o){const c=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("section",O,[(0,t._)("div",R,[(0,t._)("div",Z,[D,(0,t._)("div",N,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.reseps,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"col-lg-3 col-md-6 mt-4",key:e.id_resep},[(0,t._)("div",S,[z,(0,t._)("div",K,[(0,t._)("h5",P,(0,x.zw)(e.judul_resep),1),(0,t._)("p",T,(0,x.zw)(e.penjelasan),1),(0,t.Wm)(c,{class:"btn btn-outline-dark",style:{"font-size":"medium"},to:"/resep/"+e.id_resep},{default:(0,t.w5)((()=>[(0,t.Uk)("Yuk Coba")])),_:2},1032,["to"])])])])))),128))])])])])}var M=a(1076),W={name:"Resep",data(){return{reseps:[]}},mounted(){this.getReseps()},methods:{async getReseps(){try{const e=await M.Z.get("resep");this.reseps=e.data}catch(e){console.error("Terjadi kesalahan saat mengambil data:",e.message)}}}};const H=(0,o.Z)(W,[["render",C]]);var L=H,A={name:"ResepList",components:{Navbar:g,Resep:L}};const E=(0,o.Z)(A,[["render",j]]);var U=E;const Y={class:"container-fluid"},B={class:"container"},F={class:"row mt-3"},$={class:"col-md-12"},q={class:"table table-borderless mt-3"},G=(0,t._)("th",{scope:"row"},"Bahan-bahan",-1),I=(0,t._)("th",{scope:"row"},"Cara Membuat",-1);function J(e,n,a,r,s,o){const c=(0,t.up)("Navbar");return(0,t.wg)(),(0,t.iD)("div",Y,[(0,t.Wm)(c),(0,t._)("div",B,[(0,t._)("div",F,[(0,t._)("div",$,[(0,t._)("h1",null,(0,x.zw)(s.resep.judul_resep),1),(0,t._)("h5",null,(0,x.zw)(s.resep.penjelasan),1)])]),(0,t._)("table",q,[(0,t._)("tbody",null,[(0,t._)("tr",null,[G,(0,t._)("td",null,(0,x.zw)(s.resep.bahan),1)]),(0,t._)("tr",null,[I,(0,t._)("td",null,(0,x.zw)(s.resep.langkah),1)])])])])])}var Q={name:"ResepDetail",components:{Navbar:g},data(){return{resep:{}}},methods:{setResep(e){this.resep=e}},mounted(){M.Z.get("resep/"+this.$route.params.id_resep).then((e=>this.setResep(e.data))).catch((e=>console.log(e)))}};const V=(0,o.Z)(Q,[["render",J]]);var X=V;const ee=[{path:"/",name:"home",component:w},{path:"/resep",name:"ResepList",component:U},{path:"/resep/:id_resep",name:"ResepDetail",component:X}],ne=(0,u.p7)({history:(0,u.PO)("/"),routes:ee});var ae=ne;M.Z.defaults.baseURL="http://localhost:8080/",(0,r.ri)(i).use(ae).mount("#app")}},n={};function a(r){var t=n[r];if(void 0!==t)return t.exports;var s=n[r]={exports:{}};return e[r].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(n,r,t,s){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],t=e[u][1],s=e[u][2];for(var c=!0,l=0;l<r.length;l++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(c=!1,s<o&&(o=s));if(c){e.splice(u--,1);var i=t();void 0!==i&&(n=i)}}return n}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,t,s]}}(),function(){a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,{a:n}),n}}(),function(){a.d=function(e,n){for(var r in n)a.o(n,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(n){return 0===e[n]};var n=function(n,r){var t,s,o=r[0],c=r[1],l=r[2],i=0;if(o.some((function(n){return 0!==e[n]}))){for(t in c)a.o(c,t)&&(a.m[t]=c[t]);if(l)var u=l(a)}for(n&&n(r);i<o.length;i++)s=o[i],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},r=self["webpackChunkfront"]=self["webpackChunkfront"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(3189)}));r=a.O(r)})();
//# sourceMappingURL=app.971dd8e0.js.map