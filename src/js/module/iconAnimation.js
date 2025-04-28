export function iconAnimation() {
  const hero = document.querySelector('.box-hero__content');
  const searchContainer = document.querySelector('.box-hero__bottom-wrapp');
  const images = [
    'img/icon/1.svg',
    'img/icon/2.svg',
    'img/icon/3.svg',
    'img/icon/4.svg',
    'img/icon/5.svg'
  ];

  // Параметры анимации
  const totalImages = 6;
  const fadeInDuration = 300; // Быстрое появление
  const fadeOutDuration = 400; // Быстрое исчезновение
  const visibleDuration = 1500; // Долгая видимость
  const staggerDelay = 200;
  const pauseBetweenCycles = 1000;

  // Размеры областей появления
  const areaWidth = 150;
  const areaHeight = 100;
  const areaOffset = 50;

  // Создаем плавающие картинки
  const floatingImages = [];
  for (let i = 0; i < totalImages; i++) {
    const img = document.createElement('img');
    img.className = 'floating-image';
    img.src = images[Math.floor(Math.random() * images.length)];
    
    // Фиксированный размер для всех изображений
    img.style.width = '24px';
    img.style.height = '24px';
    img.style.borderRadius = '100%';
    img.style.setProperty('--rotate', `${-5 + Math.random() * 10}deg`);

    hero.appendChild(img);
    floatingImages.push(img);
  }

  function getRandomPosition(isLeftSide) {
    const searchRect = searchContainer.getBoundingClientRect();
    const heroRect = hero.getBoundingClientRect();

    const minTop = heroRect.height * 0.7;
    const maxTop = heroRect.height * 1;

    let minLeft, maxLeft;

    if (isLeftSide) {
      minLeft = searchRect.left - areaWidth - areaOffset;
      maxLeft = searchRect.left - areaOffset;
    } else {
      minLeft = searchRect.right + areaOffset;
      maxLeft = searchRect.right + areaOffset + areaWidth;
    }

    return {
      left: minLeft + Math.random() * (maxLeft - minLeft),
      top: minTop + Math.random() * (maxTop - minTop)
    };
  }

  function animateImages() {
    floatingImages.forEach((img, index) => {
      const isLeftSide = index % 2 === 0;
      const pos = getRandomPosition(isLeftSide);

      img.style.left = `${pos.left}px`;
      img.style.top = `${pos.top}px`;
      img.style.transition = 'none';
      img.style.opacity = '0';

      setTimeout(() => {
        // Резкое появление (вспышка)
        img.style.transition = `opacity ${fadeInDuration}ms cubic-bezier(0.4, 0, 0.6, 1)`;
        img.style.opacity = '1';

        // Исчезновение после паузы
        setTimeout(() => {
          // Резкое затухание
          img.style.transition = `opacity ${fadeOutDuration}ms cubic-bezier(0.4, 0, 0.6, 1)`;
          img.style.opacity = '0';
        }, fadeInDuration + visibleDuration);

      }, index * staggerDelay);
    });

    // Следующий цикл после завершения всех анимаций
    setTimeout(
      animateImages,
      totalImages * staggerDelay + fadeInDuration + visibleDuration + fadeOutDuration + pauseBetweenCycles
    );
  }

  // Начинаем анимацию
  animateImages();
}