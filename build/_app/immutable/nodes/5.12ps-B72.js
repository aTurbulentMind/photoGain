import{f as le,s as e,c as t,a as oe,t as ne,$ as de,r as i}from"../chunks/disclose-version.Bjom2byz.js";import{p as ue,m as u,g as r,l as ve,a as me,t as pe,b as fe,s,d as _e}from"../chunks/runtime.Dc7r91df.js";import{h as ce}from"../chunks/svelte-head.DGOhF-BL.js";import{a as J,e as K}from"../chunks/forms.CjRnhFMn.js";import{r as v,s as m}from"../chunks/attributes.BbZqrIUm.js";import{b as be}from"../chunks/this.DoPSxct7.js";import{i as he}from"../chunks/lifecycle.378jPWlX.js";import{p as M}from"../chunks/props.Bw7bR6zp.js";var we=ne('<h4>Hello :)</h4> <div class="head_Line"><h1>Account</h1></div> <div class="win_95"><form method="post" action="?/update"><div class="title-bar"><div class="title-bar-text">Account</div></div> <div class="window-content"><p>Account details</p></div> <div><label for="email">Email</label> <input id="email" type="text" disabled></div> <div><label for="fullName">Full Name</label> <input id="fullName" name="fullName" type="text"></div> <div><label for="username">Username</label> <input id="username" name="username" type="text"></div> <div><label for="website">Website</label> <input id="website" name="website" type="url"></div> <br> <div class="window-content"><input type="submit" class="win_95_butt"></div></form> <br> <div class="window-content"><form method="post" action="?/signout"><div><button class="win_95_butt">Sign Out</button></div></form></div></div> <div class="win_95"><a class="win_95_butt" href="/usr_profile">Go to your admin dashboard</a></div>',1);function Oe(Q,f){var B,C,D;ue(f,!1);let _=M(f,"data"),c=M(f,"form"),b=_(),p=u(b.session),O=u(b.supabase),o=u(b.profile),U=u(),l=u(!1),R=((B=r(o))==null?void 0:B.full_name)??"",T=((C=r(o))==null?void 0:C.username)??"",V=((D=r(o))==null?void 0:D.website)??"";console.log("Session:",r(p)),console.log("Profile:",r(o));const X=()=>(s(l,!0),async()=>{s(l,!1)}),Y=()=>(s(l,!0),async({update:a})=>{s(l,!1),a()});ve(()=>(r(p),r(O),r(o),_e(_())),()=>{(()=>{const a=_();return s(p,a.session),s(O,a.supabase),s(o,a.profile),a})()}),me(),he();var E=we();ce(a=>{de.title="Account"});var Z=le(E),h=e(e(Z,!0));t(h),i(h);var w=e(e(h,!0)),d=t(w);be(d,a=>s(U,a),()=>r(U));var g=t(d);t(g),i(g);var y=e(e(g,!0));t(y),i(y);var N=e(e(y,!0)),$=t(N),G=e(e($,!0));v(G),i(N);var x=e(e(N,!0)),ee=t(x),H=e(e(ee,!0));v(H),i(x);var A=e(e(x,!0)),ae=t(A),P=e(e(ae,!0));v(P),i(A);var S=e(e(A,!0)),te=t(S),W=e(e(te,!0));v(W),i(S);var ie=e(e(S,!0)),j=e(e(ie,!0)),F=t(j);v(F),i(j),i(d);var re=e(e(d,!0)),k=e(e(re,!0)),L=t(k),q=t(L),se=t(q);i(q),i(L),i(k),i(w);var z=e(e(w,!0));t(z),i(z),pe(()=>{var a,n,I;m(G,r(p).user.email),m(H,((a=c())==null?void 0:a.fullName)??R),m(P,((n=c())==null?void 0:n.username)??T),m(W,((I=c())==null?void 0:I.website)??V),m(F,r(l)?"Loading...":"Update"),F.disabled=r(l),se.disabled=r(l)}),J(d,(a,n)=>K(a,n),()=>X),J(L,(a,n)=>K(a,n),()=>Y),oe(Q,E),fe()}export{Oe as component};