/*export function placeholderEffect() {
  const input = document.querySelector('.box-hero__bottom-wrapp .search1__input');
  const phrases = [
    "Antminer L9", 
    "Whatsminer M60S+", 
    "Elphapex DG1+", 
    "Antminer S21+", 
    "Avalon Q"
  ];
  
  let isAnimating = true;
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let typingSpeed = 150;
  let deleteSpeed = 50;
  
  // Функция для управления курсором
  function toggleCursor(show) {
      const container = input.closest('.input-container');
      if (show) {
        container.classList.add('active');
        
        // Динамическое позиционирование курсора
        const cursor = container.querySelector('.cursor');
        const fakeSpan = document.createElement('span');
        
        // Копируем стили из инпута
        const inputStyles = window.getComputedStyle(input);
        ['font-family', 'font-size', 'font-weight', 'padding', 'letter-spacing', 'text-transform']
          .forEach(prop => fakeSpan.style[prop] = inputStyles[prop]);
        
        fakeSpan.style.position = 'absolute';
        fakeSpan.style.visibility = 'hidden';
        fakeSpan.style.whiteSpace = 'pre';
        fakeSpan.textContent = input.value;
        
        // Добавляем в тот же контейнер, что и инпут
        container.appendChild(fakeSpan);
        
        // Получаем позицию относительно контейнера
        cursor.style.left = (fakeSpan.offsetWidth + 52) + 'px'; // +2 для небольшого отступа
        
        container.removeChild(fakeSpan);
      } else {
        container.classList.remove('active');
      }
  }
  
  function typeWriter() {
    if (!isAnimating) {
      toggleCursor(false);
      return;
    }
    
    toggleCursor(true); // Показываем курсор при анимации
    
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (!isDeleting) {
      input.value = currentPhrase.substring(0, currentCharIndex + 1);
      currentCharIndex++;
      
      if (currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeWriter, 1000);
        return;
      }
    } else {
      input.value = currentPhrase.substring(0, currentPhrase.length - currentCharIndex);
      currentCharIndex--;
      
      if (currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(typeWriter, 500);
        return;
      }
    }
    
    const speed = isDeleting ? deleteSpeed : typingSpeed;
    setTimeout(typeWriter, speed);
  }
  
  // Запускаем анимацию
  let timer = setTimeout(typeWriter, 1000);
  
  // Останавливаем анимацию при фокусе
  input.addEventListener('focus', function() {
    isAnimating = false;
    clearTimeout(timer);
    toggleCursor(true); // Курсор остается при фокусе
  });
  
  input.addEventListener('input', function() {
    if (input.value.trim() !== '') {
      isAnimating = false;
      clearTimeout(timer);
      toggleCursor(true); // Курсор остается при вводе
    }
  });
  
  // Возобновляем анимацию
  input.addEventListener('blur', function() {
    if (input.value.trim() === '') {
      isAnimating = true;
      currentPhraseIndex = 0;
      currentCharIndex = 0;
      isDeleting = false;
      timer = setTimeout(typeWriter, 1000);
    } else {
      toggleCursor(false); // Скрываем курсор если поле не пустое
    }
  });
  
  // Обработка кнопки закрытия
  const closeBtn = document.querySelector('.search1__close');
  closeBtn.addEventListener('click', function() {
    isAnimating = false;
    clearTimeout(timer);
    input.value = '';
    if (document.activeElement !== input) {
      toggleCursor(false);
    }
  });
}*/

export function placeholderEffect() {
  const input = document.querySelector('.box-hero__bottom-wrapp .search1__input');
  const phrases = [
    "Antminer L9", 
    "Whatsminer M60S+", 
    "Elphapex DG1+", 
    "Antminer S21+", 
    "Avalon Q"
  ];
  
  let isAnimating = true;
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let typingSpeed = 150;
  let deleteSpeed = 50;
  
  function typeWriter() {
    if (!isAnimating) return;
    
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (!isDeleting) {
      input.value = currentPhrase.substring(0, currentCharIndex + 1);
      currentCharIndex++;
      
      if (currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeWriter, 1000);
        return;
      }
    } else {
      input.value = currentPhrase.substring(0, currentPhrase.length - currentCharIndex);
      currentCharIndex--;
      
      if (currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(typeWriter, 500);
        return;
      }
    }
    
    const speed = isDeleting ? deleteSpeed : typingSpeed;
    setTimeout(typeWriter, speed);
  }
  
  // Запускаем анимацию
  let timer = setTimeout(typeWriter, 1000);
  
  // Останавливаем анимацию при фокусе
  input.addEventListener('focus', function() {
    isAnimating = false;
    clearTimeout(timer);
  });
  
  input.addEventListener('input', function() {
    if (input.value.trim() !== '') {
      isAnimating = false;
      clearTimeout(timer);
    }
  });
  
  // Возобновляем анимацию при потере фокуса (если поле пустое)
  input.addEventListener('blur', function() {
    if (input.value.trim() === '') {
      isAnimating = true;
      currentPhraseIndex = 0;
      currentCharIndex = 0;
      isDeleting = false;
      timer = setTimeout(typeWriter, 1000);
    }
  });
  
  // Обработка кнопки закрытия
  const closeBtn = document.querySelector('.search1__close');
  closeBtn.addEventListener('click', function() {
    isAnimating = false;
    clearTimeout(timer);
    input.value = '';
  });
}