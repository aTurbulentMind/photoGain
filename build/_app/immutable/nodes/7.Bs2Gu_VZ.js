import{C as I,s as e,c as a,a as c,t as h,D as ne,r as t}from"../chunks/disclose-version.R2tMHkCf.js";import{p as ie,U as ce,V as he,a as ve,g as o,m as L,t as $,T as z,s as A,D as ue}from"../chunks/runtime.B9Tkknyz.js";import{s as _}from"../chunks/render.BR1jdBP3.js";import{i as k}from"../chunks/if.Gr1yDK32.js";import{e as pe,i as de}from"../chunks/each.Cteka9H4.js";import{a as _e}from"../chunks/attributes.BCpl9MSX.js";import{e as j}from"../chunks/svelte-head.C8vKO2zP.js";import{p as be}from"../chunks/props.UsdjHU8F.js";var ge=h('<li class="svelte-z3grz1"><button class="bordt svelte-z3grz1" type="button"> </button></li>'),fe=h('<ul class="svelte-z3grz1"></ul>'),me=h('<p aria-live="polite">Loading recent articles...</p>'),ye=h("<h2> </h2> <p> </p> <p> </p> <p> </p>",1),xe=h('<div class="modal-background" role="presentation"><div class="modal-content"><!> <button type="button">Close</button></div></div>'),we=h(`<h1>Blog</h1> <div class="text_Block"><p class="text_Box cut_Box">The Vaporwave Photographer's Blog is a mesmerizing journey into the world of retro aesthetics,
		blending vibrant neon hues, nostalgic elements, and modern digital art. This unique blog
		captures the essence of the vaporwave genre, transporting readers to an era where past and
		future intertwine seamlessly. Through carefully curated photo shoots and insightful commentary,
		the blog showcases the timeless beauty of forgotten places, the allure of vintage technology,
		and the surreal charm of urban landscapes bathed in synthetic light. <br><br> Each post on the Vaporwave Photographer's Blog is a visual and auditory experience, often accompanied
		by curated playlists that enhance the immersive journey. The blog not only highlights stunning visuals
		but also delves into the philosophy and cultural significance behind the vaporwave movement. It serves
		as a sanctuary for art enthusiasts, retro aficionados, and anyone seeking to escape the mundane and
		dive into a world where art, music, and technology converge in a nostalgic symphony. Whether you're
		a seasoned vaporwave enthusiast or a curious newcomer, the Vaporwave Photographer's Blog offers a
		refreshing perspective that celebrates the beauty of ambiguity and timelessness.</p> <br> <br> <h2>Most Recent Articles</h2> <h1>Blog</h1> <div class="text_Block"><p class="text_Box cut_Box">The Vaporwave Photographer's Blog</p> <br> <br> <h2>Most Recent Articles</h2> <!> <!></div> <br> <br> <p class="text_Box cut_Box">Or look into a library of the past.</p> <br> <a class="bordt svelte-z3grz1" href="/blog/library/">Library of articles</a></div> <br> <br> <p class="text_Box cut_Box">Or look into a library of the past.</p> <br> <a class="bordt svelte-z3grz1" href="/blog/library/">Library of articles</a>`,1);function Pe(C,T){ie(T,!1);let V=be(T,"data");console.log(" 1. Initial data:",V());const{props:E}=V(),{recentArticles:v}=E;console.log("Initial recentArticles:",v);let b=L(!1),l=L(null);async function O(s){try{console.log("3. Article passed to showArticleDetails:",s),A(l,s),A(b,!0),console.log("4. Updated selectedArticle:",o(l)),console.log("5. Updated showModal:",o(b))}catch(r){console.error("6. Error:",r.message)}}ce(()=>{},()=>{console.log("7. Updated recentArticles:",v)}),he();var D=we(),R=I(D),m=e(e(R,!0)),y=a(m),q=e(a(y));e(q),ne(),t(y);var W=e(e(y,!0)),F=e(e(W,!0)),G=e(e(F,!0)),H=e(e(G,!0)),x=e(e(H,!0)),J=a(x),K=e(e(J,!0)),N=e(e(K,!0)),Q=e(e(N,!0)),M=e(e(Q,!0));k(M,()=>v&&v.length>0,s=>{var r=fe();pe(r,9,()=>v,de,(g,i,P)=>{var u=ge(),n=a(u),p=ue(()=>()=>O(z(i))),w=a(n);t(n),t(u),$(()=>{_e(n,"aria-label",`View details for ${z(i).text_name??""}`),_(w,z(i).text_name)}),j("click",n,function(...d){var f;return(f=o(p))==null?void 0:f.apply(this,d)},!1),c(g,u)}),t(r),c(s,r)},s=>{var r=me();c(s,r)});var S=e(e(M,!0));k(S,()=>o(b),s=>{var r=xe(),g=a(r),i=a(g);k(i,()=>o(l),u=>{var n=ye(),p=I(n),w=a(p);t(p);var d=e(e(p,!0)),f=a(d);t(d);var B=e(e(d,!0)),se=a(B);t(B);var U=e(e(B,!0)),le=a(U);t(U),$(()=>{_(w,o(l).text_name),_(f,`Date: ${o(l).date_made??""}`),_(se,`Author: ${o(l).author??""}`),_(le,o(l).text_guts)}),c(u,n)});var P=e(e(i,!0));t(g),t(r),j("click",P,()=>A(b,!1),!1),c(s,r)}),t(x);var X=e(e(x,!0)),Y=e(e(X,!0)),Z=e(e(Y,!0)),ee=e(e(Z,!0));e(e(ee,!0)),t(m);var te=e(e(m,!0)),re=e(e(te,!0)),ae=e(e(re,!0)),oe=e(e(ae,!0));e(e(oe,!0)),c(C,D),ve()}export{Pe as component};