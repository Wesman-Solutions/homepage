import{b as B,e as st,a as n,t as i,c as it}from"../chunks/disclose-version.CpfBv6RL.js";import{d as mt,h as T,y as U,F as lt,k as F,g as ct,A as _t,x as vt,j as dt,l as ft,K as gt,ar as ht,a4 as J,as as ut,p as q,t as d,a as Q,V as pt,P as yt,at as wt,f as S,s,au as xt}from"../chunks/runtime.BP3KDw59.js";import{i as X,s as bt,a as kt,p as Lt}from"../chunks/stores.BD9mncz8.js";import{o as St,p as _,i as v}from"../chunks/index-client.CLIylBry.js";import{h as Nt}from"../chunks/svelte-head.BBJjiWMm.js";function Ot(e,t,a,r,f){var m=e,y="",w;mt(()=>{if(y===(y=t()??"")){T&&U();return}w!==void 0&&(gt(w),w=void 0),y!==""&&(w=lt(()=>{if(T){F.data;for(var u=U(),k=u;u!==null&&(u.nodeType!==8||u.data!=="");)k=u,u=ct(u);if(u===null)throw _t(),vt;B(F,k),m=dt(u);return}var O=y+"",A=st(O);B(ft(A),A.lastChild),m.before(A)}))})}function At(e,t,a,r,f){var w;T&&U();var m=(w=t.$$slots)==null?void 0:w[a],y=!1;m===!0&&(m=t.children,y=!0),m===void 0||m(e,y?()=>r:r)}function c(e,t,a,r){var f=e.__attributes??(e.__attributes={});T&&(f[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||f[t]!==(f[t]=a)&&(t==="loading"&&(e[ht]=a),a==null?e.removeAttribute(t):typeof a!="string"&&Rt(e).includes(t)?e[t]=a:e.setAttribute(t,a))}var V=new Map;function Rt(e){var t=V.get(e.nodeName);if(t)return t;V.set(e.nodeName,t=[]);for(var a,r=J(e),f=Element.prototype;f!==r;){a=ut(r);for(var m in a)a[m].set&&t.push(m);r=J(r)}return t}function Tt(e,t,a){if(a){if(e.classList.contains(t))return;e.classList.add(t)}else{if(!e.classList.contains(t))return;e.classList.remove(t)}}var jt=i('<main class="w-full h-[100vh] overflow-hidden flex flex-col justify-center items-center gap-2 svelte-x8kha6"><h1 class="text-7xl font-title font-bold svelte-x8kha6">Wesman<br> Solutions</h1> <p class="first-line:text-gray-400 svelte-x8kha6">Tailor-made SaaS solutions for everyone</p> <a href="mailto:contact@wesmansolutions.com" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-8 svelte-x8kha6">Contact Us</a></main>');function It(e,t){q(t,!1);let a=wt(!1);St(()=>{pt(a,!0)}),X();var r=jt();d(()=>Tt(r,"unviewed",!yt(a))),n(e,r),Q()}var Ut=i('<meta name="robots">'),Ct=i('<meta name="robots">'),Et=i('<!> <link rel="canonical">',1),Gt=i('<meta name="description">'),Mt=i('<meta name="keywords">'),Wt=i('<meta name="author">'),Dt=i('<meta property="og:site_name">'),Ht=i('<meta property="og:url"> <meta property="og:type" content="website"> <meta property="og:title">',1),Kt=i('<meta property="og:description">'),Pt=i('<meta property="og:image">'),Yt=i('<meta property="og:logo">'),zt=i("<!> <!> <!> <!> <!>",1),Bt=i('<meta name="twitter:card" content="summary_large_image"> <meta property="twitter:domain"> <meta property="twitter:url"> <meta name="twitter:title">',1),Ft=i('<meta name="twitter:description">'),Jt=i('<meta name="twitter:image">'),Vt=i("<!> <!> <!>",1),qt=i("<!> <!> <!> <!> <!> <!> <!> <!>",1);function Qt(e,t){q(t,!1);const a=bt(),r=()=>kt(Lt,"$page",a);let f=_(t,"title",8,""),m=_(t,"description",8,""),y=_(t,"keywords",8,""),w=_(t,"canonical",8,""),u=_(t,"siteName",8,""),k=_(t,"imageURL",8,""),O=_(t,"logo",8,""),A=_(t,"author",8,""),C=_(t,"name",8,""),E=_(t,"index",8,!0),Z=_(t,"twitter",8,!0),$=_(t,"openGraph",8,!0),tt=_(t,"schemaOrg",8,!1),j=_(t,"schemaType",24,()=>["Person","Organization"]),G=_(t,"socials",24,()=>[]),et=_(t,"jsonld",24,()=>({})),I={"@context":"https://schema.org","@type":j().length>1?j():j()[0],name:C(),url:r().url.origin,image:k(),logo:{"@type":"ImageObject",url:O(),width:48,height:48},sameAs:G()};I={...I,...et()};let at=`<script type="application/ld+json">${JSON.stringify(I)}<\/script>`;X(),Nt(rt=>{var M=qt(),W=S(M);v(W,()=>f()!=="",h=>{var o=Et(),x=S(o);v(x,k,L=>{var g=Ut();d(()=>c(g,"content",E()?"index, follow, max-image-preview:large":"noindex")),n(L,g)},L=>{var g=Ct();d(()=>c(g,"content",E()?"index, follow":"noindex")),n(L,g)});var N=s(x,2);d(()=>{xt.title=f(),c(N,"href",w()===""?r().url:w())}),n(h,o)});var D=s(W,2);v(D,()=>m()!=="",h=>{var o=Gt();d(()=>c(o,"content",m())),n(h,o)});var H=s(D,2);v(H,()=>y()!=="",h=>{var o=Mt();d(()=>c(o,"content",y())),n(h,o)});var K=s(H,2);v(K,()=>A()!=="",h=>{var o=Wt();d(()=>c(o,"content",A())),n(h,o)});var P=s(K,2);v(P,$,h=>{var o=zt(),x=S(o);v(x,()=>u()!=="",p=>{var l=Dt();d(()=>c(l,"content",u())),n(p,l)});var N=s(x,2);v(N,()=>f()!=="",p=>{var l=Ht(),R=S(l),nt=s(R,4);d(()=>{c(R,"content",r().url),c(nt,"content",f())}),n(p,l)});var L=s(N,2);v(L,()=>m()!=="",p=>{var l=Kt();d(()=>c(l,"content",m())),n(p,l)});var g=s(L,2);v(g,()=>k()!=="",p=>{var l=Pt();d(()=>c(l,"content",k())),n(p,l)});var b=s(g,2);v(b,()=>O()!=="",p=>{var l=Yt();d(()=>c(l,"content",O())),n(p,l)}),n(h,o)});var Y=s(P,2);v(Y,Z,h=>{var o=Vt(),x=S(o);v(x,()=>f()!=="",g=>{var b=Bt(),p=s(S(b),2),l=s(p,2),R=s(l,2);d(()=>{c(p,"content",r().url.host),c(l,"content",r().url),c(R,"content",f())}),n(g,b)});var N=s(x,2);v(N,()=>m()!=="",g=>{var b=Ft();d(()=>c(b,"content",m())),n(g,b)});var L=s(N,2);v(L,()=>k()!=="",g=>{var b=Jt();d(()=>c(b,"content",k())),n(g,b)}),n(h,o)});var z=s(Y,2);At(z,t,"default",{},null);var ot=s(z,2);v(ot,()=>tt()||G()[0]!==void 0||O()!==""||C()!=="",h=>{var o=it(),x=S(o);Ot(x,()=>at,!1,!1),n(h,o)}),n(rt,M)}),Q()}var Xt=i("<!> <!>",1);function re(e){var t=Xt(),a=S(t);Qt(a,{title:"Wesman Solutions - Contact us!",description:"Tailor-made SaaS solutions for everyone",siteName:"Wesman Solutions",imageURL:"https://wesmansolutions.com/banner.png",canonical:"https://wesmansolutions.com"});var r=s(a,2);It(r,{}),n(e,t)}export{re as component};