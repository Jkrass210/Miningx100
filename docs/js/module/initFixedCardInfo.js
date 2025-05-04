// modules/fixedCardInfo.js
/*export function initFixedCardInfo() {
  const cards = document.querySelectorAll('.card8');
  if (!cards.length) return;

  const header = document.getElementById('header');
  const getHeaderHeight = () => header ? header.offsetHeight : 63;

  const updateCards = () => {
    const scrollY = window.scrollY;
    const headerHeight = getHeaderHeight();

    cards.forEach(card => {
      const fixedEl = card.querySelector('.card8__box-info.fixed-el');
      const regularInfo = card.querySelector('.card8__box-info:not(.fixed-el)');
      
      if (!fixedEl || !regularInfo) return;

      const cardRect = card.getBoundingClientRect();
      const regularInfoRect = regularInfo.getBoundingClientRect();
      
      // Когда обычный блок скрывается за хедером
      if (regularInfoRect.top < headerHeight && cardRect.bottom > headerHeight) {
        fixedEl.classList.add('active');
        
        // Рассчитываем новый top как разницу между:
        // 1. Текущей позицией скролла
        // 2. Позицией, когда обычный блок должен скрыться
        const triggerPoint = card.offsetTop + regularInfo.offsetHeight - headerHeight;
        const newTop = scrollY - triggerPoint;
        
        fixedEl.style.top = `${newTop}px`;
      } else {
        fixedEl.classList.remove('active');
        fixedEl.style.top = '0';
      }
    });
  };

  window.addEventListener('scroll', updateCards, { passive: true });
  window.addEventListener('resize', updateCards);
  window.addEventListener('load', updateCards);
}*/

// modules/fixedCardInfo.js
export function initFixedCardInfo() {   //хорошая реализация, но блок не на той точке появляется
  const cards = document.querySelectorAll('.card8');
  if (!cards.length) return;

  const header = document.getElementById('header');
  const getHeaderHeight = () => header ? header.offsetHeight : 63;

  const updateCards = () => {
    const scrollY = window.scrollY;
    const headerHeight = getHeaderHeight();

    cards.forEach(card => {
      const fixedEl = card.querySelector('.card8__box-info.fixed-el');
      const regularInfo = card.querySelector('.card8__box-info:not(.fixed-el)');
      
      if (!fixedEl || !regularInfo) return;

      const cardRect = card.getBoundingClientRect();
      const regularInfoRect = regularInfo.getBoundingClientRect();
      
      // Когда обычный блок скрывается за хедером
      if (regularInfoRect.top < headerHeight && cardRect.bottom > headerHeight) {
        fixedEl.classList.add('active');
        
        // Точка, когда нужно начать двигать блок
        const triggerPoint = card.offsetTop - ( regularInfo.offsetHeight * 3.3 )- headerHeight;
        
        // Максимально возможный top (чтобы не выйти за границы карточки)
        const maxTop = card.offsetHeight - fixedEl.offsetHeight;
        
        // Рассчитываем новый top с ограничением
        const newTop = Math.min(maxTop, Math.max(0, scrollY + triggerPoint));
        
        fixedEl.style.top = `${newTop}px`;
      } else {
        fixedEl.classList.remove('active');
        fixedEl.style.top = '0';
      }
    });
  };

  window.addEventListener('scroll', updateCards, { passive: true });
  window.addEventListener('resize', updateCards);
  window.addEventListener('load', updateCards);
}

/*export function initFixedCardInfo() {  // тут блок появляется слишком рано, но почти прижато к хедеру
  const cards = document.querySelectorAll('.card8');
  if (!cards.length) return;

  const header = document.getElementById('header');
  const getHeaderHeight = () => header ? header.offsetHeight : 63;

  const updateCards = () => {
    const scrollY = window.scrollY;
    const headerHeight = getHeaderHeight();

    cards.forEach(card => {
      const fixedEl = card.querySelector('.card8__box-info.fixed-el');
      const regularInfo = card.querySelector('.card8__box-info:not(.fixed-el)');
      
      if (!fixedEl || !regularInfo) return;

      // Новый правильный расчёт
      const triggerPoint = card.offsetTop + regularInfo.offsetTop - headerHeight;
      const maxTop = card.offsetHeight - fixedEl.offsetHeight;
      const newTop = Math.min(maxTop, Math.max(0, scrollY - triggerPoint));

      if (scrollY > triggerPoint && scrollY < triggerPoint + card.offsetHeight) {
        fixedEl.classList.add('active');
        fixedEl.style.top = `${newTop}px`;
      } else {
        fixedEl.classList.remove('active');
        fixedEl.style.top = '0';
      }
    });
  };

  window.addEventListener('scroll', updateCards, { passive: true });
  window.addEventListener('resize', updateCards);
  window.addEventListener('load', updateCards);
}*/