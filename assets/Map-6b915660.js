import{B as V,C as A,o as T,s as B,d as g,q as L,e as G,l as ce,p as ue,F as pe,m as Q,h as q,a6 as F,i as u,a7 as E,x as w,W as K,a8 as N,V as ee,a9 as y,k as I,aa as te,ab as x,_ as he,u as ve,S as me,r as O,c as ge,b as m,w as b,f as S}from"./index-bb9ec461.js";import{h as fe}from"./Highlightjs-4aa119ca.js";import{n as ye}from"./NavScrollTo-785b6f7f.js";import{a as W}from"./axios-a342f982.js";import{j as _e}from"./jsvectormap.min-cb555efa.js";let R=Symbol("map"),z=Symbol("api"),oe=Symbol("marker"),ke=Symbol("markerCluster"),P=Symbol("CustomMarker"),re=Symbol("mapTilesLoaded"),ie="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");var be=function o(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r;if(Array.isArray(e)){var i=e.length;if(i!=t.length)return!1;for(r=i;r--!==0;)if(!o(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();var l=Object.keys(e);if(i=l.length,i!==Object.keys(t).length)return!1;for(r=i;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,l[r]))return!1;for(r=i;r--!==0;)if(i=l[r],!o(e[i],t[i]))return!1;return!0}return e!==e&&t!==t};class C{constructor({apiKey:e,channel:t,client:r,id:i="__googleMapsScriptId",libraries:l=[],language:d,region:c,version:v,mapIds:p,nonce:n,retries:a=3,url:s="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.loading=this.done=!1,this.errors=[],this.version=v,this.apiKey=e,this.channel=t,this.client=r,this.id=i||"__googleMapsScriptId",this.libraries=l,this.language=d,this.region=c,this.mapIds=p,this.nonce=n,this.retries=a,this.url=s,C.instance){if(!be(this.options,C.instance.options))throw Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(C.instance.options)}`);return C.instance}C.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),0<this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),e}deleteScript(){let e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(r=>{r?t(r.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))this.callback();else{var e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}}reset(){this.deleteScript(),this.loading=this.done=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){this.errors.push(e),this.errors.length<=this.retries?(e=this.errors.length*Math.pow(2,this.errors.length),console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)):(this.onerrorEvent=e,this.callback())}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){this.resetIfRetryingFailed(),this.done?this.callback():window.google&&window.google.maps&&window.google.maps.version?(console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback()):this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}function Ce(o){return class extends o.OverlayView{constructor(e){super();let{element:t,...r}=e;this.element=t,this.opts=r,this.opts.map&&this.setMap(this.opts.map)}getPosition(){return this.opts.position?this.opts.position instanceof o.LatLng?this.opts.position:new o.LatLng(this.opts.position):null}getVisible(){if(!this.element)return!1;let e=this.element;return e.style.display!=="none"&&e.style.visibility!=="hidden"&&(e.style.opacity===""||.01<Number(e.style.opacity))}onAdd(){if(this.element){var e=this.getPanes();e&&e.overlayMouseTarget.appendChild(this.element)}}draw(){if(this.element){var e=this.getProjection().fromLatLngToDivPixel(this.getPosition());if(e){this.element.style.position="absolute";let r=this.element.offsetHeight;var t=this.element.offsetWidth;switch(this.opts.anchorPoint){case"TOP_CENTER":t=e.x-t/2,e=e.y;break;case"BOTTOM_CENTER":t=e.x-t/2,e=e.y-r;break;case"LEFT_CENTER":t=e.x,e=e.y-r/2;break;case"RIGHT_CENTER":t=e.x-t,e=e.y-r/2;break;case"TOP_LEFT":t=e.x,e=e.y;break;case"TOP_RIGHT":t=e.x-t,e=e.y;break;case"BOTTOM_LEFT":t=e.x,e=e.y-r;break;case"BOTTOM_RIGHT":t=e.x-t,e=e.y-r;break;default:t=e.x-t/2,e=e.y-r/2}this.element.style.left=t+"px",this.element.style.top=e+"px",this.element.style.transform=`translateX(${this.opts.offsetX||0}px) translateY(${this.opts.offsetY||0}px)`,this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString())}}}onRemove(){this.element&&this.element.remove()}setOptions(e){this.opts=e,this.draw()}}}let J,Z="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" ");var U=q({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:Z,setup(o,{emit:e}){let t=u(),r=u(!1),i=u(),l=u(),d=u(!1);E(R,i),E(z,l),E(re,d);let c=()=>{const n={...o};Object.keys(n).forEach(s=>{n[s]===void 0&&delete n[s]});var a=s=>{var h;return s?{position:(h=l.value)===null||h===void 0?void 0:h.ControlPosition[s]}:{}};return a={scaleControlOptions:o.scaleControlStyle?{style:o.scaleControlStyle}:{},panControlOptions:a(o.panControlPosition),zoomControlOptions:a(o.zoomControlPosition),rotateControlOptions:a(o.rotateControlPosition),streetViewControlOptions:a(o.streetViewControlPosition),fullscreenControlOptions:a(o.fullscreenControlPosition),disableDefaultUI:o.disableDefaultUi},{...n,...a}},v=w([l,i],([n,a])=>{n&&a&&(n.event.addListenerOnce(a,"tilesloaded",()=>{d.value=!0}),setTimeout(v,0))},{immediate:!0}),p=n=>{l.value=x(n.maps),i.value=x(new n.maps.Map(t.value,c())),n=Ce(l.value),l.value[P]=n,Z.forEach(a=>{var s;(s=i.value)===null||s===void 0||s.addListener(a,h=>e(a,h))}),r.value=!0,n=Object.keys(o).filter(a=>!"apiPromise apiKey version libraries region language center zoom".split(" ").includes(a)).map(a=>ee(o,a)),w([()=>o.center,()=>o.zoom,...n],([a,s],[h,f])=>{var _,k,j;const{center:et,zoom:tt,...de}=c();(_=i.value)===null||_===void 0||_.setOptions(de),s!==void 0&&s!==f&&((k=i.value)===null||k===void 0||k.setZoom(s)),s=!h||a.lng!==h.lng||a.lat!==h.lat,a&&s&&((j=i.value)===null||j===void 0||j.panTo(a))})};return K(()=>{if(o.apiPromise&&o.apiPromise instanceof Promise)o.apiPromise.then(p);else{try{const{apiKey:n,region:a,version:s,language:h,libraries:f}=o;J=new C({apiKey:n,region:a,version:s,language:h,libraries:f})}catch(n){console.error(n)}J.load().then(p)}}),N(()=>{var n;d.value=!1,i.value&&((n=l.value)===null||n===void 0||n.event.clearInstanceListeners(i.value))}),{mapRef:t,ready:r,map:i,api:l,mapTilesLoaded:d}}});function D(o,e){if(e===void 0&&(e={}),e=e.insertAt,o&&typeof document<"u"){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",e==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o))}}D(`
.mapdiv[data-v-177d06e3] {
  width: 100%;
  height: 100%;
}
`);let we=F();V("data-v-177d06e3");let Se={ref:"mapRef",class:"mapdiv"};A();let Oe=we(o=>(T(),B("div",null,[g("div",Se,null,512),L(o.$slots,"default",{ready:o.ready,map:o.map,api:o.api,mapTilesLoaded:o.mapTilesLoaded},void 0,!0)])));U.render=Oe;U.__scopeId="data-v-177d06e3";var ne=function o(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r;if(Array.isArray(e)){var i=e.length;if(i!=t.length)return!1;for(r=i;r--!==0;)if(!o(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();var l=Object.keys(e);if(i=l.length,i!==Object.keys(t).length)return!1;for(r=i;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,l[r]))return!1;for(r=i;r--!==0;)if(i=l[r],!o(e[i],t[i]))return!1;return!0}return e!==e&&t!==t};let ae=(o,e,t,r)=>{const i=u(),l=y(R,u()),d=y(z,u()),c=y(ke,u()),v=I(()=>!!(c.value&&d.value&&(i.value instanceof d.value.Marker||i.value instanceof d.value[P])));return w([l,t],(p,[n,a])=>{var s,h,f;p=!ne(t.value,a)||l.value!==n,l.value&&d.value&&p&&(i.value?(i.value.setOptions(t.value),v.value&&((s=c.value)===null||s===void 0||s.removeMarker(i.value),(h=c.value)===null||h===void 0||h.addMarker(i.value))):(i.value=o==="Marker"?x(new d.value[o](t.value)):o===P?x(new d.value[o](t.value)):x(new d.value[o]({...t.value,map:l.value})),v.value?(f=c.value)===null||f===void 0||f.addMarker(i.value):i.value.setMap(l.value),e.forEach(_=>{var k;(k=i.value)===null||k===void 0||k.addListener(_,j=>r(_,j))})))},{immediate:!0}),N(()=>{var p,n;i.value&&((p=d.value)===null||p===void 0||p.event.clearInstanceListeners(i.value),v.value?(n=c.value)===null||n===void 0||n.removeMarker(i.value):i.value.setMap(null))}),i},X="animation_changed click dblclick rightclick dragstart dragend drag mouseover mousedown mouseout mouseup draggable_changed clickable_changed contextmenu cursor_changed flat_changed rightclick zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" ");var xe=q({name:"Marker",props:{options:{type:Object,required:!0}},emits:X,setup(o,{emit:e,expose:t,slots:r}){return o=ee(o,"options"),e=ae("Marker",X,o,e),E(oe,e),t({marker:e}),()=>{var i;return(i=r.default)===null||i===void 0?void 0:i.call(r)}}});ie.concat(["bounds_changed"]);ie.concat(["center_changed","radius_changed"]);var je=q({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(o,{emit:e}){let t=u(null),r=y(R,u()),i=y(z,u()),l=y(re,u(!1)),d=u(!1),c=w([l,i,t],([n,a,s])=>{a&&n&&s&&(v(o.position),d.value=!0,e("content:loaded"),setTimeout(c,0))},{immediate:!0}),v=n=>{r.value&&i.value&&t.value&&r.value.controls[i.value.ControlPosition[n]].push(t.value)},p=n=>{if(r.value&&i.value){let a=null;n=i.value.ControlPosition[n],r.value.controls[n].forEach((s,h)=>{s===t.value&&(a=h)}),a!==null&&r.value.controls[n].removeAt(a)}};return N(()=>p(o.position)),w(()=>o.position,(n,a)=>{p(a),v(n)}),w(()=>o.index,n=>{n&&t.value&&(t.value.index=o.index)}),{controlRef:t,showContent:d}}});let Me={ref:"controlRef"};je.render=function(o){return T(),B(pe,null,[G(`
    v-show must be used instead of v-if otherwise there
    would be no rendered content pushed to the map controls
  `),ce(g("div",Me,[L(o.$slots,"default")],512),[[ue,o.showContent]])],2112)};let Y="closeclick content_changed domready position_changed visible zindex_changed".split(" ");var le=q({inheritAttrs:!1,props:{options:{type:Object,default:()=>({})}},emits:Y,setup(o,{slots:e,emit:t}){let r=u(),i=u(),l=y(R,u()),d=y(z,u()),c=y(oe,u()),v,p=I(()=>{var n;return(n=e.default)===null||n===void 0?void 0:n.call(e).some(a=>a.type!==te)});return K(()=>{w([l,()=>o.options],([,n],[a,s])=>{a=!ne(n,s)||l.value!==a,l.value&&d.value&&a&&(r.value?(r.value.setOptions({...n,content:p.value?i.value:n.content}),c.value||r.value.open({map:l.value})):(r.value=x(new d.value.InfoWindow({...n,content:p.value?i.value:n.content})),c.value?v=c.value.addListener("click",()=>{r.value&&r.value.open({map:l.value,anchor:c.value})}):r.value.open({map:l.value}),Y.forEach(h=>{var f;(f=r.value)===null||f===void 0||f.addListener(h,_=>t(h,_))})))},{immediate:!0})}),N(()=>{var n;v&&v.remove(),r.value&&((n=d.value)===null||n===void 0||n.event.clearInstanceListeners(r.value),r.value.close())}),{infoWindow:r,infoWindowRef:i,hasSlotContent:p}}});D(`
.info-window-wrapper[data-v-5b373d6e] {
  display: none;
}
.mapdiv .info-window-wrapper[data-v-5b373d6e] {
  display: inline-block;
}
`);let Te=F();V("data-v-5b373d6e");let qe={key:0,class:"info-window-wrapper"};A();let Ee=Te(o=>o.hasSlotContent?(T(),B("div",qe,[g("div",Q({ref:"infoWindowRef"},o.$attrs),[L(o.$slots,"default",{},void 0,!0)],16)])):G("v-if",!0));le.render=Ee;le.__scopeId="data-v-5b373d6e";var $,H=$||($={});H.CLUSTERING_BEGIN="clusteringbegin";H.CLUSTERING_END="clusteringend";H.CLUSTER_CLICK="click";Object.values($);var se=q({inheritAttrs:!1,props:{options:{type:Object,required:!0}},setup(o,{slots:e,emit:t}){let r=u(),i=u(),l=I(()=>{var c;return(c=e.default)===null||c===void 0?void 0:c.call(e).some(v=>v.type!==te)}),d=I(()=>({...o.options,element:r.value}));return K(()=>{i=ae(P,[],d,t)}),{customMarkerRef:r,customMarker:i,hasSlotContent:l}}});D(`
.custom-marker-wrapper[data-v-b9d5ec8a] {
  display: none;
}
.mapdiv .custom-marker-wrapper[data-v-b9d5ec8a] {
  display: inline-block;
}
`);let Ie=F();V("data-v-b9d5ec8a");let Pe={key:0,class:"custom-marker-wrapper"};A();let Be=Ie(o=>o.hasSlotContent?(T(),B("div",Pe,[g("div",Q({ref:"customMarkerRef",style:{cursor:o.$attrs.onClick?"pointer":void 0}},o.$attrs),[L(o.$slots,"default",{},void 0,!0)],16)])):G("v-if",!0));se.render=Be;se.__scopeId="data-v-b9d5ec8a";const M=ve(),Le={data(){return{code1:"",code2:"",center:{lat:40.689247,lng:-74.044502}}},components:{highlightjs:fe,navScrollTo:ye,googleMap:U,googleMapMarker:xe},methods:{renderMap(){document.getElementById("map-container").innerHTML='<div id="map" style="height: 300px;"></div>';var o=[{name:"Egypt",coords:[26.8206,30.8025]},{name:"Russia",coords:[61.524,105.3188]},{name:"Canada",coords:[56.1304,-106.3468]},{name:"Greenland",coords:[71.7069,-42.6043]},{name:"Brazil",coords:[-14.235,-51.9253]}];new _e({selector:"#map",map:"world",zoomButtons:!0,normalizeFunction:"polynomial",hoverOpacity:.5,hoverColor:!1,zoomOnScroll:!1,series:{regions:[{normalizeFunction:"polynomial"}]},labels:{markers:{render:e=>e.name}},focusOn:{x:.5,y:.5,scale:1},markers:o,markerStyle:{initial:{fill:M.color.theme,stroke:"none",r:5},hover:{fill:M.color.theme}},markerLabelStyle:{initial:{fontFamily:M.font.bodyFontFamily,fontSize:"12px",fill:"rgba("+M.color.inverseRgb+", .75)"}},regionStyle:{initial:{fill:M.color.inverse,fillOpacity:.25,stroke:"none",strokeWidth:.4,strokeOpacity:1},hover:{fillOpacity:.5}},backgroundColor:"transparent"})}},mounted(){this.renderMap(),W.get("/assets/data/map/code-1.json").then(o=>{this.code1=o.data}),W.get("/assets/data/map/code-2.json").then(o=>{this.code2=o.data}),new me(document.body,{target:"#sidebar-bootstrap",offset:200})},created(){this.emitter.on("theme-reload",o=>{this.renderComponent=!1,this.$nextTick(()=>{this.renderComponent=!0,setTimeout(()=>{this.renderMap()},50)})})}},Ne={class:"container"},Re={class:"row justify-content-center"},ze={class:"col-xl-10"},$e={class:"row"},Ve={class:"col-xl-9"},Ae=m("h1",{class:"page-header"},[S(" Map "),m("small",null,"page header description goes here...")],-1),Ge=m("hr",{class:"mb-4"},null,-1),Fe={id:"jsvectormap",class:"mb-5"},Ke=m("h4",null,"Jsvectormap",-1),Ue=m("p",null,[S("Jsvectormap is a lightweight javascript library for creating interactive maps and pretty data visualization. Please read the "),m("a",{href:"https://github.com/themustafaomar/jsvectormap",target:"_blank"},"official documentation"),S(" for the full list of options.")],-1),De=m("div",{id:"map-container"},null,-1),He={id:"vue3GoogleMap",class:"mb-5"},We=m("h4",null,"Vue3 Google Map",-1),Je=m("p",null,[S("Vue3 Google Map offers a set of composable components for easy use of Google Maps in your Vue 3 projects. Please read the "),m("a",{href:"https://vue3-google-map.netlify.app/",target:"_blank"},"official documentation"),S(" for the full list of options.")],-1),Ze={class:"col-xl-3"},Xe={id:"sidebar-bootstrap",class:"navbar navbar-sticky d-none d-xl-block"},Ye={class:"nav"};function Qe(o,e,t,r,i,l){const d=O("card-body"),c=O("highlightjs"),v=O("card"),p=O("google-map-marker"),n=O("google-map"),a=O("nav-scroll-to");return T(),ge("div",Ne,[m("div",Re,[m("div",ze,[m("div",$e,[m("div",Ve,[Ae,Ge,m("div",Fe,[Ke,Ue,g(v,null,{default:b(()=>[g(d,null,{default:b(()=>[De]),_:1}),g(c,{code:i.code1},null,8,["code"])]),_:1})]),m("div",He,[We,Je,g(v,null,{default:b(()=>[g(d,null,{default:b(()=>[g(n,{"api-key":"",class:"h-300px w-100",center:i.center,zoom:15},{default:b(()=>[g(p,{options:{position:i.center}},null,8,["options"])]),_:1},8,["center"])]),_:1}),g(c,{code:i.code2},null,8,["code"])]),_:1})])]),m("div",Ze,[m("nav",Xe,[m("nav",Ye,[g(a,{class:"nav-link",target:"#jsvectormap","data-toggle":"scroll-to"},{default:b(()=>[S("Jsvectormap")]),_:1}),g(a,{class:"nav-link",target:"#vue3GoogleMap","data-toggle":"scroll-to"},{default:b(()=>[S("Vue3 Google Map")]),_:1})])])])])])])])}const lt=he(Le,[["render",Qe]]);export{lt as default};
