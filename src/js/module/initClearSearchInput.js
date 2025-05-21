// clearSearchInput.js
export function initClearSearchInput() {
  const searchBlocks = document.querySelectorAll('.search1');

  searchBlocks.forEach(block => {
    const closeBtn = block.querySelector('.search1__close');
    const searchInput = block.querySelector('.search1__input');

    if (!closeBtn || !searchInput) return;

    const handleClick = (e) => {
      e.preventDefault();
      searchInput.value = '';
      // Можно добавить фокус на инпут после очистки
      searchInput.focus();
    };

    closeBtn.addEventListener('click', handleClick);

    // Сохраняем функцию для последующей очистки
    block._clearSearchHandler = handleClick;
  });

  // Функция для очистки обработчиков
  return function cleanup() {
    searchBlocks.forEach(block => {
      if (block._clearSearchHandler) {
        const closeBtn = block.querySelector('.search1__close');
        closeBtn.removeEventListener('click', block._clearSearchHandler);
        delete block._clearSearchHandler;
      }
    });
  };
}