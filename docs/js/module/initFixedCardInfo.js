// modules/fixedCardInfo.js
export function initFixedCardInfo() {
  const headerHeight = 63; // Высота хедера
  const cards = document.querySelectorAll('.card8');
  
  if (!cards.length) return;

  // Создаем объект для хранения данных о карточках
  const cardsData = Array.from(cards).map(card => {
    const fixedEl = card.querySelector('.card8__box-info.fixed-el');
    const regularInfo = card.querySelector('.card8__box-info:not(.fixed-el)');
    const cardTop = card.getBoundingClientRect().top + window.pageYOffset;
    const cardHeight = card.offsetHeight;
    const regularInfoHeight = regularInfo ? regularInfo.offsetHeight : 0;

    return {
      card,
      fixedEl,
      regularInfo,
      cardTop,
      cardHeight,
      regularInfoHeight,
      cardBottom: cardTop + cardHeight,
      activationPoint: cardTop + regularInfoHeight
    };
  });

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const viewportHeight = window.innerHeight;

    cardsData.forEach(cardData => {
      const { card, fixedEl, regularInfo, cardTop, cardHeight, cardBottom, activationPoint, regularInfoHeight } = cardData;
      
      if (!fixedEl || !regularInfo) return;

      // Текущие координаты карточки
      const currentCardTop = cardTop - scrollPosition;
      const currentCardBottom = cardBottom - scrollPosition;

      // Активируем фиксированный блок, когда:
      // 1. Верх обычного блока прошел за хедер
      // 2. Низ карточки еще не вышел за верх viewport
      if (scrollPosition + headerHeight >= activationPoint && currentCardBottom > headerHeight) {
        // Активируем фиксированный блок
        fixedEl.classList.add('active');
        
        // Устанавливаем позиционирование
        fixedEl.style.width = `${card.offsetWidth}px`;
        fixedEl.style.left = `${card.getBoundingClientRect().left}px`;
        fixedEl.style.top = `${headerHeight}px`;
        
        // Рассчитываем прозрачность для плавного появления/исчезания
        const fadeStart = activationPoint - headerHeight;
        const fadeEnd = activationPoint - headerHeight + regularInfoHeight;
        const opacity = Math.min(1, (scrollPosition - fadeStart) / (fadeEnd - fadeStart));
        fixedEl.style.opacity = opacity;
      } else {
        // Деактивируем фиксированный блок
        fixedEl.classList.remove('active');
        fixedEl.style.opacity = '0';
        fixedEl.style.width = '';
        fixedEl.style.left = '';
        fixedEl.style.top = '';
      }

      // Отключаем фиксацию, когда карточка выходит из viewport
      if (currentCardBottom < headerHeight || currentCardTop > viewportHeight) {
        fixedEl.classList.remove('active');
        fixedEl.style.opacity = '0';
        fixedEl.style.width = '';
        fixedEl.style.left = '';
        fixedEl.style.top = '';
      }
    });
  };

  // Оптимизация с requestAnimationFrame и троттлингом
  let ticking = false;
  const updateOnScroll = () => {
    handleScroll();
    ticking = false;
  };

  const scrollHandler = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  };

  // Инициализация
  window.addEventListener('load', () => {
    // Обновляем позиции карточек после загрузки
    cardsData.forEach(cardData => {
      const rect = cardData.card.getBoundingClientRect();
      cardData.cardTop = rect.top + window.pageYOffset;
      cardData.cardBottom = cardData.cardTop + cardData.cardHeight;
      cardData.activationPoint = cardData.cardTop + cardData.regularInfoHeight;
    });
    handleScroll();
  });

  window.addEventListener('scroll', scrollHandler);
  window.addEventListener('resize', () => {
    // При ресайзе обновляем данные карточек
    cardsData.forEach(cardData => {
      const rect = cardData.card.getBoundingClientRect();
      cardData.cardTop = rect.top + window.pageYOffset;
      cardData.cardHeight = cardData.card.offsetHeight;
      cardData.cardBottom = cardData.cardTop + cardData.cardHeight;
      cardData.regularInfoHeight = cardData.regularInfo ? cardData.regularInfo.offsetHeight : 0;
      cardData.activationPoint = cardData.cardTop + cardData.regularInfoHeight;
    });
    handleScroll();
  });
}