export function gridAnimation() {
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
    gridSection.appendChild(line);  /* Добавляем в секцию, а не в body */
  });

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
}