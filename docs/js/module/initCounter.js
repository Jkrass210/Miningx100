export function initCounter(modal) {
  const counterInput = modal.querySelector('.counter__input');
  const minusBtn = modal.querySelector('.counter__btn.minus');
  const plusBtn = modal.querySelector('.counter__btn.plus');


  // Проверяем начальное значение и обновляем стиль кнопки минус
  updateMinusButton();

  // Обработчик для кнопки минус
  minusBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let value = parseInt(counterInput.value);
    if (value > 1) {
      counterInput.value = value - 1;
    }
    updateMinusButton();
    counterInput.style.width = (counterInput.scrollWidth + 1) + 'px';
  });

  // Обработчик для кнопки плюс
  plusBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let value = parseInt(counterInput.value);
    counterInput.value = value + 1;
    updateMinusButton();
    counterInput.style.width = (counterInput.scrollWidth + 1) + 'px';
  });

  // Функция для обновления состояния кнопки минус
  function updateMinusButton() {
    if (parseInt(counterInput.value) === 1) {
      minusBtn.style.pointerEvents = 'none';
    } else {
      minusBtn.style.pointerEvents = 'auto';
    }
  }

  // Дополнительно: валидация ввода вручную
  counterInput.addEventListener('input', function () {
    // Удаляем все нецифровые символы
    this.value = this.value.replace(/[^0-9]/g, '');

    // Если поле пустое, устанавливаем 1
    if (!this.value) {
      this.value = 1;
    }

    updateMinusButton();
  });

  // Обработчик для проверки значения при потере фокуса
  counterInput.addEventListener('blur', function () {
    if (!this.value || parseInt(this.value) < 1) {
      this.value = 1;
    }
    updateMinusButton();
  });
}