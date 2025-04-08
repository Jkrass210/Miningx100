export function toggleBurger(buttonId, panelSelector, closeBtnClass = '.close') {
  const button = document.getElementById(buttonId);
  if (!button) return;

  const panel = document.querySelector(`${panelSelector}[id-for-open="${buttonId}"]`);
  if (!panel) return;

  const closeBtn = panel.querySelector(closeBtnClass);

  const open = () => {
      button.classList.add('active');
      panel.classList.add('active');
      document.body.classList.add('stop-scroll');
  };

  const close = () => {
      button.classList.remove('active');
      panel.classList.remove('active');
      document.body.classList.remove('stop-scroll');
  };

  const toggle = () => {
      if (button.classList.contains('active')) {
          close();
      } else {
          open();
      }
  };

  // Клик по кнопке
  button.addEventListener('click', (e) => {
      e.stopPropagation();
      toggle();
  });

  // Клик по кнопке закрытия внутри панели
  if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          close();
      });
  }

  // Клик по фону панели (вне её содержимого)
  panel.addEventListener('click', (e) => {
      if (e.target === panel) {
          close();
      }
  });

  // Клик по ссылке внутри панели
  panel.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
          close();
      }
  });

  // Нажатие ESC
  window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && button.classList.contains('active')) {
          close();
      }
  });
}
