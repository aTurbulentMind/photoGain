import{P as L,q as O,u as p,v as b}from"./disclose-version.R2tMHkCf.js";import{j as T,B as U,L as w,C as B,g as u,s as C,u as M,D as h,E as N,m as Y,F as $}from"./runtime.B9Tkknyz.js";function z(n,s,f,c){var E;var I=(f&O)!==0,o=(f&p)!==0,q=(f&b)!==0,v=n[s],t=(E=T(n,s))==null?void 0:E.set,_=c,P=!0,S=()=>(q&&P&&(P=!1,_=M(c)),_);v===void 0&&c!==void 0&&(t&&o&&U(),v=S(),t&&t(v));var r;if(o)r=()=>{var e=n[s];return e===void 0?S():(P=!0,e)};else{var g=(I?h:N)(()=>n[s]);g.f|=w,r=()=>{var e=u(g);return e!==void 0&&(_=void 0),e===void 0?_:e}}if(!(f&L))return r;if(t){var A=n.$$legacy;return function(e,a){return arguments.length>0?((!o||!a||A)&&t(a?r():e),e):r()}}var l=!1,m=!1,d=Y(v),i=h(()=>{var e=r(),a=u(d);return l?(l=!1,m=!0,a):(m=!1,d.v=e)});return I||(i.equals=B),function(e,a){var D=u(i);if($&&(l=m,r(),u(d)),arguments.length>0){const R=a?u(i):e;return i.equals(R)||(l=!0,C(d,R),u(i)),e}return D}}export{z as p};