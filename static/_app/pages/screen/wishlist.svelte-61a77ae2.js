import{S as B,i as H,s as Q,e as v,k as U,l as L,O as V,c as k,d as m,m as F,b as f,H as I,g as W,o as N,p as O,q as P,v as z,n as J,w as K,a as C,x as X,y as Z,B as x,t as $,h as tt,E as j}from"../../chunks/index-ca6b8406.js";import{E as G}from"../../chunks/env-daf617d3.js";import{W as et,w as rt,c as st}from"../../chunks/WishListResult-23412c3f.js";import{g as S}from"../../chunks/Icon-401d1e32.js";import"../../chunks/index-4b848f7e.js";import"../../chunks/audio-3ae179a7.js";function ot(p){let n,t,s;return t=new et({props:{preview:!0,previewlist:p[3]}}),{c(){n=v("div"),K(t.$$.fragment),this.h()},l(e){n=k(e,"DIV",{class:!0});var l=C(n);X(t.$$.fragment,l),l.forEach(m),this.h()},h(){f(n,"class","wish-result svelte-11t2avo")},m(e,l){W(e,n,l),Z(t,n,null),s=!0},p(e,l){const o={};l&8&&(o.previewlist=e[3]),t.$set(o)},i(e){s||(P(t.$$.fragment,e),s=!0)},o(e){N(t.$$.fragment,e),s=!1},d(e){e&&m(n),x(t)}}}function nt(p){let n,t,s;return{c(){n=v("div"),t=v("h1"),s=$("You're going to unresolved page, redirecting to index ..."),this.h()},l(e){n=k(e,"DIV",{class:!0});var l=C(n);t=k(l,"H1",{});var o=C(t);s=tt(o,"You're going to unresolved page, redirecting to index ..."),o.forEach(m),l.forEach(m),this.h()},h(){f(n,"class","error svelte-11t2avo")},m(e,l){W(e,n,l),I(n,t),I(t,s)},p:j,i:j,o:j,d(e){e&&m(n)}}}function at(p){let n,t,s,e,l,o,u,g,d;document.title=n="Wish Result for "+p[0]+" et al | "+G;const q=[nt,ot],i=[];function h(r,a){return r[2]?0:1}return o=h(p),u=i[o]=q[o](p),{c(){t=v("meta"),s=v("meta"),e=v("meta"),l=U(),u.c(),g=L(),this.h()},l(r){const a=V('[data-svelte="svelte-1grr43y"]',document.head);t=k(a,"META",{name:!0,content:!0}),s=k(a,"META",{property:!0,content:!0}),e=k(a,"META",{property:!0,content:!0}),a.forEach(m),l=F(r),u.l(r),g=L(),this.h()},h(){f(t,"name","title"),f(t,"content",p[1]),f(s,"property","og:title"),f(s,"content",p[1]),f(e,"property","twitter:title"),f(e,"content",p[1])},m(r,a){I(document.head,t),I(document.head,s),I(document.head,e),W(r,l,a),i[o].m(r,a),W(r,g,a),d=!0},p(r,[a]){(!d||a&1)&&n!==(n="Wish Result for "+r[0]+" et al | "+G)&&(document.title=n),(!d||a&2)&&f(t,"content",r[1]),(!d||a&2)&&f(s,"content",r[1]),(!d||a&2)&&f(e,"content",r[1]);let c=o;o=h(r),o===c?i[o].p(r,a):(J(),N(i[c],1,1,()=>{i[c]=null}),O(),u=i[o],u?u.p(r,a):(u=i[o]=q[o](r),u.c()),P(u,1),u.m(g.parentNode,g))},i(r){d||(P(u),d=!0)},o(r){N(u),d=!1},d(r){m(t),m(s),m(e),r&&m(l),i[o].d(r),r&&m(g)}}}const mt=!0;function lt(p,n,t){let s="No Name",e=G,l,o=[];const u=(i,h)=>h?i===4?2:10:i===4?5:25,g=i=>{let h=[];return i.split("|").forEach(a=>{let[c,_,y,w,E,b]=a.split("/");b=b==="1",_=parseInt(_,10),w=w!=="0";let M=u(_,b);E=E!=="undefined"?E:!1;const R=y==="weapon"?rt:st,{weaponType:A,wishBoxPosition:D,vision:Y}=R.data.find(T=>T.rarity===_).list.find(T=>T.name===c);h.push({type:y,weaponType:A,vision:Y,wishBoxPosition:D,name:c,rarity:_,isNew:w,stelaFortuna:b,fateType:E,fateQty:M})}),h},d=()=>{const i=["qiqi","keqing","diluc","mona","jean"],h=o.filter(({rarity:c})=>c===5);if(o.filter(({rarity:c,name:_,type:y})=>{const w=c===5&&!i.includes(_)&&y==="character";return w&&t(0,s=S(_)),w}).length>1){t(1,e=`Wow, I just got ${s} plus its Constelation only in 10 pull, Genshin Impact.`);return}if(h.length===2){t(0,s=h.map(({name:c})=>S(c)).join(" and ")),t(1,e=`Wow, I just got ${s} when pulling on Wish Simulator for Genshin Impact`);return}if(h.length>2){t(0,s=h.map(({name:c})=>S(c)).join(", ")),t(1,e=`Wow, I just got ${s} when pulling on Wish Simulator for Genshin Impact`);return}if(o.filter(({rarity:c,name:_},y)=>{const w=c===4;return y===0&&t(0,s=S(_)),w}).length>1){t(1,e="Cool, I just got multiple 4star items when pulling on Wish Simulator for Genshin Impact");return}t(1,e=`Yeay, I just got ${s} Genshin Impact.`)};return z(()=>{try{const i=new URL(window.location.href),r=new URLSearchParams(i.search).get("a");if(r){let a=atob(r);t(3,o=g(a)),d();return}throw new Error("No data to show")}catch{t(2,l=!0),window.location.replace("/")}}),[s,e,l,o]}class dt extends B{constructor(n){super(),H(this,n,lt,at,Q,{})}}export{dt as default,mt as prerender};
