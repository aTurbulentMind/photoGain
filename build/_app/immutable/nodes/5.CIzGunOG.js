import{c as o,s as e,a as F,t as R,r as n,C as ve}from"../chunks/disclose-version.R2tMHkCf.js";import{p as ae,U as te,V as re,t as P,a as ie,g as a,m as f,s as l,O as se}from"../chunks/runtime.B9Tkknyz.js";import{a as Z,e as ee}from"../chunks/forms.BB8YNtgd.js";import{a as A,r as w,s as U}from"../chunks/attributes.BCpl9MSX.js";import{b as fe}from"../chunks/this.B0-guvAf.js";import{i as le}from"../chunks/lifecycle.KSb5esXj.js";import{p as O}from"../chunks/props.UsdjHU8F.js";import{s as pe}from"../chunks/render.BR1jdBP3.js";import{i as ce}from"../chunks/if.Gr1yDK32.js";import{e as be}from"../chunks/svelte-head.C8vKO2zP.js";import{b as ge}from"../chunks/input.O5HQZv8O.js";import{c as _e}from"../chunks/index-client.CnYn4uKB.js";var he=R('<img class="avatar image">'),ye=R('<div class="avatar no-image"></div>'),we=R('<div><!> <input type="hidden" name="avatarUrl"> <div><label class="button primary block" for="single"> </label> <input style="visibility: hidden; position:absolute;" type="file" id="single" accept="image/*"></div></div>');function Ue($,p){ae(p,!1);let u=O(p,"size",0,10),m=O(p,"url",4),_=O(p,"supabase"),d=f(null),c=f(!1),s=f();const x=_e(),v=async i=>{try{const{data:t,error:b}=await _().storage.from("avatars").download(i);if(b)throw b;const g=URL.createObjectURL(t);l(d,g)}catch(t){t instanceof Error&&console.log("Error downloading image: ",t.message)}},j=async()=>{try{if(l(c,!0),!a(s)||a(s).length===0)throw new Error("You must select an image to upload.");const i=a(s)[0],t=i.name.split(".").pop(),b=`${Math.random()}.${t}`,{error:g}=await _().storage.from("avatars").upload(b,i);if(g)throw g;m(b),setTimeout(()=>{x("upload")},100)}catch(i){i instanceof Error&&alert(i.message)}finally{l(c,!1)}};te(()=>se(m()),()=>{m()&&v(m())}),re(),le();var E=we(),z=o(E);ce(z,()=>a(d),i=>{var t=he();P(()=>{A(t,"src",a(d)),A(t,"alt",a(d)?"Avatar":"No image"),A(t,"style",`height: ${u()??""}em; width: ${u()??""}em;`)}),F(i,t)},i=>{var t=ye();P(()=>A(t,"style",`height: ${u()??""}em; width: ${u()??""}em;`)),F(i,t)});var h=e(e(z,!0));w(h);var N=e(e(h,!0)),S=o(N),L=o(S);n(S);var k=e(e(S,!0));n(N),n(E),P(()=>{U(h,m()),A(N,"style",`width: ${u()??""}em;`),pe(L,a(c)?"Uploading ...":"Upload"),k.disabled=a(c)}),ge(k,()=>a(s),i=>l(s,i)),be("change",k,j,!1),F($,E),ie()}var xe=R('<h2>Account</h2> <div class="form-widget"><form class="form-widget" method="post" action="?/update"><!> <div><label for="email">Email</label> <input id="email" type="text" disabled></div> <div><label for="fullName">Full Name</label> <input id="fullName" name="fullName" type="text"></div> <div><label for="username">Username</label> <input id="username" name="username" type="text"></div> <div><label for="website">Website</label> <input id="website" name="website" type="url"></div> <div><input type="submit" class="button block primary"></div></form> <form method="post" action="?/signout"><div><button class="button block">Sign Out</button></div></form></div>',1);function je($,p){var H,J,K,Q;ae(p,!1);let u=O(p,"data"),m=O(p,"form"),_=u(),d=f(_.session),c=f(_.supabase),s=f(_.profile),x=f(),v=f(!1),j=((H=a(s))==null?void 0:H.full_name)??"",E=((J=a(s))==null?void 0:J.username)??"",z=((K=a(s))==null?void 0:K.website)??"",h=f(((Q=a(s))==null?void 0:Q.avatar_url)??"");console.log("Session:",a(d)),console.log("Profile:",a(s));const N=()=>(l(v,!0),async()=>{l(v,!1)}),S=()=>(l(v,!0),async({update:r})=>{l(v,!1),r()});te(()=>(a(d),a(c),a(s),se(u())),()=>{(()=>{const r=u();return l(d,r.session),l(c,r.supabase),l(s,r.profile),r})()}),re(),le();var L=xe(),k=ve(L),i=e(e(k,!0)),t=o(i);fe(t,r=>l(x,r),()=>a(x));var b=o(t);Ue(b,{get supabase(){return a(c)},get url(){return a(h)},set url(r){l(h,r)},size:10,$$events:{upload:()=>{a(x).requestSubmit()}},$$legacy:!0});var g=e(e(b,!0)),oe=o(g),T=e(e(oe,!0));w(T),n(g);var q=e(e(g,!0)),ne=o(q),V=e(e(ne,!0));w(V),n(q);var C=e(e(q,!0)),ue=o(C),W=e(e(ue,!0));w(W),n(C);var D=e(e(C,!0)),me=o(D),Y=e(e(me,!0));w(Y),n(D);var B=e(e(D,!0)),I=o(B);w(I),n(B),n(t);var M=e(e(t,!0)),G=o(M),de=o(G);n(G),n(M),n(i),P(()=>{var r,y,X;U(T,a(d).user.email),U(V,((r=m())==null?void 0:r.fullName)??j),U(W,((y=m())==null?void 0:y.username)??E),U(Y,((X=m())==null?void 0:X.website)??z),U(I,a(v)?"Loading...":"Update"),I.disabled=a(v),de.disabled=a(v)}),Z(t,(r,y)=>ee(r,y),()=>N),Z(M,(r,y)=>ee(r,y),()=>S),F($,L),ie()}export{je as component};
