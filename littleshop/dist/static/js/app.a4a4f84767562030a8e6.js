webpackJsonp([1],{0:function(t,e){},"4NaZ":function(t,e){},"8SFv":function(t,e){},GKrx:function(t,e){},KCWu:function(t,e,n){t.exports=n.p+"static/img/54205424_big.c818dcb.jpg"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},r,!1,function(t){n("GKrx")},null,null).exports,a=n("/ocq"),o={methods:{goBack:function(){window.history.back()}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"head"},[e("div",{staticClass:"header"},[e("a",{staticClass:"go-back",attrs:{href:"javascript:;"},on:{click:this.goBack}},[this._v("返回")]),this._v(" "),e("h4",{staticClass:"header-cont"},[this._v("商品详情页")])])])},staticRenderFns:[]};var l={data:function(){return{}},components:{DetailHeader:n("VU/8")(o,c,!1,function(t){n("8SFv")},"data-v-02940e7f",null).exports,CommonFooter:n("omJD").a}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail"},[e("detail-header"),this._v(" "),e("img",{attrs:{src:n("KCWu"),alt:""}}),this._v(" "),e("p",{staticClass:"site-title"},[this._v("树懒果园 泰国进口大金煌芒果")]),this._v(" "),e("router-link",{attrs:{to:"/detail/msg"}},[e("p",{staticClass:"site-cont"},[this._v("5斤装，约2-4个果，大！！！甜！！！")])]),this._v(" "),e("div",{staticClass:"show"},[e("router-view")],1),this._v(" "),e("common-footer")],1)},staticRenderFns:[]};var h=n("VU/8")(l,u,!1,function(t){n("zrZz")},null,null).exports,v={render:function(){var t=this.$createElement;return(this._self._c||t)("h3",[this._v("我是详情页0419")])},staticRenderFns:[]};var d=n("VU/8")({},v,!1,function(t){n("4NaZ")},null,null).exports;i.a.use(a.a);var f=[{path:"/",component:function(t){return n.e(0).then(function(){var e=[n("vkyI")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"home"}},{path:"/msg",component:d},{path:"/detail",component:h,children:[{path:"msg",component:d}]}],p=new a.a({routes:f}),_=n("8+8L");i.a.use(_.a),i.a.config.productionTip=!1,new i.a({el:"#app",data:function(){return{}},router:p,components:{App:s},template:"<App/>"}),i.a.filter("dCurrency",function(t){return"￥"+t}),i.a.filter("dTofixed",function(t){var e=parseFloat(t);if(!e)return alert("请输入数字"),"请输入数字";var n=(t=Math.round(100*e)/100).toString().split(".");return 1==n.length?t=t.toString()+".00":n.length>1?(n[1].length<2&&(t=t.toString()+"0"),t):void 0})},QkJd:function(t,e){},omJD:function(t,e,n){"use strict";var i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("ul",{staticClass:"footer-cont"},[e("li",[this._v("1")]),this._v(" "),e("li",[this._v("2")]),this._v(" "),e("li",[this._v("3")]),this._v(" "),e("li",[this._v("4")])])])}]};var r=n("VU/8")({},i,!1,function(t){n("QkJd")},null,null);e.a=r.exports},zrZz:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a4a4f84767562030a8e6.js.map