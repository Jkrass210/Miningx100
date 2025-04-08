export function handleResize(mobileHidden, btn, topSection, size) {
  if (window.innerWidth <= size) {
      if (!mobileHidden.contains(btn)) {
          mobileHidden.appendChild(btn);
      }
  } else {
      if (!topSection.contains(btn)) {
          topSection.appendChild(btn);
      }
  }
};
