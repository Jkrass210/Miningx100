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
  
  // При фокусе или клике очищаем поле и останавливаем анимацию
  input.addEventListener('focus', function() {
    isAnimating = false;
    clearTimeout(timer);
    input.value = ''; // Всегда очищаем при фокусе
  });
  
  // Если пользователь начал ввод, останавливаем анимацию
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