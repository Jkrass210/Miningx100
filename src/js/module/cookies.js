export function cookies() {
  const cookiesBlock = document.querySelector('.cookies');
  const cookiesBtn = document.querySelector('.cookies__btn');

  // Проверяем, было ли уже согласие
  if (localStorage.getItem('cookiesAccepted')) {
    cookiesBlock.classList.remove('active');
  }

  // Обработчик клика на кнопку
  cookiesBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Убираем класс active
    cookiesBlock.classList.remove('active');

    // Сохраняем в localStorage, что пользователь согласился
    localStorage.setItem('cookiesAccepted', 'true');
  });
}