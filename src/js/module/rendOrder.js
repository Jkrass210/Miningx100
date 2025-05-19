import { setupFormValidation } from './setupFormValidation.js';

export function rendOrder() {
  document.addEventListener('click', function (e) {
    const orderBtn = e.target.closest('.open-order');
    if (!orderBtn) return;

    const card = orderBtn.closest('.card2');
    if (card) {
      createModal(card);
    }
  });

  function createModal(card) {
    const titleEl = card.querySelector('.card2__title');
    const priceEl = card.querySelector('.actual-price');
    const like = card.querySelector('.favorite');
    const comparisonCheckbox = card.querySelector('.comparison input[type="checkbox"]');

    if (!titleEl || !priceEl || !like) return;

    const title = titleEl.textContent.trim();
    const price = priceEl.textContent.trim();
    const id = like.dataset.id;

    // Проверяем состояние элементов в карточке
    const isFavoriteActive = like.classList.contains('active');
    const isComparisonChecked = comparisonCheckbox?.checked || false;

    const modalHTML = `
      <div class="order-modal">
        <div class="order-modal__wrapper modal">
          <button class="modal__close btn-reset close">
            <svg id="filtrClose" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <div class="modal__wrapper">
            <div class="modal__wrapper-main">
              <div class="modal__btn-group-line">
                <button href="#" class="link btn-reset like favorite ${isFavoriteActive ? 'active' : ''}" data-id="${id}" style="pointer-events: none;">
                  <svg id="like" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.9956 3.42388C6.6627 1.8656 4.43999 1.44643 2.76996 2.87334C1.09993 4.30026 0.864808 6.68598 2.17629 8.3736C3.26671 9.77674 6.56668 12.7361 7.64823 13.6939C7.76923 13.801 7.82973 13.8546 7.9003 13.8757C7.9619 13.8941 8.0293 13.8941 8.09089 13.8757C8.16146 13.8546 8.22196 13.801 8.34296 13.6939C9.42452 12.7361 12.7245 9.77674 13.8149 8.3736C15.1264 6.68598 14.92 4.28525 13.2212 2.87334C11.5225 1.46144 9.3285 1.8656 7.9956 3.42388Z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span class="counter">
                    23
                  </span>
                </button>
                <label class="comparison" style="pointer-events: none;">
                  <input type="checkbox" name="comparison" ${isComparisonChecked ? 'checked' : ''}>
                  <span>
                    <svg id="comparCard" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 7.33333L2 14M10 7.33333L10 14M6 2L6 14M14 2V14" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                </label>
              </div>
              <div class="modal__box-price">
                <h2 class="modal__title">${title}</h2>
                <p class="modal__price">${price}</p>
              </div>
              <form class="modal__form" method="POST" enctype="multipart/form-data" action="/local/ajax/order_form.php">
                <input type="hidden" name="nameProduct" value="${title}">
                <input type="hidden" name="priceProduct" value="${price}">
                <div class="modal__input-group">
                  <ul class="modal__list list-reset">
                    <li>
                      <div class="modal__top-box">
                        <p>Ваше имя</p>
                      </div>
                      <label class="modal__label">
                        <input type="text" name="name" placeholder="Имя">
                      </label>
                    </li>
                    <li>
                      <div class="modal__top-box">
                        <p>Номер телефона</p>
                      </div>
                      <label class="modal__label">
                        <input type="text" name="phone" placeholder="Телефон">
                      </label>
                    </li>
                  </ul>
                  <div class="counter">
                    <button class="counter__btn btn-reset minus">
                      <svg id="minus" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.3335 8H12.6668" stroke="#4263F7" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                    <input class="counter__input" type="text" name="counter" value="1">
                    <button class="counter__btn btn-reset plus">
                      <svg id="plus" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00016 3.33301V12.6663M3.3335 7.99967H12.6668" stroke="#4263F7" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="modal__submit-box">
                  <button class="modal__submit btn-reset">
                    Отправить
                  </button>
                  <p>Нажимая на кнопку, я соглашаюсь на обработку <a href="#">Персональных данных</a></p>
                </div>
              </form>
            </div>
            <div class="modal__box-thanks" id="result">
              <h3 class="modal__title">
                Спасибо!
              </h3>
              <div class="modal__thanks-top-box">
                  <svg id="yesOk" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4613_28147)">
                      <path d="M6.25002 10.0003L8.75002 12.5003L13.75 7.50033M18.3334 10.0003C18.3334 14.6027 14.6024 18.3337 10 18.3337C5.39765 18.3337 1.66669 14.6027 1.66669 10.0003C1.66669 5.39795 5.39765 1.66699 10 1.66699C14.6024 1.66699 18.3334 5.39795 18.3334 10.0003Z" stroke="#00B327" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4613_28147">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                <p class="desc">
                  Ваша заявка принята, наш менеджер скоро свяжется с вами.
                </p>
              </div>
              <button class="modal__thanks-close close-2 btn-reset">
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
      `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';

    // Используем MutationObserver для отслеживания появления элементов
    setTimeout(() => {
      const modal = document.querySelector('.order-modal');
      if (modal) {
        setupCloseHandlers(modal);
        initCounter(modal);

        modal.querySelectorAll(".modal__form").forEach(form => {
          setupFormValidation(form, ".modal__submit");
        })

        modal.addEventListener('submit', function (event) {
          event.preventDefault();

          const form = event.target;
          const formData = new FormData(form);

          fetch(form.action, {
            method: 'POST',
            body: formData,
          })
            .then(response => response.json())
            .then(data => {
              //const bootInfo = document.getElementById('bootInfo');
              const messageBox = modal.querySelector('#result');
              const mainBox = modal.querySelector('.modal__wrapper-main');

              if (data.status === 'success') {
                //messageBox.innerHTML = `<p class="section-title">${data.message}</p>`;
                mainBox.classList.add('hidden')
                messageBox.classList.add('active');
                form.reset();
              } else {
                //messageBox.innerHTML = `<p class="section-title">Ошибка: ${data.message}</p>`;
                console.log('поля не заполнены')
              }
            })
            .catch(error => {
              const messageBox = modal.querySelector('#result');
              const mainBox = modal.querySelector('.modal__wrapper-main');
              mainBox.classList.add('hidden')
              messageBox.classList.add('active');
              messageBox.innerHTML = `<p class="section-title">Произошла ошибка отправки формы.</p>`;
              //alert('Произошла ошибка отправки формы.');
              console.error('Ошибка:', error);
            });
        });
      }
    }, 50); // 50ms обычно достаточно для рендеринга
  }

  function initCounter(modal) {
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

  function setupCloseHandlers(modal) {
    if (!modal) return;

    const closeModal = function () {
      document.body.style.overflow = '';
      modal.remove();
      document.removeEventListener('keydown', handleEsc);
    };

    const handleEsc = function (e) {
      if (e.key === 'Escape') closeModal();
    };

    // Закрытие по клику на крестик
    modal.querySelector('.close')?.addEventListener('click', closeModal);

    // Закрытие по клику на кнопку в спасибо
    modal.querySelector('.close-2')?.addEventListener('click', closeModal);

    // Закрытие по клику на оверлей (внешнюю область)
    modal?.addEventListener('click', function (e) {
      if (e.target === this) {
        closeModal();
      }
    });

    // Закрытие по ESC
    document.addEventListener('keydown', handleEsc);
  }
}