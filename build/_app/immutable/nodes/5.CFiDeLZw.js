import{z as i,A as e,a as k,t as H,B as s,C as we,$ as ye}from"../chunks/disclose-version.mX-FAZ6T.js";import{H as oe,U as ne,V as de,R as F,J as ue,h as a,t as c,f as n,Q as ve}from"../chunks/runtime.Cd5kR4Mq.js";import{e as Ue,c as xe}from"../chunks/svelte-head.w8Cc7TMq.js";import{a as se,e as le}from"../chunks/forms.BbLM5WEZ.js";import{s as z,r as y,a as U}from"../chunks/attributes.CjHmVdtE.js";import{b as Ae}from"../chunks/this.CZAwwDLv.js";import{i as me}from"../chunks/lifecycle.bPVENhTh.js";import{p as L}from"../chunks/props.BmNrInug.js";import{s as Ee}from"../chunks/render.NljB-ERN.js";import{i as Ne}from"../chunks/if.B3c3E52T.js";import{b as $e}from"../chunks/input.Bm04sMYF.js";import{c as Se}from"../chunks/index-client.DQ7ILDiz.js";var ze=H('<img class="avatar image">'),Le=H('<div class="avatar no-image"></div>'),Oe=H('<div><!> <input type="hidden" name="avatarUrl"> <div><label class="button primary block" for="single"> </label> <input style="visibility: hidden; position:absolute;" type="file" id="single" accept="image/*"></div></div>');function Re(P,f){oe(f,!1);let d=L(f,"size",0,10),u=L(f,"url",4),h=L(f,"supabase"),v=c(null),p=c(!1),o=c();const x=Se(),m=async l=>{try{const{data:t,error:_}=await h().storage.from("avatars").download(l);if(_)throw _;const b=URL.createObjectURL(t);n(v,b)}catch(t){t instanceof Error&&console.log("Error downloading image: ",t.message)}},j=async()=>{try{if(n(p,!0),!a(o)||a(o).length===0)throw new Error("You must select an image to upload.");const l=a(o)[0],t=l.name.split(".").pop(),_=`${Math.random()}.${t}`,{error:b}=await h().storage.from("avatars").upload(_,l);if(b)throw b;u(_),setTimeout(()=>{x("upload")},100)}catch(l){l instanceof Error&&alert(l.message)}finally{n(p,!1)}};ne(()=>ve(u()),()=>{u()&&m(u())}),de(),me();var A=Oe(),O=i(A);Ne(O,()=>a(v),l=>{var t=ze();F(()=>{z(t,"src",a(v)),z(t,"alt",a(v)?"Avatar":"No image"),z(t,"style",`height: ${d()??""}em; width: ${d()??""}em;`)}),k(l,t)},l=>{var t=Le();F(()=>z(t,"style",`height: ${d()??""}em; width: ${d()??""}em;`)),k(l,t)});var g=e(e(O,!0));y(g);var E=e(e(g,!0)),N=i(E),R=i(N);s(N);var $=e(e(N,!0));s(E),s(A),F(()=>{U(g,u()),z(E,"style",`width: ${d()??""}em;`),Ee(R,a(p)?"Uploading ...":"Upload"),$.disabled=a(p)}),$e($,()=>a(o),l=>n(o,l)),Ue("change",$,j,!1),k(P,A),ue()}var ke=H('<h4>Hello :)</h4> <div class="head_Line"><h1>Account</h1></div> <div class="avatar svelte-1rc7m50"><!></div> <div class="win_95"><form method="post" action="?/update"><div class="title-bar"><div class="title-bar-text">Account</div></div> <div class="window-content"><p>Account details</p></div> <div><label for="email">Email</label> <input id="email" type="text" disabled></div> <div><label for="fullName">Full Name</label> <input id="fullName" name="fullName" type="text"></div> <div><label for="username">Username</label> <input id="username" name="username" type="text"></div> <div><label for="website">Website</label> <input id="website" name="website" type="url"></div> <br> <div class="window-content"><input type="submit" class="win_95_butt"></div></form> <br> <div class="window-content"><form method="post" action="?/signout"><div><button class="win_95_butt">Sign Out</button></div></form></div></div> <div class="win_95"><a class="win_95_butt" href="/usr_profile">Go to your admin dashboard</a></div>',1);function Qe(P,f){var ee,ae,te,re;oe(f,!1);let d=L(f,"data"),u=L(f,"form"),h=d(),v=c(h.session),p=c(h.supabase),o=c(h.profile),x=c(),m=c(!1),j=((ee=a(o))==null?void 0:ee.full_name)??"",A=((ae=a(o))==null?void 0:ae.username)??"",O=((te=a(o))==null?void 0:te.website)??"",g=c(((re=a(o))==null?void 0:re.avatar_url)??"");console.log("Session:",a(v)),console.log("Profile:",a(o));const E=()=>(n(m,!0),async()=>{n(m,!1)}),N=()=>(n(m,!0),async({update:r})=>{n(m,!1),r()});ne(()=>(a(v),a(p),a(o),ve(d())),()=>{(()=>{const r=d();return n(v,r.session),n(p,r.supabase),n(o,r.profile),r})()}),de(),me();var R=ke();xe(r=>{ye.title="Account"});var $=we(R),l=e(e($,!0));i(l),s(l);var t=e(e(l,!0)),_=i(t);Re(_,{get supabase(){return a(p)},get url(){return a(g)},set url(r){n(g,r)},size:15,$$events:{upload:()=>{a(x).requestSubmit()}},$$legacy:!0}),s(t);var b=e(e(t,!0)),S=i(b);Ae(S,r=>n(x,r),()=>a(x));var q=i(S);i(q),s(q);var B=e(e(q,!0));i(B),s(B);var C=e(e(B,!0)),ce=i(C),Q=e(e(ce,!0));y(Q),s(C);var D=e(e(C,!0)),fe=i(D),T=e(e(fe,!0));y(T),s(D);var G=e(e(D,!0)),pe=i(G),V=e(e(pe,!0));y(V),s(G);var I=e(e(G,!0)),be=i(I),W=e(e(be,!0));y(W),s(I);var _e=e(e(I,!0)),Y=e(e(_e,!0)),J=i(Y);y(J),s(Y),s(S);var he=e(e(S,!0)),K=e(e(he,!0)),M=i(K),X=i(M),ge=i(X);s(X),s(M),s(K),s(b);var Z=e(e(b,!0));i(Z),s(Z),F(()=>{var r,w,ie;U(Q,a(v).user.email),U(T,((r=u())==null?void 0:r.fullName)??j),U(V,((w=u())==null?void 0:w.username)??A),U(W,((ie=u())==null?void 0:ie.website)??O),U(J,a(m)?"Loading...":"Update"),J.disabled=a(m),ge.disabled=a(m)}),se(S,(r,w)=>le(r,w),()=>E),se(M,(r,w)=>le(r,w),()=>N),k(P,R),ue()}export{Qe as component};
