export function initStickyAnchor(containerSelector, anchorSelector, contentSelector, headerHeight = 60, offset = 20) {
  const containers = document.querySelectorAll(containerSelector);

  containers.forEach(container => {
    const anchor = container.querySelector(anchorSelector);
    const content = container.querySelector(contentSelector);
    
    if (!anchor || !content) return;

    // Получаем начальные позиции элементов
    const containerRect = container.getBoundingClientRect();
    const contentRect = content.getBoundingClientRect();
    const anchorRect = anchor.getBoundingClientRect();
    
    // Вычисляем границы для sticky-эффекта
    const startSticky = contentRect.top - headerHeight - offset;
    const endSticky = containerRect.bottom - anchorRect.height - headerHeight - offset;
    const anchorOriginalTop = anchorRect.top - containerRect.top;
    
    // Функция для обновления позиции
    const updatePosition = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const containerBottom = container.getBoundingClientRect().bottom + scrollTop;
      
      // Если контейнер в зоне видимости
      if (scrollTop >= startSticky && scrollTop <= endSticky) {
        // Фиксируем позицию
        anchor.style.position = 'fixed';
        anchor.style.top = `${headerHeight + offset}px`;
        anchor.style.width = `${anchorRect.width}px`;
      } 
      // Если прокрутили выше зоны sticky
      else if (scrollTop < startSticky) {
        // Возвращаем в исходное положение
        anchor.style.position = 'absolute';
        anchor.style.top = `${anchorOriginalTop}px`;
        anchor.style.width = '';
      } 
      // Если прокрутили ниже зоны sticky
      else {
        // Прикрепляем к низу контейнера
        anchor.style.position = 'absolute';
        anchor.style.top = `${containerBottom - scrollTop - anchorRect.height - offset}px`;
        anchor.style.width = '';
      }
    };

    // Оптимизация производительности с помощью requestAnimationFrame
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updatePosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Инициализация и добавление обработчиков
    updatePosition();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', () => {
      // При ресайзе обновляем все размеры
      const containerRect = container.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const anchorRect = anchor.getBoundingClientRect();
      
      startSticky = contentRect.top - headerHeight - offset;
      endSticky = containerRect.bottom - anchorRect.height - headerHeight - offset;
      anchorOriginalTop = anchorRect.top - containerRect.top;
      
      updatePosition();
    });
  });
}