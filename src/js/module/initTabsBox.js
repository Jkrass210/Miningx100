export function initTabsBox(containerClass, buttonClass, contentClass) {
  const containers = document.querySelectorAll(`.${containerClass}`);

  containers.forEach(container => {
    const button = container.querySelector(`.${buttonClass}`);
    const content = container.querySelector(`.${contentClass}`);

    if (!button || !content) return;

    button.addEventListener('click', (e) => {
      e.preventDefault();
      button.classList.toggle('active');
    });
  });
}