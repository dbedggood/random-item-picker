(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))i(u);new MutationObserver(u=>{for(const o of u)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(u){const o={};return u.integrity&&(o.integrity=u.integrity),u.referrerpolicy&&(o.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?o.credentials="include":u.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(u){if(u.ep)return;u.ep=!0;const o=n(u);fetch(u.href,o)}})();function b(){}function he(e){return e()}function ue(){return Object.create(null)}function O(e){e.forEach(he)}function K(e){return typeof e=="function"}function Y(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ye(e){return Object.keys(e).length===0}function T(e,t){e.appendChild(t)}function y(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function P(e){return document.createElement(e)}function N(e){return document.createTextNode(e)}function B(){return N(" ")}function Ie(){return N("")}function z(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function J(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function we(e){return Array.from(e.childNodes)}function ke(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let D;function F(e){D=e}function be(){if(!D)throw new Error("Function called outside component initialization");return D}function ve(e){be().$$.on_mount.push(e)}const j=[],le=[],Q=[],oe=[],me=Promise.resolve();let te=!1;function pe(){te||(te=!0,me.then(_e))}function Ne(){return pe(),me}function ne(e){Q.push(e)}const ee=new Set;let U=0;function _e(){const e=D;do{for(;U<j.length;){const t=j[U];U++,F(t),Ae(t.$$)}for(F(null),j.length=0,U=0;le.length;)le.pop()();for(let t=0;t<Q.length;t+=1){const n=Q[t];ee.has(n)||(ee.add(n),n())}Q.length=0}while(j.length);for(;oe.length;)oe.pop()();te=!1,ee.clear(),F(e)}function Ae(e){if(e.fragment!==null){e.update(),O(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}const V=new Set;let M;function Ee(){M={r:0,c:[],p:M}}function Ce(){M.r||O(M.c),M=M.p}function S(e,t){e&&e.i&&(V.delete(e),e.i(t))}function q(e,t,n,i){if(e&&e.o){if(V.has(e))return;V.add(e),M.c.push(()=>{V.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function Me(e,t){e.d(1),t.delete(e.key)}function Pe(e,t){q(e,1,1,()=>{t.delete(e.key)})}function re(e,t,n,i,u,o,l,c,f,d,w,m){let a=e.length,_=o.length,p=a;const A={};for(;p--;)A[e[p].key]=p;const E=[],k=new Map,L=new Map;for(p=_;p--;){const s=m(u,o,p),h=n(s);let I=l.get(h);I?i&&I.p(s,t):(I=d(h,s),I.c()),k.set(h,E[p]=I),h in A&&L.set(h,Math.abs(p-A[h]))}const C=new Set,$=new Set;function r(s){S(s,1),s.m(c,w),l.set(s.key,s),w=s.first,_--}for(;a&&_;){const s=E[_-1],h=e[a-1],I=s.key,R=h.key;s===h?(w=s.first,a--,_--):k.has(R)?!l.has(I)||C.has(I)?r(s):$.has(R)?a--:L.get(I)>L.get(R)?($.add(I),r(s)):(C.add(R),a--):(f(h,l),a--)}for(;a--;){const s=e[a];k.has(s.key)||f(s,l)}for(;_;)r(E[_-1]);return E}function ie(e){e&&e.c()}function W(e,t,n,i){const{fragment:u,after_update:o}=e.$$;u&&u.m(t,n),i||ne(()=>{const l=e.$$.on_mount.map(he).filter(K);e.$$.on_destroy?e.$$.on_destroy.push(...l):O(l),e.$$.on_mount=[]}),o.forEach(ne)}function X(e,t){const n=e.$$;n.fragment!==null&&(O(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Le(e,t){e.$$.dirty[0]===-1&&(j.push(e),pe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,i,u,o,l,c=[-1]){const f=D;F(e);const d=e.$$={fragment:null,ctx:[],props:o,update:b,not_equal:u,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:ue(),dirty:c,skip_bound:!1,root:t.target||f.$$.root};l&&l(d.root);let w=!1;if(d.ctx=n?n(e,t.props||{},(m,a,..._)=>{const p=_.length?_[0]:a;return d.ctx&&u(d.ctx[m],d.ctx[m]=p)&&(!d.skip_bound&&d.bound[m]&&d.bound[m](p),w&&Le(e,m)),a}):[],d.update(),w=!0,O(d.before_update),d.fragment=i?i(d.ctx):!1,t.target){if(t.hydrate){const m=we(t.target);d.fragment&&d.fragment.l(m),m.forEach(g)}else d.fragment&&d.fragment.c();t.intro&&S(e.$$.fragment),W(e,t.target,t.anchor,t.customElement),_e()}F(f)}class x{$destroy(){X(this,1),this.$destroy=b}$on(t,n){if(!K(n))return b;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const u=i.indexOf(n);u!==-1&&i.splice(u,1)}}$set(t){this.$$set&&!ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function v(){return((1+Math.random())*65536|0).toString(16).substring(1)}function ge(){return v()+v()+"-"+v()+"-"+v()+"-"+v()+"-"+v()+v()+v()}function G(){return{id:ge(),value:""}}function se(e,t){return[...e.slice(0,t),...e.slice(t+1)]}function Se(e){return Math.floor(Math.random()*e)}async function H(){if(await Ne,document.activeElement!==document.getElementById("pick-button")){let e=document.getElementsByTagName("input");e[e.length-1].focus()}}function Oe(){return["hummus","garlic yoghurt","sweet chilli","tomato sauce","bbq sauce","mint sauce","aioli","mayo"].map(e=>({id:ge(),value:e}))}function $e(e){let t,n,i,u,o;return{c(){t=P("button"),n=N("add"),i=N(`
a new option`),t.disabled=e[0]},m(l,c){y(l,t,c),T(t,n),y(l,i,c),u||(o=z(t,"click",function(){K(e[1])&&e[1].apply(this,arguments)}),u=!0)},p(l,[c]){e=l,c&1&&(t.disabled=e[0])},i:b,o:b,d(l){l&&g(t),l&&g(i),u=!1,o()}}}function Be(e,t,n){let{disabled:i}=t,{handleAddNewInput:u}=t;return e.$$set=o=>{"disabled"in o&&n(0,i=o.disabled),"handleAddNewInput"in o&&n(1,u=o.handleAddNewInput)},[i,u]}class je extends x{constructor(t){super(),Z(this,t,Be,$e,Y,{disabled:0,handleAddNewInput:1})}}function Fe(e){let t,n,i,u;return{c(){t=P("div"),n=P("input"),J(n,"id",e[0]),n.value=e[1],J(n,"autocomplete","off")},m(o,l){y(o,t,l),T(t,n),i||(u=[z(n,"input",function(){K(e[2])&&e[2].apply(this,arguments)}),z(n,"keypress",e[4])],i=!0)},p(o,[l]){e=o,l&1&&J(n,"id",e[0]),l&2&&n.value!==e[1]&&(n.value=e[1])},i:b,o:b,d(o){o&&g(t),i=!1,O(u)}}}function qe(e,t,n){let{id:i}=t,{value:u}=t,{handleInputChange:o}=t,{handleAddNewInput:l}=t;const c=f=>{f.key==="Enter"&&l()};return e.$$set=f=>{"id"in f&&n(0,i=f.id),"value"in f&&n(1,u=f.value),"handleInputChange"in f&&n(2,o=f.handleInputChange),"handleAddNewInput"in f&&n(3,l=f.handleAddNewInput)},[i,u,o,l,c]}class Te extends x{constructor(t){super(),Z(this,t,qe,Fe,Y,{id:0,value:1,handleInputChange:2,handleAddNewInput:3})}}function ze(e){let t,n,i,u,o,l;return{c(){t=P("button"),n=N("pick"),u=N(`
a random option`),J(t,"id","pick-button"),t.disabled=i=!e[0].at(0).value},m(c,f){y(c,t,f),T(t,n),y(c,u,f),o||(l=z(t,"click",function(){K(e[1])&&e[1].apply(this,arguments)}),o=!0)},p(c,[f]){e=c,f&1&&i!==(i=!e[0].at(0).value)&&(t.disabled=i)},i:b,o:b,d(c){c&&g(t),c&&g(u),o=!1,l()}}}function De(e,t,n){let{inputItems:i}=t,{handlePickItem:u}=t;return e.$$set=o=>{"inputItems"in o&&n(0,i=o.inputItems),"handlePickItem"in o&&n(1,u=o.handlePickItem)},[i,u]}class Ke extends x{constructor(t){super(),Z(this,t,De,ze,Y,{inputItems:0,handlePickItem:1})}}function fe(e,t,n){const i=e.slice();return i[8]=t[n].id,i[9]=t[n].value,i}function ce(e,t,n){const i=e.slice();return i[8]=t[n].id,i[9]=t[n].value,i[13]=n,i}function de(e,t){let n,i,u;function o(...l){return t[6](t[13],...l)}return i=new Te({props:{id:t[8],value:t[9],handleAddNewInput:t[4],handleInputChange:o}}),{key:e,first:null,c(){n=Ie(),ie(i.$$.fragment),this.first=n},m(l,c){y(l,n,c),W(i,l,c),u=!0},p(l,c){t=l;const f={};c&1&&(f.id=t[8]),c&1&&(f.value=t[9]),c&1&&(f.handleInputChange=o),i.$set(f)},i(l){u||(S(i.$$.fragment,l),u=!0)},o(l){q(i.$$.fragment,l),u=!1},d(l){l&&g(n),X(i,l)}}}function ae(e,t){let n,i=t[9]+"",u,o;return{key:e,first:null,c(){n=P("li"),u=N(i),o=B(),this.first=n},m(l,c){y(l,n,c),T(n,u),T(n,o)},p(l,c){t=l,c&2&&i!==(i=t[9]+"")&&ke(u,i)},d(l){l&&g(n)}}}function Re(e){let t,n,i=[],u=new Map,o,l,c,f,d=[],w=new Map,m,a,_,p,A,E;t=new Ke({props:{inputItems:e[0],handlePickItem:e[5]}});let k=e[0];const L=r=>r[8];for(let r=0;r<k.length;r+=1){let s=ce(e,k,r),h=L(s);u.set(h,i[r]=de(h,s))}l=new je({props:{disabled:!e[2],handleAddNewInput:e[4]}});let C=e[1];const $=r=>r[8];for(let r=0;r<C.length;r+=1){let s=fe(e,C,r),h=$(s);w.set(h,d[r]=ae(h,s))}return{c(){ie(t.$$.fragment),n=B();for(let r=0;r<i.length;r+=1)i[r].c();o=B(),ie(l.$$.fragment),c=B(),f=P("ol");for(let r=0;r<d.length;r+=1)d[r].c();m=B(),a=P("button"),a.textContent="reset",_=N(" picked options")},m(r,s){W(t,r,s),y(r,n,s);for(let h=0;h<i.length;h+=1)i[h].m(r,s);y(r,o,s),W(l,r,s),y(r,c,s),y(r,f,s);for(let h=0;h<d.length;h+=1)d[h].m(f,null);y(r,m,s),y(r,a,s),y(r,_,s),p=!0,A||(E=z(a,"click",e[7]),A=!0)},p(r,[s]){const h={};s&1&&(h.inputItems=r[0]),t.$set(h),s&25&&(k=r[0],Ee(),i=re(i,s,L,1,r,k,u,o.parentNode,Pe,de,o,ce),Ce());const I={};s&4&&(I.disabled=!r[2]),l.$set(I),s&2&&(C=r[1],d=re(d,s,$,1,r,C,w,f,Me,ae,null,fe))},i(r){if(!p){S(t.$$.fragment,r);for(let s=0;s<k.length;s+=1)S(i[s]);S(l.$$.fragment,r),p=!0}},o(r){q(t.$$.fragment,r);for(let s=0;s<i.length;s+=1)q(i[s]);q(l.$$.fragment,r),p=!1},d(r){X(t,r),r&&g(n);for(let s=0;s<i.length;s+=1)i[s].d(r);r&&g(o),X(l,r),r&&g(c),r&&g(f);for(let s=0;s<d.length;s+=1)d[s].d();r&&g(m),r&&g(a),r&&g(_),A=!1,E()}}}function Ue(e,t,n){let i,u=[...Oe(),G()],o=[];function l(m,a){u[a].value!==m.target.value&&n(0,u[a].value=m.target.value,u)}function c(){i&&n(0,u=[...u,G()]),H()}function f(){const m=u.filter(({value:_})=>_),a=Se(m.length);n(1,o=[...o,u[a]]),u.length>1?(n(0,u=se(u,a)),H()):n(0,u[0]=G(),u)}ve(H);const d=(m,a)=>{l(a,m)},w=()=>{n(0,u=[...u,...o,G()]),n(1,o=[])};return e.$$.update=()=>{if(e.$$.dirty&1){const m=u.some(({value:p})=>p===""),a=u.findIndex(({value:p})=>p===""),_=u.length-1;m&&a!==_&&(n(0,u=se(u,a)),H())}e.$$.dirty&1&&n(2,i=u.at(-1).value)},[u,o,i,l,c,f,d,w]}class Ge extends x{constructor(t){super(),Z(this,t,Ue,Re,Y,{})}}new Ge({target:document.getElementById("app")});
