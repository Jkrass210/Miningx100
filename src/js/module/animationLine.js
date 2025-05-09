
export function animationLine() {
  const logoList = document.getElementById('logoList');
  
  // Получаем все исходные элементы из разметки
  const originalItems = Array.from(logoList.children);
  
  // Клонируем элементы для бесшовной прокрутки
  originalItems.forEach(item => {
    const clone = item.cloneNode(true);
    logoList.appendChild(clone);
  });

  // Настройки анимации
  const speed = 0.5;
  let position = 0;
  let animationId;
  let lastTimestamp = 0;
  const frameRate = 60;
  const frameInterval = 1000 / frameRate;

  function animate(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const deltaTime = timestamp - lastTimestamp;
    
    if (deltaTime >= frameInterval) {
      position -= speed;
      lastTimestamp = timestamp;
      
      // Получаем ширину оригинального набора элементов (без клонов)
      const originalWidth = Array.from(logoList.children)
        .slice(0, originalItems.length)
        .reduce((width, item) => width + item.offsetWidth, 0);
      
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
  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      cancelAnimationFrame(animationId);
      position = 0;
      logoList.style.transform = `translateX(0)`;
      animationId = requestAnimationFrame(animate);
    }, 100);
  }

  window.addEventListener('resize', handleResize);

  // Очистка при уничтожении компонента
  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', handleResize);
  };
}

