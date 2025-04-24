export function initSwipers(mainSliderSelector, thumbsSliderSelector, thumbsPerView = 5) {
  const mainSliders = document.querySelectorAll(mainSliderSelector);

  mainSliders.forEach(mainSlider => {
    const container = mainSlider.closest('.detailed-swiper-container') || mainSlider.parentNode;
    const thumbsSlider = container.querySelector(thumbsSliderSelector);
    
    if (!thumbsSlider) return;

    const thumbsSwiper = new Swiper(thumbsSlider, {
      slidesPerView: thumbsPerView,
      spaceBetween: 16,
      freeMode: true,
      watchSlidesProgress: true,
      /*breakpoints: {
        320: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: thumbsPerView,
        }
      }*/
    });
    const mainSwiper = new Swiper(mainSlider, {
      slidesPerView: 1,
      spaceBetween: 10,
      thumbs: {
        swiper: thumbsSwiper,
      },
    });

    mainSwiper.on('slideChange', () => {
      thumbsSwiper.slideTo(mainSwiper.activeIndex);
    });

    thumbsSlider.querySelectorAll('.swiper-slide').forEach((slide, index) => {
      slide.addEventListener('click', () => {
        mainSwiper.slideTo(index);
      });
    });
  });
}