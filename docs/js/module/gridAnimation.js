/*export function gridAnimation() {
  const gridSection = document.querySelector('.box-hero');
  const grid = document.getElementById('grid');
  const cols = 21;
  const rows = 9;

  // Создаем сетку 21x9
  for (let i = 0; i < cols * rows; i++) {
    const cell = document.createElement('div');
    cell.className = 'grid-cell';
    grid.appendChild(cell);
  }

  // Закрашиваем нужные квадраты (индексы от 0 до 188)
  const targetCells = [3, 105, 69, 19, 35, 125];
  const allCells = document.querySelectorAll('.grid-cell');
  targetCells.forEach(index => {
    if (index >= 0 && index < allCells.length) {
      allCells[index].classList.add('colored');
    }
  });

  // Анимация линий (4 случайные вертикали)
  const leftLines = [
    Math.floor(Math.random() * 5),
    Math.floor(Math.random() * 5) + 5
  ];
  const rightLines = [
    Math.floor(Math.random() * 5) + 16,
    Math.floor(Math.random() * 5) + 11
  ];
  const activeLines = [...leftLines, ...rightLines];

  // Создаем линии внутри секции
  activeLines.forEach(col => {
    const position = (col / cols) * 100;
    const line = document.createElement('div');
    line.className = 'grid-line';
    line.style.left = `${position}%`;
    line.style.animationDelay = `${Math.random() * 5}s`;
    line.style.animationDuration = `${3 + Math.random() * 3}s`;
    gridSection.appendChild(line);
    //Добавляем в секцию, а не в body 
  });*/

  /* Помощник для выбора ячеек */
  /*allCells.forEach((cell, index) => {
      cell.addEventListener('mouseover', () => {
          cell.style.outline = '2px solid red';
          console.log(`Индекс: ${index} | Колонка: ${index % cols}, Строка: ${Math.floor(index / cols)}`);
      });
      cell.addEventListener('mouseout', () => {
          cell.style.outline = '';
      });
  });*/
//}

/*export function gridAnimation() {
  const gridSection = document.querySelector('.box-hero');
  const grid = document.getElementById('grid');
  let currentCols = 0; // Текущее количество колонок
  
  // Функция для определения мобильного режима
  const checkIsMobile = () => window.innerWidth <= 1200;
  
  // Функция создания сетки
  function createGrid(cols, rows) {
    grid.innerHTML = '';
    grid.style.setProperty('--cols', cols);
    grid.style.setProperty('--rows', rows);
    
    for (let i = 0; i < cols * rows; i++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      grid.appendChild(cell);
    }
    return document.querySelectorAll('.grid-cell');
  }
  
  // Функция обновления сетки
  function updateGrid() {
    const isMobile = checkIsMobile();
    const newCols = isMobile ? 13 : 21;
    const rows = 9;
    
    // Если количество колонок не изменилось - выходим
    if (currentCols === newCols) return;
    
    currentCols = newCols;
    const allCells = createGrid(newCols, rows);
    
    // Закрашиваем нужные квадраты
    const targetCells = isMobile 
      ? [23, 41]    // Для 13 колонок
      : [3, 105, 69, 19, 35, 125]; // Для 21 колонки
    
    targetCells.forEach(index => {
      if (allCells[index]) allCells[index].classList.add('colored');
    });
    
    // Обновляем линии анимации
    updateAnimationLines(newCols, isMobile);
  }
  
  // Функция для линий анимации
  function updateAnimationLines(cols, isMobile) {
    // Удаляем старые линии
    document.querySelectorAll('.grid-line').forEach(el => el.remove());
    
    // Создаем новые линии
    const lineCount = isMobile ? 2 : 4;
    const positions = [];
    
    if (isMobile) {
      positions.push(
        Math.floor(Math.random() * 3),       // 0-2
        Math.floor(Math.random() * 3) + 10   // 10-12
      );
    } else {
      positions.push(
        Math.floor(Math.random() * 5),       // 0-4
        Math.floor(Math.random() * 5) + 5,   // 5-9
        Math.floor(Math.random() * 5) + 16,  // 16-20
        Math.floor(Math.random() * 5) + 11   // 11-15
      );
    }
    
    positions.forEach(col => {
      const line = document.createElement('div');
      line.className = 'grid-line';
      line.style.left = `${(col / cols) * 100}%`;
      line.style.animationDelay = `${Math.random() * 5}s`;
      line.style.animationDuration = `${3 + Math.random() * 3}s`;
      gridSection.appendChild(line);
    });
  }
  
  // Инициализация
  updateGrid();
  
  // Обработчик ресайза с троттлингом
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateGrid, 100);
  });
  
  // Для отладки можно добавить в консоль
  console.log('Grid animation initialized');
}*/

export function gridAnimation() {
  const gridSection = document.querySelector('.box-hero');
  const grid = document.getElementById('grid');
  let currentCols = 0;
  
  // Функция для определения режимов
  const checkViewportMode = () => {
    const width = window.innerWidth;
    if (width <= 767) return 'semiSmall';  // ≤767px
    if (width <= 1030) return 'small';    // ≤1030px
    if (width <= 1200) return 'medium';   // 1031-1200px
    return 'large';                       // >1200px
  };
  
  // Функция создания сетки
  function createGrid(cols, rows) {
    grid.innerHTML = '';
    grid.style.setProperty('--cols', cols);
    grid.style.setProperty('--rows', rows);
    
    for (let i = 0; i < cols * rows; i++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      grid.appendChild(cell);
    }
    return document.querySelectorAll('.grid-cell');
  }
  
  // Функция обновления сетки
  function updateGrid() {
    const mode = checkViewportMode();
    let newCols, targetCells, showLines;
    
    // Определяем параметры в зависимости от режима
    switch(mode) {
      case 'semiSmall':  // ≤767px
        newCols = 6;
        targetCells = [10]; // Примерные индексы для 6 колонок
        showLines = false;
        break;
      case 'small':  // ≤1030px
        newCols = 9;
        targetCells = [17, 36]; // Примерные индексы для 9 колонок
        showLines = false;
        break;
      case 'medium': // 1031-1200px
        newCols = 13;
        targetCells = [23, 41];
        showLines = true;
        break;
      default:       // >1200px
        newCols = 21;
        targetCells = [3, 105, 69, 19, 35, 125];
        showLines = true;
    }
    
    // Если количество колонок не изменилось - выходим
    if (currentCols === newCols) return;
    
    currentCols = newCols;
    const allCells = createGrid(newCols, 9); // Всегда 9 строк
    
    // Закрашиваем нужные квадраты
    targetCells.forEach(index => {
      if (allCells[index]) allCells[index].classList.add('colored');
    });
    
    // Обновляем линии анимации
    if (showLines) {
      updateAnimationLines(newCols, mode);
    } else {
      // Удаляем все линии, если они не нужны
      document.querySelectorAll('.grid-line').forEach(el => el.remove());
    }
  }
  
  // Функция для линий анимации
  function updateAnimationLines(cols, mode) {
    // Удаляем старые линии
    document.querySelectorAll('.grid-line').forEach(el => el.remove());
    
    // Создаем новые линии
    const positions = [];
    
    if (mode === 'medium') {
      // Для среднего размера - 2 линии
      positions.push(
        Math.floor(Math.random() * 3),     // 0-2
        Math.floor(Math.random() * 3) + 6  // 6-8 (для 13 колонок)
      );
    } else {
      // Для большого размера - 4 линии
      positions.push(
        Math.floor(Math.random() * 5),     // 0-4
        Math.floor(Math.random() * 5) + 5,  // 5-9
        Math.floor(Math.random() * 5) + 16, // 16-20
        Math.floor(Math.random() * 5) + 11  // 11-15
      );
    }
    
    positions.forEach(col => {
      const line = document.createElement('div');
      line.className = 'grid-line';
      line.style.left = `${(col / cols) * 100}%`;
      line.style.animationDelay = `${Math.random() * 5}s`;
      line.style.animationDuration = `${3 + Math.random() * 3}s`;
      gridSection.appendChild(line);
    });
  }
  
  // Инициализация
  updateGrid();
  
  // Обработчик ресайза с троттлингом
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateGrid, 100);
  });
  
  // Для отладки
  console.log('Grid animation initialized with responsive modes');
}