/*export function catalogPageFixed() {
  const header = document.getElementById('header');
  const catalogPage = document.querySelector('.catalog-page');
  const aside = catalogPage.querySelector('.section-catalog__aside');
  const topLine = catalogPage.querySelector('.section-catalog__top-line');
  const catalogContent = catalogPage.querySelector('.catalog-page__content');

  const headerHeight = header.offsetHeight;
  let asideOriginalWidth = null;
  let topLineOriginalWidth = null;
  let topLineOriginalLeft = null;

  // Получаем исходные размеры до скролла
  function cacheOriginalDimensions() {
    if (!asideOriginalWidth) {
      asideOriginalWidth = aside.offsetWidth + 'px';
      topLineOriginalWidth = topLine.offsetWidth + 'px';

      // Вычисляем left для topLine относительно viewport
      const catalogContentRect = catalogContent.getBoundingClientRect();
      const topLineRect = topLine.getBoundingClientRect();
      topLineOriginalLeft = (topLineRect.left - catalogContentRect.left) + 'px';
    }
  }

  function handleScroll() {
    cacheOriginalDimensions();

    const catalogPageRect = catalogPage.getBoundingClientRect();

    if (catalogPageRect.top <= headerHeight) {
      // Фиксируем элементы с сохранением оригинальных размеров
      aside.style.position = 'fixed';
      aside.style.top = `${headerHeight}px`;
      aside.style.width = asideOriginalWidth;
      aside.style.left = catalogContent.getBoundingClientRect().left + 'px';

      topLine.style.position = 'fixed';
      topLine.style.top = `${headerHeight}px`;
      topLine.style.width = topLineOriginalWidth;
      topLine.style.left = `calc(${catalogContent.getBoundingClientRect().left}px + ${topLineOriginalLeft})`;
      topLine.style.zIndex = '100';
      topLine.style.background = 'var(--background-normal)';
    } else {
      // Возвращаем оригинальные стили
      aside.style.position = 'absolute';
      aside.style.top = '0';
      aside.style.width = 'calc(236 / 1708 * 100%)';
      aside.style.left = '0';

      topLine.style.position = 'absolute';
      topLine.style.top = '0';
      topLine.style.width = 'calc(1408 / 1708 * 100%)';
      topLine.style.left = 'calc(300 / 1708 * 100%)';
      topLine.style.zIndex = '';
      topLine.style.background = '';
    }
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', function () {
    // Сбрасываем кэш при ресайзе, чтобы пересчитать размеры
    asideOriginalWidth = null;
    topLineOriginalWidth = null;
    topLineOriginalLeft = null;
    handleScroll();
  });

  // Инициализация
  cacheOriginalDimensions();
  handleScroll();
}*/

export function catalogPageFixed() {
  const header = document.getElementById('header');
  const catalogPage = document.querySelector('.catalog-page');
  const aside = catalogPage.querySelector('.section-catalog__aside');
  const topLine = catalogPage.querySelector('.section-catalog__top-line');
  const catalogContent = catalogPage.querySelector('.catalog-page__content');

  const headerHeight = header.offsetHeight;
  let asideOriginalWidth = null;
  let topLineOriginalWidth = null;
  let topLineOriginalLeft = null;

  // Проверка ширины viewport
  function isMobileView() {
    return window.innerWidth <= 1500;
  }

  // Получаем исходные размеры до скролла
  function cacheOriginalDimensions() {
    if (!topLineOriginalWidth) {
      topLineOriginalWidth = topLine.offsetWidth + 'px';
      
      // Вычисляем left для topLine относительно viewport
      const catalogContentRect = catalogContent.getBoundingClientRect();
      const topLineRect = topLine.getBoundingClientRect();
      topLineOriginalLeft = (topLineRect.left - catalogContentRect.left) + 'px';
    }
    
    // Для aside только если не мобильный вид
    if (!isMobileView() && !asideOriginalWidth) {
      asideOriginalWidth = aside.offsetWidth + 'px';
    }
  }

  function handleScroll() {
    cacheOriginalDimensions();

    const catalogPageRect = catalogPage.getBoundingClientRect();

    if (catalogPageRect.top <= headerHeight) {
      // Всегда фиксируем topLine (и для мобильных, и для десктопа)
      if (!isMobileView()) {
        topLine.style.position = 'fixed';
        topLine.style.top = `${headerHeight}px`;
        topLine.style.width = topLineOriginalWidth;
        topLine.style.left = `calc(${catalogContent.getBoundingClientRect().left}px + ${topLineOriginalLeft})`;
        topLine.style.zIndex = '100';
        topLine.style.background = 'var(--background-normal)';
      } else {
        topLine.style.position = 'fixed';
        topLine.style.top = `${headerHeight}px`;
        topLine.style.width = 'calc(100% - 48px)';
        topLine.style.left = `calc(${catalogContent.getBoundingClientRect().left}px + ${topLineOriginalLeft})`;
        topLine.style.zIndex = '100';
        topLine.style.background = 'var(--background-normal)';
      }
      

      // Фиксируем aside только для десктопного вида
      if (!isMobileView()) {
        aside.style.position = 'fixed';
        aside.style.top = `${headerHeight}px`;
        aside.style.width = asideOriginalWidth;
        aside.style.left = catalogContent.getBoundingClientRect().left + 'px';
      }
    } else {
      // Возвращаем оригинальные стили для topLine
      if (!isMobileView()) {
        topLine.style.position = 'absolute';
        topLine.style.top = '0';
        topLine.style.width = 'calc(1408 / 1708 * 100%)';
        topLine.style.left = 'calc(300 / 1708 * 100%)';
        topLine.style.zIndex = '';
        topLine.style.background = '';
      } else {
        topLine.style.position = 'absolute';
        topLine.style.top = '0';
        topLine.style.width = '100%';
        topLine.style.left = '0';
      }
      

      // Возвращаем aside только если не мобильный вид
      if (!isMobileView()) {
        aside.style.position = 'absolute';
        aside.style.top = '0';
        aside.style.width = 'calc(236 / 1708 * 100%)';
        aside.style.left = '0';
      }
    }
  }

  function handleResize() {
    // Сбрасываем кэш при ресайзе
    topLineOriginalWidth = null;
    topLineOriginalLeft = null;
    
    // Для aside сбрасываем только если не мобильный вид
    if (!isMobileView()) {
      asideOriginalWidth = null;
    } else {
      // Если перешли в мобильный вид - сбрасываем все стили для aside
      aside.style.position = '';
      aside.style.top = '';
      aside.style.width = '';
      aside.style.left = '';
    }
    
    handleScroll();
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);

  // Инициализация
  cacheOriginalDimensions();
  handleScroll();
}