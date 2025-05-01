/*export function animationLine() {
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
  const speed = 0.5; // Скорость прокрутки (пикселей за кадр)
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
}*/

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

  // Очищаем список перед добавлением новых элементов
  logoList.innerHTML = '';

  // Создаем элементы
  logos.forEach(logo => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="box-slide">
        <img class="swiper-logo-img" src="${logo}" alt="logo">
      </div>
    `;
    logoList.appendChild(li);
  });

  // Клонируем элементы для бесшовной прокрутки
  const cloneItems = Array.from(logoList.children).forEach(item => {
    const clone = item.cloneNode(true);
    logoList.appendChild(clone);
  });

  // Настройки анимации
  const speed = 0.5; // Уменьшили скорость
  let position = 0;
  let animationId;
  let lastTimestamp = 0;
  const frameRate = 60; // Целевой FPS
  const frameInterval = 1000 / frameRate;

  function animate(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const deltaTime = timestamp - lastTimestamp;
    
    // Ограничиваем частоту кадров для плавности
    if (deltaTime >= frameInterval) {
      position -= speed;
      lastTimestamp = timestamp;
      
      // Получаем ширину оригинального набора элементов (без клонов)
      const originalWidth = logoList.scrollWidth / 2;
      
      // Сбрасываем позицию, когда прокрутили оригинальную ширину
      if (Math.abs(position) >= originalWidth) {
        position = 0;
      }
      
      logoList.style.transform = `translateX(${position}px)`;
    }
    
    animationId = requestAnimationFrame(animate);
  }

  // Запускаем анимацию
  animationId = requestAnimationFrame(animate);

  // Оптимизация для ресайза
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      cancelAnimationFrame(animationId);
      position = 0;
      logoList.style.transform = `translateX(0)`;
      animationId = requestAnimationFrame(animate);
    }, 100);
  });

  // Очистка при уничтожении компонента
  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', this);
  };
}

