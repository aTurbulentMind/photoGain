import{e as T,u as k,r as H,Q as M,X as D}from"./runtime.Cd5kR4Mq.js";import{p as F,i as S,a as C}from"./entry.Dxgcwqvz.js";function U(a,n,o){T(()=>{var r=k(()=>n(a,o==null?void 0:o())||{});if(o&&(r!=null&&r.update)){var t=!1,c={};H(()=>{var i=o();M(i),t&&D(c,i)&&(c=i,r.update(i))}),t=!0}if(r!=null&&r.destroy)return()=>r.destroy()})}function N(a){const n=JSON.parse(a);return n.data&&(n.data=F(n.data)),n}function m(a){return HTMLElement.prototype.cloneNode.call(a)}function j(a,n=()=>{}){const o=async({action:t,result:c,reset:i=!0,invalidateAll:s=!0})=>{c.type==="success"&&(i&&HTMLFormElement.prototype.reset.call(a),s&&await S()),(location.origin+location.pathname===t.origin+t.pathname||c.type==="redirect"||c.type==="error")&&C(c)};async function r(t){var b,y,h,w,A;if(((b=t.submitter)!=null&&b.hasAttribute("formmethod")?t.submitter.formMethod:m(a).method)!=="post")return;t.preventDefault();const i=new URL((y=t.submitter)!=null&&y.hasAttribute("formaction")?t.submitter.formAction:m(a).action),s=(h=t.submitter)!=null&&h.hasAttribute("formenctype")?t.submitter.formEnctype:m(a).enctype,u=new FormData(a),f=(w=t.submitter)==null?void 0:w.getAttribute("name");f&&u.append(f,((A=t.submitter)==null?void 0:A.getAttribute("value"))??"");const d=new AbortController;let p=!1;const L=await n({action:i,cancel:()=>p=!0,controller:d,formData:u,formElement:a,submitter:t.submitter})??o;if(p)return;let l;try{const e=new Headers({accept:"application/json","x-sveltekit-action":"true"});s!=="multipart/form-data"&&e.set("Content-Type",/^(:?application\/x-www-form-urlencoded|text\/plain)$/.test(s)?s:"application/x-www-form-urlencoded");const x=s==="multipart/form-data"?u:new URLSearchParams(u),E=await fetch(i,{method:"POST",headers:e,cache:"no-store",body:x,signal:d.signal});l=N(await E.text()),l.type==="error"&&(l.status=E.status)}catch(e){if((e==null?void 0:e.name)==="AbortError")return;l={type:"error",error:e}}L({action:i,formData:u,formElement:a,update:e=>o({action:i,result:l,reset:e==null?void 0:e.reset,invalidateAll:e==null?void 0:e.invalidateAll}),result:l})}return HTMLFormElement.prototype.addEventListener.call(a,"submit",r),{destroy(){HTMLFormElement.prototype.removeEventListener.call(a,"submit",r)}}}export{U as a,j as e};
