export function initCounter(modal) {
  const counterInput = modal.querySelector('.counter__input');
  const minusBtn = modal.querySelector('.counter__btn.minus');
  const plusBtn = modal.querySelector('.counter__btn.plus');
  const priceElement = modal.querySelector('.modal__price');

  // Получаем исходную цену за один товар
  let pricePerItem = parsePrice(priceElement.textContent);

  // Проверяем начальное значение и обновляем стиль кнопки минус
  updateMinusButton();
  updatePrice();

  // Обработчик для кнопки минус
  minusBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let value = parseInt(counterInput.value);
    if (value > 1) {
      counterInput.value = value - 1;
      updatePrice();
    }
    updateMinusButton();
    counterInput.style.width = (counterInput.scrollWidth + 1) + 'px';
  });

  // Обработчик для кнопки плюс
  plusBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let value = parseInt(counterInput.value);
    counterInput.value = value + 1;
    updatePrice();
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

  // Функция для обновления цены
  function updatePrice() {
    const quantity = parseInt(counterInput.value);
    const totalPrice = pricePerItem * quantity;
    priceElement.textContent = formatPrice(totalPrice);
  }

  // Функция для парсинга цены из строки
  function parsePrice(priceString) {
    // Удаляем все нецифровые символы и пробелы
    return parseInt(priceString.replace(/[^\d]/g, ''));
  }

  // Функция для форматирования цены с пробелами и символом рубля
  function formatPrice(price) {
    // Добавляем пробелы как разделители тысяч и символ рубля
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
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
    updatePrice();
  });

  // Обработчик для проверки значения при потере фокуса
  counterInput.addEventListener('blur', function () {
    if (!this.value || parseInt(this.value) < 1) {
      this.value = 1;
    }
    updateMinusButton();
    updatePrice();
  });
}