import{_ as z,D as H,M as N,r as y,o as d,c,d as _,w as u,n as x,b as t,t as a,z as O,s as M,e as f,F as m,a as b,f as D,g as C,l as w,v as Q,E as F,G as q}from"./index-bb9ec461.js";import{a as I}from"./axios-a342f982.js";import{_ as A}from"./icon-table-black-39759b1d.js";const p=H(),P={data(){return{menu:"",order:"",orderHistory:"",orderNo:"#0000",tableNo:"0",modal:"",modalData:"",modalQuantity:"",modalSelectedSize:"",modalSelectedAddon:[],mobileSidebarToggled:!1}},mounted(){p.appSidebarHide=!0,p.appHeaderHide=!0,p.appContentClass="p-1 ps-xl-4 pe-xl-4 pt-xl-3 pb-xl-3",p.appContentFullHeight=!0,I.get("/assets/data/pos/customer-order.json").then(i=>{this.menu=i.data,this.order=i.data.order,this.orderNo=i.data.orderNo,this.orderHistory=i.data.orderHistory,this.tableNo=i.data.tableNo})},beforeUnmount(){p.appSidebarHide=!1,p.appHeaderHide=!1,p.appContentClass="",p.appContentFullHeight=!1},methods:{toggleMobileSidebar:function(){this.mobileSidebarToggled=!this.mobileSidebarToggled},getOrderTotal:function(){return this.order?this.order.length:0},getOrderHistoryTotal:function(){return this.orderHistory?this.orderHistory.length:0},getSubTotalPrice:function(){for(var i=0,e=0;e<this.order.length;e++)i+=parseFloat(this.order[e].price)*parseInt(this.order[e].quantity);return i.toFixed(2)},getTaxesPrice:function(){for(var i=0,e=0;e<this.order.length;e++)i+=parseFloat(this.order[e].price)*parseInt(this.order[e].quantity)*.06;return i.toFixed(2)},getTotalPrice:function(){for(var i=0,e=0;e<this.order.length;e++)i+=parseFloat(this.order[e].price)*parseInt(this.order[e].quantity),i+=parseFloat(this.order[e].price)*parseInt(this.order[e].quantity)*.06;return i.toFixed(2)},deductQty:function(i,e){i.preventDefault();for(var o=0;o<this.order.length;o++)if(this.order[o].id==e){var h=parseInt(this.order[o].quantity)-1;h<1&&(h=1),this.order[o].quantity=h}},addQty:function(i,e){i.preventDefault();for(var o=0;o<this.order.length;o++)if(this.order[o].id==e){var h=parseInt(this.order[o].quantity)+1;this.order[o].quantity=h}},showType:function(i,e){i.preventDefault();for(var o=0;o<this.menu.category.length;o++)this.menu.category[o].type==e?this.menu.category[o].active=!0:this.menu.category[o].active=!1;for(var o=0;o<this.menu.food.length;o++)this.menu.food[o].type==e||e=="all"?this.menu.food[o].hide=!1:this.menu.food[o].hide=!0},showFoodModal:function(i,e){i.preventDefault();for(var o=0;o<this.menu.food.length;o++)this.menu.food[o].id==e&&(this.modalData=this.menu.food[o]);this.modalData.options&&this.modalData.options.size&&(this.modalSelectedSize=this.modalData.options.size[0].text),this.modalQuantity=1,this.modalSelectedAddon=[],this.modal=new N(this.$refs.modalPosItem),this.modal.show()},addModalQty:function(i){i.preventDefault(),this.modalQuantity=this.modalQuantity+1},deductModalQty:function(i){i.preventDefault();var e=parseInt(this.modalQuantity)-1;e<1&&(e=1),this.modalQuantity=e},addToCart:function(i){i.preventDefault(),this.modal.hide();var e=[];if(this.modalSelectedSize){var o={key:"size",value:this.modalSelectedSize};e.push(o)}if(this.modalSelectedAddon)for(var h=0;h<this.modalSelectedAddon.length;h++){var o={key:"addon",value:this.modalSelectedAddon[h]};e.push(o)}this.order.push({id:this.order.length+1,image:this.modalData.image,title:this.modalData.title,price:this.modalData.price,quantity:this.modalQuantity,options:e}),setTimeout(()=>{this.$refs.posSidebarBody.$el.scrollTop=9999,this.$refs.posSidebarBody.ps.update()},500)},toggleConfirmation:function(i,e,o){i.preventDefault();for(var h=0;h<this.order.length;h++)this.order[h].id==e&&(this.order[h].confirmation=o)},removeOrder:function(i,e){i.preventDefault();for(var o=0;o<this.order.length;o++)this.order[o].id==e&&this.order.splice(o,1)}}},B={class:"pos-menu"},V={class:"logo"},j=t("div",{class:"logo-img"},[t("i",{class:"bi bi-x-diamond",style:{"font-size":"2.1rem"}})],-1),U=t("div",{class:"logo-text"},"Pine & Dine",-1),R={class:"nav-container"},L={class:"nav nav-tabs"},E={class:"nav-item"},G=["onClick"],Y={class:"pos-content"},J={class:"row gx-4"},K={key:0,class:"col-xxl-3 col-xl-4 col-lg-6 col-md-4 col-sm-6 pb-4"},W=["onClick"],X={class:"info"},Z={class:"title"},$={class:"desc"},tt={class:"price"},et={key:0,class:"not-available-text"},st=t("div",null,"Not Available",-1),ot=[st],it={class:"pos-sidebar"},lt={class:"h-100 d-flex flex-column p-0"},at={class:"pos-sidebar-header"},nt={class:"back-btn"},dt=t("i",{class:"bi bi-chevron-left"},null,-1),ct=[dt],rt=t("div",{class:"icon"},[t("img",{src:A,class:"invert-dark",alt:""})],-1),ht={class:"title"},ut={class:"order"},_t={class:"pos-sidebar-nav"},mt={class:"nav nav-tabs nav-fill"},pt={class:"nav-item"},ft={class:"nav-link active",href:"#","data-bs-toggle":"tab","data-bs-target":"#newOrderTab"},bt={class:"nav-item"},vt={class:"nav-link",href:"#","data-bs-toggle":"tab","data-bs-target":"#orderHistoryTab"},gt={class:"tab-pane fade h-100 show active",id:"newOrderTab"},yt={class:"pos-order"},xt={class:"pos-order-product"},kt={class:"flex-1"},St={class:"h6 mb-1"},Ct={class:"small"},wt={class:"small mb-2"},Dt={class:"d-flex"},Tt=["onClick"],zt=t("i",{class:"fa fa-minus"},null,-1),Ht=[zt],Nt=["onUpdate:modelValue"],Ot=["onClick"],Mt=t("i",{class:"fa fa-plus"},null,-1),Qt=[Mt],Ft={class:"pos-order-price d-flex flex-column"},qt={class:"text-end mt-auto"},It=["onClick"],At=t("i",{class:"fa fa-trash"},null,-1),Pt=[At],Bt={key:0,class:"pos-order-confirmation text-center d-flex flex-column justify-content-center"},Vt=t("div",{class:"mb-1"},[t("i",{class:"bi bi-trash fs-36px lh-1"})],-1),jt=t("div",{class:"mb-2"},"Remove this item?",-1),Ut=["onClick"],Rt=["onClick"],Lt={key:1,class:"h-100 d-flex align-items-center justify-content-center text-center p-20"},Et=t("div",null,[t("div",{class:"mb-3 mt-n5"},[t("i",{class:"bi bi-bag text-inverse text-opacity-50",style:{"font-size":"6em"}})]),t("h5",null,"No order found")],-1),Gt=[Et],Yt=t("div",{class:"tab-pane fade h-100",id:"orderHistoryTab"},[t("div",{class:"h-100 d-flex align-items-center justify-content-center text-center p-20"},[t("div",null,[t("div",{class:"mb-3 mt-n5"},[t("i",{class:"bi bi-bag text-inverse text-opacity-50",style:{"font-size":"6em"}})]),t("h5",null,"No order history found")])])],-1),Jt={class:"pos-sidebar-footer"},Kt={class:"d-flex align-items-center mb-2"},Wt=t("div",null,"Subtotal",-1),Xt={class:"flex-1 text-end h6 mb-0"},Zt={class:"d-flex align-items-center"},$t=t("div",null,"Taxes (6%)",-1),te={class:"flex-1 text-end h6 mb-0"},ee=t("hr",null,null,-1),se={class:"d-flex align-items-center mb-2"},oe=t("div",null,"Total",-1),ie={class:"flex-1 text-end h4 mb-0"},le=t("div",{class:"mt-3"},[t("div",{class:"btn-group d-flex"},[t("a",{href:"#",class:"btn btn-outline-default rounded-0 w-80px"},[t("i",{class:"bi bi-bell fa-lg"}),t("br"),t("span",{class:"small"},"Service")]),t("a",{href:"#",class:"btn btn-outline-default rounded-0 w-80px"},[t("i",{class:"bi bi-receipt fa-fw fa-lg"}),t("br"),t("span",{class:"small"},"Bill")]),t("a",{href:"#",class:"btn btn-outline-theme rounded-0 w-150px"},[t("i",{class:"bi bi-send-check fa-lg"}),t("br"),t("span",{class:"small"},"Submit Order")])])],-1),ae=t("i",{class:"bi bi-bag"},null,-1),ne={class:"badge"},de={class:"modal modal-pos fade",ref:"modalPosItem"},ce={class:"modal-dialog modal-lg"},re={class:"modal-content border-0"},he=t("a",{href:"#","data-bs-dismiss":"modal",class:"btn-close position-absolute top-0 end-0 m-4"},null,-1),ue={class:"modal-pos-product"},_e={class:"modal-pos-product-img"},me={class:"modal-pos-product-info d-flex flex-column"},pe={class:"h4 mb-2"},fe={class:"text-inverse text-opacity-50 mb-2"},be={class:"h4 mb-3"},ve={class:"d-flex mb-3"},ge=t("i",{class:"fa fa-minus"},null,-1),ye=[ge],xe=["value"],ke=t("i",{class:"fa fa-plus"},null,-1),Se=[ke],Ce=t("hr",{class:"mx-n4"},null,-1),we={key:0,class:"mb-2"},De=t("div",{class:"fw-bold"},"Size:",-1),Te={class:"option-list"},ze={class:"option"},He=["id","value"],Ne=["for"],Oe={class:"option-text"},Me={class:"option-price"},Qe={key:1,class:"mb-2"},Fe=t("div",{class:"fw-bold"},"Add On:",-1),qe={class:"option-list"},Ie={class:"option"},Ae=["name","value","id"],Pe=["for"],Be={class:"option-text"},Ve={class:"option-price"},je=t("hr",{class:"mx-n4 mt-auto"},null,-1),Ue=t("div",{class:"row"},[t("div",{class:"col-4"},[t("a",{href:"#",class:"btn btn-default fw-500 h4 mb-0 d-block rounded-0 py-3","data-bs-dismiss":"modal"},"Cancel")]),t("div",{class:"col-8"},[t("button",{type:"submit",class:"btn btn-success w-100 fw-500 d-flex justify-content-center align-items-center rounded-0 py-3 h4 m-0"},[D("Add to cart "),t("i",{class:"bi bi-plus fa-2x ms-2 my-n3"})])])],-1);function Re(i,e,o,h,n,r){const T=y("RouterLink"),v=y("card-body"),g=y("card"),k=y("perfect-scrollbar");return d(),c(m,null,[_(g,{class:x(["pos",{"pos-mobile-sidebar-toggled":n.mobileSidebarToggled}])},{default:u(()=>[_(v,{class:"pos-container"},{default:u(()=>[t("div",B,[t("div",V,[_(T,{to:"/"},{default:u(()=>[j,U]),_:1})]),t("div",R,[_(k,{class:"h-100"},{default:u(()=>[t("ul",L,[(d(!0),c(m,null,b(n.menu.category,s=>(d(),c("li",E,[t("a",{class:x(["nav-link",{active:s.active}]),href:"#",onClick:l=>r.showType(l,s.type)},[_(g,null,{default:u(()=>[_(v,null,{default:u(()=>[t("i",{class:x(s.icon)},null,2),D(" "+a(s.text),1)]),_:2},1024)]),_:2},1024)],10,G)]))),256))])]),_:1})])]),t("div",Y,[_(k,{class:"pos-content-container h-100 p-4"},{default:u(()=>[t("div",J,[(d(!0),c(m,null,b(n.menu.food,s=>(d(),c(m,null,[s.hide?f("",!0):(d(),c("div",K,[_(g,{class:"h-100"},{default:u(()=>[_(v,{class:"h-100 p-1"},{default:u(()=>[t("a",{href:"#",class:x(["pos-product",{"not-available":!s.available}]),onClick:l=>r.showFoodModal(l,s.id)},[t("div",{class:"img",style:C({backgroundImage:"url("+s.image+")"})},null,4),t("div",X,[t("div",Z,a(s.title),1),t("div",$,a(s.description),1),t("div",tt,"$"+a(s.price),1)]),s.available?f("",!0):(d(),c("div",et,ot))],10,W)]),_:2},1024)]),_:2},1024)]))],64))),256))])]),_:1})]),t("div",it,[t("div",lt,[t("div",at,[t("div",nt,[t("button",{type:"button",onClick:e[0]||(e[0]=s=>r.toggleMobileSidebar()),class:"btn"},ct)]),rt,t("div",ht,"Table "+a(n.tableNo),1),t("div",ut,[D("Order: "),t("b",null,a(n.orderNo),1)])]),t("div",_t,[t("ul",mt,[t("li",pt,[t("a",ft,"New Order ("+a(r.getOrderTotal())+")",1)]),t("li",bt,[t("a",vt,"Order History ("+a(r.getOrderHistoryTotal())+")",1)])])]),_(k,{ref:"posSidebarBody",class:"pos-sidebar-body tab-content"},{default:u(()=>[t("div",gt,[n.order.length>0?(d(!0),c(m,{key:0},b(n.order,s=>(d(),c("div",yt,[t("div",xt,[t("div",{class:"img",style:C({backgroundImage:"url("+s.image+")"})},null,4),t("div",kt,[t("div",St,a(s.title),1),t("div",Ct,"$"+a(s.price),1),t("div",wt,[(d(!0),c(m,null,b(s.options,l=>(d(),c("div",null,"- "+a(l.key)+": "+a(l.value),1))),256))]),t("div",Dt,[t("a",{href:"#",class:"btn btn-outline-theme btn-sm",onClick:l=>r.deductQty(l,s.id)},Ht,8,Tt),w(t("input",{type:"text","onUpdate:modelValue":l=>s.quantity=l,class:"form-control w-50px form-control-sm mx-2 bg-white bg-opacity-25 text-center"},null,8,Nt),[[Q,s.quantity]]),t("a",{href:"#",class:"btn btn-outline-theme btn-sm",onClick:l=>r.addQty(l,s.id)},Qt,8,Ot)])])]),t("div",Ft,[t("div",null,"$"+a((s.price*s.quantity).toFixed(2)),1),t("div",qt,[t("a",{href:"#",onClick:l=>r.toggleConfirmation(l,s.id,!0),class:"btn btn-sm btn-outline-gray-500"},Pt,8,It)])]),s.confirmation?(d(),c("div",Bt,[Vt,jt,t("div",null,[t("a",{href:"#",onClick:l=>r.toggleConfirmation(l,s.id,!1),class:"btn btn-outline-white btn-sm ms-auto me-2 width-100px"},"No",8,Ut),t("a",{href:"#",onClick:l=>r.removeOrder(l,s.id),class:"btn btn-outline-theme btn-sm width-100px"},"Yes",8,Rt)])])):f("",!0)]))),256)):(d(),c("div",Lt,Gt))]),Yt]),_:1},512),t("div",Jt,[t("div",Kt,[Wt,t("div",Xt,"$"+a(r.getSubTotalPrice()),1)]),t("div",Zt,[$t,t("div",te,"$"+a(r.getTaxesPrice()),1)]),ee,t("div",se,[oe,t("div",ie,"$"+a(r.getTotalPrice()),1)]),le])])])]),_:1})]),_:1},8,["class"]),t("a",{href:"#",class:"pos-mobile-sidebar-toggler",onClick:e[1]||(e[1]=s=>r.toggleMobileSidebar())},[ae,t("span",ne,a(r.getOrderTotal()),1)]),t("div",de,[t("div",ce,[t("div",re,[t("form",{onSubmit:e[6]||(e[6]=O((...s)=>r.addToCart&&r.addToCart(...s),["prevent"]))},[n.modalData?(d(),M(g,{key:0},{default:u(()=>[_(v,{class:"p-0"},{default:u(()=>[he,t("div",ue,[t("div",_e,[t("div",{class:"img",style:C({backgroundImage:"url("+n.modalData.image+")"})},null,4)]),t("div",me,[t("div",pe,a(n.modalData.title),1),t("div",fe,a(n.modalData.description),1),t("div",be,"$"+a(n.modalData.price),1),t("div",ve,[t("a",{href:"#",class:"btn btn-outline-theme",onClick:e[2]||(e[2]=s=>r.deductModalQty(s))},ye),t("input",{type:"text",class:"form-control w-50px fw-bold mx-2 bg-inverse bg-opacity-15 border-0 text-center",name:"qty",value:n.modalQuantity},null,8,xe),t("a",{href:"#",class:"btn btn-outline-theme",onClick:e[3]||(e[3]=s=>r.addModalQty(s))},Se)]),n.modalData.options?(d(),c(m,{key:0},[Ce,n.modalData.options.size?(d(),c("div",we,[De,t("div",Te,[(d(!0),c(m,null,b(n.modalData.options.size,(s,l)=>(d(),c("div",ze,[w(t("input",{type:"radio",id:"size["+l+"]",name:"size",class:"option-input","onUpdate:modelValue":e[4]||(e[4]=S=>n.modalSelectedSize=S),value:s.text},null,8,He),[[F,n.modalSelectedSize]]),t("label",{class:"option-label",for:"size["+l+"]"},[t("span",Oe,a(s.text),1),t("span",Me,"+"+a(s.price),1)],8,Ne)]))),256))])])):f("",!0),n.modalData.options.addon?(d(),c("div",Qe,[Fe,t("div",qe,[(d(!0),c(m,null,b(n.modalData.options.addon,(s,l)=>(d(),c("div",Ie,[w(t("input",{type:"checkbox",name:"addon["+l+"]",value:s.text,"onUpdate:modelValue":e[5]||(e[5]=S=>n.modalSelectedAddon=S),class:"option-input",id:"addon["+l+"]"},null,8,Ae),[[q,n.modalSelectedAddon]]),t("label",{class:"option-label",for:"addon["+l+"]"},[t("span",Be,a(s.text),1),t("span",Ve,"+"+a(s.price),1)],8,Pe)]))),256))])])):f("",!0)],64)):f("",!0),je,Ue])])]),_:1})]),_:1})):f("",!0)],32)])])],512)],64)}const Ye=z(P,[["render",Re]]);export{Ye as default};
