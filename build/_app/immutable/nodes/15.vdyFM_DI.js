import{h as je,f as Se,s as e,c as u,a as T,t as P,F as We,r as o,D as ae}from"../chunks/disclose-version.Bjom2byz.js";import{r as Fe,Q as Ye,q as Ne,e as Ie,p as Ze,t as re,b as et,g as r,m as pe,$ as Te,a0 as m,s as W,X as B,H as tt}from"../chunks/runtime.Dc7r91df.js";import{s as at}from"../chunks/render.BHOMxFaA.js";import{i as be}from"../chunks/if.B5nmp2JQ.js";import{e as $e,i as rt}from"../chunks/each.BTuGL9tM.js";import{a as Ae,e as Ce}from"../chunks/forms.CjRnhFMn.js";import{b as lt,r as f,a as ot}from"../chunks/attributes.BbZqrIUm.js";import{e as fe}from"../chunks/events.edzBgarR.js";import{g as De,i as Le}from"../chunks/proxy.CbjV5KeS.js";import{i as ut}from"../chunks/lifecycle.378jPWlX.js";import{p as it}from"../chunks/props.Bw7bR6zp.js";function ge(a,_,l,s=l){a.addEventListener(_,l);const i=a.__on_r;i?a.__on_r=()=>{i(),s()}:a.__on_r=s,lt()}function c(a,_,l){ge(a,"input",()=>{l(Ge(a)?Pe(a.value):a.value)}),Fe(()=>{var s=_();if(je&&a.defaultValue!==a.value){l(a.value);return}Ge(a)&&s===Pe(a.value)||a.type==="date"&&!s&&!a.value||(a.value=s??"")})}const ce=new Set;function le(a,_,l,s,i){var g=l.getAttribute("type")==="checkbox",p=a;let oe=!1;if(_!==null)for(var h of _)p=p[h]??(p[h]=[]);p.push(l),ge(l,"change",()=>{var t=l.__value;g&&(t=Ee(p,t,l.checked)),i(t)},()=>i(g?[]:null)),Fe(()=>{var t=s();if(je&&l.defaultChecked!==l.checked){oe=!0;return}g?(t=t||[],l.checked=De(t).includes(De(l.__value))):l.checked=Le(l.__value,t)}),Ye(()=>{var t=p.indexOf(l);t!==-1&&p.splice(t,1)}),ce.has(p)||(ce.add(p),Ne(()=>{p.sort((t,x)=>t.compareDocumentPosition(x)===4?-1:1),ce.delete(p)})),Ne(()=>{if(oe){var t;if(g)t=Ee(p,t,l.checked);else{var x=p.find(ue=>ue.checked);t=x==null?void 0:x.__value}i(t)}})}function Ee(a,_,l){for(var s=new Set,i=0;i<a.length;i+=1)a[i].checked&&s.add(a[i].__value);return l||s.delete(_),Array.from(s)}function Ge(a){var _=a.type;return _==="number"||_==="range"}function Pe(a){return a===""?null:+a}function Oe(a,_,l){if(a.multiple)return _t(a,_);for(var s of a.options){var i=Y(s);if(Le(i,_)){s.selected=!0;return}}(!l||_!==void 0)&&(a.selectedIndex=-1)}function nt(a,_){Ie(()=>{var l=new MutationObserver(()=>{var s=a.__value;Oe(a,s)});return l.observe(a,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{l.disconnect()}})}function Me(a,_,l){var s=!0;ge(a,"change",()=>{var i;if(a.multiple)i=[].map.call(a.querySelectorAll(":checked"),Y);else{var g=a.querySelector(":checked");i=g&&Y(g)}l(i)}),Ie(()=>{var i=_();if(Oe(a,i,s),s&&i===void 0){var g=a.querySelector(":checked");g!==null&&(i=Y(g),l(i))}a.__value=i,s=!1}),nt(a)}function _t(a,_){for(var l of a.options)l.selected=~_.indexOf(Y(l))}function Y(a){return"__value"in a?a.__value:a.value}var st=P('<form method="post" action="?/submit" enctype="multipart/form-data"><input type="hidden" name="operation" value="new"> <label>Type of text: <br> <label><input type="radio" name="type_of_text"> Blog</label> <label><input type="radio" name="type_of_text"> Gallery</label></label> <br> <label>Images: <input type="file" name="images" id="image-upload" multiple></label> <br> <label>Date Made: <input type="date" name="date_made" required></label> <br> <label>Text Name: <input type="text" name="text_name" placeholder="Name of text" required></label> <br> <label>Author: <input type="text" name="author" placeholder="Name of author" required></label> <br> <label>Categories: <input type="text" name="categories" placeholder="Categories" required></label> <br> <label>Status: <input type="text" name="status" placeholder="Status" required></label> <br> <label>Text: <input type="text" name="text_guts" placeholder="Text guts" required></label> <br> <button type="submit">Submit</button></form>'),vt=P("<option> </option>"),dt=P('<div><img alt="Vaporwave" class="svelte-w2y9nv"> <button type="button">Delete</button></div>'),mt=P("<div></div>"),pt=P("<p>No images found for this post.</p>"),bt=P('<form method="post" action="?/submit"><input type="hidden" name="operation" value="modify"> <select name="id"><option>-- select a post --</option><!></select> <br> <!> <label>Type of text: <br> <label><input type="radio" name="type_of_text"> Blog</label> <br> <label><input type="radio" name="type_of_text"> Gallery</label></label> <br> <label>Date Made: <input type="date" name="date_made" required></label> <label><br> Text Name: <input type="text" name="text_name" placeholder="Name of text" required></label> <label>Author: <input type="text" name="author" placeholder="Name of author" required></label> <label>Categories: <input type="text" name="categories" placeholder="Categories" required></label> <label>Status: <input type="text" name="status" placeholder="Status" required></label> <label>Text: <input type="text" name="text_guts" placeholder="Text guts" required></label> <br> <div class="window-content"><button class="win_95_butt" type="submit">Submit</button></div></form>'),ft=P('<br> <br> <br> <div class="win_95"><select><option>-- select an operation --</option><option>New Post</option><option>Modify Existing</option></select> <!></div>',1);function $t(a,_){Ze(_,!1);const l=[];let s=it(_,"data"),{existingPosts:i,session:g,supabase:p,profile:oe}=s(),h=pe([]),t=pe({id:"",date_made:"",text_name:"",author:"",categories:"",status:"",text_guts:"",type_of_text:"",images:[]}),x=pe("");async function ue(){const d=i.find(b=>b.id===r(t).id);if(d){W(t,{...r(t),date_made:d.date_made,text_name:d.text_name,author:d.author,categories:d.categories,status:d.status,text_guts:d.text_guts,type_of_text:d.type_of_text.toString()});const{data:b,error:q}=await p.storage.from("Gallery").list(`${r(t).text_name}/`,{limit:100});if(q){console.error("Error fetching images:",q.message);return}b&&b.length>0?W(h,b.map((w,N)=>{const $=`https://auiqlbvzsvvsjvpijukm.supabase.co/storage/v1/object/public/Gallery/${r(t).text_name}/${w.name}`;return{id:N,url:$}})):W(h,[])}else console.error("Selected post not found")}async function Be(d){const b=d.split("/").pop(),{error:q}=await p.storage.from("Gallery").remove([`${r(t).text_name}/${b}`]);q?console.error("Error deleting image:",q.message):(W(h,r(h).filter(w=>w.url!==d)),console.log(`Successfully deleted ${b}`))}function Ve(d){m(t,r(t).images=Array.from(d.target.files))}ut();var xe=ft(),ze=Se(xe),He=e(e(ze,!0)),Qe=e(e(He,!0)),he=e(e(Qe,!0)),Z=u(he);re(()=>{r(x),Te(()=>{})});var ie=u(Z);ie.value=((ie.__value="")==null,"");var ne=e(ie);ne.value=(ne.__value="new")==null?"":"new";var ye=e(ne);ye.value=(ye.__value="modify")==null?"":"modify",o(Z);var Re=e(e(Z,!0));be(Re,()=>r(x)==="new",d=>{var b=st(),q=u(b),w=e(e(q,!0)),N=e(u(w)),$=e(e(N,!0)),y=u($);f(y),y.value=(y.__value="1")==null?"":"1",ae(),o($);var M=e(e($,!0)),j=u(M);f(j),j.value=(j.__value="2")==null?"":"2",ae(),o(M),o(w);var _e=e(e(w,!0)),F=e(e(_e,!0)),V=e(u(F));o(F);var se=e(e(F,!0)),A=e(e(se,!0)),C=e(u(A));f(C),o(A);var ve=e(e(A,!0)),I=e(e(ve,!0)),D=e(u(I));f(D),o(I);var de=e(e(I,!0)),E=e(e(de,!0)),z=e(u(E));f(z),o(E);var H=e(e(E,!0)),Q=e(e(H,!0)),R=e(u(Q));f(R),o(Q);var X=e(e(Q,!0)),L=e(e(X,!0)),O=e(u(L));f(O),o(L);var ee=e(e(L,!0)),G=e(e(ee,!0)),J=e(u(G));f(J),o(G);var K=e(e(G,!0));e(e(K,!0)),o(b),Ae(b,v=>Ce(v)),le(l,[],y,()=>r(t).type_of_text,v=>m(t,r(t).type_of_text=v)),le(l,[],j,()=>r(t).type_of_text,v=>m(t,r(t).type_of_text=v)),fe("change",V,Ve,!1),c(C,()=>r(t).date_made,v=>m(t,r(t).date_made=v)),c(D,()=>r(t).text_name,v=>m(t,r(t).text_name=v)),c(z,()=>r(t).author,v=>m(t,r(t).author=v)),c(R,()=>r(t).categories,v=>m(t,r(t).categories=v)),c(O,()=>r(t).status,v=>m(t,r(t).status=v)),c(J,()=>r(t).text_guts,v=>m(t,r(t).text_guts=v)),T(d,b)},d=>{var b=We(),q=Se(b);be(q,()=>r(x)==="modify",w=>{var N=bt(),$=u(N),y=e(e($,!0));re(()=>{r(t).id,Te(()=>{})});var M=u(y);M.value=((M.__value="")==null,"");var j=e(M);$e(j,1,()=>i,rt,(n,k,te)=>{var S=vt(),me={},U=u(S);o(S),re(()=>{me!==(me=B(k).id)&&(S.value=(S.__value=B(k).id)==null?"":B(k).id),at(U,B(k).text_name)}),T(n,S)}),o(y);var _e=e(e(y,!0)),F=e(e(_e,!0));be(F,()=>r(h).length>0,n=>{var k=mt();$e(k,15,()=>r(h),(te,S)=>te.id,(te,S,me)=>{var U=dt(),qe=u(U),Je=e(e(qe,!0)),Ke=tt(()=>()=>Be(B(S).url));o(U),re(()=>ot(qe,"src",B(S).url)),fe("click",Je,function(...Ue){var we;return(we=r(Ke))==null?void 0:we.apply(this,Ue)},!1),T(te,U)}),o(k),T(n,k)},n=>{var k=pt();T(n,k)});var V=e(e(F,!0)),se=e(u(V)),A=e(e(se,!0)),C=u(A);f(C),C.value=(C.__value="1")==null?"":"1",ae(),o(A);var ve=e(e(A,!0)),I=e(e(ve,!0)),D=u(I);f(D),D.value=(D.__value="2")==null?"":"2",ae(),o(I),o(V);var de=e(e(V,!0)),E=e(e(de,!0)),z=e(u(E));f(z),o(E);var H=e(e(E,!0)),Q=u(H),R=e(e(Q,!0));f(R),o(H);var X=e(e(H,!0)),L=e(u(X));f(L),o(X);var O=e(e(X,!0)),ee=e(u(O));f(ee),o(O);var G=e(e(O,!0)),J=e(u(G));f(J),o(G);var K=e(e(G,!0)),v=e(u(K));f(v),o(K);var Xe=e(e(K,!0)),ke=e(e(Xe,!0));u(ke),o(ke),o(N),Ae(N,n=>Ce(n)),Me(y,()=>r(t).id,n=>m(t,r(t).id=n)),fe("change",y,ue,!1),le(l,[],C,()=>r(t).type_of_text,n=>m(t,r(t).type_of_text=n)),le(l,[],D,()=>r(t).type_of_text,n=>m(t,r(t).type_of_text=n)),c(z,()=>r(t).date_made,n=>m(t,r(t).date_made=n)),c(R,()=>r(t).text_name,n=>m(t,r(t).text_name=n)),c(L,()=>r(t).author,n=>m(t,r(t).author=n)),c(ee,()=>r(t).categories,n=>m(t,r(t).categories=n)),c(J,()=>r(t).status,n=>m(t,r(t).status=n)),c(v,()=>r(t).text_guts,n=>m(t,r(t).text_guts=n)),T(w,N)},null,!0),T(d,b)}),o(he),Me(Z,()=>r(x),d=>W(x,d)),T(a,xe),et()}export{$t as component};
