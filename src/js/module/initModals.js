// modal.js
/*export function initModals() {
  const handlers = new WeakMap();

  function setupModal(triggerClass, modalClass, backdropClass, closeBtnClass) {
    const triggers = document.querySelectorAll(`.${triggerClass}`);
    if (!triggers.length) return;

    triggers.forEach(trigger => {
      const modal = document.querySelector(`.${modalClass}`);
      if (!modal) return;

      // Проверяем, есть ли уже обработчики для этого модального окна
      if (handlers.has(modal)) return;

      const modalHandlers = {
        open: null,
        close: null,
        backdrop: null,
        keydown: null
      };

      const openModal = () => {
        modal.classList.add('active');
        trigger.classList.add('active');
        document.body.classList.add('stop-scroll');

        modalHandlers.keydown = (e) => {
          if (e.key === 'Escape') closeModal();
        };
        document.addEventListener('keydown', modalHandlers.keydown);
      };

      const closeModal = () => {
        modal.classList.remove('active');
        trigger.classList.remove('active');
        document.body.classList.remove('stop-scroll');

        if (modalHandlers.keydown) {
          document.removeEventListener('keydown', modalHandlers.keydown);
          modalHandlers.keydown = null;
        }
      };

      // Обработчик открытия
      modalHandlers.open = () => openModal();
      trigger.addEventListener('click', modalHandlers.open);

      // Обработчик закрытия по крестику
      if (closeBtnClass) {
        const closeBtn = modal.querySelector(`.${closeBtnClass}`);
        if (closeBtn) {
          modalHandlers.close = () => closeModal();
          closeBtn.addEventListener('click', modalHandlers.close);
        }
      }

      // Обработчик закрытия по клику на бэкдроп
      if (backdropClass) {
        modalHandlers.backdrop = (e) => {
          if (e.target.classList.contains(backdropClass)) {
            closeModal();
          }
        };
        modal.addEventListener('click', modalHandlers.backdrop);
      }

      handlers.set(modal, modalHandlers);
    });
  }

  return {
    setup: setupModal
  };
}*/

/*export function initModals() {
  const modalHandlersMap = new WeakMap();

  function setupModal(triggerClass, modalClass, backdropClass, closeBtnClass) {
    const triggers = document.querySelectorAll(`.${triggerClass}`);
    if (!triggers.length) return;

    const modal = document.querySelector(`.${modalClass}`);
    if (!modal) return;

    // Если для этого модального окна уже есть обработчики, просто добавляем открытие на новые триггеры
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

    // Создаем новые обработчики для модального окна
    const handlers = {
      open: null,
      close: null,
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

    // Добавляем обработчики открытия на все триггеры
    handlers.open = openModal;
    triggers.forEach(trigger => {
      trigger.addEventListener('click', handlers.open);
      trigger.hasListener = true;
    });

    // Обработчик закрытия по крестику
    if (closeBtnClass) {
      const closeBtn = modal.querySelector(`.${closeBtnClass}`);
      if (closeBtn) {
        handlers.close = closeModal;
        closeBtn.addEventListener('click', handlers.close);
      }
    }

    // Обработчик закрытия по клику на бэкдроп
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
}*/

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