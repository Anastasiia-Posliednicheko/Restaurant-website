import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  loop: false,
  direction: 'horizontal',
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,

  },
  effect: 'slide',
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
}); 