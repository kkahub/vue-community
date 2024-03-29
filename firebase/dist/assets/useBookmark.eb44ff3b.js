import{L as se,bu as le,M as ie,bv as re,bw as B,bx as ue,P as ce,V as c,W as b,az as de,R as ve,by as fe,bz as me,bA as he,X as ge,bB as ke,Z as y,a0 as E,bC as L,I as A,bD as be,K as H,C as q,bE as ye,h as D,bp as pe,a5 as Te,bF as N,a3 as Se,J as we,bG as Ce,o as I,d as Pe,j as xe,x as Oe,a9 as Be,c as Ee,t as M,i as Le,q as Ae,a as He,e as qe,F as De,s as V,u as j,bH as _}from"./index.8c00725b.js";import{h as Ne,r as Ie,d as Me,e as Ve,f as je,i as _e}from"./post.9c5d6995.js";var Re=se({name:"QTooltip",inheritAttrs:!1,props:{...le,...ie,...re,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:B},self:{type:String,default:"top middle",validator:B},offset:{type:Array,default:()=>[14,14],validator:ue},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...ce],setup(e,{slots:d,emit:v,attrs:l}){let n,t;const s=Te(),{proxy:{$q:a}}=s,i=c(null),u=c(!1),m=b(()=>N(e.anchor,a.lang.rtl)),R=b(()=>N(e.self,a.lang.rtl)),W=b(()=>e.persistent!==!0),{registerTick:z,removeTick:F}=de(),{registerTimeout:k}=ve(),{transitionProps:Q,transitionStyle:$}=fe(e),{localScrollTarget:S,changeScrollEvent:G,unconfigureScrollTarget:J}=me(e,x),{anchorEl:r,canShow:K,anchorEvents:h}=he({showing:u,configureAnchorEl:ae}),{show:U,hide:p}=ge({showing:u,canShow:K,handleShow:Z,handleHide:Y,hideOnRouteChange:W,processOnMount:!0});Object.assign(h,{delayShow:ee,delayHide:te});const{showPortal:w,hidePortal:C,renderPortal:X}=ke(s,i,ne,"tooltip");if(a.platform.is.mobile===!0){const o={anchorEl:r,innerRef:i,onClickOutside(f){return p(f),f.target.classList.contains("q-dialog__backdrop")&&we(f),!0}},T=b(()=>e.modelValue===null&&e.persistent!==!0&&u.value===!0);y(T,f=>{(f===!0?Ce:L)(o)}),E(()=>{L(o)})}function Z(o){w(),z(()=>{t=new MutationObserver(()=>g()),t.observe(i.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),g(),x()}),n===void 0&&(n=y(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,g)),k(()=>{w(!0),v("show",o)},e.transitionDuration)}function Y(o){F(),C(),P(),k(()=>{C(!0),v("hide",o)},e.transitionDuration)}function P(){t!==void 0&&(t.disconnect(),t=void 0),n!==void 0&&(n(),n=void 0),J(),A(h,"tooltipTemp")}function g(){be({targetEl:i.value,offset:e.offset,anchorEl:r.value,anchorOrigin:m.value,selfOrigin:R.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ee(o){if(a.platform.is.mobile===!0){H(),document.body.classList.add("non-selectable");const T=r.value,f=["touchmove","touchcancel","touchend","click"].map(O=>[T,O,"delayHide","passiveCapture"]);q(h,"tooltipTemp",f)}k(()=>{U(o)},e.delay)}function te(o){a.platform.is.mobile===!0&&(A(h,"tooltipTemp"),H(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),k(()=>{p(o)},e.hideDelay)}function ae(){if(e.noParentEvent===!0||r.value===null)return;const o=a.platform.is.mobile===!0?[[r.value,"touchstart","delayShow","passive"]]:[[r.value,"mouseenter","delayShow","passive"],[r.value,"mouseleave","delayHide","passive"]];q(h,"anchor",o)}function x(){if(r.value!==null||e.scrollTarget!==void 0){S.value=ye(r.value,e.scrollTarget);const o=e.noParentEvent===!0?g:p;G(S.value,o)}}function oe(){return u.value===!0?D("div",{...l,ref:i,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",l.class],style:[l.style,$.value],role:"tooltip"},Se(d.default)):null}function ne(){return D(pe,Q.value,oe)}return E(P),Object.assign(s.proxy,{updatePosition:g}),X}});const We={class:"text-grey q-ml-xs text-body2"},Qe={__name:"PostIcon",props:{name:{type:String},label:{type:[String,Number]},tooltip:{type:String}},setup(e){return(d,v)=>(I(),Pe(De,null,[xe(Be,Oe({name:e.name,color:"grey",size:"xs"},d.$attrs),null,16,["name"]),Ee("span",We,M(e.label),1),e.tooltip?(I(),Le(Re,{key:0,offset:[0,4]},{default:Ae(()=>[He(M(e.tooltip),1)]),_:1})):qe("",!0)],64))}},$e=(e,d)=>{const{initialCount:v=0}=d||{},{uid:l,isAuthenticated:n}=V(j()),t=c(!1),s=c(v),a=c(e),i=async()=>{if(n.value===!1){t.value=!1;return}t.value=await Ne(l.value,a.value)},u=async()=>{if(n.value===!1){alert("\uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9\uAC00\uB2A5\uD569\uB2C8\uB2E4.");return}t.value?(await Ie(l.value,a.value),s.value--):(await Me(l.value,a.value),s.value++),t.value=!t.value};return y(n,()=>i(),{immediate:!0}),{isLike:t,likeCount:_(s),updateLikeCount:m=>s.value=m,toggleLike:u}},Ge=(e,d)=>{const{initialCount:v}=d||{},{uid:l,isAuthenticated:n}=V(j()),t=c(!1),s=c(v),a=c(e),i=async()=>{if(n.value===!1){t.value=!1;return}t.value=await Ve(l.value,a.value)},u=async()=>{if(n.value===!1){alert("\uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9\uAC00\uB2A5\uD569\uB2C8\uB2E4.");return}t.value?(await je(l.value,a.value),s.value--):(await _e(l.value,a.value),s.value++),t.value=!t.value};return y(n,()=>i(),{immediate:!0}),{isBookmark:t,bookmarkCount:_(s),updateBookmarkCount:m=>s.value=m,toggleBookmark:u}};export{Qe as _,Ge as a,$e as u};
