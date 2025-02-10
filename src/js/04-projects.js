import firstImageDesktop from '../images/projects/01-read-journey.png';
import firstImageDesktop2x from '../images/projects/01-read-journey@2x.png';
import firstImageMobile from '../images/projects/01-read-journey-mob.png';
import firstImageMobile2x from '../images/projects/01-read-journey-mob@2x.png';
import secondImageDesktop from '../images/projects/02-petlove.png';
import secondImageDesktop2x from '../images/projects/02-petlove-mob@2x.png';
import secondImageMobile from '../images/projects/02-petlove-mob.png';
import secondImageMobile2x from '../images/projects/02-petlove-mob@2x.png';
import thirdImageDesktop from '../images/projects/03-vocabbuilder.png';
import thirdImageDesktop2x from '../images/projects/03-vocabbuilder@2x.png';
import thirdImageMobile from '../images/projects/03-vocabbuilder-mob.png';
import thirdImageMobile2x from '../images/projects/03-vocabbuilder@2x.png';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const images = [
  {
    desctop: firstImageDesktop,
    desctop2x: firstImageDesktop2x,
    mobile: firstImageMobile,
    mobile2x: firstImageMobile2x,
  },
  {
    desctop: secondImageDesktop,
    desctop2x: secondImageDesktop2x,
    mobile: secondImageMobile,
    mobile2x: secondImageMobile2x,
  },
  {
    desctop: thirdImageDesktop,
    desctop2x: thirdImageDesktop2x,
    mobile: thirdImageMobile,
    mobile2x: thirdImageMobile2x,
  },
];

const list = document.querySelector('.projects-list');

function createMarkUp(img) {
  return img
    .map(item => {
      return `
        <div class="swiper-slide">
          <li class="projects-item">
          <div class="projects-item-container">
              <ul class="projects-item-list">
              <li class="projects-item-source">#react</li>
              <li class="projects-item-source">#js</li>
              <li class="projects-item-source">#node js</li>
              <li class="projects-item-source">#git</li>
              </ul>
              <div class="projects-description">
              <h3 class="projects-article">
                  Programming Across Borders: Ideas, Technologies, Innovations
              </h3>
              <a target="_blank" href="https://github.com/AnnaBryzghalova/goit25-team17-portfolio" class="projects-article-link">See project</a>
              </div>
          </div>
          <div class="projects-collection">
              <picture class="project-image">
              <source
                  srcset="${item.desctop} 1x, ${item.desctop2x} 2x"
                  media="(min-width: 768px)"
              />
              <source
                  srcset="${item.mobile} 1x, ${item.mobile2x} 2x"
                  media="(max-width: 767px)"
              />
              <img src=${firstImageDesktop} alt="project image" />
              </picture>
          </div>
          </li>
        </div>
          `;
    })
    .join('');
}

list.insertAdjacentHTML('beforeend', createMarkUp(images));

const projectSwiper = new Swiper('.projects-swiper', {
  slidesPerView: 1,
  direction: 'horizontal',
  loop: false,
  speed: 400,
  effect: 'slide',
  navigation: {
    nextEl: '.projects-button-next',
    prevEl: '.projects-button-back',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

const backButton = document.querySelector('.projects-button-back');
const nextButton = document.querySelector('.projects-button-next');
const buttonIcons = document.querySelectorAll('.projects-swiper-icon');

projectSwiper.on('progress', (swiper, progress) => {
  if (progress === 1) {
    nextButton.disabled = true;
    buttonIcons[1].classList.add('projects-swiper-icon-disabled');
    return;
  } else if (progress === 0) {
    backButton.disabled = true;
    buttonIcons[0].classList.add('projects-swiper-icon-disabled');
    return;
  }

  buttonIcons[0].classList.remove('projects-swiper-icon-disabled');
  buttonIcons[1].classList.remove('projects-swiper-icon-disabled');
  nextButton.disabled = false;
  prevButton.disabled = false;
});
