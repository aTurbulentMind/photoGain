import{f as p,c as a,s as e,a as o,t as _,F as U,r}from"../chunks/disclose-version.Bjom2byz.js";import{p as X,l as j,a as B,b as E,d as G,t as y,X as b}from"../chunks/runtime.Dc7r91df.js";import{s as v}from"../chunks/render.BHOMxFaA.js";import{i as H}from"../chunks/if.B5nmp2JQ.js";import{e as I,i as J}from"../chunks/each.BTuGL9tM.js";import{i as K}from"../chunks/lifecycle.378jPWlX.js";import{p as q}from"../chunks/props.Bw7bR6zp.js";var M=_('<h2 class="blog-title svelte-1qaezxm"> </h2> <p class="highlight svelte-1qaezxm"><strong>Date:</strong> </p> <div class="blog-content svelte-1qaezxm"><p class="svelte-1qaezxm"> </p></div>',1),N=_("<p>Loading most recent articles...</p>"),O=_('<div class="head_Line"><h1>Library of The Sunken City</h1></div> <div class="blog-container svelte-1qaezxm"><!></div> <p>Loading most recent articles...(in the future. They are not actually loading right now)</p>',1);function ee(z,n){X(n,!1);let L=q(n,"data"),s=q(n,"recentArticles",8,()=>L().recentArticles||[]);function A(i){const t={year:"numeric",month:"2-digit",day:"2-digit"};return new Date(i).toLocaleDateString(void 0,t)}j(()=>G(s()),()=>{console.log("Updated recentArticles:",s())}),B(),K();var f=O(),l=p(f);a(l),r(l);var c=e(e(l,!0)),D=a(c);H(D,()=>s().length>0,i=>{var t=U(),w=p(t);I(w,1,s,J,(k,g,P)=>{var h=M(),d=p(h),S=a(d);r(d);var m=e(e(d,!0)),T=a(m),C=e(T,!0);y(()=>v(C,` ${A(s()[0].date_made)??""}`)),r(m);var u=e(e(m,!0)),x=a(u),F=a(x);r(x),r(u),y(()=>{v(S,b(g).text_name),v(F,b(g).text_guts)}),o(k,h)}),o(i,t)},i=>{var t=N();o(i,t)}),r(c),e(e(c,!0)),o(z,f),E()}export{ee as component};
