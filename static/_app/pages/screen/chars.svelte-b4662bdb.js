import{S as re,i as ie,s as oe,e as k,k as M,l as $,T as ne,c as w,d as h,m as F,b as c,J as p,g as q,o as W,p as z,q as A,O,v as ce,n as B,t as J,a as D,h as K,U as Y,j as ae,a0 as ue,w as fe,x as he,y as _e,B as de,E as R,a1 as me}from"../../chunks/index-2f7e36f4.js";import{A as H,a as ve,v as pe,Y as ge}from"../../chunks/localstore-b47cdb93.js";import{g as ye,I as be}from"../../chunks/Icon-734e580b.js";import"../../chunks/index-60e82001.js";function x(i,s,e){const a=i.slice();return a[12]=s[e],a[14]=e,a}function ke(i){let s,e,a,t=i[0].name!=="No Name"&&ee(i);return{c(){s=k("div"),e=k("div"),t&&t.c(),this.h()},l(r){s=w(r,"DIV",{class:!0});var l=D(s);e=w(l,"DIV",{class:!0});var n=D(e);t&&t.l(n),n.forEach(h),l.forEach(h),this.h()},h(){c(e,"class","container svelte-13i655i"),c(s,"class","wish-result svelte-13i655i")},m(r,l){q(r,s,l),p(s,e),t&&t.m(e,null),a=!0},p(r,l){r[0].name!=="No Name"?t?(t.p(r,l),l&1&&A(t,1)):(t=ee(r),t.c(),A(t,1),t.m(e,null)):t&&(B(),W(t,1,1,()=>{t=null}),z())},i(r){a||(A(t),a=!0)},o(r){W(t),a=!1},d(r){r&&h(s),t&&t.d()}}}function we(i){let s,e,a;return{c(){s=k("div"),e=k("h1"),a=J("You're going to unresolved page, redirecting to index ..."),this.h()},l(t){s=w(t,"DIV",{class:!0});var r=D(s);e=w(r,"H1",{});var l=D(e);a=K(l,"You're going to unresolved page, redirecting to index ..."),l.forEach(h),r.forEach(h),this.h()},h(){c(s,"class","error svelte-13i655i")},m(t,r){q(t,s,r),p(s,e),p(e,a)},p:R,i:R,o:R,d(t){t&&h(s)}}}function ee(i){let s,e,a,t,r,l,n,f,g,m,E,P,u,d,_=[],G=new Map,T,I,Q,N,j=Array(i[0].rarity);const S=o=>o[14];for(let o=0;o<j.length;o+=1){let v=x(i,j,o),V=S(v);G.set(V,_[o]=te(V))}let y=i[0].stelaFortuna&&se(i),b=i[0].fateType&&le(i);return{c(){s=k("div"),e=k("img"),r=M(),l=k("div"),n=k("i"),g=M(),m=k("div"),E=k("div"),P=J(i[6]),u=M(),d=k("div");for(let o=0;o<_.length;o+=1)_[o].c();T=M(),I=k("div"),y&&y.c(),Q=M(),b&&b.c(),this.h()},l(o){s=w(o,"DIV",{class:!0,style:!0});var v=D(s);e=w(v,"IMG",{src:!0,alt:!0,class:!0}),r=F(v),l=w(v,"DIV",{class:!0});var V=D(l);n=w(V,"I",{class:!0}),D(n).forEach(h),g=F(V),m=w(V,"DIV",{class:!0});var L=D(m);E=w(L,"DIV",{class:!0});var X=D(E);P=K(X,i[6]),X.forEach(h),u=F(L),d=w(L,"DIV",{class:!0});var Z=D(d);for(let C=0;C<_.length;C+=1)_[C].l(Z);Z.forEach(h),L.forEach(h),T=F(V),I=w(V,"DIV",{class:!0});var U=D(I);y&&y.l(U),Q=F(U),b&&b.l(U),U.forEach(h),V.forEach(h),v.forEach(h),this.h()},h(){Y(e.src,a=i[0].outfitSet?i[4]:i[3])||c(e,"src",a),c(e,"alt",t=i[0].name),c(e,"class","splash-art svelte-13i655i"),c(n,"class",f="elemen gi-"+i[0].vision+" svelte-13i655i"),c(E,"class","text svelte-13i655i"),c(d,"class","star"),c(m,"class","name svelte-13i655i"),c(I,"class","bonus svelte-13i655i"),c(l,"class","info svelte-13i655i"),c(s,"class","splatter svelte-13i655i"),c(s,"style",i[5])},m(o,v){q(o,s,v),p(s,e),p(s,r),p(s,l),p(l,n),p(l,g),p(l,m),p(m,E),p(E,P),p(m,u),p(m,d);for(let V=0;V<_.length;V+=1)_[V].m(d,null);p(l,T),p(l,I),y&&y.m(I,null),p(I,Q),b&&b.m(I,null),N=!0},p(o,v){(!N||v&25&&!Y(e.src,a=o[0].outfitSet?o[4]:o[3]))&&c(e,"src",a),(!N||v&1&&t!==(t=o[0].name))&&c(e,"alt",t),(!N||v&1&&f!==(f="elemen gi-"+o[0].vision+" svelte-13i655i"))&&c(n,"class",f),(!N||v&64)&&ae(P,o[6]),v&1&&(j=Array(o[0].rarity),_=ue(_,v,S,1,o,j,G,d,me,te,null,x)),o[0].stelaFortuna?y?y.p(o,v):(y=se(o),y.c(),y.m(I,Q)):y&&(y.d(1),y=null),o[0].fateType?b?(b.p(o,v),v&1&&A(b,1)):(b=le(o),b.c(),A(b,1),b.m(I,null)):b&&(B(),W(b,1,1,()=>{b=null}),z()),(!N||v&32)&&c(s,"style",o[5])},i(o){N||(A(b),N=!0)},o(o){W(b),N=!1},d(o){o&&h(s);for(let v=0;v<_.length;v+=1)_[v].d();y&&y.d(),b&&b.d()}}}function te(i,s){let e;return{key:i,first:null,c(){e=k("i"),this.h()},l(a){e=w(a,"I",{class:!0}),D(e).forEach(h),this.h()},h(){c(e,"class","gi-star svelte-13i655i"),this.first=e},m(a,t){q(a,e,t)},p(a,t){},d(a){a&&h(e)}}}function se(i){let s,e,a,t;return{c(){s=k("div"),e=k("img"),this.h()},l(r){s=w(r,"DIV",{class:!0});var l=D(s);e=w(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(h),this.h()},h(){Y(e.src,a="https://cdn.jsdelivr.net/gh/quyetaq/Public_GenshinWishAsset@master/static/assets/images/utility/stella-fortuna-"+i[0].rarity+"star.webp")||c(e,"src",a),c(e,"alt","Stella Formula"),c(e,"class","svelte-13i655i"),c(s,"class",t="stella stella"+i[0].rarity+" svelte-13i655i")},m(r,l){q(r,s,l),p(s,e)},p(r,l){l&1&&!Y(e.src,a="https://cdn.jsdelivr.net/gh/quyetaq/Public_GenshinWishAsset@master/static/assets/images/utility/stella-fortuna-"+r[0].rarity+"star.webp")&&c(e,"src",a),l&1&&t!==(t="stella stella"+r[0].rarity+" svelte-13i655i")&&c(s,"class",t)},d(r){r&&h(s)}}}function le(i){let s,e,a,t,r=i[0].fateQty+"",l,n;return e=new be({props:{type:"starglitter",width:"80%"}}),{c(){s=k("div"),fe(e.$$.fragment),a=M(),t=k("span"),l=J(r),this.h()},l(f){s=w(f,"DIV",{class:!0});var g=D(s);he(e.$$.fragment,g),a=F(g),t=w(g,"SPAN",{class:!0});var m=D(t);l=K(m,r),m.forEach(h),g.forEach(h),this.h()},h(){c(t,"class","svelte-13i655i"),c(s,"class","masterless starglitter svelte-13i655i")},m(f,g){q(f,s,g),_e(e,s,null),p(s,a),p(s,t),p(t,l),n=!0},p(f,g){(!n||g&1)&&r!==(r=f[0].fateQty+"")&&ae(l,r)},i(f){n||(A(e.$$.fragment,f),n=!0)},o(f){W(e.$$.fragment,f),n=!1},d(f){f&&h(s),de(e)}}}function Ee(i){let s,e,a,t,r,l,n,f,g;document.title=s=`\r
		`+i[6]+" | "+i[1]("title",{default:H})+`\r
	`;const m=[we,ke],E=[];function P(u,d){return u[2]?0:1}return l=P(i),n=E[l]=m[l](i),{c(){e=k("meta"),a=k("meta"),t=k("meta"),r=M(),n.c(),f=$(),this.h()},l(u){const d=ne('[data-svelte="svelte-1quiw3z"]',document.head);e=w(d,"META",{name:!0,content:!0}),a=w(d,"META",{property:!0,content:!0}),t=w(d,"META",{property:!0,content:!0}),d.forEach(h),r=F(u),n.l(u),f=$(),this.h()},h(){c(e,"name","title"),c(e,"content",H),c(a,"property","og:title"),c(a,"content",H),c(t,"property","twitter:title"),c(t,"content",H)},m(u,d){p(document.head,e),p(document.head,a),p(document.head,t),q(u,r,d),E[l].m(u,d),q(u,f,d),g=!0},p(u,[d]){(!g||d&66)&&s!==(s=`\r
		`+u[6]+" | "+u[1]("title",{default:H})+`\r
	`)&&(document.title=s);let _=l;l=P(u),l===_?E[l].p(u,d):(B(),W(E[_],1,1,()=>{E[_]=null}),z(),n=E[l],n?n.p(u,d):(n=E[l]=m[l](u),n.c()),A(n,1),n.m(f.parentNode,f))},i(u){g||(A(n),g=!0)},o(u){W(n),g=!1},d(u){h(e),h(a),h(t),u&&h(r),E[l].d(u),u&&h(f)}}}const Pe=!0;function Ie(i,s,e){let a,t,r,l,n,f;O(i,ve,_=>e(8,l=_)),O(i,pe,_=>e(9,n=_)),O(i,ge,_=>e(1,f=_));let g,m={rarity:0,name:"No Name",stelaFortuna:!1,fateType:"",fateQty:0,vision:""};const E=_=>{const G=_.split("/");if(G.length<6)return{name:"No Name"};let[T,I,Q,N,j,S,y]=G;return y=y==="1",N=N==="1",I=parseInt(I,10),S=S!=="undefined"?S:!1,{name:T,rarity:I,vision:Q,stelaFortuna:N,fateQty:j,fateType:S,outfitSet:y}};ce(()=>{try{const _=new URL(window.location.href),T=new URLSearchParams(_.search).get("a");if(T){const I=atob(T);if(e(0,m=E(I)),m.name!=="No Name"||m.rarity)return}throw new Error("No Data to show")}catch{e(2,g=!0),window.location.replace("/")}});let u,d;return i.$$.update=()=>{i.$$.dirty&3&&e(6,a=f(`${m.name}.name`)),i.$$.dirty&768&&e(7,t=l>n?n:l),i.$$.dirty&128&&e(5,r=`width: ${t}px; height: ${t}px`),i.$$.dirty&1&&e(3,{defaultPath:u,outfitPath:d}=ye(m.name,m.rarity),u,(e(4,d),e(0,m)))},[m,f,g,u,d,r,a,t,l,n]}class Te extends re{constructor(s){super(),ie(this,s,Ie,Ee,oe,{})}}export{Te as default,Pe as prerender};
