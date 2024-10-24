import{b as ee,c as te,o as _,s as ne,t as ie}from"./chunk-SL4L7IUJ.js";import{Aa as Y,Ab as P,Da as Q,Ra as j,Sa as W,a as O,ab as X,b as V,ca as q,fb as Z,ha as D,ib as m,jb as g,kb as A,mb as F,nb as z,oa as J,ob as E,pb as v,qb as L,tb as $,xa as U,ya as R,za as k}from"./chunk-EJHMALUB.js";function fe(i,f){if(i&1){let s=F();m(0,"div",1)(1,"div",4)(2,"span",5),k(),m(3,"svg",6),A(4,"path",7),g()(),Y(),m(5,"div",8)(6,"strong",9),v(7," Changes saved "),g(),m(8,"p",10),v(9),g()(),m(10,"button",11),z("click",function(){U(s);let l=E();return R(l.close())}),m(11,"span",12),v(12,"Dismiss popup"),g(),k(),m(13,"svg",6),A(14,"path",13),g()()()()}if(i&2){let s=E();j(9),L(s.message)}}function pe(i,f){if(i&1){let s=F();m(0,"div",2)(1,"div",4)(2,"span",14),k(),m(3,"svg",15),A(4,"path",16),g()(),Y(),m(5,"div",8)(6,"strong",17),v(7," There is an error "),g(),m(8,"p",10),v(9),g()(),m(10,"button",11),z("click",function(){U(s);let l=E();return R(l.close())}),m(11,"span",12),v(12,"Dismiss popup"),g(),k(),m(13,"svg",6),A(14,"path",13),g()()()()}if(i&2){let s=E();j(9),L(s.message)}}function me(i,f){if(i&1){let s=F();m(0,"div",3)(1,"div",4)(2,"div",8)(3,"p",10),v(4),g()(),m(5,"button",11),z("click",function(){U(s);let l=E();return R(l.close())}),m(6,"span",12),v(7,"Dismiss popup"),g(),k(),m(8,"svg",6),A(9,"path",13),g()()()()}if(i&2){let s=E();j(4),L(s.message)}}var oe=(()=>{class i{constructor(s){this.notificationService=s}close(){this.notificationService.closeNotification(this.notificationRef)}static{this.\u0275fac=function(d){return new(d||i)(W(re))}}static{this.\u0275cmp=J({type:i,selectors:[["app-notification"]],inputs:{message:"message",type:"type"},standalone:!0,features:[$],decls:4,vars:1,consts:[[1,"fixed","right-3","top-3"],["role","alert",1,"rounded","border-s-4","border-green-500","bg-green-50","p-4"],["role","alert",1,"rounded","border-s-4","border-red-500","bg-red-50","p-4"],["role","alert",1,"rounded","border-s-4","border-gray-500","bg-gray-50","p-4"],[1,"flex","items-start","gap-4"],[1,"text-green-600"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"size-6"],["stroke-linecap","round","stroke-linejoin","round","d","M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"],[1,"flex-1"],[1,"block","font-medium","text-green-900"],[1,"mt-1","text-sm","text-gray-700"],[1,"text-gray-500","transition","hover:text-gray-600",3,"click"],[1,"sr-only"],["stroke-linecap","round","stroke-linejoin","round","d","M6 18L18 6M6 6l12 12"],[1,"text-red-600"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","currentColor",1,"size-5"],["fill-rule","evenodd","d","M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z","clip-rule","evenodd"],[1,"block","font-medium","text-red-900"]],template:function(d,l){d&1&&(m(0,"div",0),X(1,fe,15,1,"div",1)(2,pe,15,1,"div",2)(3,me,10,1,"div",3),g()),d&2&&(j(),Z(l.type==="success"?1:l.type==="error"?2:3))},encapsulation:2})}}return i})();var re=(()=>{class i{constructor(s){this.injector=s}setContainerRef(s){this.containerRef=s}showNotification(s,d){let l=this.containerRef.createComponent(oe,{injector:this.injector});return l.instance.message=s,l.instance.type=d,l.instance.notificationRef=l,setTimeout(()=>this.closeNotification(l),1e4),l}closeNotification(s){s.destroy()}static{this.\u0275fac=function(d){return new(d||i)(D(Q))}}static{this.\u0275prov=q({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var se=ee("[User List] Add User",te());function ge(){return{ids:[],entities:{}}}function Me(){function i(f={}){return Object.assign(ge(),f)}return{getInitialState:i}}function xe(){function i(f){let s=h=>h.ids,d=h=>h.entities,l=_(s,d,(h,w)=>h.map(N=>w[N])),M=_(s,h=>h.length);return f?{selectIds:_(f,s),selectEntities:_(f,d),selectAll:_(f,l),selectTotal:_(f,M)}:{selectIds:s,selectEntities:d,selectAll:l,selectTotal:M}}return{getSelectors:i}}var r=function(i){return i[i.EntitiesOnly=0]="EntitiesOnly",i[i.Both=1]="Both",i[i.None=2]="None",i}(r||{});function p(i){return function(s,d){let l={ids:[...d.ids],entities:O({},d.entities)},M=i(s,l);return M===r.Both?Object.assign({},d,l):M===r.EntitiesOnly?V(O({},d),{entities:l.entities}):d}}function b(i,f){let s=f(i);return P()&&s===void 0&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",i,"The `selectId` implementation:",f.toString()),s}function ce(i){function f(a,n){let t=b(a,i);return t in n.entities?r.None:(n.ids.push(t),n.entities[t]=a,r.Both)}function s(a,n){let t=!1;for(let e of a)t=f(e,n)!==r.None||t;return t?r.Both:r.None}function d(a,n){return n.ids=[],n.entities={},s(a,n),r.Both}function l(a,n){let t=b(a,i);return t in n.entities?(n.entities[t]=a,r.EntitiesOnly):(n.ids.push(t),n.entities[t]=a,r.Both)}function M(a,n){let t=a.map(e=>l(e,n));switch(!0){case t.some(e=>e===r.Both):return r.Both;case t.some(e=>e===r.EntitiesOnly):return r.EntitiesOnly;default:return r.None}}function h(a,n){return w([a],n)}function w(a,n){let e=(a instanceof Array?a:n.ids.filter(o=>a(n.entities[o]))).filter(o=>o in n.entities).map(o=>delete n.entities[o]).length>0;return e&&(n.ids=n.ids.filter(o=>o in n.entities)),e?r.Both:r.None}function N(a){return Object.assign({},a,{ids:[],entities:{}})}function G(a,n,t){let e=t.entities[n.id],o=Object.assign({},e,n.changes),c=b(o,i),u=c!==n.id;return u&&(a[n.id]=c,delete t.entities[n.id]),t.entities[c]=o,u}function I(a,n){return C([a],n)}function C(a,n){let t={};return a=a.filter(o=>o.id in n.entities),a.length>0?a.filter(c=>G(t,c,n)).length>0?(n.ids=n.ids.map(c=>t[c]||c),r.Both):r.EntitiesOnly:r.None}function B(a,n){let e=n.ids.reduce((o,c)=>{let u=a(n.entities[c]);return u!==n.entities[c]&&o.push({id:c,changes:u}),o},[]).filter(({id:o})=>o in n.entities);return C(e,n)}function K({map:a,id:n},t){let e=t.entities[n];if(!e)return r.None;let o=a(e);return I({id:n,changes:o},t)}function H(a,n){return T([a],n)}function T(a,n){let t=[],e=[];for(let u of a){let y=b(u,i);y in n.entities?e.push({id:y,changes:u}):t.push(u)}let o=C(e,n),c=s(t,n);switch(!0){case(c===r.None&&o===r.None):return r.None;case(c===r.Both||o===r.Both):return r.Both;default:return r.EntitiesOnly}}return{removeAll:N,addOne:p(f),addMany:p(s),setAll:p(d),setOne:p(l),setMany:p(M),updateOne:p(I),updateMany:p(C),upsertOne:p(H),upsertMany:p(T),removeOne:p(h),removeMany:p(w),map:p(B),mapOne:p(K)}}function ve(i,f){let{removeOne:s,removeMany:d,removeAll:l}=ce(i);function M(t,e){return h([t],e)}function h(t,e){let o=t.filter(c=>!(b(c,i)in e.entities));return o.length===0?r.None:(n(o,e),r.Both)}function w(t,e){return e.entities={},e.ids=[],h(t,e),r.Both}function N(t,e){let o=b(t,i);return o in e.entities?(e.ids=e.ids.filter(c=>c!==o),n([t],e),r.Both):M(t,e)}function G(t,e){let o=t.map(c=>N(c,e));switch(!0){case o.some(c=>c===r.Both):return r.Both;case o.some(c=>c===r.EntitiesOnly):return r.EntitiesOnly;default:return r.None}}function I(t,e){return B([t],e)}function C(t,e,o){if(!(e.id in o.entities))return!1;let c=o.entities[e.id],u=Object.assign({},c,e.changes),y=b(u,i);return delete o.entities[e.id],t.push(u),y!==e.id}function B(t,e){let o=[],c=t.filter(u=>C(o,u,e)).length>0;if(o.length===0)return r.None;{let u=e.ids,y=[];return e.ids=e.ids.filter((x,S)=>x in e.entities?!0:(y.push(S),!1)),n(o,e),!c&&y.every(x=>e.ids[x]===u[x])?r.EntitiesOnly:r.Both}}function K(t,e){let o=e.ids.reduce((c,u)=>{let y=t(e.entities[u]);return y!==e.entities[u]&&c.push({id:u,changes:y}),c},[]);return B(o,e)}function H({map:t,id:e},o){let c=o.entities[e];if(!c)return r.None;let u=t(c);return I({id:e,changes:u},o)}function T(t,e){return a([t],e)}function a(t,e){let o=[],c=[];for(let x of t){let S=b(x,i);S in e.entities?c.push({id:S,changes:x}):o.push(x)}let u=B(c,e),y=h(o,e);switch(!0){case(y===r.None&&u===r.None):return r.None;case(y===r.Both||u===r.Both):return r.Both;default:return r.EntitiesOnly}}function n(t,e){t.sort(f);let o=[],c=0,u=0;for(;c<t.length&&u<e.ids.length;){let y=t[c],x=b(y,i),S=e.ids[u],le=e.entities[S];f(y,le)<=0?(o.push(x),c++):(o.push(S),u++)}c<t.length?e.ids=o.concat(t.slice(c).map(i)):e.ids=o.concat(e.ids.slice(u)),t.forEach((y,x)=>{e.entities[i(y)]=y})}return{removeOne:s,removeMany:d,removeAll:l,addOne:p(M),updateOne:p(I),upsertOne:p(T),setAll:p(w),setOne:p(N),setMany:p(G),addMany:p(h),updateMany:p(B),upsertMany:p(a),map:p(K),mapOne:p(H)}}function ae(i={}){let{selectId:f,sortComparer:s}={selectId:i.selectId??(h=>h.id),sortComparer:i.sortComparer??!1},d=Me(),l=xe(),M=s?ve(f,s):ce(f);return O(O(O({selectId:f,sortComparer:s},d),l),M)}var ue=ae(),be={users:ue.getInitialState(),loading:!1,error:""},Ae=ie(be,ne(se,(i,{user:f})=>V(O({},i),{users:ue.addOne(f,i.users)})));export{re as a,se as b,ue as c,Ae as d};