export function toggleSearch(wrapperClass, buttonClass, formWrapClass) {
  const wrappers = document.querySelectorAll(wrapperClass);

  wrappers.forEach(wrapper => {
      const button = wrapper.querySelector(buttonClass);
      const formWrap = wrapper.querySelector(formWrapClass);

      if (!button || !formWrap) return;

      const open = () => {
          button.classList.add('active');
          document.body.classList.add('stop-scroll');
      };

      const close = () => {
          button.classList.remove('active');
          document.body.classList.remove('stop-scroll');
      };

      const toggle = () => {
          const isActive = button.classList.contains('active');
          isActive ? close() : open();
      };

      // Клик по кнопке
      button.addEventListener('click', (e) => {
          e.stopPropagation();
          toggle();
      });

      // Клик по form-wrapp, но только если клик был именно по нему, а не по вложенным элементам
      formWrap.addEventListener('click', (e) => {
          if (e.target === formWrap) {
              close();
          }
      });

      // Нажатие ESC
      wrapper.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
              close();
          }
      });

      // Фокусируем обёртку, чтобы работал keydown внутри
      wrapper.setAttribute('tabindex', '-1');
  });
}
