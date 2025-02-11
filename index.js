import{A as h,a as p,S as b,N as E,K as g,i as S}from"./assets/vendor-CH0W8ZD8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".modal-header"),o=document.querySelector(".modal-btn-close"),n=document.querySelector(".header-icon-burger"),r=document.querySelectorAll(".menu-list a"),t=document.querySelector(".button-order-project"),s=document.querySelector(".btn-menu"),c=document.querySelector(".menu-center-open"),f=document.querySelector(".menu-center-list");function L(){e.classList.add("is-open"),document.body.style.overflow="hidden",o.style.display="flex"}function a(){e.classList.remove("is-open"),document.body.style.overflow=""}o.addEventListener("click",a),n.addEventListener("click",L),t.addEventListener("click",a),s.addEventListener("click",a),r.forEach(function(u){u.addEventListener("click",function(){a()})}),document.querySelectorAll(".menu-center-item a").forEach(function(u){u.addEventListener("click",function(_){f.classList.remove("is-open")})}),c.addEventListener("click",function(){f.classList.toggle("is-open")})});new h("#faq .accordion-container",{duration:600,showMultiple:!0});const v={cards:document.querySelectorAll(".marquee-card"),covers:document.querySelector("covers")},q={root:null,rootMargin:"0px",threshold:0},M=e=>{e.forEach(o=>{if(o.isIntersecting){v.cards.forEach(n=>{n.classList.add("animation")});return}v.cards.forEach(n=>{n.classList.remove("animation")})})},C=new IntersectionObserver(M,q);C.observe(covers);p.defaults.baseURL="https://portfolio-js.b.goit.study";async function O(){return(await p.get("/api/reviews")).data}async function P({email:e,comment:o}){return(await p.post("/api/requests",{email:e,comment:o})).data}function k({_id:e,author:o,avatar_url:n,review:r}){return`
  <li class="swiper-slide">
    <img
     src="${n}"
      alt="Reviewer ${e} photo"
      loading="lazy">
    <h3 class="reviewer-name">${o}</h3>
    <p class="review">
      ${r}
    </p>
  </li>
  `}function I(e){return e.map(k).join("")}function N({sectionId:e,useNavigation:o,additionalParams:n=null}){const r={direction:"horizontal",allowTouchMove:!0,keyboard:{enabled:!0,onlyInViewport:!0},...n};r.modules=[E,g],r.navigation={prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},new b(`#${e} .swiper`,r)}const R={position:"topCenter",pauseOnHover:!0,closeOnClick:!0,icon:"",close:!1,timeout:2e3};function y(e){S.error({message:e,progressBarColor:"#b51b1b",title:"Error",...R})}const i=document.querySelector("#reviews .swiper-wrapper"),T={root:null,rootMargin:"0px",threshold:0},w=new IntersectionObserver(j,T);x();async function x(){await A()?N({sectionId:"reviews",useNavigation:!0,additionalParams:{spaceBetween:16,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}}}):(document.querySelector("#reviews .side-arrows").classList.add("visually-hidden"),i.style="justify-content: center",w.observe(i))}async function A(){try{const e=await O();return i.innerHTML=I(e),!0}catch{return i.innerHTML='<li class="swiper-slide">Not found</li>',!1}}function j(e){for(const o of e)if(o.target==i&&o.isIntersecting){w.unobserve(i),y("Can't load reviews :(");return}}const m=document.querySelector(".form-cooperation"),l=document.querySelector(".js-cooperation-modal-backdrop"),H=[...l.children[0].children],$=(e,o)=>{let n,r;H.forEach(t=>{t.classList.contains("cooperative-modal__title")?n=t:t.classList.contains("cooperative-modal__comment")&&(r=t)}),n.innerHTML=e,r.innerHTML=o},d=e=>{(e.target.hasAttribute("close")||e.key==="Escape")&&(l.classList.remove("is-open"),modalEL.removeEventListener("click",d),document.removeEventListener("keydown",d))},B=async e=>{try{e.preventDefault();const{userEmail:o,userComment:n}=m,r={email:o.value.trim(),comment:n.value.trim()},{title:t,message:s}=await P(r);$(t,s),l.classList.add("is-open"),l.addEventListener("click",d),document.addEventListener("keydown",d),m.reset()}catch{y("Something was wrong! Please try again")}};m.addEventListener("submit",B);
//# sourceMappingURL=index.js.map
