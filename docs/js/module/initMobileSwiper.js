export function initMobileSwiper(selector) {
  let swipers = [];
  let isMobile = window.innerWidth <= 767;

  function initSwipers() {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(el => {
      if (isMobile && !el.swiper) {
        const swiper = new Swiper(el, {
          slidesPerView: 2,
          spaceBetween: 6,
          breakpoints: {
            512: {
              slidesPerView: 3,
            } 
          },
          // Можно добавить другие параметры Swiper по необходимости
        });
        swipers.push(swiper);
      } else if (!isMobile && el.swiper) {
        swipers.push(el.swiper);
      }
    });
  }

  function destroySwipers() {
    swipers.forEach(swiper => {
      if (swiper && !swiper.destroyed) {
        swiper.destroy(true, true);
      }
    });
    swipers = [];
  }

  function handleResize() {
    const newIsMobile = window.innerWidth <= 767;
    
    if (newIsMobile !== isMobile) {
      isMobile = newIsMobile;
      
      if (isMobile) {
        initSwipers();
      } else {
        destroySwipers();
      }
    }
  }

  // Инициализация при загрузке
  if (isMobile) {
    initSwipers();
  }

  // Обработчик ресайза
  window.addEventListener('resize', handleResize);

  // Возвращаем функцию для ручной очистки
  return () => {
    window.removeEventListener('resize', handleResize);
    destroySwipers();
  };
}