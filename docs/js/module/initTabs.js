/*export function initTabs(btnClass, contentClass, activeClass = 'active') {
  // Находим все контейнеры табов на странице
  const tabContainers = document.querySelectorAll(`.${btnClass}, .${contentClass}`).length > 0 
    ? [document] // Если элементы есть в корне, работаем с document
    : document.querySelectorAll('[data-tabs]'); // Или ищем контейнеры с data-атрибутом

  tabContainers.forEach(container => {
    const buttons = container.querySelectorAll(`.${btnClass}`);
    const contents = container.querySelectorAll(`.${contentClass}`);

    if (!buttons.length || !contents.length) return;

    // Определяем, нужно ли активировать второй таб (для мобильных)
    const activateSecondTab = window.innerWidth <= 1030 && buttons.length > 1;
    const initialActiveIndex = activateSecondTab ? 1 : 0;

    // Активируем кнопку и контент при загрузке
    const initialBtn = buttons[initialActiveIndex];
    const initialContent = container.querySelector(`[data-window-id="${initialBtn.id}"]`);
    
    if (initialBtn && initialContent) {
      setActive(initialBtn, initialContent, buttons, contents, activeClass);
    }

    // Вешаем обработчики на кнопки
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetContent = container.querySelector(`[data-window-id="${btn.id}"]`);
        if (targetContent) {
          setActive(btn, targetContent, buttons, contents, activeClass);
        }
      });
    });
  });

  function setActive(btn, content, allButtons, allContents, activeClass) {
    // Удаляем active у всех
    allButtons.forEach(b => b.classList.remove(activeClass));
    allContents.forEach(c => c.classList.remove(activeClass));

    // Добавляем active выбранным
    btn.classList.add(activeClass);
    content.classList.add(activeClass);
  }
}*/

export function initTabs(btnClass, contentClass, activeClass = 'active') {
  // Находим все контейнеры табов на странице
  const tabContainers = document.querySelectorAll(`.${btnClass}, .${contentClass}`).length > 0 
    ? [document] // Если элементы есть в корне, работаем с document
    : document.querySelectorAll('[data-tabs]'); // Или ищем контейнеры с data-атрибутом

  // Функция для установки активного таба
  function setActive(btn, content, allButtons, allContents, activeClass) {
    // Удаляем active у всех
    allButtons.forEach(b => b.classList.remove(activeClass));
    allContents.forEach(c => c.classList.remove(activeClass));

    // Добавляем active выбранным
    btn.classList.add(activeClass);
    content.classList.add(activeClass);
  }

  // Функция для инициализации или обновления табов
  function setupTabs(container) {
    const buttons = container.querySelectorAll(`.${btnClass}`);
    const contents = container.querySelectorAll(`.${contentClass}`);

    if (!buttons.length || !contents.length) return;

    // Определяем активный индекс в зависимости от ширины экрана
    const activateSecondTab = window.innerWidth <= 1030 && buttons.length > 1;
    const activeIndex = activateSecondTab ? 1 : 0;

    // Находим соответствующие элементы
    const activeBtn = buttons[activeIndex];
    const activeContent = container.querySelector(`[data-window-id="${activeBtn.id}"]`);

    if (activeBtn && activeContent) {
      setActive(activeBtn, activeContent, buttons, contents, activeClass);
    }
  }

  // Инициализация табов при загрузке
  tabContainers.forEach(container => {
    setupTabs(container);

    // Вешаем обработчики на кнопки
    const buttons = container.querySelectorAll(`.${btnClass}`);
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const contents = container.querySelectorAll(`.${contentClass}`);
        const targetContent = container.querySelector(`[data-window-id="${btn.id}"]`);
        if (targetContent) {
          setActive(btn, targetContent, buttons, contents, activeClass);
        }
      });
    });
  });

  // Обработчик изменения размера окна
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (document.querySelector(`.${btnClass}`)) { // Проверяем, что табы вообще есть на странице
        tabContainers.forEach(container => {
          setupTabs(container);
        });
      }
    }, 100); // Дебаунс 100мс
  });
}