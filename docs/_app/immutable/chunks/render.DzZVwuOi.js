import{m as C,n as R,o as A,q as H,u as M,v as k,w as E,l as Y,e as j,g as q,x as b,i as g,j as D,y as B,k as v,z as P,A as $,B as z,C as F,D as G,E as W,b as J,F as K,p as Q,h as T,a as U,G as X}from"./runtime.BP3KDw59.js";import{r as Z}from"./svelte-head.BBJjiWMm.js";import{b as x}from"./disclose-version.CpfBv6RL.js";const rr=new Set,O=new Set;function m(r){var N;var e=this,s=e.ownerDocument,_=r.type,o=((N=r.composedPath)==null?void 0:N.call(r))||[],t=o[0]||r.target,d=0,h=r.__root;if(h){var u=o.indexOf(h);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var l=o.indexOf(e);if(l===-1)return;u<=l&&(d=u)}if(t=o[d]||r.target,t!==e){C(r,"currentTarget",{configurable:!0,get(){return t||s}});var w=M,i=k;R(null),A(null);try{for(var a,n=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var c=t["__"+_];if(c!==void 0&&!t.disabled)if(H(c)){var[L,...V]=c;L.apply(t,[r,...V])}else c.call(t,r)}catch(y){a?n.push(y):a=y}if(r.cancelBubble||f===e||f===null)break;t=f}if(a){for(let y of n)queueMicrotask(()=>{throw y});throw a}}finally{r.__root=e,delete r.currentTarget,R(w),A(i)}}}const er=["touchstart","touchmove"];function tr(r){return er.includes(r)}function or(r,e){var s=e==null?"":typeof e=="object"?e+"":e;s!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=s,r.nodeValue=s==null?"":s+"")}function ar(r,e){return I(r,e)}function fr(r,e){E(),e.intro=e.intro??!1;const s=e.target,_=T,o=v;try{for(var t=Y(s);t&&(t.nodeType!==8||t.data!==j);)t=q(t);if(!t)throw b;g(!0),D(t),B();const d=I(r,{...e,anchor:t});if(v===null||v.nodeType!==8||v.data!==P)throw $(),b;return g(!1),d}catch(d){if(d===b)return e.recover===!1&&z(),E(),F(s),g(!1),ar(r,e);throw d}finally{g(_),D(o),Z()}}const p=new Map;function I(r,{target:e,anchor:s,props:_={},events:o,context:t,intro:d=!0}){E();var h=new Set,u=i=>{for(var a=0;a<i.length;a++){var n=i[a];if(!h.has(n)){h.add(n);var f=tr(n);e.addEventListener(n,m,{passive:f});var c=p.get(n);c===void 0?(document.addEventListener(n,m,{passive:f}),p.set(n,1)):p.set(n,c+1)}}};u(G(rr)),O.add(u);var l=void 0,w=W(()=>{var i=s??e.appendChild(J());return K(()=>{if(t){Q({});var a=X;a.c=t}o&&(_.$$events=o),T&&x(i,null),l=r(i,_)||{},T&&(k.nodes_end=v),t&&U()}),()=>{var f;for(var a of h){e.removeEventListener(a,m);var n=p.get(a);--n===0?(document.removeEventListener(a,m),p.delete(a)):p.set(a,n)}O.delete(u),S.delete(l),i!==s&&((f=i.parentNode)==null||f.removeChild(i))}});return S.set(l,w),l}let S=new WeakMap;function dr(r){const e=S.get(r);e&&e()}export{fr as h,ar as m,or as s,dr as u};