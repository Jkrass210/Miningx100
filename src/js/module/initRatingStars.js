
export function initRatingStars(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const stars = container.querySelectorAll('input[name="star"]');

  stars.forEach((star, index) => {
    star.addEventListener('click', (e) => {
      // Если кликнули на уже выбранную звезду, снимаем выделение
      const isAlreadyChecked = e.target.checked;
      
      stars.forEach((s, i) => {
        s.checked = isAlreadyChecked ? i <= index : i <= index;
      });
    });
  });
}