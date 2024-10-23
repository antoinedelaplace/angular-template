import{$ as se,Ba as ue,Db as F,Ea as D,Ha as ae,L as re,T as oe,U as ie,Xa as _,a as h,aa as O,b as v,ca as R,f as S,fa as c,ha as f,i as X,ia as d,j as b,ja as T,l as ee,ma as A,n as te,ra as C,u as ne,va as ce,zb as M}from"./chunk-F7JPPGSS.js";function k(e,r){let t=!r?.manualCleanup;t&&!r?.injector&&ce(k);let n=t?r?.injector?.get(D)??d(D):null,i=Ve(r?.equal),o;r?.requireSync?o=_({kind:0},{equal:i}):o=_({kind:1,value:r?.initialValue},{equal:i});let s=e.subscribe({next:u=>o.set({kind:1,value:u}),error:u=>{if(r?.rejectErrors)throw u;o.set({kind:2,error:u})}});if(r?.requireSync&&o().kind===0)throw new O(601,!1);return n?.onDestroy(s.unsubscribe.bind(s)),F(()=>{let u=o();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new O(601,!1)}},{equal:r?.equal})}function Ve(e=Object.is){return(r,t)=>r.kind===1&&t.kind===1&&e(r.value,t.value)}var z={};function Qt(e,r){if(z[e]=(z[e]||0)+1,typeof r=="function")return U(e,(...n)=>v(h({},r(...n)),{type:e}));switch(r?r._as:"empty"){case"empty":return U(e,()=>({type:e}));case"props":return U(e,n=>v(h({},n),{type:e}));default:throw new Error("Unexpected config.")}}function Wt(){return{_as:"props",_p:void 0}}function U(e,r){return Object.defineProperty(r,"type",{value:e,writable:!1})}var we="@ngrx/store/init",m=(()=>{class e extends b{constructor(){super({type:we})}next(t){if(typeof t=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof t>"u")throw new TypeError("Actions must be objects");if(typeof t.type>"u")throw new TypeError("Actions must have a type property");super.next(t)}complete(){}ngOnDestroy(){super.complete()}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=R({token:e,factory:e.\u0275fac})}}return e})(),$e=[m],xe=new c("@ngrx/store Internal Root Guard"),de=new c("@ngrx/store Internal Initial State"),L=new c("@ngrx/store Initial State"),Oe=new c("@ngrx/store Reducer Factory"),le=new c("@ngrx/store Internal Reducer Factory Provider"),Te=new c("@ngrx/store Initial Reducers"),N=new c("@ngrx/store Internal Initial Reducers"),fe=new c("@ngrx/store Store Features"),pe=new c("@ngrx/store Internal Store Reducers"),P=new c("@ngrx/store Internal Feature Reducers"),ye=new c("@ngrx/store Internal Feature Configs"),Ae=new c("@ngrx/store Internal Store Features"),he=new c("@ngrx/store Internal Feature Reducers Token"),Ce=new c("@ngrx/store Feature Reducers"),Re=new c("@ngrx/store User Provided Meta Reducers"),I=new c("@ngrx/store Meta Reducers"),me=new c("@ngrx/store Internal Resolved Meta Reducers"),ve=new c("@ngrx/store User Runtime Checks Config"),ge=new c("@ngrx/store Internal User Runtime Checks Config"),g=new c("@ngrx/store Internal Runtime Checks"),B=new c("@ngrx/store Check if Action types are unique"),V=new c("@ngrx/store Root Store Provider"),Ee=new c("@ngrx/store Feature State Provider");function G(e,r={}){let t=Object.keys(e),n={};for(let o=0;o<t.length;o++){let s=t[o];typeof e[s]=="function"&&(n[s]=e[s])}let i=Object.keys(n);return function(s,u){s=s===void 0?r:s;let l=!1,p={};for(let a=0;a<i.length;a++){let y=i[a],ze=n[y],W=s[y],J=ze(W,u);p[y]=J,l=l||J!==W}return l?p:s}}function qe(e,r){return Object.keys(e).filter(t=>t!==r).reduce((t,n)=>Object.assign(t,{[n]:e[n]}),{})}function De(...e){return function(r){if(e.length===0)return r;let t=e[e.length-1];return e.slice(0,-1).reduceRight((i,o)=>o(i),t(r))}}function _e(e,r){return Array.isArray(r)&&r.length>0&&(e=De.apply(null,[...r,e])),(t,n)=>{let i=e(t);return(o,s)=>(o=o===void 0?n:o,i(o,s))}}function Ke(e){let r=Array.isArray(e)&&e.length>0?De(...e):t=>t;return(t,n)=>(t=r(t),(i,o)=>(i=i===void 0?n:i,t(i,o)))}var E=class extends S{},j=class extends m{},Le="@ngrx/store/update-reducers",w=(()=>{class e extends b{get currentReducers(){return this.reducers}constructor(t,n,i,o){super(o(i,n)),this.dispatcher=t,this.initialState=n,this.reducers=i,this.reducerFactory=o}addFeature(t){this.addFeatures([t])}addFeatures(t){let n=t.reduce((i,{reducers:o,reducerFactory:s,metaReducers:u,initialState:l,key:p})=>{let a=typeof o=="function"?Ke(u)(o,l):_e(s,u)(o,l);return i[p]=a,i},{});this.addReducers(n)}removeFeature(t){this.removeFeatures([t])}removeFeatures(t){this.removeReducers(t.map(n=>n.key))}addReducer(t,n){this.addReducers({[t]:n})}addReducers(t){this.reducers=h(h({},this.reducers),t),this.updateReducers(Object.keys(t))}removeReducer(t){this.removeReducers([t])}removeReducers(t){t.forEach(n=>{this.reducers=qe(this.reducers,n)}),this.updateReducers(t)}updateReducers(t){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Le,features:t})}ngOnDestroy(){this.complete()}static{this.\u0275fac=function(n){return new(n||e)(f(j),f(L),f(Te),f(Oe))}}static{this.\u0275prov=R({token:e,factory:e.\u0275fac})}}return e})(),Be=[w,{provide:E,useExisting:w},{provide:j,useExisting:m}],Z=(()=>{class e extends X{ngOnDestroy(){this.complete()}static{this.\u0275fac=(()=>{let t;return function(i){return(t||(t=ue(e)))(i||e)}})()}static{this.\u0275prov=R({token:e,factory:e.\u0275fac})}}return e})(),Ge=[Z],x=class extends S{},Se=(()=>{class e extends b{static{this.INIT=we}constructor(t,n,i,o){super(o);let u=t.pipe(te(ee)).pipe(se(n)),l={state:o},p=u.pipe(ie(Ze,l));this.stateSubscription=p.subscribe(({state:a,action:y})=>{this.next(a),i.next(y)}),this.state=k(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.\u0275fac=function(n){return new(n||e)(f(m),f(E),f(Z),f(L))}}static{this.\u0275prov=R({token:e,factory:e.\u0275fac})}}return e})();function Ze(e={state:void 0},[r,t]){let{state:n}=e;return{state:t(n,r),action:r}}var He=[Se,{provide:x,useExisting:Se}],H=(()=>{class e extends S{constructor(t,n,i){super(),this.actionsObserver=n,this.reducerManager=i,this.source=t,this.state=t.state}select(t,...n){return Qe.call(null,t,...n)(this)}selectSignal(t,n){return F(()=>t(this.state()),n)}lift(t){let n=new e(this,this.actionsObserver,this.reducerManager);return n.operator=t,n}dispatch(t){this.actionsObserver.next(t)}next(t){this.actionsObserver.next(t)}error(t){this.actionsObserver.error(t)}complete(){this.actionsObserver.complete()}addReducer(t,n){this.reducerManager.addReducer(t,n)}removeReducer(t){this.reducerManager.removeReducer(t)}static{this.\u0275fac=function(n){return new(n||e)(f(x),f(m),f(w))}}static{this.\u0275prov=R({token:e,factory:e.\u0275fac})}}return e})(),Ye=[H];function Qe(e,r,...t){return function(i){let o;if(typeof e=="string"){let s=[r,...t].filter(Boolean);o=i.pipe(oe(e,...s))}else if(typeof e=="function")o=i.pipe(ne(s=>e(s,r)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return o.pipe(re())}}var Y="https://ngrx.io/guide/store/configuration/runtime-checks";function be(e){return e===void 0}function Fe(e){return e===null}function Me(e){return Array.isArray(e)}function We(e){return typeof e=="string"}function Je(e){return typeof e=="boolean"}function Xe(e){return typeof e=="number"}function ke(e){return typeof e=="object"&&e!==null}function et(e){return ke(e)&&!Me(e)}function tt(e){if(!et(e))return!1;let r=Object.getPrototypeOf(e);return r===Object.prototype||r===null}function $(e){return typeof e=="function"}function nt(e){return $(e)&&e.hasOwnProperty("\u0275cmp")}function rt(e,r){return Object.prototype.hasOwnProperty.call(e,r)}var ot=!1;function it(){return ot}function Ie(e,r){return e===r}function st(e,r,t){for(let n=0;n<e.length;n++)if(!t(e[n],r[n]))return!0;return!1}function Ue(e,r=Ie,t=Ie){let n=null,i=null,o;function s(){n=null,i=null}function u(a=void 0){o={result:a}}function l(){o=void 0}function p(){if(o!==void 0)return o.result;if(!n)return i=e.apply(null,arguments),n=arguments,i;if(!st(arguments,n,r))return i;let a=e.apply(null,arguments);return n=arguments,t(i,a)?i:(i=a,a)}return{memoized:p,reset:s,setResult:u,clearResult:l}}function ct(...e){return at(Ue)(...e)}function ut(e,r,t,n){if(t===void 0){let o=r.map(s=>s(e));return n.memoized.apply(null,o)}let i=r.map(o=>o(e,t));return n.memoized.apply(null,[...i,t])}function at(e,r={stateFn:ut}){return function(...t){let n=t;if(Array.isArray(n[0])){let[a,...y]=n;n=[...a,...y]}else n.length===1&&dt(n[0])&&(n=lt(n[0]));let i=n.slice(0,n.length-1),o=n[n.length-1],s=i.filter(a=>a.release&&typeof a.release=="function"),u=e(function(...a){return o.apply(null,a)}),l=Ue(function(a,y){return r.stateFn.apply(null,[a,i,y,u])});function p(){l.reset(),u.reset(),s.forEach(a=>a.release())}return Object.assign(l.memoized,{release:p,projector:u.memoized,setResult:l.setResult,clearResult:l.clearResult})}}function Jt(e){return ct(r=>{let t=r[e];return!it()&&M()&&!(e in r)&&console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),t},r=>r)}function dt(e){return!!e&&typeof e=="object"&&Object.values(e).every(r=>typeof r=="function")}function lt(e){let r=Object.values(e),t=Object.keys(e),n=(...i)=>t.reduce((o,s,u)=>v(h({},o),{[s]:i[u]}),{});return[...r,n]}function ft(e){return e instanceof c?d(e):e}function pt(e,r){return r.map((t,n)=>{if(e[n]instanceof c){let i=d(e[n]);return{key:t.key,reducerFactory:i.reducerFactory?i.reducerFactory:G,metaReducers:i.metaReducers?i.metaReducers:[],initialState:i.initialState}}return t})}function yt(e){return e.map(r=>r instanceof c?d(r):r)}function Ne(e){return typeof e=="function"?e():e}function ht(e,r){return e.concat(r)}function Rt(){if(d(H,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function mt(e,r){return function(t,n){let i=r.action(n)?q(n):n,o=e(t,i);return r.state()?q(o):o}}function q(e){Object.freeze(e);let r=$(e);return Object.getOwnPropertyNames(e).forEach(t=>{if(!t.startsWith("\u0275")&&rt(e,t)&&(!r||t!=="caller"&&t!=="callee"&&t!=="arguments")){let n=e[t];(ke(n)||$(n))&&!Object.isFrozen(n)&&q(n)}}),e}function vt(e,r){return function(t,n){if(r.action(n)){let o=K(n);je(o,"action")}let i=e(t,n);if(r.state()){let o=K(i);je(o,"state")}return i}}function K(e,r=[]){return(be(e)||Fe(e))&&r.length===0?{path:["root"],value:e}:Object.keys(e).reduce((n,i)=>{if(n)return n;let o=e[i];return nt(o)?n:be(o)||Fe(o)||Xe(o)||Je(o)||We(o)||Me(o)?!1:tt(o)?K(o,[...r,i]):{path:[...r,i],value:o}},!1)}function je(e,r){if(e===!1)return;let t=e.path.join("."),n=new Error(`Detected unserializable ${r} at "${t}". ${Y}#strict${r}serializability`);throw n.value=e.value,n.unserializablePath=t,n}function gt(e,r){return function(t,n){if(r.action(n)&&!ae.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${Y}#strictactionwithinngzone`);return e(t,n)}}function Et(e){return M()?h({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function St({strictActionSerializability:e,strictStateSerializability:r}){return t=>e||r?vt(t,{action:n=>e&&!Q(n),state:()=>r}):t}function bt({strictActionImmutability:e,strictStateImmutability:r}){return t=>e||r?mt(t,{action:n=>e&&!Q(n),state:()=>r}):t}function Q(e){return e.type.startsWith("@ngrx")}function Ft({strictActionWithinNgZone:e}){return r=>e?gt(r,{action:t=>e&&!Q(t)}):r}function It(e){return[{provide:ge,useValue:e},{provide:ve,useFactory:jt,deps:[ge]},{provide:g,deps:[ve],useFactory:Et},{provide:I,multi:!0,deps:[g],useFactory:bt},{provide:I,multi:!0,deps:[g],useFactory:St},{provide:I,multi:!0,deps:[g],useFactory:Ft}]}function Pe(){return[{provide:B,multi:!0,deps:[g],useFactory:wt}]}function jt(e){return e}function wt(e){if(!e.strictActionTypeUniqueness)return;let r=Object.entries(z).filter(([,t])=>t>1).map(([t])=>t);if(r.length)throw new Error(`Action types are registered more than once, ${r.map(t=>`"${t}"`).join(", ")}. ${Y}#strictactiontypeuniqueness`)}function Xt(e,r,t={}){return C([...Dt(e,r,t),Ct])}function xt(e={},r={}){return[{provide:xe,useFactory:Rt},{provide:de,useValue:r.initialState},{provide:L,useFactory:Ne,deps:[de]},{provide:N,useValue:e},{provide:pe,useExisting:e instanceof c?e:N},{provide:Te,deps:[N,[new T(pe)]],useFactory:ft},{provide:Re,useValue:r.metaReducers?r.metaReducers:[]},{provide:me,deps:[I,Re],useFactory:ht},{provide:le,useValue:r.reducerFactory?r.reducerFactory:G},{provide:Oe,deps:[le,me],useFactory:_e},$e,Be,Ge,He,Ye,It(r.runtimeChecks),Pe()]}function Ot(){d(m),d(E),d(Z),d(H),d(xe,{optional:!0}),d(B,{optional:!0})}var Tt=[{provide:V,useFactory:Ot},{provide:A,multi:!0,useFactory(){return()=>d(V)}}];function en(e,r){return C([...xt(e,r),Tt])}function At(){d(V);let e=d(Ae),r=d(Ce),t=d(w);d(B,{optional:!0});let n=e.map((i,o)=>{let u=r.shift()[o];return v(h({},i),{reducers:u,initialState:Ne(i.initialState)})});t.addFeatures(n)}var Ct=[{provide:Ee,useFactory:At},{provide:A,multi:!0,useFactory(){return()=>d(Ee)}}];function Dt(e,r,t={}){return[{provide:ye,multi:!0,useValue:e instanceof Object?{}:t},{provide:fe,multi:!0,useValue:{key:e instanceof Object?e.name:e,reducerFactory:!(t instanceof c)&&t.reducerFactory?t.reducerFactory:G,metaReducers:!(t instanceof c)&&t.metaReducers?t.metaReducers:[],initialState:!(t instanceof c)&&t.initialState?t.initialState:void 0}},{provide:Ae,deps:[ye,fe],useFactory:pt},{provide:P,multi:!0,useValue:e instanceof Object?e.reducer:r},{provide:he,multi:!0,useExisting:r instanceof c?r:P},{provide:Ce,multi:!0,deps:[P,[new T(he)]],useFactory:yt},Pe()]}function tn(...e){let r=e.pop(),t=e.map(n=>n.type);return{reducer:r,types:t}}function nn(e,...r){let t=new Map;for(let n of r)for(let i of n.types){let o=t.get(i);if(o){let s=(u,l)=>n.reducer(o(u,l),l);t.set(i,s)}else t.set(i,n.reducer)}return function(n=e,i){let o=t.get(i.type);return o?o(n,i):n}}export{k as a,Qt as b,Wt as c,we as d,m as e,L as f,V as g,Ee as h,E as i,j,Le as k,Z as l,x as m,H as n,ct as o,Jt as p,Xt as q,en as r,tn as s,nn as t};
