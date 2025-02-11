import { initSwiper } from './swiper-api';

import firstImageDesktop from '../images/projects/01-read-journey.webp';
import firstImageDesktop2x from '../images/projects/01-read-journey@2x.webp';
import firstImageMobile from '../images/projects/01-read-journey-mob.webp';
import firstImageMobile2x from '../images/projects/01-read-journey-mob@2x.webp';
import secondImageDesktop from '../images/projects/02-petlove.webp';
import secondImageDesktop2x from '../images/projects/02-petlove-mob@2x.webp';
import secondImageMobile from '../images/projects/02-petlove-mob.webp';
import secondImageMobile2x from '../images/projects/02-petlove-mob@2x.webp';
import thirdImageDesktop from '../images/projects/03-vocabbuilder.webp';
import thirdImageDesktop2x from '../images/projects/03-vocabbuilder@2x.webp';
import thirdImageMobile from '../images/projects/03-vocabbuilder-mob.webp';
import thirdImageMobile2x from '../images/projects/03-vocabbuilder@2x.webp';

const images = [
  {
    desktop: firstImageDesktop,
    desktop2x: firstImageDesktop2x,
    mobile: firstImageMobile,
    mobile2x: firstImageMobile2x,
  },
  {
    desktop: secondImageDesktop,
    desktop2x: secondImageDesktop2x,
    mobile: secondImageMobile,
    mobile2x: secondImageMobile2x,
  },
  {
    desktop: thirdImageDesktop,
    desktop2x: thirdImageDesktop2x,
    mobile: thirdImageMobile,
    mobile2x: thirdImageMobile2x,
  },
];

const list = document.querySelector('#projects .swiper-wrapper');

function createMarkUp(img) {
  return img
    .map(item => {
      return `
        <li class="projects-item swiper-slide">
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
                srcset="${item.desktop} 1x, ${item.desktop2x} 2x"
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
        `;
    })
    .join('');
}

list.insertAdjacentHTML('beforeend', createMarkUp(images));

initSwiper({
  sectionId: 'projects',
  useNavigation: true,
});
