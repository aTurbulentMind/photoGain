import{c as t,s as r,a as d,t as u,$ as O,r as s}from"../chunks/disclose-version.R2tMHkCf.js";import{p as P,t as c,a as T,g as U,m as Y,s as w}from"../chunks/runtime.B9Tkknyz.js";import{s as f}from"../chunks/render.BR1jdBP3.js";import{i as y}from"../chunks/if.Gr1yDK32.js";import{h as j}from"../chunks/svelte-head.C8vKO2zP.js";import{a as q,e as z}from"../chunks/forms.D9FfQH4M.js";import{r as A,s as B}from"../chunks/attributes.BCpl9MSX.js";import{s as C}from"../chunks/class.DOG1H17C.js";import{i as D}from"../chunks/lifecycle.KSb5esXj.js";import{p as G}from"../chunks/props.UsdjHU8F.js";var H=u("<div> </div>"),I=u('<span class="flex items-center text-sm error"> </span>'),J=u('<form class="row flex flex-center" method="POST"><div class="col-6 form-widget"><h1 class="header">Supabase + SvelteKit</h1> <p class="description">Sign in via magic link with your email below</p> <!> <div><label for="email">Email address</label> <input id="email" name="email" class="inputField" type="email" placeholder="Your email"></div> <!> <div><button class="button primary block"> </button></div></div></form>');function ta($,_){P(_,!1);let i=G(_,"form"),n=Y(!1);const E=()=>(w(n,!0),async({update:a})=>{a(),w(n,!1)});D();var l=J();j(a=>{O.title="User Management"});var b=t(l),F=t(b),K=r(r(F,!0)),h=r(r(K,!0));y(h,()=>{var a;return((a=i())==null?void 0:a.message)!==void 0},a=>{var e=H(),v=t(e);s(e),c(()=>{var o,m;C(e,`success ${((o=i())!=null&&o.success?"":"fail")??""}`),f(v,(m=i())==null?void 0:m.message)}),d(a,e)});var p=r(r(h,!0)),L=t(p),g=r(r(L,!0));A(g),s(p);var x=r(r(p,!0));y(x,()=>{var a,e;return(e=(a=i())==null?void 0:a.errors)==null?void 0:e.email},a=>{var e=I(),v=t(e);s(e),c(()=>{var o,m;return f(v,(m=(o=i())==null?void 0:o.errors)==null?void 0:m.email)}),d(a,e)});var S=r(r(x,!0)),k=t(S),M=t(k);s(k),s(S),s(b),s(l),c(()=>{var a;B(g,((a=i())==null?void 0:a.email)??""),f(M,U(n)?"Loading":"Send magic link")}),q(l,(a,e)=>z(a,e),()=>E),d($,l),T()}export{ta as component};
