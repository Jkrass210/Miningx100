export function cryptoAnimation() {
  const cryptoBoxes = document.querySelectorAll('.crypto-box');
  const search1 = document.querySelector('.search1');
  let animationInterval;
  let isAnimating = true;

  function startAnimation() {
    // Начальное состояние - все скрыто
    cryptoBoxes.forEach(box => {
      box.classList.remove('animate', 'pulse', 'final-position', 'fade-out');
    });

    // Анимация появляется из центра
    setTimeout(() => {
      cryptoBoxes.forEach(box => {
        box.classList.add('animate');
      });

      // Эффект увеличения
      setTimeout(() => {
        cryptoBoxes.forEach(box => {
          box.classList.add('pulse');
        });

        // Возврат к нормальному размеру
        setTimeout(() => {
          cryptoBoxes.forEach(box => {
            box.classList.remove('pulse');
            box.classList.add('final-position');
          });

          // Исчезновение
          setTimeout(() => {
            cryptoBoxes.forEach(box => {
              box.classList.add('fade-out');
            });

            // Перезапуск анимации через 1 секунду
            setTimeout(() => {
              if (isAnimating) startAnimation();
            }, 4000);
          }, 8000); // Видимость 2 секунды
        }, 20); // Длительность эффекта увеличения
      }, 80); // Время до эффекта увеличения
    }, 2000); // Начальная задержка
  }

  // Запускаем анимацию
  startAnimation();

  // Останавливаем анимацию при наведении на search1
  if (search1) {
    search1.addEventListener('mouseenter', function () {
      isAnimating = false;
      cryptoBoxes.forEach(box => {
        box.classList.remove('animate', 'pulse', 'final-position', 'fade-out');
      });
    });

    // Возобновляем анимацию при уходе курсора
    search1.addEventListener('mouseleave', function () {
      isAnimating = true;
      startAnimation();
    });
  }
}