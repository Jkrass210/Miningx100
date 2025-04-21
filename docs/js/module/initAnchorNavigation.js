export function initAnchorNavigation(anchorsSelector, questionsSelector, headerHeight = 0) {
  // Находим все элементы на странице по переданным селекторам
  const anchorsContainers = document.querySelectorAll(anchorsSelector);
  const questionsContainers = document.querySelectorAll(questionsSelector);

  // Проверяем, что количество контейнеров совпадает
  if (anchorsContainers.length !== questionsContainers.length) {
    console.warn('Количество контейнеров якорей и вопросов не совпадает');
    return;
  }

  // Обрабатываем каждую пару контейнеров
  anchorsContainers.forEach((anchorsContainer, index) => {
    const questionsContainer = questionsContainers[index];
    if (!anchorsContainer || !questionsContainer) return;

    // Находим все якорные ссылки и элементы вопросов внутри текущих контейнеров
    const anchors = anchorsContainer.querySelectorAll('a');
    const questions = questionsContainer.querySelectorAll('.box-questions-answers__item');

    // Проверяем, что количество элементов совпадает
    if (anchors.length !== questions.length) {
      console.warn(`Количество якорей и вопросов не совпадает в паре #${index}`);
      return;
    }

    // Функция для обновления активного якоря
    const updateActiveAnchor = () => {
      const scrollPosition = window.scrollY + headerHeight;

      // Проходим по всем вопросам и находим тот, который сейчас в области видимости
      let activeIndex = 0;
      questions.forEach((question, i) => {
        const questionTop = question.offsetTop;
        const questionBottom = questionTop + question.offsetHeight;

        if (scrollPosition >= questionTop && scrollPosition < questionBottom) {
          activeIndex = i;
        }
      });

      // Обновляем классы active
      anchors.forEach((anchor, i) => {
        if (i === activeIndex) {
          anchor.classList.add('active');
        } else {
          anchor.classList.remove('active');
        }
      });
    };

    // Добавляем обработчики клика для каждой якорной ссылки
    anchors.forEach((anchor, anchorIndex) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();

        // Находим соответствующий вопрос по индексу
        const targetQuestion = questions[anchorIndex];
        if (targetQuestion) {
          // Плавный скролл к вопросу с учетом хедера
          window.scrollTo({
            top: targetQuestion.offsetTop - headerHeight,
            behavior: 'smooth'
          });
        }
      });
    });

    // Добавляем обработчик скролла для автоматического обновления активного якоря
    window.addEventListener('scroll', () => {
      updateActiveAnchor();
    });

    // Инициализируем активный якорь при загрузке
    updateActiveAnchor();
  });
}
