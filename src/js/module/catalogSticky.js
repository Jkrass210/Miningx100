/*export function catalogSticky() {
  const header = document.querySelector('.header');
  const topLineFixed = document.querySelector('.top-line-fixed');
  const aside = document.querySelector('.section-catalog__aside');
  const topLine = document.querySelector('.catalog-top-line');
  const contentWrapp = document.querySelector('.section-catalog__content-wrapp');
  const content = document.querySelector('.section-catalog__content');

  if (!header || !topLineFixed || !aside || !topLine || !contentWrapp || !content) return;

  // Вычисляем высоты элементов
  const headerHeight = header.offsetHeight;
  const topLineFixedHeight = topLineFixed.offsetHeight;
  
  // Сохраняем исходные параметры один раз
  const asideTopPosition = aside.getBoundingClientRect().top + window.pageYOffset - headerHeight - topLineFixedHeight;
  const topLineTopPosition = topLine.getBoundingClientRect().top + window.pageYOffset - headerHeight - topLineFixedHeight;
  const asideWidth = aside.offsetWidth;
  const topLineHeight = topLine.offsetHeight;
  
  // Флаги для отслеживания состояния фиксации
  let isAsideFixed = false;
  let isTopLineFixed = false;

  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    
    // Фиксация боковой панели
    if (scrollY > asideTopPosition && !isAsideFixed) {
      isAsideFixed = true;
      aside.style.position = 'fixed';
      aside.style.top = headerHeight + topLineFixedHeight + 'px';
      aside.style.width = asideWidth + 'px';
      aside.style.zIndex = '90';
      content.style.marginLeft = asideWidth + 'px';
    } else if (scrollY <= asideTopPosition && isAsideFixed) {
      isAsideFixed = false;
      aside.style.position = 'static';
      aside.style.width = 'calc(300 / 1708 * 100%)';
      content.style.marginLeft = '0';
    }
    
    // Фиксация верхней линии каталога
    if (scrollY > topLineTopPosition && !isTopLineFixed) {
      isTopLineFixed = true;
      topLine.style.position = 'fixed';
      topLine.style.top = headerHeight + topLineFixedHeight + 'px';
      topLine.style.width = content.offsetWidth + 'px';
      topLine.style.left = content.getBoundingClientRect().left + 'px';
      topLine.style.zIndex = '90';
      content.style.paddingTop = topLineHeight + 'px';
    } else if (scrollY <= topLineTopPosition && isTopLineFixed) {
      isTopLineFixed = false;
      topLine.style.position = 'static';
      topLine.style.width = 'auto';
      topLine.style.left = 'auto';
      content.style.paddingTop = '0';
    }
  }

  function handleResize() {
    if (isAsideFixed) {
      aside.style.width = asideWidth + 'px';
      aside.style.top = headerHeight + topLineFixedHeight + 'px';
    }
    if (isTopLineFixed) {
      topLine.style.width = content.offsetWidth + 'px';
      topLine.style.left = content.getBoundingClientRect().left + 'px';
      topLine.style.top = headerHeight + topLineFixedHeight + 'px';
    }
  }

  // Добавляем transition для плавности
  topLine.style.transition = 'all 0.2s ease';
  aside.style.transition = 'all 0.2s ease';

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);

  // Инициализация
  handleScroll();
}*/
export function catalogSticky() {
  const header = document.querySelector('.header');
  const topLineFixed = document.querySelector('.top-line-fixed');
  const aside = document.querySelector('.section-catalog__aside');
  const topLine = document.querySelector('.catalog-top-line');
  const contentWrapp = document.querySelector('.section-catalog__content-wrapp');
  const content = document.querySelector('.section-catalog__content');

  if (!header || !topLineFixed || !aside || !topLine || !contentWrapp || !content) return;

  // Вычисляем высоты элементов
  const headerHeight = header.offsetHeight;
  const topLineFixedHeight = topLineFixed.offsetHeight;
  
  // Сохраняем исходные параметры один раз
  const asideTopPosition = aside.getBoundingClientRect().top + window.pageYOffset - headerHeight - topLineFixedHeight;
  const topLineTopPosition = topLine.getBoundingClientRect().top + window.pageYOffset - headerHeight - topLineFixedHeight;
  const asideWidth = aside.offsetWidth;
  const topLineHeight = topLine.offsetHeight;
  
  // Флаги для отслеживания состояния фиксации
  let isAsideFixed = false;
  let isTopLineFixed = false;

  // Проверяем ширину экрана
  function isMobileView() {
    return window.innerWidth <= 1500;
  }

  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    
    // Фиксация боковой панели (только если не мобильный вид)
    if (!isMobileView()) {
      if (scrollY > asideTopPosition && !isAsideFixed) {
        isAsideFixed = true;
        aside.style.position = 'fixed';
        aside.style.top = headerHeight + topLineFixedHeight + 'px';
        aside.style.width = asideWidth + 'px';
        aside.style.zIndex = '90';
        content.style.marginLeft = asideWidth + 'px';
      } else if (scrollY <= asideTopPosition && isAsideFixed) {
        isAsideFixed = false;
        aside.style.position = 'static';
        aside.style.width = 'calc(300 / 1708 * 100%)';
        content.style.marginLeft = '0';
      }
    } else {
      // В мобильном виде сбрасываем все стили
      if (isAsideFixed) {
        isAsideFixed = false;
        aside.style.position = 'static';
        aside.style.width = 'auto';
        aside.style.top = 'auto';
        content.style.marginLeft = '0';
      }
    }
    
    // Фиксация верхней линии каталога (работает всегда)
    if (scrollY > topLineTopPosition && !isTopLineFixed) {
      isTopLineFixed = true;
      topLine.style.position = 'fixed';
      topLine.style.top = headerHeight + topLineFixedHeight + 'px';
      topLine.style.width = content.offsetWidth + 'px';
      topLine.style.left = content.getBoundingClientRect().left + 'px';
      topLine.style.zIndex = '90';
      content.style.paddingTop = topLineHeight + 'px';
    } else if (scrollY <= topLineTopPosition && isTopLineFixed) {
      isTopLineFixed = false;
      topLine.style.position = 'static';
      topLine.style.width = 'auto';
      topLine.style.left = 'auto';
      content.style.paddingTop = '0';
    }
  }

  function handleResize() {
    if (isMobileView()) {
      // В мобильном виде сбрасываем стили
      if (isAsideFixed) {
        isAsideFixed = false;
        aside.style.position = 'static';
        aside.style.width = 'auto';
        aside.style.top = 'auto';
        content.style.marginLeft = '0';
      }
    } else {
      // В десктопном виде обновляем стили
      if (isAsideFixed) {
        aside.style.width = asideWidth + 'px';
        aside.style.top = headerHeight + topLineFixedHeight + 'px';
        content.style.marginLeft = asideWidth + 'px';
      }
    }

    // Обновляем стили для верхней линии всегда
    if (isTopLineFixed) {
      topLine.style.width = content.offsetWidth + 'px';
      topLine.style.left = content.getBoundingClientRect().left + 'px';
      topLine.style.top = headerHeight + topLineFixedHeight + 'px';
    }
  }

  // Добавляем transition для плавности
  topLine.style.transition = 'all 0.2s ease';
  aside.style.transition = 'all 0.2s ease';

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);

  // Инициализация
  handleScroll();
  handleResize(); // Вызываем сразу для проверки начального состояния
}