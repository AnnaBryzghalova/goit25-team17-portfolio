import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

// Accordion

// // Default options
// new Accordion(".accordion-container-first");

// // User options
// new Accordion(".accordion-container", {
//   duration: 400,
//   showMultiple: true,
 
// });















// Swiper
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 


const btnSwiperEl = document.querySelector('.btn-slide');

const handleClickSwiper = (event) => {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination], 
      slidesPerView: "auto",
      loop: true,
      enabled: true,
      navigation: {
        nextEl: ".swiper-button-next",
        },
        
      });
};

btnSwiperEl.addEventListener('click', handleClickSwiper);


// swiper.enable(keyPress)

