import{F as ve,S as le,i as ce,s as pe,w as ue,x as me,y as de,q as H,o as j,B as he,G as P,v as fe,e as y,t as O,k as T,l as X,c as E,a as S,h as U,d as m,m as q,b as l,g as L,H as c,E as be,I as we,f as R,J as ge,K as ke,L as ye,M as Ee,N as Me,O as ze,P as K,p as Ae,Q as Se,R as $e,T as De,U as Te,n as qe}from"../chunks/index-ca6b8406.js";import{s as Z,b as Ie,a as _e,i as ee,v as te,c as G,H as V,K as Le,D as B,d as Ne,m as se,e as xe}from"../chunks/env-d5929b28.js";import{P as Pe,d as He,i as Oe}from"../chunks/PopUp-23f89170.js";import{O as Ue}from"../chunks/audio-e16725e4.js";import"../chunks/index-4b848f7e.js";const je=()=>{const a=ve("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session,updated:a.updated}},Ce={subscribe(a){return je().page.subscribe(a)}};function ae(a,e,s){const t=a.slice();return t[5]=e[s].description,t[6]=e[s].date,t[8]=s,t}function oe(a,e,s){const t=a.slice();return t[9]=e[s],t}function Ke(a){let e;return{c(){e=O("( Latest Update )")},l(s){e=U(s,"( Latest Update )")},m(s,t){L(s,e,t)},d(s){s&&m(e)}}}function ne(a){let e,s=a[9]+"";return{c(){e=y("p"),this.h()},l(t){e=E(t,"P",{class:!0});var r=S(e);r.forEach(m),this.h()},h(){l(e,"class","svelte-11p1vdz")},m(t,r){L(t,e,r),e.innerHTML=s},p:be,d(t){t&&m(e)}}}function re(a,e){let s,t,r=e[6]+"",g,_,M,d,k=e[8]===0&&Ke(),p=e[5],u=[];for(let o=0;o<p.length;o+=1)u[o]=ne(oe(e,p,o));return{key:a,first:null,c(){s=y("span"),t=y("i"),g=O(r),_=T(),k&&k.c(),M=T();for(let o=0;o<u.length;o+=1)u[o].c();d=X(),this.h()},l(o){s=E(o,"SPAN",{class:!0});var n=S(s);t=E(n,"I",{class:!0});var h=S(t);g=U(h,r),h.forEach(m),_=q(n),k&&k.l(n),n.forEach(m),M=q(o);for(let z=0;z<u.length;z+=1)u[z].l(o);d=X(),this.h()},h(){l(t,"class","tgl svelte-11p1vdz"),l(s,"class","svelte-11p1vdz"),this.first=s},m(o,n){L(o,s,n),c(s,t),c(t,g),c(s,_),k&&k.m(s,null),L(o,M,n);for(let h=0;h<u.length;h+=1)u[h].m(o,n);L(o,d,n)},p(o,n){if(e=o,n&8){p=e[5];let h;for(h=0;h<p.length;h+=1){const z=oe(e,p,h);u[h]?u[h].p(z,n):(u[h]=ne(z),u[h].c(),u[h].m(d.parentNode,d))}for(;h<u.length;h+=1)u[h].d(1);u.length=p.length}},d(o){o&&m(s),k&&k.d(),o&&m(M),we(u,o),o&&m(d)}}}function Re(a){let e,s,t=[],r=new Map,g,_,M,d,k,p,u,o,n,h,z,N,$,v,I,A,i=a[3].reverse();const b=f=>f[8];for(let f=0;f<i.length;f+=1){let w=ae(a,i,f),D=b(w);r.set(D,t[f]=re(D,w))}return{c(){e=y("section"),s=y("div");for(let f=0;f<t.length;f+=1)t[f].c();g=T(),_=y("div"),M=T(),d=y("span"),k=O("Support"),p=T(),u=y("div"),o=y("a"),n=y("img"),z=T(),N=y("span"),$=O("Ko-fi"),v=T(),I=y("p"),A=O("All assets used in this site are owned by Mihoyo."),this.h()},l(f){e=E(f,"SECTION",{class:!0});var w=S(e);s=E(w,"DIV",{class:!0});var D=S(s);for(let W=0;W<t.length;W+=1)t[W].l(D);g=q(D),_=E(D,"DIV",{style:!0}),S(_).forEach(m),D.forEach(m),M=q(w),d=E(w,"SPAN",{style:!0});var Y=S(d);k=U(Y,"Support"),Y.forEach(m),p=q(w),u=E(w,"DIV",{class:!0});var F=S(u);o=E(F,"A",{class:!0,href:!0,target:!0});var C=S(o);n=E(C,"IMG",{src:!0,alt:!0,class:!0}),z=q(C),N=E(C,"SPAN",{});var J=S(N);$=U(J,"Ko-fi"),J.forEach(m),C.forEach(m),F.forEach(m),v=q(w),I=E(w,"P",{class:!0});var Q=S(I);A=U(Q,"All assets used in this site are owned by Mihoyo."),Q.forEach(m),w.forEach(m),this.h()},h(){R(_,"height",".5rem"),l(s,"class","updates svelte-11p1vdz"),R(d,"font-size","1rem"),ge(n.src,h="/assets/images/utility/donate-kofi.png")||l(n,"src",h),l(n,"alt","ko-fi icon"),l(n,"class","svelte-11p1vdz"),l(o,"class","kofi svelte-11p1vdz"),l(o,"href","https://ko-fi.com/quyetaq"),l(o,"target","_blank"),l(u,"class","support svelte-11p1vdz"),l(I,"class","credit svelte-11p1vdz"),l(e,"class","svelte-11p1vdz")},m(f,w){L(f,e,w),c(e,s);for(let D=0;D<t.length;D+=1)t[D].m(s,null);c(s,g),c(s,_),a[4](s),c(e,M),c(e,d),c(d,k),c(e,p),c(e,u),c(u,o),c(o,n),c(o,z),c(o,N),c(N,$),c(e,v),c(e,I),c(I,A)},p(f,w){w&8&&(i=f[3].reverse(),t=ke(t,w,b,1,f,i,r,s,ye,re,g,ae))},d(f){f&&m(e);for(let w=0;w<t.length;w+=1)t[w].d();a[4](null)}}}function We(a){let e,s;return e=new Pe({props:{show:a[1],title:"Genshin Impact Wish Simulator",button:"confirm",$$slots:{default:[Re]},$$scope:{ctx:a}}}),e.$on("confirm",a[2]),{c(){ue(e.$$.fragment)},l(t){me(e.$$.fragment,t)},m(t,r){de(e,t,r),s=!0},p(t,[r]){const g={};r&2&&(g.show=t[1]),r&4097&&(g.$$scope={dirty:r,ctx:t}),e.$set(g)},i(t){s||(H(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){he(e,t)}}}function Ge(a,e,s){let t;P(a,Z,d=>s(1,t=d));let r;const g=()=>{Z.set(!1),Ie.set(!0),_e.set(0)},_=He.filter(({featured:d})=>!!d);fe(()=>{Ue(r,{sizeAutoCapable:!1,className:"os-theme-light"})});function M(d){Ee[d?"unshift":"push"](()=>{r=d,s(0,r)})}return[r,t,g,_,M]}class Ve extends le{constructor(e){super(),ce(this,e,Ge,We,pe,{})}}const Be=new RegExp(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i),Ye=new RegExp(/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i),Fe=a=>Be.test(a)||Ye.test(a.substr(0,4)),Je=()=>{const{angle:a}=screen.orientation;return!(a===90||a===270)&&window.matchMedia("screen and (max-width: 760px)").matches},Qe=()=>{var a;return((a=navigator==null?void 0:navigator.userAgentData)==null?void 0:a.mobile)||Je()||Fe(navigator.userAgent||navigator.vendor||window.opera)};const{document:x}=Te;function ie(a){let e,s;return e=new Ve({}),{c(){ue(e.$$.fragment)},l(t){me(e.$$.fragment,t)},m(t,r){de(e,t,r),s=!0},i(t){s||(H(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){he(e,t)}}}function Xe(a){let e,s,t,r,g,_,M,d,k,p,u,o,n,h,z,N,$,v=!a[0]&&ie();const I=a[7].default,A=Me(I,a,a[6],null);return{c(){e=y("meta"),s=y("meta"),t=y("meta"),r=y("meta"),g=y("meta"),_=y("meta"),M=y("meta"),d=T(),v&&v.c(),k=T(),p=y("main"),A&&A.c(),u=T(),o=y("a"),n=O("1Studio"),h=T(),z=y("img"),this.h()},l(i){const b=ze('[data-svelte="svelte-4dunku"]',x.head);e=E(b,"META",{property:!0,content:!0}),s=E(b,"META",{name:!0,content:!0}),t=E(b,"META",{name:!0,content:!0}),r=E(b,"META",{property:!0,content:!0}),g=E(b,"META",{property:!0,content:!0}),_=E(b,"META",{property:!0,content:!0}),M=E(b,"META",{property:!0,content:!0}),b.forEach(m),d=q(i),v&&v.l(i),k=q(i),p=E(i,"MAIN",{style:!0,class:!0});var f=S(p);A&&A.l(f),u=q(f),o=E(f,"A",{href:!0,class:!0,title:!0});var w=S(o);n=U(w,"1Studio"),w.forEach(m),h=q(f),z=E(f,"IMG",{src:!0,alt:!0,class:!0}),f.forEach(m),this.h()},h(){l(e,"property","twitter:url"),l(e,"content",V),l(s,"name","keywords"),l(s,"content",Le),l(t,"name","description"),l(t,"content",B),l(r,"property","og:description"),l(r,"content",B),l(g,"property","og:url"),l(g,"content",V),l(_,"property","twitter:description"),l(_,"content",B),l(M,"property","al:web:url"),l(M,"content",V),l(o,"href","/"),l(o,"class","uid svelte-1537kly"),l(o,"title","Try Your Luck by this Simulator"),ge(z.src,N="/assets/images/utility/genshin-logo.webp")||l(z,"src",N),l(z,"alt","genshin logo"),l(z,"class","logo svelte-1537kly"),R(p,"height",a[2]?`${a[2]}px`:"100vh"),l(p,"class","svelte-1537kly"),K(p,"mobile",a[1]),K(p,"preview",a[0])},m(i,b){c(x.head,e),c(x.head,s),c(x.head,t),c(x.head,r),c(x.head,g),c(x.head,_),c(x.head,M),L(i,d,b),v&&v.m(i,b),L(i,k,b),L(i,p,b),A&&A.m(p,null),c(p,u),c(p,o),c(o,n),c(p,h),c(p,z),$=!0},p(i,[b]){i[0]?v&&(qe(),j(v,1,1,()=>{v=null}),Ae()):v?b&1&&H(v,1):(v=ie(),v.c(),H(v,1),v.m(k.parentNode,k)),A&&A.p&&(!$||b&64)&&Se(A,I,i,i[6],$?De(I,i[6],b,null):$e(i[6]),null),(!$||b&4)&&R(p,"height",i[2]?`${i[2]}px`:"100vh"),b&2&&K(p,"mobile",i[1]),b&1&&K(p,"preview",i[0])},i(i){$||(H(v),H(A,i),$=!0)},o(i){j(v),j(A,i),$=!1},d(i){m(e),m(s),m(t),m(r),m(g),m(_),m(M),i&&m(d),v&&v.d(i),i&&m(k),i&&m(p),A&&A.d(i)}}}function Ze(a,e,s){let t,r,g,_,M,d,k;P(a,ee,n=>s(8,r=n)),P(a,_e,n=>s(3,g=n)),P(a,Ne,n=>s(4,_=n)),P(a,Ce,n=>s(5,M=n)),P(a,se,n=>s(1,d=n)),P(a,G,n=>s(2,k=n));let{$$slots:p={},$$scope:u}=e;const o=()=>{const{angle:n}=screen.orientation,h=n===90||n===270;se.set(h)};return fe(()=>{Oe(),ee.set(Qe()),r&&o(),window.addEventListener("orientationchange",()=>{r&&o()}),te.set(window.innerWidth),G.set(window.innerHeight),window.addEventListener("resize",()=>{te.set(window.innerWidth),G.set(window.innerHeight),r&&o()}),document.addEventListener("contextmenu",n=>n.preventDefault())}),a.$$set=n=>{"$$scope"in n&&s(6,u=n.$$scope)},a.$$.update=()=>{if(a.$$.dirty&32&&s(0,t=M.url.pathname.split("/")[1]==="screen"),a.$$.dirty&24&&_.length>0){const{type:n}=_[g];xe.set(n==="standard"||n==="beginner")}},[t,d,k,g,_,M,u,p]}class nt extends le{constructor(e){super(),ce(this,e,Ze,Xe,pe,{})}}export{nt as default};
