export function topLineFixed() {
  const header = document.querySelector('header');
  const topLineFixed = document.querySelector('.top-line-fixed');
  const main = document.querySelector('main');

  const headerHeight = header.offsetHeight;
  const topLineFixedHeight = topLineFixed.offsetHeight;
  let isFixed = false;

  // Изначальные отступы
  main.style.paddingTop = headerHeight + 'px';
  topLineFixed.style.transition = 'transform 0.2s ease'; // Для плавности

  // Получаем позицию, где должен "прилипнуть" блок
  const stickyStart = topLineFixed.offsetTop - headerHeight;

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > stickyStart && !isFixed) {
      // Включаем фиксацию
      isFixed = true;
      topLineFixed.style.position = 'fixed';
      topLineFixed.style.top = headerHeight + 'px'; // Под хедером
      topLineFixed.style.width = '100%';
      topLineFixed.style.zIndex = '100';
      main.style.paddingTop = (headerHeight + topLineFixedHeight) + 'px';

    } else if (scrollY <= stickyStart && isFixed) {
      // Выключаем фиксацию
      isFixed = false;
      topLineFixed.style.position = 'static';
      main.style.paddingTop = headerHeight + 'px';
    }
  });
}