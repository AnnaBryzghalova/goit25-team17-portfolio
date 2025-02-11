import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

// Accordion
const acEl = document.querySelector('.accord-title');
console.log("acEl:", acEl)


const handleAc = (ev) => {
  new Accordion("#about-me .accordion", {
  duration: 400,
  showMultiple: true,
 
  });
  // ev.target.closest('accord-title');
};



acEl.addEventListener('click', handleAc);


// document.addEventListener("DOMContentLoaded", () => {
//   new Accordion(".accordion-container", {
//     duration: 400, // Швидкість анімації (мс)
//     showMultiple: false, // Закривати попередні блоки при відкритті нового
//     collapse: true, // Дозволити закривати всі блоки
//   });
// });










// Swiper

import { initSwiper } from './swiper-api';



const btnSwiperEl = document.querySelector('.btn-slide');
// const swiper = document.querySelector('.swiper').swiper;

// const handleClickSwiper = () => {
//     const swiper = new Swiper('.swiper', {
 
//       slidesPerView: "auto",
//       spaceBetween: 0,
//       loop: true,
//       enabled: true,
//       navigation: {
//         nextEl: ".btn-slide",
//       },
//       breakpoints: {
//         320: { slidesPerView: 2 },
//         768: { slidesPerView: 3 },
//         1440: { slidesPerView: 6 },
//       },
        
//     });
  
//         initSwiper({
//       sectionId: 'reviews',
//       useNavigation: true,
      
//     });
     
// };


// btnSwiperEl.addEventListener('click', handleClickSwiper);


const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  spaceBetween: 0,
  loop: true,
  enabled: true,
  navigation: {
    nextEl: ".btn-slide",
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1440: { slidesPerView: 6 },
  },
});

initSwiper({
  sectionId: 'about-me',
  useNavigation: true,
});


btnSwiperEl.addEventListener('click', () => swiper.slideNext());



// const reviewsList = document.querySelector('#about-me .swiper-wrapper');
// reviewsEntryPoint();

// async function reviewsEntryPoint() {
//   const rendered = await tryRenderReviews();
//   if (rendered) {
//     const swiperParams = {
//       spaceBetween: 0,
//       breakpoints: {
//         320: { slidesPerView: 1 },
//         768: { slidesPerView: 2 },
//         1440: { slidesPerView: 4 },
//       },
//     };

//     initSwiper({
//       sectionId: 'about-me',
//       useNavigation: true,
//       additionalParams: swiperParams,
//     });
//         reviewsList.style = 'justify-content: center';
//   }
// };      