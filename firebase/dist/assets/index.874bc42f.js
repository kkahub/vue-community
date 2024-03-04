const cI=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),up={},uI="/",xe=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${uI}${r}`,r in up)return;up[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":cI,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zh(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Ve={},Fi=[],Bt=()=>{},hI=()=>!1,$l=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ed=t=>t.startsWith("onUpdate:"),nt=Object.assign,td=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},dI=Object.prototype.hasOwnProperty,be=(t,e)=>dI.call(t,e),se=Array.isArray,Ui=t=>Bl(t)==="[object Map]",D_=t=>Bl(t)==="[object Set]",de=t=>typeof t=="function",Ue=t=>typeof t=="string",ds=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",N_=t=>(Le(t)||de(t))&&de(t.then)&&de(t.catch),L_=Object.prototype.toString,Bl=t=>L_.call(t),fI=t=>Bl(t).slice(8,-1),V_=t=>Bl(t)==="[object Object]",nd=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Va=Zh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ql=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},pI=/-(\w)/g,Dn=ql(t=>t.replace(pI,(e,n)=>n?n.toUpperCase():"")),mI=/\B([A-Z])/g,mi=ql(t=>t.replace(mI,"-$1").toLowerCase()),jl=ql(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yc=ql(t=>t?`on${jl(t)}`:""),Tr=(t,e)=>!Object.is(t,e),Jc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Xa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},gI=t=>{const e=parseFloat(t);return isNaN(e)?t:e},_I=t=>{const e=Ue(t)?Number(t):NaN;return isNaN(e)?t:e};let hp;const M_=()=>hp||(hp=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function No(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Ue(r)?EI(r):No(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Ue(t)||Le(t))return t}const yI=/;(?![^(]*\))/g,vI=/:([^]+)/,wI=/\/\*[^]*?\*\//g;function EI(t){const e={};return t.replace(wI,"").split(yI).forEach(n=>{if(n){const r=n.split(vI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function zl(t){let e="";if(Ue(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=zl(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function IU(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ue(e)&&(t.class=zl(e)),n&&(t.style=No(n)),t}const TI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",II=Zh(TI);function F_(t){return!!t||t===""}const bU=t=>Ue(t)?t:t==null?"":se(t)||Le(t)&&(t.toString===L_||!de(t.toString))?JSON.stringify(t,U_,2):String(t),U_=(t,e)=>e&&e.__v_isRef?U_(t,e.value):Ui(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[Xc(r,s)+" =>"]=i,n),{})}:D_(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Xc(n))}:ds(e)?Xc(e):Le(e)&&!se(e)&&!V_(e)?String(e):e,Xc=(t,e="")=>{var n;return ds(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ut;class $_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ut,!e&&Ut&&(this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ut;try{return Ut=this,e()}finally{Ut=n}}}on(){Ut=this}off(){Ut=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function B_(t){return new $_(t)}function bI(t,e=Ut){e&&e.active&&e.effects.push(t)}function rd(){return Ut}function q_(t){Ut&&Ut.cleanups.push(t)}let Qr;class id{constructor(e,n,r,i){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,bI(this,i)}get dirty(){if(this._dirtyLevel===1){gi();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(AI(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),_i()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=_r,n=Qr;try{return _r=!0,Qr=this,this._runnings++,dp(this),this.fn()}finally{fp(this),this._runnings--,Qr=n,_r=e}}stop(){var e;this.active&&(dp(this),fp(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function AI(t){return t.value}function dp(t){t._trackId++,t._depsLength=0}function fp(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)j_(t.deps[e],t);t.deps.length=t._depsLength}}function j_(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let _r=!0,Ku=0;const z_=[];function gi(){z_.push(_r),_r=!1}function _i(){const t=z_.pop();_r=t===void 0?!0:t}function sd(){Ku++}function od(){for(Ku--;!Ku&&Gu.length;)Gu.shift()()}function H_(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&j_(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Gu=[];function W_(t,e,n){sd();for(const r of t.keys())if(r._dirtyLevel<e&&t.get(r)===r._trackId){const i=r._dirtyLevel;r._dirtyLevel=e,i===0&&(r._shouldSchedule=!0,r.trigger())}K_(t),od()}function K_(t){for(const e of t.keys())e.scheduler&&e._shouldSchedule&&(!e._runnings||e.allowRecurse)&&t.get(e)===e._trackId&&(e._shouldSchedule=!1,Gu.push(e.scheduler))}const G_=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Za=new WeakMap,Yr=Symbol(""),Qu=Symbol("");function Mt(t,e,n){if(_r&&Qr){let r=Za.get(t);r||Za.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=G_(()=>r.delete(n))),H_(Qr,i)}}function Hn(t,e,n,r,i,s){const o=Za.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&se(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!ds(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":se(t)?nd(n)&&a.push(o.get("length")):(a.push(o.get(Yr)),Ui(t)&&a.push(o.get(Qu)));break;case"delete":se(t)||(a.push(o.get(Yr)),Ui(t)&&a.push(o.get(Qu)));break;case"set":Ui(t)&&a.push(o.get(Yr));break}sd();for(const l of a)l&&W_(l,2);od()}function RI(t,e){var n;return(n=Za.get(t))==null?void 0:n.get(e)}const SI=Zh("__proto__,__v_isRef,__isVue"),Q_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ds)),pp=CI();function CI(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=we(this);for(let s=0,o=this.length;s<o;s++)Mt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(we)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){gi(),sd();const r=we(this)[e].apply(this,n);return od(),_i(),r}}),t}function PI(t){const e=we(this);return Mt(e,"has",t),e.hasOwnProperty(t)}class Y_{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const i=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?qI:ey:s?Z_:X_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=se(e);if(!i){if(o&&be(pp,n))return Reflect.get(pp,n,r);if(n==="hasOwnProperty")return PI}const a=Reflect.get(e,n,r);return(ds(n)?Q_.has(n):SI(n))||(i||Mt(e,"get",n),s)?a:He(a)?o&&nd(n)?a:a.value:Le(a)?i?Wl(a):cn(a):a}}class J_ extends Y_{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(!this._shallow){const l=Ji(s);if(!el(r)&&!Ji(r)&&(s=we(s),r=we(r)),!se(e)&&He(s)&&!He(r))return l?!1:(s.value=r,!0)}const o=se(e)&&nd(n)?Number(n)<e.length:be(e,n),a=Reflect.set(e,n,r,i);return e===we(i)&&(o?Tr(r,s)&&Hn(e,"set",n,r):Hn(e,"add",n,r)),a}deleteProperty(e,n){const r=be(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&Hn(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!ds(n)||!Q_.has(n))&&Mt(e,"has",n),r}ownKeys(e){return Mt(e,"iterate",se(e)?"length":Yr),Reflect.ownKeys(e)}}class kI extends Y_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const xI=new J_,OI=new kI,DI=new J_(!0),ad=t=>t,Hl=t=>Reflect.getPrototypeOf(t);function ha(t,e,n=!1,r=!1){t=t.__v_raw;const i=we(t),s=we(e);n||(Tr(e,s)&&Mt(i,"get",e),Mt(i,"get",s));const{has:o}=Hl(i),a=r?ad:n?ud:to;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function da(t,e=!1){const n=this.__v_raw,r=we(n),i=we(t);return e||(Tr(t,i)&&Mt(r,"has",t),Mt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function fa(t,e=!1){return t=t.__v_raw,!e&&Mt(we(t),"iterate",Yr),Reflect.get(t,"size",t)}function mp(t){t=we(t);const e=we(this);return Hl(e).has.call(e,t)||(e.add(t),Hn(e,"add",t,t)),this}function gp(t,e){e=we(e);const n=we(this),{has:r,get:i}=Hl(n);let s=r.call(n,t);s||(t=we(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Tr(e,o)&&Hn(n,"set",t,e):Hn(n,"add",t,e),this}function _p(t){const e=we(this),{has:n,get:r}=Hl(e);let i=n.call(e,t);i||(t=we(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Hn(e,"delete",t,void 0),s}function yp(){const t=we(this),e=t.size!==0,n=t.clear();return e&&Hn(t,"clear",void 0,void 0),n}function pa(t,e){return function(r,i){const s=this,o=s.__v_raw,a=we(o),l=e?ad:t?ud:to;return!t&&Mt(a,"iterate",Yr),o.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function ma(t,e,n){return function(...r){const i=this.__v_raw,s=we(i),o=Ui(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?ad:e?ud:to;return!e&&Mt(s,"iterate",l?Qu:Yr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function er(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function NI(){const t={get(s){return ha(this,s)},get size(){return fa(this)},has:da,add:mp,set:gp,delete:_p,clear:yp,forEach:pa(!1,!1)},e={get(s){return ha(this,s,!1,!0)},get size(){return fa(this)},has:da,add:mp,set:gp,delete:_p,clear:yp,forEach:pa(!1,!0)},n={get(s){return ha(this,s,!0)},get size(){return fa(this,!0)},has(s){return da.call(this,s,!0)},add:er("add"),set:er("set"),delete:er("delete"),clear:er("clear"),forEach:pa(!0,!1)},r={get(s){return ha(this,s,!0,!0)},get size(){return fa(this,!0)},has(s){return da.call(this,s,!0)},add:er("add"),set:er("set"),delete:er("delete"),clear:er("clear"),forEach:pa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ma(s,!1,!1),n[s]=ma(s,!0,!1),e[s]=ma(s,!1,!0),r[s]=ma(s,!0,!0)}),[t,n,e,r]}const[LI,VI,MI,FI]=NI();function ld(t,e){const n=e?t?FI:MI:t?VI:LI;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(be(n,i)&&i in r?n:r,i,s)}const UI={get:ld(!1,!1)},$I={get:ld(!1,!0)},BI={get:ld(!0,!1)},X_=new WeakMap,Z_=new WeakMap,ey=new WeakMap,qI=new WeakMap;function jI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zI(t){return t.__v_skip||!Object.isExtensible(t)?0:jI(fI(t))}function cn(t){return Ji(t)?t:cd(t,!1,xI,UI,X_)}function ty(t){return cd(t,!1,DI,$I,Z_)}function Wl(t){return cd(t,!0,OI,BI,ey)}function cd(t,e,n,r,i){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=zI(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Wn(t){return Ji(t)?Wn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ji(t){return!!(t&&t.__v_isReadonly)}function el(t){return!!(t&&t.__v_isShallow)}function ny(t){return Wn(t)||Ji(t)}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function Cr(t){return Xa(t,"__v_skip",!0),t}const to=t=>Le(t)?cn(t):t,ud=t=>Le(t)?Wl(t):t;class ry{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new id(()=>e(this._value),()=>Fs(this,1),()=>this.dep&&K_(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=we(this);return(!e._cacheable||e.effect.dirty)&&Tr(e._value,e._value=e.effect.run())&&Fs(e,2),hd(e),e.effect._dirtyLevel>=1&&Fs(e,1),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function HI(t,e,n=!1){let r,i;const s=de(t);return s?(r=t,i=Bt):(r=t.get,i=t.set),new ry(r,i,s||!i,n)}function hd(t){_r&&Qr&&(t=we(t),H_(Qr,t.dep||(t.dep=G_(()=>t.dep=void 0,t instanceof ry?t:void 0))))}function Fs(t,e=2,n){t=we(t);const r=t.dep;r&&W_(r,e)}function He(t){return!!(t&&t.__v_isRef===!0)}function re(t){return iy(t,!1)}function tl(t){return iy(t,!0)}function iy(t,e){return He(t)?t:new WI(t,e)}class WI{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:we(e),this._value=n?e:to(e)}get value(){return hd(this),this._value}set value(e){const n=this.__v_isShallow||el(e)||Ji(e);e=n?e:we(e),Tr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:to(e),Fs(this,2))}}function Dt(t){return He(t)?t.value:t}const KI={get:(t,e,n)=>Dt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return He(i)&&!He(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function sy(t){return Wn(t)?t:new Proxy(t,KI)}class GI{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>hd(this),()=>Fs(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function QI(t){return new GI(t)}function YI(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=ay(t,n);return e}class JI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return RI(we(this._object),this._key)}}class XI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function oy(t,e,n){return He(t)?t:de(t)?new XI(t):Le(t)&&arguments.length>1?ay(t,e,n):re(t)}function ay(t,e,n){const r=t[e];return He(r)?r:new JI(t,e,n)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Lo(s,e,n)}return i}function Jt(t,e,n,r){if(de(t)){const s=yr(t,e,n,r);return s&&N_(s)&&s.catch(o=>{Lo(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Jt(t[s],e,n,r));return i}function Lo(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){yr(l,null,10,[t,o,a]);return}}ZI(t,n,i,r)}function ZI(t,e,n,r=!0){console.error(t)}let no=!1,Yu=!1;const Tt=[];let In=0;const $i=[];let or=null,Fr=0;const ly=Promise.resolve();let dd=null;function dn(t){const e=dd||ly;return t?e.then(this?t.bind(this):t):e}function eb(t){let e=In+1,n=Tt.length;for(;e<n;){const r=e+n>>>1,i=Tt[r],s=ro(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function Kl(t){(!Tt.length||!Tt.includes(t,no&&t.allowRecurse?In+1:In))&&(t.id==null?Tt.push(t):Tt.splice(eb(t.id),0,t),cy())}function cy(){!no&&!Yu&&(Yu=!0,dd=ly.then(hy))}function tb(t){const e=Tt.indexOf(t);e>In&&Tt.splice(e,1)}function nb(t){se(t)?$i.push(...t):(!or||!or.includes(t,t.allowRecurse?Fr+1:Fr))&&$i.push(t),cy()}function vp(t,e,n=no?In+1:0){for(;n<Tt.length;n++){const r=Tt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Tt.splice(n,1),n--,r()}}}function uy(t){if($i.length){const e=[...new Set($i)].sort((n,r)=>ro(n)-ro(r));if($i.length=0,or){or.push(...e);return}for(or=e,Fr=0;Fr<or.length;Fr++)or[Fr]();or=null,Fr=0}}const ro=t=>t.id==null?1/0:t.id,rb=(t,e)=>{const n=ro(t)-ro(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function hy(t){Yu=!1,no=!0,Tt.sort(rb);const e=Bt;try{for(In=0;In<Tt.length;In++){const n=Tt[In];n&&n.active!==!1&&yr(n,null,14)}}finally{In=0,Tt.length=0,uy(),no=!1,dd=null,(Tt.length||$i.length)&&hy()}}function ib(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ve;d&&(i=n.map(f=>Ue(f)?f.trim():f)),h&&(i=n.map(gI))}let a,l=r[a=Yc(e)]||r[a=Yc(Dn(e))];!l&&s&&(l=r[a=Yc(mi(e))]),l&&Jt(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Jt(c,t,6,i)}}function dy(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!de(t)){const l=c=>{const u=dy(c,e,!0);u&&(a=!0,nt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Le(t)&&r.set(t,null),null):(se(s)?s.forEach(l=>o[l]=null):nt(o,s),Le(t)&&r.set(t,o),o)}function Gl(t,e){return!t||!$l(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,mi(e))||be(t,e))}let tt=null,fy=null;function nl(t){const e=tt;return tt=t,fy=t&&t.type.__scopeId||null,e}function ze(t,e=tt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Dp(-1);const s=nl(e);let o;try{o=t(...i)}finally{nl(s),r._d&&Dp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Zc(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:v}=t;let g,w;const y=nl(t);try{if(n.shapeFlag&4){const I=i||r,A=I;g=Tn(u.call(A,I,h,s,f,d,p)),w=l}else{const I=e;g=Tn(I.length>1?I(s,{attrs:l,slots:a,emit:c}):I(s,null)),w=e.props?l:sb(l)}}catch(I){qs.length=0,Lo(I,t,1),g=ae(Xt)}let E=g;if(w&&v!==!1){const I=Object.keys(w),{shapeFlag:A}=E;I.length&&A&7&&(o&&I.some(ed)&&(w=ob(w,o)),E=Ir(E,w))}return n.dirs&&(E=Ir(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),g=E,nl(y),g}const sb=t=>{let e;for(const n in t)(n==="class"||n==="style"||$l(n))&&((e||(e={}))[n]=t[n]);return e},ob=(t,e)=>{const n={};for(const r in t)(!ed(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ab(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?wp(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Gl(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?wp(r,o,c):!0:!!o;return!1}function wp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Gl(n,s))return!0}return!1}function lb({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const fd="components";function py(t,e){return gy(fd,t,!0,e)||t}const my=Symbol.for("v-ndc");function cb(t){return Ue(t)?gy(fd,t,!1)||t:t||my}function gy(t,e,n=!0,r=!1){const i=tt||it;if(i){const s=i.type;if(t===fd){const a=rA(s,!1);if(a&&(a===e||a===Dn(e)||a===jl(Dn(e))))return s}const o=Ep(i[t]||s[t],e)||Ep(i.appContext[t],e);return!o&&r?s:o}}function Ep(t,e){return t&&(t[e]||t[Dn(e)]||t[jl(Dn(e))])}const ub=t=>t.__isSuspense;function hb(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):nb(t)}const db=Symbol.for("v-scx"),fb=()=>kt(db);function AU(t,e){return pd(t,null,e)}const ga={};function ke(t,e,n){return pd(t,e,n)}function pd(t,e,{immediate:n,deep:r,flush:i,once:s,onTrack:o,onTrigger:a}=Ve){if(e&&s){const C=e;e=(...V)=>{C(...V),A()}}const l=it,c=C=>r===!0?C:Br(C,r===!1?1:void 0);let u,h=!1,d=!1;if(He(t)?(u=()=>t.value,h=el(t)):Wn(t)?(u=()=>c(t),h=!0):se(t)?(d=!0,h=t.some(C=>Wn(C)||el(C)),u=()=>t.map(C=>{if(He(C))return C.value;if(Wn(C))return c(C);if(de(C))return yr(C,l,2)})):de(t)?e?u=()=>yr(t,l,2):u=()=>(f&&f(),Jt(t,l,3,[p])):u=Bt,e&&r){const C=u;u=()=>Br(C())}let f,p=C=>{f=E.onStop=()=>{yr(C,l,4),f=E.onStop=void 0}},v;if(Fo)if(p=Bt,e?n&&Jt(e,l,3,[u(),d?[]:void 0,p]):u(),i==="sync"){const C=fb();v=C.__watcherHandles||(C.__watcherHandles=[])}else return Bt;let g=d?new Array(t.length).fill(ga):ga;const w=()=>{if(!(!E.active||!E.dirty))if(e){const C=E.run();(r||h||(d?C.some((V,T)=>Tr(V,g[T])):Tr(C,g)))&&(f&&f(),Jt(e,l,3,[C,g===ga?void 0:d&&g[0]===ga?[]:g,p]),g=C)}else E.run()};w.allowRecurse=!!e;let y;i==="sync"?y=w:i==="post"?y=()=>Ot(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),y=()=>Kl(w));const E=new id(u,Bt,y),I=rd(),A=()=>{E.stop(),I&&td(I.effects,E)};return e?n?w():g=E.run():i==="post"?Ot(E.run.bind(E),l&&l.suspense):E.run(),v&&v.push(A),A}function pb(t,e,n){const r=this.proxy,i=Ue(t)?t.includes(".")?_y(r,t):()=>r[t]:t.bind(r,r);let s;de(e)?s=e:(s=e.handler,n=e);const o=Mo(this),a=pd(i,s.bind(r),n);return o(),a}function _y(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Br(t,e,n=0,r){if(!Le(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),He(t))Br(t.value,e,n,r);else if(se(t))for(let i=0;i<t.length;i++)Br(t[i],e,n,r);else if(D_(t)||Ui(t))t.forEach(i=>{Br(i,e,n,r)});else if(V_(t))for(const i in t)Br(t[i],e,n,r);return t}function Bi(t,e){if(tt===null)return t;const n=ec(tt)||tt.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,a,l=Ve]=e[i];s&&(de(s)&&(s={mounted:s,updated:s}),s.deep&&Br(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Dr(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(gi(),Jt(l,n,8,[t.el,a,t,e]),_i())}}const ar=Symbol("_leaveCb"),_a=Symbol("_enterCb");function yy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Nn(()=>{t.isMounted=!0}),At(()=>{t.isUnmounting=!0}),t}const Gt=[Function,Array],vy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},mb={name:"BaseTransition",props:vy,setup(t,{slots:e}){const n=Ge(),r=yy();let i;return()=>{const s=e.default&&md(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const v of s)if(v.type!==Xt){o=v;break}}const a=we(t),{mode:l}=a;if(r.isLeaving)return eu(o);const c=Tp(o);if(!c)return eu(o);const u=io(c,a,r,n);so(c,u);const h=n.subTree,d=h&&Tp(h);let f=!1;const{getTransitionKey:p}=c.type;if(p){const v=p();i===void 0?i=v:v!==i&&(i=v,f=!0)}if(d&&d.type!==Xt&&(!Ur(c,d)||f)){const v=io(d,a,r,n);if(so(d,v),l==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},eu(o);l==="in-out"&&c.type!==Xt&&(v.delayLeave=(g,w,y)=>{const E=wy(r,d);E[String(d.key)]=d,g[ar]=()=>{w(),g[ar]=void 0,delete u.delayedLeave},u.delayedLeave=y})}return o}}},gb=mb;function wy(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function io(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:v,onAppear:g,onAfterAppear:w,onAppearCancelled:y}=e,E=String(t.key),I=wy(n,t),A=(T,D)=>{T&&Jt(T,r,9,D)},C=(T,D)=>{const L=D[1];A(T,D),se(T)?T.every(z=>z.length<=1)&&L():T.length<=1&&L()},V={mode:s,persisted:o,beforeEnter(T){let D=a;if(!n.isMounted)if(i)D=v||a;else return;T[ar]&&T[ar](!0);const L=I[E];L&&Ur(t,L)&&L.el[ar]&&L.el[ar](),A(D,[T])},enter(T){let D=l,L=c,z=u;if(!n.isMounted)if(i)D=g||l,L=w||c,z=y||u;else return;let F=!1;const ie=T[_a]=H=>{F||(F=!0,H?A(z,[T]):A(L,[T]),V.delayedLeave&&V.delayedLeave(),T[_a]=void 0)};D?C(D,[T,ie]):ie()},leave(T,D){const L=String(t.key);if(T[_a]&&T[_a](!0),n.isUnmounting)return D();A(h,[T]);let z=!1;const F=T[ar]=ie=>{z||(z=!0,D(),ie?A(p,[T]):A(f,[T]),T[ar]=void 0,I[L]===t&&delete I[L])};I[L]=t,d?C(d,[T,F]):F()},clone(T){return io(T,e,n,r)}};return V}function eu(t){if(Vo(t))return t=Ir(t),t.children=null,t}function Tp(t){return Vo(t)?t.children?t.children[0]:void 0:t}function so(t,e){t.shapeFlag&6&&t.component?so(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function md(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===$t?(o.patchFlag&128&&i++,r=r.concat(md(o.children,e,a))):(e||o.type!==Xt)&&r.push(a!=null?Ir(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Ql(t,e){return de(t)?(()=>nt({name:t.name},e,{setup:t}))():t}const Us=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function tu(t){de(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:i=200,timeout:s,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,d()),d=()=>{let f;return l||(f=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((v,g)=>{a(p,()=>v(h()),()=>g(p),u+1)});throw p}).then(p=>f!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return Ql({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return c},setup(){const f=it;if(c)return()=>nu(c,f);const p=y=>{l=null,Lo(y,f,13,!r)};if(o&&f.suspense||Fo)return d().then(y=>()=>nu(y,f)).catch(y=>(p(y),()=>r?ae(r,{error:y}):null));const v=re(!1),g=re(),w=re(!!i);return i&&setTimeout(()=>{w.value=!1},i),s!=null&&setTimeout(()=>{if(!v.value&&!g.value){const y=new Error(`Async component timed out after ${s}ms.`);p(y),g.value=y}},s),d().then(()=>{v.value=!0,f.parent&&Vo(f.parent.vnode)&&(f.parent.effect.dirty=!0,Kl(f.parent.update))}).catch(y=>{p(y),g.value=y}),()=>{if(v.value&&c)return nu(c,f);if(g.value&&r)return ae(r,{error:g.value});if(n&&!w.value)return ae(n)}}})}function nu(t,e){const{ref:n,props:r,children:i,ce:s}=e.vnode,o=ae(t,r,i);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const Vo=t=>t.type.__isKeepAlive;function _b(t,e){Ey(t,"a",e)}function gd(t,e){Ey(t,"da",e)}function Ey(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Yl(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Vo(i.parent.vnode)&&yb(r,e,n,i),i=i.parent}}function yb(t,e,n,r){const i=Yl(e,t,r,!0);Jl(()=>{td(r[e],i)},n)}function Yl(t,e,n=it,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;gi();const a=Mo(n),l=Jt(e,n,t,o);return a(),_i(),l});return r?i.unshift(s):i.push(s),s}}const Yn=t=>(e,n=it)=>(!Fo||t==="sp")&&Yl(t,(...r)=>e(...r),n),vb=Yn("bm"),Nn=Yn("m"),wb=Yn("bu"),Ty=Yn("u"),At=Yn("bum"),Jl=Yn("um"),Eb=Yn("sp"),Tb=Yn("rtg"),Ib=Yn("rtc");function Iy(t,e=it){Yl("ec",t,e)}function RU(t,e,n,r){let i;const s=n&&n[r];if(se(t)||Ue(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Le(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function SU(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(se(r))for(let i=0;i<r.length;i++)t[r[i].name]=r[i].fn;else r&&(t[r.name]=r.key?(...i)=>{const s=r.fn(...i);return s&&(s.key=r.key),s}:r.fn)}return t}function CU(t,e,n={},r,i){if(tt.isCE||tt.parent&&Us(tt.parent)&&tt.parent.isCE)return e!=="default"&&(n.name=e),ae("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),an();const o=s&&by(s(n)),a=ln($t,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function by(t){return t.some(e=>il(e)?!(e.type===Xt||e.type===$t&&!by(e.children)):!0)?t:null}const Ju=t=>t?Vy(t)?ec(t)||t.proxy:Ju(t.parent):null,$s=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ju(t.parent),$root:t=>Ju(t.root),$emit:t=>t.emit,$options:t=>_d(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Kl(t.update)}),$nextTick:t=>t.n||(t.n=dn.bind(t.proxy)),$watch:t=>pb.bind(t)}),ru=(t,e)=>t!==Ve&&!t.__isScriptSetup&&be(t,e),bb={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(ru(r,e))return o[e]=1,r[e];if(i!==Ve&&be(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&be(c,e))return o[e]=3,s[e];if(n!==Ve&&be(n,e))return o[e]=4,n[e];Xu&&(o[e]=0)}}const u=$s[e];let h,d;if(u)return e==="$attrs"&&Mt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ve&&be(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,be(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return ru(i,e)?(i[e]=n,!0):r!==Ve&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Ve&&be(t,o)||ru(e,o)||(a=s[0])&&be(a,o)||be(r,o)||be($s,o)||be(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ip(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xu=!0;function Ab(t){const e=_d(t),n=t.proxy,r=t.ctx;Xu=!1,e.beforeCreate&&bp(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:v,deactivated:g,beforeDestroy:w,beforeUnmount:y,destroyed:E,unmounted:I,render:A,renderTracked:C,renderTriggered:V,errorCaptured:T,serverPrefetch:D,expose:L,inheritAttrs:z,components:F,directives:ie,filters:H}=e;if(c&&Rb(c,r,null),o)for(const ge in o){const fe=o[ge];de(fe)&&(r[ge]=fe.bind(n))}if(i){const ge=i.call(n,n);Le(ge)&&(t.data=cn(ge))}if(Xu=!0,s)for(const ge in s){const fe=s[ge],qe=de(fe)?fe.bind(n,n):de(fe.get)?fe.get.bind(n,n):Bt,ut=!de(fe)&&de(fe.set)?fe.set.bind(n):Bt,ht=N({get:qe,set:ut});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>ht.value,set:je=>ht.value=je})}if(a)for(const ge in a)Ay(a[ge],r,n,ge);if(l){const ge=de(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(fe=>{qi(fe,ge[fe])})}u&&bp(u,t,"c");function ee(ge,fe){se(fe)?fe.forEach(qe=>ge(qe.bind(n))):fe&&ge(fe.bind(n))}if(ee(vb,h),ee(Nn,d),ee(wb,f),ee(Ty,p),ee(_b,v),ee(gd,g),ee(Iy,T),ee(Ib,C),ee(Tb,V),ee(At,y),ee(Jl,I),ee(Eb,D),se(L))if(L.length){const ge=t.exposed||(t.exposed={});L.forEach(fe=>{Object.defineProperty(ge,fe,{get:()=>n[fe],set:qe=>n[fe]=qe})})}else t.exposed||(t.exposed={});A&&t.render===Bt&&(t.render=A),z!=null&&(t.inheritAttrs=z),F&&(t.components=F),ie&&(t.directives=ie)}function Rb(t,e,n=Bt){se(t)&&(t=Zu(t));for(const r in t){const i=t[r];let s;Le(i)?"default"in i?s=kt(i.from||r,i.default,!0):s=kt(i.from||r):s=kt(i),He(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function bp(t,e,n){Jt(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ay(t,e,n,r){const i=r.includes(".")?_y(n,r):()=>n[r];if(Ue(t)){const s=e[t];de(s)&&ke(i,s)}else if(de(t))ke(i,t.bind(n));else if(Le(t))if(se(t))t.forEach(s=>Ay(s,e,n,r));else{const s=de(t.handler)?t.handler.bind(n):e[t.handler];de(s)&&ke(i,s,t)}}function _d(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>rl(l,c,o,!0)),rl(l,e,o)),Le(e)&&s.set(e,l),l}function rl(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&rl(t,s,n,!0),i&&i.forEach(o=>rl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Sb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Sb={data:Ap,props:Rp,emits:Rp,methods:Cs,computed:Cs,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:Cs,directives:Cs,watch:Pb,provide:Ap,inject:Cb};function Ap(t,e){return e?t?function(){return nt(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function Cb(t,e){return Cs(Zu(t),Zu(e))}function Zu(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ct(t,e){return t?[...new Set([].concat(t,e))]:e}function Cs(t,e){return t?nt(Object.create(null),t,e):e}function Rp(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:nt(Object.create(null),Ip(t),Ip(e!=null?e:{})):e}function Pb(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const r in e)n[r]=Ct(t[r],e[r]);return n}function Ry(){return{app:null,config:{isNativeTag:hI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kb=0;function xb(t,e){return function(r,i=null){de(r)||(r=nt({},r)),i!=null&&!Le(i)&&(i=null);const s=Ry(),o=new WeakSet;let a=!1;const l=s.app={_uid:kb++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:sA,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&de(c.install)?(o.add(c),c.install(l,...u)):de(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const d=ae(r,i);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,ec(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){oo=l;try{return c()}finally{oo=null}}};return l}}let oo=null;function qi(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function kt(t,e,n=!1){const r=it||tt;if(r||oo){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:oo._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function Ob(){return!!(it||tt||oo)}function Db(t,e,n,r=!1){const i={},s={};Xa(s,Zl,1),t.propsDefaults=Object.create(null),Sy(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:ty(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Nb(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=we(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Gl(t.emitsOptions,d))continue;const f=e[d];if(l)if(be(s,d))f!==s[d]&&(s[d]=f,c=!0);else{const p=Dn(d);i[p]=eh(l,a,p,f,t,!1)}else f!==s[d]&&(s[d]=f,c=!0)}}}else{Sy(t,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!be(e,h)&&((u=mi(h))===h||!be(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=eh(l,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!be(e,h)&&!0)&&(delete s[h],c=!0)}c&&Hn(t,"set","$attrs")}function Sy(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Va(l))continue;const c=e[l];let u;i&&be(i,u=Dn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Gl(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=we(n),c=a||Ve;for(let u=0;u<s.length;u++){const h=s[u];n[h]=eh(i,l,h,c[h],t,!be(c,h))}}return o}function eh(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=be(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const u=Mo(i);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===mi(n))&&(r=!0))}return r}function Cy(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!de(t)){const u=h=>{l=!0;const[d,f]=Cy(h,e,!0);nt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Le(t)&&r.set(t,Fi),Fi;if(se(s))for(let u=0;u<s.length;u++){const h=Dn(s[u]);Sp(h)&&(o[h]=Ve)}else if(s)for(const u in s){const h=Dn(u);if(Sp(h)){const d=s[u],f=o[h]=se(d)||de(d)?{type:d}:nt({},d);if(f){const p=kp(Boolean,f.type),v=kp(String,f.type);f[0]=p>-1,f[1]=v<0||p<v,(p>-1||be(f,"default"))&&a.push(h)}}}const c=[o,a];return Le(t)&&r.set(t,c),c}function Sp(t){return t[0]!=="$"}function Cp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Pp(t,e){return Cp(t)===Cp(e)}function kp(t,e){return se(e)?e.findIndex(n=>Pp(n,t)):de(e)&&Pp(e,t)?0:-1}const Py=t=>t[0]==="_"||t==="$stable",yd=t=>se(t)?t.map(Tn):[Tn(t)],Lb=(t,e,n)=>{if(e._n)return e;const r=ze((...i)=>yd(e(...i)),n);return r._c=!1,r},ky=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Py(i))continue;const s=t[i];if(de(s))e[i]=Lb(i,s,r);else if(s!=null){const o=yd(s);e[i]=()=>o}}},xy=(t,e)=>{const n=yd(e);t.slots.default=()=>n},Vb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=we(e),Xa(e,"_",n)):ky(e,t.slots={})}else t.slots={},e&&xy(t,e);Xa(t.slots,Zl,1)},Mb=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Ve;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(nt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,ky(e,i)),o=e}else e&&(xy(t,e),o={default:1});if(s)for(const a in i)!Py(a)&&o[a]==null&&delete i[a]};function th(t,e,n,r,i=!1){if(se(t)){t.forEach((d,f)=>th(d,e&&(se(e)?e[f]:e),n,r,i));return}if(Us(r)&&!i)return;const s=r.shapeFlag&4?ec(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ve?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ue(c)?(u[c]=null,be(h,c)&&(h[c]=null)):He(c)&&(c.value=null)),de(l))yr(l,a,12,[o,u]);else{const d=Ue(l),f=He(l),p=t.f;if(d||f){const v=()=>{if(p){const g=d?be(h,l)?h[l]:u[l]:l.value;i?se(g)&&td(g,s):se(g)?g.includes(s)||g.push(s):d?(u[l]=[s],be(h,l)&&(h[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,be(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};i||p?v():(v.id=-1,Ot(v,n))}}}const Ot=hb;function Fb(t){return Ub(t)}function Ub(t,e){const n=M_();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Bt,insertStaticContent:p}=t,v=(m,_,b,x=null,k=null,B=null,Q=void 0,$=null,j=!!_.dynamicChildren)=>{if(m===_)return;m&&!Ur(m,_)&&(x=R(m),je(m,k,B,!0),m=null),_.patchFlag===-2&&(j=!1,_.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:te}=_;switch(M){case Xl:g(m,_,b,x);break;case Xt:w(m,_,b,x);break;case Ma:m==null&&y(_,b,x,Q);break;case $t:F(m,_,b,x,k,B,Q,$,j);break;default:te&1?A(m,_,b,x,k,B,Q,$,j):te&6?ie(m,_,b,x,k,B,Q,$,j):(te&64||te&128)&&M.process(m,_,b,x,k,B,Q,$,j,J)}Y!=null&&k&&th(Y,m&&m.ref,B,_||m,!_)},g=(m,_,b,x)=>{if(m==null)r(_.el=a(_.children),b,x);else{const k=_.el=m.el;_.children!==m.children&&c(k,_.children)}},w=(m,_,b,x)=>{m==null?r(_.el=l(_.children||""),b,x):_.el=m.el},y=(m,_,b,x)=>{[m.el,m.anchor]=p(m.children,_,b,x,m.el,m.anchor)},E=({el:m,anchor:_},b,x)=>{let k;for(;m&&m!==_;)k=d(m),r(m,b,x),m=k;r(_,b,x)},I=({el:m,anchor:_})=>{let b;for(;m&&m!==_;)b=d(m),i(m),m=b;i(_)},A=(m,_,b,x,k,B,Q,$,j)=>{_.type==="svg"?Q="svg":_.type==="math"&&(Q="mathml"),m==null?C(_,b,x,k,B,Q,$,j):D(m,_,k,B,Q,$,j)},C=(m,_,b,x,k,B,Q,$)=>{let j,M;const{props:Y,shapeFlag:te,transition:Z,dirs:ue}=m;if(j=m.el=o(m.type,B,Y&&Y.is,Y),te&8?u(j,m.children):te&16&&T(m.children,j,null,x,k,iu(m,B),Q,$),ue&&Dr(m,null,x,"created"),V(j,m,m.scopeId,Q,x),Y){for(const Pe in Y)Pe!=="value"&&!Va(Pe)&&s(j,Pe,null,Y[Pe],B,m.children,x,k,_e);"value"in Y&&s(j,"value",null,Y.value,B),(M=Y.onVnodeBeforeMount)&&En(M,x,m)}ue&&Dr(m,null,x,"beforeMount");const ye=$b(k,Z);ye&&Z.beforeEnter(j),r(j,_,b),((M=Y&&Y.onVnodeMounted)||ye||ue)&&Ot(()=>{M&&En(M,x,m),ye&&Z.enter(j),ue&&Dr(m,null,x,"mounted")},k)},V=(m,_,b,x,k)=>{if(b&&f(m,b),x)for(let B=0;B<x.length;B++)f(m,x[B]);if(k){let B=k.subTree;if(_===B){const Q=k.vnode;V(m,Q,Q.scopeId,Q.slotScopeIds,k.parent)}}},T=(m,_,b,x,k,B,Q,$,j=0)=>{for(let M=j;M<m.length;M++){const Y=m[M]=$?lr(m[M]):Tn(m[M]);v(null,Y,_,b,x,k,B,Q,$)}},D=(m,_,b,x,k,B,Q)=>{const $=_.el=m.el;let{patchFlag:j,dynamicChildren:M,dirs:Y}=_;j|=m.patchFlag&16;const te=m.props||Ve,Z=_.props||Ve;let ue;if(b&&Nr(b,!1),(ue=Z.onVnodeBeforeUpdate)&&En(ue,b,_,m),Y&&Dr(_,m,b,"beforeUpdate"),b&&Nr(b,!0),M?L(m.dynamicChildren,M,$,b,x,iu(_,k),B):Q||fe(m,_,$,null,b,x,iu(_,k),B,!1),j>0){if(j&16)z($,_,te,Z,b,x,k);else if(j&2&&te.class!==Z.class&&s($,"class",null,Z.class,k),j&4&&s($,"style",te.style,Z.style,k),j&8){const ye=_.dynamicProps;for(let Pe=0;Pe<ye.length;Pe++){const Fe=ye[Pe],ot=te[Fe],rn=Z[Fe];(rn!==ot||Fe==="value")&&s($,Fe,ot,rn,k,m.children,b,x,_e)}}j&1&&m.children!==_.children&&u($,_.children)}else!Q&&M==null&&z($,_,te,Z,b,x,k);((ue=Z.onVnodeUpdated)||Y)&&Ot(()=>{ue&&En(ue,b,_,m),Y&&Dr(_,m,b,"updated")},x)},L=(m,_,b,x,k,B,Q)=>{for(let $=0;$<_.length;$++){const j=m[$],M=_[$],Y=j.el&&(j.type===$t||!Ur(j,M)||j.shapeFlag&70)?h(j.el):b;v(j,M,Y,null,x,k,B,Q,!0)}},z=(m,_,b,x,k,B,Q)=>{if(b!==x){if(b!==Ve)for(const $ in b)!Va($)&&!($ in x)&&s(m,$,b[$],null,Q,_.children,k,B,_e);for(const $ in x){if(Va($))continue;const j=x[$],M=b[$];j!==M&&$!=="value"&&s(m,$,M,j,Q,_.children,k,B,_e)}"value"in x&&s(m,"value",b.value,x.value,Q)}},F=(m,_,b,x,k,B,Q,$,j)=>{const M=_.el=m?m.el:a(""),Y=_.anchor=m?m.anchor:a("");let{patchFlag:te,dynamicChildren:Z,slotScopeIds:ue}=_;ue&&($=$?$.concat(ue):ue),m==null?(r(M,b,x),r(Y,b,x),T(_.children||[],b,Y,k,B,Q,$,j)):te>0&&te&64&&Z&&m.dynamicChildren?(L(m.dynamicChildren,Z,b,k,B,Q,$),(_.key!=null||k&&_===k.subTree)&&vd(m,_,!0)):fe(m,_,b,Y,k,B,Q,$,j)},ie=(m,_,b,x,k,B,Q,$,j)=>{_.slotScopeIds=$,m==null?_.shapeFlag&512?k.ctx.activate(_,b,x,Q,j):H(_,b,x,k,B,Q,j):oe(m,_,j)},H=(m,_,b,x,k,B,Q)=>{const $=m.component=Xb(m,x,k);if(Vo(m)&&($.ctx.renderer=J),Zb($),$.asyncDep){if(k&&k.registerDep($,ee),!m.el){const j=$.subTree=ae(Xt);w(null,j,_,b)}}else ee($,m,_,b,k,B,Q)},oe=(m,_,b)=>{const x=_.component=m.component;if(ab(m,_,b))if(x.asyncDep&&!x.asyncResolved){ge(x,_,b);return}else x.next=_,tb(x.update),x.effect.dirty=!0,x.update();else _.el=m.el,x.vnode=_},ee=(m,_,b,x,k,B,Q)=>{const $=()=>{if(m.isMounted){let{next:Y,bu:te,u:Z,parent:ue,vnode:ye}=m;{const Ai=Oy(m);if(Ai){Y&&(Y.el=ye.el,ge(m,Y,Q)),Ai.asyncDep.then(()=>{m.isUnmounted||$()});return}}let Pe=Y,Fe;Nr(m,!1),Y?(Y.el=ye.el,ge(m,Y,Q)):Y=ye,te&&Jc(te),(Fe=Y.props&&Y.props.onVnodeBeforeUpdate)&&En(Fe,ue,Y,ye),Nr(m,!0);const ot=Zc(m),rn=m.subTree;m.subTree=ot,v(rn,ot,h(rn.el),R(rn),m,k,B),Y.el=ot.el,Pe===null&&lb(m,ot.el),Z&&Ot(Z,k),(Fe=Y.props&&Y.props.onVnodeUpdated)&&Ot(()=>En(Fe,ue,Y,ye),k)}else{let Y;const{el:te,props:Z}=_,{bm:ue,m:ye,parent:Pe}=m,Fe=Us(_);if(Nr(m,!1),ue&&Jc(ue),!Fe&&(Y=Z&&Z.onVnodeBeforeMount)&&En(Y,Pe,_),Nr(m,!0),te&&Oe){const ot=()=>{m.subTree=Zc(m),Oe(te,m.subTree,m,k,null)};Fe?_.type.__asyncLoader().then(()=>!m.isUnmounted&&ot()):ot()}else{const ot=m.subTree=Zc(m);v(null,ot,b,x,m,k,B),_.el=ot.el}if(ye&&Ot(ye,k),!Fe&&(Y=Z&&Z.onVnodeMounted)){const ot=_;Ot(()=>En(Y,Pe,ot),k)}(_.shapeFlag&256||Pe&&Us(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&m.a&&Ot(m.a,k),m.isMounted=!0,_=b=x=null}},j=m.effect=new id($,Bt,()=>Kl(M),m.scope),M=m.update=()=>{j.dirty&&j.run()};M.id=m.uid,Nr(m,!0),M()},ge=(m,_,b)=>{_.component=m;const x=m.vnode.props;m.vnode=_,m.next=null,Nb(m,_.props,x,b),Mb(m,_.children,b),gi(),vp(m),_i()},fe=(m,_,b,x,k,B,Q,$,j=!1)=>{const M=m&&m.children,Y=m?m.shapeFlag:0,te=_.children,{patchFlag:Z,shapeFlag:ue}=_;if(Z>0){if(Z&128){ut(M,te,b,x,k,B,Q,$,j);return}else if(Z&256){qe(M,te,b,x,k,B,Q,$,j);return}}ue&8?(Y&16&&_e(M,k,B),te!==M&&u(b,te)):Y&16?ue&16?ut(M,te,b,x,k,B,Q,$,j):_e(M,k,B,!0):(Y&8&&u(b,""),ue&16&&T(te,b,x,k,B,Q,$,j))},qe=(m,_,b,x,k,B,Q,$,j)=>{m=m||Fi,_=_||Fi;const M=m.length,Y=_.length,te=Math.min(M,Y);let Z;for(Z=0;Z<te;Z++){const ue=_[Z]=j?lr(_[Z]):Tn(_[Z]);v(m[Z],ue,b,null,k,B,Q,$,j)}M>Y?_e(m,k,B,!0,!1,te):T(_,b,x,k,B,Q,$,j,te)},ut=(m,_,b,x,k,B,Q,$,j)=>{let M=0;const Y=_.length;let te=m.length-1,Z=Y-1;for(;M<=te&&M<=Z;){const ue=m[M],ye=_[M]=j?lr(_[M]):Tn(_[M]);if(Ur(ue,ye))v(ue,ye,b,null,k,B,Q,$,j);else break;M++}for(;M<=te&&M<=Z;){const ue=m[te],ye=_[Z]=j?lr(_[Z]):Tn(_[Z]);if(Ur(ue,ye))v(ue,ye,b,null,k,B,Q,$,j);else break;te--,Z--}if(M>te){if(M<=Z){const ue=Z+1,ye=ue<Y?_[ue].el:x;for(;M<=Z;)v(null,_[M]=j?lr(_[M]):Tn(_[M]),b,ye,k,B,Q,$,j),M++}}else if(M>Z)for(;M<=te;)je(m[M],k,B,!0),M++;else{const ue=M,ye=M,Pe=new Map;for(M=ye;M<=Z;M++){const Ft=_[M]=j?lr(_[M]):Tn(_[M]);Ft.key!=null&&Pe.set(Ft.key,M)}let Fe,ot=0;const rn=Z-ye+1;let Ai=!1,ap=0;const vs=new Array(rn);for(M=0;M<rn;M++)vs[M]=0;for(M=ue;M<=te;M++){const Ft=m[M];if(ot>=rn){je(Ft,k,B,!0);continue}let wn;if(Ft.key!=null)wn=Pe.get(Ft.key);else for(Fe=ye;Fe<=Z;Fe++)if(vs[Fe-ye]===0&&Ur(Ft,_[Fe])){wn=Fe;break}wn===void 0?je(Ft,k,B,!0):(vs[wn-ye]=M+1,wn>=ap?ap=wn:Ai=!0,v(Ft,_[wn],b,null,k,B,Q,$,j),ot++)}const lp=Ai?Bb(vs):Fi;for(Fe=lp.length-1,M=rn-1;M>=0;M--){const Ft=ye+M,wn=_[Ft],cp=Ft+1<Y?_[Ft+1].el:x;vs[M]===0?v(null,wn,b,cp,k,B,Q,$,j):Ai&&(Fe<0||M!==lp[Fe]?ht(wn,b,cp,2):Fe--)}}},ht=(m,_,b,x,k=null)=>{const{el:B,type:Q,transition:$,children:j,shapeFlag:M}=m;if(M&6){ht(m.component.subTree,_,b,x);return}if(M&128){m.suspense.move(_,b,x);return}if(M&64){Q.move(m,_,b,J);return}if(Q===$t){r(B,_,b);for(let te=0;te<j.length;te++)ht(j[te],_,b,x);r(m.anchor,_,b);return}if(Q===Ma){E(m,_,b);return}if(x!==2&&M&1&&$)if(x===0)$.beforeEnter(B),r(B,_,b),Ot(()=>$.enter(B),k);else{const{leave:te,delayLeave:Z,afterLeave:ue}=$,ye=()=>r(B,_,b),Pe=()=>{te(B,()=>{ye(),ue&&ue()})};Z?Z(B,ye,Pe):Pe()}else r(B,_,b)},je=(m,_,b,x=!1,k=!1)=>{const{type:B,props:Q,ref:$,children:j,dynamicChildren:M,shapeFlag:Y,patchFlag:te,dirs:Z}=m;if($!=null&&th($,null,b,m,!0),Y&256){_.ctx.deactivate(m);return}const ue=Y&1&&Z,ye=!Us(m);let Pe;if(ye&&(Pe=Q&&Q.onVnodeBeforeUnmount)&&En(Pe,_,m),Y&6)me(m.component,b,x);else{if(Y&128){m.suspense.unmount(b,x);return}ue&&Dr(m,null,_,"beforeUnmount"),Y&64?m.type.remove(m,_,b,k,J,x):M&&(B!==$t||te>0&&te&64)?_e(M,_,b,!1,!0):(B===$t&&te&384||!k&&Y&16)&&_e(j,_,b),x&&_t(m)}(ye&&(Pe=Q&&Q.onVnodeUnmounted)||ue)&&Ot(()=>{Pe&&En(Pe,_,m),ue&&Dr(m,null,_,"unmounted")},b)},_t=m=>{const{type:_,el:b,anchor:x,transition:k}=m;if(_===$t){Kt(b,x);return}if(_===Ma){I(m);return}const B=()=>{i(b),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(m.shapeFlag&1&&k&&!k.persisted){const{leave:Q,delayLeave:$}=k,j=()=>Q(b,B);$?$(m.el,B,j):j()}else B()},Kt=(m,_)=>{let b;for(;m!==_;)b=d(m),i(m),m=b;i(_)},me=(m,_,b)=>{const{bum:x,scope:k,update:B,subTree:Q,um:$}=m;x&&Jc(x),k.stop(),B&&(B.active=!1,je(Q,m,_,b)),$&&Ot($,_),Ot(()=>{m.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},_e=(m,_,b,x=!1,k=!1,B=0)=>{for(let Q=B;Q<m.length;Q++)je(m[Q],_,b,x,k)},R=m=>m.shapeFlag&6?R(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el);let W=!1;const P=(m,_,b)=>{m==null?_._vnode&&je(_._vnode,null,null,!0):v(_._vnode||null,m,_,null,null,null,b),W||(W=!0,vp(),uy(),W=!1),_._vnode=m},J={p:v,um:je,m:ht,r:_t,mt:H,mc:T,pc:fe,pbc:L,n:R,o:t};let Ee,Oe;return e&&([Ee,Oe]=e(J)),{render:P,hydrate:Ee,createApp:xb(P,Ee)}}function iu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Nr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function $b(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function vd(t,e,n=!1){const r=t.children,i=e.children;if(se(r)&&se(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=lr(i[s]),a.el=o.el),n||vd(o,a)),a.type===Xl&&(a.el=o.el)}}function Bb(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Oy(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Oy(e)}const qb=t=>t.__isTeleport,Bs=t=>t&&(t.disabled||t.disabled===""),xp=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,Op=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,nh=(t,e)=>{const n=t&&t.to;return Ue(n)?e?e(n):null:n},jb={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,s,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:v,createComment:g}}=c,w=Bs(e.props);let{shapeFlag:y,children:E,dynamicChildren:I}=e;if(t==null){const A=e.el=v(""),C=e.anchor=v("");f(A,n,r),f(C,n,r);const V=e.target=nh(e.props,p),T=e.targetAnchor=v("");V&&(f(T,V),o==="svg"||xp(V)?o="svg":(o==="mathml"||Op(V))&&(o="mathml"));const D=(L,z)=>{y&16&&u(E,L,z,i,s,o,a,l)};w?D(n,C):V&&D(V,T)}else{e.el=t.el;const A=e.anchor=t.anchor,C=e.target=t.target,V=e.targetAnchor=t.targetAnchor,T=Bs(t.props),D=T?n:C,L=T?A:V;if(o==="svg"||xp(C)?o="svg":(o==="mathml"||Op(C))&&(o="mathml"),I?(d(t.dynamicChildren,I,D,i,s,o,a),vd(t,e,!0)):l||h(t,e,D,L,i,s,o,a,!1),w)T?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ya(e,n,A,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const z=e.target=nh(e.props,p);z&&ya(e,z,null,c,0)}else T&&ya(e,C,V,c,1)}Dy(e)},remove(t,e,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=t;if(h&&s(u),o&&s(c),a&16){const f=o||!Bs(d);for(let p=0;p<l.length;p++){const v=l[p];i(v,e,n,f,!!v.dynamicChildren)}}},move:ya,hydrate:zb};function ya(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=s===2;if(h&&r(o,e,n),(!h||Bs(u))&&l&16)for(let d=0;d<c.length;d++)i(c[d],e,n,2);h&&r(a,e,n)}function zb(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=nh(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Bs(e.props))e.anchor=c(o(t),e,a(t),n,r,i,s),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,r,i,s)}Dy(e)}return e.anchor&&o(e.anchor)}const Hb=jb;function Dy(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const $t=Symbol.for("v-fgt"),Xl=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),Ma=Symbol.for("v-stc"),qs=[];let un=null;function an(t=!1){qs.push(un=t?null:[])}function Wb(){qs.pop(),un=qs[qs.length-1]||null}let ao=1;function Dp(t){ao+=t}function Ny(t){return t.dynamicChildren=ao>0?un||Fi:null,Wb(),ao>0&&un&&un.push(t),t}function PU(t,e,n,r,i,s){return Ny(wd(t,e,n,r,i,s,!0))}function ln(t,e,n,r,i){return Ny(ae(t,e,n,r,i,!0))}function il(t){return t?t.__v_isVNode===!0:!1}function Ur(t,e){return t.type===e.type&&t.key===e.key}const Zl="__vInternal",Ly=({key:t})=>t!=null?t:null,Fa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||He(t)||de(t)?{i:tt,r:t,k:e,f:!!n}:t:null);function wd(t,e=null,n=null,r=0,i=null,s=t===$t?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ly(e),ref:e&&Fa(e),scopeId:fy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:tt};return a?(Ed(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),ao>0&&!o&&un&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&un.push(l),l}const ae=Kb;function Kb(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===my)&&(t=Xt),il(t)){const a=Ir(t,e,!0);return n&&Ed(a,n),ao>0&&!s&&un&&(a.shapeFlag&6?un[un.indexOf(t)]=a:un.push(a)),a.patchFlag|=-2,a}if(iA(t)&&(t=t.__vccOpts),e){e=Gb(e);let{class:a,style:l}=e;a&&!Ue(a)&&(e.class=zl(a)),Le(l)&&(ny(l)&&!se(l)&&(l=nt({},l)),e.style=No(l))}const o=Ue(t)?1:ub(t)?128:qb(t)?64:Le(t)?4:de(t)?2:0;return wd(t,e,n,r,i,o,s,!0)}function Gb(t){return t?ny(t)||Zl in t?nt({},t):t:null}function Ir(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Qb(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ly(a),ref:e&&e.ref?n&&i?se(i)?i.concat(Fa(e)):[i,Fa(e)]:Fa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$t?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ir(t.ssContent),ssFallback:t.ssFallback&&Ir(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ps(t=" ",e=0){return ae(Xl,null,t,e)}function kU(t,e){const n=ae(Ma,null,t);return n.staticCount=e,n}function Np(t="",e=!1){return e?(an(),ln(Xt,null,t)):ae(Xt,null,t)}function Tn(t){return t==null||typeof t=="boolean"?ae(Xt):se(t)?ae($t,null,t.slice()):typeof t=="object"?lr(t):ae(Xl,null,String(t))}function lr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ir(t)}function Ed(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Ed(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Zl in e)?e._ctx=tt:i===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),r&64?(n=16,e=[Ps(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=zl([e.class,r.class]));else if(i==="style")e.style=No([e.style,r.style]);else if($l(i)){const s=e[i],o=r[i];o&&s!==o&&!(se(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function En(t,e,n,r=null){Jt(t,e,7,[n,r])}const Yb=Ry();let Jb=0;function Xb(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Yb,s={uid:Jb++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new $_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cy(r,i),emitsOptions:dy(r,i),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ib.bind(null,s),t.ce&&t.ce(s),s}let it=null;const Ge=()=>it||tt;let sl,rh;{const t=M_(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};sl=e("__VUE_INSTANCE_SETTERS__",n=>it=n),rh=e("__VUE_SSR_SETTERS__",n=>Fo=n)}const Mo=t=>{const e=it;return sl(t),t.scope.on(),()=>{t.scope.off(),sl(e)}},Lp=()=>{it&&it.scope.off(),sl(null)};function Vy(t){return t.vnode.shapeFlag&4}let Fo=!1;function Zb(t,e=!1){e&&rh(e);const{props:n,children:r}=t.vnode,i=Vy(t);Db(t,n,i,e),Vb(t,r);const s=i?eA(t,e):void 0;return e&&rh(!1),s}function eA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Cr(new Proxy(t.ctx,bb));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?nA(t):null,s=Mo(t);gi();const o=yr(r,t,0,[t.props,i]);if(_i(),s(),N_(o)){if(o.then(Lp,Lp),e)return o.then(a=>{Vp(t,a,e)}).catch(a=>{Lo(a,t,0)});t.asyncDep=o}else Vp(t,o,e)}else My(t,e)}function Vp(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=sy(e)),My(t,n)}let Mp;function My(t,e,n){const r=t.type;if(!t.render){if(!e&&Mp&&!r.render){const i=r.template||_d(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=nt(nt({isCustomElement:s,delimiters:a},o),l);r.render=Mp(i,c)}}t.render=r.render||Bt}{const i=Mo(t);gi();try{Ab(t)}finally{_i(),i()}}}function tA(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Mt(t,"get","$attrs"),e[n]}}))}function nA(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return tA(t)},slots:t.slots,emit:t.emit,expose:e}}function ec(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(sy(Cr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $s)return $s[n](t)},has(e,n){return n in e||n in $s}}))}function rA(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function iA(t){return de(t)&&"__vccOpts"in t}const N=(t,e)=>HI(t,e,Fo);function U(t,e,n){const r=arguments.length;return r===2?Le(e)&&!se(e)?il(e)?ae(t,null,[e]):ae(t,e):ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&il(n)&&(n=[n]),ae(t,e,n))}const sA="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const oA="http://www.w3.org/2000/svg",aA="http://www.w3.org/1998/Math/MathML",cr=typeof document!="undefined"?document:null,Fp=cr&&cr.createElement("template"),lA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?cr.createElementNS(oA,t):e==="mathml"?cr.createElementNS(aA,t):cr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>cr.createTextNode(t),createComment:t=>cr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>cr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Fp.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Fp.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},tr="transition",ws="animation",Xi=Symbol("_vtc"),ri=(t,{slots:e})=>U(gb,Uy(t),e);ri.displayName="Transition";const Fy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},cA=ri.props=nt({},vy,Fy),Lr=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},Up=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function Uy(t){const e={};for(const F in t)F in Fy||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=uA(i),v=p&&p[0],g=p&&p[1],{onBeforeEnter:w,onEnter:y,onEnterCancelled:E,onLeave:I,onLeaveCancelled:A,onBeforeAppear:C=w,onAppear:V=y,onAppearCancelled:T=E}=e,D=(F,ie,H)=>{ir(F,ie?u:a),ir(F,ie?c:o),H&&H()},L=(F,ie)=>{F._isLeaving=!1,ir(F,h),ir(F,f),ir(F,d),ie&&ie()},z=F=>(ie,H)=>{const oe=F?V:y,ee=()=>D(ie,F,H);Lr(oe,[ie,ee]),$p(()=>{ir(ie,F?l:s),Fn(ie,F?u:a),Up(oe)||Bp(ie,r,v,ee)})};return nt(e,{onBeforeEnter(F){Lr(w,[F]),Fn(F,s),Fn(F,o)},onBeforeAppear(F){Lr(C,[F]),Fn(F,l),Fn(F,c)},onEnter:z(!1),onAppear:z(!0),onLeave(F,ie){F._isLeaving=!0;const H=()=>L(F,ie);Fn(F,h),By(),Fn(F,d),$p(()=>{!F._isLeaving||(ir(F,h),Fn(F,f),Up(I)||Bp(F,r,g,H))}),Lr(I,[F,H])},onEnterCancelled(F){D(F,!1),Lr(E,[F])},onAppearCancelled(F){D(F,!0),Lr(T,[F])},onLeaveCancelled(F){L(F),Lr(A,[F])}})}function uA(t){if(t==null)return null;if(Le(t))return[su(t.enter),su(t.leave)];{const e=su(t);return[e,e]}}function su(t){return _I(t)}function Fn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Xi]||(t[Xi]=new Set)).add(e)}function ir(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Xi];n&&(n.delete(e),n.size||(t[Xi]=void 0))}function $p(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let hA=0;function Bp(t,e,n,r){const i=t._endId=++hA,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=$y(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),s()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function $y(t,e){const n=window.getComputedStyle(t),r=p=>(n[p]||"").split(", "),i=r(`${tr}Delay`),s=r(`${tr}Duration`),o=qp(i,s),a=r(`${ws}Delay`),l=r(`${ws}Duration`),c=qp(a,l);let u=null,h=0,d=0;e===tr?o>0&&(u=tr,h=o,d=s.length):e===ws?c>0&&(u=ws,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?tr:ws:null,d=u?u===tr?s.length:l.length:0);const f=u===tr&&/\b(transform|all)(,|$)/.test(r(`${tr}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function qp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>jp(n)+jp(t[r])))}function jp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function By(){return document.body.offsetHeight}function dA(t,e,n){const r=t[Xi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const fA=Symbol("_vod"),pA=Symbol("");function mA(t,e,n){const r=t.style,i=r.display,s=Ue(n);if(n&&!s){if(e&&!Ue(e))for(const o in e)n[o]==null&&ih(r,o,"");for(const o in n)ih(r,o,n[o])}else if(s){if(e!==n){const o=r[pA];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");fA in t&&(r.display=i)}const zp=/\s*!important$/;function ih(t,e,n){if(se(n))n.forEach(r=>ih(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=gA(t,e);zp.test(n)?t.setProperty(mi(r),n.replace(zp,""),"important"):t[r]=n}}const Hp=["Webkit","Moz","ms"],ou={};function gA(t,e){const n=ou[e];if(n)return n;let r=Dn(e);if(r!=="filter"&&r in t)return ou[e]=r;r=jl(r);for(let i=0;i<Hp.length;i++){const s=Hp[i]+r;if(s in t)return ou[e]=s}return e}const Wp="http://www.w3.org/1999/xlink";function _A(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Wp,e.slice(6,e.length)):t.setAttributeNS(Wp,e,n);else{const s=II(e);n==null||s&&!F_(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function yA(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n==null?"":n;c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=F_(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function vA(t,e,n,r){t.addEventListener(e,n,r)}function wA(t,e,n,r){t.removeEventListener(e,n,r)}const Kp=Symbol("_vei");function EA(t,e,n,r,i=null){const s=t[Kp]||(t[Kp]={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=TA(e);if(r){const c=s[e]=AA(r,i);vA(t,a,c,l)}else o&&(wA(t,a,o,l),s[e]=void 0)}}const Gp=/(?:Once|Passive|Capture)$/;function TA(t){let e;if(Gp.test(t)){e={};let r;for(;r=t.match(Gp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):mi(t.slice(2)),e]}let au=0;const IA=Promise.resolve(),bA=()=>au||(IA.then(()=>au=0),au=Date.now());function AA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Jt(RA(r,n.value),e,5,[r])};return n.value=t,n.attached=bA(),n}function RA(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Qp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,SA=(t,e,n,r,i,s,o,a,l)=>{const c=i==="svg";e==="class"?dA(t,r,c):e==="style"?mA(t,n,r):$l(e)?ed(e)||EA(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):CA(t,e,r,c))?yA(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),_A(t,e,r,c))};function CA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Qp(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Qp(e)&&Ue(n)?!1:e in t}const qy=new WeakMap,jy=new WeakMap,ol=Symbol("_moveCb"),Yp=Symbol("_enterCb"),zy={name:"TransitionGroup",props:nt({},cA,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ge(),r=yy();let i,s;return Ty(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!NA(i[0].el,n.vnode.el,o))return;i.forEach(xA),i.forEach(OA);const a=i.filter(DA);By(),a.forEach(l=>{const c=l.el,u=c.style;Fn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c[ol]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c[ol]=null,ir(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=we(t),a=Uy(o);let l=o.tag||$t;i=s,s=e.default?md(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&so(u,io(u,a,r,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];so(u,io(u,a,r,n)),qy.set(u,u.el.getBoundingClientRect())}return ae(l,null,s)}}},PA=t=>delete t.mode;zy.props;const kA=zy;function xA(t){const e=t.el;e[ol]&&e[ol](),e[Yp]&&e[Yp]()}function OA(t){jy.set(t,t.el.getBoundingClientRect())}function DA(t){const e=qy.get(t),n=jy.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",t}}function NA(t,e,n){const r=t.cloneNode(),i=t[Xi];i&&i.forEach(a=>{a.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:o}=$y(r);return s.removeChild(r),o}const LA=["ctrl","shift","alt","meta"],VA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>LA.some(n=>t[`${n}Key`]&&!e.includes(n))},xU=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const a=VA[e[o]];if(a&&a(i,e))return}return t(i,...s)})},MA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},OU=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=mi(i.key);if(e.some(o=>o===s||MA[o]===s))return t(i)})},FA=nt({patchProp:SA},lA);let Jp;function UA(){return Jp||(Jp=Fb(FA))}const Hy=(...t)=>{const e=UA().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=BA(r);if(!i)return;const s=e._component;!de(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,$A(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function $A(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function BA(t){return Ue(t)?document.querySelector(t):t}function tc(t,e,n,r){return Object.defineProperty(t,e,{get:n,set:r,enumerable:!0}),t}const br=re(!1);let nc;function qA(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:e[0]||""}}function jA(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const Wy="ontouchstart"in window||window.navigator.maxTouchPoints>0;function zA(t){nc={is:{...t}},delete t.mac,delete t.desktop;const e=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(t,{mobile:!0,ios:!0,platform:e,[e]:!0})}function HA(t){const e=t.toLowerCase(),n=jA(e),r=qA(e,n),i={};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(i[r.platform]=!0);const s=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];return s===!0||e.indexOf("mobile")>-1?(i.mobile=!0,i.edga||i.edgios?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox")):i.desktop=!0,(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),(i.chrome||i.opr||i.safari||i.vivaldi||i.mobile===!0&&i.ios!==!0&&s!==!0)&&(i.webkit=!0),i.edg&&(r.browser="edgechromium",i.edgeChromium=!0),(i.safari&&i.blackberry||i.bb)&&(r.browser="blackberry",i.blackberry=!0),i.safari&&i.playbook&&(r.browser="playbook",i.playbook=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&i.android&&(r.browser="android",i.android=!0),i.safari&&i.kindle&&(r.browser="kindle",i.kindle=!0),i.safari&&i.silk&&(r.browser="silk",i.silk=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),i.name=r.browser,i.platform=r.platform,e.indexOf("electron")>-1?i.electron=!0:document.location.href.indexOf("-extension://")>-1?i.bex=!0:(window.Capacitor!==void 0?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),Wy===!0&&i.mac===!0&&(i.desktop===!0&&i.safari===!0||i.nativeMobile===!0&&i.android!==!0&&i.ios!==!0&&i.ipad!==!0)&&zA(i)),i}const Xp=navigator.userAgent||navigator.vendor||window.opera,WA={has:{touch:!1,webStorage:!1},within:{iframe:!1}},Ye={userAgent:Xp,is:HA(Xp),has:{touch:Wy},within:{iframe:window.self!==window.top}},al={install(t){const{$q:e}=t;br.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,Ye),br.value=!1,nc=void 0}),e.platform=cn(this)):e.platform=this}};{let t;tc(Ye.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Ye.is.ios===!0&&window.navigator.vendor.toLowerCase().indexOf("apple"),br.value===!0?Object.assign(al,Ye,nc,WA):Object.assign(al,Ye)}var Uo=(t,e)=>{const n=cn(t);for(const r in t)tc(e,r,()=>n[r],i=>{n[r]=i});return e};const Ze={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(Ze,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function hn(){}function DU(t){return t.button===0}function Ky(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function KA(t){if(t.path)return t.path;if(t.composedPath)return t.composedPath();const e=[];let n=t.target;for(;n;){if(e.push(n),n.tagName==="HTML")return e.push(document),e.push(window),e;n=n.parentElement}}function Gy(t){t.stopPropagation()}function lo(t){t.cancelable!==!1&&t.preventDefault()}function $n(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function NU(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",lo,Ze.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",lo,Ze.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function sh(t,e,n){const r=`__q_${e}_evt`;t[r]=t[r]!==void 0?t[r].concat(n):n,n.forEach(i=>{i[0].addEventListener(i[1],t[i[2]],Ze[i[3]])})}function Qy(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(r=>{r[0].removeEventListener(r[1],t[r[2]],Ze[r[3]])}),t[n]=void 0)}function GA(t,e=250,n){let r=null;function i(){const s=arguments,o=()=>{r=null,n!==!0&&t.apply(this,s)};r!==null?clearTimeout(r):n===!0&&t.apply(this,s),r=setTimeout(o,e)}return i.cancel=()=>{r!==null&&clearTimeout(r)},i}const lu=["sm","md","lg","xl"],{passive:Zp}=Ze;var QA=Uo({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:hn,setDebounce:hn,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,i=document.scrollingElement||document.documentElement,s=n===void 0||Ye.is.mobile===!0?()=>[Math.max(window.innerWidth,i.clientWidth),Math.max(window.innerHeight,i.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-i.clientWidth,n.height*n.scale+window.innerHeight-i.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=h=>{const[d,f]=s();if(f!==this.height&&(this.height=f),d!==this.width)this.width=d;else if(h!==!0)return;let p=this.sizes;this.gt.xs=d>=p.sm,this.gt.sm=d>=p.md,this.gt.md=d>=p.lg,this.gt.lg=d>=p.xl,this.lt.sm=d<p.sm,this.lt.md=d<p.md,this.lt.lg=d<p.lg,this.lt.xl=d<p.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,p=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",p!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${p}`)),this.name=p)};let a,l={},c=16;this.setSizes=h=>{lu.forEach(d=>{h[d]!==void 0&&(l[d]=h[d])})},this.setDebounce=h=>{c=h};const u=()=>{const h=getComputedStyle(document.body);h.getPropertyValue("--q-size-sm")&&lu.forEach(d=>{this.sizes[d]=parseInt(h.getPropertyValue(`--q-size-${d}`),10)}),this.setSizes=d=>{lu.forEach(f=>{d[f]&&(this.sizes[f]=d[f])}),this.__update(!0)},this.setDebounce=d=>{a!==void 0&&r.removeEventListener("resize",a,Zp),a=d>0?GA(this.__update,d):this.__update,r.addEventListener("resize",a,Zp)},this.setDebounce(c),Object.keys(l).length!==0?(this.setSizes(l),l=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};br.value===!0?e.push(u):u()}});const vt=Uo({isActive:!1,mode:!1},{__media:void 0,set(t){vt.mode=t,t==="auto"?(vt.__media===void 0&&(vt.__media=window.matchMedia("(prefers-color-scheme: dark)"),vt.__updateMedia=()=>{vt.set("auto")},vt.__media.addListener(vt.__updateMedia)),t=vt.__media.matches):vt.__media!==void 0&&(vt.__media.removeListener(vt.__updateMedia),vt.__media=void 0),vt.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){vt.set(vt.isActive===!1)},install({$q:t,ssrContext:e}){const{dark:n}=t.config;t.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}}),Yy=()=>!0;function YA(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function JA(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function XA(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return Yy;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(YA).map(JA)),()=>e.includes(window.location.hash)}var oh={__history:[],add:hn,remove:hn,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=Ye.is;if(e!==!0&&n!==!0)return;const r=t.config[e===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=Yy),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const i=XA(Object.assign({backButtonExit:!0},r)),s=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else i()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",s,!1)}):window.Capacitor.Plugins.App.addListener("backButton",s)}},em={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function tm(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const sn=Uo({__langPack:{}},{getLocale:tm,set(t=em,e){const n={...t,rtl:t.rtl===!0,getLocale:tm};{if(n.set=sn.set,sn.__langConfig===void 0||sn.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(sn.__langPack,n),sn.props=n,sn.isoName=n.isoName,sn.nativeName=n.nativeName}},install({$q:t,lang:e,ssrContext:n}){t.lang=sn.__langPack,sn.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):this.set(e||em)}});function ZA(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let Jy=!1;function eR(t){Jy=t.isComposing===!0}function tR(t){return Jy===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function ii(t,e){return tR(t)===!0?!1:[].concat(e).includes(t.keyCode)}function Xy(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function nR({is:t,has:e,within:n},r){const i=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const s=Xy(t);s!==void 0&&i.push("platform-"+s)}if(t.nativeMobile===!0){const s=t.nativeMobileWrapper;i.push(s),i.push("native-mobile"),t.ios===!0&&(r[s]===void 0||r[s].iosStatusBarPadding!==!1)&&i.push("q-ios-padding")}else t.electron===!0?i.push("electron"):t.bex===!0&&i.push("bex");return n.iframe===!0&&i.push("within-iframe"),i}function rR(){const{is:t}=Ye,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(nc!==void 0)n.delete("desktop"),n.add("platform-ios"),n.add("mobile");else if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile");const i=Xy(t);i!==void 0?(n.add(`platform-${i}`),n.delete(`platform-${i==="ios"?"android":"ios"}`)):(n.delete("platform-ios"),n.delete("platform-android"))}}Ye.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),Ye.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");e!==r&&(document.body.className=r)}function iR(t){for(const e in t)ZA(e,t[e])}var sR={install(t){if(this.__installed!==!0){if(br.value===!0)rR();else{const{$q:e}=t;e.config.brand!==void 0&&iR(e.config.brand);const n=nR(Ye,e.config);document.body.classList.add.apply(document.body.classList,n)}Ye.is.ios===!0&&document.body.addEventListener("touchstart",hn),window.addEventListener("keydown",eR,!0)}}},oR={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const ll=Uo({iconMapFn:null,__icons:{}},{set(t,e){const n={...t,rtl:t.rtl===!0};n.set=ll.set,Object.assign(ll.__icons,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__icons,tc(t,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?e!==void 0&&this.set(e):this.set(e||oR)}}),Zy="_q_",Td="_q_l_",aR="_q_pc_",LU="_q_fo_",VU="_q_tabs_",ji=()=>{},cl={};let ev=!1;function lR(){ev=!0}function cu(t,e){if(t===e)return!0;if(t!==null&&e!==null&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,r;if(t.constructor===Array){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(cu(t[r],e[r])!==!0)return!1;return!0}if(t.constructor===Map){if(t.size!==e.size)return!1;let s=t.entries();for(r=s.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=s.next()}for(s=t.entries(),r=s.next();r.done!==!0;){if(cu(r.value[1],e.get(r.value[0]))!==!0)return!1;r=s.next()}return!0}if(t.constructor===Set){if(t.size!==e.size)return!1;const s=t.entries();for(r=s.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=s.next()}return!0}if(t.buffer!=null&&t.buffer.constructor===ArrayBuffer){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const i=Object.keys(t).filter(s=>t[s]!==void 0);if(n=i.length,n!==Object.keys(e).filter(s=>e[s]!==void 0).length)return!1;for(r=n;r--!==0;){const s=i[r];if(cu(t[s],e[s])!==!0)return!1}return!0}return t!==t&&e!==e}function Zi(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}function MU(t){return Object.prototype.toString.call(t)==="[object Date]"}const nm=[al,sR,vt,QA,oh,sn,ll];function tv(t,e){const n=Hy(t);n.config.globalProperties=e.config.globalProperties;const{reload:r,...i}=e._context;return Object.assign(n._context,i),n}function rm(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function cR(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(Zy,n.$q),rm(n,nm),e.components!==void 0&&Object.values(e.components).forEach(r=>{Zi(r)===!0&&r.name!==void 0&&t.component(r.name,r)}),e.directives!==void 0&&Object.values(e.directives).forEach(r=>{Zi(r)===!0&&r.name!==void 0&&t.directive(r.name,r)}),e.plugins!==void 0&&rm(n,Object.values(e.plugins).filter(r=>typeof r.install=="function"&&nm.includes(r)===!1)),br.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var uR=function(t,e={}){const n={version:"2.14.3"};ev===!1?(e.config!==void 0&&Object.assign(cl,e.config),n.config={...cl},lR()):n.config=e.config||{},cR(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},hR={version:"2.14.3",install:uR,lang:sn,iconSet:ll};const dR={__name:"App",setup(t){return Iy(e=>{console.log("### onErrorCaptured ###"),console.log("err: ",e)}),(e,n)=>{const r=py("router-view");return an(),ln(r)}}};function FU(t){return t}var fR=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let nv;const rc=t=>nv=t,rv=Symbol();function ah(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var js;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(js||(js={}));function pR(){const t=B_(!0),e=t.run(()=>re({}));let n=[],r=[];const i=Cr({install(s){rc(i),i._a=s,s.provide(rv,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!fR?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const iv=()=>{};function im(t,e,n,r=iv){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&rd()&&q_(i),i}function Ri(t,...e){t.slice().forEach(n=>{n(...e)})}const mR=t=>t();function lh(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];ah(i)&&ah(r)&&t.hasOwnProperty(n)&&!He(r)&&!Wn(r)?t[n]=lh(i,r):t[n]=r}return t}const gR=Symbol();function _R(t){return!ah(t)||!t.hasOwnProperty(gR)}const{assign:sr}=Object;function yR(t){return!!(He(t)&&t.effect)}function vR(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=YI(n.state.value[t]);return sr(u,s,Object.keys(o||{}).reduce((h,d)=>(h[d]=Cr(N(()=>{rc(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=sv(t,c,e,n,r,!0),l}function sv(t,e,n={},r,i,s){let o;const a=sr({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],f;const p=r.state.value[t];!s&&!p&&(r.state.value[t]={}),re({});let v;function g(T){let D;c=u=!1,typeof T=="function"?(T(r.state.value[t]),D={type:js.patchFunction,storeId:t,events:f}):(lh(r.state.value[t],T),D={type:js.patchObject,payload:T,storeId:t,events:f});const L=v=Symbol();dn().then(()=>{v===L&&(c=!0)}),u=!0,Ri(h,D,r.state.value[t])}const w=s?function(){const{state:D}=n,L=D?D():{};this.$patch(z=>{sr(z,L)})}:iv;function y(){o.stop(),h=[],d=[],r._s.delete(t)}function E(T,D){return function(){rc(r);const L=Array.from(arguments),z=[],F=[];function ie(ee){z.push(ee)}function H(ee){F.push(ee)}Ri(d,{args:L,name:T,store:A,after:ie,onError:H});let oe;try{oe=D.apply(this&&this.$id===t?this:A,L)}catch(ee){throw Ri(F,ee),ee}return oe instanceof Promise?oe.then(ee=>(Ri(z,ee),ee)).catch(ee=>(Ri(F,ee),Promise.reject(ee))):(Ri(z,oe),oe)}}const I={_p:r,$id:t,$onAction:im.bind(null,d),$patch:g,$reset:w,$subscribe(T,D={}){const L=im(h,T,D.detached,()=>z()),z=o.run(()=>ke(()=>r.state.value[t],F=>{(D.flush==="sync"?u:c)&&T({storeId:t,type:js.direct,events:f},F)},sr({},l,D)));return L},$dispose:y},A=cn(I);r._s.set(t,A);const V=(r._a&&r._a.runWithContext||mR)(()=>r._e.run(()=>(o=B_()).run(e)));for(const T in V){const D=V[T];if(He(D)&&!yR(D)||Wn(D))s||(p&&_R(D)&&(He(D)?D.value=p[T]:lh(D,p[T])),r.state.value[t][T]=D);else if(typeof D=="function"){const L=E(T,D);V[T]=L,a.actions[T]=D}}return sr(A,V),sr(we(A),V),Object.defineProperty(A,"$state",{get:()=>r.state.value[t],set:T=>{g(D=>{sr(D,T)})}}),r._p.forEach(T=>{sr(A,o.run(()=>T({store:A,app:r._a,pinia:r,options:a})))}),p&&s&&n.hydrate&&n.hydrate(A.$state,p),c=!0,u=!0,A}function wR(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,l){const c=Ob();return a=a||(c?kt(rv,null):null),a&&rc(a),a=nv,a._s.has(r)||(s?sv(r,e,i,a):vR(r,i,a)),a._s.get(r)}return o.$id=r,o}function UU(t){{t=we(t);const e={};for(const n in t){const r=t[n];(He(r)||Wn(r))&&(e[n]=oy(t,n))}return e}}var uu=()=>pR();const sm=[{path:"/",name:"/",component:()=>xe(()=>import("./index.814bacd1.js"),["assets/index.814bacd1.js","assets/index.a599fbed.css","assets/QPage.0289df71.js","assets/post.11e1026b.js","assets/QForm.f582cbc6.js","assets/PostForm.76bcbdd3.js","assets/PostForm.ed0cca82.css","assets/QChip.d224f1d6.js","assets/QItemLabel.48e98d21.js","assets/QCardActions.5b1d4eaf.js","assets/validate-rules.1c7194c1.js","assets/index.86d3e114.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/PostList.58056d5d.js","assets/useBookmark.a021a839.js"])},{path:"/_admin",name:"/_admin",component:()=>xe(()=>import("./_admin.33356c14.js"),["assets/_admin.33356c14.js","assets/route-block.1e6a8648.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{layout:"admin"}},{path:"/:path(.*)",name:"/[...path]",component:()=>xe(()=>import("./_...path_.ca97c299.js"),["assets/_...path_.ca97c299.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/about",name:"/about",component:()=>xe(()=>import("./about.26590555.js"),["assets/about.26590555.js","assets/route-block.1e6a8648.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{layout:"admin"}},{path:"/admin",children:[{path:"",name:"/admin/",component:()=>xe(()=>import("./index.7bcfda58.js"),["assets/index.7bcfda58.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"dashboard",name:"/admin/dashboard",component:()=>xe(()=>import("./dashboard.06b71f04.js"),["assets/dashboard.06b71f04.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{path:"/docs",children:[{path:"",name:"/docs/",component:()=>xe(()=>import("./index.55f6ec46.js"),["assets/index.55f6ec46.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{path:"/ErrorNotFound",name:"/ErrorNotFound",component:()=>xe(()=>import("./ErrorNotFound.8c3c56ee.js"),["assets/ErrorNotFound.8c3c56ee.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/home",name:"home-page",component:()=>xe(()=>import("./home.714f7fa5.js"),["assets/home.714f7fa5.js","assets/QPage.0289df71.js","assets/route-block.1e6a8648.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{requiresAuth:!0,width:"600px",background:"white"}},{path:"/IndexPage",name:"/IndexPage",component:()=>xe(()=>import("./IndexPage.2f728c56.js"),["assets/IndexPage.2f728c56.js","assets/QPage.0289df71.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/mypage",name:"/mypage",component:()=>xe(()=>import("./mypage.2ddf3201.js"),["assets/mypage.2ddf3201.js","assets/QPage.0289df71.js","assets/BaseCard.df0540aa.js","assets/route-block.1e6a8648.js"]),children:[{path:"bookmark",name:"/mypage/bookmark",component:()=>xe(()=>import("./bookmark.dae230a5.js"),["assets/bookmark.dae230a5.js","assets/post.11e1026b.js","assets/PostList.58056d5d.js","assets/QChip.d224f1d6.js","assets/useBookmark.a021a839.js"])},{path:"password",name:"/mypage/password",component:()=>xe(()=>import("./password.41ea408d.js"),["assets/password.41ea408d.js","assets/QForm.f582cbc6.js","assets/QCardActions.5b1d4eaf.js","assets/BaseCard.df0540aa.js","assets/error-message.8e28215f.js"])},{path:"profile",name:"/mypage/profile",component:()=>xe(()=>import("./profile.969b367e.js"),["assets/profile.969b367e.js","assets/QForm.f582cbc6.js","assets/QCardActions.5b1d4eaf.js","assets/BaseCard.df0540aa.js","assets/error-message.8e28215f.js"])}],meta:{requiresAuth:!0}},{path:"/posts",children:[{path:":id",children:[{path:"",name:"/posts/[id]/",component:()=>xe(()=>import("./index.21e85497.js"),["assets/index.21e85497.js","assets/index.4a640d70.css","assets/QPage.0289df71.js","assets/post.11e1026b.js","assets/useBookmark.a021a839.js","assets/BaseCard.df0540aa.js","assets/index.86d3e114.js","assets/QForm.f582cbc6.js","assets/validate-rules.1c7194c1.js","assets/route-block.1e6a8648.js"]),meta:{width:"800px"}},{path:"edit",name:"/posts/[id]/edit",component:()=>xe(()=>import("./edit.1a157bc2.js"),["assets/edit.1a157bc2.js","assets/QPage.0289df71.js","assets/post.11e1026b.js","assets/BaseCard.df0540aa.js","assets/PostForm.76bcbdd3.js","assets/PostForm.ed0cca82.css","assets/QForm.f582cbc6.js","assets/QChip.d224f1d6.js","assets/QItemLabel.48e98d21.js","assets/QCardActions.5b1d4eaf.js","assets/validate-rules.1c7194c1.js","assets/index.86d3e114.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/route-block.1e6a8648.js"]),meta:{width:"800px"}}]}]},{path:"/search",children:[{path:"",name:"/search/",component:()=>xe(()=>import("./index.8616bf47.js"),["assets/index.8616bf47.js","assets/index.0b51622e.css","assets/QPage.0289df71.js","assets/PostList.58056d5d.js","assets/QChip.d224f1d6.js","assets/useBookmark.a021a839.js","assets/post.11e1026b.js"])}]},{path:"/vueuse",children:[{path:"",name:"/vueuse/",component:()=>xe(()=>import("./index.e5777860.js"),["assets/index.e5777860.js","assets/QPage.0289df71.js"])}]}];/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const xi=typeof window!="undefined";function ER(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Re=Object.assign;function hu(t,e){const n={};for(const r in e){const i=e[r];n[r]=fn(i)?i.map(t):t(i)}return n}const zs=()=>{},fn=Array.isArray,TR=/\/$/,IR=t=>t.replace(TR,"");function du(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=SR(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function bR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function om(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function AR(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&es(e.matched[r],n.matched[i])&&ov(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ov(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!RR(t[n],e[n]))return!1;return!0}function RR(t,e){return fn(t)?am(t,e):fn(e)?am(e,t):t===e}function am(t,e){return fn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function SR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var co;(function(t){t.pop="pop",t.push="push"})(co||(co={}));var Hs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hs||(Hs={}));function CR(t){if(!t)if(xi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),IR(t)}const PR=/^[^#]+#/;function kR(t,e){return t.replace(PR,"#")+e}function xR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ic=()=>({left:window.pageXOffset,top:window.pageYOffset});function OR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=xR(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function lm(t,e){return(history.state?history.state.position-e:-1)+t}const ch=new Map;function DR(t,e){ch.set(t,e)}function NR(t){const e=ch.get(t);return ch.delete(t),e}let LR=()=>location.protocol+"//"+location.host;function av(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),om(l,"")}return om(n,t)+r+i}function VR(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=av(t,location),p=n.value,v=e.value;let g=0;if(d){if(n.value=f,e.value=d,o&&o===p){o=null;return}g=v?d.position-v.position:0}else r(f);i.forEach(w=>{w(n.value,p,{delta:g,type:co.pop,direction:g?g>0?Hs.forward:Hs.back:Hs.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const p=i.indexOf(d);p>-1&&i.splice(p,1)};return s.push(f),f}function u(){const{history:d}=window;!d.state||d.replaceState(Re({},d.state,{scroll:ic()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function cm(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?ic():null}}function MR(t){const{history:e,location:n}=window,r={value:av(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:LR()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Re({},e.state,cm(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function a(l,c){const u=Re({},i.value,e.state,{forward:l,scroll:ic()});s(u.current,u,!0);const h=Re({},cm(r.value,l,null),{position:u.position+1},c);s(l,h,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function FR(t){t=CR(t);const e=MR(t),n=VR(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Re({location:"",base:t,go:r,createHref:kR.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function UR(t){return typeof t=="string"||t&&typeof t=="object"}function lv(t){return typeof t=="string"||typeof t=="symbol"}const nr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},cv=Symbol("");var um;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(um||(um={}));function ts(t,e){return Re(new Error,{type:t,[cv]:!0},e)}function Mn(t,e){return t instanceof Error&&cv in t&&(e==null||!!(t.type&e))}const hm="[^/]+?",$R={sensitive:!1,strict:!1,start:!0,end:!0},BR=/[.+*?^${}()[\]/\\]/g;function qR(t,e){const n=Re({},$R,e),r=[];let i=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(BR,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:v,optional:g,regexp:w}=d;s.push({name:p,repeatable:v,optional:g});const y=w||hm;if(y!==hm){f+=10;try{new RegExp(`(${y})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${p}" (${y}): `+I.message)}}let E=v?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(E=g&&c.length<2?`(?:/${E})`:"/"+E),g&&(E+="?"),i+=E,f+=20,g&&(f+=-8),v&&(f+=-20),y===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",p=s[d-1];h[p.name]=f&&p.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:p,repeatable:v,optional:g}=f,w=p in c?c[p]:"";if(fn(w)&&!v)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const y=fn(w)?w.join("/"):w;if(!y)if(g)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=y}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function jR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function zR(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=jR(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(dm(r))return 1;if(dm(i))return-1}return i.length-r.length}function dm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const HR={type:0,value:""},WR=/[a-zA-Z0-9_]/;function KR(t){if(!t)return[[]];if(t==="/")return[[HR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,c="",u="";function h(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:WR.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function GR(t,e,n){const r=qR(KR(t.path),n),i=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function QR(t,e){const n=[],r=new Map;e=mm({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,d){const f=!d,p=YR(u);p.aliasOf=d&&d.record;const v=mm(e,u),g=[p];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const I of E)g.push(Re({},p,{components:d?d.record.components:p.components,path:I,aliasOf:d?d.record:p}))}let w,y;for(const E of g){const{path:I}=E;if(h&&I[0]!=="/"){const A=h.record.path,C=A[A.length-1]==="/"?"":"/";E.path=h.record.path+(I&&C+I)}if(w=GR(E,h,v),d?d.alias.push(w):(y=y||w,y!==w&&y.alias.push(w),f&&u.name&&!pm(w)&&o(u.name)),p.children){const A=p.children;for(let C=0;C<A.length;C++)s(A[C],w,d&&d.children[C])}d=d||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&l(w)}return y?()=>{o(y)}:zs}function o(u){if(lv(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&zR(u,n[h])>=0&&(u.record.path!==n[h].record.path||!uv(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!pm(u)&&r.set(u.record.name,u)}function c(u,h){let d,f={},p,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ts(1,{location:u});v=d.record.name,f=Re(fm(h.params,d.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&fm(u.params,d.keys.map(y=>y.name))),p=d.stringify(f)}else if("path"in u)p=u.path,d=n.find(y=>y.re.test(p)),d&&(f=d.parse(p),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(y=>y.re.test(h.path)),!d)throw ts(1,{location:u,currentLocation:h});v=d.record.name,f=Re({},h.params,u.params),p=d.stringify(f)}const g=[];let w=d;for(;w;)g.unshift(w.record),w=w.parent;return{name:v,path:p,params:f,matched:g,meta:XR(g)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function fm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function YR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:JR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function JR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function pm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function XR(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function mm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function uv(t,e){return e.children.some(n=>n===t||uv(t,n))}const hv=/#/g,ZR=/&/g,eS=/\//g,tS=/=/g,nS=/\?/g,dv=/\+/g,rS=/%5B/g,iS=/%5D/g,fv=/%5E/g,sS=/%60/g,pv=/%7B/g,oS=/%7C/g,mv=/%7D/g,aS=/%20/g;function Id(t){return encodeURI(""+t).replace(oS,"|").replace(rS,"[").replace(iS,"]")}function lS(t){return Id(t).replace(pv,"{").replace(mv,"}").replace(fv,"^")}function uh(t){return Id(t).replace(dv,"%2B").replace(aS,"+").replace(hv,"%23").replace(ZR,"%26").replace(sS,"`").replace(pv,"{").replace(mv,"}").replace(fv,"^")}function cS(t){return uh(t).replace(tS,"%3D")}function uS(t){return Id(t).replace(hv,"%23").replace(nS,"%3F")}function hS(t){return t==null?"":uS(t).replace(eS,"%2F")}function ul(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function dS(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(dv," "),o=s.indexOf("="),a=ul(o<0?s:s.slice(0,o)),l=o<0?null:ul(s.slice(o+1));if(a in e){let c=e[a];fn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function gm(t){let e="";for(let n in t){const r=t[n];if(n=cS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(fn(r)?r.map(s=>s&&uh(s)):[r&&uh(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function fS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=fn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const pS=Symbol(""),_m=Symbol(""),sc=Symbol(""),bd=Symbol(""),hh=Symbol("");function Es(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ur(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ts(4,{from:n,to:e})):h instanceof Error?a(h):UR(h)?a(ts(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},c=t.call(r&&r.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function fu(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(mS(a)){const c=(a.__vccOpts||a)[e];c&&i.push(ur(c,n,r,s,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=ER(c)?c.default:c;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&ur(d,n,r,s,o)()}))}}return i}function mS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ym(t){const e=kt(sc),n=kt(bd),r=N(()=>e.resolve(Dt(t.to))),i=N(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(es.bind(null,u));if(d>-1)return d;const f=vm(l[c-2]);return c>1&&vm(u)===f&&h[h.length-1].path!==f?h.findIndex(es.bind(null,l[c-2])):d}),s=N(()=>i.value>-1&&vS(n.params,r.value.params)),o=N(()=>i.value>-1&&i.value===n.matched.length-1&&ov(n.params,r.value.params));function a(l={}){return yS(l)?e[Dt(t.replace)?"replace":"push"](Dt(t.to)).catch(zs):Promise.resolve()}return{route:r,href:N(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const gS=Ql({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ym,setup(t,{slots:e}){const n=cn(ym(t)),{options:r}=kt(sc),i=N(()=>({[wm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[wm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:U("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),_S=gS;function yS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function vS(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!fn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function vm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wm=(t,e,n)=>t!=null?t:e!=null?e:n,wS=Ql({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=kt(hh),i=N(()=>t.route||r.value),s=kt(_m,0),o=N(()=>{let c=Dt(s);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=N(()=>i.value.matched[o.value]);qi(_m,N(()=>o.value+1)),qi(pS,a),qi(hh,i);const l=re();return ke(()=>[l.value,a.value,t.name],([c,u,h],[d,f,p])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!es(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Em(n.default,{Component:d,route:c});const f=h.props[u],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,g=U(d,Re({},p,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Em(n.default,{Component:g,route:c})||g}}});function Em(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ES=wS;function TS(t){const e=QR(t.routes,t),n=t.parseQuery||dS,r=t.stringifyQuery||gm,i=t.history,s=Es(),o=Es(),a=Es(),l=tl(nr);let c=nr;xi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=hu.bind(null,R=>""+R),h=hu.bind(null,hS),d=hu.bind(null,ul);function f(R,W){let P,J;return lv(R)?(P=e.getRecordMatcher(R),J=W):J=R,e.addRoute(J,P)}function p(R){const W=e.getRecordMatcher(R);W&&e.removeRoute(W)}function v(){return e.getRoutes().map(R=>R.record)}function g(R){return!!e.getRecordMatcher(R)}function w(R,W){if(W=Re({},W||l.value),typeof R=="string"){const _=du(n,R,W.path),b=e.resolve({path:_.path},W),x=i.createHref(_.fullPath);return Re(_,b,{params:d(b.params),hash:ul(_.hash),redirectedFrom:void 0,href:x})}let P;if("path"in R)P=Re({},R,{path:du(n,R.path,W.path).path});else{const _=Re({},R.params);for(const b in _)_[b]==null&&delete _[b];P=Re({},R,{params:h(_)}),W.params=h(W.params)}const J=e.resolve(P,W),Ee=R.hash||"";J.params=u(d(J.params));const Oe=bR(r,Re({},R,{hash:lS(Ee),path:J.path})),m=i.createHref(Oe);return Re({fullPath:Oe,hash:Ee,query:r===gm?fS(R.query):R.query||{}},J,{redirectedFrom:void 0,href:m})}function y(R){return typeof R=="string"?du(n,R,l.value.path):Re({},R)}function E(R,W){if(c!==R)return ts(8,{from:W,to:R})}function I(R){return V(R)}function A(R){return I(Re(y(R),{replace:!0}))}function C(R){const W=R.matched[R.matched.length-1];if(W&&W.redirect){const{redirect:P}=W;let J=typeof P=="function"?P(R):P;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=y(J):{path:J},J.params={}),Re({query:R.query,hash:R.hash,params:"path"in J?{}:R.params},J)}}function V(R,W){const P=c=w(R),J=l.value,Ee=R.state,Oe=R.force,m=R.replace===!0,_=C(P);if(_)return V(Re(y(_),{state:typeof _=="object"?Re({},Ee,_.state):Ee,force:Oe,replace:m}),W||P);const b=P;b.redirectedFrom=W;let x;return!Oe&&AR(r,J,P)&&(x=ts(16,{to:b,from:J}),ht(J,J,!0,!1)),(x?Promise.resolve(x):L(b,J)).catch(k=>Mn(k)?Mn(k,2)?k:ut(k):fe(k,b,J)).then(k=>{if(k){if(Mn(k,2))return V(Re({replace:m},y(k.to),{state:typeof k.to=="object"?Re({},Ee,k.to.state):Ee,force:Oe}),W||b)}else k=F(b,J,!0,m,Ee);return z(b,J,k),k})}function T(R,W){const P=E(R,W);return P?Promise.reject(P):Promise.resolve()}function D(R){const W=Kt.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(R):R()}function L(R,W){let P;const[J,Ee,Oe]=IS(R,W);P=fu(J.reverse(),"beforeRouteLeave",R,W);for(const _ of J)_.leaveGuards.forEach(b=>{P.push(ur(b,R,W))});const m=T.bind(null,R,W);return P.push(m),_e(P).then(()=>{P=[];for(const _ of s.list())P.push(ur(_,R,W));return P.push(m),_e(P)}).then(()=>{P=fu(Ee,"beforeRouteUpdate",R,W);for(const _ of Ee)_.updateGuards.forEach(b=>{P.push(ur(b,R,W))});return P.push(m),_e(P)}).then(()=>{P=[];for(const _ of Oe)if(_.beforeEnter)if(fn(_.beforeEnter))for(const b of _.beforeEnter)P.push(ur(b,R,W));else P.push(ur(_.beforeEnter,R,W));return P.push(m),_e(P)}).then(()=>(R.matched.forEach(_=>_.enterCallbacks={}),P=fu(Oe,"beforeRouteEnter",R,W),P.push(m),_e(P))).then(()=>{P=[];for(const _ of o.list())P.push(ur(_,R,W));return P.push(m),_e(P)}).catch(_=>Mn(_,8)?_:Promise.reject(_))}function z(R,W,P){a.list().forEach(J=>D(()=>J(R,W,P)))}function F(R,W,P,J,Ee){const Oe=E(R,W);if(Oe)return Oe;const m=W===nr,_=xi?history.state:{};P&&(J||m?i.replace(R.fullPath,Re({scroll:m&&_&&_.scroll},Ee)):i.push(R.fullPath,Ee)),l.value=R,ht(R,W,P,m),ut()}let ie;function H(){ie||(ie=i.listen((R,W,P)=>{if(!me.listening)return;const J=w(R),Ee=C(J);if(Ee){V(Re(Ee,{replace:!0}),J).catch(zs);return}c=J;const Oe=l.value;xi&&DR(lm(Oe.fullPath,P.delta),ic()),L(J,Oe).catch(m=>Mn(m,12)?m:Mn(m,2)?(V(m.to,J).then(_=>{Mn(_,20)&&!P.delta&&P.type===co.pop&&i.go(-1,!1)}).catch(zs),Promise.reject()):(P.delta&&i.go(-P.delta,!1),fe(m,J,Oe))).then(m=>{m=m||F(J,Oe,!1),m&&(P.delta&&!Mn(m,8)?i.go(-P.delta,!1):P.type===co.pop&&Mn(m,20)&&i.go(-1,!1)),z(J,Oe,m)}).catch(zs)}))}let oe=Es(),ee=Es(),ge;function fe(R,W,P){ut(R);const J=ee.list();return J.length?J.forEach(Ee=>Ee(R,W,P)):console.error(R),Promise.reject(R)}function qe(){return ge&&l.value!==nr?Promise.resolve():new Promise((R,W)=>{oe.add([R,W])})}function ut(R){return ge||(ge=!R,H(),oe.list().forEach(([W,P])=>R?P(R):W()),oe.reset()),R}function ht(R,W,P,J){const{scrollBehavior:Ee}=t;if(!xi||!Ee)return Promise.resolve();const Oe=!P&&NR(lm(R.fullPath,0))||(J||!P)&&history.state&&history.state.scroll||null;return dn().then(()=>Ee(R,W,Oe)).then(m=>m&&OR(m)).catch(m=>fe(m,R,W))}const je=R=>i.go(R);let _t;const Kt=new Set,me={currentRoute:l,listening:!0,addRoute:f,removeRoute:p,hasRoute:g,getRoutes:v,resolve:w,options:t,push:I,replace:A,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:qe,install(R){const W=this;R.component("RouterLink",_S),R.component("RouterView",ES),R.config.globalProperties.$router=W,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>Dt(l)}),xi&&!_t&&l.value===nr&&(_t=!0,I(i.location).catch(Ee=>{}));const P={};for(const Ee in nr)Object.defineProperty(P,Ee,{get:()=>l.value[Ee],enumerable:!0});R.provide(sc,W),R.provide(bd,ty(P)),R.provide(hh,l);const J=R.unmount;Kt.add(R),R.unmount=function(){Kt.delete(R),Kt.size<1&&(c=nr,ie&&ie(),ie=null,l.value=nr,_t=!1,ge=!1),J()}}};function _e(R){return R.reduce((W,P)=>W.then(()=>D(P)),Promise.resolve())}return me}function IS(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>es(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>es(c,l))||i.push(l))}return[n,r,i]}function $U(){return kt(sc)}function bS(){return kt(bd)}function AS(t){const{extendRoutes:e}=t;return TS(Object.assign(t,{routes:typeof e=="function"?e(sm):sm}))}const dh={xs:18,sm:24,md:32,lg:38,xl:46},Ad={size:String};function Rd(t,e=dh){return N(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}const RS={size:{type:[Number,String],default:"1em"},color:String};function SS(t){return{cSize:N(()=>t.size in dh?`${dh[t.size]}px`:t.size),classes:N(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}const Be=t=>Cr(Ql(t)),gv=t=>Cr(t);var Sd=Be({name:"QSpinner",props:{...RS,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:n}=SS(t);return()=>U("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[U("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});const CS={ratio:[String,Number]};function PS(t,e){return N(()=>{const n=Number(t.ratio||(e!==void 0?e.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}function yn(t,e){return t!==void 0&&t()||e}function _v(t,e){if(t!==void 0){const n=t();if(n!=null)return n.slice()}return e}function Vi(t,e){return t!==void 0?e.concat(t()):e}function kS(t,e){return t===void 0?e:e!==void 0?e.concat(t()):t()}function BU(t,e,n,r,i,s){e.key=r+i;const o=U(t,e,n);return i===!0?Bi(o,s()):o}const xS=16/9;var OS=Be({name:"QImg",props:{...CS,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:xS},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(t,{slots:e,emit:n}){const r=re(t.initialRatio),i=PS(t,r);let s=null,o=!1;const a=[re(null),re(g())],l=re(0),c=re(!1),u=re(!1),h=N(()=>`q-img q-img--${t.noNativeMenu===!0?"no-":""}menu`),d=N(()=>({width:t.width,height:t.height})),f=N(()=>`q-img__image ${t.imgClass!==void 0?t.imgClass+" ":""}q-img__image--with${t.noTransition===!0?"out":""}-transition`),p=N(()=>({...t.imgStyle,objectFit:t.fit,objectPosition:t.position}));ke(()=>v(),w);function v(){return t.src||t.srcset||t.sizes?{src:t.src,srcset:t.srcset,sizes:t.sizes}:null}function g(){return t.placeholderSrc!==void 0?{src:t.placeholderSrc}:null}function w(T){s!==null&&(clearTimeout(s),s=null),u.value=!1,T===null?(c.value=!1,a[l.value^1].value=g()):c.value=!0,a[l.value].value=T}function y({target:T}){o!==!0&&(s!==null&&(clearTimeout(s),s=null),r.value=T.naturalHeight===0?.5:T.naturalWidth/T.naturalHeight,E(T,1))}function E(T,D){o===!0||D===1e3||(T.complete===!0?I(T):s=setTimeout(()=>{s=null,E(T,D+1)},50))}function I(T){o!==!0&&(l.value=l.value^1,a[l.value].value=null,c.value=!1,u.value=!1,n("load",T.currentSrc||T.src))}function A(T){s!==null&&(clearTimeout(s),s=null),c.value=!1,u.value=!0,a[l.value].value=null,a[l.value^1].value=g(),n("error",T)}function C(T){const D=a[T].value,L={key:"img_"+T,class:f.value,style:p.value,crossorigin:t.crossorigin,decoding:t.decoding,referrerpolicy:t.referrerpolicy,height:t.height,width:t.width,loading:t.loading,fetchpriority:t.fetchpriority,"aria-hidden":"true",draggable:t.draggable,...D};return l.value===T?(L.class+=" q-img__image--waiting",Object.assign(L,{onLoad:y,onError:A})):L.class+=" q-img__image--loaded",U("div",{class:"q-img__container absolute-full",key:"img"+T},U("img",L))}function V(){return c.value!==!0?U("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},yn(e[u.value===!0?"error":"default"])):U("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},e.loading!==void 0?e.loading():t.noSpinner===!0?void 0:[U(Sd,{color:t.spinnerColor,size:t.spinnerSize})])}return w(v()),At(()=>{o=!0,s!==null&&(clearTimeout(s),s=null)}),()=>{const T=[];return i.value!==null&&T.push(U("div",{key:"filler",style:i.value})),u.value!==!0&&(a[0].value!==null&&T.push(C(0)),a[1].value!==null&&T.push(C(1))),T.push(U(ri,{name:"q-transition--fade"},V)),U("div",{class:h.value,style:d.value,role:"img","aria-label":t.alt},T)}}});const Tm="0 0 24 24",Im=t=>t,pu=t=>`ionicons ${t}`,yv={"mdi-":t=>`mdi ${t}`,"icon-":Im,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":pu,"ion-ios":pu,"ion-logo":pu,"iconfont ":Im,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},vv={o_:"-outlined",r_:"-round",s_:"-sharp"},wv={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},DS=new RegExp("^("+Object.keys(yv).join("|")+")"),NS=new RegExp("^("+Object.keys(vv).join("|")+")"),bm=new RegExp("^("+Object.keys(wv).join("|")+")"),LS=/^[Mm]\s?[-+]?\.?\d/,VS=/^img:/,MS=/^svguse:/,FS=/^ion-/,US=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var hl=Be({name:"QIcon",props:{...Ad,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Ge(),r=Rd(t),i=N(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),s=N(()=>{let o,a=t.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const u=n.iconMapFn(a);if(u!==void 0)if(u.icon!==void 0){if(a=u.icon,a==="none"||!a)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(LS.test(a)===!0){const[u,h=Tm]=a.split("|");return{svg:!0,viewBox:h,nodes:u.split("&&").map(d=>{const[f,p,v]=d.split("@@");return U("path",{style:p,d:f,transform:v})})}}if(VS.test(a)===!0)return{img:!0,src:a.substring(4)};if(MS.test(a)===!0){const[u,h=Tm]=a.split("|");return{svguse:!0,src:u.substring(7),viewBox:h}}let l=" ";const c=a.match(DS);if(c!==null)o=yv[c[1]](a);else if(US.test(a)===!0)o=a;else if(FS.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(bm.test(a)===!0){o="notranslate material-symbols";const u=a.match(bm);u!==null&&(a=a.substring(6),o+=wv[u[1]]),l=a}else{o="notranslate material-icons";const u=a.match(NS);u!==null&&(a=a.substring(2),o+=vv[u[1]]),l=a}return{cls:o,content:l}});return()=>{const o={class:i.value,style:r.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?U(t.tag,o,yn(e.default)):s.value.img===!0?U(t.tag,o,Vi(e.default,[U("img",{src:s.value.src})])):s.value.svg===!0?U(t.tag,o,Vi(e.default,[U("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?U(t.tag,o,Vi(e.default,[U("svg",{viewBox:s.value.viewBox},[U("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(o.class+=" "+s.value.cls),U(t.tag,o,Vi(e.default,[s.value.content])))}}}),fh=Be({name:"QAvatar",props:{...Ad,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:e}){const n=Rd(t),r=N(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),i=N(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const s=t.icon!==void 0?[U(hl,{name:t.icon})]:void 0;return U("div",{class:r.value,style:n.value},[U("div",{class:"q-avatar__content row flex-center overflow-hidden",style:i.value},kS(e.default,s))])}}}),$S=Be({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:e}){const n=N(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>U("div",{class:n.value},yn(e.default))}});function ph(t,e){const n=t.style;for(const r in e)n[r]=e[r]}function BS(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=Dt(t);if(e)return e.$el||e}function Ev(t,e){if(t==null||t.contains(e)===!0)return!0;for(let n=t.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(e))return!0;return!1}function qS(t,e=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),r=t.apply(this,arguments)),r}}function Am(t,e,n,r){n.modifiers.stop===!0&&Gy(t);const i=n.modifiers.color;let s=n.modifiers.center;s=s===!0||r===!0;const o=document.createElement("span"),a=document.createElement("span"),l=Ky(t),{left:c,top:u,width:h,height:d}=e.getBoundingClientRect(),f=Math.sqrt(h*h+d*d),p=f/2,v=`${(h-f)/2}px`,g=s?v:`${l.left-c-p}px`,w=`${(d-f)/2}px`,y=s?w:`${l.top-u-p}px`;a.className="q-ripple__inner",ph(a,{height:`${f}px`,width:`${f}px`,transform:`translate3d(${g},${y},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),e.appendChild(o);const E=()=>{o.remove(),clearTimeout(I)};n.abort.push(E);let I=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${v},${w},0) scale3d(1,1,1)`,a.style.opacity=.2,I=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,I=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(E),1)},275)},250)},50)}function Rm(t,{modifiers:e,value:n,arg:r}){const i=Object.assign({},t.cfg.ripple,e,n);t.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}var jS=gv({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:e.value!==!1,modifiers:{},abort:[],start(i){r.enabled===!0&&i.qSkipRipple!==!0&&i.type===(r.modifiers.early===!0?"pointerdown":"click")&&Am(i,t,r,i.qKeyEvent===!0)},keystart:qS(i=>{r.enabled===!0&&i.qSkipRipple!==!0&&ii(i,r.modifiers.keyCodes)===!0&&i.type===`key${r.modifiers.early===!0?"down":"up"}`&&Am(i,t,r,!0)},300)};Rm(r,e),t.__qripple=r,sh(r,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n!==void 0&&(n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&Rm(n,e))}},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.abort.forEach(n=>{n()}),Qy(e,"main"),delete t._qripple)}});const Tv={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},zS=Object.keys(Tv),HS={align:{type:String,validator:t=>zS.includes(t)}};function WS(t){return N(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${Tv[e]}`})}function Ua(t){if(Object(t.$parent)===t.$parent)return t.$parent;let{parent:e}=t.$;for(;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function Iv(t){return t.appContext.config.globalProperties.$router!==void 0}function bv(t){return t.isUnmounted===!0||t.isDeactivated===!0}function Sm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function Cm(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function KS(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(Array.isArray(i)===!1||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Pm(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function GS(t,e){return Array.isArray(t)===!0?Pm(t,e):Array.isArray(e)===!0?Pm(e,t):t===e}function QS(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(GS(t[n],e[n])===!1)return!1;return!0}const Av={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Rv({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=Ge(),{props:r,proxy:i,emit:s}=n,o=Iv(n),a=N(()=>r.disable!==!0&&r.href!==void 0),l=N(e===!0?()=>o===!0&&r.disable!==!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!=="":()=>o===!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),c=N(()=>l.value===!0?y(r.to):null),u=N(()=>c.value!==null),h=N(()=>a.value===!0||u.value===!0),d=N(()=>r.type==="a"||h.value===!0?"a":r.tag||t||"div"),f=N(()=>a.value===!0?{href:r.href,target:r.target}:u.value===!0?{href:c.value.href,target:r.target}:{}),p=N(()=>{if(u.value===!1)return-1;const{matched:A}=c.value,{length:C}=A,V=A[C-1];if(V===void 0)return-1;const T=i.$route.matched;if(T.length===0)return-1;const D=T.findIndex(Cm.bind(null,V));if(D>-1)return D;const L=Sm(A[C-2]);return C>1&&Sm(V)===L&&T[T.length-1].path!==L?T.findIndex(Cm.bind(null,A[C-2])):D}),v=N(()=>u.value===!0&&p.value!==-1&&KS(i.$route.params,c.value.params)),g=N(()=>v.value===!0&&p.value===i.$route.matched.length-1&&QS(i.$route.params,c.value.params)),w=N(()=>u.value===!0?g.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":v.value===!0?` ${r.activeClass}`:"":"");function y(A){try{return i.$router.resolve(A)}catch{}return null}function E(A,{returnRouterError:C,to:V=r.to,replace:T=r.replace}={}){if(r.disable===!0)return A.preventDefault(),Promise.resolve(!1);if(A.metaKey||A.altKey||A.ctrlKey||A.shiftKey||A.button!==void 0&&A.button!==0||r.target==="_blank")return Promise.resolve(!1);A.preventDefault();const D=i.$router[T===!0?"replace":"push"](V);return C===!0?D:D.then(()=>{}).catch(()=>{})}function I(A){if(u.value===!0){const C=V=>E(A,V);s("click",A,C),A.defaultPrevented!==!0&&C()}else s("click",A)}return{hasRouterLink:u,hasHrefLink:a,hasLink:h,linkTag:d,resolvedLink:c,linkIsActive:v,linkIsExactActive:g,linkClass:w,linkAttrs:f,getLink:y,navigateToRouterLink:E,navigateOnClick:I}}const km={none:0,xs:4,sm:8,md:16,lg:24,xl:32},YS={xs:8,sm:10,md:14,lg:20,xl:24},JS=["button","submit","reset"],XS=/[^\s]\/[^\s]/,ZS=["flat","outline","push","unelevated"],eC=(t,e)=>t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":e,tC={...Ad,...Av,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...ZS.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...HS.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function nC(t){const e=Rd(t,YS),n=WS(t),{hasRouterLink:r,hasLink:i,linkTag:s,linkAttrs:o,navigateOnClick:a}=Rv({fallbackTag:"button"}),l=N(()=>{const g=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},g,{padding:t.padding.split(/\s+/).map(w=>w in km?km[w]+"px":w).join(" "),minWidth:"0",minHeight:"0"}):g}),c=N(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),u=N(()=>t.disable!==!0&&t.loading!==!0),h=N(()=>u.value===!0?t.tabindex||0:-1),d=N(()=>eC(t,"standard")),f=N(()=>{const g={tabindex:h.value};return i.value===!0?Object.assign(g,o.value):JS.includes(t.type)===!0&&(g.type=t.type),s.value==="a"?(t.disable===!0?g["aria-disabled"]="true":g.href===void 0&&(g.role="button"),r.value!==!0&&XS.test(t.type)===!0&&(g.type=t.type)):t.disable===!0&&(g.disabled="",g["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(g,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),g}),p=N(()=>{let g;t.color!==void 0?t.flat===!0||t.outline===!0?g=`text-${t.textColor||t.color}`:g=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(g=`text-${t.textColor}`);const w=t.round===!0?"round":`rectangle${c.value===!0?" q-btn--rounded":t.square===!0?" q-btn--square":""}`;return`q-btn--${d.value} q-btn--${w}`+(g!==void 0?" "+g:"")+(u.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")+(t.square?" q-btn--square":"")}),v=N(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:p,style:l,innerClasses:v,attributes:f,hasLink:i,linkTag:s,navigateOnClick:a,isActionable:u}}const{passiveCapture:Qt}=Ze;let Si=null,Ci=null,Pi=null;var Un=Be({name:"QBtn",props:{...tC,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:r}=Ge(),{classes:i,style:s,innerClasses:o,attributes:a,hasLink:l,linkTag:c,navigateOnClick:u,isActionable:h}=nC(t),d=re(null),f=re(null);let p=null,v,g=null;const w=N(()=>t.label!==void 0&&t.label!==null&&t.label!==""),y=N(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:l.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),E=N(()=>({center:t.round})),I=N(()=>{const H=Math.max(0,Math.min(100,t.percentage));return H>0?{transition:"transform 0.6s",transform:`translateX(${H-100}%)`}:{}}),A=N(()=>{if(t.loading===!0)return{onMousedown:ie,onTouchstart:ie,onClick:ie,onKeydown:ie,onKeyup:ie};if(h.value===!0){const H={onClick:V,onKeydown:T,onMousedown:L};if(r.$q.platform.has.touch===!0){const oe=t.onTouchstart!==void 0?"":"Passive";H[`onTouchstart${oe}`]=D}return H}return{onClick:$n}}),C=N(()=>({ref:d,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:s.value,...a.value,...A.value}));function V(H){if(d.value!==null){if(H!==void 0){if(H.defaultPrevented===!0)return;const oe=document.activeElement;if(t.type==="submit"&&oe!==document.body&&d.value.contains(oe)===!1&&oe.contains(d.value)===!1){d.value.focus();const ee=()=>{document.removeEventListener("keydown",$n,!0),document.removeEventListener("keyup",ee,Qt),d.value!==null&&d.value.removeEventListener("blur",ee,Qt)};document.addEventListener("keydown",$n,!0),document.addEventListener("keyup",ee,Qt),d.value.addEventListener("blur",ee,Qt)}}u(H)}}function T(H){d.value!==null&&(n("keydown",H),ii(H,[13,32])===!0&&Ci!==d.value&&(Ci!==null&&F(),H.defaultPrevented!==!0&&(d.value.focus(),Ci=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("keyup",z,!0),d.value.addEventListener("blur",z,Qt)),$n(H)))}function D(H){d.value!==null&&(n("touchstart",H),H.defaultPrevented!==!0&&(Si!==d.value&&(Si!==null&&F(),Si=d.value,p=H.target,p.addEventListener("touchcancel",z,Qt),p.addEventListener("touchend",z,Qt)),v=!0,g!==null&&clearTimeout(g),g=setTimeout(()=>{g=null,v=!1},200)))}function L(H){d.value!==null&&(H.qSkipRipple=v===!0,n("mousedown",H),H.defaultPrevented!==!0&&Pi!==d.value&&(Pi!==null&&F(),Pi=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("mouseup",z,Qt)))}function z(H){if(d.value!==null&&!(H!==void 0&&H.type==="blur"&&document.activeElement===d.value)){if(H!==void 0&&H.type==="keyup"){if(Ci===d.value&&ii(H,[13,32])===!0){const oe=new MouseEvent("click",H);oe.qKeyEvent=!0,H.defaultPrevented===!0&&lo(oe),H.cancelBubble===!0&&Gy(oe),d.value.dispatchEvent(oe),$n(H),H.qKeyEvent=!0}n("keyup",H)}F()}}function F(H){const oe=f.value;H!==!0&&(Si===d.value||Pi===d.value)&&oe!==null&&oe!==document.activeElement&&(oe.setAttribute("tabindex",-1),oe.focus()),Si===d.value&&(p!==null&&(p.removeEventListener("touchcancel",z,Qt),p.removeEventListener("touchend",z,Qt)),Si=p=null),Pi===d.value&&(document.removeEventListener("mouseup",z,Qt),Pi=null),Ci===d.value&&(document.removeEventListener("keyup",z,!0),d.value!==null&&d.value.removeEventListener("blur",z,Qt),Ci=null),d.value!==null&&d.value.classList.remove("q-btn--active")}function ie(H){$n(H),H.qSkipRipple=!0}return At(()=>{F(!0)}),Object.assign(r,{click:V}),()=>{let H=[];t.icon!==void 0&&H.push(U(hl,{name:t.icon,left:t.stack!==!0&&w.value===!0,role:"img","aria-hidden":"true"})),w.value===!0&&H.push(U("span",{class:"block"},[t.label])),H=Vi(e.default,H),t.iconRight!==void 0&&t.round===!1&&H.push(U(hl,{name:t.iconRight,right:t.stack!==!0&&w.value===!0,role:"img","aria-hidden":"true"}));const oe=[U("span",{class:"q-focus-helper",ref:f})];return t.loading===!0&&t.percentage!==void 0&&oe.push(U("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[U("span",{class:"q-btn__progress-indicator fit block",style:I.value})])),oe.push(U("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},H)),t.loading!==null&&oe.push(U(ri,{name:"q-transition--fade"},()=>t.loading===!0?[U("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[U(Sd)])]:null)),Bi(U(c.value,C.value,oe),[[jS,y.value,void 0,E.value]])}}});const rC=U("div",{class:"q-space"});var Sv=Be({name:"QSpace",setup(){return()=>rC}});const $o={dark:{type:Boolean,default:null}};function Bo(t,e){return N(()=>t.dark===null?e.dark.isActive:t.dark)}const iC={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},mu={xs:2,sm:4,md:8,lg:16,xl:24};var sC=Be({name:"QSeparator",props:{...$o,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(t){const e=Ge(),n=Bo(t,e.proxy.$q),r=N(()=>t.vertical===!0?"vertical":"horizontal"),i=N(()=>` q-separator--${r.value}`),s=N(()=>t.inset!==!1?`${i.value}-${iC[t.inset]}`:""),o=N(()=>`q-separator${i.value}${s.value}`+(t.color!==void 0?` bg-${t.color}`:"")+(n.value===!0?" q-separator--dark":"")),a=N(()=>{const l={};if(t.size!==void 0&&(l[t.vertical===!0?"width":"height"]=t.size),t.spaced!==!1){const c=t.spaced===!0?`${mu.md}px`:t.spaced in mu?`${mu[t.spaced]}px`:t.spaced,u=t.vertical===!0?["Left","Right"]:["Top","Bottom"];l[`margin${u[0]}`]=l[`margin${u[1]}`]=c}return l});return()=>U("hr",{class:o.value,style:a.value,"aria-orientation":r.value})}}),gu=Be({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:e}){const n=N(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>U("div",{class:n.value},yn(e.default))}}),_u=Be({name:"QItem",props:{...$o,...Av,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=Ge(),i=Bo(t,r),{hasLink:s,linkAttrs:o,linkClass:a,linkTag:l,navigateOnClick:c}=Rv(),u=re(null),h=re(null),d=N(()=>t.clickable===!0||s.value===!0||t.tag==="label"),f=N(()=>t.disable!==!0&&d.value===!0),p=N(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(s.value===!0&&t.active===null?a.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),v=N(()=>{if(t.insetLevel===void 0)return null;const E=r.lang.rtl===!0?"Right":"Left";return{["padding"+E]:16+t.insetLevel*56+"px"}});function g(E){f.value===!0&&(h.value!==null&&(E.qKeyEvent!==!0&&document.activeElement===u.value?h.value.focus():document.activeElement===h.value&&u.value.focus()),c(E))}function w(E){if(f.value===!0&&ii(E,[13,32])===!0){$n(E),E.qKeyEvent=!0;const I=new MouseEvent("click",E);I.qKeyEvent=!0,u.value.dispatchEvent(I)}n("keyup",E)}function y(){const E=_v(e.default,[]);return f.value===!0&&E.unshift(U("div",{class:"q-focus-helper",tabindex:-1,ref:h})),E}return()=>{const E={ref:u,class:p.value,style:v.value,role:"listitem",onClick:g,onKeyup:w};return f.value===!0?(E.tabindex=t.tabindex||"0",Object.assign(E,o.value)):d.value===!0&&(E["aria-disabled"]="true"),U(l.value,E,y())}}}),oC=Be({name:"QList",props:{...$o,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:e}){const n=Ge(),r=Bo(t,n.proxy.$q),i=N(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>U(t.tag,{class:i.value},yn(e.default))}});function aC(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),al.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const lC={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function cC({showing:t,avoidEmit:e,configureAnchorEl:n}){const{props:r,proxy:i,emit:s}=Ge(),o=re(null);let a=null;function l(f){return o.value===null?!1:f===void 0||f.touches===void 0||f.touches.length<=1}const c={};n===void 0&&(Object.assign(c,{hide(f){i.hide(f)},toggle(f){i.toggle(f),f.qAnchorHandled=!0},toggleKey(f){ii(f,13)===!0&&c.toggle(f)},contextClick(f){i.hide(f),lo(f),dn(()=>{i.show(f),f.qAnchorHandled=!0})},prevent:lo,mobileTouch(f){if(c.mobileCleanup(f),l(f)!==!0)return;i.hide(f),o.value.classList.add("non-selectable");const p=f.target;sh(c,"anchor",[[p,"touchmove","mobileCleanup","passive"],[p,"touchend","mobileCleanup","passive"],[p,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),a=setTimeout(()=>{a=null,i.show(f),f.qAnchorHandled=!0},300)},mobileCleanup(f){o.value.classList.remove("non-selectable"),a!==null&&(clearTimeout(a),a=null),t.value===!0&&f!==void 0&&aC()}}),n=function(f=r.contextMenu){if(r.noParentEvent===!0||o.value===null)return;let p;f===!0?i.$q.platform.is.mobile===!0?p=[[o.value,"touchstart","mobileTouch","passive"]]:p=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:p=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],sh(c,"anchor",p)});function u(){Qy(c,"anchor")}function h(f){for(o.value=f;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function d(){if(r.target===!1||r.target===""||i.$el.parentNode===null)o.value=null;else if(r.target===!0)h(i.$el.parentNode);else{let f=r.target;if(typeof r.target=="string")try{f=document.querySelector(r.target)}catch{f=void 0}f!=null?(o.value=f.$el||f,n()):(o.value=null,console.error(`Anchor: target "${r.target}" not found`))}}return ke(()=>r.contextMenu,f=>{o.value!==null&&(u(),n(f))}),ke(()=>r.target,()=>{o.value!==null&&u(),d()}),ke(()=>r.noParentEvent,f=>{o.value!==null&&(f===!0?u():n())}),Nn(()=>{d(),e!==!0&&r.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),At(()=>{a!==null&&clearTimeout(a),u()}),{anchorEl:o,canShow:l,anchorEvents:c}}function uC(t,e){const n=re(null);let r;function i(a,l){const c=`${l!==void 0?"add":"remove"}EventListener`,u=l!==void 0?l:r;a!==window&&a[c]("scroll",u,Ze.passive),window[c]("scroll",u,Ze.passive),r=l}function s(){n.value!==null&&(i(n.value),n.value=null)}const o=ke(()=>t.noParentEvent,()=>{n.value!==null&&(s(),e())});return At(o),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:i}}const Cv={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Pv=["beforeShow","show","beforeHide","hide"];function kv({showing:t,canShow:e,hideOnRouteChange:n,handleShow:r,handleHide:i,processOnMount:s}){const o=Ge(),{props:a,emit:l,proxy:c}=o;let u;function h(y){t.value===!0?p(y):d(y)}function d(y){if(a.disable===!0||y!==void 0&&y.qAnchorHandled===!0||e!==void 0&&e(y)!==!0)return;const E=a["onUpdate:modelValue"]!==void 0;E===!0&&(l("update:modelValue",!0),u=y,dn(()=>{u===y&&(u=void 0)})),(a.modelValue===null||E===!1)&&f(y)}function f(y){t.value!==!0&&(t.value=!0,l("beforeShow",y),r!==void 0?r(y):l("show",y))}function p(y){if(a.disable===!0)return;const E=a["onUpdate:modelValue"]!==void 0;E===!0&&(l("update:modelValue",!1),u=y,dn(()=>{u===y&&(u=void 0)})),(a.modelValue===null||E===!1)&&v(y)}function v(y){t.value!==!1&&(t.value=!1,l("beforeHide",y),i!==void 0?i(y):l("hide",y))}function g(y){a.disable===!0&&y===!0?a["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!1):y===!0!==t.value&&(y===!0?f:v)(u)}ke(()=>a.modelValue,g),n!==void 0&&Iv(o)===!0&&ke(()=>c.$route.fullPath,()=>{n.value===!0&&t.value===!0&&p()}),s===!0&&Nn(()=>{g(a.modelValue)});const w={show:d,hide:p,toggle:h};return Object.assign(c,w),w}let qr=[],uo=[];function xv(t){uo=uo.filter(e=>e!==t)}function hC(t){xv(t),uo.push(t)}function xm(t){xv(t),uo.length===0&&qr.length!==0&&(qr[qr.length-1](),qr=[])}function Ov(t){uo.length===0?t():qr.push(t)}function qU(t){qr=qr.filter(e=>e!==t)}let dC=1,fC=document.body;function Cd(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${dC++}`:t,cl.globalNodes!==void 0){const r=cl.globalNodes.class;r!==void 0&&(n.className=r)}return fC.appendChild(n),n}function pC(t){t.remove()}const zi=[];function mC(t){return zi.find(e=>e.contentEl!==null&&e.contentEl.contains(t))}function Dv(t,e){do{if(t.$options.name==="QMenu"){if(t.hide(e),t.$props.separateClosePopup===!0)return Ua(t)}else if(t.__qPortal===!0){const n=Ua(t);return n!==void 0&&n.$options.name==="QPopupProxy"?(t.hide(e),n):t}t=Ua(t)}while(t!=null)}function gC(t,e,n){for(;n!==0&&t!==void 0&&t!==null;){if(t.__qPortal===!0){if(n--,t.$options.name==="QMenu"){t=Dv(t,e);continue}t.hide(e)}t=Ua(t)}}function _C(t){for(t=t.parent;t!=null;){if(t.type.name==="QGlobalDialog")return!0;if(t.type.name==="QDialog"||t.type.name==="QMenu")return!1;t=t.parent}return!1}function Nv(t,e,n,r){const i=re(!1),s=re(!1);let o=null;const a={},l=r==="dialog"&&_C(t);function c(h){if(h===!0){xm(a),s.value=!0;return}s.value=!1,i.value===!1&&(l===!1&&o===null&&(o=Cd(!1,r)),i.value=!0,zi.push(t.proxy),hC(a))}function u(h){if(s.value=!1,h!==!0)return;xm(a),i.value=!1;const d=zi.indexOf(t.proxy);d!==-1&&zi.splice(d,1),o!==null&&(pC(o),o=null)}return Jl(()=>{u(!0)}),t.proxy.__qPortal=!0,tc(t.proxy,"contentEl",()=>e.value),{showPortal:c,hidePortal:u,portalIsActive:i,portalIsAccessible:s,renderPortal:()=>l===!0?n():i.value===!0?[U(Hb,{to:o},n())]:void 0}}const Lv={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Vv(t,e=()=>{},n=()=>{}){return{transitionProps:N(()=>{const r=`q-transition--${t.transitionShow||e()}`,i=`q-transition--${t.transitionHide||n()}`;return{appear:!0,enterFromClass:`${r}-enter-from`,enterActiveClass:`${r}-enter-active`,enterToClass:`${r}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:N(()=>`--q-transition-duration: ${t.transitionDuration}ms`)}}function Mv(){let t;const e=Ge();function n(){t=void 0}return gd(n),At(n),{removeTick:n,registerTick(r){t=r,dn(()=>{t===r&&(bv(e)===!1&&t(),t=void 0)})}}}function Fv(){let t=null;const e=Ge();function n(){t!==null&&(clearTimeout(t),t=null)}return gd(n),At(n),{removeTimeout:n,registerTimeout(r,i){n(),bv(e)===!1&&(t=setTimeout(r,i))}}}const yC=[null,document,document.body,document.scrollingElement,document.documentElement];function Uv(t,e){let n=BS(e);if(n===void 0){if(t==null)return window;n=t.closest(".scroll,.scroll-y,.overflow-auto")}return yC.includes(n)?window:n}function $v(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function Bv(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let va;function $a(){if(va!==void 0)return va;const t=document.createElement("p"),e=document.createElement("div");ph(t,{width:"100%",height:"200px"}),ph(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const n=t.offsetWidth;e.style.overflow="scroll";let r=t.offsetWidth;return n===r&&(r=e.clientWidth),e.remove(),va=n-r,va}function vC(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}const Jr=[];let ns;function wC(t){ns=t.keyCode===27}function EC(){ns===!0&&(ns=!1)}function TC(t){ns===!0&&(ns=!1,ii(t,27)===!0&&Jr[Jr.length-1](t))}function qv(t){window[t]("keydown",wC),window[t]("blur",EC),window[t]("keyup",TC),ns=!1}function jv(t){Ye.is.desktop===!0&&(Jr.push(t),Jr.length===1&&qv("addEventListener"))}function dl(t){const e=Jr.indexOf(t);e>-1&&(Jr.splice(e,1),Jr.length===0&&qv("removeEventListener"))}const Xr=[];function zv(t){Xr[Xr.length-1](t)}function Hv(t){Ye.is.desktop===!0&&(Xr.push(t),Xr.length===1&&document.body.addEventListener("focusin",zv))}function mh(t){const e=Xr.indexOf(t);e>-1&&(Xr.splice(e,1),Xr.length===0&&document.body.removeEventListener("focusin",zv))}const{notPassiveCapture:fl}=Ze,Zr=[];function pl(t){const e=t.target;if(e===void 0||e.nodeType===8||e.classList.contains("no-pointer-events")===!0)return;let n=zi.length-1;for(;n>=0;){const r=zi[n].$;if(r.type.name==="QTooltip"){n--;continue}if(r.type.name!=="QDialog")break;if(r.props.seamless!==!0)return;n--}for(let r=Zr.length-1;r>=0;r--){const i=Zr[r];if((i.anchorEl.value===null||i.anchorEl.value.contains(e)===!1)&&(e===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(e)===!1))t.qClickOutside=!0,i.onClickOutside(t);else return}}function IC(t){Zr.push(t),Zr.length===1&&(document.addEventListener("mousedown",pl,fl),document.addEventListener("touchstart",pl,fl))}function Om(t){const e=Zr.findIndex(n=>n===t);e>-1&&(Zr.splice(e,1),Zr.length===0&&(document.removeEventListener("mousedown",pl,fl),document.removeEventListener("touchstart",pl,fl)))}let Dm,Nm;function Lm(t){const e=t.split(" ");return e.length!==2?!1:["top","center","bottom"].includes(e[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(e[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function bC(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const gh={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{gh[`${t}#ltr`]=t,gh[`${t}#rtl`]=t});function Vm(t,e){const n=t.split(" ");return{vertical:n[0],horizontal:gh[`${n[1]}#${e===!0?"rtl":"ltr"}`]}}function AC(t,e){let{top:n,left:r,right:i,bottom:s,width:o,height:a}=t.getBoundingClientRect();return e!==void 0&&(n-=e[1],r-=e[0],s+=e[1],i+=e[0],o+=e[0],a+=e[1]),{top:n,bottom:s,height:a,left:r,right:i,width:o,middle:r+(i-r)/2,center:n+(s-n)/2}}function RC(t,e,n){let{top:r,left:i}=t.getBoundingClientRect();return r+=e.top,i+=e.left,n!==void 0&&(r+=n[1],i+=n[0]),{top:r,bottom:r+1,height:1,left:i,right:i+1,width:1,middle:i,center:r}}function SC(t,e){return{top:0,center:e/2,bottom:e,left:0,middle:t/2,right:t}}function Mm(t,e,n,r){return{top:t[n.vertical]-e[r.vertical],left:t[n.horizontal]-e[r.horizontal]}}function Wv(t,e=0){if(t.targetEl===null||t.anchorEl===null||e>5)return;if(t.targetEl.offsetHeight===0||t.targetEl.offsetWidth===0){setTimeout(()=>{Wv(t,e+1)},10);return}const{targetEl:n,offset:r,anchorEl:i,anchorOrigin:s,selfOrigin:o,absoluteOffset:a,fit:l,cover:c,maxHeight:u,maxWidth:h}=t;if(Ye.is.ios===!0&&window.visualViewport!==void 0){const C=document.body.style,{offsetLeft:V,offsetTop:T}=window.visualViewport;V!==Dm&&(C.setProperty("--q-pe-left",V+"px"),Dm=V),T!==Nm&&(C.setProperty("--q-pe-top",T+"px"),Nm=T)}const{scrollLeft:d,scrollTop:f}=n,p=a===void 0?AC(i,c===!0?[0,0]:r):RC(i,a,r);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:h||"100vw",maxHeight:u||"100vh",visibility:"visible"});const{offsetWidth:v,offsetHeight:g}=n,{elWidth:w,elHeight:y}=l===!0||c===!0?{elWidth:Math.max(p.width,v),elHeight:c===!0?Math.max(p.height,g):g}:{elWidth:v,elHeight:g};let E={maxWidth:h,maxHeight:u};(l===!0||c===!0)&&(E.minWidth=p.width+"px",c===!0&&(E.minHeight=p.height+"px")),Object.assign(n.style,E);const I=SC(w,y);let A=Mm(p,I,s,o);if(a===void 0||r===void 0)yu(A,p,I,s,o);else{const{top:C,left:V}=A;yu(A,p,I,s,o);let T=!1;if(A.top!==C){T=!0;const D=2*r[1];p.center=p.top-=D,p.bottom-=D+2}if(A.left!==V){T=!0;const D=2*r[0];p.middle=p.left-=D,p.right-=D+2}T===!0&&(A=Mm(p,I,s,o),yu(A,p,I,s,o))}E={top:A.top+"px",left:A.left+"px"},A.maxHeight!==void 0&&(E.maxHeight=A.maxHeight+"px",p.height>A.maxHeight&&(E.minHeight=E.maxHeight)),A.maxWidth!==void 0&&(E.maxWidth=A.maxWidth+"px",p.width>A.maxWidth&&(E.minWidth=E.maxWidth)),Object.assign(n.style,E),n.scrollTop!==f&&(n.scrollTop=f),n.scrollLeft!==d&&(n.scrollLeft=d)}function yu(t,e,n,r,i){const s=n.bottom,o=n.right,a=$a(),l=window.innerHeight-a,c=document.body.clientWidth;if(t.top<0||t.top+s>l)if(i.vertical==="center")t.top=e[r.vertical]>l/2?Math.max(0,l-s):0,t.maxHeight=Math.min(s,l);else if(e[r.vertical]>l/2){const u=Math.min(l,r.vertical==="center"?e.center:r.vertical===i.vertical?e.bottom:e.top);t.maxHeight=Math.min(s,u),t.top=Math.max(0,u-s)}else t.top=Math.max(0,r.vertical==="center"?e.center:r.vertical===i.vertical?e.top:e.bottom),t.maxHeight=Math.min(s,l-t.top);if(t.left<0||t.left+o>c)if(t.maxWidth=Math.min(o,c),i.horizontal==="middle")t.left=e[r.horizontal]>c/2?Math.max(0,c-o):0;else if(e[r.horizontal]>c/2){const u=Math.min(c,r.horizontal==="middle"?e.middle:r.horizontal===i.horizontal?e.right:e.left);t.maxWidth=Math.min(o,u),t.left=Math.max(0,u-t.maxWidth)}else t.left=Math.max(0,r.horizontal==="middle"?e.middle:r.horizontal===i.horizontal?e.left:e.right),t.maxWidth=Math.min(o,c-t.left)}var CC=Be({name:"QMenu",inheritAttrs:!1,props:{...lC,...Cv,...$o,...Lv,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Lm},self:{type:String,validator:Lm},offset:{type:Array,validator:bC},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Pv,"click","escapeKey"],setup(t,{slots:e,emit:n,attrs:r}){let i=null,s,o,a;const l=Ge(),{proxy:c}=l,{$q:u}=c,h=re(null),d=re(!1),f=N(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),p=Bo(t,u),{registerTick:v,removeTick:g}=Mv(),{registerTimeout:w}=Fv(),{transitionProps:y,transitionStyle:E}=Vv(t),{localScrollTarget:I,changeScrollEvent:A,unconfigureScrollTarget:C}=uC(t,_t),{anchorEl:V,canShow:T}=cC({showing:d}),{hide:D}=kv({showing:d,canShow:T,handleShow:ut,handleHide:ht,hideOnRouteChange:f,processOnMount:!0}),{showPortal:L,hidePortal:z,renderPortal:F}=Nv(l,h,W,"menu"),ie={anchorEl:V,innerRef:h,onClickOutside(P){if(t.persistent!==!0&&d.value===!0)return D(P),(P.type==="touchstart"||P.target.classList.contains("q-dialog__backdrop"))&&$n(P),!0}},H=N(()=>Vm(t.anchor||(t.cover===!0?"center middle":"bottom start"),u.lang.rtl)),oe=N(()=>t.cover===!0?H.value:Vm(t.self||"top start",u.lang.rtl)),ee=N(()=>(t.square===!0?" q-menu--square":"")+(p.value===!0?" q-menu--dark q-dark":"")),ge=N(()=>t.autoClose===!0?{onClick:Kt}:{}),fe=N(()=>d.value===!0&&t.persistent!==!0);ke(fe,P=>{P===!0?(jv(_e),IC(ie)):(dl(_e),Om(ie))});function qe(){Ov(()=>{let P=h.value;P&&P.contains(document.activeElement)!==!0&&(P=P.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||P.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||P.querySelector("[autofocus], [data-autofocus]")||P,P.focus({preventScroll:!0}))})}function ut(P){if(i=t.noRefocus===!1?document.activeElement:null,Hv(me),L(),_t(),s=void 0,P!==void 0&&(t.touchPosition||t.contextMenu)){const J=Ky(P);if(J.left!==void 0){const{top:Ee,left:Oe}=V.value.getBoundingClientRect();s={left:J.left-Oe,top:J.top-Ee}}}o===void 0&&(o=ke(()=>u.screen.width+"|"+u.screen.height+"|"+t.self+"|"+t.anchor+"|"+u.lang.rtl,R)),t.noFocus!==!0&&document.activeElement.blur(),v(()=>{R(),t.noFocus!==!0&&qe()}),w(()=>{u.platform.is.ios===!0&&(a=t.autoClose,h.value.click()),R(),L(!0),n("show",P)},t.transitionDuration)}function ht(P){g(),z(),je(!0),i!==null&&(P===void 0||P.qClickOutside!==!0)&&(((P&&P.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),w(()=>{z(!0),n("hide",P)},t.transitionDuration)}function je(P){s=void 0,o!==void 0&&(o(),o=void 0),(P===!0||d.value===!0)&&(mh(me),C(),Om(ie),dl(_e)),P!==!0&&(i=null)}function _t(){(V.value!==null||t.scrollTarget!==void 0)&&(I.value=Uv(V.value,t.scrollTarget),A(I.value,R))}function Kt(P){a!==!0?(Dv(c,P),n("click",P)):a=!1}function me(P){fe.value===!0&&t.noFocus!==!0&&Ev(h.value,P.target)!==!0&&qe()}function _e(P){n("escapeKey"),D(P)}function R(){Wv({targetEl:h.value,offset:t.offset,anchorEl:V.value,anchorOrigin:H.value,selfOrigin:oe.value,absoluteOffset:s,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function W(){return U(ri,y.value,()=>d.value===!0?U("div",{role:"menu",...r,ref:h,tabindex:-1,class:["q-menu q-position-engine scroll"+ee.value,r.class],style:[r.style,E.value],...ge.value},yn(e.default)):null)}return At(je),Object.assign(c,{focus:qe,updatePosition:R}),F}}),PC=Be({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:e}){const n=N(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>U("div",{class:n.value,role:"toolbar"},yn(e.default))}});function kC(){const t=re(!br.value);return t.value===!1&&Nn(()=>{t.value=!0}),t}const Kv=typeof ResizeObserver!="undefined",Fm=Kv===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var _h=Be({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:e}){let n=null,r,i={width:-1,height:-1};function s(l){l===!0||t.debounce===0||t.debounce==="0"?o():n===null&&(n=setTimeout(o,t.debounce))}function o(){if(n!==null&&(clearTimeout(n),n=null),r){const{offsetWidth:l,offsetHeight:c}=r;(l!==i.width||c!==i.height)&&(i={width:l,height:c},e("resize",i))}}const{proxy:a}=Ge();if(a.trigger=s,Kv===!0){let l;const c=u=>{r=a.$el.parentNode,r?(l=new ResizeObserver(s),l.observe(r),o()):u!==!0&&dn(()=>{c(!0)})};return Nn(()=>{c()}),At(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():r&&l.unobserve(r))}),hn}else{let u=function(){n!==null&&(clearTimeout(n),n=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",s,Ze.passive),c=void 0)},h=function(){u(),r&&r.contentDocument&&(c=r.contentDocument.defaultView,c.addEventListener("resize",s,Ze.passive),o())};const l=kC();let c;return Nn(()=>{dn(()=>{r=a.$el,r&&h()})}),At(u),()=>{if(l.value===!0)return U("object",{style:Fm.style,tabindex:-1,type:"text/html",data:Fm.url,"aria-hidden":"true",onLoad:h})}}}}),xC=Be({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=Ge(),i=kt(Td,ji);if(i===ji)return console.error("QHeader needs to be child of QLayout"),ji;const s=re(parseInt(t.heightHint,10)),o=re(!0),a=N(()=>t.reveal===!0||i.view.value.indexOf("H")>-1||r.platform.is.ios&&i.isContainer.value===!0),l=N(()=>{if(t.modelValue!==!0)return 0;if(a.value===!0)return o.value===!0?s.value:0;const y=s.value-i.scroll.value.position;return y>0?y:0}),c=N(()=>t.modelValue!==!0||a.value===!0&&o.value!==!0),u=N(()=>t.modelValue===!0&&c.value===!0&&t.reveal===!0),h=N(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),d=N(()=>{const y=i.rows.value.top,E={};return y[0]==="l"&&i.left.space===!0&&(E[r.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),y[2]==="r"&&i.right.space===!0&&(E[r.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),E});function f(y,E){i.update("header",y,E)}function p(y,E){y.value!==E&&(y.value=E)}function v({height:y}){p(s,y),f("size",y)}function g(y){u.value===!0&&p(o,!0),n("focusin",y)}ke(()=>t.modelValue,y=>{f("space",y),p(o,!0),i.animate()}),ke(l,y=>{f("offset",y)}),ke(()=>t.reveal,y=>{y===!1&&p(o,t.modelValue)}),ke(o,y=>{i.animate(),n("reveal",y)}),ke(i.scroll,y=>{t.reveal===!0&&p(o,y.direction==="up"||y.position<=t.revealOffset||y.position-y.inflectionPoint<100)});const w={};return i.instances.header=w,t.modelValue===!0&&f("size",s.value),f("space",t.modelValue),f("offset",l.value),At(()=>{i.instances.header===w&&(i.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const y=_v(e.default,[]);return t.elevated===!0&&y.push(U("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),y.push(U(_h,{debounce:0,onResize:v})),U("header",{class:h.value,style:d.value,onFocusin:g},y)}}}),OC=Be({name:"QPageContainer",setup(t,{slots:e}){const{proxy:{$q:n}}=Ge(),r=kt(Td,ji);if(r===ji)return console.error("QPageContainer needs to be child of QLayout"),ji;qi(aR,!0);const i=N(()=>{const s={};return r.header.space===!0&&(s.paddingTop=`${r.header.size}px`),r.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(s.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),s});return()=>U("div",{class:"q-page-container",style:i.value},yn(e.default))}});const{passive:Um}=Ze,DC=["both","horizontal","vertical"];var NC=Be({name:"QScrollObserver",props:{axis:{type:String,validator:t=>DC.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(t,{emit:e}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,i,s;ke(()=>t.scrollTarget,()=>{l(),a()});function o(){r!==null&&r();const h=Math.max(0,$v(i)),d=Bv(i),f={top:h-n.position.top,left:d-n.position.left};if(t.axis==="vertical"&&f.top===0||t.axis==="horizontal"&&f.left===0)return;const p=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";n.position={top:h,left:d},n.directionChanged=n.direction!==p,n.delta=f,n.directionChanged===!0&&(n.direction=p,n.inflectionPoint=n.position),e("scroll",{...n})}function a(){i=Uv(s,t.scrollTarget),i.addEventListener("scroll",c,Um),c(!0)}function l(){i!==void 0&&(i.removeEventListener("scroll",c,Um),i=void 0)}function c(h){if(h===!0||t.debounce===0||t.debounce==="0")o();else if(r===null){const[d,f]=t.debounce?[setTimeout(o,t.debounce),clearTimeout]:[requestAnimationFrame(o),cancelAnimationFrame];r=()=>{f(d),r=null}}}const{proxy:u}=Ge();return ke(()=>u.$q.lang.rtl,o),Nn(()=>{s=u.$el.parentNode,a()}),At(()=>{r!==null&&r(),l()}),Object.assign(u,{trigger:c,getPosition:()=>n}),hn}}),LC=Be({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=Ge(),i=re(null),s=re(r.screen.height),o=re(t.container===!0?0:r.screen.width),a=re({position:0,direction:"down",inflectionPoint:0}),l=re(0),c=re(br.value===!0?0:$a()),u=N(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),h=N(()=>t.container===!1?{minHeight:r.screen.height+"px"}:null),d=N(()=>c.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),f=N(()=>c.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function p(I){if(t.container===!0||document.qScrollPrevented!==!0){const A={position:I.position.top,direction:I.direction,directionChanged:I.directionChanged,inflectionPoint:I.inflectionPoint.top,delta:I.delta.top};a.value=A,t.onScroll!==void 0&&n("scroll",A)}}function v(I){const{height:A,width:C}=I;let V=!1;s.value!==A&&(V=!0,s.value=A,t.onScrollHeight!==void 0&&n("scrollHeight",A),w()),o.value!==C&&(V=!0,o.value=C),V===!0&&t.onResize!==void 0&&n("resize",I)}function g({height:I}){l.value!==I&&(l.value=I,w())}function w(){if(t.container===!0){const I=s.value>l.value?$a():0;c.value!==I&&(c.value=I)}}let y=null;const E={instances:{},view:N(()=>t.view),isContainer:N(()=>t.container),rootRef:i,height:s,containerHeight:l,scrollbarWidth:c,totalWidth:N(()=>o.value+c.value),rows:N(()=>{const I=t.view.toLowerCase().split(" ");return{top:I[0].split(""),middle:I[1].split(""),bottom:I[2].split("")}}),header:cn({size:0,offset:0,space:!1}),right:cn({size:300,offset:0,space:!1}),footer:cn({size:0,offset:0,space:!1}),left:cn({size:300,offset:0,space:!1}),scroll:a,animate(){y!==null?clearTimeout(y):document.body.classList.add("q-body--layout-animate"),y=setTimeout(()=>{y=null,document.body.classList.remove("q-body--layout-animate")},155)},update(I,A,C){E[I][A]=C}};if(qi(Td,E),$a()>0){let C=function(){I=null,A.classList.remove("hide-scrollbar")},V=function(){if(I===null){if(A.scrollHeight>r.screen.height)return;A.classList.add("hide-scrollbar")}else clearTimeout(I);I=setTimeout(C,300)},T=function(D){I!==null&&D==="remove"&&(clearTimeout(I),C()),window[`${D}EventListener`]("resize",V)},I=null;const A=document.body;ke(()=>t.container!==!0?"add":"remove",T),t.container!==!0&&T("add"),Jl(()=>{T("remove")})}return()=>{const I=Vi(e.default,[U(NC,{onScroll:p}),U(_h,{onResize:v})]),A=U("div",{class:u.value,style:h.value,ref:t.container===!0?void 0:i,tabindex:-1},I);return t.container===!0?U("div",{class:"q-layout-container overflow-hidden",ref:i},[U(_h,{onResize:g}),U("div",{class:"absolute-full",style:d.value},[U("div",{class:"scroll",style:f.value},[A])])]):A}}});function $m(t){if(t===!1)return 0;if(t===!0||t===void 0)return 1;const e=parseInt(t,10);return isNaN(e)?0:e}var Ba=gv({name:"close-popup",beforeMount(t,{value:e}){const n={depth:$m(e),handler(r){n.depth!==0&&setTimeout(()=>{const i=mC(t);i!==void 0&&gC(i,r,n.depth)})},handlerKey(r){ii(r,13)===!0&&n.handler(r)}};t.__qclosepopup=n,t.addEventListener("click",n.handler),t.addEventListener("keyup",n.handlerKey)},updated(t,{value:e,oldValue:n}){e!==n&&(t.__qclosepopup.depth=$m(e))},beforeUnmount(t){const e=t.__qclosepopup;t.removeEventListener("click",e.handler),t.removeEventListener("keyup",e.handlerKey),delete t.__qclosepopup}});function VC(){return kt(Zy)}function MC(t){return rd()?(q_(t),!0):!1}function hr(t){return typeof t=="function"?t():Dt(t)}const qo=typeof window!="undefined"&&typeof document!="undefined";typeof WorkerGlobalScope!="undefined"&&globalThis instanceof WorkerGlobalScope;const jU=t=>t!=null,FC=Object.prototype.toString,UC=t=>FC.call(t)==="[object Object]",ml=()=>{},zU=$C();function $C(){var t,e;return qo&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function BC(t,e){function n(...r){return new Promise((i,s)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(i).catch(s)})}return n}const Gv=t=>t();function qC(t=Gv){const e=re(!0);function n(){e.value=!1}function r(){e.value=!0}const i=(...s)=>{e.value&&t(...s)};return{isActive:Wl(e),pause:n,resume:r,eventFilter:i}}const HU={mounted:"mounted",updated:"updated",unmounted:"unmounted"};function yh(t,e=!1,n="Timeout"){return new Promise((r,i)=>{setTimeout(e?()=>i(n):r,t)})}function jC(t){return t||Ge()}function WU(...t){if(t.length!==1)return oy(...t);const e=t[0];return typeof e=="function"?Wl(QI(()=>({get:e,set:ml}))):re(e)}function zC(t,e,n={}){const{eventFilter:r=Gv,...i}=n;return ke(t,BC(r,e),i)}function HC(t,e,n={}){const{eventFilter:r,...i}=n,{eventFilter:s,pause:o,resume:a,isActive:l}=qC(r);return{stop:zC(t,e,{...i,eventFilter:s}),pause:o,resume:a,isActive:l}}function WC(t,e=!0,n){jC()?Nn(t,n):e?t():dn(t)}function vh(t,e=!1){function n(h,{flush:d="sync",deep:f=!1,timeout:p,throwOnTimeout:v}={}){let g=null;const y=[new Promise(E=>{g=ke(t,I=>{h(I)!==e&&(g==null||g(),E(I))},{flush:d,deep:f,immediate:!0})})];return p!=null&&y.push(yh(p,v).then(()=>hr(t)).finally(()=>g==null?void 0:g())),Promise.race(y)}function r(h,d){if(!He(h))return n(I=>I===h,d);const{flush:f="sync",deep:p=!1,timeout:v,throwOnTimeout:g}=d!=null?d:{};let w=null;const E=[new Promise(I=>{w=ke([t,h],([A,C])=>{e!==(A===C)&&(w==null||w(),I(A))},{flush:f,deep:p,immediate:!0})})];return v!=null&&E.push(yh(v,g).then(()=>hr(t)).finally(()=>(w==null||w(),hr(t)))),Promise.race(E)}function i(h){return n(d=>Boolean(d),h)}function s(h){return r(null,h)}function o(h){return r(void 0,h)}function a(h){return n(Number.isNaN,h)}function l(h,d){return n(f=>{const p=Array.from(f);return p.includes(h)||p.includes(hr(h))},d)}function c(h){return u(1,h)}function u(h=1,d){let f=-1;return n(()=>(f+=1,f>=h),d)}return Array.isArray(hr(t))?{toMatch:n,toContains:l,changed:c,changedTimes:u,get not(){return vh(t,!e)}}:{toMatch:n,toBe:r,toBeTruthy:i,toBeNull:s,toBeNaN:a,toBeUndefined:o,changed:c,changedTimes:u,get not(){return vh(t,!e)}}}function KC(t){return vh(t)}function GC(t){var e;const n=hr(t);return(e=n==null?void 0:n.$el)!=null?e:n}const gl=qo?window:void 0;qo&&window.document;qo&&window.navigator;qo&&window.location;function Bm(...t){let e,n,r,i;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,i]=t,e=gl):[e,n,r,i]=t,!e)return ml;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,h,d,f)=>(u.addEventListener(h,d,f),()=>u.removeEventListener(h,d,f)),l=ke(()=>[GC(e),hr(i)],([u,h])=>{if(o(),!u)return;const d=UC(h)?{...h}:h;s.push(...n.flatMap(f=>r.map(p=>a(u,f,p,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return MC(c),c}function KU(t,e,n){const{immediate:r=!0,delay:i=0,onError:s=ml,onSuccess:o=ml,resetOnExecute:a=!0,shallow:l=!0,throwError:c}=n!=null?n:{},u=l?tl(e):re(e),h=re(!1),d=re(!1),f=tl(void 0);async function p(w=0,...y){a&&(u.value=e),f.value=void 0,h.value=!1,d.value=!0,w>0&&await yh(w);const E=typeof t=="function"?t(...y):t;try{const I=await E;u.value=I,h.value=!0,o(I)}catch(I){if(f.value=I,s(I),c)throw I}finally{d.value=!1}return u.value}r&&p(i);const v={state:u,isReady:h,isLoading:d,error:f,execute:p};function g(){return new Promise((w,y)=>{KC(d).toBe(!1).then(()=>w(v)).catch(y)})}return{...v,then(w,y){return g().then(w,y)}}}const wa=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ea="__vueuse_ssr_handlers__",QC=YC();function YC(){return Ea in wa||(wa[Ea]=wa[Ea]||{}),wa[Ea]}function JC(t,e){return QC[t]||e}function XC(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const Qv={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},qm="vueuse-storage";function ZC(t,e,n,r={}){var i;const{flush:s="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:h=gl,eventFilter:d,onError:f=L=>{console.error(L)},initOnMounted:p}=r,v=(u?tl:re)(typeof e=="function"?e():e);if(!n)try{n=JC("getDefaultStorage",()=>{var L;return(L=gl)==null?void 0:L.localStorage})()}catch(L){f(L)}if(!n)return v;const g=hr(e),w=XC(g),y=(i=r.serializer)!=null?i:Qv[w],{pause:E,resume:I}=HC(v,()=>C(v.value),{flush:s,deep:o,eventFilter:d});h&&a&&WC(()=>{Bm(h,"storage",T),Bm(h,qm,D),p&&T()}),p||T();function A(L,z){h&&h.dispatchEvent(new CustomEvent(qm,{detail:{key:t,oldValue:L,newValue:z,storageArea:n}}))}function C(L){try{const z=n.getItem(t);if(L==null)A(z,null),n.removeItem(t);else{const F=y.write(L);z!==F&&(n.setItem(t,F),A(z,F))}}catch(z){f(z)}}function V(L){const z=L?L.newValue:n.getItem(t);if(z==null)return l&&g!=null&&n.setItem(t,y.write(g)),g;if(!L&&c){const F=y.read(z);return typeof c=="function"?c(F,g):w==="object"&&!Array.isArray(F)?{...g,...F}:F}else return typeof z!="string"?z:y.read(z)}function T(L){if(!(L&&L.storageArea!==n)){if(L&&L.key==null){v.value=g;return}if(!(L&&L.key!==t)){E();try{(L==null?void 0:L.newValue)!==y.write(v.value)&&(v.value=V(L))}catch(z){f(z)}finally{L?dn(I):I()}}}}function D(L){T(L.detail)}return v}function eP(t,e,n={}){const{window:r=gl}=n;return ZC(t,e,r==null?void 0:r.localStorage,n)}const Yv=wR("auth",()=>{const t=eP("auth/user",null,{serializer:Qv.object}),e=N(()=>!!t.value),n=N(()=>{var s;return((s=t.value)==null?void 0:s.uid)||null});return{user:t,isAuthenticated:e,uid:n,setUser:s=>{t.value=s,s?t.value={uid:s.uid,photoURL:s.photoURL,displayName:s.displayName,email:s.email,emailVerified:s.emailVerified}:t.value=null},hasOwnContent:s=>e.value?n.value===s:!1}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new nP;const d=s<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rP=function(t){const e=Jv(t);return Xv.encodeByteArray(e,!0)},_l=function(t){return rP(t).replace(/\./g,"")},Zv=function(t){try{return Xv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=()=>iP().__FIREBASE_DEFAULTS__,oP=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aP=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zv(t[1]);return e&&JSON.parse(e)},oc=()=>{try{return sP()||oP()||aP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ew=t=>{var e,n;return(n=(e=oc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tw=t=>{const e=ew(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nw=()=>{var t;return(t=oc())===null||t===void 0?void 0:t.config},rw=t=>{var e;return(e=oc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[_l(JSON.stringify(n)),_l(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cP(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function uP(){var t;const e=(t=oc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dP(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fP(){return!uP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pd(){try{return typeof indexedDB=="object"}catch{return!1}}function ow(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function pP(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mP,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nn(i,a,r)}}function gP(t,e){return t.replace(_P,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _P=/\{\$([^}]+)}/g;function yP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ho(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(jm(s)&&jm(o)){if(!ho(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function jm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vP(t,e){const n=new wP(t,e);return n.subscribe.bind(n)}class wP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");EP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vu),i.error===void 0&&(i.error=vu),i.complete===void 0&&(i.complete=vu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vu(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=1e3,IP=2,bP=4*60*60*1e3,AP=.5;function zm(t,e=TP,n=IP){const r=e*Math.pow(n,t),i=Math.round(AP*r*(Math.random()-.5)*2);return Math.min(bP,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return t&&t._delegate?t._delegate:t}class en{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CP(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SP(t){return t===Mr?void 0:t}function CP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const kP={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},xP=Te.INFO,OP={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},DP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=OP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ac{constructor(e){this.name=e,this._logLevel=xP,this._logHandler=DP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const NP=(t,e)=>e.some(n=>t instanceof n);let Hm,Wm;function LP(){return Hm||(Hm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VP(){return Wm||(Wm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aw=new WeakMap,wh=new WeakMap,lw=new WeakMap,wu=new WeakMap,kd=new WeakMap;function MP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&aw.set(n,t)}).catch(()=>{}),kd.set(e,t),e}function FP(t){if(wh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});wh.set(t,e)}let Eh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UP(t){Eh=t(Eh)}function $P(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Eu(this),e,...n);return lw.set(r,e.sort?e.sort():[e]),vr(r)}:VP().includes(t)?function(...e){return t.apply(Eu(this),e),vr(aw.get(this))}:function(...e){return vr(t.apply(Eu(this),e))}}function BP(t){return typeof t=="function"?$P(t):(t instanceof IDBTransaction&&FP(t),NP(t,LP())?new Proxy(t,Eh):t)}function vr(t){if(t instanceof IDBRequest)return MP(t);if(wu.has(t))return wu.get(t);const e=BP(t);return e!==t&&(wu.set(t,e),kd.set(e,t)),e}const Eu=t=>kd.get(t);function cw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=vr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(vr(o.result),l.oldVersion,l.newVersion,vr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const qP=["get","getKey","getAll","getAllKeys","count"],jP=["put","add","delete","clear"],Tu=new Map;function Km(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tu.get(e))return Tu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Tu.set(e,s),s}UP(t=>({...t,get:(e,n,r)=>Km(e,n)||t.get(e,n,r),has:(e,n)=>!!Km(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Th="@firebase/app",Gm="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new ac("@firebase/app"),WP="@firebase/app-compat",KP="@firebase/analytics-compat",GP="@firebase/analytics",QP="@firebase/app-check-compat",YP="@firebase/app-check",JP="@firebase/auth",XP="@firebase/auth-compat",ZP="@firebase/database",ek="@firebase/database-compat",tk="@firebase/functions",nk="@firebase/functions-compat",rk="@firebase/installations",ik="@firebase/installations-compat",sk="@firebase/messaging",ok="@firebase/messaging-compat",ak="@firebase/performance",lk="@firebase/performance-compat",ck="@firebase/remote-config",uk="@firebase/remote-config-compat",hk="@firebase/storage",dk="@firebase/storage-compat",fk="@firebase/firestore",pk="@firebase/firestore-compat",mk="firebase",gk="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="[DEFAULT]",_k={[Th]:"fire-core",[WP]:"fire-core-compat",[GP]:"fire-analytics",[KP]:"fire-analytics-compat",[YP]:"fire-app-check",[QP]:"fire-app-check-compat",[JP]:"fire-auth",[XP]:"fire-auth-compat",[ZP]:"fire-rtdb",[ek]:"fire-rtdb-compat",[tk]:"fire-fn",[nk]:"fire-fn-compat",[rk]:"fire-iid",[ik]:"fire-iid-compat",[sk]:"fire-fcm",[ok]:"fire-fcm-compat",[ak]:"fire-perf",[lk]:"fire-perf-compat",[ck]:"fire-rc",[uk]:"fire-rc-compat",[hk]:"fire-gcs",[dk]:"fire-gcs-compat",[fk]:"fire-fst",[pk]:"fire-fst-compat","fire-js":"fire-js",[mk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new Map,bh=new Map;function yk(t,e){try{t.container.addComponent(e)}catch(n){si.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pn(t){const e=t.name;if(bh.has(e))return si.debug(`There were multiple attempts to register component ${e}.`),!1;bh.set(e,t);for(const n of yl.values())yk(n,t);return!0}function Pr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wr=new yi("app","Firebase",vk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=gk;function uw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ih,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw wr.create("bad-app-name",{appName:String(i)});if(n||(n=nw()),!n)throw wr.create("no-options");const s=yl.get(i);if(s){if(ho(n,s.options)&&ho(r,s.config))return s;throw wr.create("duplicate-app",{appName:i})}const o=new PP(i);for(const l of bh.values())o.addComponent(l);const a=new wk(n,r,o);return yl.set(i,a),a}function lc(t=Ih){const e=yl.get(t);if(!e&&t===Ih&&nw())return uw();if(!e)throw wr.create("no-app",{appName:t});return e}function Lt(t,e,n){var r;let i=(r=_k[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),si.warn(a.join(" "));return}pn(new en(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek="firebase-heartbeat-database",Tk=1,fo="firebase-heartbeat-store";let Iu=null;function hw(){return Iu||(Iu=cw(Ek,Tk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fo)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),Iu}async function Ik(t){try{const n=(await hw()).transaction(fo),r=await n.objectStore(fo).get(dw(t));return await n.done,r}catch(e){if(e instanceof nn)si.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});si.warn(n.message)}}}async function Qm(t,e){try{const r=(await hw()).transaction(fo,"readwrite");await r.objectStore(fo).put(e,dw(t)),await r.done}catch(n){if(n instanceof nn)si.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});si.warn(r.message)}}}function dw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=1024,Ak=30*24*60*60*1e3;class Rk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ck(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ym();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ak}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ym(),{heartbeatsToSend:r,unsentEntries:i}=Sk(this._heartbeatsCache.heartbeats),s=_l(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ym(){return new Date().toISOString().substring(0,10)}function Sk(t,e=bk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ck{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pd()?ow().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ik(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jm(t){return _l(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t){pn(new en("platform-logger",e=>new zP(e),"PRIVATE")),pn(new en("heartbeat",e=>new Rk(e),"PRIVATE")),Lt(Th,Gm,t),Lt(Th,Gm,"esm2017"),Lt("fire-js","")}Pk("");function xd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kk=fw,pw=new yi("auth","Firebase",fw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=new ac("@firebase/auth");function xk(t,...e){vl.logLevel<=Te.WARN&&vl.warn(`Auth (${vi}): ${t}`,...e)}function qa(t,...e){vl.logLevel<=Te.ERROR&&vl.error(`Auth (${vi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,...e){throw Od(t,...e)}function Cn(t,...e){return Od(t,...e)}function mw(t,e,n){const r=Object.assign(Object.assign({},kk()),{[e]:n});return new yi("auth","Firebase",r).create(e,{appName:t.name})}function Ok(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&tn(t,"argument-error"),mw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Od(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pw.create(t,...e)}function ne(t,e,...n){if(!t)throw Od(e,...n)}function qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qa(e),new Error(e)}function Kn(t,e){t||qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dk(){return Xm()==="http:"||Xm()==="https:"}function Xm(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dk()||sw()||"connection"in navigator)?navigator.onLine:!0}function Lk(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=cP()||hP()}get(){return Nk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=new zo(3e4,6e4);function Jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vn(t,e,n,r,i={}){return _w(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=jo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),gw.fetch()(yw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function _w(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vk),e);try{const i=new Uk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ta(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ta(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ta(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ta(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw mw(t,u,c);tn(t,u)}}catch(i){if(i instanceof nn)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function Ho(t,e,n,r,i={}){const s=await vn(t,e,n,r,i);return"mfaPendingCredential"in s&&tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function yw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Dd(t.config,i):`${t.config.apiScheme}://${i}`}function Fk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Uk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Cn(this.auth,"network-request-failed")),Mk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Cn(t,e,r);return i.customData._tokenResponse=n,i}function Zm(t){return t!==void 0&&t.enterprise!==void 0}class $k{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Fk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Bk(t,e){return vn(t,"GET","/v2/recaptchaConfig",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qk(t,e){return vn(t,"POST","/v1/accounts:delete",e)}async function jk(t,e){return vn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zk(t,e=!1){const n=Se(t),r=await n.getIdToken(e),i=Nd(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ws(bu(i.auth_time)),issuedAtTime:Ws(bu(i.iat)),expirationTime:Ws(bu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bu(t){return Number(t)*1e3}function Nd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zv(n);return i?JSON.parse(i):(qa("Failed to decode base64 JWT payload"),null)}catch(i){return qa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hk(t){const e=Nd(t);return ne(e,"internal-error"),ne(typeof e.exp!="undefined","internal-error"),ne(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&Wk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Wk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await oi(t,jk(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Yk(s.providerUserInfo):[],a=Qk(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vw(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Gk(t){const e=Se(t);await wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Yk(t){return t.map(e=>{var{providerId:n}=e,r=xd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(t,e){const n=await _w(t,{},async()=>{const r=jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=yw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Xk(t,e){return vn(t,"POST","/v2/accounts:revokeToken",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken!="undefined","internal-error"),ne(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Hk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Jk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new po;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new po,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e){ne(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class ei{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=xd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await oi(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zk(this,e)}reload(){return Gk(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await oi(this,qk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:I,isAnonymous:A,providerData:C,stsTokenManager:V}=n;ne(E&&V,e,"internal-error");const T=po.fromJSON(this.name,V);ne(typeof E=="string",e,"internal-error"),rr(h,e.name),rr(d,e.name),ne(typeof I=="boolean",e,"internal-error"),ne(typeof A=="boolean",e,"internal-error"),rr(f,e.name),rr(p,e.name),rr(v,e.name),rr(g,e.name),rr(w,e.name),rr(y,e.name);const D=new ei({uid:E,auth:e,email:d,emailVerified:I,displayName:h,isAnonymous:A,photoURL:p,phoneNumber:f,tenantId:v,stsTokenManager:T,createdAt:w,lastLoginAt:y});return C&&Array.isArray(C)&&(D.providerData=C.map(L=>Object.assign({},L))),g&&(D._redirectEventId=g),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new po;i.updateFromServerResponse(n);const s=new ei({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=new Map;function jn(t){Kn(t instanceof Function,"Expected a class definition");let e=eg.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,eg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ww.type="NONE";const tg=ww;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t,e,n){return`firebase:${t}:${e}:${n}`}class Hi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ja(this.userKey,i.apiKey,s),this.fullPersistenceKey=ja("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hi(jn(tg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||jn(tg);const o=ja(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ei._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Hi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Hi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ew(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Aw(e))return"Blackberry";if(Rw(e))return"Webos";if(Ld(e))return"Safari";if((e.includes("chrome/")||Tw(e))&&!e.includes("edge/"))return"Chrome";if(bw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ew(t=rt()){return/firefox\//i.test(t)}function Ld(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tw(t=rt()){return/crios\//i.test(t)}function Iw(t=rt()){return/iemobile/i.test(t)}function bw(t=rt()){return/android/i.test(t)}function Aw(t=rt()){return/blackberry/i.test(t)}function Rw(t=rt()){return/webos/i.test(t)}function cc(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zk(t=rt()){var e;return cc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ex(){return dP()&&document.documentMode===10}function Sw(t=rt()){return cc(t)||bw(t)||Rw(t)||Aw(t)||/windows phone/i.test(t)||Iw(t)}function tx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(t,e=[]){let n;switch(t){case"Browser":n=ng(rt());break;case"Worker":n=`${ng(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rx(t,e={}){return vn(t,"GET","/v2/passwordPolicy",Jn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=6;class sx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ix,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rg(this),this.idTokenSubscription=new rg(this),this.beforeStateQueue=new nx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Se(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rx(this),n=new sx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Xk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xn(t){return Se(t)}class rg{constructor(e){this.auth=e,this.observer=null,this.addObserver=vP(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ax(t){uc=t}function Pw(t){return uc.loadJS(t)}function lx(){return uc.recaptchaEnterpriseScript}function cx(){return uc.gapiScript}function ux(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hx="recaptcha-enterprise",dx="NO_RECAPTCHA";class fx{constructor(e){this.type=hx,this.auth=Xn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Bk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new $k(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Zm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(dx)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Zm(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=lx();l.length!==0&&(l+=a),Pw(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ig(t,e,n,r=!1){const i=new fx(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function El(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await ig(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ig(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(t,e){const n=Pr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ho(s,e!=null?e:{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function mx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gx(t,e,n){const r=Xn(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=kw(e),{host:o,port:a}=_x(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||yx()}function kw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _x(t){const e=kw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:sg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:sg(o)}}}function sg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,n){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}async function vx(t,e){return vn(t,"POST","/v1/accounts:update",e)}async function wx(t,e){return vn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ex(t,e){return Ho(t,"POST","/v1/accounts:signInWithPassword",Jn(t,e))}async function xw(t,e){return vn(t,"POST","/v1/accounts:sendOobCode",Jn(t,e))}async function Tx(t,e){return xw(t,e)}async function Ix(t,e){return xw(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bx(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}async function Ax(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends Vd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new mo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new mo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return El(e,n,"signInWithPassword",Ex);case"emailLink":return bx(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return El(e,r,"signUpPassword",wx);case"emailLink":return Ax(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e){return Ho(t,"POST","/v1/accounts:signInWithIdp",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx="http://localhost";class ai extends Vd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=xd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ai(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wi(e,n)}buildRequest(){const e={requestUri:Rx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Cx(t){const e=ks(xs(t)).link,n=e?ks(xs(e)).deep_link_id:null,r=ks(xs(t)).deep_link_id;return(r?ks(xs(r)).link:null)||r||n||e||t}class Md{constructor(e){var n,r,i,s,o,a;const l=ks(xs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=Sx((i=l.mode)!==null&&i!==void 0?i:null);ne(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Cx(e);try{return new Md(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return mo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Md.parseLink(n);return ne(r,"argument-error"),mo._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends Fd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Wo{constructor(){super("facebook.com")}static credential(e){return ai._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ai._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Wo{constructor(){super("github.com")}static credential(e){return ai._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Wo{constructor(){super("twitter.com")}static credential(e,n){return ai._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Px(t,e){return Ho(t,"POST","/v1/accounts:signUp",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ei._fromIdTokenResponse(e,r,i),o=og(r);return new li({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=og(r);return new li({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function og(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Tl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Tl(e,n,r,i)}}function Ow(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tl._fromErrorAndOperation(t,s,e,r):s})}async function kx(t,e,n=!1){const r=await oi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return li._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xx(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await oi(t,Ow(r,i,e,t),n);ne(s.idToken,r,"internal-error");const o=Nd(s.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),li._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(t,e,n=!1){const r="signIn",i=await Ow(t,r,e),s=await li._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ox(t,e){return Dw(Xn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t,e,n){var r;ne(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),ne(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(ne(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(ne(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(t){const e=Xn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Dx(t,e,n){const r=Xn(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Nw(r,i,n),await El(r,i,"getOobCode",Ix)}async function Nx(t,e,n){const r=Xn(t),o=await El(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Px).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Lw(t),l}),a=await li._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Lx(t,e,n){return Ox(Se(t),fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Lw(t),r})}async function Vx(t,e){const n=Se(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&Nw(n.auth,i,e);const{email:s}=await Tx(n.auth,i);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(t,e){return vn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Se(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await oi(r,Mx(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Fx(t,e){return Mw(Se(t),e,null)}function Ux(t,e){return Mw(Se(t),null,e)}async function Mw(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await oi(t,vx(r,s));await t._updateTokensIfNecessary(o,!0)}function $x(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function Bx(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function qx(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function jx(t){return Se(t).signOut()}const Il="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Il,"1"),this.storage.removeItem(Il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(){const t=rt();return Ld(t)||cc(t)}const Hx=1e3,Wx=10;class Uw extends Fw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zx()&&tx(),this.fallbackToPolling=Sw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ex()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Wx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Hx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uw.type="LOCAL";const Kx=Uw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w extends Fw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$w.type="SESSION";const Bw=$w;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new hc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Gx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ud("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(){return window}function Yx(t){Pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(){return typeof Pn().WorkerGlobalScope!="undefined"&&typeof Pn().importScripts=="function"}async function Jx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Zx(){return qw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw="firebaseLocalStorageDb",e1=1,bl="firebaseLocalStorage",zw="fbase_key";class Ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dc(t,e){return t.transaction([bl],e?"readwrite":"readonly").objectStore(bl)}function t1(){const t=indexedDB.deleteDatabase(jw);return new Ko(t).toPromise()}function Rh(){const t=indexedDB.open(jw,e1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bl,{keyPath:zw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bl)?e(r):(r.close(),await t1(),e(await Rh()))})})}async function ag(t,e,n){const r=dc(t,!0).put({[zw]:e,value:n});return new Ko(r).toPromise()}async function n1(t,e){const n=dc(t,!1).get(e),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function lg(t,e){const n=dc(t,!0).delete(e);return new Ko(n).toPromise()}const r1=800,i1=3;class Hw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>i1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hc._getInstance(Zx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Jx(),!this.activeServiceWorker)return;this.sender=new Qx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rh();return await ag(e,Il,"1"),await lg(e,Il),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ag(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>n1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=dc(i,!1).getAll();return new Ko(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),r1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hw.type="LOCAL";const s1=Hw;new zo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t,e){return e?jn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d extends Vd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function o1(t){return Dw(t.auth,new $d(t),t.bypassAuthState)}function a1(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),xx(n,new $d(t),t.bypassAuthState)}async function l1(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),kx(n,new $d(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return o1;case"linkViaPopup":case"linkViaRedirect":return l1;case"reauthViaPopup":case"reauthViaRedirect":return a1;default:tn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=new zo(2e3,1e4);async function u1(t,e,n){const r=Xn(t);Ok(t,e,Fd);const i=Ww(r,n);return new jr(r,"signInViaPopup",e,i).executeNotNull()}class jr extends Kw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=Ud();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,c1.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1="pendingRedirect",za=new Map;class d1 extends Kw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=za.get(this.auth._key());if(!e){try{const r=await f1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}za.set(this.auth._key(),e)}return this.bypassAuthState||za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function f1(t,e){const n=g1(e),r=m1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function p1(t,e){za.set(t._key(),e)}function m1(t){return jn(t._redirectPersistence)}function g1(t){return ja(h1,t.config.apiKey,t.name)}async function _1(t,e,n=!1){const r=Xn(t),i=Ww(r,e),o=await new d1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=10*60*1e3;class v1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!w1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Gw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=y1&&this.cachedEventUids.clear(),this.cachedEventUids.has(cg(e))}saveEventToCache(e){this.cachedEventUids.add(cg(e)),this.lastProcessedEventTime=Date.now()}}function cg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function w1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(t,e={}){return vn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,I1=/^https?/;async function b1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await E1(t);for(const n of e)try{if(A1(n))return}catch{}tn(t,"unauthorized-domain")}function A1(t){const e=Ah(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!I1.test(n))return!1;if(T1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=new zo(3e4,6e4);function ug(){const t=Pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function S1(t){return new Promise((e,n)=>{var r,i,s;function o(){ug(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ug(),n(Cn(t,"network-request-failed"))},timeout:R1.get()})}if(!((i=(r=Pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pn().gapi)===null||s===void 0)&&s.load)o();else{const a=ux("iframefcb");return Pn()[a]=()=>{gapi.load?o():n(Cn(t,"network-request-failed"))},Pw(`${cx()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ha=null,e})}let Ha=null;function C1(t){return Ha=Ha||S1(t),Ha}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1=new zo(5e3,15e3),k1="__/auth/iframe",x1="emulator/auth/iframe",O1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},D1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function N1(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dd(e,x1):`https://${t.config.authDomain}/${k1}`,r={apiKey:e.apiKey,appName:t.name,v:vi},i=D1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${jo(r).slice(1)}`}async function L1(t){const e=await C1(t),n=Pn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:N1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:O1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Cn(t,"network-request-failed"),a=Pn().setTimeout(()=>{s(o)},P1.get());function l(){Pn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},M1=500,F1=600,U1="_blank",$1="http://localhost";class hg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function B1(t,e,n,r=M1,i=F1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},V1),{width:r.toString(),height:i.toString(),top:s,left:o}),c=rt().toLowerCase();n&&(a=Tw(c)?U1:n),Ew(c)&&(e=e||$1,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Zk(c)&&a!=="_self")return q1(e||"",a),new hg(null);const h=window.open(e||"",a,u);ne(h,t,"popup-blocked");try{h.focus()}catch{}return new hg(h)}function q1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="__/auth/handler",z1="emulator/auth/handler",H1=encodeURIComponent("fac");async function dg(t,e,n,r,i,s){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vi,eventId:i};if(e instanceof Fd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(e instanceof Wo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${H1}=${encodeURIComponent(l)}`:"";return`${W1(t)}?${jo(a).slice(1)}${c}`}function W1({config:t}){return t.emulator?Dd(t,z1):`https://${t.authDomain}/${j1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="webStorageSupport";class K1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bw,this._completeRedirectFn=_1,this._overrideRedirectResult=p1}async _openPopup(e,n,r,i){var s;Kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await dg(e,n,r,Ah(),i);return B1(e,o,Ud())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await dg(e,n,r,Ah(),i);return Yx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await L1(e),r=new v1(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Au,{type:Au},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Au];o!==void 0&&n(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=b1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sw()||Ld()||cc()}}const G1=K1;var fg="@firebase/auth",pg="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function J1(t){pn(new en("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cw(t)},c=new ox(r,i,s,l);return mx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pn(new en("auth-internal",e=>{const n=Xn(e.getProvider("auth").getImmediate());return(r=>new Q1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(fg,pg,Y1(t)),Lt(fg,pg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=5*60,Z1=rw("authIdTokenMaxAge")||X1;let mg=null;const eO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Z1)return;const i=n==null?void 0:n.token;mg!==i&&(mg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tO(t=lc()){const e=Pr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=px(t,{popupRedirectResolver:G1,persistence:[s1,Kx,Bw]}),r=rw("authTokenSyncURL");if(r){const s=eO(r);Bx(n,s,()=>s(n.currentUser)),$x(n,o=>s(o))}const i=ew("auth");return i&&gx(n,`http://${i}`),n}function nO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ax({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});J1("Browser");var rO=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},G,Bd=Bd||{},ce=rO||self;function fc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Go(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iO(t){return Object.prototype.hasOwnProperty.call(t,Ru)&&t[Ru]||(t[Ru]=++sO)}var Ru="closure_uid_"+(1e9*Math.random()>>>0),sO=0;function oO(t,e,n){return t.call.apply(t.bind,arguments)}function aO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function It(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?It=oO:It=aO,It.apply(null,arguments)}function Ia(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ct(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function kr(){this.s=this.s,this.o=this.o}var lO=0;kr.prototype.s=!1;kr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),lO!=0)&&iO(this)};kr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function qd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function gg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(fc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function bt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}bt.prototype.h=function(){this.defaultPrevented=!0};var cO=function(){if(!ce.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};ce.addEventListener("test",n,e),ce.removeEventListener("test",n,e)}catch{}return t}();function go(t){return/^[\s\xa0]*$/.test(t)}function pc(){var t=ce.navigator;return t&&(t=t.userAgent)?t:""}function bn(t){return pc().indexOf(t)!=-1}function jd(t){return jd[" "](t),t}jd[" "]=function(){};function uO(t,e){var n=nD;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var hO=bn("Opera"),rs=bn("Trident")||bn("MSIE"),Yw=bn("Edge"),Sh=Yw||rs,Jw=bn("Gecko")&&!(pc().toLowerCase().indexOf("webkit")!=-1&&!bn("Edge"))&&!(bn("Trident")||bn("MSIE"))&&!bn("Edge"),dO=pc().toLowerCase().indexOf("webkit")!=-1&&!bn("Edge");function Xw(){var t=ce.document;return t?t.documentMode:void 0}var Ch;e:{var Su="",Cu=function(){var t=pc();if(Jw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Yw)return/Edge\/([\d\.]+)/.exec(t);if(rs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(dO)return/WebKit\/(\S+)/.exec(t);if(hO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Cu&&(Su=Cu?Cu[1]:""),rs){var Pu=Xw();if(Pu!=null&&Pu>parseFloat(Su)){Ch=String(Pu);break e}}Ch=Su}var Ph;if(ce.document&&rs){var _g=Xw();Ph=_g||parseInt(Ch,10)||void 0}else Ph=void 0;var fO=Ph;function _o(t,e){if(bt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Jw){e:{try{jd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:pO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_o.$.h.call(this)}}ct(_o,bt);var pO={2:"touch",3:"pen",4:"mouse"};_o.prototype.h=function(){_o.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qo="closure_listenable_"+(1e6*Math.random()|0),mO=0;function gO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++mO,this.fa=this.ia=!1}function mc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function zd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function _O(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Zw(t){const e={};for(const n in t)e[n]=t[n];return e}const yg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<yg.length;s++)n=yg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function gc(t){this.src=t,this.g={},this.h=0}gc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=xh(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new gO(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function kh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Qw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(mc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function xh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Hd="closure_lm_"+(1e6*Math.random()|0),ku={};function tE(t,e,n,r,i){if(r&&r.once)return rE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)tE(t,e[s],n,r,i);return null}return n=Gd(n),t&&t[Qo]?t.O(e,n,Go(r)?!!r.capture:!!r,i):nE(t,e,n,!1,r,i)}function nE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Go(i)?!!i.capture:!!i,a=Kd(t);if(a||(t[Hd]=a=new gc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=yO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)cO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(sE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yO(){function t(n){return e.call(t.src,t.listener,n)}const e=vO;return t}function rE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)rE(t,e[s],n,r,i);return null}return n=Gd(n),t&&t[Qo]?t.P(e,n,Go(r)?!!r.capture:!!r,i):nE(t,e,n,!0,r,i)}function iE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)iE(t,e[s],n,r,i);else r=Go(r)?!!r.capture:!!r,n=Gd(n),t&&t[Qo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=xh(s,n,r,i),-1<n&&(mc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Kd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=xh(e,n,r,i)),(n=-1<t?e[t]:null)&&Wd(n))}function Wd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Qo])kh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(sE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Kd(e))?(kh(n,t),n.h==0&&(n.src=null,e[Hd]=null)):mc(t)}}}function sE(t){return t in ku?ku[t]:ku[t]="on"+t}function vO(t,e){if(t.fa)t=!0;else{e=new _o(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Wd(t),t=n.call(r,e)}return t}function Kd(t){return t=t[Hd],t instanceof gc?t:null}var xu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gd(t){return typeof t=="function"?t:(t[xu]||(t[xu]=function(e){return t.handleEvent(e)}),t[xu])}function lt(){kr.call(this),this.i=new gc(this),this.S=this,this.J=null}ct(lt,kr);lt.prototype[Qo]=!0;lt.prototype.removeEventListener=function(t,e,n,r){iE(this,t,e,n,r)};function mt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new bt(e,t);else if(e instanceof bt)e.target=e.target||t;else{var i=e;e=new bt(r,t),eE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ba(o,r,!0,e)&&i}if(o=e.g=t,i=ba(o,r,!0,e)&&i,i=ba(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ba(o,r,!1,e)&&i}lt.prototype.N=function(){if(lt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)mc(n[r]);delete t.g[e],t.h--}}this.J=null};lt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};lt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ba(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&kh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Qd=ce.JSON.stringify;class wO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function EO(){var t=Yd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class TO{constructor(){this.h=this.g=null}add(e,n){const r=oE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var oE=new wO(()=>new IO,t=>t.reset());class IO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function bO(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function AO(t){ce.setTimeout(()=>{throw t},0)}let yo,vo=!1,Yd=new TO,aE=()=>{const t=ce.Promise.resolve(void 0);yo=()=>{t.then(RO)}};var RO=()=>{for(var t;t=EO();){try{t.h.call(t.g)}catch(n){AO(n)}var e=oE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}vo=!1};function _c(t,e){lt.call(this),this.h=t||1,this.g=e||ce,this.j=It(this.qb,this),this.l=Date.now()}ct(_c,lt);G=_c.prototype;G.ga=!1;G.T=null;G.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),mt(this,"tick"),this.ga&&(Jd(this),this.start()))}};G.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}G.N=function(){_c.$.N.call(this),Jd(this),delete this.g};function Xd(t,e,n){if(typeof t=="function")n&&(t=It(t,n));else if(t&&typeof t.handleEvent=="function")t=It(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ce.setTimeout(t,e||0)}function lE(t){t.g=Xd(()=>{t.g=null,t.i&&(t.i=!1,lE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class SO extends kr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:lE(this)}N(){super.N(),this.g&&(ce.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wo(t){kr.call(this),this.h=t,this.g={}}ct(wo,kr);var vg=[];function cE(t,e,n,r){Array.isArray(n)||(n&&(vg[0]=n.toString()),n=vg);for(var i=0;i<n.length;i++){var s=tE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function uE(t){zd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Wd(e)},t),t.g={}}wo.prototype.N=function(){wo.$.N.call(this),uE(this)};wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yc(){this.g=!0}yc.prototype.Ea=function(){this.g=!1};function CO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function PO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Mi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xO(t,n)+(r?" "+r:"")})}function kO(t,e){t.info(function(){return"TIMEOUT: "+e})}yc.prototype.info=function(){};function xO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Qd(n)}catch{return e}}var wi={},wg=null;function vc(){return wg=wg||new lt}wi.Ta="serverreachability";function hE(t){bt.call(this,wi.Ta,t)}ct(hE,bt);function Eo(t){const e=vc();mt(e,new hE(e))}wi.STAT_EVENT="statevent";function dE(t,e){bt.call(this,wi.STAT_EVENT,t),this.stat=e}ct(dE,bt);function Pt(t){const e=vc();mt(e,new dE(e,t))}wi.Ua="timingevent";function fE(t,e){bt.call(this,wi.Ua,t),this.size=e}ct(fE,bt);function Yo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ce.setTimeout(function(){t()},e)}var wc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},pE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zd(){}Zd.prototype.h=null;function Eg(t){return t.h||(t.h=t.i())}function mE(){}var Jo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ef(){bt.call(this,"d")}ct(ef,bt);function tf(){bt.call(this,"c")}ct(tf,bt);var Oh;function Ec(){}ct(Ec,Zd);Ec.prototype.g=function(){return new XMLHttpRequest};Ec.prototype.i=function(){return{}};Oh=new Ec;function Xo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new wo(this),this.P=OO,t=Sh?125:void 0,this.V=new _c(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new gE}function gE(){this.i=null,this.g="",this.h=!1}var OO=45e3,_E={},Dh={};G=Xo.prototype;G.setTimeout=function(t){this.P=t};function Nh(t,e,n){t.L=1,t.A=Ic(Gn(e)),t.u=n,t.S=!0,yE(t,null)}function yE(t,e){t.G=Date.now(),Zo(t),t.B=Gn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),RE(n.i,"t",r),t.o=0,n=t.l.J,t.h=new gE,t.g=KE(t.l,n?e:null,!t.u),0<t.O&&(t.M=new SO(It(t.Pa,t,t.g),t.O)),cE(t.U,t.g,"readystatechange",t.nb),e=t.I?Zw(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Eo(),CO(t.j,t.v,t.B,t.m,t.W,t.u)}G.nb=function(t){t=t.target;const e=this.M;e&&An(t)==3?e.l():this.Pa(t)};G.Pa=function(t){try{if(t==this.g)e:{const u=An(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Sh||this.g&&(this.h.h||this.g.ja()||Ag(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Eo(3):Eo(2)),Tc(this);var n=this.g.da();this.ca=n;t:if(vE(this)){var r=Ag(this.g);t="";var i=r.length,s=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){zr(this),Ks(this);var o="";break t}this.h.i=new ce.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,PO(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!go(a)){var c=a;break t}}c=null}if(n=c)Mi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lh(this,n);else{this.i=!1,this.s=3,Pt(12),zr(this),Ks(this);break e}}this.S?(wE(this,u,o),Sh&&this.i&&u==3&&(cE(this.U,this.V,"tick",this.mb),this.V.start())):(Mi(this.j,this.m,o,null),Lh(this,o)),u==4&&zr(this),this.i&&!this.J&&(u==4?jE(this.l,this):(this.i=!1,Zo(this)))}else ZO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),zr(this),Ks(this)}}}catch{}finally{}};function vE(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function wE(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=DO(t,n),i==Dh){e==4&&(t.s=4,Pt(14),r=!1),Mi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==_E){t.s=4,Pt(15),Mi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Mi(t.j,t.m,i,null),Lh(t,i);vE(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),lf(e),e.M=!0,Pt(11))):(Mi(t.j,t.m,n,"[Invalid Chunked Response]"),zr(t),Ks(t))}G.mb=function(){if(this.g){var t=An(this.g),e=this.g.ja();this.o<e.length&&(Tc(this),wE(this,t,e),this.i&&t!=4&&Zo(this))}};function DO(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Dh:(n=Number(e.substring(n,r)),isNaN(n)?_E:(r+=1,r+n>e.length?Dh:(e=e.slice(r,r+n),t.o=r+n,e)))}G.cancel=function(){this.J=!0,zr(this)};function Zo(t){t.Y=Date.now()+t.P,EE(t,t.P)}function EE(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Yo(It(t.lb,t),e)}function Tc(t){t.C&&(ce.clearTimeout(t.C),t.C=null)}G.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(kO(this.j,this.B),this.L!=2&&(Eo(),Pt(17)),zr(this),this.s=2,Ks(this)):EE(this,this.Y-t)};function Ks(t){t.l.H==0||t.J||jE(t.l,t)}function zr(t){Tc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Jd(t.V),uE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Lh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Vh(n.i,t))){if(!t.K&&Vh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Sl(n),Sc(n);else break e;af(n),Pt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Yo(It(n.ib,n),6e3));if(1>=PE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Hr(n,11)}else if((t.K||n.g==t)&&Sl(n),!go(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(nf(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Me(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=WE(r,r.J?r.pa:null,r.Y),o.K){kE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Tc(a),Zo(a)),r.g=o}else BE(r);0<n.j.length&&Cc(n)}else c[0]!="stop"&&c[0]!="close"||Hr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Hr(n,7):of(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Eo(4)}catch{}}function NO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(fc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function LO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(fc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function TE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=LO(t),r=NO(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var IE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ti(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ti){this.h=t.h,Al(this,t.j),this.s=t.s,this.g=t.g,Rl(this,t.m),this.l=t.l;var e=t.i,n=new To;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Tg(this,n),this.o=t.o}else t&&(e=String(t).match(IE))?(this.h=!1,Al(this,e[1]||"",!0),this.s=Os(e[2]||""),this.g=Os(e[3]||"",!0),Rl(this,e[4]),this.l=Os(e[5]||"",!0),Tg(this,e[6]||"",!0),this.o=Os(e[7]||"")):(this.h=!1,this.i=new To(null,this.h))}ti.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ds(e,Ig,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ds(e,Ig,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ds(n,n.charAt(0)=="/"?UO:FO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ds(n,BO)),t.join("")};function Gn(t){return new ti(t)}function Al(t,e,n){t.j=n?Os(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Rl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Tg(t,e,n){e instanceof To?(t.i=e,qO(t.i,t.h)):(n||(e=Ds(e,$O)),t.i=new To(e,t.h))}function Me(t,e,n){t.i.set(e,n)}function Ic(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Os(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ds(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,MO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function MO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ig=/[#\/\?@]/g,FO=/[#\?:]/g,UO=/[#\?]/g,$O=/[#\?@]/g,BO=/#/g;function To(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xr(t){t.g||(t.g=new Map,t.h=0,t.i&&VO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=To.prototype;G.add=function(t,e){xr(this),this.i=null,t=ps(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bE(t,e){xr(t),e=ps(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function AE(t,e){return xr(t),e=ps(t,e),t.g.has(e)}G.forEach=function(t,e){xr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};G.ta=function(){xr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};G.Z=function(t){xr(this);let e=[];if(typeof t=="string")AE(this,t)&&(e=e.concat(this.g.get(ps(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};G.set=function(t,e){return xr(this),this.i=null,t=ps(this,t),AE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function RE(t,e,n){bE(t,e),0<n.length&&(t.i=null,t.g.set(ps(t,e),qd(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ps(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qO(t,e){e&&!t.j&&(xr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(bE(this,r),RE(this,i,n))},t)),t.j=e}var jO=class{constructor(t,e){this.g=t,this.map=e}};function SE(t){this.l=t||zO,ce.PerformanceNavigationTiming?(t=ce.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ce.g&&ce.g.Ka&&ce.g.Ka()&&ce.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zO=10;function CE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function PE(t){return t.h?1:t.g?t.g.size:0}function Vh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function nf(t,e){t.g?t.g.add(e):t.h=e}function kE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}SE.prototype.cancel=function(){if(this.i=xE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return qd(t.i)}var HO=class{stringify(t){return ce.JSON.stringify(t,void 0)}parse(t){return ce.JSON.parse(t,void 0)}};function WO(){this.g=new HO}function KO(t,e,n){const r=n||"";try{TE(t,function(i,s){let o=i;Go(i)&&(o=Qd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function GO(t,e){const n=new yc;if(ce.Image){const r=new Image;r.onload=Ia(Aa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ia(Aa,n,r,"TestLoadImage: error",!1,e),r.onabort=Ia(Aa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ia(Aa,n,r,"TestLoadImage: timeout",!1,e),ce.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Aa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function bc(t){this.l=t.ec||null,this.j=t.ob||!1}ct(bc,Zd);bc.prototype.g=function(){return new Ac(this.l,this.j)};bc.prototype.i=function(t){return function(){return t}}({});function Ac(t,e){lt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=rf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ct(Ac,lt);var rf=0;G=Ac.prototype;G.open=function(t,e){if(this.readyState!=rf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Io(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ce).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ea(this)),this.readyState=rf};G.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Io(this)),this.g&&(this.readyState=3,Io(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ce.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;OE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function OE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}G.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ea(this):Io(this),this.readyState==3&&OE(this)}};G.Za=function(t){this.g&&(this.response=this.responseText=t,ea(this))};G.Ya=function(t){this.g&&(this.response=t,ea(this))};G.ka=function(){this.g&&ea(this)};function ea(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Io(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Io(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ac.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var QO=ce.JSON.parse;function We(t){lt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=DE,this.L=this.M=!1}ct(We,lt);var DE="",YO=/^https?$/i,JO=["POST","PUT"];G=We.prototype;G.Oa=function(t){this.M=t};G.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Oh.g(),this.C=this.u?Eg(this.u):Eg(Oh),this.g.onreadystatechange=It(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){bg(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ce.FormData&&t instanceof ce.FormData,!(0<=Qw(JO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{VE(this),0<this.B&&((this.L=XO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=It(this.ua,this)):this.A=Xd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){bg(this,s)}};function XO(t){return rs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}G.ua=function(){typeof Bd!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,mt(this,"timeout"),this.abort(8))};function bg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,NE(t),Rc(t)}function NE(t){t.F||(t.F=!0,mt(t,"complete"),mt(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,mt(this,"complete"),mt(this,"abort"),Rc(this))};G.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rc(this,!0)),We.$.N.call(this)};G.La=function(){this.s||(this.G||this.v||this.l?LE(this):this.kb())};G.kb=function(){LE(this)};function LE(t){if(t.h&&typeof Bd!="undefined"&&(!t.C[1]||An(t)!=4||t.da()!=2)){if(t.v&&An(t)==4)Xd(t.La,0,t);else if(mt(t,"readystatechange"),An(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(IE)[1]||null;!i&&ce.self&&ce.self.location&&(i=ce.self.location.protocol.slice(0,-1)),r=!YO.test(i?i.toLowerCase():"")}n=r}if(n)mt(t,"complete"),mt(t,"success");else{t.m=6;try{var s=2<An(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",NE(t)}}finally{Rc(t)}}}}function Rc(t,e){if(t.g){VE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||mt(t,"ready");try{n.onreadystatechange=r}catch{}}}function VE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ce.clearTimeout(t.A),t.A=null)}G.isActive=function(){return!!this.g};function An(t){return t.g?t.g.readyState:0}G.da=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}};G.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),QO(e)}};function Ag(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case DE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ZO(t){const e={};t=(t.g&&2<=An(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(go(t[r]))continue;var n=bO(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}_O(e,function(r){return r.join(", ")})}G.Ia=function(){return this.m};G.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ME(t){let e="";return zd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function sf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ME(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function Ts(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function FE(t){this.Ga=0,this.j=[],this.l=new yc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ts("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ts("baseRetryDelayMs",5e3,t),this.hb=Ts("retryDelaySeedMs",1e4,t),this.eb=Ts("forwardChannelMaxRetries",2,t),this.xa=Ts("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new SE(t&&t.concurrentRequestLimit),this.Ja=new WO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}G=FE.prototype;G.ra=8;G.H=1;function of(t){if(UE(t),t.H==3){var e=t.W++,n=Gn(t.I);if(Me(n,"SID",t.K),Me(n,"RID",e),Me(n,"TYPE","terminate"),ta(t,n),e=new Xo(t,t.l,e),e.L=2,e.A=Ic(Gn(n)),n=!1,ce.navigator&&ce.navigator.sendBeacon)try{n=ce.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&ce.Image&&(new Image().src=e.A,n=!0),n||(e.g=KE(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Zo(e)}HE(t)}function Sc(t){t.g&&(lf(t),t.g.cancel(),t.g=null)}function UE(t){Sc(t),t.u&&(ce.clearTimeout(t.u),t.u=null),Sl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ce.clearTimeout(t.m),t.m=null)}function Cc(t){if(!CE(t.i)&&!t.m){t.m=!0;var e=t.Na;yo||aE(),vo||(yo(),vo=!0),Yd.add(e,t),t.C=0}}function eD(t,e){return PE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Yo(It(t.Na,t,e),zE(t,t.C)),t.C++,!0)}G.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Xo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Zw(s),eE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$E(this,i,e),n=Gn(this.I),Me(n,"RID",t),Me(n,"CVER",22),this.F&&Me(n,"X-HTTP-Session-Id",this.F),ta(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(ME(s)))+"&"+e:this.o&&sf(n,this.o,s)),nf(this.i,i),this.bb&&Me(n,"TYPE","init"),this.P?(Me(n,"$req",e),Me(n,"SID","null"),i.aa=!0,Nh(i,n,null)):Nh(i,n,e),this.H=2}}else this.H==3&&(t?Rg(this,t):this.j.length==0||CE(this.i)||Rg(this))};function Rg(t,e){var n;e?n=e.m:n=t.W++;const r=Gn(t.I);Me(r,"SID",t.K),Me(r,"RID",n),Me(r,"AID",t.V),ta(t,r),t.o&&t.s&&sf(r,t.o,t.s),n=new Xo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=$E(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),nf(t.i,n),Nh(n,r,e)}function ta(t,e){t.na&&zd(t.na,function(n,r){Me(e,r,n)}),t.h&&TE({},function(n,r){Me(e,r,n)})}function $E(t,e,n){n=Math.min(t.j.length,n);var r=t.h?It(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=s,0>c)s=Math.max(0,i[l].g-100),a=!1;else try{KO(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function BE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;yo||aE(),vo||(yo(),vo=!0),Yd.add(e,t),t.A=0}}function af(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Yo(It(t.Ma,t),zE(t,t.A)),t.A++,!0)}G.Ma=function(){if(this.u=null,qE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Yo(It(this.jb,this),t)}};G.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Pt(10),Sc(this),qE(this))};function lf(t){t.B!=null&&(ce.clearTimeout(t.B),t.B=null)}function qE(t){t.g=new Xo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Gn(t.wa);Me(e,"RID","rpc"),Me(e,"SID",t.K),Me(e,"AID",t.V),Me(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Me(e,"TO",t.qa),Me(e,"TYPE","xmlhttp"),ta(t,e),t.o&&t.s&&sf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ic(Gn(e)),n.u=null,n.S=!0,yE(n,t)}G.ib=function(){this.v!=null&&(this.v=null,Sc(this),af(this),Pt(19))};function Sl(t){t.v!=null&&(ce.clearTimeout(t.v),t.v=null)}function jE(t,e){var n=null;if(t.g==e){Sl(t),lf(t),t.g=null;var r=2}else if(Vh(t.i,e))n=e.F,kE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=vc(),mt(r,new fE(r,n)),Cc(t)}else BE(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&eD(t,e)||r==2&&af(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Hr(t,5);break;case 4:Hr(t,10);break;case 3:Hr(t,6);break;default:Hr(t,2)}}}function zE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Hr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=It(t.pb,t);n||(n=new ti("//www.google.com/images/cleardot.gif"),ce.location&&ce.location.protocol=="http"||Al(n,"https"),Ic(n)),GO(n.toString(),r)}else Pt(2);t.H=0,t.h&&t.h.za(e),HE(t),UE(t)}G.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Pt(2)):(this.l.info("Failed to ping google.com"),Pt(1))};function HE(t){if(t.H=0,t.ma=[],t.h){const e=xE(t.i);(e.length!=0||t.j.length!=0)&&(gg(t.ma,e),gg(t.ma,t.j),t.i.i.length=0,qd(t.j),t.j.length=0),t.h.ya()}}function WE(t,e,n){var r=n instanceof ti?Gn(n):new ti(n);if(r.g!="")e&&(r.g=e+"."+r.g),Rl(r,r.m);else{var i=ce.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ti(null);r&&Al(s,r),e&&(s.g=e),i&&Rl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Me(r,n,e),Me(r,"VER",t.ra),ta(t,r),r}function KE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new We(new bc({ob:n})):new We(t.va),e.Oa(t.J),e}G.isActive=function(){return!!this.h&&this.h.isActive(this)};function GE(){}G=GE.prototype;G.Ba=function(){};G.Aa=function(){};G.za=function(){};G.ya=function(){};G.isActive=function(){return!0};G.Va=function(){};function Cl(){if(rs&&!(10<=Number(fO)))throw Error("Environmental error: no available transport.")}Cl.prototype.g=function(t,e){return new Ht(t,e)};function Ht(t,e){lt.call(this),this.g=new FE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!go(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!go(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ms(this)}ct(Ht,lt);Ht.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=WE(t,null,t.Y),Cc(t)};Ht.prototype.close=function(){of(this.g)};Ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qd(t),t=n);e.j.push(new jO(e.fb++,t)),e.H==3&&Cc(e)};Ht.prototype.N=function(){this.g.h=null,delete this.j,of(this.g),delete this.g,Ht.$.N.call(this)};function QE(t){ef.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ct(QE,ef);function YE(){tf.call(this),this.status=1}ct(YE,tf);function ms(t){this.g=t}ct(ms,GE);ms.prototype.Ba=function(){mt(this.g,"a")};ms.prototype.Aa=function(t){mt(this.g,new QE(t))};ms.prototype.za=function(t){mt(this.g,new YE)};ms.prototype.ya=function(){mt(this.g,"b")};function tD(){this.blockSize=-1}function mn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ct(mn,tD);mn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ou(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}mn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Ou(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Ou(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Ou(this,r),i=0;break}}this.h=i,this.i+=e};mn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ce(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var nD={};function cf(t){return-128<=t&&128>t?uO(t,function(e){return new Ce([e|0],0>e?-1:0)}):new Ce([t|0],0>t?-1:0)}function Rn(t){if(isNaN(t)||!isFinite(t))return Ki;if(0>t)return ft(Rn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Mh;return new Ce(e,0)}function JE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ft(JE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Rn(Math.pow(e,8)),r=Ki,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Rn(Math.pow(e,s)),r=r.R(s).add(Rn(o))):(r=r.R(n),r=r.add(Rn(o)))}return r}var Mh=4294967296,Ki=cf(0),Fh=cf(1),Sg=cf(16777216);G=Ce.prototype;G.ea=function(){if(Yt(this))return-ft(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Mh+r)*e,e*=Mh}return t};G.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(zn(this))return"0";if(Yt(this))return"-"+ft(this).toString(t);for(var e=Rn(Math.pow(t,6)),n=this,r="";;){var i=kl(n,e).g;n=Pl(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,zn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};G.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function zn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Yt(t){return t.h==-1}G.X=function(t){return t=Pl(this,t),Yt(t)?-1:zn(t)?0:1};function ft(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ce(n,~t.h).add(Fh)}G.abs=function(){return Yt(this)?ft(this):this};G.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ce(n,n[n.length-1]&-2147483648?-1:0)};function Pl(t,e){return t.add(ft(e))}G.R=function(t){if(zn(this)||zn(t))return Ki;if(Yt(this))return Yt(t)?ft(this).R(ft(t)):ft(ft(this).R(t));if(Yt(t))return ft(this.R(ft(t)));if(0>this.X(Sg)&&0>t.X(Sg))return Rn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Ra(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ra(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ra(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ra(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ce(n,0)};function Ra(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Is(t,e){this.g=t,this.h=e}function kl(t,e){if(zn(e))throw Error("division by zero");if(zn(t))return new Is(Ki,Ki);if(Yt(t))return e=kl(ft(t),e),new Is(ft(e.g),ft(e.h));if(Yt(e))return e=kl(t,ft(e)),new Is(ft(e.g),e.h);if(30<t.g.length){if(Yt(t)||Yt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Fh,r=e;0>=r.X(t);)n=Cg(n),r=Cg(r);var i=ki(n,1),s=ki(r,1);for(r=ki(r,2),n=ki(n,2);!zn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ki(r,1),n=ki(n,1)}return e=Pl(t,i.R(e)),new Is(i,e)}for(i=Ki;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Rn(n),o=s.R(e);Yt(o)||0<o.X(t);)n-=r,s=Rn(n),o=s.R(e);zn(s)&&(s=Fh),i=i.add(s),t=Pl(t,o)}return new Is(i,t)}G.gb=function(t){return kl(this,t).h};G.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ce(n,this.h&t.h)};G.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ce(n,this.h|t.h)};G.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ce(n,this.h^t.h)};function Cg(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ce(n,t.h)}function ki(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ce(i,t.h)}Cl.prototype.createWebChannel=Cl.prototype.g;Ht.prototype.send=Ht.prototype.u;Ht.prototype.open=Ht.prototype.m;Ht.prototype.close=Ht.prototype.close;wc.NO_ERROR=0;wc.TIMEOUT=8;wc.HTTP_ERROR=6;pE.COMPLETE="complete";mE.EventType=Jo;Jo.OPEN="a";Jo.CLOSE="b";Jo.ERROR="c";Jo.MESSAGE="d";lt.prototype.listen=lt.prototype.O;We.prototype.listenOnce=We.prototype.P;We.prototype.getLastError=We.prototype.Sa;We.prototype.getLastErrorCode=We.prototype.Ia;We.prototype.getStatus=We.prototype.da;We.prototype.getResponseJson=We.prototype.Wa;We.prototype.getResponseText=We.prototype.ja;We.prototype.send=We.prototype.ha;We.prototype.setWithCredentials=We.prototype.Oa;mn.prototype.digest=mn.prototype.l;mn.prototype.reset=mn.prototype.reset;mn.prototype.update=mn.prototype.j;Ce.prototype.add=Ce.prototype.add;Ce.prototype.multiply=Ce.prototype.R;Ce.prototype.modulo=Ce.prototype.gb;Ce.prototype.compare=Ce.prototype.X;Ce.prototype.toNumber=Ce.prototype.ea;Ce.prototype.toString=Ce.prototype.toString;Ce.prototype.getBits=Ce.prototype.D;Ce.fromNumber=Rn;Ce.fromString=JE;var rD=function(){return new Cl},iD=function(){return vc()},Du=wc,sD=pE,oD=wi,Pg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Sa=mE,aD=We,lD=mn,Gi=Ce;const kg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs="10.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new ac("@firebase/firestore");function bs(){return ci.logLevel}function K(t,...e){if(ci.logLevel<=Te.DEBUG){const n=e.map(uf);ci.debug(`Firestore (${gs}): ${t}`,...n)}}function Ln(t,...e){if(ci.logLevel<=Te.ERROR){const n=e.map(uf);ci.error(`Firestore (${gs}): ${t}`,...n)}}function is(t,...e){if(ci.logLevel<=Te.WARN){const n=e.map(uf);ci.warn(`Firestore (${gs}): ${t}`,...n)}}function uf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t="Unexpected state"){const e=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+t;throw Ln(e),new Error(e)}function Ne(t,e){t||le()}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class uD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hD{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new kn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new XE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new wt(e)}}class dD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new dD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new pD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=gD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new st(0,0))}static max(){return new he(new st(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(),r===void 0?r=e.length-n:r>e.length-n&&le(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends bo{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const _D=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends bo{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return _D.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new q(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(De.fromString(e))}static fromName(e){return new X(De.fromString(e).popFirst(5))}static empty(){return new X(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new De(e.slice()))}}function yD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=he.fromTimestamp(r===1e9?new st(n+1,0):new st(n,r));return new Ar(i,X.empty(),e)}function vD(t){return new Ar(t.readTime,t.key,-1)}class Ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ar(he.min(),X.empty(),-1)}static max(){return new Ar(he.max(),X.empty(),-1)}}function wD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==ED)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new kn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Gs(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=df(r.target.error);this.V.reject(new Gs(e,i))}}static open(e,n,r,i){try{return new hf(n,e.transaction(i,r))}catch(s){throw new Gs(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(K("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new bD(n)}}class Wr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Wr.S(rt())===12.2&&Ln("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return K("SimpleDb","Removing database:",e),$r(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Pd())return!1;if(Wr.C())return!0;const e=rt(),n=Wr.S(e),r=0<n&&n<10,i=Wr.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process!="undefined"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(K("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Gs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new q(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new q(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Gs(e,o))},i.onupgradeneeded=s=>{K("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{K("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=hf.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),O.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(K("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class ID{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return $r(this.k.delete())}}class Gs extends q{constructor(e,n){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ra(t){return t.name==="IndexedDbTransactionError"}class bD{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(K("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(K("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),$r(r)}add(e){return K("SimpleDb","ADD",this.store.name,e,e),$r(this.store.add(e))}get(e){return $r(this.store.get(e)).next(n=>(n===void 0&&(n=null),K("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return K("SimpleDb","DELETE",this.store.name,e),$r(this.store.delete(e))}count(){return K("SimpleDb","COUNT",this.store.name),$r(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new O((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new O((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){K("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new O((r,i)=>{n.onerror=s=>{const o=df(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new O((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new ID(a),c=n(a.primaryKey,a.value,l);if(c instanceof O){const u=c.catch(h=>(l.done(),O.reject(h)));r.push(u)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>O.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function $r(t){return new O((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=df(r.target.error);n(i)}})}let xg=!1;function df(t){const e=Wr.S(rt());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new q("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return xg||(xg=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}ff._e=-1;function Pc(t){return t==null}function xl(t){return t===0&&1/t==-1/0}function AD(t){return typeof t=="number"&&Number.isInteger(t)&&!xl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ei(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function eT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:dt.RED,this.left=i!=null?i:dt.EMPTY,this.right=s!=null?s:dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new dt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw le();const e=this.left.check();if(e!==this.right.check())throw le();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw le()}get value(){throw le()}get color(){throw le()}get left(){throw le()}get right(){throw le()}copy(e,n,r,i,s){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dg(this.data.getIterator())}getIteratorFrom(e){return new Dg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class Dg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new qt([])}unionWith(e){let n=new gt(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new tT("Invalid base64 string: "+s):s}}(e);return new Rt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const RD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=RD.exec(t);if(Ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ui(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pf(t){const e=t.mapValue.fields.__previous_value__;return kc(e)?pf(e):e}function Ao(t){const e=Rr(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ro{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kc(t)?4:CD(t)?9007199254740991:10:le()}function Vn(t,e){if(t===e)return!0;const n=hi(t);if(n!==hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ao(t).isEqual(Ao(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Rr(i.timestampValue),a=Rr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ui(i.bytesValue).isEqual(ui(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Xe(i.geoPointValue.latitude)===Xe(s.geoPointValue.latitude)&&Xe(i.geoPointValue.longitude)===Xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Xe(i.integerValue)===Xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Xe(i.doubleValue),a=Xe(s.doubleValue);return o===a?xl(o)===xl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Og(o)!==Og(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Vn(o[l],a[l])))return!1;return!0}(t,e);default:return le()}}function So(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function os(t,e){if(t===e)return 0;const n=hi(t),r=hi(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Xe(s.integerValue||s.doubleValue),l=Xe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Ng(t.timestampValue,e.timestampValue);case 4:return Ng(Ao(t),Ao(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ui(s),l=ui(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Ae(a[c],l[c]);if(u!==0)return u}return Ae(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ae(Xe(s.latitude),Xe(o.latitude));return a!==0?a:Ae(Xe(s.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=os(a[c],l[c]);if(u)return u}return Ae(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Pa.mapValue&&o===Pa.mapValue)return 0;if(s===Pa.mapValue)return 1;if(o===Pa.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=Ae(l[h],u[h]);if(d!==0)return d;const f=os(a[l[h]],c[u[h]]);if(f!==0)return f}return Ae(l.length,u.length)}(t.mapValue,e.mapValue);default:throw le()}}function Ng(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Rr(t),r=Rr(e),i=Ae(n.seconds,r.seconds);return i!==0?i:Ae(n.nanos,r.nanos)}function as(t){return Uh(t)}function Uh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ui(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Uh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Uh(n.fields[o])}`;return i+"}"}(t.mapValue):le()}function Ol(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function $h(t){return!!t&&"integerValue"in t}function mf(t){return!!t&&"arrayValue"in t}function Lg(t){return!!t&&"nullValue"in t}function Vg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wa(t){return!!t&&"mapValue"in t}function Qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ei(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function CD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(n)}setAll(e){let n=pt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Qs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ei(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(Qs(this.value))}}function nT(t){const e=[];return Ei(t.fields,(n,r)=>{const i=new pt([n]);if(Wa(r)){const s=nT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Et(e,0,he.min(),he.min(),he.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,i){return new Et(e,1,n,he.min(),r,i,0)}static newNoDocument(e,n){return new Et(e,2,n,he.min(),he.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,he.min(),he.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this.position=e,this.inclusive=n}}function Mg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=os(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n="asc"){this.field=e,this.dir=n}}function PD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{}class et extends rT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xD(e,n,r):n==="array-contains"?new ND(e,r):n==="in"?new LD(e,r):n==="not-in"?new VD(e,r):n==="array-contains-any"?new MD(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new OD(e,r):new DD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(os(n,this.value)):n!==null&&hi(this.value)===hi(n)&&this.matchesComparison(os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends rT{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new gn(e,n)}matches(e){return iT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function iT(t){return t.op==="and"}function sT(t){return kD(t)&&iT(t)}function kD(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function Bh(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+as(t.value);if(sT(t))return t.filters.map(e=>Bh(e)).join(",");{const e=t.filters.map(n=>Bh(n)).join(",");return`${t.op}(${e})`}}function oT(t,e){return t instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.field.isEqual(i.field)&&Vn(r.value,i.value)}(t,e):t instanceof gn?function(r,i){return i instanceof gn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&oT(o,i.filters[a]),!0):!1}(t,e):void le()}function aT(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${as(n.value)}`}(t):t instanceof gn?function(n){return n.op.toString()+" {"+n.getFilters().map(aT).join(" ,")+"}"}(t):"Filter"}class xD extends et{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class OD extends et{constructor(e,n){super(e,"in",n),this.keys=lT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DD extends et{constructor(e,n){super(e,"not-in",n),this.keys=lT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class ND extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mf(n)&&So(n.arrayValue,this.value)}}class LD extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&So(this.value.arrayValue,n)}}class VD extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(So(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!So(this.value.arrayValue,n)}}class MD extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>So(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Ug(t,e=null,n=[],r=[],i=null,s=null,o=null){return new FD(t,e,n,r,i,s,o)}function gf(t){const e=pe(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Pc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>as(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>as(r)).join(",")),e.ce=n}return e.ce}function _f(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!oT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fg(t.startAt,e.startAt)&&Fg(t.endAt,e.endAt)}function qh(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function UD(t,e,n,r,i,s,o,a){return new Ti(t,e,n,r,i,s,o,a)}function yf(t){return new Ti(t)}function $g(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vf(t){return t.collectionGroup!==null}function Qi(t){const e=pe(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new gt(pt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Co(s,r))}),n.has(pt.keyField().canonicalString())||e.le.push(new Co(pt.keyField(),r))}return e.le}function xn(t){const e=pe(t);return e.he||(e.he=$D(e,Qi(t))),e.he}function $D(t,e){if(t.limitType==="F")return Ug(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Co(i.field,s)});const n=t.endAt?new ls(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ls(t.startAt.position,t.startAt.inclusive):null;return Ug(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function jh(t,e){const n=t.filters.concat([e]);return new Ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Dl(t,e,n){return new Ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xc(t,e){return _f(xn(t),xn(e))&&t.limitType===e.limitType}function cT(t){return`${gf(xn(t))}|lt:${t.limitType}`}function Oi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>aT(i)).join(", ")}]`),Pc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>as(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>as(i)).join(",")),`Target(${r})`}(xn(t))}; limitType=${t.limitType})`}function Oc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Qi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=Mg(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Qi(r),i)||r.endAt&&!function(o,a,l){const c=Mg(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Qi(r),i))}(t,e)}function BD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uT(t){return(e,n)=>{let r=!1;for(const i of Qi(t)){const s=qD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qD(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?os(l,c):le()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ei(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return eT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD=new $e(X.comparator);function Qn(){return jD}const hT=new $e(X.comparator);function Ns(...t){let e=hT;for(const n of t)e=e.insert(n.key,n);return e}function dT(t){let e=hT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kr(){return Ys()}function fT(){return Ys()}function Ys(){return new _s(t=>t.toString(),(t,e)=>t.isEqual(e))}const zD=new $e(X.comparator),HD=new gt(X.comparator);function ve(...t){let e=HD;for(const n of t)e=e.add(n);return e}const WD=new gt(Ae);function KD(){return WD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xl(e)?"-0":e}}function mT(t){return{integerValue:""+t}}function gT(t,e){return AD(e)?mT(e):pT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this._=void 0}}function GD(t,e,n){return t instanceof Po?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&kc(s)&&(s=pf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ko?yT(t,e):t instanceof xo?vT(t,e):function(i,s){const o=_T(i,s),a=Bg(o)+Bg(i.Ie);return $h(o)&&$h(i.Ie)?mT(a):pT(i.serializer,a)}(t,e)}function QD(t,e,n){return t instanceof ko?yT(t,e):t instanceof xo?vT(t,e):n}function _T(t,e){return t instanceof Oo?function(r){return $h(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Po extends Dc{}class ko extends Dc{constructor(e){super(),this.elements=e}}function yT(t,e){const n=wT(e);for(const r of t.elements)n.some(i=>Vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class xo extends Dc{constructor(e){super(),this.elements=e}}function vT(t,e){let n=wT(e);for(const r of t.elements)n=n.filter(i=>!Vn(i,r));return{arrayValue:{values:n}}}class Oo extends Dc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Bg(t){return Xe(t.integerValue||t.doubleValue)}function wT(t){return mf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n){this.field=e,this.transform=n}}function YD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ko&&i instanceof ko||r instanceof xo&&i instanceof xo?ss(r.elements,i.elements,Vn):r instanceof Oo&&i instanceof Oo?Vn(r.Ie,i.Ie):r instanceof Po&&i instanceof Po}(t.transform,e.transform)}class JD{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ka(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nc{}function TT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wf(t.key,Zt.none()):new ia(t.key,t.data,Zt.none());{const n=t.data,r=Nt.empty();let i=new gt(pt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Or(t.key,r,new qt(i.toArray()),Zt.none())}}function XD(t,e,n){t instanceof ia?function(i,s,o){const a=i.value.clone(),l=jg(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(i,s,o){if(!Ka(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=jg(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(IT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Js(t,e,n,r){return t instanceof ia?function(s,o,a,l){if(!Ka(s.precondition,o))return a;const c=s.value.clone(),u=zg(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Or?function(s,o,a,l){if(!Ka(s.precondition,o))return a;const c=zg(s.fieldTransforms,l,o),u=o.data;return u.setAll(IT(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Ka(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function ZD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=_T(r.transform,i||null);s!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function qg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ss(r,i,(s,o)=>YD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ia extends Nc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Or extends Nc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function IT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jg(t,e,n){const r=new Map;Ne(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,QD(o,a,n[i]))}return r}function zg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,GD(s,o,e))}return r}class wf extends Nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eN extends Nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&XD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Js(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Js(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=TT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>qg(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>qg(n,r))}}class Ef{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ne(e.mutations.length===r.length);let i=function(){return zD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ef(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,Ie;function iN(t){switch(t){default:return le();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function bT(t){if(t===void 0)return Ln("GRPC error has no .code"),S.UNKNOWN;switch(t){case Je.OK:return S.OK;case Je.CANCELLED:return S.CANCELLED;case Je.UNKNOWN:return S.UNKNOWN;case Je.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Je.INTERNAL:return S.INTERNAL;case Je.UNAVAILABLE:return S.UNAVAILABLE;case Je.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Je.NOT_FOUND:return S.NOT_FOUND;case Je.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Je.ABORTED:return S.ABORTED;case Je.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Je.DATA_LOSS:return S.DATA_LOSS;default:return le()}}(Ie=Je||(Je={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=new Gi([4294967295,4294967295],0);function Hg(t){const e=sN().encode(t),n=new lD;return n.update(e),new Uint8Array(n.digest())}function Wg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Gi([n,r],0),new Gi([i,s],0)]}class Tf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ls(`Invalid padding: ${n}`);if(r<0)throw new Ls(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ls(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ls(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Gi.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Gi.fromNumber(r)));return i.compare(oN)===1&&(i=new Gi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Hg(e),[r,i]=Wg(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Tf(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Hg(e),[r,i]=Wg(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ls extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,sa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Lc(he.min(),i,new $e(Ae),Qn(),ve())}}class sa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new sa(r,n,ve(),ve(),ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class AT{constructor(e,n){this.targetId=e,this.fe=n}}class RT{constructor(e,n,r=Rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Kg{constructor(){this.ge=0,this.pe=Qg(),this.ye=Rt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ve(),n=ve(),r=ve();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:le()}}),new sa(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Qg()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ne(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class aN{constructor(e){this.Le=e,this.ke=new Map,this.qe=Qn(),this.Qe=Gg(),this.Ke=new $e(Ae)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:le()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(qh(s))if(r===0){const o=new X(s.path);this.We(n,o,Et.newNoDocument(o,he.min()))}else Ne(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ui(r).toUint8Array()}catch(l){if(l instanceof tT)return is("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Tf(o,i,s)}catch(l){return is(l instanceof Ls?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&qh(a.target)){const l=new X(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Et.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=ve();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Lc(e,n,this.Ke,this.qe,r);return this.qe=Qn(),this.Qe=Gg(),this.Ke=new $e(Ae),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Kg,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new gt(Ae),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Kg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Gg(){return new $e(X.comparator)}function Qg(){return new $e(X.comparator)}const lN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),cN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),uN=(()=>({and:"AND",or:"OR"}))();class hN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zh(t,e){return t.useProto3Json||Pc(e)?e:{value:e}}function Nl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ST(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dN(t,e){return Nl(t,e.toTimestamp())}function On(t){return Ne(!!t),he.fromTimestamp(function(n){const r=Rr(n);return new st(r.seconds,r.nanos)}(t))}function If(t,e){return Hh(t,e).canonicalString()}function Hh(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function CT(t){const e=De.fromString(t);return Ne(DT(e)),e}function Wh(t,e){return If(t.databaseId,e.path)}function Nu(t,e){const n=CT(e);if(n.get(1)!==t.databaseId.projectId)throw new q(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(kT(n))}function PT(t,e){return If(t.databaseId,e)}function fN(t){const e=CT(t);return e.length===4?De.emptyPath():kT(e)}function Kh(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kT(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Yg(t,e,n){return{name:Wh(t,e),fields:n.value.mapValue.fields}}function pN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:le()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(Ne(u===void 0||typeof u=="string"),Rt.fromBase64String(u||"")):(Ne(u===void 0||u instanceof Uint8Array),Rt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?S.UNKNOWN:bT(c.code);return new q(u,c.message||"")}(o);n=new RT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Nu(t,r.document.name),s=On(r.document.updateTime),o=r.document.createTime?On(r.document.createTime):he.min(),a=new Nt({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Ga(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Nu(t,r.document),s=r.readTime?On(r.readTime):he.min(),o=Et.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ga([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Nu(t,r.document),s=r.removedTargetIds||[];n=new Ga([],s,i,null)}else{if(!("filter"in e))return le();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new rN(i,s),a=r.targetId;n=new AT(a,o)}}return n}function mN(t,e){let n;if(e instanceof ia)n={update:Yg(t,e.key,e.value)};else if(e instanceof wf)n={delete:Wh(t,e.key)};else if(e instanceof Or)n={update:Yg(t,e.key,e.data),updateMask:bN(e.fieldMask)};else{if(!(e instanceof eN))return le();n={verify:Wh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Po)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ko)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof xo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Oo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw le()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:dN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:le()}(t,e.precondition)),n}function gN(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?On(i.updateTime):On(s);return o.isEqual(he.min())&&(o=On(s)),new JD(o,i.transformResults||[])}(n,e))):[]}function _N(t,e){return{documents:[PT(t,e.path)]}}function yN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=PT(t,i);const s=function(c){if(c.length!==0)return OT(gn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:Di(d.field),direction:EN(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=zh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ut:n,parent:i}}function vN(t){let e=fN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ne(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(h){const d=xT(h);return d instanceof gn&&sT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(p){return new Co(Ni(p.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Pc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new ls(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new ls(f,d)}(n.endAt)),UD(e,i,o,s,a,"F",l,c)}function wN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ni(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ni(n.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ni(n.unaryFilter.field);return et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ni(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return le()}}(t):t.fieldFilter!==void 0?function(n){return et.create(Ni(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return le()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return gn.create(n.compositeFilter.filters.map(r=>xT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return le()}}(n.compositeFilter.op))}(t):le()}function EN(t){return lN[t]}function TN(t){return cN[t]}function IN(t){return uN[t]}function Di(t){return{fieldPath:t.canonicalString()}}function Ni(t){return pt.fromServerFormat(t.fieldPath)}function OT(t){return t instanceof et?function(n){if(n.op==="=="){if(Vg(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NAN"}};if(Lg(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vg(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NOT_NAN"}};if(Lg(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Di(n.field),op:TN(n.op),value:n.value}}}(t):t instanceof gn?function(n){const r=n.getFilters().map(i=>OT(i));return r.length===1?r[0]:{compositeFilter:{op:IN(n.op),filters:r}}}(t):le()}function bN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function DT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,i,s=he.min(),o=he.min(),a=Rt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e){this.ct=e}}function RN(t){const e=vN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(){this._n=new CN}addToCollectionParentIndex(e,n){return this._n.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Ar.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Ar.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class CN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new gt(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new gt(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new cs(0)}static Bn(){return new cs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.changes=new _s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Js(r.mutation,i,qt.empty(),st.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const i=Kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ns();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Qn();const o=Ys(),a=function(){return Ys()}();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Or)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Js(u.mutation,c,u.mutation.getFieldMask(),st.now())):o.set(c.key,qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new kN(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ys();let i=new $e((o,a)=>o-a),s=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||qt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||ve()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=fT();u.forEach(d=>{if(!s.has(d)){const f=TT(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Kr());let a=-1,l=s;return o.next(c=>O.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?O.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ve())).next(u=>({batchId:a,changes:dT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=Ns();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ns();return this.indexManager.getCollectionParents(e,s).next(a=>O.forEach(a,l=>{const c=function(h,d){return new Ti(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,Et.newInvalidDocument(u)))});let a=Ns();return o.forEach((l,c)=>{const u=s.get(l);u!==void 0&&Js(u.mutation,c,qt.empty(),st.now()),Oc(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return O.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:On(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:RN(i.bundledQuery),readTime:On(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.overlays=new $e(X.comparator),this.hr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Kr(),s=n.length+1,o=new X(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new $e((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=Kr(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Kr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return O.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nN(n,r));let s=this.hr.get(n);s===void 0&&(s=ve(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.Pr=new gt(at.Ir),this.Tr=new gt(at.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new at(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new at(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new X(new De([])),r=new at(n,e),i=new at(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new X(new De([])),r=new at(n,e),i=new at(n,e+1);let s=ve();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new at(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return X.comparator(e.key,n.key)||Ae(e.pr,n.pr)}static Er(e,n){return Ae(e.pr,n.pr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new gt(at.Ir)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new at(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),i=new at(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(Ae);return n.forEach(i=>{const s=new at(i,0),o=new at(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),O.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new at(new X(s),0);let a=new gt(Ae);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),O.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ne(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return O.forEach(n.mutations,i=>{const s=new at(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new at(n,0),i=this.wr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e){this.vr=e,this.docs=function(){return new $e(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Et.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Qn();const o=n.path,a=new X(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||wD(vD(u),r)<=0||(i.has(u.key)||Oc(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){le()}Fr(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new VN(this)}getSize(e){return O.resolve(this.size)}}class VN extends PN{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e){this.persistence=e,this.Mr=new _s(n=>gf(n),_f),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Or=0,this.Nr=new bf,this.targetCount=0,this.Br=cs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),O.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.qn(n),O.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,n){this.Lr={},this.overlays={},this.kr=new ff(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new MN(this),this.indexManager=new SN,this.remoteDocumentCache=function(i){return new LN(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new AN(n),this.$r=new ON(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new NN(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new UN(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return O.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class UN extends TD{constructor(e){super(),this.currentSequenceNumber=e}}class Af{constructor(e){this.persistence=e,this.zr=new bf,this.jr=null}static Hr(e){return new Af(e)}get Jr(){if(this.jr)return this.jr;throw le()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),O.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Jr,r=>{const i=X.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,he.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return O.or([()=>O.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ve(),i=ve();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Rf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return fP()?8:Wr.v(rt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new $N;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(bs()<=Te.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Oi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),O.resolve()):(bs()<=Te.DEBUG&&K("QueryEngine","Query:",Oi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(bs()<=Te.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Oi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xn(n))):O.resolve())}ji(e,n){if($g(n))return O.resolve(null);let r=xn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Dl(n,null,"F"),r=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ve(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,Dl(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return $g(n)||i.isEqual(he.min())?O.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?O.resolve(null):(bs()<=Te.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Oi(n)),this.es(e,o,n,yD(i,-1)).next(a=>a))})}Zi(e,n){let r=new gt(uT(e));return n.forEach((i,s)=>{Oc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return bs()<=Te.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Oi(n)),this.zi.getDocumentsMatchingQuery(e,n,Ar.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new $e(Ae),this.rs=new _s(s=>gf(s),_f),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xN(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function jN(t,e,n,r){return new qN(t,e,n,r)}async function NT(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ve();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function zN(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=O.resolve();return d.forEach(p=>{f=f.next(()=>u.getEntry(l,p)).next(v=>{const g=c.docVersions.get(p);Ne(g!==null),v.version.compareTo(g)<0&&(h.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),u.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ve();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function LT(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function HN(t,e){const n=pe(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Rt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(v,g,w){return v.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,u)&&a.push(n.Qr.updateTargetData(s,f))});let l=Qn(),c=ve();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(WN(s,o,e.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual(he.min())){const u=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function WN(t,e,n){let r=ve(),i=ve();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Qn();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function KN(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function GN(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Gh(t,e,n){const r=pe(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ra(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Jg(t,e,n){const r=pe(t);let i=he.min(),s=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=pe(l),d=h.rs.get(u);return d!==void 0?O.resolve(h.ns.get(d)):h.Qr.getTargetData(c,u)}(r,o,xn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:he.min(),n?s:ve())).next(a=>(QN(r,BD(e),a),{documents:a,hs:s})))}function QN(t,e,n){let r=t.ss.get(e)||he.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Xg{constructor(){this.activeTargetIds=KD()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YN{constructor(){this.no=new Xg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Xg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka=null;function Lu(){return ka===null?ka=function(){return 268435456+Math.round(2147483648*Math.random())}():ka++,"0x"+ka.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class eL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Lu(),l=this.bo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,s,o),this.Co(n,l,c,i).then(u=>(K("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw is("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=XN[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=Lu();return new Promise((o,a)=>{const l=new aD;l.setWithCredentials(!0),l.listenOnce(sD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Du.NO_ERROR:const u=l.getResponseJson();K(yt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case Du.TIMEOUT:K(yt,`RPC '${e}' ${s} timed out`),a(new q(S.DEADLINE_EXCEEDED,"Request time out"));break;case Du.HTTP_ERROR:const h=l.getStatus();if(K(yt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const p=function(g){const w=g.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(w)>=0?w:S.UNKNOWN}(f.status);a(new q(p,f.message))}else a(new q(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new q(S.UNAVAILABLE,"Connection failed."));break;default:le()}}finally{K(yt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);K(yt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Fo(e,n,r){const i=Lu(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=rD(),a=iD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");K(yt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const p=new ZN({lo:g=>{f?K(yt,`Not sending because RPC '${e}' stream ${i} is closed:`,g):(d||(K(yt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),K(yt,`RPC '${e}' stream ${i} sending:`,g),h.send(g))},ho:()=>h.close()}),v=(g,w,y)=>{g.listen(w,E=>{try{y(E)}catch(I){setTimeout(()=>{throw I},0)}})};return v(h,Sa.EventType.OPEN,()=>{f||K(yt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Sa.EventType.CLOSE,()=>{f||(f=!0,K(yt,`RPC '${e}' stream ${i} transport closed`),p.Vo())}),v(h,Sa.EventType.ERROR,g=>{f||(f=!0,is(yt,`RPC '${e}' stream ${i} transport errored:`,g),p.Vo(new q(S.UNAVAILABLE,"The operation could not be completed")))}),v(h,Sa.EventType.MESSAGE,g=>{var w;if(!f){const y=g.data[0];Ne(!!y);const E=y,I=E.error||((w=E[0])===null||w===void 0?void 0:w.error);if(I){K(yt,`RPC '${e}' stream ${i} received error:`,I);const A=I.status;let C=function(D){const L=Je[D];if(L!==void 0)return bT(L)}(A),V=I.message;C===void 0&&(C=S.INTERNAL,V="Unknown error status: "+A+" with message "+I.message),f=!0,p.Vo(new q(C,V)),h.close()}else K(yt,`RPC '${e}' stream ${i} received:`,y),p.mo(y)}}),v(a,oD.STAT_EVENT,g=>{g.stat===Pg.PROXY?K(yt,`RPC '${e}' stream ${i} detected buffering proxy`):g.stat===Pg.NOPROXY&&K(yt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.Ro()},0),p}}function Vu(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t){return new hN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new VT(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new q(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tL extends MT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=pN(this.serializer,e),r=function(s){if(!("targetChange"in s))return he.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?On(o.readTime):he.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Kh(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=qh(l)?{documents:_N(s,l)}:{query:yN(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ST(s,o.resumeToken);const c=zh(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(he.min())>0){a.readTime=Nl(s,o.snapshotVersion.toTimestamp());const c=zh(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=wN(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Kh(this.serializer),n.removeTarget=e,this.t_(n)}}class nL extends MT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=gN(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.T_(r,n)}return Ne(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Kh(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mN(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new q(S.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,Hh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(S.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Hh(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(S.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class iL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Ln(n),this.g_=!1):K("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Ii(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=pe(l);c.v_.add(4),await oa(c),c.x_.set("Unknown"),c.v_.delete(4),await Mc(c)}(this))})}),this.x_=new iL(r,i)}}async function Mc(t){if(Ii(t))for(const e of t.F_)await e(!0)}async function oa(t){for(const e of t.F_)await e(!1)}function FT(t,e){const n=pe(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Pf(n)?Cf(n):ys(n).Jo()&&Sf(n,e))}function UT(t,e){const n=pe(t),r=ys(n);n.C_.delete(e),r.Jo()&&$T(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Ii(n)&&n.x_.set("Unknown"))}function Sf(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ys(t).c_(e)}function $T(t,e){t.O_.Oe(e),ys(t).l_(e)}function Cf(t){t.O_=new aN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ys(t).start(),t.x_.p_()}function Pf(t){return Ii(t)&&!ys(t).Ho()&&t.C_.size>0}function Ii(t){return pe(t).v_.size===0}function BT(t){t.O_=void 0}async function oL(t){t.C_.forEach((e,n)=>{Sf(t,e)})}async function aL(t,e){BT(t),Pf(t)?(t.x_.S_(e),Cf(t)):t.x_.set("Unknown")}async function lL(t,e,n){if(t.x_.set("Online"),e instanceof RT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ll(t,r)}else if(e instanceof Ga?t.O_.$e(e):e instanceof AT?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(he.min()))try{const r=await LT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=s.C_.get(c);u&&s.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=s.C_.get(l);if(!u)return;s.C_.set(l,u.withResumeToken(Rt.EMPTY_BYTE_STRING,u.snapshotVersion)),$T(s,l);const h=new gr(u.target,l,c,u.sequenceNumber);Sf(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await Ll(t,r)}}async function Ll(t,e,n){if(!ra(e))throw e;t.v_.add(1),await oa(t),t.x_.set("Offline"),n||(n=()=>LT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Mc(t)})}function qT(t,e){return e().catch(n=>Ll(t,n,e))}async function Fc(t){const e=pe(t),n=Sr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;cL(e);)try{const i=await KN(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,uL(e,i)}catch(i){await Ll(e,i)}jT(e)&&zT(e)}function cL(t){return Ii(t)&&t.D_.length<10}function uL(t,e){t.D_.push(e);const n=Sr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function jT(t){return Ii(t)&&!Sr(t).Ho()&&t.D_.length>0}function zT(t){Sr(t).start()}async function hL(t){Sr(t).d_()}async function dL(t){const e=Sr(t);for(const n of t.D_)e.I_(n.mutations)}async function fL(t,e,n){const r=t.D_.shift(),i=Ef.from(r,e,n);await qT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fc(t)}async function pL(t,e){e&&Sr(t).P_&&await async function(r,i){if(function(o){return iN(o)&&o!==S.ABORTED}(i.code)){const s=r.D_.shift();Sr(r).Zo(),await qT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Fc(r)}}(t,e),jT(t)&&zT(t)}async function e_(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Ii(n);n.v_.add(3),await oa(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Mc(n)}async function mL(t,e){const n=pe(t);e?(n.v_.delete(2),await Mc(n)):e||(n.v_.add(2),await oa(n),n.x_.set("Unknown"))}function ys(t){return t.N_||(t.N_=function(n,r,i){const s=pe(n);return s.R_(),new tL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:oL.bind(null,t),To:aL.bind(null,t),u_:lL.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Pf(t)?Cf(t):t.x_.set("Unknown")):(await t.N_.stop(),BT(t))})),t.N_}function Sr(t){return t.B_||(t.B_=function(n,r,i){const s=pe(n);return s.R_(),new nL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:hL.bind(null,t),To:pL.bind(null,t),E_:dL.bind(null,t),T_:fL.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await Fc(t)):(await t.B_.stop(),t.D_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new kf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xf(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),ra(t))return new q(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=Ns(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new Yi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Yi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(){this.L_=new $e(X.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):le():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class us{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new us(e,n,Yi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(){this.q_=void 0,this.Q_=[]}}class _L{constructor(){this.queries=new _s(e=>cT(e),xc),this.onlineState="Unknown",this.K_=new Set}}async function HT(t,e){const n=pe(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new gL),i)try{s.q_=await n.onListen(r)}catch(o){const a=xf(o,`Initialization of query '${Oi(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.Q_.push(e),e.U_(n.onlineState),s.q_&&e.W_(s.q_)&&Of(n)}async function WT(t,e){const n=pe(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function yL(t,e){const n=pe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&Of(n)}function vL(t,e,n){const r=pe(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function Of(t){t.K_.forEach(e=>{e.next()})}class KT{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.key=e}}class QT{constructor(e){this.key=e}}class wL{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=ve(),this.mutatedKeys=ve(),this.ua=uT(e),this.ca=new Yi(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new t_,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=Oc(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;d&&f?d.data.isEqual(f.data)?p!==v&&(r.track({type:3,doc:f}),g=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),g=!0,(l&&this.ua(f,l)>0||c&&this.ua(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),g=!0):d&&!f&&(r.track({type:1,doc:d}),g=!0,(l||c)&&(a=!0)),g&&(f?(o=o.add(f),s=v?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((u,h)=>function(f,p){const v=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le()}};return v(f)-v(p)}(u.type,h.type)||this.ua(u.doc,h.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,c=l!==this._a;return this._a=l,o.length!==0||c?{snapshot:new us(this.query,e.ca,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new t_,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=ve(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new QT(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new GT(r))}),n}Ra(e){this.oa=e.hs,this.aa=ve();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return us.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class EL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TL{constructor(e){this.key=e,this.ma=!1}}class IL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new _s(a=>cT(a),xc),this.pa=new Map,this.ya=new Set,this.wa=new $e(X.comparator),this.Sa=new Map,this.ba=new bf,this.Da={},this.Ca=new Map,this.va=cs.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function bL(t,e){const n=NL(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await GN(n.localStore,xn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await AL(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&FT(n.remoteStore,o)}return i}async function AL(t,e,n,r,i){t.Ma=(h,d,f)=>async function(v,g,w,y){let E=g.view.ha(w);E.Xi&&(E=await Jg(v.localStore,g.query,!1).then(({documents:V})=>g.view.ha(V,E)));const I=y&&y.targetChanges.get(g.targetId),A=y&&y.targetMismatches.get(g.targetId)!=null,C=g.view.applyChanges(E,v.isPrimaryClient,I,A);return r_(v,g.targetId,C.da),C.snapshot}(t,h,d,f);const s=await Jg(t.localStore,e,!0),o=new wL(e,s.hs),a=o.ha(s.documents),l=sa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);r_(t,n,c.da);const u=new EL(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),c.snapshot}async function RL(t,e){const n=pe(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!xc(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Gh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),UT(n.remoteStore,r.targetId),Qh(n,r.targetId)}).catch(na)):(Qh(n,r.targetId),await Gh(n.localStore,r.targetId,!0))}async function SL(t,e,n){const r=LL(t);try{const i=await function(o,a){const l=pe(o),c=st.now(),u=a.reduce((f,p)=>f.add(p.key),ve());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=Qn(),v=ve();return l.os.getEntries(f,u).next(g=>{p=g,p.forEach((w,y)=>{y.isValidDocument()||(v=v.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,p)).next(g=>{h=g;const w=[];for(const y of a){const E=ZD(y,h.get(y.key).overlayedDocument);E!=null&&w.push(new Or(y.key,E,nT(E.value.mapValue),Zt.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,w,a)}).next(g=>{d=g;const w=g.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(f,g.batchId,w)})}).then(()=>({batchId:d.batchId,changes:dT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Da[o.currentUser.toKey()];c||(c=new $e(Ae)),c=c.insert(a,l),o.Da[o.currentUser.toKey()]=c}(r,i.batchId,n),await aa(r,i.changes),await Fc(r.remoteStore)}catch(i){const s=xf(i,"Failed to persist write");n.reject(s)}}async function YT(t,e){const n=pe(t);try{const r=await HN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(Ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?Ne(o.ma):i.removedDocuments.size>0&&(Ne(o.ma),o.ma=!1))}),await aa(n,r,e)}catch(r){await na(r)}}function n_(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=pe(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.Q_)d.U_(a)&&(c=!0)}),c&&Of(l)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CL(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new $e(X.comparator);o=o.insert(s,Et.newNoDocument(s,he.min()));const a=ve().add(s),l=new Lc(he.min(),new Map,new $e(Ae),o,a);await YT(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),Df(r)}else await Gh(r.localStore,e,!1).then(()=>Qh(r,e,n)).catch(na)}async function PL(t,e){const n=pe(t),r=e.batch.batchId;try{const i=await zN(n.localStore,e);XT(n,r,null),JT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await aa(n,i)}catch(i){await na(i)}}async function kL(t,e,n){const r=pe(t);try{const i=await function(o,a){const l=pe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Ne(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);XT(r,e,n),JT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await aa(r,i)}catch(i){await na(i)}}function JT(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function XT(t,e,n){const r=pe(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Qh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||ZT(t,r)})}function ZT(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(UT(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Df(t))}function r_(t,e,n){for(const r of n)r instanceof GT?(t.ba.addReference(r.key,e),xL(t,r)):r instanceof QT?(K("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||ZT(t,r.key)):le()}function xL(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(K("SyncEngine","New document in limbo: "+n),t.ya.add(r),Df(t))}function Df(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new X(De.fromString(e)),r=t.va.next();t.Sa.set(r,new TL(n)),t.wa=t.wa.insert(n,r),FT(t.remoteStore,new gr(xn(yf(n.path)),r,"TargetPurposeLimboResolution",ff._e))}}async function aa(t,e,n){const r=pe(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Rf.Ki(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.fa.u_(i),await async function(l,c){const u=pe(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>O.forEach(c,d=>O.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>O.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ra(h))throw h;K("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ns.get(d),p=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(p);u.ns=u.ns.insert(d,v)}}}(r.localStore,s))}async function OL(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await NT(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new q(S.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await aa(n,r.us)}}function DL(t,e){const n=pe(t),r=n.Sa.get(e);if(r&&r.ma)return ve().add(r.key);{let i=ve();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function NL(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=YT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CL.bind(null,e),e.fa.u_=yL.bind(null,e.eventManager),e.fa.xa=vL.bind(null,e.eventManager),e}function LL(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kL.bind(null,e),e}class i_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Vc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return jN(this.persistence,new BN,e.initialUser,this.serializer)}createPersistence(e){return new FN(Af.Hr,this.serializer)}createSharedClientState(e){return new YN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>n_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OL.bind(null,this.syncEngine),await mL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _L}()}createDatastore(e){const n=Vc(e.databaseInfo.databaseId),r=function(s){return new eL(s)}(e.databaseInfo);return function(s,o,a,l){return new rL(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new sL(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>n_(this.syncEngine,n,0),function(){return Zg.D()?new Zg:new JN}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,u){const h=new IL(i,s,o,a,l,c);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=pe(r);K("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await oa(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=wt.UNAUTHENTICATED,this.clientId=ZE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{K("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(K("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mu(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await NT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function s_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await UL(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>e_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>e_(e.remoteStore,i)),t._onlineComponents=e}function FL(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function UL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!FL(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await Mu(t,new i_)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await Mu(t,new i_);return t._offlineComponents}async function t0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await s_(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await s_(t,new VL))),t._onlineComponents}function $L(t){return t0(t).then(e=>e.syncEngine)}async function n0(t){const e=await t0(t),n=e.eventManager;return n.onListen=bL.bind(null,e.syncEngine),n.onUnlisten=RL.bind(null,e.syncEngine),n}function BL(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new e0({next:d=>{o.enqueueAndForget(()=>WT(s,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new q(S.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new q(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new KT(yf(a.path),u,{includeMetadataChanges:!0,Z_:!0});return HT(s,h)}(await n0(t),t.asyncQueue,e,n,r)),r.promise}function qL(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new e0({next:d=>{o.enqueueAndForget(()=>WT(s,h)),d.fromCache&&l.source==="server"?c.reject(new q(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new KT(a,u,{includeMetadataChanges:!0,Z_:!0});return HT(s,h)}(await n0(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t,e,n){if(!n)throw new q(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jL(t,e,n,r){if(e===!0&&r===!0)throw new q(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function a_(t){if(!X.isDocumentKey(t))throw new q(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function l_(t){if(X.isDocumentKey(t))throw new q(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Uc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le()}function _n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uc(t);throw new q(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function zL(t,e){if(e<=0)throw new q(S.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=r0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $c{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new c_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new c_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cD;switch(r.type){case"firstParty":return new fD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=o_.get(n);r&&(K("ComponentProvider","Removing Datastore"),o_.delete(n),r.terminate())}(this),Promise.resolve()}}function HL(t,e,n,r={}){var i;const s=(t=_n(t,$c))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=wt.MOCK_USER;else{a=iw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new wt(c)}t._authCredentials=new uD(new XE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zn(this.firestore,e,this._query)}}class xt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class Er extends Zn{constructor(e,n,r){super(e,n,yf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new X(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function JU(t,e,...n){if(t=Se(t),i0("collection","path",e),t instanceof $c){const r=De.fromString(e,...n);return l_(r),new Er(t,null,r)}{if(!(t instanceof xt||t instanceof Er))throw new q(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return l_(r),new Er(t.firestore,null,r)}}function Nf(t,e,...n){if(t=Se(t),arguments.length===1&&(e=ZE.newId()),i0("doc","path",e),t instanceof $c){const r=De.fromString(e,...n);return a_(r),new xt(t,null,new X(r))}{if(!(t instanceof xt||t instanceof Er))throw new q(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return a_(r),new xt(t.firestore,t instanceof Er?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new VT(this,"async_queue_retry"),this._u=()=>{const n=Vu();n&&K("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Vu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=Vu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new kn;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!ra(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ln("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const i=kf.createAndSchedule(this,e,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&le()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}class bi extends $c{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new WL}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||s0(this),this._firestoreClient.terminate()}}function KL(t,e){const n=typeof t=="object"?t:lc(),r=typeof t=="string"?t:e||"(default)",i=Pr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=tw("firestore");s&&HL(i,...s)}return i}function Lf(t){return t._firestoreClient||s0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function s0(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,u){return new SD(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,r0(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new ML(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(Rt.fromBase64String(e))}catch(n){throw new q(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL=/^__.*__$/;class QL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new ia(e,this.data,n,this.fieldTransforms)}}class o0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Or(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function a0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le()}}class Mf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new Mf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return Vl(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(a0(this.du)&&GL.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class YL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vc(e)}Su(e,n,r,i=!1){return new Mf({du:e,methodName:n,wu:r,path:pt.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ca(t){const e=t._freezeSettings(),n=Vc(t._databaseId);return new YL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function l0(t,e,n,r,i,s={}){const o=t.Su(s.merge||s.mergeFields?2:0,e,n,i);$f("Data must be an object, but it was:",o,r);const a=u0(r,o);let l,c;if(s.merge)l=new qt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=Yh(e,h,n);if(!o.contains(d))throw new q(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);d0(u,d)||u.push(d)}l=new qt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new QL(new Nt(a),l,c)}class qc extends la{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qc}}class Ff extends la{_toFieldTransform(e){return new ET(e.path,new Po)}isEqual(e){return e instanceof Ff}}class Uf extends la{constructor(e,n){super(e),this.Du=n}_toFieldTransform(e){const n=new Oo(e.serializer,gT(e.serializer,this.Du));return new ET(e.path,n)}isEqual(e){return e instanceof Uf&&this.Du===e.Du}}function JL(t,e,n,r){const i=t.Su(1,e,n);$f("Data must be an object, but it was:",i,r);const s=[],o=Nt.empty();Ei(r,(l,c)=>{const u=Bf(e,l,n);c=Se(c);const h=i.fu(u);if(c instanceof qc)s.push(u);else{const d=ua(c,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new qt(s);return new o0(o,a,i.fieldTransforms)}function XL(t,e,n,r,i,s){const o=t.Su(1,e,n),a=[Yh(e,r,n)],l=[i];if(s.length%2!=0)throw new q(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Yh(e,s[d])),l.push(s[d+1]);const c=[],u=Nt.empty();for(let d=a.length-1;d>=0;--d)if(!d0(c,a[d])){const f=a[d];let p=l[d];p=Se(p);const v=o.fu(f);if(p instanceof qc)c.push(f);else{const g=ua(p,v);g!=null&&(c.push(f),u.set(f,g))}}const h=new qt(c);return new o0(u,h,o.fieldTransforms)}function c0(t,e,n,r=!1){return ua(n,t.Su(r?4:3,e))}function ua(t,e){if(h0(t=Se(t)))return $f("Unsupported field value:",e,t),u0(t,e);if(t instanceof la)return function(r,i){if(!a0(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ua(a,i.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gT(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=st.fromDate(r);return{timestampValue:Nl(i.serializer,s)}}if(r instanceof st){const s=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nl(i.serializer,s)}}if(r instanceof Vf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hs)return{bytesValue:ST(i.serializer,r._byteString)};if(r instanceof xt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:If(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${Uc(r)}`)}(t,e)}function u0(t,e){const n={};return eT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ei(t,(r,i)=>{const s=ua(i,e.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function h0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof Vf||t instanceof hs||t instanceof xt||t instanceof la)}function $f(t,e,n){if(!h0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Uc(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function Yh(t,e,n){if((e=Se(e))instanceof Bc)return e._internalPath;if(typeof e=="string")return Bf(t,e);throw Vl("Field path arguments must be of type string or ",t,!1,void 0,n)}const ZL=new RegExp("[~\\*/\\[\\]]");function Bf(t,e,n){if(e.search(ZL)>=0)throw Vl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bc(...e.split("."))._internalPath}catch{throw Vl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new q(S.INVALID_ARGUMENT,a+t+l)}function d0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class eV extends qf{data(){return super.data()}}function jc(t,e){return typeof e=="string"?Bf(t,e):e instanceof Bc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jf{}class zc extends jf{}function XU(t,e,...n){let r=[];e instanceof jf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof zf).length,a=s.filter(l=>l instanceof Hc).length;if(o>1||o>0&&a>0)throw new q(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Hc extends zc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Hc(e,n,r)}_apply(e){const n=this._parse(e);return f0(e._query,n),new Zn(e.firestore,e.converter,jh(e._query,n))}_parse(e){const n=ca(e.firestore);return function(s,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new q(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){h_(h,u);const f=[];for(const p of h)f.push(u_(l,s,p));d={arrayValue:{values:f}}}else d=u_(l,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||h_(h,u),d=c0(a,o,h,u==="in"||u==="not-in");return et.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ZU(t,e,n){const r=e,i=jc("where",t);return Hc._create(i,r,n)}class zf extends jf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:gn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)f0(o,l),o=jh(o,l)}(e._query,n),new Zn(e.firestore,e.converter,jh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hf extends zc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Hf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new q(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Co(s,o)}(e._query,this._field,this._direction);return new Zn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ti(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function e2(t,e="asc"){const n=e,r=jc("orderBy",t);return Hf._create(r,n)}class Wf extends zc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Wf(e,n,r)}_apply(e){return new Zn(e.firestore,e.converter,Dl(e._query,this._limit,this._limitType))}}function t2(t){return zL("limit",t),Wf._create("limit",t,"F")}class Kf extends zc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Kf(e,n,r)}_apply(e){const n=nV(e,this.type,this._docOrFields,this._inclusive);return new Zn(e.firestore,e.converter,function(i,s){return new Ti(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function n2(...t){return Kf._create("startAfter",t,!1)}function nV(t,e,n,r){if(n[0]=Se(n[0]),n[0]instanceof qf)return function(s,o,a,l,c){if(!l)throw new q(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const u=[];for(const h of Qi(s))if(h.field.isKeyField())u.push(Ol(o,l.key));else{const d=l.data.field(h.field);if(kc(d))throw new q(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new q(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}u.push(d)}return new ls(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ca(t.firestore);return function(o,a,l,c,u,h){const d=o.explicitOrderBy;if(u.length>d.length)throw new q(S.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let p=0;p<u.length;p++){const v=u[p];if(d[p].field.isKeyField()){if(typeof v!="string")throw new q(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof v}`);if(!vf(o)&&v.indexOf("/")!==-1)throw new q(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${v}' contains a slash.`);const g=o.path.child(De.fromString(v));if(!X.isDocumentKey(g))throw new q(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${g}' is not because it contains an odd number of segments.`);const w=new X(g);f.push(Ol(a,w))}else{const g=c0(l,c,v);f.push(g)}}return new ls(f,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function u_(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new q(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vf(e)&&n.indexOf("/")!==-1)throw new q(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!X.isDocumentKey(r))throw new q(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ol(t,new X(r))}if(n instanceof xt)return Ol(t,n._key);throw new q(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uc(n)}.`)}function h_(t,e){if(!Array.isArray(t)||t.length===0)throw new q(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function f0(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class rV{convertValue(e,n="none"){switch(hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw le()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ei(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Vf(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ao(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Ne(DT(r));const i=new Ro(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||Ln(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class m0 extends qf{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(jc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Qa extends m0{data(e={}){return super.data(e)}}class iV{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Qa(this._firestore,this._userDataWriter,r.key,r,new Vs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Qa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Vs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Qa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Vs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:sV(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(t){t=_n(t,xt);const e=_n(t.firestore,bi);return BL(Lf(e),t._key).then(n=>oV(e,t,n))}class g0 extends rV{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,n)}}function i2(t){t=_n(t,Zn);const e=_n(t.firestore,bi),n=Lf(e),r=new g0(e);return tV(t._query),qL(n,t._query).then(i=>new iV(e,r,t,i))}function s2(t,e,n){t=_n(t,xt);const r=_n(t.firestore,bi),i=p0(t.converter,e,n);return Wc(r,[l0(ca(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Zt.none())])}function _0(t,e,n,...r){t=_n(t,xt);const i=_n(t.firestore,bi),s=ca(i);let o;return o=typeof(e=Se(e))=="string"||e instanceof Bc?XL(s,"updateDoc",t._key,e,n,r):JL(s,"updateDoc",t._key,e),Wc(i,[o.toMutation(t._key,Zt.exists(!0))])}function o2(t){return Wc(_n(t.firestore,bi),[new wf(t._key,Zt.none())])}function a2(t,e){const n=_n(t.firestore,bi),r=Nf(t),i=p0(t.converter,e);return Wc(n,[l0(ca(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Zt.exists(!1))]).then(()=>r)}function Wc(t,e){return function(r,i){const s=new kn;return r.asyncQueue.enqueueAndForget(async()=>SL(await $L(r),i,s)),s.promise}(Lf(t),e)}function oV(t,e,n){const r=n.docs.get(e._key),i=new g0(t);return new m0(t,i,e._key,r,new Vs(n.hasPendingWrites,n.fromCache),e.converter)}function l2(){return new Ff("serverTimestamp")}function c2(t){return new Uf("increment",t)}(function(e,n=!0){(function(i){gs=i})(vi),pn(new en("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new bi(new hD(r.getProvider("auth-internal")),new mD(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ro(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Lt(kg,"4.4.2",e),Lt(kg,"4.4.2","esm2017")})();var aV="firebase",lV="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(aV,lV,"app");const y0="@firebase/installations",Gf="0.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=1e4,w0=`w:${Gf}`,E0="FIS_v2",cV="https://firebaseinstallations.googleapis.com/v1",uV=60*60*1e3,hV="installations",dV="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fV={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},di=new yi(hV,dV,fV);function T0(t){return t instanceof nn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0({projectId:t}){return`${cV}/projects/${t}/installations`}function b0(t){return{token:t.token,requestStatus:2,expiresIn:mV(t.expiresIn),creationTime:Date.now()}}async function A0(t,e){const r=(await e.json()).error;return di.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function R0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function pV(t,{refreshToken:e}){const n=R0(t);return n.append("Authorization",gV(e)),n}async function S0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function mV(t){return Number(t.replace("s","000"))}function gV(t){return`${E0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _V({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=I0(t),i=R0(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:E0,appId:t.appId,sdkVersion:w0},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await S0(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:b0(c.authToken)}}else throw await A0("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yV(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vV=/^[cdef][\w-]{21}$/,Jh="";function wV(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=EV(t);return vV.test(n)?n:Jh}catch{return Jh}}function EV(t){return yV(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=new Map;function k0(t,e){const n=Kc(t);x0(n,e),TV(n,e)}function x0(t,e){const n=P0.get(t);if(!!n)for(const r of n)r(e)}function TV(t,e){const n=IV();n&&n.postMessage({key:t,fid:e}),bV()}let Gr=null;function IV(){return!Gr&&"BroadcastChannel"in self&&(Gr=new BroadcastChannel("[Firebase] FID Change"),Gr.onmessage=t=>{x0(t.data.key,t.data.fid)}),Gr}function bV(){P0.size===0&&Gr&&(Gr.close(),Gr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AV="firebase-installations-database",RV=1,fi="firebase-installations-store";let Fu=null;function Qf(){return Fu||(Fu=cw(AV,RV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fi)}}})),Fu}async function Ml(t,e){const n=Kc(t),i=(await Qf()).transaction(fi,"readwrite"),s=i.objectStore(fi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&k0(t,e.fid),e}async function O0(t){const e=Kc(t),r=(await Qf()).transaction(fi,"readwrite");await r.objectStore(fi).delete(e),await r.done}async function Gc(t,e){const n=Kc(t),i=(await Qf()).transaction(fi,"readwrite"),s=i.objectStore(fi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&k0(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yf(t){let e;const n=await Gc(t.appConfig,r=>{const i=SV(r),s=CV(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Jh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function SV(t){const e=t||{fid:wV(),registrationStatus:0};return D0(e)}function CV(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(di.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=PV(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:kV(t)}:{installationEntry:e}}async function PV(t,e){try{const n=await _V(t,e);return Ml(t.appConfig,n)}catch(n){throw T0(n)&&n.customData.serverCode===409?await O0(t.appConfig):await Ml(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function kV(t){let e=await d_(t.appConfig);for(;e.registrationStatus===1;)await C0(100),e=await d_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Yf(t);return r||n}return e}function d_(t){return Gc(t,e=>{if(!e)throw di.create("installation-not-found");return D0(e)})}function D0(t){return xV(t)?{fid:t.fid,registrationStatus:0}:t}function xV(t){return t.registrationStatus===1&&t.registrationTime+v0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OV({appConfig:t,heartbeatServiceProvider:e},n){const r=DV(t,n),i=pV(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:w0,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await S0(()=>fetch(r,a));if(l.ok){const c=await l.json();return b0(c)}else throw await A0("Generate Auth Token",l)}function DV(t,{fid:e}){return`${I0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jf(t,e=!1){let n;const r=await Gc(t.appConfig,s=>{if(!N0(s))throw di.create("not-registered");const o=s.authToken;if(!e&&VV(o))return s;if(o.requestStatus===1)return n=NV(t,e),s;{if(!navigator.onLine)throw di.create("app-offline");const a=FV(s);return n=LV(t,a),a}});return n?await n:r.authToken}async function NV(t,e){let n=await f_(t.appConfig);for(;n.authToken.requestStatus===1;)await C0(100),n=await f_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Jf(t,e):r}function f_(t){return Gc(t,e=>{if(!N0(e))throw di.create("not-registered");const n=e.authToken;return UV(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function LV(t,e){try{const n=await OV(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ml(t.appConfig,r),n}catch(n){if(T0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await O0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ml(t.appConfig,r)}throw n}}function N0(t){return t!==void 0&&t.registrationStatus===2}function VV(t){return t.requestStatus===2&&!MV(t)}function MV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+uV}function FV(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function UV(t){return t.requestStatus===1&&t.requestTime+v0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $V(t){const e=t,{installationEntry:n,registrationPromise:r}=await Yf(e);return r?r.catch(console.error):Jf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BV(t,e=!1){const n=t;return await qV(n),(await Jf(n,e)).token}async function qV(t){const{registrationPromise:e}=await Yf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jV(t){if(!t||!t.options)throw Uu("App Configuration");if(!t.name)throw Uu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Uu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Uu(t){return di.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="installations",zV="installations-internal",HV=t=>{const e=t.getProvider("app").getImmediate(),n=jV(e),r=Pr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},WV=t=>{const e=t.getProvider("app").getImmediate(),n=Pr(e,L0).getImmediate();return{getId:()=>$V(n),getToken:i=>BV(n,i)}};function KV(){pn(new en(L0,HV,"PUBLIC")),pn(new en(zV,WV,"PRIVATE"))}KV();Lt(y0,Gf);Lt(y0,Gf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="analytics",GV="firebase_id",QV="origin",YV=60*1e3,JV="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new ac("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XV={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},zt=new yi("analytics","Analytics",XV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZV(t){if(!t.startsWith(Xf)){const e=zt.create("invalid-gtag-resource",{gtagURL:t});return Vt.warn(e.message),""}return t}function V0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function eM(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function tM(t,e){const n=eM("firebase-js-sdk-policy",{createScriptURL:ZV}),r=document.createElement("script"),i=`${Xf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function nM(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function rM(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await V0(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Vt.error(a)}t("config",i,s)}async function iM(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await V0(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Vt.error(s)}}function sM(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await iM(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await rM(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Vt.error(a)}}return i}function oM(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=sM(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function aM(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Xf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM=30,cM=1e3;class uM{constructor(e={},n=cM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const M0=new uM;function hM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function dM(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:hM(r)},s=JV.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw zt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function fM(t,e=M0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw zt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw zt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new gM;return setTimeout(async()=>{a.abort()},n!==void 0?n:YV),F0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function F0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=M0){var s;const{appId:o,measurementId:a}=t;try{await pM(r,e)}catch(l){if(a)return Vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await dM(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!mM(c)){if(i.deleteThrottleMetadata(o),a)return Vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?zm(n,i.intervalMillis,lM):zm(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),Vt.debug(`Calling attemptFetch again in ${u} millis`),F0(t,h,r,i)}}function pM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function mM(t){if(!(t instanceof nn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class gM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function _M(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yM(){if(Pd())try{await ow()}catch(t){return Vt.warn(zt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Vt.warn(zt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function vM(t,e,n,r,i,s,o){var a;const l=fM(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Vt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Vt.error(f)),e.push(l);const c=yM().then(f=>{if(f)return r.getId()}),[u,h]=await Promise.all([l,c]);aM(s)||tM(s,u.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[QV]="firebase",d.update=!0,h!=null&&(d[GV]=h),i("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e){this.app=e}_delete(){return delete Xs[this.app.options.appId],Promise.resolve()}}let Xs={},p_=[];const m_={};let $u="dataLayer",EM="gtag",g_,U0,__=!1;function TM(){const t=[];if(sw()&&t.push("This is a browser extension environment."),pP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=zt.create("invalid-analytics-context",{errorInfo:e});Vt.warn(n.message)}}function IM(t,e,n){TM();const r=t.options.appId;if(!r)throw zt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw zt.create("no-api-key");if(Xs[r]!=null)throw zt.create("already-exists",{id:r});if(!__){nM($u);const{wrappedGtag:s,gtagCore:o}=oM(Xs,p_,m_,$u,EM);U0=s,g_=o,__=!0}return Xs[r]=vM(t,p_,m_,e,g_,$u,n),new wM(t)}function bM(t=lc()){t=Se(t);const e=Pr(t,Fl);return e.isInitialized()?e.getImmediate():AM(t)}function AM(t,e={}){const n=Pr(t,Fl);if(n.isInitialized()){const i=n.getImmediate();if(ho(e,n.getOptions()))return i;throw zt.create("already-initialized")}return n.initialize({options:e})}function RM(t,e,n,r){t=Se(t),_M(U0,Xs[t.app.options.appId],e,n,r).catch(i=>Vt.error(i))}const y_="@firebase/analytics",v_="0.10.1";function SM(){pn(new en(Fl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return IM(r,i,n)},"PUBLIC")),pn(new en("analytics-internal",t,"PRIVATE")),Lt(y_,v_),Lt(y_,v_,"esm2017");function t(e){try{const n=e.getProvider(Fl).getImmediate();return{logEvent:(r,i,s)=>RM(n,r,i,s)}}catch(n){throw zt.create("interop-component-reg-failed",{reason:n})}}}SM();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="firebasestorage.googleapis.com",B0="storageBucket",CM=2*60*1e3,PM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends nn{constructor(e,n,r=0){super(Bu(e),`Firebase Storage: ${n} (${Bu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Bu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ke||(Ke={}));function Bu(t){return"storage/"+t}function Zf(){const t="An unknown error occurred, please check the error payload for server response.";return new Qe(Ke.UNKNOWN,t)}function kM(t){return new Qe(Ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function xM(t){return new Qe(Ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function OM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Qe(Ke.UNAUTHENTICATED,t)}function DM(){return new Qe(Ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function NM(t){return new Qe(Ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function LM(){return new Qe(Ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VM(){return new Qe(Ke.CANCELED,"User canceled the upload/download.")}function MM(t){return new Qe(Ke.INVALID_URL,"Invalid URL '"+t+"'.")}function FM(t){return new Qe(Ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function UM(){return new Qe(Ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+B0+"' property when initializing the app?")}function $M(){return new Qe(Ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function BM(){return new Qe(Ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function qM(t){return new Qe(Ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Xh(t){return new Qe(Ke.INVALID_ARGUMENT,t)}function q0(){return new Qe(Ke.APP_DELETED,"The Firebase app was deleted.")}function jM(t){return new Qe(Ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Zs(t,e){return new Qe(Ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function As(t){throw new Qe(Ke.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=jt.makeFromUrl(e,n)}catch{return new jt(e,"")}if(r.path==="")return r;throw FM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(I){I.path_=decodeURIComponent(I.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},v=n===$0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",w=new RegExp(`^https?://${v}/${i}/${g}`,"i"),E=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let I=0;I<E.length;I++){const A=E[I],C=A.regex.exec(e);if(C){const V=C[A.indices.bucket];let T=C[A.indices.path];T||(T=""),r=new jt(V,T),A.postModify(r);break}}if(r==null)throw MM(e);return r}}class zM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...g){c||(c=!0,e.apply(null,g))}function h(g){i=setTimeout(()=>{i=null,t(f,l())},g)}function d(){s&&clearTimeout(s)}function f(g,...w){if(c){d();return}if(g){d(),u.call(null,g,...w);return}if(l()||o){d(),u.call(null,g,...w);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,h(E)}let p=!1;function v(g){p||(p=!0,d(),!c&&(i!==null?(g||(a=2),clearTimeout(i),h(0)):g||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function WM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KM(t){return t!==void 0}function GM(t){return typeof t=="object"&&!Array.isArray(t)}function ep(t){return typeof t=="string"||t instanceof String}function w_(t){return tp()&&t instanceof Blob}function tp(){return typeof Blob!="undefined"}function E_(t,e,n,r){if(r<e)throw Xh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Xh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function j0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ni;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ni||(ni={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(e,n,r,i,s,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new xa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ni.NO_ERROR,l=s.getStatus();if(!a||QM(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===ni.ABORT;r(!1,new xa(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new xa(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());KM(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Zf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?q0():VM();o(l)}else{const l=LM();o(l)}};this.canceled_?n(!1,new xa(!1,null,!0)):this.backoffId_=HM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function JM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function XM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function ZM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function eF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function tF(t,e,n,r,i,s,o=!0){const a=j0(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return ZM(c,e),JM(c,n),XM(c,s),eF(c,r),new YM(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nF(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function rF(...t){const e=nF();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(tp())return new Blob(t);throw new Qe(Ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function iF(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sF(t){if(typeof atob=="undefined")throw qM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qu{constructor(e,n){this.data=e,this.contentType=n||null}}function oF(t,e){switch(t){case Sn.RAW:return new qu(z0(e));case Sn.BASE64:case Sn.BASE64URL:return new qu(H0(t,e));case Sn.DATA_URL:return new qu(lF(e),cF(e))}throw Zf()}function z0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function aF(t){let e;try{e=decodeURIComponent(t)}catch{throw Zs(Sn.DATA_URL,"Malformed data URL.")}return z0(e)}function H0(t,e){switch(t){case Sn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Zs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Sn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Zs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=sF(e)}catch(i){throw i.message.includes("polyfill")?i:Zs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class W0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Zs(Sn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=uF(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function lF(t){const e=new W0(t);return e.base64?H0(Sn.BASE64,e.rest):aF(e.rest)}function cF(t){return new W0(t).contentType}function uF(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n){let r=0,i="";w_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(w_(this.data_)){const r=this.data_,i=iF(r,e,n);return i===null?null:new mr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new mr(r,!0)}}static getBlob(...e){if(tp()){const n=e.map(r=>r instanceof mr?r.data_:r);return new mr(rF.apply(null,n))}else{const n=e.map(o=>ep(o)?oF(Sn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new mr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t){let e;try{e=JSON.parse(t)}catch{return null}return GM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function dF(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function G0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fF(t,e){return e}class St{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||fF}}let Oa=null;function pF(t){return!ep(t)||t.length<2?t:G0(t)}function Q0(){if(Oa)return Oa;const t=[];t.push(new St("bucket")),t.push(new St("generation")),t.push(new St("metageneration")),t.push(new St("name","fullPath",!0));function e(s,o){return pF(o)}const n=new St("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new St("size");return i.xform=r,t.push(i),t.push(new St("timeCreated")),t.push(new St("updated")),t.push(new St("md5Hash",null,!0)),t.push(new St("cacheControl",null,!0)),t.push(new St("contentDisposition",null,!0)),t.push(new St("contentEncoding",null,!0)),t.push(new St("contentLanguage",null,!0)),t.push(new St("contentType",null,!0)),t.push(new St("metadata","customMetadata",!0)),Oa=t,Oa}function mF(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new jt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function gF(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return mF(r,t),r}function Y0(t,e,n){const r=K0(e);return r===null?null:gF(t,r,n)}function _F(t,e,n,r){const i=K0(e);if(i===null||!ep(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=np(d,n,r),p=j0({alt:"media",token:c});return f+p})[0]}function yF(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class J0{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(t){if(!t)throw Zf()}function vF(t,e){function n(r,i){const s=Y0(t,i,e);return X0(s!==null),s}return n}function wF(t,e){function n(r,i){const s=Y0(t,i,e);return X0(s!==null),_F(s,i,t.host,t._protocol)}return n}function Z0(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=DM():i=OM():n.getStatus()===402?i=xM(t.bucket):n.getStatus()===403?i=NM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function EF(t){const e=Z0(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=kM(t.path)),s.serverResponse=i.serverResponse,s}return n}function TF(t,e,n){const r=e.fullServerUrl(),i=np(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new J0(i,s,wF(t,n),o);return a.errorHandler=EF(e),a}function IF(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function bF(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=IF(null,e)),r}function AF(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let I=0;I<2;I++)E=E+Math.random().toString().slice(2);return E}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=bF(e,r,i),u=yF(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=mr.getBlob(h,r,d);if(f===null)throw $M();const p={name:c.fullPath},v=np(s,t.host,t._protocol),g="POST",w=t.maxUploadRetryTime,y=new J0(v,g,vF(t,n),w);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=Z0(e),y}class RF{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ni.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ni.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ni.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw As("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw As("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw As("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw As("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw As("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class SF extends RF{initXhr(){this.xhr_.responseType="text"}}function eI(){return new SF}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new pi(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return G0(this._location.path)}get storage(){return this._service}get parent(){const e=hF(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new pi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jM(e)}}function CF(t,e,n){t._throwIfRoot("uploadBytes");const r=AF(t.storage,t._location,Q0(),new mr(e,!0),n);return t.storage.makeRequestWithTokens(r,eI).then(i=>({metadata:i,ref:t}))}function PF(t){t._throwIfRoot("getDownloadURL");const e=TF(t.storage,t._location,Q0());return t.storage.makeRequestWithTokens(e,eI).then(n=>{if(n===null)throw BM();return n})}function kF(t,e){const n=dF(t._location.path,e),r=new jt(t._location.bucket,n);return new pi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xF(t){return/^[A-Za-z]+:\/\//.test(t)}function OF(t,e){return new pi(t,e)}function tI(t,e){if(t instanceof rp){const n=t;if(n._bucket==null)throw UM();const r=new pi(n,n._bucket);return e!=null?tI(r,e):r}else return e!==void 0?kF(t,e):t}function DF(t,e){if(e&&xF(e)){if(t instanceof rp)return OF(t,e);throw Xh("To use ref(service, url), the first argument must be a Storage instance.")}else return tI(t,e)}function T_(t,e){const n=e==null?void 0:e[B0];return n==null?null:jt.makeFromBucketSpec(n,t)}function NF(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:iw(i,t.app.options.projectId))}class rp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=$0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CM,this._maxUploadRetryTime=PM,this._requests=new Set,i!=null?this._bucket=jt.makeFromBucketSpec(i,this._host):this._bucket=T_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=T_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){E_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){E_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new zM(q0());{const o=tF(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const I_="@firebase/storage",b_="0.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="storage";function u2(t,e,n){return t=Se(t),CF(t,e,n)}function h2(t){return t=Se(t),PF(t)}function d2(t,e){return t=Se(t),DF(t,e)}function LF(t=lc(),e){t=Se(t);const r=Pr(t,nI).getImmediate({identifier:e}),i=tw("storage");return i&&VF(r,...i),r}function VF(t,e,n,r={}){NF(t,e,n,r)}function MF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new rp(n,r,i,e,vi)}function FF(){pn(new en(nI,MF,"PUBLIC").setMultipleInstances(!0)),Lt(I_,b_,""),Lt(I_,b_,"esm2017")}FF();const UF={apiKey:"AIzaSyDVo5b3Q7WOpCkB-nzTIkmlz6IQeYJJyOQ",authDomain:"kka-vue3-firebase-community.firebaseapp.com",projectId:"kka-vue3-firebase-community",storageBucket:"kka-vue3-firebase-community.appspot.com",messagingSenderId:"312732254609",appId:"1:312732254609:web:7c586533469b5de73b9a30",measurementId:"G-NS9XVJ9PVX"},Qc=uw(UF);bM(Qc);const Wt=tO(Qc),ip=KL(Qc),$F=LF(Qc);var BF=async()=>{const t=Yv();qx(Wt,e=>{console.log("###user: ",e),t.setUser(e)})},qF=Object.freeze(Object.defineProperty({__proto__:null,auth:Wt,db:ip,storage:$F,default:BF},Symbol.toStringTag,{value:"Module"}));const jF="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=";async function f2(){const t=new Bn,{user:e}=await u1(Wt,t);return e}async function zF(){await jx(Wt)}async function p2({email:t,password:e}){const{user:n}=await Nx(Wt,t,e);await Vw(n,{displayName:t.split("@")[0],photoURL:rI(n.uid)}),iI()}function rI(t){return`${jF}${t}`}async function m2({email:t,password:e}){const{user:n}=await Lx(Wt,t,e);return n}async function g2(t){await Dx(Wt,t)}async function _2(t){await Ux(Wt.currentUser,t)}async function iI(){await Vx(Wt.currentUser)}async function y2(t){await Vw(Wt.currentUser,{displayName:t}),await _0(Nf(ip,"users",Wt.currentUser.uid),{displayName:t})}async function v2(t){await Fx(Wt.currentUser,t),await _0(Nf(ip,"users",Wt.currentUser.uid),{email:t})}var HF={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(self,()=>(()=>{var n={d:(h,d)=>{for(var f in d)n.o(d,f)&&!n.o(h,f)&&Object.defineProperty(h,f,{enumerable:!0,get:d[f]})},o:(h,d)=>Object.prototype.hasOwnProperty.call(h,d),r:h=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})}},r={};function i(){return document.createElement("canvas")}function s(h){for(var d=atob(h.split(",")[1]),f=h.split(",")[0].split(":")[1].split(";")[0],p=new ArrayBuffer(d.length),v=new Uint8Array(p),g=0;g<d.length;g++)v[g]=d.charCodeAt(g);return new Blob([p],{type:f})}function o(h,d){var f=d.width/d.height,p=Math.min(d.width,h.maxWidth,f*h.maxHeight);return h.maxSize>0&&h.maxSize<d.width*d.height/1e3&&(p=Math.min(p,Math.floor(1e3*h.maxSize/d.height))),h.scaleRatio&&(p=Math.min(p,Math.floor(h.scaleRatio*d.width))),h.debug&&(console.log("browser-image-resizer: original image size = "+d.width+" px (width) X "+d.height+" px (height)"),console.log("browser-image-resizer: scaled image size = "+p+" px (width) X "+Math.floor(p/f)+" px (height)")),p<=0&&(p=1,console.warn("browser-image-resizer: image size is too small")),p}function a(h,d){var f=document.createElement("canvas"),p=d.outputWidth/h.width;f.width=h.width*p,f.height=h.height*p;var v=h.getContext("2d").getImageData(0,0,h.width,h.height),g=f.getContext("2d").createImageData(f.width,f.height);return function(w,y,E){function I(Kt,me,_e,R,W,P){var J=1-W,Ee=1-P;return Kt*J*Ee+me*W*Ee+_e*J*P+R*W*P}var A,C,V,T,D,L,z,F,ie,H,oe,ee,ge,fe,qe,ut,ht,je,_t;for(A=0;A<y.height;++A)for(V=A/E,T=Math.floor(V),D=Math.ceil(V)>w.height-1?w.height-1:Math.ceil(V),C=0;C<y.width;++C)L=C/E,z=Math.floor(L),F=Math.ceil(L)>w.width-1?w.width-1:Math.ceil(L),ie=4*(C+y.width*A),H=4*(z+w.width*T),oe=4*(F+w.width*T),ee=4*(z+w.width*D),ge=4*(F+w.width*D),fe=L-z,qe=V-T,ut=I(w.data[H],w.data[oe],w.data[ee],w.data[ge],fe,qe),y.data[ie]=ut,ht=I(w.data[H+1],w.data[oe+1],w.data[ee+1],w.data[ge+1],fe,qe),y.data[ie+1]=ht,je=I(w.data[H+2],w.data[oe+2],w.data[ee+2],w.data[ge+2],fe,qe),y.data[ie+2]=je,_t=I(w.data[H+3],w.data[oe+3],w.data[ee+3],w.data[ge+3],fe,qe),y.data[ie+3]=_t}(v,g,p),f.getContext("2d").putImageData(g,0,0),f}function l(h){var d=document.createElement("canvas");return d.width=h.width/2,d.height=h.height/2,d.getContext("2d").drawImage(h,0,0,d.width,d.height),d}n.r(r),n.d(r,{readAndCompressImage:()=>u});var c={quality:.5,maxWidth:800,maxHeight:600,autoRotate:!0,debug:!1,mimeType:"image/jpeg"};function u(h,d){return new Promise(function(f,p){var v=document.createElement("img"),g=new FileReader,w=Object.assign({},c,d);g.onload=function(y){v.onerror=function(){p("cannot load image.")},v.onload=function(){var E={img:v,config:w};try{var I=function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},C=A.img,V=A.config,T=(A.orientation,i());T.width=C.width,T.height=C.height;var D=T.getContext("2d");V.mimeType==="image/jpeg"&&(D.fillStyle="#ffffff",D.fillRect(0,0,T.width,T.height),D.save()),D.drawImage(C,0,0),D.restore();for(var L=o(V,T);T.width>=2*L;)T=l(T);T.width>L&&(T=a(T,Object.assign(V,{outputWidth:L})));var z=T.toDataURL(V.mimeType,V.quality);return typeof V.onScale=="function"&&V.onScale(z),s(z)}(E);f(I)}catch(A){p(A)}},v.src=y.target.result};try{g.onerror=function(){p("cannot read image file.")},g.readAsDataURL(h)}catch(y){p(y)}})}return r})())})(HF);var A_=Be({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:e}){const n=N(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>U(t.tag,{class:n.value},yn(e.default))}}),WF=Be({name:"QCard",props:{...$o,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Ge(),r=Bo(t,n),i=N(()=>"q-card"+(r.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>U(t.tag,{class:i.value},yn(e.default))}});function KF(t,e,n){let r;function i(){r!==void 0&&(oh.remove(r),r=void 0)}return At(()=>{t.value===!0&&i()}),{removeFromHistory:i,addToHistory(){r={condition:()=>n.value===!0,handler:e},oh.add(r)}}}let Rs=0,ju,zu,Ms,Hu=!1,R_,S_,C_,Vr=null;function GF(t){QF(t)&&$n(t)}function QF(t){if(t.target===document.body||t.target.classList.contains("q-layout__backdrop"))return!0;const e=KA(t),n=t.shiftKey&&!t.deltaX,r=!n&&Math.abs(t.deltaX)<=Math.abs(t.deltaY),i=n||r?t.deltaY:t.deltaX;for(let s=0;s<e.length;s++){const o=e[s];if(vC(o,r))return r?i<0&&o.scrollTop===0?!0:i>0&&o.scrollTop+o.clientHeight===o.scrollHeight:i<0&&o.scrollLeft===0?!0:i>0&&o.scrollLeft+o.clientWidth===o.scrollWidth}return!0}function P_(t){t.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Da(t){Hu!==!0&&(Hu=!0,requestAnimationFrame(()=>{Hu=!1;const{height:e}=t.target,{clientHeight:n,scrollTop:r}=document.scrollingElement;(Ms===void 0||e!==window.innerHeight)&&(Ms=n-e,document.scrollingElement.scrollTop=r),r>Ms&&(document.scrollingElement.scrollTop-=Math.ceil((r-Ms)/8))}))}function k_(t){const e=document.body,n=window.visualViewport!==void 0;if(t==="add"){const{overflowY:r,overflowX:i}=window.getComputedStyle(e);ju=Bv(window),zu=$v(window),R_=e.style.left,S_=e.style.top,C_=window.location.href,e.style.left=`-${ju}px`,e.style.top=`-${zu}px`,i!=="hidden"&&(i==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,Ye.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Da,Ze.passiveCapture),window.visualViewport.addEventListener("scroll",Da,Ze.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",P_,Ze.passiveCapture))}Ye.is.desktop===!0&&Ye.is.mac===!0&&window[`${t}EventListener`]("wheel",GF,Ze.notPassive),t==="remove"&&(Ye.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",Da,Ze.passiveCapture),window.visualViewport.removeEventListener("scroll",Da,Ze.passiveCapture)):window.removeEventListener("scroll",P_,Ze.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=R_,e.style.top=S_,window.location.href===C_&&window.scrollTo(ju,zu),Ms=void 0)}function YF(t){let e="add";if(t===!0){if(Rs++,Vr!==null){clearTimeout(Vr),Vr=null;return}if(Rs>1)return}else{if(Rs===0||(Rs--,Rs>0))return;if(e="remove",Ye.is.ios===!0&&Ye.is.nativeMobile===!0){Vr!==null&&clearTimeout(Vr),Vr=setTimeout(()=>{k_(e),Vr=null},100);return}}k_(e)}function JF(){let t;return{preventBodyScroll(e){e!==t&&(t!==void 0||e===!0)&&(t=e,YF(e))}}}let Na=0;const XF={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},x_={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var ZF=Be({name:"QDialog",inheritAttrs:!1,props:{...Cv,...Lv,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:t=>t==="standard"||["top","bottom","left","right"].includes(t)}},emits:[...Pv,"shake","click","escapeKey"],setup(t,{slots:e,emit:n,attrs:r}){const i=Ge(),s=re(null),o=re(!1),a=re(!1);let l=null,c=null,u,h;const d=N(()=>t.persistent!==!0&&t.noRouteDismiss!==!0&&t.seamless!==!0),{preventBodyScroll:f}=JF(),{registerTimeout:p}=Fv(),{registerTick:v,removeTick:g}=Mv(),{transitionProps:w,transitionStyle:y}=Vv(t,()=>x_[t.position][0],()=>x_[t.position][1]),{showPortal:E,hidePortal:I,portalIsAccessible:A,renderPortal:C}=Nv(i,s,Kt,"dialog"),{hide:V}=kv({showing:o,hideOnRouteChange:d,handleShow:H,handleHide:oe,processOnMount:!0}),{addToHistory:T,removeFromHistory:D}=KF(o,V,d),L=N(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${t.maximized===!0?"maximized":"minimized"} q-dialog__inner--${t.position} ${XF[t.position]}`+(a.value===!0?" q-dialog__inner--animating":"")+(t.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(t.fullHeight===!0?" q-dialog__inner--fullheight":"")+(t.square===!0?" q-dialog__inner--square":"")),z=N(()=>o.value===!0&&t.seamless!==!0),F=N(()=>t.autoClose===!0?{onClick:ht}:{}),ie=N(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${z.value===!0?"modal":"seamless"}`,r.class]);ke(()=>t.maximized,me=>{o.value===!0&&ut(me)}),ke(z,me=>{f(me),me===!0?(Hv(_t),jv(fe)):(mh(_t),dl(fe))});function H(me){T(),c=t.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,ut(t.maximized),E(),a.value=!0,t.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),v(ee)):g(),p(()=>{if(i.proxy.$q.platform.is.ios===!0){if(t.seamless!==!0&&document.activeElement){const{top:_e,bottom:R}=document.activeElement.getBoundingClientRect(),{innerHeight:W}=window,P=window.visualViewport!==void 0?window.visualViewport.height:W;_e>0&&R>P/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-P,R>=W?1/0:Math.ceil(document.scrollingElement.scrollTop+R-P/2))),document.activeElement.scrollIntoView()}h=!0,s.value.click(),h=!1}E(!0),a.value=!1,n("show",me)},t.transitionDuration)}function oe(me){g(),D(),qe(!0),a.value=!0,I(),c!==null&&(((me&&me.type.indexOf("key")===0?c.closest('[tabindex]:not([tabindex^="-"])'):void 0)||c).focus(),c=null),p(()=>{I(!0),a.value=!1,n("hide",me)},t.transitionDuration)}function ee(me){Ov(()=>{let _e=s.value;_e===null||_e.contains(document.activeElement)===!0||(_e=(me!==""?_e.querySelector(me):null)||_e.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||_e.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||_e.querySelector("[autofocus], [data-autofocus]")||_e,_e.focus({preventScroll:!0}))})}function ge(me){me&&typeof me.focus=="function"?me.focus({preventScroll:!0}):ee(),n("shake");const _e=s.value;_e!==null&&(_e.classList.remove("q-animate--scale"),_e.classList.add("q-animate--scale"),l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,s.value!==null&&(_e.classList.remove("q-animate--scale"),ee())},170))}function fe(){t.seamless!==!0&&(t.persistent===!0||t.noEscDismiss===!0?t.maximized!==!0&&t.noShake!==!0&&ge():(n("escapeKey"),V()))}function qe(me){l!==null&&(clearTimeout(l),l=null),(me===!0||o.value===!0)&&(ut(!1),t.seamless!==!0&&(f(!1),mh(_t),dl(fe))),me!==!0&&(c=null)}function ut(me){me===!0?u!==!0&&(Na<1&&document.body.classList.add("q-body--dialog"),Na++,u=!0):u===!0&&(Na<2&&document.body.classList.remove("q-body--dialog"),Na--,u=!1)}function ht(me){h!==!0&&(V(me),n("click",me))}function je(me){t.persistent!==!0&&t.noBackdropDismiss!==!0?V(me):t.noShake!==!0&&ge()}function _t(me){t.allowFocusOutside!==!0&&A.value===!0&&Ev(s.value,me.target)!==!0&&ee('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:ee,shake:ge,__updateRefocusTarget(me){c=me||null}}),At(qe);function Kt(){return U("div",{role:"dialog","aria-modal":z.value===!0?"true":"false",...r,class:ie.value},[U(ri,{name:"q-transition--fade",appear:!0},()=>z.value===!0?U("div",{class:"q-dialog__backdrop fixed-full",style:y.value,"aria-hidden":"true",tabindex:-1,onClick:je}):null),U(ri,w.value,()=>o.value===!0?U("div",{ref:s,class:L.value,style:y.value,tabindex:-1,...F.value},yn(e.default)):null)])}return C}});const eU={__name:"AuthDialog",props:{medelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=e,r=re("SignInForm"),i=a=>r.value=a,s={SignInForm:tu(()=>xe(()=>import("./SignInForm.d8ae9916.js"),["assets/SignInForm.d8ae9916.js","assets/QForm.f582cbc6.js","assets/error-message.8e28215f.js"])),SignUpForm:tu(()=>xe(()=>import("./SignUpForm.af50c391.js"),["assets/SignUpForm.af50c391.js","assets/QForm.f582cbc6.js","assets/validate-rules.1c7194c1.js","assets/error-message.8e28215f.js"])),FindPasswordForm:tu(()=>xe(()=>import("./FindPasswordForm.46a85887.js"),["assets/FindPasswordForm.46a85887.js","assets/QForm.f582cbc6.js"]))},o=()=>{n("update:modelValue",!1)};return(a,l)=>(an(),ln(ZF,{"model-value":t.medelValue,"onUpdate:modelValue":l[0]||(l[0]=c=>a.$emit("update:modelValue",c)),"transition-show":"none","transition-hide":"none",onHide:l[1]||(l[1]=c=>i("SignInForm"))},{default:ze(()=>[ae(WF,{style:{width:"400px"}},{default:ze(()=>[ae(A_,{class:"flex"},{default:ze(()=>[ae(Sv),Bi(ae(Un,{icon:"close",flat:"",round:"",dense:""},null,512),[[Ba]])]),_:1}),ae(A_,{class:"q-px-xl q-pb-xl"},{default:ze(()=>[(an(),ln(cb(s[r.value]),{onChangeView:i,onCloseDialog:o},null,32))]),_:1})]),_:1})]),_:1},8,["model-value"]))}},tU=["src"],nU={__name:"default",setup(t){const e=VC(),n=Yv(),r=bS(),i=N(()=>{var c;return{maxWidth:((c=r.meta)==null?void 0:c.width)||"1080px",margin:"0 auto"}}),s=re(!1),o=()=>s.value=!0,a=async()=>{await zF(),e.notify("\uB85C\uADF8\uC544\uC6C3 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.")},l=async()=>{await iI(),e.notify("\uC774\uBA54\uC77C\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.")};return(c,u)=>{const h=py("router-view");return an(),ln(LC,{view:"lHh Lpr lff",class:"bg-grey-2"},{default:ze(()=>[ae(xC,{bordered:"",class:"bg-white text-grey-9"},{default:ze(()=>[ae(PC,null,{default:ze(()=>[ae(Un,{flat:"",dense:"",to:"/"},{default:ze(()=>[ae($S,null,{default:ze(()=>[ae(fh,null,{default:ze(()=>[ae(OS,{class:"q-mt-sm",src:"/vue_logo.png"})]),_:1}),Ps(" Vue : KKA ")]),_:1})]),_:1}),ae(Sv),ae(Un,{stretch:"",flat:"",label:"Home",to:"/home"}),ae(Un,{stretch:"",flat:"",label:"\uC218\uAC15\uD558\uAE30",href:"https://google.com",target:"_blank"}),ae(Un,{stretch:"",flat:"",label:"\uC628\uB77C\uC778 \uAC15\uC758",href:"https://naver.com",target:"_blank"}),ae(Un,{stretch:"",flat:"",label:"\uC720\uD29C\uBE0C",href:"https://youtube.com",target:"_blank"}),ae(sC,{class:"q-my-md q-mr-md",vertical:""}),Dt(n).isAuthenticated?Np("",!0):(an(),ln(Un,{key:0,unelevated:"",rounded:"",color:"primary",label:"\uB85C\uADF8\uC778 / \uD68C\uC6D0\uAC00\uC785",onClick:o})),Dt(n).isAuthenticated?(an(),ln(Un,{key:1,round:"",flat:""},{default:ze(()=>[ae(fh,null,{default:ze(()=>[wd("img",{src:Dt(n).user.photoURL||Dt(rI)(Dt(n).user.uid)},null,8,tU)]),_:1}),ae(CC,null,{default:ze(()=>[ae(oC,{style:{"min-width":"180px"}},{default:ze(()=>[Dt(n).user.emailVerified?Bi((an(),ln(_u,{key:0,clickable:"",to:"/mypage/profile"},{default:ze(()=>[ae(gu,null,{default:ze(()=>[Ps("\uD504\uB85C\uD544")]),_:1})]),_:1})),[[Ba]]):Bi((an(),ln(_u,{key:1,clickable:"",to:"/mypage/profile"},{default:ze(()=>[ae(gu,{class:"text-red",onClick:l},{default:ze(()=>[Ps(" \uC774\uBA54\uC77C\uC744 \uC778\uC99D\uD574\uC8FC\uC138\uC694. ")]),_:1})]),_:1})),[[Ba]]),Bi((an(),ln(_u,{clickable:"",onClick:a},{default:ze(()=>[ae(gu,null,{default:ze(()=>[Ps("\uB85C\uADF8\uC544\uC6C3")]),_:1})]),_:1})),[[Ba]])]),_:1})]),_:1})]),_:1})):Np("",!0)]),_:1})]),_:1}),ae(OC,{style:No(i.value)},{default:ze(()=>[ae(h)]),_:1},8,["style"]),ae(eU,{modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=d=>s.value=d)},null,8,["modelValue"])]),_:1})}}},rU={admin:()=>xe(()=>import("./admin.b5d95f0d.js"),["assets/admin.b5d95f0d.js","assets/plugin-vue_export-helper.21dcd24c.js"]),default:nU,MainLayout:()=>xe(()=>import("./MainLayout.7215d6aa.js"),["assets/MainLayout.7215d6aa.js","assets/QItemLabel.48e98d21.js","assets/plugin-vue_export-helper.21dcd24c.js"])};function iU(t){return t.map(e=>{var n;return{path:e.path,meta:e.meta,component:rU[((n=e.meta)==null?void 0:n.layout)||"default"],children:e.path==="/"?[e]:[{...e,path:""}]}})}function w2(t){return t.charAt(0).toUpperCase()+t.slice(1)}function sU(t,e,n){return n<=e?e:Math.min(n,Math.max(e,t))}function E2(t,e,n){if(n<=e)return e;const r=n-e+1;let i=e+(t-e)%r;return i<e&&(i=r+i),i===0?0:i}function T2(t,e=2,n="0"){if(t==null)return t;const r=""+t;return r.length>=e?r:new Array(e-r.length+1).join(n)+r}const sp=XMLHttpRequest,sI=sp.prototype.open,oU=["top","right","bottom","left"];let Ul=[],eo=0;function aU({p:t,pos:e,active:n,horiz:r,reverse:i,dir:s}){let o=1,a=1;return r===!0?(i===!0&&(o=-1),e==="bottom"&&(a=-1),{transform:`translate3d(${o*(t-100)}%,${n?0:a*-200}%,0)`}):(i===!0&&(a=-1),e==="right"&&(o=-1),{transform:`translate3d(${n?0:s*o*-200}%,${a*(t-100)}%,0)`})}function lU(t,e){return typeof e!="number"&&(t<25?e=Math.random()*3+3:t<65?e=Math.random()*3:t<85?e=Math.random()*2:t<99?e=.6:e=0),sU(t+e,0,100)}function cU(t){eo++,Ul.push(t),!(eo>1)&&(sp.prototype.open=function(e,n){const r=[],i=()=>{Ul.forEach(o=>{(o.hijackFilter.value===null||o.hijackFilter.value(n)===!0)&&(o.start(),r.push(o.stop))})},s=()=>{r.forEach(o=>{o()})};this.addEventListener("loadstart",i,{once:!0}),this.addEventListener("loadend",s,{once:!0}),sI.apply(this,arguments)})}function uU(t){Ul=Ul.filter(e=>e.start!==t),eo=Math.max(0,eo-1),eo===0&&(sp.prototype.open=sI)}var hU=Be({name:"QAjaxBar",props:{position:{type:String,default:"top",validator:t=>oU.includes(t)},size:{type:String,default:"2px"},color:String,skipHijack:Boolean,reverse:Boolean,hijackFilter:Function},emits:["start","stop"],setup(t,{emit:e}){const{proxy:n}=Ge(),r=re(0),i=re(!1),s=re(!0);let o=0,a=null,l;const c=N(()=>`q-loading-bar q-loading-bar--${t.position}`+(t.color!==void 0?` bg-${t.color}`:"")+(s.value===!0?"":" no-transition")),u=N(()=>t.position==="top"||t.position==="bottom"),h=N(()=>u.value===!0?"height":"width"),d=N(()=>{const E=i.value,I=aU({p:r.value,pos:t.position,active:E,horiz:u.value,reverse:n.$q.lang.rtl===!0&&["top","bottom"].includes(t.position)?t.reverse===!1:t.reverse,dir:n.$q.lang.rtl===!0?-1:1});return I[h.value]=t.size,I.opacity=E?1:0,I}),f=N(()=>i.value===!0?{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":r.value}:{"aria-hidden":"true"});function p(E=300){const I=l;return l=Math.max(0,E)||0,o++,o>1?(I===0&&E>0?w():a!==null&&I>0&&E<=0&&(clearTimeout(a),a=null),o):(a!==null&&clearTimeout(a),e("start"),r.value=0,a=setTimeout(()=>{a=null,s.value=!0,E>0&&w()},i._value===!0?500:1),i._value!==!0&&(i.value=!0,s.value=!1),o)}function v(E){return o>0&&(r.value=lU(r.value,E)),o}function g(){if(o=Math.max(0,o-1),o>0)return o;a!==null&&(clearTimeout(a),a=null),e("stop");const E=()=>{s.value=!0,r.value=100,a=setTimeout(()=>{a=null,i.value=!1},1e3)};return r.value===0?a=setTimeout(E,1):E(),o}function w(){r.value<100&&(a=setTimeout(()=>{a=null,v(),w()},l))}let y;return Nn(()=>{t.skipHijack!==!0&&(y=!0,cU({start:p,stop:g,hijackFilter:N(()=>t.hijackFilter||null)}))}),At(()=>{a!==null&&clearTimeout(a),y===!0&&uU(p)}),Object.assign(n,{start:p,stop:g,increment:v}),()=>U("div",{class:c.value,style:d.value,...f.value})}});const La=re(null),Do=Uo({isActive:!1},{start:hn,stop:hn,increment:hn,setDefaults:hn,install({$q:t,parentApp:e}){if(t.loadingBar=this,this.__installed===!0){t.config.loadingBar!==void 0&&this.setDefaults(t.config.loadingBar);return}const n=re(t.config.loadingBar!==void 0?{...t.config.loadingBar}:{});function r(){Do.isActive=!0}function i(){Do.isActive=!1}const s=Cd("q-loading-bar");tv({name:"LoadingBar",devtools:{hide:!0},setup:()=>()=>U(hU,{...n.value,onStart:r,onStop:i,ref:La})},e).mount(s),Object.assign(this,{start(o){La.value.start(o)},stop(){La.value.stop()},increment(){La.value.increment.apply(null,arguments)},setDefaults(o){Zi(o)===!0&&Object.assign(n.value,o)}})}});var Wu=function(){const e=AS({scrollBehavior:()=>({left:0,top:0}),history:FR("/"),extendRoutes:n=>iU(n.map(r=>(r.path.includes("admin")&&(r={...r,meta:{...r.meta,layout:"admin"}}),r)))});return e.beforeEach(()=>{Do.start()}),e.afterEach(()=>{Do.stop()}),e};async function dU(t,e){const n=t(dR);n.use(hR,e);const r=typeof uu=="function"?await uu({}):uu;n.use(r);const i=Cr(typeof Wu=="function"?await Wu({store:r}):Wu);return r.use(({store:s})=>{s.router=i}),{app:n,store:r,router:i}}let fU=0;const Ya={},Ja={},on={},oI={},pU=/^\s*$/,aI=[],mU=[void 0,null,!0,!1,""],op=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],gU=["top-left","top-right","bottom-left","bottom-right"],Li={positive:{icon:t=>t.iconSet.type.positive,color:"positive"},negative:{icon:t=>t.iconSet.type.negative,color:"negative"},warning:{icon:t=>t.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:t=>t.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function lI(t,e,n){if(!t)return Ss("parameter required");let r;const i={textColor:"white"};if(t.ignoreDefaults!==!0&&Object.assign(i,Ya),Zi(t)===!1&&(i.type&&Object.assign(i,Li[i.type]),t={message:t}),Object.assign(i,Li[t.type||i.type],t),typeof i.icon=="function"&&(i.icon=i.icon(e)),i.spinner?(i.spinner===!0&&(i.spinner=Sd),i.spinner=Cr(i.spinner)):i.spinner=!1,i.meta={hasMedia:Boolean(i.spinner!==!1||i.icon||i.avatar),hasText:O_(i.message)||O_(i.caption)},i.position){if(op.includes(i.position)===!1)return Ss("wrong position",t)}else i.position="bottom";if(mU.includes(i.timeout)===!0)i.timeout=5e3;else{const l=Number(i.timeout);if(isNaN(l)||l<0)return Ss("wrong timeout",t);i.timeout=Number.isFinite(l)?l:0}i.timeout===0?i.progress=!1:i.progress===!0&&(i.meta.progressClass="q-notification__progress"+(i.progressClass?` ${i.progressClass}`:""),i.meta.progressStyle={animationDuration:`${i.timeout+1e3}ms`});const s=(Array.isArray(t.actions)===!0?t.actions:[]).concat(t.ignoreDefaults!==!0&&Array.isArray(Ya.actions)===!0?Ya.actions:[]).concat(Li[t.type]!==void 0&&Array.isArray(Li[t.type].actions)===!0?Li[t.type].actions:[]),{closeBtn:o}=i;if(o&&s.push({label:typeof o=="string"?o:e.lang.label.close}),i.actions=s.map(({handler:l,noDismiss:c,...u})=>({flat:!0,...u,onClick:typeof l=="function"?()=>{l(),c!==!0&&a()}:()=>{a()}})),i.multiLine===void 0&&(i.multiLine=i.actions.length>1),Object.assign(i.meta,{class:`q-notification row items-stretch q-notification--${i.multiLine===!0?"multi-line":"standard"}`+(i.color!==void 0?` bg-${i.color}`:"")+(i.textColor!==void 0?` text-${i.textColor}`:"")+(i.classes!==void 0?` ${i.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(i.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(i.multiLine===!0?"":" col"),leftClass:i.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...i.attrs}}),i.group===!1?(i.group=void 0,i.meta.group=void 0):((i.group===void 0||i.group===!0)&&(i.group=[i.message,i.caption,i.multiline].concat(i.actions.map(l=>`${l.label}*${l.icon}`)).join("|")),i.meta.group=i.group+"|"+i.position),i.actions.length===0?i.actions=void 0:i.meta.actionsClass="q-notification__actions row items-center "+(i.multiLine===!0?"justify-end":"col-auto")+(i.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),i.meta.uid=n.notif.meta.uid;const l=on[i.position].value.indexOf(n.notif);on[i.position].value[l]=i}else{const l=Ja[i.meta.group];if(l===void 0){if(i.meta.uid=fU++,i.meta.badge=1,["left","right","center"].indexOf(i.position)!==-1)on[i.position].value.splice(Math.floor(on[i.position].value.length/2),0,i);else{const c=i.position.indexOf("top")>-1?"unshift":"push";on[i.position].value[c](i)}i.group!==void 0&&(Ja[i.meta.group]=i)}else{if(l.meta.timer&&(clearTimeout(l.meta.timer),l.meta.timer=void 0),i.badgePosition!==void 0){if(gU.includes(i.badgePosition)===!1)return Ss("wrong badgePosition",t)}else i.badgePosition=`top-${i.position.indexOf("left")>-1?"right":"left"}`;i.meta.uid=l.meta.uid,i.meta.badge=l.meta.badge+1,i.meta.badgeClass=`q-notification__badge q-notification__badge--${i.badgePosition}`+(i.badgeColor!==void 0?` bg-${i.badgeColor}`:"")+(i.badgeTextColor!==void 0?` text-${i.badgeTextColor}`:"")+(i.badgeClass?` ${i.badgeClass}`:"");const c=on[i.position].value.indexOf(l);on[i.position].value[c]=Ja[i.meta.group]=i}}const a=()=>{_U(i),r=void 0};if(i.timeout>0&&(i.meta.timer=setTimeout(()=>{i.meta.timer=void 0,a()},i.timeout+1e3)),i.group!==void 0)return l=>{l!==void 0?Ss("trying to update a grouped one which is forbidden",t):a()};if(r={dismiss:a,config:t,notif:i},n!==void 0){Object.assign(n,r);return}return l=>{if(r!==void 0)if(l===void 0)r.dismiss();else{const c=Object.assign({},r.config,l,{group:!1,position:i.position});lI(c,e,r)}}}function _U(t){t.meta.timer&&(clearTimeout(t.meta.timer),t.meta.timer=void 0);const e=on[t.position].value.indexOf(t);if(e!==-1){t.group!==void 0&&delete Ja[t.meta.group];const n=aI[""+t.meta.uid];if(n){const{width:r,height:i}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=r,n.style.height=i}on[t.position].value.splice(e,1),typeof t.onDismiss=="function"&&t.onDismiss()}}function O_(t){return t!=null&&pU.test(t)!==!0}function Ss(t,e){return console.error(`Notify: ${t}`,e),!1}function yU(){return Be({name:"QNotifications",devtools:{hide:!0},setup(){return()=>U("div",{class:"q-notifications"},op.map(t=>U(kA,{key:t,class:oI[t],tag:"div",name:`q-notification--${t}`},()=>on[t].value.map(e=>{const n=e.meta,r=[];if(n.hasMedia===!0&&(e.spinner!==!1?r.push(U(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?r.push(U(hl,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&r.push(U(fh,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>U("img",{src:e.avatar,"aria-hidden":"true"})))),n.hasText===!0){let s;const o={class:"q-notification__message col"};if(e.html===!0)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const a=[e.message];s=e.caption?[U("div",a),U("div",{class:"q-notification__caption"},[e.caption])]:a}r.push(U("div",o,s))}const i=[U("div",{class:n.contentClass},r)];return e.progress===!0&&i.push(U("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),e.actions!==void 0&&i.push(U("div",{class:n.actionsClass},e.actions.map(s=>U(Un,s)))),n.badge>1&&i.push(U("div",{key:`${n.uid}|${n.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[n.badge])),U("div",{ref:s=>{aI[""+n.uid]=s},key:n.uid,class:n.class,...n.attrs},[U("div",{class:n.wrapperClass},i)])}))))}})}var vU={setDefaults(t){Zi(t)===!0&&Object.assign(Ya,t)},registerType(t,e){Zi(e)===!0&&(Li[t]=e)},install({$q:t,parentApp:e}){if(t.notify=this.create=n=>lI(n,t),t.notify.setDefaults=this.setDefaults,t.notify.registerType=this.registerType,t.config.notify!==void 0&&this.setDefaults(t.config.notify),this.__installed!==!0){op.forEach(r=>{on[r]=re([]);const i=["left","center","right"].includes(r)===!0?"center":r.indexOf("top")>-1?"top":"bottom",s=r.indexOf("left")>-1?"start":r.indexOf("right")>-1?"end":"center",o=["left","right"].includes(r)?`items-${r==="left"?"start":"end"} justify-center`:r==="center"?"flex-center":`items-${s}`;oI[r]=`q-notifications__list q-notifications__list--${i} fixed column no-wrap ${o}`});const n=Cd("q-notify");tv(yU(),e).mount(n)}}},wU={config:{notify:{position:"top"},loadingBar:{color:"primary"}},plugins:{Notify:vU,LoadingBar:Do}};const EU="/";async function TU({app:t,router:e,store:n},r){let i=!1;const s=l=>{try{return e.resolve(l).href}catch{}return Object(l)===l?null:l},o=l=>{if(i=!0,typeof l=="string"&&/^https?:\/\//.test(l)){window.location.href=l;return}const c=s(l);c!==null&&(window.location.href=c)},a=window.location.href.replace(window.location.origin,"");for(let l=0;i===!1&&l<r.length;l++)try{await r[l]({app:t,router:e,store:n,ssrContext:null,redirect:o,urlPath:a,publicPath:EU})}catch(c){if(c&&c.url){o(c.url);return}console.error("[Quasar] boot error:",c);return}i!==!0&&(t.use(e),t.mount("#q-app"))}dU(Hy,wU).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(i=>{if(i.status==="rejected"){console.error("[Quasar] boot error:",i.reason);return}return i.value.default})]:["all",r=>r.map(i=>i.default)];return Promise[e]([xe(()=>Promise.resolve().then(function(){return qF}),void 0),xe(()=>import("./error-handler.360b804a.js"),["assets/error-handler.360b804a.js","assets/error-message.8e28215f.js"]),xe(()=>import("./navigation-guards.0fea6229.js"),[]),xe(()=>import("./algoliasearch.464d0526.js"),[])]).then(r=>{const i=n(r).filter(s=>typeof s=="function");TU(t,i)})});export{dn as $,hn as A,DU as B,sh as C,NU as D,lo as E,$t as F,Gy as G,Ky as H,Qy as I,$n as J,aC as K,Be as L,Cv as M,vU as N,$o as O,Pv as P,Bo as Q,Fv as R,kt as S,ji as T,Td as U,re as V,N as W,kv as X,KF as Y,ke as Z,Nn as _,Ps as a,_0 as a$,At as a0,Bi as a1,BU as a2,yn as a3,sU as a4,Ge as a5,JF as a6,Ql as a7,gu as a8,hl as a9,qi as aA,gd as aB,_b as aC,_h as aD,Sv as aE,WF as aF,Dt as aG,oy as aH,KU as aI,fh as aJ,A_ as aK,OU as aL,Ba as aM,sC as aN,ZF as aO,He as aP,aR as aQ,r2 as aR,Nf as aS,ip as aT,ZU as aU,e2 as aV,n2 as aW,t2 as aX,XU as aY,JU as aZ,i2 as a_,_u as aa,LC as ab,PC as ac,Un as ad,$S as ae,xC as af,oC as ag,OC as ah,HU as ai,hr as aj,jU as ak,ml as al,MC as am,WU as an,qo as ao,zU as ap,UC as aq,bS as ar,$U as as,VU as at,jS as au,ii as av,tR as aw,Vi as ax,cu as ay,Mv as az,FU as b,l2 as b0,a2 as b1,o2 as b2,c2 as b3,s2 as b4,d2 as b5,u2 as b6,h2 as b7,HF as b8,$F as b9,Om as bA,Wv as bB,Uv as bC,Vm as bD,IC as bE,Wl as bF,HS as bG,WS as bH,AU as bI,Hb as bJ,tl as bK,cn as bL,Cr as bM,QI as bN,_2 as bO,y2 as bP,v2 as bQ,sn as bR,T2 as bS,MU as bT,em as bU,w2 as bV,m2 as bW,f2 as bX,p2 as bY,g2 as bZ,GA as ba,vb as bb,wb as bc,Ty as bd,E2 as be,CC as bf,VC as bg,br as bh,LU as bi,tc as bj,Ov as bk,qU as bl,Sd as bm,ri as bn,bv as bo,Ad as bp,Rd as bq,kS as br,lC as bs,Lv as bt,Lm as bu,bC as bv,Vv as bw,uC as bx,cC as by,Nv as bz,wd as c,PU as d,Np as e,RU as f,py as g,U as h,ln as i,ae as j,kU as k,IU as l,Gb as m,zl as n,an as o,SU as p,ze as q,CU as r,UU as s,bU as t,Yv as u,sA as v,xU as w,Qb as x,gv as y,Ye as z};
