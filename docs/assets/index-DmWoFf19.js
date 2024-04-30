var Te=Object.defineProperty;var Ue=(e,t,n)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ae=(e,t,n)=>(Ue(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function N(){}const qe=e=>e;function Se(e){return e()}function pe(){return Object.create(null)}function L(e){e.forEach(Se)}function T(e){return typeof e=="function"}function G(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ze(e){return Object.keys(e).length===0}const Oe=typeof window<"u";let De=Oe?()=>window.performance.now():()=>Date.now(),me=Oe?e=>requestAnimationFrame(e):N;const z=new Set;function Ce(e){z.forEach(t=>{t.c(e)||(z.delete(t),t.f())}),z.size!==0&&me(Ce)}function Je(e){let t;return z.size===0&&me(Ce),{promise:new Promise(n=>{z.add(t={c:e,f:n})}),abort(){z.delete(t)}}}function v(e,t){e.appendChild(t)}function Re(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function We(e){const t=k("style");return t.textContent="/* empty */",Ke(Re(e),t),t.sheet}function Ke(e,t){return v(e.head||e,t),t.sheet}function B(e,t,n){e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function k(e){return document.createElement(e)}function S(e){return document.createTextNode(e)}function Y(){return S(" ")}function Me(){return S("")}function D(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function $(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ve(e){return Array.from(e.childNodes)}function Ge(e,t){t=""+t,e.data!==t&&(e.data=t)}function He(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}const re=new Map;let se=0;function Qe(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Xe(e,t){const n={stylesheet:We(t),rules:{}};return re.set(e,n),n}function ge(e,t,n,i,s,r,u,l=0){const c=16.666/i;let f=`{
`;for(let I=0;I<=1;I+=c){const _=t+(n-t)*r(I);f+=I*100+`%{${u(_,1-_)}}
`}const o=f+`100% {${u(n,1-n)}}
}`,p=`__svelte_${Qe(o)}_${l}`,g=Re(e),{stylesheet:d,rules:a}=re.get(g)||Xe(g,e);a[p]||(a[p]=!0,d.insertRule(`@keyframes ${p} ${o}`,d.cssRules.length));const y=e.style.animation||"";return e.style.animation=`${y?`${y}, `:""}${p} ${i}ms linear ${s}ms 1 both`,se+=1,p}function Ye(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?r=>r.indexOf(t)<0:r=>r.indexOf("__svelte")===-1),s=n.length-i.length;s&&(e.style.animation=i.join(", "),se-=s,se||Ze())}function Ze(){me(()=>{se||(re.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&O(t)}),re.clear())})}let ee;function Z(e){ee=e}function xe(){if(!ee)throw new Error("Function called outside component initialization");return ee}function et(e){xe().$$.on_mount.push(e)}const q=[],_e=[];let J=[];const ye=[],Fe=Promise.resolve();let he=!1;function je(){he||(he=!0,Fe.then(Le))}function tt(){return je(),Fe}function V(e){J.push(e)}const fe=new Set;let U=0;function Le(){if(U!==0)return;const e=ee;do{try{for(;U<q.length;){const t=q[U];U++,Z(t),nt(t.$$)}}catch(t){throw q.length=0,U=0,t}for(Z(null),q.length=0,U=0;_e.length;)_e.pop()();for(let t=0;t<J.length;t+=1){const n=J[t];fe.has(n)||(fe.add(n),n())}J.length=0}while(q.length);for(;ye.length;)ye.pop()();he=!1,fe.clear(),Z(e)}function nt(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}function it(e){const t=[],n=[];J.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),J=t}let X;function rt(){return X||(X=Promise.resolve(),X.then(()=>{X=null})),X}function ce(e,t,n){e.dispatchEvent(He(`${t?"intro":"outro"}${n}`))}const ie=new Set;let R;function be(){R={r:0,c:[],p:R}}function Ie(){R.r||L(R.c),R=R.p}function C(e,t){e&&e.i&&(ie.delete(e),e.i(t))}function j(e,t,n,i){if(e&&e.o){if(ie.has(e))return;ie.add(e),R.c.push(()=>{ie.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const st={duration:0};function ue(e,t,n,i){let r=t(e,n,{direction:"both"}),u=i?0:1,l=null,c=null,f=null,o;function p(){f&&Ye(e,f)}function g(a,y){const I=a.b-u;return y*=Math.abs(I),{a:u,b:a.b,d:I,duration:y,start:a.start,end:a.start+y,group:a.group}}function d(a){const{delay:y=0,duration:I=300,easing:_=qe,tick:E=N,css:h}=r||st,m={start:De()+y,b:a};a||(m.group=R,R.r+=1),"inert"in e&&(a?o!==void 0&&(e.inert=o):(o=e.inert,e.inert=!0)),l||c?c=m:(h&&(p(),f=ge(e,u,a,I,y,_,h)),a&&E(0,1),l=g(m,I),V(()=>ce(e,a,"start")),Je(b=>{if(c&&b>c.start&&(l=g(c,I),c=null,ce(e,l.b,"start"),h&&(p(),f=ge(e,u,l.b,l.duration,0,_,r.css))),l){if(b>=l.end)E(u=l.b,1-u),ce(e,l.b,"end"),c||(l.b?p():--l.group.r||L(l.group.c)),l=null;else if(b>=l.start){const M=b-l.start;u=l.a+l.d*_(M/l.duration),E(u,1-u)}}return!!(l||c)}))}return{run(a){T(r)?rt().then(()=>{r=r({direction:a?"in":"out"}),d(a)}):d(a)},end(){p(),l=c=null}}}function ne(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function we(e,t){j(e,1,1,()=>{t.delete(e.key)})}function ve(e,t,n,i,s,r,u,l,c,f,o,p){let g=e.length,d=r.length,a=g;const y={};for(;a--;)y[e[a].key]=a;const I=[],_=new Map,E=new Map,h=[];for(a=d;a--;){const w=p(s,r,a),A=n(w);let P=u.get(A);P?h.push(()=>P.p(w,t)):(P=f(A,w),P.c()),_.set(A,I[a]=P),A in y&&E.set(A,Math.abs(a-y[A]))}const m=new Set,b=new Set;function M(w){C(w,1),w.m(l,o),u.set(w.key,w),o=w.first,d--}for(;g&&d;){const w=I[d-1],A=e[g-1],P=w.key,te=A.key;w===A?(o=w.first,g--,d--):_.has(te)?!u.has(P)||m.has(P)?M(w):b.has(te)?g--:E.get(P)>E.get(te)?(b.add(P),M(w)):(m.add(te),g--):(c(A,u),g--)}for(;g--;){const w=e[g];_.has(w.key)||c(w,u)}for(;d;)M(I[d-1]);return L(h),I}function x(e){e&&e.c()}function W(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),V(()=>{const r=e.$$.on_mount.map(Se).filter(T);e.$$.on_destroy?e.$$.on_destroy.push(...r):L(r),e.$$.on_mount=[]}),s.forEach(V)}function K(e,t){const n=e.$$;n.fragment!==null&&(it(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(e,t){e.$$.dirty[0]===-1&&(q.push(e),je(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(e,t,n,i,s,r,u=null,l=[-1]){const c=ee;Z(e);const f=e.$$={fragment:null,ctx:[],props:r,update:N,not_equal:s,bound:pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:pe(),dirty:l,skip_bound:!1,root:t.target||c.$$.root};u&&u(f.root);let o=!1;if(f.ctx=n?n(e,t.props||{},(p,g,...d)=>{const a=d.length?d[0]:g;return f.ctx&&s(f.ctx[p],f.ctx[p]=a)&&(!f.skip_bound&&f.bound[p]&&f.bound[p](a),o&&ut(e,p)),g}):[],f.update(),o=!0,L(f.before_update),f.fragment=i?i(f.ctx):!1,t.target){if(t.hydrate){const p=Ve(t.target);f.fragment&&f.fragment.l(p),p.forEach(O)}else f.fragment&&f.fragment.c();t.intro&&C(e.$$.fragment),W(e,t.target,t.anchor),Le()}Z(c)}class Q{constructor(){ae(this,"$$");ae(this,"$$set")}$destroy(){K(this,1),this.$destroy=N}$on(t,n){if(!T(n))return N;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!ze(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const lt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(lt);const ot=["hummus","garlic yoghurt","sweet chilli","tomato sauce","bbq sauce","mint sauce","aioli","mayo"],le=200;function F(){return((1+Math.random())*65536|0).toString(16).substring(1)}function Be(){return F()+F()+"-"+F()+"-"+F()+"-"+F()+"-"+F()+F()+F()}function de(){return{id:Be(),value:""}}function $e(e,t){return[...e.slice(0,t),...e.slice(t+1)]}function at(e){return Math.floor(Math.random()*e)}async function ke(){await tt;let e=document.getElementsByTagName("input");e[e.length-1].focus()}function ft(){return ot.map(e=>({id:Be(),value:e}))}function ct(){return localStorage.length>0?JSON.parse(localStorage.getItem("storedInputItems")):ft()}function dt(e){localStorage.setItem("storedInputItems",JSON.stringify(e))}function ht(e){let t,n,i,s,r,u;return{c(){t=k("div"),n=k("button"),i=S("add"),s=S(`
  a new option`),n.disabled=e[0]},m(l,c){B(l,t,c),v(t,n),v(n,i),v(t,s),r||(u=D(n,"click",function(){T(e[1])&&e[1].apply(this,arguments)}),r=!0)},p(l,[c]){e=l,c&1&&(n.disabled=e[0])},i:N,o:N,d(l){l&&O(t),r=!1,u()}}}function mt(e,t,n){let{disabled:i}=t,{handleAddNewInput:s}=t;return e.$$set=r=>{"disabled"in r&&n(0,i=r.disabled),"handleAddNewInput"in r&&n(1,s=r.handleAddNewInput)},[i,s]}class pt extends Q{constructor(t){super(),H(this,t,mt,ht,G,{disabled:0,handleAddNewInput:1})}}function gt(e){const t=e-1;return t*t*t+1}function oe(e,{delay:t=0,duration:n=400,easing:i=gt,axis:s="y"}={}){const r=getComputedStyle(e),u=+r.opacity,l=s==="y"?"height":"width",c=parseFloat(r[l]),f=s==="y"?["top","bottom"]:["left","right"],o=f.map(_=>`${_[0].toUpperCase()}${_.slice(1)}`),p=parseFloat(r[`padding${o[0]}`]),g=parseFloat(r[`padding${o[1]}`]),d=parseFloat(r[`margin${o[0]}`]),a=parseFloat(r[`margin${o[1]}`]),y=parseFloat(r[`border${o[0]}Width`]),I=parseFloat(r[`border${o[1]}Width`]);return{delay:t,duration:n,easing:i,css:_=>`overflow: hidden;opacity: ${Math.min(_*20,1)*u};${l}: ${_*c}px;padding-${f[0]}: ${_*p}px;padding-${f[1]}: ${_*g}px;margin-${f[0]}: ${_*d}px;margin-${f[1]}: ${_*a}px;border-${f[0]}-width: ${_*y}px;border-${f[1]}-width: ${_*I}px;`}}function _t(e){let t,n,i,s,r,u,l,c,f,o,p,g;return{c(){t=k("div"),n=k("input"),r=Y(),u=k("button"),l=S("remove"),$(n,"id",e[0]),n.value=e[1],$(n,"name",i=`option-${e[2]}`),$(n,"aria-label",s=`Option ${e[2]}:`),$(n,"autocomplete","off"),$(n,"class","svelte-ajn52r"),u.disabled=c=e[1]==="",$(t,"class","svelte-ajn52r")},m(d,a){B(d,t,a),v(t,n),v(t,r),v(t,u),v(u,l),o=!0,p||(g=[D(n,"input",function(){T(e[3])&&e[3].apply(this,arguments)}),D(n,"keypress",e[5]),D(u,"click",e[6])],p=!0)},p(d,[a]){e=d,(!o||a&1)&&$(n,"id",e[0]),(!o||a&2&&n.value!==e[1])&&(n.value=e[1]),(!o||a&4&&i!==(i=`option-${e[2]}`))&&$(n,"name",i),(!o||a&4&&s!==(s=`Option ${e[2]}:`))&&$(n,"aria-label",s),(!o||a&2&&c!==(c=e[1]===""))&&(u.disabled=c)},i(d){o||(d&&V(()=>{o&&(f||(f=ue(t,oe,{duration:le},!0)),f.run(1))}),o=!0)},o(d){d&&(f||(f=ue(t,oe,{duration:le},!1)),f.run(0)),o=!1},d(d){d&&O(t),d&&f&&f.end(),p=!1,L(g)}}}function yt(e,t,n){let{id:i}=t,{value:s}=t,{index:r}=t,{handleInputChange:u}=t,{handleAddNewInput:l}=t;const c=o=>{o.key==="Enter"&&l()},f=()=>{u({target:{value:""}},r)};return e.$$set=o=>{"id"in o&&n(0,i=o.id),"value"in o&&n(1,s=o.value),"index"in o&&n(2,r=o.index),"handleInputChange"in o&&n(3,u=o.handleInputChange),"handleAddNewInput"in o&&n(4,l=o.handleAddNewInput)},[i,s,r,u,l,c,f]}class bt extends Q{constructor(t){super(),H(this,t,yt,_t,G,{id:0,value:1,index:2,handleInputChange:3,handleAddNewInput:4})}}function It(e){let t,n,i,s,r,u;return{c(){t=k("div"),n=k("button"),i=S("pick"),s=S(`
  a random option`),n.disabled=e[0],$(t,"class","svelte-1lxn7j2")},m(l,c){B(l,t,c),v(t,n),v(n,i),v(t,s),r||(u=D(n,"click",function(){T(e[1])&&e[1].apply(this,arguments)}),r=!0)},p(l,[c]){e=l,c&1&&(n.disabled=e[0])},i:N,o:N,d(l){l&&O(t),r=!1,u()}}}function wt(e,t,n){let{disabled:i}=t,{handlePickItem:s}=t;return e.$$set=r=>{"disabled"in r&&n(0,i=r.disabled),"handlePickItem"in r&&n(1,s=r.handlePickItem)},[i,s]}class vt extends Q{constructor(t){super(),H(this,t,wt,It,G,{disabled:0,handlePickItem:1})}}function $t(e){let t,n,i,s;return{c(){t=k("li"),n=S(e[0])},m(r,u){B(r,t,u),v(t,n),s=!0},p(r,[u]){(!s||u&1)&&Ge(n,r[0])},i(r){s||(r&&V(()=>{s&&(i||(i=ue(t,oe,{duration:le},!0)),i.run(1))}),s=!0)},o(r){r&&(i||(i=ue(t,oe,{duration:le},!1)),i.run(0)),s=!1},d(r){r&&O(t),r&&i&&i.end()}}}function kt(e,t,n){let{value:i}=t;return e.$$set=s=>{"value"in s&&n(0,i=s.value)},[i]}class Nt extends Q{constructor(t){super(),H(this,t,kt,$t,G,{value:0})}}function Et(e){let t,n,i,s,r,u;return{c(){t=k("div"),n=k("button"),i=S("return"),s=S(" picked options"),n.disabled=e[0],$(t,"class","svelte-1lxn7j2")},m(l,c){B(l,t,c),v(t,n),v(n,i),v(t,s),r||(u=D(n,"click",function(){T(e[1])&&e[1].apply(this,arguments)}),r=!0)},p(l,[c]){e=l,c&1&&(n.disabled=e[0])},i:N,o:N,d(l){l&&O(t),r=!1,u()}}}function At(e,t,n){let{disabled:i}=t,{handleReturnPickedItems:s}=t;return e.$$set=r=>{"disabled"in r&&n(0,i=r.disabled),"handleReturnPickedItems"in r&&n(1,s=r.handleReturnPickedItems)},[i,s]}class Pt extends Q{constructor(t){super(),H(this,t,At,Et,G,{disabled:0,handleReturnPickedItems:1})}}function Ne(e,t,n){const i=e.slice();return i[10]=t[n].id,i[11]=t[n].value,i}function Ee(e,t,n){const i=e.slice();return i[10]=t[n].id,i[11]=t[n].value,i[15]=n,i}function Ae(e,t){let n,i,s;function r(...u){return t[9](t[15],...u)}return i=new bt({props:{id:t[10],index:t[15],value:t[11],handleAddNewInput:t[6],handleInputChange:r}}),{key:e,first:null,c(){n=Me(),x(i.$$.fragment),this.first=n},m(u,l){B(u,n,l),W(i,u,l),s=!0},p(u,l){t=u;const c={};l&1&&(c.id=t[10]),l&1&&(c.index=t[15]),l&1&&(c.value=t[11]),l&1&&(c.handleInputChange=r),i.$set(c)},i(u){s||(C(i.$$.fragment,u),s=!0)},o(u){j(i.$$.fragment,u),s=!1},d(u){u&&O(n),K(i,u)}}}function Pe(e,t){let n,i,s;return i=new Nt({props:{value:t[11]}}),{key:e,first:null,c(){n=Me(),x(i.$$.fragment),this.first=n},m(r,u){B(r,n,u),W(i,r,u),s=!0},p(r,u){t=r;const l={};u&2&&(l.value=t[11]),i.$set(l)},i(r){s||(C(i.$$.fragment,r),s=!0)},o(r){j(i.$$.fragment,r),s=!1},d(r){r&&O(n),K(i,r)}}}function St(e){let t,n,i,s=[],r=new Map,u,l,c,f,o=[],p=new Map,g,d,a;n=new vt({props:{disabled:!e[4],handlePickItem:e[7]}});let y=ne(e[0]);const I=h=>h[10];for(let h=0;h<y.length;h+=1){let m=Ee(e,y,h),b=I(m);r.set(b,s[h]=Ae(b,m))}l=new pt({props:{disabled:!e[2],handleAddNewInput:e[6]}});let _=ne(e[1]);const E=h=>h[10];for(let h=0;h<_.length;h+=1){let m=Ne(e,_,h),b=E(m);p.set(b,o[h]=Pe(b,m))}return d=new Pt({props:{disabled:!e[3],handleReturnPickedItems:e[8]}}),{c(){t=k("main"),x(n.$$.fragment),i=Y();for(let h=0;h<s.length;h+=1)s[h].c();u=Y(),x(l.$$.fragment),c=Y(),f=k("ol");for(let h=0;h<o.length;h+=1)o[h].c();g=Y(),x(d.$$.fragment),$(f,"class","svelte-vbv9ej"),$(t,"class","svelte-vbv9ej")},m(h,m){B(h,t,m),W(n,t,null),v(t,i);for(let b=0;b<s.length;b+=1)s[b]&&s[b].m(t,null);v(t,u),W(l,t,null),v(t,c),v(t,f);for(let b=0;b<o.length;b+=1)o[b]&&o[b].m(f,null);v(t,g),W(d,t,null),a=!0},p(h,[m]){const b={};m&16&&(b.disabled=!h[4]),n.$set(b),m&97&&(y=ne(h[0]),be(),s=ve(s,m,I,1,h,y,r,t,we,Ae,u,Ee),Ie());const M={};m&4&&(M.disabled=!h[2]),l.$set(M),m&2&&(_=ne(h[1]),be(),o=ve(o,m,E,1,h,_,p,f,we,Pe,null,Ne),Ie());const w={};m&8&&(w.disabled=!h[3]),d.$set(w)},i(h){if(!a){C(n.$$.fragment,h);for(let m=0;m<y.length;m+=1)C(s[m]);C(l.$$.fragment,h);for(let m=0;m<_.length;m+=1)C(o[m]);C(d.$$.fragment,h),a=!0}},o(h){j(n.$$.fragment,h);for(let m=0;m<s.length;m+=1)j(s[m]);j(l.$$.fragment,h);for(let m=0;m<o.length;m+=1)j(o[m]);j(d.$$.fragment,h),a=!1},d(h){h&&O(t),K(n);for(let m=0;m<s.length;m+=1)s[m].d();K(l);for(let m=0;m<o.length;m+=1)o[m].d();K(d)}}}function Ot(e,t,n){let i,s,r,u=[...ct(),de()],l=[];function c(d,a){u[a].value!==d.target.value&&n(0,u[a].value=d.target.value,u)}function f(){s&&n(0,u=[...u,de()]),ke()}function o(){const d=u.filter(({value:y})=>y.trim()),a=at(d.length);n(1,l=[...l,u[a]]),u.length>1?n(0,u=$e(u,a)):n(0,u[0]=de(),u)}function p(){const d=s?u.length:-1;n(0,u=[...u.slice(0,d),...l]),dt(u),n(1,l=[])}et(ke);const g=(d,a)=>{c(a,d)};return e.$$.update=()=>{if(e.$$.dirty&1){const d=u.some(({value:I})=>I.trim()===""),a=u.findIndex(({value:I})=>I.trim()===""),y=u.length-1;d&&a!==y&&n(0,u=$e(u,a))}e.$$.dirty&1&&n(4,i=u.at(0).value.trim()),e.$$.dirty&1&&n(2,s=u.at(-1).value.trim()),e.$$.dirty&2&&n(3,r=l.length>0)},[u,l,s,r,i,c,f,o,p,g]}class Ct extends Q{constructor(t){super(),H(this,t,Ot,St,G,{})}}new Ct({target:document.getElementById("app")});
