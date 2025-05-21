// review-ratings.js
export function calculateReviewRatings() {
  const reviewsSection = document.querySelector('.detailed-reviews');
  if (!reviewsSection) return;

  const reviewCards = reviewsSection.querySelectorAll('.card7');
  const ratingBox = reviewsSection.querySelector('.box-marks');
  if (!reviewCards.length || !ratingBox) return;

  // Собираем все оценки из отзывов
  const ratings = Array.from(reviewCards).map(card => {
    const ratingText = card.querySelector('.text');
    return ratingText ? parseInt(ratingText.textContent) : 0;
  });

  // Если нет оценок - выходим
  if (ratings.length === 0) return;

  // Считаем количество каждой оценки
  const ratingCounts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
  ratings.forEach(rating => {
    if (rating >= 1 && rating <= 5) {
      ratingCounts[rating]++;
    }
  });

  // Вычисляем проценты для каждой оценки
  const totalRatings = ratings.length;
  const ratingPercents = {};
  
  for (let i = 1; i <= 5; i++) {
    ratingPercents[i] = Math.round((ratingCounts[i] / totalRatings) * 100);
  }

  // Обновляем DOM
  for (let i = 1; i <= 5; i++) {
    const ratingItem = ratingBox.querySelector(`.number${i}`);
    if (!ratingItem) continue;
    
    const percentElement = ratingItem.nextElementSibling;
    const spanElement = ratingItem.querySelector('span');
    
    if (percentElement && percentElement.classList.contains('percent')) {
      percentElement.textContent = `${ratingPercents[i]}%`;
    }
    
    if (spanElement) {
      spanElement.style.width = `${ratingPercents[i]}%`;
    }
  }
}