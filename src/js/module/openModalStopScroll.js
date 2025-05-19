export const openModalStopScroll = (triggerId, closeBtnClass = 'filtr__close') => {
  const triggerBtn = document.getElementById(triggerId);
  if (!triggerBtn) return;

  const filterAside = document.querySelector(`[data-for-open="${triggerId}"]`);
  if (!filterAside) return;

  const filterContent = filterAside.querySelector('.filter');
  if (!filterContent) return;

  const closeBtn = filterAside.querySelector(`.${closeBtnClass}`);

  // Функция открытия/закрытия
  const toggleFilter = (isOpen) => {
    const shouldOpen = isOpen ?? !triggerBtn.classList.contains('active');
    
    triggerBtn.classList.toggle('active', shouldOpen);
    filterAside.classList.toggle('active', shouldOpen);
    document.body.classList.toggle('stop-scroll', shouldOpen);
  };

  // Обработчик клика на триггер
  triggerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFilter();
  });

  // Обработчик клика на кнопку закрытия
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleFilter(false);
    });
  }

  // Обработчик клика вне контента фильтра
  filterAside.addEventListener('click', (e) => {
    if (!filterContent.contains(e.target)) {
      toggleFilter(false);
    }
  });

  // Обработчик Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && filterAside.classList.contains('active')) {
      toggleFilter(false);
    }
  });
};