if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const o=e=>s(e,r),d={module:{uri:r},exports:t,require:o};i[r]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-DhPfi8S-.css",revision:null},{url:"assets/index-DX5t8P--.js",revision:null},{url:"index.html",revision:"521c1db1d969f518c13dc024ead7c679"},{url:"registerSW.js",revision:"ecbe4ead21bd4cc869a00aadb87239aa"},{url:"favicon.ico",revision:"ebb716018bccc25cd2af2a698c141d6a"},{url:"apple-touch-icon.png",revision:"20d0ac52f55a30315ca0f3e90c7e0014"},{url:"manifest.webmanifest",revision:"90a1d1588e0c18975af8eedfad7ecd60"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
