export function initToggleTabsNew({
  wrapperSelector,
  buttonSelector,
  contentSelector,
  activeClass = 'active',
}) {
  const wrappers = document.querySelectorAll(wrapperSelector);

  wrappers.forEach(wrapper => {
    const buttons = wrapper.querySelectorAll(buttonSelector);
    const contents = wrapper.querySelectorAll(contentSelector);

    // Закрываем конкретный таб
    function closeTab(index) {
      buttons[index]?.classList.remove(activeClass);
      contents[index]?.classList.remove(activeClass);
    }

    // Открываем/закрываем таб по индексу
    function toggleTab(index) {
      const isActive = buttons[index]?.classList.contains(activeClass);
      
      if (isActive) {
        closeTab(index);
      } else {
        buttons[index]?.classList.add(activeClass);
        contents[index]?.classList.add(activeClass);
      }
    }

    // Закрываем все табы в текущем враппере
    function closeAllTabs() {
      buttons.forEach((btn, index) => {
        closeTab(index);
      });
    }

    // Обработчики кликов
    buttons.forEach((btn, index) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTab(index);
      });
    });

    // Обработчик Esc для закрытия всех табов
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllTabs();
      }
    });

    // Чтобы ловить Esc, не нужно tabindex, так как слушаем на document
  });
}