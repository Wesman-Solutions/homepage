import{Y as x,Z as H,_ as K,$ as m,a0 as V,V as h,a1 as c,a2 as N,P as g,v as q,a3 as z,a4 as J,q as Q,h as L,y as W,d as X,a5 as p,a6 as ee,j as ae,i as Y,a7 as B,F as C,a8 as U,k as re,I as ne,a9 as te,aa as fe,ab as ie,ac as se,ad as ue,ae as le,o as j,af as ve,ag as _e,ah as de,N as G,S as k,ai as ce,u as oe,aj as ye,ak as be,U as he,G as F,M as ge}from"./runtime.BP3KDw59.js";function T(t,s=null,y){if(typeof t!="object"||t===null||x in t)return t;const b=J(t);if(b!==H&&b!==K)return t;var i=new Map,l=Q(t),o=m(0);l&&i.set("length",m(t.length));var d;return new Proxy(t,{defineProperty(r,e,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&V();var n=i.get(e);return n===void 0?(n=m(a.value),i.set(e,n)):h(n,T(a.value,d)),!0},deleteProperty(r,e){var a=i.get(e);if(a===void 0)e in r&&i.set(e,m(c));else{if(l&&typeof e=="string"){var n=i.get("length"),f=Number(e);Number.isInteger(f)&&f<n.v&&h(n,f)}h(a,c),Z(o)}return!0},get(r,e,a){var _;if(e===x)return t;var n=i.get(e),f=e in r;if(n===void 0&&(!f||(_=N(r,e))!=null&&_.writable)&&(n=m(T(f?r[e]:c,d)),i.set(e,n)),n!==void 0){var u=g(n);return u===c?void 0:u}return Reflect.get(r,e,a)},getOwnPropertyDescriptor(r,e){var a=Reflect.getOwnPropertyDescriptor(r,e);if(a&&"value"in a){var n=i.get(e);n&&(a.value=g(n))}else if(a===void 0){var f=i.get(e),u=f==null?void 0:f.v;if(f!==void 0&&u!==c)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return a},has(r,e){var u;if(e===x)return!0;var a=i.get(e),n=a!==void 0&&a.v!==c||Reflect.has(r,e);if(a!==void 0||q!==null&&(!n||(u=N(r,e))!=null&&u.writable)){a===void 0&&(a=m(n?T(r[e],d):c),i.set(e,a));var f=g(a);if(f===c)return!1}return n},set(r,e,a,n){var I;var f=i.get(e),u=e in r;if(l&&e==="length")for(var _=a;_<f.v;_+=1){var P=i.get(_+"");P!==void 0?h(P,c):_ in r&&(P=m(c),i.set(_+"",P))}f===void 0?(!u||(I=N(r,e))!=null&&I.writable)&&(f=m(void 0),h(f,T(a,d)),i.set(e,f)):(u=f.v!==c,h(f,T(a,d)));var E=Reflect.getOwnPropertyDescriptor(r,e);if(E!=null&&E.set&&E.set.call(n,a),!u){if(l&&typeof e=="string"){var R=i.get("length"),w=Number(e);Number.isInteger(w)&&w>=R.v&&h(R,w+1)}Z(o)}return!0},ownKeys(r){g(o);var e=Reflect.ownKeys(r).filter(f=>{var u=i.get(f);return u===void 0||u.v!==c});for(var[a,n]of i)n.v!==c&&!(a in r)&&e.push(a);return e},setPrototypeOf(){z()}})}function Z(t,s=1){h(t,t.v+s)}function me(t){throw new Error("lifecycle_outside_component")}function Re(t,s,y,b=null,i=!1){L&&W();var l=t,o=null,d=null,r=null,e=i?ne:0;X(()=>{if(r===(r=!!s()))return;let a=!1;if(L){const n=l.data===p;r===n&&(l=ee(),ae(l),Y(!1),a=!0)}r?(o?B(o):o=C(()=>y(l)),d&&U(d,()=>{d=null})):(d?B(d):b&&(d=C(()=>b(l))),o&&U(o,()=>{o=null})),a&&Y(!0)},e),L&&(l=re)}function $(t){for(var s=q,y=q;s!==null&&!(s.f&(ue|le));)s=s.parent;try{return j(s),t()}finally{j(y)}}function we(t,s,y,b){var M;var i=(y&ve)!==0,l=(y&_e)!==0,o=(y&de)!==0,d=(y&be)!==0,r=t[s],e=(M=N(t,s))==null?void 0:M.set,a=b,n=!0,f=!1,u=()=>(f=!0,n&&(n=!1,d?a=G(b):a=b),a);r===void 0&&b!==void 0&&(e&&l&&te(),r=u(),e&&e(r));var _;if(l)_=()=>{var v=t[s];return v===void 0?u():(n=!0,f=!1,v)};else{var P=$(()=>(i?k:ce)(()=>t[s]));P.f|=fe,_=()=>{var v=g(P);return v!==void 0&&(a=void 0),v===void 0?a:v}}if(!(y&ie))return _;if(e){var E=t.$$legacy;return function(v,S){return arguments.length>0?((!l||!S||E)&&e(S?_():v),v):_()}}var R=!1,w=!1,I=he(r),O=$(()=>k(()=>{var v=_(),S=g(I),A=oe;return R||v===void 0&&A.f&ye?(R=!1,w=!0,S):(w=!1,I.v=v)}));return i||(O.equals=se),function(v,S){var A=g(O);if(arguments.length>0){const D=S?g(O):l&&o?T(v):v;return O.equals(D)||(R=!0,h(I,D),f&&a!==void 0&&(a=D),g(O)),v}return A}}function Ie(t){F===null&&me(),F.l!==null?Pe(F).m.push(t):ge(()=>{const s=G(t);if(typeof s=="function")return s})}function Pe(t){var s=t.l;return s.u??(s.u={a:[],b:[],m:[]})}export{T as a,Re as i,Ie as o,we as p};