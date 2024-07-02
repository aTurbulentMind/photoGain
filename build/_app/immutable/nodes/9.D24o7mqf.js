import{s as z,n as G,o as B,b as I}from"../chunks/scheduler.CDuU5eCe.js";import{S as N,i as O,e as _,s as w,c as g,b as j,g as x,a as E,d,p as m,h as C,j as p,t as R,o as T,l as q,u as H,r as S}from"../chunks/index.DrNOQVLA.js";import{e as V}from"../chunks/each.4hAOA6fU.js";import{s as D}from"../chunks/supabaseClient.D7KByqQC.js";function P(n,e,r){const t=n.slice();return t[8]=e[r],t}function U(n,e,r){const t=n.slice();return t[11]=e[r],t}function A(n){let e,r="Loading images...";return{c(){e=_("p"),e.textContent=r,this.h()},l(t){e=g(t,"P",{"aria-live":!0,"data-svelte-h":!0}),x(e)!=="svelte-1tbhrya"&&(e.textContent=r),this.h()},h(){m(e,"aria-live","polite")},m(t,l){C(t,e,l)},p:G,d(t){t&&d(e)}}}function J(n){let e,r=V(n[0]),t=[];for(let l=0;l<r.length;l+=1)t[l]=$(U(n,r,l));return{c(){e=_("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=g(l,"DIV",{class:!0});var c=j(e);for(let a=0;a<t.length;a+=1)t[a].l(c);c.forEach(d),this.h()},h(){m(e,"class","carousel-container svelte-x7avj")},m(l,c){C(l,e,c);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(l,c){if(c&17){r=V(l[0]);let a;for(a=0;a<r.length;a+=1){const h=U(l,r,a);t[a]?t[a].p(h,c):(t[a]=$(h),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=r.length}},d(l){l&&d(e),S(t,l)}}}function K(n){let e,r="No image available";return{c(){e=_("p"),e.textContent=r},l(t){e=g(t,"P",{"data-svelte-h":!0}),x(e)!=="svelte-181m4av"&&(e.textContent=r)},m(t,l){C(t,e,l)},p:G,d(t){t&&d(e)}}}function Q(n){let e,r,t;return{c(){e=_("img"),this.h()},l(l){e=g(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){I(e.src,r=n[11].url)||m(e,"src",r),m(e,"alt",t=n[11].name),m(e,"class","svelte-x7avj")},m(l,c){C(l,e,c)},p(l,c){c&1&&!I(e.src,r=l[11].url)&&m(e,"src",r),c&1&&t!==(t=l[11].name)&&m(e,"alt",t)},d(l){l&&d(e)}}}function $(n){let e,r,t=n[11].name+"",l,c,a,h,v,k;function y(s,f){return s[11].url?Q:K}let u=y(n),o=u(n);function i(){return n[5](n[11])}return{c(){e=_("button"),r=_("h2"),l=R(t),c=w(),o.c(),a=w(),this.h()},l(s){e=g(s,"BUTTON",{class:!0,type:!0,"aria-label":!0});var f=j(e);r=g(f,"H2",{class:!0});var b=j(r);l=T(b,t),b.forEach(d),c=E(f),o.l(f),a=E(f),f.forEach(d),this.h()},h(){m(r,"class","svelte-x7avj"),m(e,"class","gallery-item svelte-x7avj"),m(e,"type","button"),m(e,"aria-label",h="View details for "+n[11].name)},m(s,f){C(s,e,f),p(e,r),p(r,l),p(e,c),o.m(e,null),p(e,a),v||(k=q(e,"click",i),v=!0)},p(s,f){n=s,f&1&&t!==(t=n[11].name+"")&&H(l,t),u===(u=y(n))&&o?o.p(n,f):(o.d(1),o=u(n),o&&(o.c(),o.m(e,a))),f&1&&h!==(h="View details for "+n[11].name)&&m(e,"aria-label",h)},d(s){s&&d(e),o.d(),v=!1,k()}}}function F(n){let e,r,t,l,c,a,h,v="Close",k,y;function u(s,f){return s[3].length>0?X:W}let o=u(n),i=o(n);return{c(){e=_("div"),r=_("div"),t=_("h2"),l=R(n[2]),c=w(),i.c(),a=w(),h=_("button"),h.textContent=v,this.h()},l(s){e=g(s,"DIV",{class:!0});var f=j(e);r=g(f,"DIV",{class:!0});var b=j(r);t=g(b,"H2",{class:!0});var L=j(t);l=T(L,n[2]),L.forEach(d),c=E(b),i.l(b),a=E(b),h=g(b,"BUTTON",{class:!0,"data-svelte-h":!0}),x(h)!=="svelte-1j3043b"&&(h.textContent=v),b.forEach(d),f.forEach(d),this.h()},h(){m(t,"class","svelte-x7avj"),m(h,"class","svelte-x7avj"),m(r,"class","modal svelte-x7avj"),m(e,"class","modal-background svelte-x7avj")},m(s,f){C(s,e,f),p(e,r),p(r,t),p(t,l),p(r,c),i.m(r,null),p(r,a),p(r,h),k||(y=q(h,"click",n[6]),k=!0)},p(s,f){f&4&&H(l,s[2]),o===(o=u(s))&&i?i.p(s,f):(i.d(1),i=o(s),i&&(i.c(),i.m(r,a)))},d(s){s&&d(e),i.d(),k=!1,y()}}}function W(n){let e,r="Loading gallery images...";return{c(){e=_("p"),e.textContent=r,this.h()},l(t){e=g(t,"P",{"aria-live":!0,"data-svelte-h":!0}),x(e)!=="svelte-16h48fk"&&(e.textContent=r),this.h()},h(){m(e,"aria-live","polite")},m(t,l){C(t,e,l)},p:G,d(t){t&&d(e)}}}function X(n){let e,r=V(n[3]),t=[];for(let l=0;l<r.length;l+=1)t[l]=M(P(n,r,l));return{c(){e=_("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=g(l,"DIV",{class:!0});var c=j(e);for(let a=0;a<t.length;a+=1)t[a].l(c);c.forEach(d),this.h()},h(){m(e,"class","carousel-container svelte-x7avj")},m(l,c){C(l,e,c);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(l,c){if(c&12){r=V(l[3]);let a;for(a=0;a<r.length;a+=1){const h=P(l,r,a);t[a]?t[a].p(h,c):(t[a]=M(h),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=r.length}},d(l){l&&d(e),S(t,l)}}}function M(n){let e,r;return{c(){e=_("img"),this.h()},l(t){e=g(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){I(e.src,r=n[8])||m(e,"src",r),m(e,"alt",n[2]),m(e,"class","svelte-x7avj")},m(t,l){C(t,e,l)},p(t,l){l&8&&!I(e.src,r=t[8])&&m(e,"src",r),l&4&&m(e,"alt",t[2])},d(t){t&&d(e)}}}function Y(n){let e,r,t="Vaporwave Gallery",l,c,a=`Vaporwave is a unique genre that blends music, art, and internet culture into a nostalgic yet\r
		futuristic aesthetic. Emerging in the early 2010s, this style draws heavily from 1980s and 1990s\r
		pop culture, incorporating elements such as retro computer graphics, early internet imagery, and\r
		smooth jazz or elevator music remixes.`,h,v;function k(i,s){return i[0].length>0?J:A}let y=k(n),u=y(n),o=n[1]&&F(n);return{c(){e=_("div"),r=_("h1"),r.textContent=t,l=w(),c=_("p"),c.textContent=a,h=w(),u.c(),v=w(),o&&o.c(),this.h()},l(i){e=g(i,"DIV",{class:!0});var s=j(e);r=g(s,"H1",{"data-svelte-h":!0}),x(r)!=="svelte-1wf8tgd"&&(r.textContent=t),l=E(s),c=g(s,"P",{class:!0,"data-svelte-h":!0}),x(c)!=="svelte-1wy79fx"&&(c.textContent=a),h=E(s),u.l(s),v=E(s),o&&o.l(s),s.forEach(d),this.h()},h(){m(c,"class","intro-paragraph svelte-x7avj"),m(e,"class","gallery-container svelte-x7avj")},m(i,s){C(i,e,s),p(e,r),p(e,l),p(e,c),p(e,h),u.m(e,null),p(e,v),o&&o.m(e,null)},p(i,[s]){y===(y=k(i))&&u?u.p(i,s):(u.d(1),u=y(i),u&&(u.c(),u.m(e,v))),i[1]?o?o.p(i,s):(o=F(i),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:G,o:G,d(i){i&&d(e),u.d(),o&&o.d()}}}function Z(n,e,r){let t=[],l=!1,c=null,a=[];async function h(){try{console.log("Fetching gallery folders from Supabase storage...");const{data:u,error:o}=await D.storage.from("Gallery").list("");if(o){console.error("Error fetching folders:",o.message);return}u&&u.length>0?(r(0,t=await Promise.all(u.map(async i=>{const{data:s,error:f}=await D.storage.from("Gallery").list(i.name,{limit:1});if(f)return console.error(`Error fetching files from folder ${i.name}:`,f.message),null;if(s&&s.length>0){const b=`https://adgdwehuxdddcwmfhudx.supabase.co/storage/v1/object/public/Gallery/${i.name}/${s[0].name}`;return console.log(`Generated public URL for ${s[0].name} in folder ${i.name}: ${b}`),{name:i.name,url:b}}return{name:i.name,url:null}}))),r(0,t=t.filter(i=>i!==null)),console.log("Fetched images:",t)):console.log("No folders found in the Gallery.")}catch(u){console.error("Error:",u.message)}}async function v(u){try{console.log(`Fetching images from gallery: ${u}`);const{data:o,error:i}=await D.storage.from("Gallery").list(u,{limit:100});if(i){console.error("Error fetching images:",i.message);return}o&&o.length>0?(r(3,a=o.map(s=>{const f=`https://adgdwehuxdddcwmfhudx.supabase.co/storage/v1/object/public/Gallery/${u}/${s.name}`;return console.log(`Generated public URL for ${s.name}: ${f}`),f})),console.log("Fetched gallery images:",a)):console.log("No images found in the gallery."),r(2,c=u),r(1,l=!0)}catch(o){console.error("Error:",o.message)}}return B(h),[t,l,c,a,v,u=>v(u.name),()=>r(1,l=!1)]}class ae extends N{constructor(e){super(),O(this,e,Z,Y,z,{})}}export{ae as component};
