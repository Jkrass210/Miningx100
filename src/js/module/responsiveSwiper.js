export function responsiveSwiper(mainContainerSelector, containerSelector, listSelector, breakpoint = 1030) {
  const containers = document.querySelectorAll(mainContainerSelector);
  const swipers = new Map();

  function initializeSwipers() {
    containers.forEach((container) => {
      const nextButton = container.querySelector('.btn-swiper-next');
      const prevButton = container.querySelector('.btn-swiper-prev');
      const containerSwiper = container.querySelector(containerSelector);
      const list = container.querySelector(listSelector);

      if (!containerSwiper.classList.contains('swiper') && window.innerWidth <= breakpoint) {
        containerSwiper.classList.add('swiper');
        list.classList.add('swiper-wrapper');

        list.querySelectorAll('li').forEach((slide) => {
          slide.classList.add('swiper-slide');
        });

        const swiperInstance = new Swiper(containerSwiper, {
          slidesPerView: 2,
          spaceBetween: 6,
          breakpoints: {
            767: {
              spaceBetween: 16,
            } 
          },
          navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
          },
        });

        swipers.set(containerSwiper, swiperInstance);
      }
    });
  }

  function destroySwipers() {
    containers.forEach((container) => {
      const containerSwiper = container.querySelector(containerSelector);
      if (containerSwiper.classList.contains('swiper') && window.innerWidth > breakpoint) {
        const list = container.querySelector(listSelector);

        const swiperInstance = swipers.get(containerSwiper);
        if (swiperInstance) {
          swiperInstance.destroy(true, true);
          swipers.delete(containerSwiper);
        }

        containerSwiper.classList.remove('swiper');
        list.classList.remove('swiper-wrapper');

        list.querySelectorAll('li').forEach((slide) => {
          slide.classList.remove('swiper-slide');
        });
      }
    });
  }

  function handleResize() {
    destroySwipers();
    initializeSwipers();
  }

  window.addEventListener('resize', handleResize);

  // Инициализация при загрузке страницы
  initializeSwipers();
}