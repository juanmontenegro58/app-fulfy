(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b856b8d"],{"083a":function(e,t,r){"use strict";var n=r("0d51"),a=TypeError;e.exports=function(e,t){if(!delete e[t])throw a("Cannot delete property "+n(t)+" of "+n(e))}},"48b6":function(e,t,r){e.exports=r.p+"img/barcode.0152e02c.png"},"8fbd":function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}));var n,a,c=r("8785"),o=r("5184"),s=Object(o["a"])(n||(n=Object(c["a"])(["query listProducts($cursor: String, $productName: String){\n    listProducts(after: $cursor, name_Icontains: $productName){\n        pageInfo{\n            hasNextPage\n        }\n        edges{\n            cursor\n            node{\n                name\n                id\n                stock\n                price\n                sku\n                store{\n                    name\n                }\n            }\n        }\n    }\n}"]))),i=Object(o["a"])(a||(a=Object(c["a"])(["query productsLowStock($store: Int){\n    productsLowStock(store: $store){\n        stock\n        product\n        store\n        id\n    }\n}"])))},9323:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return i}));var n,a,c=r("8785"),o=r("5184"),s=Object(o["a"])(n||(n=Object(c["a"])(["query allDispatchs($store: String, $guide: String,\n    $cursor: String, $includeStore: Boolean!, $includeSku: Boolean!, $startDate: DateTime,\n    $endDate: DateTime, $first: Int){\n    dispatchs(store_Name_Iexact: $store, guide_Icontains: $guide after: $cursor,\n        created_Date_Gte: $startDate, created_Date_Lte: $endDate, first: $first){\n        pageInfo{\n            hasNextPage\n        }\n        edges{\n            cursor\n            node{\n                guide\n                created\n                productpackagethroughSet{\n                    product{\n                        name\n                        sku @include(if: $includeSku)\n                        id\n                    }\n                    quantity\n                }\n                store @include(if: $includeStore){\n                    name\n                }\n            }\n        }\n    }\n}"]))),i=Object(o["a"])(a||(a=Object(c["a"])(["query DispatchsReturns($store: Int, $startDate: Date!, $endDate: Date!){\n    returnsDispatchs(startDate: $startDate, endDate: $endDate, store: $store){\n        dispatchs\n        returns\n        storeName\n        storeId\n    }\n}"])))},a434:function(e,t,r){"use strict";var n=r("23e7"),a=r("7b0b"),c=r("23cb"),o=r("5926"),s=r("07fa"),i=r("3511"),u=r("65f0"),d=r("8418"),l=r("083a"),f=r("1dde"),p=f("splice"),h=Math.max,b=Math.min;n({target:"Array",proto:!0,forced:!p},{splice:function(e,t){var r,n,f,p,m,g,v=a(this),k=s(v),S=c(e,k),y=arguments.length;for(0===y?r=n=0:1===y?(r=0,n=k-S):(r=y-2,n=b(h(o(t),0),k-S)),i(k+r-n),f=u(v,n),p=0;p<n;p++)m=S+p,m in v&&d(f,p,v[m]);if(f.length=n,r<n){for(p=S;p<k-n;p++)m=p+n,g=p+r,m in v?v[g]=v[m]:l(v,g);for(p=k;p>k-n+r;p--)l(v,p-1)}else if(r>n)for(p=k-n;p>S;p--)m=p+n-1,g=p+r-1,m in v?v[g]=v[m]:l(v,g);for(p=0;p<r;p++)v[p+S]=arguments[p+2];return v.length=k-n+r,f}})},e011:function(e,t,r){"use strict";r.r(t);r("99af"),r("fb6a");var n,a=function(){var e=this,t=e._self._c;return t("layout",[t("page-header",{attrs:{title:e.title}}),t("div",[t("b-card",{staticClass:"mb-2 text-center",attrs:{title:"Ingreso de inventario"}},[t("b-card-text",[e.loadingProducts?[t("b-skeleton",{attrs:{animation:"wave",width:"85%"}}),t("b-skeleton",{attrs:{animation:"wave",width:"55%"}}),t("b-skeleton",{attrs:{animation:"wave",width:"70%"}}),t("b-skeleton",{attrs:{animation:"wave",width:"55%"}}),t("b-skeleton",{attrs:{animation:"wave",width:"85%"}})]:[t("div",{staticClass:"d-grid gap-2 d-md-flex justify-content-md-end"},[t("div",{staticClass:"form-check form-switch form-switch-md mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.returned,expression:"returned"}],staticClass:"form-check-input",attrs:{type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"},domProps:{checked:Array.isArray(e.returned)?e._i(e.returned,null)>-1:e.returned},on:{change:function(t){var r=e.returned,n=t.target,a=!!n.checked;if(Array.isArray(r)){var c=null,o=e._i(r,c);n.checked?o<0&&(e.returned=r.concat([c])):o>-1&&(e.returned=r.slice(0,o).concat(r.slice(o+1)))}else e.returned=a}}}),t("label",{staticClass:"form-check-label",attrs:{for:"flexSwitchCheckDefault"}},[e._v(" Devolución ")])])]),t("b-form-group",[t("b-input-group",[t("b-form-input",{ref:"inputGuideSku",attrs:{id:"input-1",type:"text",placeholder:e.returned?"Número de guía":"SKU",required:"",autofocus:"",disabled:e.loadingPackage},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.returned?e.getProductsDispatch():e.addProduct()}},model:{value:e.searchSku,callback:function(t){e.searchSku=t},expression:"searchSku"}})],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.productSelected.length,expression:"productSelected.length"}]},[t("b-table",{attrs:{striped:"",hover:"",items:e.productSelected,fields:e.fields},scopedSlots:e._u([e.returned?null:{key:"cell(actions)",fn:function(r){var n=r.item;return[t("b-btn",{attrs:{variant:"danger"},on:{click:function(t){return e.deleteRecord(n.sku)}}},[t("i",{staticClass:"mdi mdi-delete"})])]}}],null,!0)}),e.returned?e._e():t("div",{staticClass:"d-grid gap-2 d-md-flex justify-content-md-end"},[t("b-btn",{attrs:{variant:"success",disabled:e.loadingCreate},on:{click:function(t){return e.createIncome()}}},[e.loadingCreate?[t("b-spinner",{attrs:{small:"",type:"grow"}}),e._v(" Cargando... ")]:[e._v(" Finalizar ")]],2)],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.productSelected.length,expression:"!productSelected.length"}],staticClass:"mt-2"},[t("img",{staticClass:"img-fluid",attrs:{src:r("48b6"),alt:"...",width:"300px"}})])]],2)],1)],1)],1)},c=[],o=r("c7eb"),s=r("b85c"),i=r("1da1"),u=(r("c740"),r("ac1f"),r("1276"),r("b0c0"),r("a434"),r("444f")),d=r("2579"),l=r("3d20"),f=r.n(l),p=r("8fbd"),h=r("8785"),b=r("5184"),m=Object(b["a"])(n||(n=Object(h["a"])(["mutation createIncome($income: [IncomeInput]!, $returned: ReturnedInput){\n    createIncome(income: $income, returned: $returned){\n        income\n        \n    }\n}"]))),g=r("9b8d"),v=r("154f"),k=r("9323"),S={components:{Layout:u["a"],PageHeader:d["a"]},data:function(){return{title:"Inventario",searchSku:null,fields:[{key:"name",label:"Producto"},{key:"quantity",label:"Cantidad"},{key:"actions",label:"Acciones"}],allProducts:[],productSelected:[],dataMutation:[],lastCursor:null,returned:!1,loadingProducts:!0,loadingCreate:!1,loadingPackage:!1}},watch:{returned:function(e){this.$refs.inputGuideSku.focus(),this.productSelected=[],this.searchSku=null}},methods:{getProductsDispatch:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var r,n,a,c,i,u,d;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loadingPackage=!0,null!==e.searchSku){t.next=3;break}return t.abrupt("return",Object(g["b"])("error","Debes ingresar el número de guía"));case 3:return e.productSelected=[],t.prev=4,t.next=7,e.$apollo.query({query:k["b"],variables:{guide:e.searchSku,includeStore:!1,includeSku:!0}});case 7:if(r=t.sent,n=r.data.dispatchs,null!==n){a=n.edges[0].node,c=Object(s["a"])(a.productpackagethroughSet);try{for(c.s();!(i=c.n()).done;)u=i.value,d=e.formatDataTable(u.product,u.quantity),e.productSelected.push(d)}catch(o){c.e(o)}finally{c.f()}e.incomeDevolutionModal()}else Object(g["b"])("error","No se pudo recuperar la información");t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](4),Object(g["b"])("error","No se pudo recuperar la información");case 15:e.loadingPackage=!1;case 16:case"end":return t.stop()}}),t,null,[[4,12]])})))()},addProduct:function(){var e=this,t=this.allProducts.findIndex((function(t){return t.sku===e.searchSku}));if(-1===t)Object(g["b"])("error","El producto no se ha encontrado");else{var r=this.productSelected.findIndex((function(t){return t.sku===e.searchSku}));if(-1!==r){var n=this.productSelected[r];n.quantity+=1}else this.productSelected.push(this.formatDataTable(this.allProducts[t]))}this.searchSku=null},formatDataTable:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=Object(v["a"])(e.id).split(":")[1],n={name:e.name,quantity:t,sku:e.sku,id:r};return n},formatDataMutation:function(){var e,t=Object(s["a"])(this.productSelected);try{for(t.s();!(e=t.n()).done;){var r=e.value,n={quantity:r.quantity,product:r.id,returned:this.returned};this.dataMutation.push(n)}}catch(a){t.e(a)}finally{t.f()}},deleteRecord:function(e){var t=this.productSelected.findIndex((function(t){return t.sku===e}));-1!==t&&this.productSelected.splice(t,1)},getProducts:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var r,n,a;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$apollo.query({query:p["a"],variables:{cursor:e.lastCursor}});case 3:r=t.sent,n=r.data.listProducts,null!==n?(a=n.edges,e.hasNextPage=n.pageInfo.hasNextPage,e.addArrayProducts(a),e.hasNextPage?e.getProducts():e.loadingProducts=!1):(Object(g["b"])("error","No se pudo recuperar la información"),e.loadingProducts=!1),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),e.loadingProducts=!1,Object(g["b"])("error","No se pudo recuperar la información");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},createIncome:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var r,n,a,c;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loadingCreate=!0,e.formatDataMutation(),r={income:e.dataMutation},!0===e.returned&&(r["returned"]={returned:e.returned,guide:e.searchSku}),t.prev=4,t.next=7,e.$apollo.mutate({mutation:m,variables:r});case 7:n=t.sent,a=n.data.createIncome,null!==a?(c=a.income,!0===c?(Object(g["b"])("success","El ingreso se realizo correctamente"),e.productSelected=[],e.dataMutation=[]):Object(g["b"])("error","No se pudo realizar el ingreso")):Object(g["b"])("error","No se pudo realizar el ingreso"),e.loadingCreate=!1,t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](4),e.loadingCreate=!1,Object(g["b"])("error","No se pudo realizar el ingreso");case 17:e.searchSku=null,e.$refs.inputGuideSku.focus();case 19:case"end":return t.stop()}}),t,null,[[4,13]])})))()},addArrayProducts:function(e){var t,r=Object(s["a"])(e);try{for(r.s();!(t=r.n()).done;){var n=t.value,a=n.node,c={id:a.id,name:a.name,sku:a.sku};this.allProducts.push(c),this.lastCursor=n.cursor}}catch(o){r.e(o)}finally{r.f()}},incomeDevolutionModal:function(){var e=this,t=this.buildTextHtml();f.a.fire({title:"¿Estas seguro?",html:'<div class="text-center">\n          <h6>Estas seguro de crear devolución para el número de guía <strong>'.concat(this.searchSku,'</strong> con los siguientes productos.</h6>\n        </div>\n        <div class="row">\n          ').concat(t,"\n        </div>"),icon:"question",showCancelButton:!0,cancelButtonText:"No, cancelar",cancelButtonColor:"#bb2d3b",confirmButtonText:"Si, guardar",showLoaderOnConfirm:!0,preConfirm:function(){return e.createIncome()}})},buildTextHtml:function(){var e,t="",r=Object(s["a"])(this.productSelected);try{for(r.s();!(e=r.n()).done;){var n=e.value;t+='<div class="col-md-6">\n            <div class="card">\n              <div class="card-body">\n                <p class="card-text">\n                  <strong>'.concat(n.name,":</strong> ").concat(n.quantity,"\n                </p>\n              </div>\n            </div>\n          </div>")}}catch(a){r.e(a)}finally{r.f()}return t}},beforeMount:function(){this.getProducts()}},y=S,w=r("2877"),x=Object(w["a"])(y,a,c,!1,null,null,null);t["default"]=x.exports}}]);
//# sourceMappingURL=chunk-6b856b8d.2e42e04c.js.map