export function initModals() {
  const modalHandlersMap = new WeakMap();

  function setupModal(
    triggerClass, 
    modalClass, 
    backdropClass, 
    closeBtnClass, 
    closeBtnClass2 = null // Дополнительный класс для второй кнопки закрытия
  ) {
    const triggers = document.querySelectorAll(`.${triggerClass}`);
    if (!triggers.length) return;

    const modal = document.querySelector(`.${modalClass}`);
    if (!modal) return;

    // Если обработчики уже есть, просто добавляем их к новым триггерам
    if (modalHandlersMap.has(modal)) {
      const existingHandlers = modalHandlersMap.get(modal);
      triggers.forEach(trigger => {
        if (!trigger.hasListener) {
          trigger.addEventListener('click', existingHandlers.open);
          trigger.hasListener = true;
        }
      });
      return;
    }

    // Создаем обработчики для модального окна
    const handlers = {
      open: null,
      close: null,
      close2: null, // Доп. обработчик для второй кнопки
      backdrop: null,
      keydown: null
    };

    const openModal = () => {
      modal.classList.add('active');
      document.body.classList.add('stop-scroll');

      handlers.keydown = (e) => {
        if (e.key === 'Escape') closeModal();
      };
      document.addEventListener('keydown', handlers.keydown);
    };

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.classList.remove('stop-scroll');

      if (handlers.keydown) {
        document.removeEventListener('keydown', handlers.keydown);
        handlers.keydown = null;
      }
    };

    // Вешаем обработчик открытия на все триггеры
    handlers.open = openModal;
    triggers.forEach(trigger => {
      trigger.addEventListener('click', handlers.open);
      trigger.hasListener = true;
    });

    // Закрытие по первой кнопке (closeBtnClass)
    if (closeBtnClass) {
      const closeBtn = modal.querySelector(`.${closeBtnClass}`);
      if (closeBtn) {
        handlers.close = closeModal;
        closeBtn.addEventListener('click', handlers.close);
      }
    }

    // Закрытие по второй кнопке (closeBtnClass2)
    if (closeBtnClass2) {
      const closeBtn2 = modal.querySelector(`.${closeBtnClass2}`);
      if (closeBtn2) {
        handlers.close2 = closeModal;
        closeBtn2.addEventListener('click', handlers.close2);
      }
    }

    // Закрытие по клику на бэкдроп
    if (backdropClass) {
      handlers.backdrop = (e) => {
        if (e.target.classList.contains(backdropClass)) {
          closeModal();
        }
      };
      modal.addEventListener('click', handlers.backdrop);
    }

    modalHandlersMap.set(modal, handlers);
  }

  return {
    setup: setupModal
  };
}