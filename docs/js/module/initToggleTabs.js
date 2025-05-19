export function initToggleTabs({
  wrapperSelector,
  buttonSelector,
  contentSelector,
  activeClass = 'active',
}) {
  const wrappers = document.querySelectorAll(wrapperSelector);

  wrappers.forEach(wrapper => {
    const buttons = wrapper.querySelectorAll(buttonSelector);
    const contents = wrapper.querySelectorAll(contentSelector);

    function closeAll() {
      buttons.forEach(btn => btn.classList.remove(activeClass));
      contents.forEach(content => content.classList.remove(activeClass));
    }

    buttons.forEach((btn, index) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const isActive = btn.classList.contains(activeClass);

        closeAll();

        if (!isActive) {
          btn.classList.add(activeClass);
          contents[index]?.classList.add(activeClass);
        }
      });
    });

    // Обработчик Esc
    wrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAll();
      }
    });

    // Чтобы ловить Esc, элементу нужно иметь фокус
    wrapper.setAttribute('tabindex', '-1');
  });
}
