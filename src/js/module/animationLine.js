export function animationLine() {
  const logoList = document.getElementById('logoList');
  const logos = [
    'img/swiper-logo/1logo.svg',
    'img/swiper-logo/2logo.svg',
    'img/swiper-logo/3logo.svg',
    'img/swiper-logo/4logo.svg',
    'img/swiper-logo/5logo.svg',
    'img/swiper-logo/6logo.svg',
    'img/swiper-logo/3logo.svg',
    'img/swiper-logo/4logo.svg'
  ];

  // Создаем копии элементов для бесшовной прокрутки
  const items = [...logos, ...logos].map(logo => {
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="box-slide">
          <img class="swiper-logo-img" src="${logo}" alt="logo">
        </div>
      `;
    return li;
  });

  // Добавляем элементы в список
  items.forEach(item => logoList.appendChild(item));

  // Настройки анимации
  const speed = 1; // Скорость прокрутки (пикселей за кадр)
  let position = 0;
  const listWidth = logoList.scrollWidth / 2; // Так как мы удвоили элементы

  // Функция анимации
  function animate() {
    position -= speed;

    // Если прокрутили половину списка, возвращаем в начало
    if (Math.abs(position) >= listWidth) {
      position = 0;
    }

    logoList.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  // Запускаем анимацию
  animate();

  // Обработка изменения размера окна
  window.addEventListener('resize', function () {
    // Обновляем ширину списка при ресайзе
    listWidth = logoList.scrollWidth / 2;
  });
}


/*export function animationLine() {
  const logoList = document.getElementById('logoList');
  const container = document.querySelector('.box-hero__list-container');
  const logos = [
    'img/swiper-logo/1logo.svg',
    'img/swiper-logo/2logo.svg',
    'img/swiper-logo/3logo.svg',
    'img/swiper-logo/4logo.svg',
    'img/swiper-logo/5logo.svg',
    'img/swiper-logo/6logo.svg'
  ];
  
  // Создаем два набора элементов для бесшовной прокрутки
  function createListItems() {
    return logos.map(logo => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="box-slide">
          <img class="swiper-logo-img" src="${logo}" alt="logo">
        </div>
      `;
      return li;
    });
  }
  
  // Добавляем элементы в список (два идентичных набора)
  const items = createListItems();
  items.forEach(item => {
    logoList.appendChild(item.cloneNode(true));
    logoList.appendChild(item.cloneNode(true));
  });
  
  // Настройки анимации
  const speed = 0.5; // Меньшая скорость для более плавного движения
  let animationId;
  let position = 0;
  let itemWidth = 0;
  
  // Рассчитываем ширину одного элемента
  function calculateItemWidth() {
    if (items.length > 0 && items[0].firstElementChild) {
      itemWidth = items[0].firstElementChild.offsetWidth + 40; // 40px = padding 20px с каждой стороны
    }
    return itemWidth;
  }
  
  // Рассчитываем общую ширину одного набора элементов
  function calculateSingleSetWidth() {
    return logos.length * calculateItemWidth();
  }
  
  // Функция анимации
  function animate() {
    position -= speed;
    const singleSetWidth = calculateSingleSetWidth();
    
    // Когда первый набор полностью ушел влево, перемещаем его в конец
    if (position <= -singleSetWidth) {
      position += singleSetWidth;
    }
    
    logoList.style.transform = `translateX(${position}px)`;
    animationId = requestAnimationFrame(animate);
  }
  
  // Инициализация
  function init() {
    calculateItemWidth();
    // Убедимся, что элементы имеют правильные размеры
    setTimeout(() => {
      calculateItemWidth();
      animate();
    }, 100);
  }
  
  // Запускаем инициализацию
  init();
  
  // Обработка изменения размера окна
  window.addEventListener('resize', function() {
    cancelAnimationFrame(animationId);
    calculateItemWidth();
    animate();
  });
}*/