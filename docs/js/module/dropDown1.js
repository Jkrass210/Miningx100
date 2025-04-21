export function dropDown1() {
  const dropdowns = document.querySelectorAll('.drop-down1');

  dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.drop-down1__btn');
    const list = dropdown.querySelector('.drop-down1__list');
    const textSpan = btn.querySelector('.text');
    const items = list.querySelectorAll('li > *'); // Выбираем все элементы внутри li (span, a и т.д.)

    // Функция для закрытия всех открытых dropdown (кроме текущего)
    const closeOtherDropdowns = () => {
      document.querySelectorAll('.drop-down1').forEach(otherDropdown => {
        if (otherDropdown !== dropdown) {
          otherDropdown.querySelector('.drop-down1__btn').classList.remove('active');
        }
      });
    };

    // Функция для обновления состояния disabled у пунктов
    const updateDisabledStates = () => {
      items.forEach(item => {
        const li = item.closest('li');
        if (item.textContent.trim() === textSpan.textContent.trim()) {
          li.classList.add('disabled');
        } else {
          li.classList.remove('disabled');
        }
      });
    };

    // Обработчик клика по кнопке
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeOtherDropdowns();
      btn.classList.toggle('active');
      updateDisabledStates();
    });

    // Обработчики клика по пунктам списка
    items.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!item.closest('li').classList.contains('disabled')) {
          textSpan.textContent = item.textContent;
          btn.classList.remove('active');
          updateDisabledStates();
        }
      });
    });

    // Закрытие при клике вне dropdown
    document.addEventListener('click', () => {
      btn.classList.remove('active');
    });

    // Закрытие при нажатии Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        btn.classList.remove('active');
      }
    });

    // Инициализация disabled состояний при загрузке
    updateDisabledStates();
  });
}