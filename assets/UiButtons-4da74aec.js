import{h as r}from"./Highlightjs-4aa119ca.js";import{n as _}from"./NavScrollTo-785b6f7f.js";import{a as i}from"./axios-a342f982.js";import{_ as h,u as p,S as m,r as d,o as y,c as g,b as t,d as o,w as n,H as f,f as e}from"./index-bb9ec461.js";p();const v={data(){return{code1:"",code2:"",code3:"",code4:"",code5:"",code6:"",code7:"",code8:"",code9:"",code10:"",code11:""}},components:{highlightjs:r,navScrollTo:_},mounted(){i.get("/assets/data/ui/buttons-code-1.json").then(s=>{this.code1=s.data}),i.get("/assets/data/ui/buttons-code-2.json").then(s=>{this.code2=s.data}),i.get("/assets/data/ui/buttons-code-3.json").then(s=>{this.code3=s.data}),i.get("/assets/data/ui/buttons-code-4.json").then(s=>{this.code4=s.data}),i.get("/assets/data/ui/buttons-code-5.json").then(s=>{this.code5=s.data}),i.get("/assets/data/ui/buttons-code-6.json").then(s=>{this.code6=s.data}),i.get("/assets/data/ui/buttons-code-7.json").then(s=>{this.code7=s.data}),i.get("/assets/data/ui/buttons-code-8.json").then(s=>{this.code8=s.data}),new m(document.body,{target:"#sidebar-bootstrap",offset:200})}},w={class:"container"},S={class:"row justify-content-center"},k={class:"col-xl-10"},B={class:"row"},x={class:"col-xl-9"},T=f('<ul class="breadcrumb"><li class="breadcrumb-item"><a href="#">UI KITS</a></li><li class="breadcrumb-item active">BUTTONS</li></ul><h1 class="page-header"> Buttons <small>page header description goes here...</small></h1><hr class="mb-4">',3),L={id:"classes",class:"mb-5"},j=t("h4",null,"Classes",-1),z=t("p",null,[e(" Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control. Please read the "),t("a",{href:"https://getbootstrap.com/docs/5.3/components/buttons/",target:"_blank"},"official Bootstrap documentation"),e(" for the full list of options. ")],-1),G=t("button",{type:"button",class:"btn btn-theme"},"Theme",-1),I=t("hr",null,null,-1),P=t("button",{type:"button",class:"btn btn-default mb-1 me-1"},"Default",-1),A=t("button",{type:"button",class:"btn btn-secondary mb-1 me-1"},"Secondary",-1),D=t("button",{type:"button",class:"btn btn-light mb-1 me-1"},"Light",-1),V=t("button",{type:"button",class:"btn btn-dark mb-1 me-1"},"Dark",-1),M=t("button",{type:"button",class:"btn btn-info mb-1 me-1"},"Info",-1),N=t("button",{type:"button",class:"btn btn-primary mb-1 me-1"},"Primary",-1),C=t("button",{type:"button",class:"btn btn-purple mb-1 me-1"},"Purple",-1),E=t("button",{type:"button",class:"btn btn-indigo mb-1 me-1"},"Indigo",-1),R=t("button",{type:"button",class:"btn btn-link mb-1"},"Link",-1),U=t("span",{class:"d-lg-inline d-none"},[t("br")],-1),O=t("button",{type:"button",class:"btn btn-danger mb-1 me-1"},"Danger",-1),W=t("button",{type:"button",class:"btn btn-pink mb-1 me-1"},"Pink",-1),Y=t("button",{type:"button",class:"btn btn-warning mb-1 me-1"},"Warning",-1),F=t("button",{type:"button",class:"btn btn-yellow mb-1 me-1"},"Yellow",-1),H=t("button",{type:"button",class:"btn btn-lime mb-1 me-1"},"Lime",-1),J=t("button",{type:"button",class:"btn btn-green mb-1 me-1"},"Green",-1),K=t("button",{type:"button",class:"btn btn-success mb-1 me-1"},"Success",-1),q={id:"outlineButtons",class:"mb-5"},Q=t("h4",null,"Outline buttons",-1),X=t("p",null,[e(" In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the "),t("code",null,".btn-outline-*"),e(" ones to remove all background images and colors on any button. ")],-1),Z=t("button",{type:"button",class:"btn btn-outline-theme"},"Theme",-1),$=t("hr",null,null,-1),tt=t("button",{type:"button",class:"btn btn-outline-default mb-1 me-1"},"Default",-1),ot=t("button",{type:"button",class:"btn btn-outline-secondary mb-1 me-1"},"Secondary",-1),nt=t("button",{type:"button",class:"btn btn-outline-light mb-1 me-1"},"Light",-1),et=t("button",{type:"button",class:"btn btn-outline-dark mb-1 me-1"},"Dark",-1),st=t("button",{type:"button",class:"btn btn-outline-info mb-1 me-1"},"Info",-1),lt=t("button",{type:"button",class:"btn btn-outline-primary mb-1 me-1"},"Primary",-1),at=t("button",{type:"button",class:"btn btn-outline-purple mb-1 me-1"},"Purple",-1),bt=t("button",{type:"button",class:"btn btn-outline-indigo mb-1 me-1"},"Indigo",-1),ct=t("button",{type:"button",class:"btn btn-outline-link mb-1 me-1"},"Link",-1),ut=t("br",null,null,-1),it=t("button",{type:"button",class:"btn btn-outline-danger mb-1 me-1"},"Danger",-1),dt=t("button",{type:"button",class:"btn btn-outline-pink mb-1 me-1"},"Pink",-1),rt=t("button",{type:"button",class:"btn btn-outline-warning mb-1 me-1"},"Warning",-1),_t=t("button",{type:"button",class:"btn btn-outline-yellow mb-1 me-1"},"Yellow",-1),ht=t("button",{type:"button",class:"btn btn-outline-lime mb-1 me-1"},"Lime",-1),pt=t("button",{type:"button",class:"btn btn-outline-green mb-1 me-1"},"Green",-1),mt=t("button",{type:"button",class:"btn btn-outline-success mb-1 me-1"},"Success",-1),yt={id:"sizes",class:"mb-5"},gt=t("h4",null,"Sizes",-1),ft=t("p",null,[e(" Fancy larger or smaller buttons? Add "),t("code",null,".btn-lg"),e(" or "),t("code",null,".btn-sm"),e(" for additional sizes. ")],-1),vt=t("div",{class:"mb-4"},[t("div",{class:"mb-2 small text-inverse text-opacity-50"},[t("b",{class:"fw-bold"},"LARGE BUTTON")]),t("button",{type:"button",class:"btn btn-outline-theme btn-lg me-1"},"Large button"),t("button",{type:"button",class:"btn btn-outline-secondary btn-lg me-1"},"Large button")],-1),wt=t("div",{class:"mb-4"},[t("div",{class:"mb-2 small text-inverse text-opacity-50"},[t("b",{class:"fw-bold"},"SMALL BUTTON")]),t("button",{type:"button",class:"btn btn-outline-theme btn-sm me-1"},"Small button"),t("button",{type:"button",class:"btn btn-outline-secondary btn-sm me-1"},"Small button")],-1),St={id:"states",class:"mb-5"},kt=t("h4",null,"States",-1),Bt=t("p",null,[e(" Buttons will appear pressed when active or you can still force the same active appearance by adding "),t("code",null,".active"),e(" class. Make buttons look inactive by adding the "),t("code",null,"disabled"),e(" boolean attribute to any "),t("code",null,"<button>"),e(" element. ")],-1),xt=t("div",{class:"mb-4"},[t("div",{class:"mb-2 small text-inverse text-opacity-50"},[t("b",{class:"fw-bold"},"ACTIVE STATE")]),t("a",{href:"#",class:"btn btn-outline-theme btn-lg active me-1"},"Primary link"),t("a",{href:"#",class:"btn btn-outline-secondary btn-lg active me-1"},"Link")],-1),Tt=t("div",{class:"mb-4"},[t("div",{class:"mb-2 small text-inverse text-opacity-50"},[t("b",{class:"fw-bold"},"DISABLED STATE")]),t("button",{type:"button",class:"btn btn-lg btn-outline-theme me-1",disabled:""},"Primary button"),t("button",{type:"button",class:"btn btn-outline-secondary btn-lg me-1",disabled:""},"Button")],-1),Lt={id:"buttonGroup",class:"mb-5"},jt=t("h4",null,"Button group",-1),zt=t("p",null," Group a series of buttons together on a single line with the button group, and super-power them with JavaScript. ",-1),Gt=t("div",{class:"btn-group"},[t("button",{type:"button",class:"btn btn-outline-secondary"},"Left"),t("button",{type:"button",class:"btn btn-outline-secondary"},"Middle"),t("button",{type:"button",class:"btn btn-outline-secondary"},"Right")],-1),It={id:"groupSize",class:"mb-5"},Pt=t("h4",null,"Group size",-1),At=t("p",null,[e(" Instead of applying button sizing classes to every button in a group, just add "),t("code",null,".btn-group-*"),e(" to each "),t("code",null,".btn-group"),e(", including each one when nesting multiple groups. ")],-1),Dt=t("div",{class:"mb-3"},[t("div",{class:"btn-group btn-group-lg"},[t("button",{type:"button",class:"btn btn-outline-secondary"},"Left"),t("button",{type:"button",class:"btn btn-outline-secondary"},"Middle"),t("button",{type:"button",class:"btn btn-outline-secondary"},"Right")])],-1),Vt=t("div",{class:"mb-3"},[t("div",{class:"btn-group"},[t("button",{type:"button",class:"btn btn-outline-secondary"},"Left"),t("button",{type:"button",class:"btn btn-outline-secondary"},"Middle"),t("button",{type:"button",class:"btn btn-outline-secondary"},"Right")])],-1),Mt=t("div",{class:"mb-0"},[t("div",{class:"btn-group btn-group-sm"},[t("button",{type:"button",class:"btn btn-outline-secondary"},"Left"),t("button",{type:"button",class:"btn btn-outline-secondary"},"Middle"),t("button",{type:"button",class:"btn btn-outline-secondary"},"Right")])],-1),Nt={id:"verticalGroup",class:"mb-5"},Ct=t("h4",null,"Vertical Group",-1),Et=t("p",null," Make a set of buttons appear vertically stacked rather than horizontally. Split button dropdowns are not supported here. ",-1),Rt=t("div",{class:"btn-group-vertical"},[t("button",{type:"button",class:"btn btn-outline-secondary"},"Button"),t("button",{type:"button",class:"btn btn-outline-secondary"},"Button"),t("button",{type:"button",class:"btn btn-outline-secondary"},"Button")],-1),Ut={id:"buttonToolbar",class:"mb-5"},Ot=t("h4",null,"Button toolbar",-1),Wt=t("p",null," Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more. ",-1),Yt=t("div",{class:"btn-toolbar"},[t("div",{class:"btn-group me-2"},[t("button",{type:"button",class:"btn btn-outline-secondary"},"1"),t("button",{type:"button",class:"btn btn-outline-secondary"},"2"),t("button",{type:"button",class:"btn btn-outline-secondary"},"3"),t("button",{type:"button",class:"btn btn-outline-secondary"},"4")]),t("div",{class:"btn-group me-2"},[t("button",{type:"button",class:"btn btn-outline-secondary"},"5"),t("button",{type:"button",class:"btn btn-outline-secondary"},"6"),t("button",{type:"button",class:"btn btn-outline-secondary"},"7")]),t("div",{class:"btn-group"},[t("button",{type:"button",class:"btn btn-outline-secondary"},"8")])],-1),Ft={class:"col-xl-3"},Ht={id:"sidebar-bootstrap",class:"navbar navbar-sticky d-none d-xl-block"},Jt={class:"nav"};function Kt(s,qt,Qt,Xt,l,Zt){const a=d("card-body"),b=d("highlightjs"),c=d("card"),u=d("nav-scroll-to");return y(),g("div",w,[t("div",S,[t("div",k,[t("div",B,[t("div",x,[T,t("div",L,[j,z,o(c,null,{default:n(()=>[o(a,null,{default:n(()=>[G,I,P,A,D,V,M,N,C,E,R,U,O,W,Y,F,H,J,K]),_:1}),o(b,{code:l.code1},null,8,["code"])]),_:1})]),t("div",q,[Q,X,o(c,null,{default:n(()=>[o(a,null,{default:n(()=>[Z,$,tt,ot,nt,et,st,lt,at,bt,ct,ut,it,dt,rt,_t,ht,pt,mt]),_:1}),o(b,{code:l.code2},null,8,["code"])]),_:1})]),t("div",yt,[gt,ft,o(c,null,{default:n(()=>[o(a,{class:"pb-0"},{default:n(()=>[vt,wt]),_:1}),o(b,{code:l.code3},null,8,["code"])]),_:1})]),t("div",St,[kt,Bt,o(c,null,{default:n(()=>[o(a,{class:"pb-0"},{default:n(()=>[xt,Tt]),_:1}),o(b,{code:l.code4},null,8,["code"])]),_:1})]),t("div",Lt,[jt,zt,o(c,null,{default:n(()=>[o(a,null,{default:n(()=>[Gt]),_:1}),o(b,{code:l.code5},null,8,["code"])]),_:1})]),t("div",It,[Pt,At,o(c,null,{default:n(()=>[o(a,null,{default:n(()=>[Dt,Vt,Mt]),_:1}),o(b,{code:l.code6},null,8,["code"])]),_:1})]),t("div",Nt,[Ct,Et,o(c,null,{default:n(()=>[o(a,null,{default:n(()=>[Rt]),_:1}),o(b,{code:l.code7},null,8,["code"])]),_:1})]),t("div",Ut,[Ot,Wt,o(c,null,{default:n(()=>[o(a,null,{default:n(()=>[Yt]),_:1}),o(b,{code:l.code8},null,8,["code"])]),_:1})])]),t("div",Ft,[t("nav",Ht,[t("nav",Jt,[o(u,{target:"#classes","data-toggle":"scroll-to"},{default:n(()=>[e("Classes")]),_:1}),o(u,{target:"#outlineButtons","data-toggle":"scroll-to"},{default:n(()=>[e("Outline buttons")]),_:1}),o(u,{target:"#sizes","data-toggle":"scroll-to"},{default:n(()=>[e("Sizes")]),_:1}),o(u,{target:"#states","data-toggle":"scroll-to"},{default:n(()=>[e("States")]),_:1}),o(u,{target:"#buttonGroup","data-toggle":"scroll-to"},{default:n(()=>[e("Button group")]),_:1}),o(u,{target:"#groupSize","data-toggle":"scroll-to"},{default:n(()=>[e("Group size")]),_:1}),o(u,{target:"#verticalGroup","data-toggle":"scroll-to"},{default:n(()=>[e("Vertical group")]),_:1}),o(u,{target:"#buttonToolbar","data-toggle":"scroll-to"},{default:n(()=>[e("Button toolbar")]),_:1})])])])])])])])}const eo=h(v,[["render",Kt]]);export{eo as default};
