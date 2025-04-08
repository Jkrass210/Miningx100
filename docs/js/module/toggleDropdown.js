export function toggleDropdown(wrapperClass, buttonClass, boxClass) {
  const wrappers = document.querySelectorAll(wrapperClass);

  wrappers.forEach(wrapper => {
      const button = wrapper.querySelector(buttonClass);
      const box = wrapper.querySelector(boxClass);

      if (!button || !box) return;

      const toggle = () => {
          button.classList.toggle('active');
      };

      const close = () => {
          button.classList.remove('active');
      };

      // Клик по кнопке
      button.addEventListener('click', (e) => {
          e.stopPropagation();
          toggle();
      });

      // Клик вне блока
      document.addEventListener('click', (e) => {
          if (!wrapper.contains(e.target)) {
              close();
          }
      });

      // Нажатие ESC
      document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
              close();
          }
      });

      // Клик по ссылке внутри .box
      box.addEventListener('click', (e) => {
          if (e.target.tagName.toLowerCase() === 'a') {
              close();
          }
      });
  });
}
