import{S as x,i as $,s as ee,k as m,e as r,t as B,T as te,d as l,m as d,c as o,a as n,h as w,b as a,U as se,g as X,J as t,j as Y,E as Z,I as ae,v as le}from"../chunks/index-64ac1a1c.js";function re(f){let u,_,i,h,S,b,e,g,z,I,A,C,D,M,G,T,J,v,N,j,O,y,H,P,E,U,V,k,q,F;return document.title=u="Error "+f[0],{c(){_=m(),i=r("section"),h=r("img"),b=m(),e=r("div"),g=r("i"),z=m(),I=r("i"),A=m(),C=r("i"),D=m(),M=r("i"),G=m(),T=r("i"),J=m(),v=r("h1"),N=B("Error "),j=B(f[0]),O=m(),y=r("h2"),H=B(f[1]),P=m(),E=r("p"),U=B("We find some problem with the page you're looking for .."),V=m(),k=r("a"),q=r("i"),F=B(" Back To The Beginning .."),this.h()},l(c){te('[data-svelte="svelte-1rtqorj"]',document.head).forEach(l),_=d(c),i=o(c,"SECTION",{class:!0});var W=n(i);h=o(W,"IMG",{class:!0,src:!0,alt:!0}),b=d(W),e=o(W,"DIV",{class:!0});var s=n(e);g=o(s,"I",{class:!0}),n(g).forEach(l),z=d(s),I=o(s,"I",{class:!0}),n(I).forEach(l),A=d(s),C=o(s,"I",{class:!0}),n(C).forEach(l),D=d(s),M=o(s,"I",{class:!0}),n(M).forEach(l),G=d(s),T=o(s,"I",{class:!0}),n(T).forEach(l),J=d(s),v=o(s,"H1",{class:!0});var K=n(v);N=w(K,"Error "),j=w(K,f[0]),K.forEach(l),O=d(s),y=o(s,"H2",{class:!0});var Q=n(y);H=w(Q,f[1]),Q.forEach(l),P=d(s),E=o(s,"P",{class:!0});var R=n(E);U=w(R,"We find some problem with the page you're looking for .."),R.forEach(l),V=d(s),k=o(s,"A",{href:!0,class:!0});var L=n(k);q=o(L,"I",{class:!0}),n(q).forEach(l),F=w(L," Back To The Beginning .."),L.forEach(l),s.forEach(l),W.forEach(l),this.h()},h(){a(h,"class","bg svelte-ky8fkm"),se(h.src,S="/images/background/bg"+f[2](1,16)+".webp")||a(h,"src",S),a(h,"alt","background"),a(g,"class","gi-primo-star top-left svelte-ky8fkm"),a(I,"class","gi-primo-star top-right svelte-ky8fkm"),a(C,"class","gi-primo-star bottom-left svelte-ky8fkm"),a(M,"class","gi-primo-star bottom-right svelte-ky8fkm"),a(T,"class","gi-inazuma icon-bg svelte-ky8fkm"),a(v,"class","svelte-ky8fkm"),a(y,"class","svelte-ky8fkm"),a(E,"class","svelte-ky8fkm"),a(q,"class","gi-reply svelte-ky8fkm"),a(k,"href","/"),a(k,"class","svelte-ky8fkm"),a(e,"class","container svelte-ky8fkm"),a(i,"class","svelte-ky8fkm")},m(c,p){X(c,_,p),X(c,i,p),t(i,h),t(i,b),t(i,e),t(e,g),t(e,z),t(e,I),t(e,A),t(e,C),t(e,D),t(e,M),t(e,G),t(e,T),t(e,J),t(e,v),t(v,N),t(v,j),t(e,O),t(e,y),t(y,H),t(e,P),t(e,E),t(E,U),t(e,V),t(e,k),t(k,q),t(k,F)},p(c,[p]){p&1&&u!==(u="Error "+c[0])&&(document.title=u),p&1&&Y(j,c[0]),p&2&&Y(H,c[1])},i:Z,o:Z,d(c){c&&l(_),c&&l(i)}}}function ce({error:f,status:u}){return{props:{statusCode:u,message:f.message}}}function oe(f,u,_){let{statusCode:i}=u,{message:h}=u;const S=(e,g)=>(e=Math.ceil(e),g=Math.floor(g),Math.floor(Math.random()*(g-e+1))+e),b=ae("loaded");return le(b),f.$$set=e=>{"statusCode"in e&&_(0,i=e.statusCode),"message"in e&&_(1,h=e.message)},[i,h,S]}class ne extends x{constructor(u){super(),$(this,u,oe,re,ee,{statusCode:0,message:1})}}export{ne as default,ce as load};
