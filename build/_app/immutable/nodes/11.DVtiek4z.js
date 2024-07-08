import{s as W,n as G,r as X}from"../chunks/scheduler.CDuU5eCe.js";import{S as Y,i as Z,e as d,s as _,c,g as T,a as k,b as Q,d as w,p as l,h as U,j as a,f as E,l as x,t as $,o as ee,u as te}from"../chunks/index.DrNOQVLA.js";import"../chunks/entry.CaSScsbF.js";import{s as J}from"../chunks/supabaseClient.DUdbI1C6.js";function K(i){let r,f;return{c(){r=d("div"),f=$(i[0]),this.h()},l(n){r=c(n,"DIV",{class:!0});var o=Q(r);f=ee(o,i[0]),o.forEach(w),this.h()},h(){l(r,"class","svelte-kodlbo")},m(n,o){U(n,r,o),a(r,f)},p(n,o){o&1&&te(f,n[0])},d(n){n&&w(r)}}}function se(i){let r,f="Register as a new user",n,o,e,p,g="Name:",L,m,N,R,q,b,A="Email:",B,v,M,P,O,C,H="Password:",S,h,j,I,D,y,V="Register",F,z,u=i[0]&&K(i);return{c(){r=d("h1"),r.textContent=f,n=_(),u&&u.c(),o=_(),e=d("form"),p=d("label"),p.textContent=g,L=_(),m=d("input"),N=_(),R=d("br"),q=_(),b=d("label"),b.textContent=A,B=_(),v=d("input"),M=_(),P=d("br"),O=_(),C=d("label"),C.textContent=H,S=_(),h=d("input"),j=_(),I=d("br"),D=_(),y=d("button"),y.textContent=V,this.h()},l(s){r=c(s,"H1",{class:!0,"data-svelte-h":!0}),T(r)!=="svelte-19er3rl"&&(r.textContent=f),n=k(s),u&&u.l(s),o=k(s),e=c(s,"FORM",{class:!0});var t=Q(e);p=c(t,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(p)!=="svelte-ir8c70"&&(p.textContent=g),L=k(t),m=c(t,"INPUT",{id:!0,type:!0,class:!0}),N=k(t),R=c(t,"BR",{class:!0}),q=k(t),b=c(t,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(b)!=="svelte-1flf0h4"&&(b.textContent=A),B=k(t),v=c(t,"INPUT",{id:!0,type:!0,class:!0}),M=k(t),P=c(t,"BR",{class:!0}),O=k(t),C=c(t,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(C)!=="svelte-bhu94"&&(C.textContent=H),S=k(t),h=c(t,"INPUT",{id:!0,type:!0,class:!0}),j=k(t),I=c(t,"BR",{class:!0}),D=k(t),y=c(t,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),T(y)!=="svelte-1s7k2qu"&&(y.textContent=V),t.forEach(w),this.h()},h(){l(r,"class","svelte-kodlbo"),l(p,"for","name"),l(p,"class","svelte-kodlbo"),l(m,"id","name"),l(m,"type","name"),m.required=!0,l(m,"class","svelte-kodlbo"),l(R,"class","svelte-kodlbo"),l(b,"for","email"),l(b,"class","svelte-kodlbo"),l(v,"id","email"),l(v,"type","email"),v.required=!0,l(v,"class","svelte-kodlbo"),l(P,"class","svelte-kodlbo"),l(C,"for","password"),l(C,"class","svelte-kodlbo"),l(h,"id","password"),l(h,"type","password"),h.required=!0,l(h,"class","svelte-kodlbo"),l(I,"class","svelte-kodlbo"),l(y,"type","submit"),l(y,"class","svelte-kodlbo"),l(e,"class","svelte-kodlbo")},m(s,t){U(s,r,t),U(s,n,t),u&&u.m(s,t),U(s,o,t),U(s,e,t),a(e,p),a(e,L),a(e,m),E(m,i[1]),a(e,N),a(e,R),a(e,q),a(e,b),a(e,B),a(e,v),E(v,i[2]),a(e,M),a(e,P),a(e,O),a(e,C),a(e,S),a(e,h),E(h,i[3]),a(e,j),a(e,I),a(e,D),a(e,y),F||(z=[x(m,"input",i[5]),x(v,"input",i[6]),x(h,"input",i[7]),x(e,"submit",i[4])],F=!0)},p(s,[t]){s[0]?u?u.p(s,t):(u=K(s),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null),t&2&&E(m,s[1]),t&4&&v.value!==s[2]&&E(v,s[2]),t&8&&h.value!==s[3]&&E(h,s[3])},i:G,o:G,d(s){s&&(w(r),w(n),w(o),w(e)),u&&u.d(s),F=!1,X(z)}}}function le(i,r,f){let n="",o="",e="",p="";async function g(){const{user:R,session:q,error:b}=await J.auth.signUp({email:o,password:e,options:{data:{display_name:n}}});if(b)console.error(b);else{const{data:A,error:B}=await J.from("main").insert([{name:n,email:o}]);B?console.error(B):(f(0,p="User registered successfully!"),window.location.href="/")}}function L(){n=this.value,f(1,n)}function m(){o=this.value,f(2,o)}function N(){e=this.value,f(3,e)}return i.$$.update=()=>{i.$$.dirty&1&&p&&setTimeout(()=>{f(0,p="")},3e3)},[p,n,o,e,g,L,m,N]}class ie extends Y{constructor(r){super(),Z(this,r,le,se,W,{})}}export{ie as component};
