import{h as t}from"./disclose-version.R2tMHkCf.js";import{Z as i,_ as u}from"./runtime.B9Tkknyz.js";let _=!1;function d(){_||(_=!0,document.addEventListener("reset",r=>{Promise.resolve().then(()=>{var s;if(!r.defaultPrevented)for(const e of r.target.elements)(s=e.__on_r)==null||s.call(e)})},{capture:!0}))}function v(r){if(t){var s=!1,e=()=>{if(!s){if(s=!0,r.hasAttribute("value")){var f=r.value;o(r,"value",null),r.value=f}if(r.hasAttribute("checked")){var a=r.checked;o(r,"checked",null),r.checked=a}}};r.__on_r=e,i(e),d()}}function l(r,s){var e=r.__attributes??(r.__attributes={});e.value!==(e.value=s)&&(r.value=s)}function o(r,s,e,f){e=e==null?null:e+"";var a=r.__attributes??(r.__attributes={});t&&(a[s]=r.getAttribute(s),s==="src"||s==="href"||s==="srcset")||a[s]!==(a[s]=e)&&(s==="loading"&&(r[u]=e),e===null?r.removeAttribute(s):r.setAttribute(s,e))}export{o as a,d as b,v as r,l as s};
