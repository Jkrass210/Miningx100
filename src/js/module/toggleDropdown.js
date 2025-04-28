export function toggleDropdown(wrapperClass, buttonClass, boxClass) {
    const wrappers = document.querySelectorAll(wrapperClass);

    wrappers.forEach(wrapper => {
        const button = wrapper.querySelector(buttonClass);
        const box = wrapper.querySelector(boxClass);

        if (!button || !box) return;

        let closeTimeout;
        let isHoveringDropdown = false;

        const open = () => {
            clearTimeout(closeTimeout);
            button.classList.add('active');
            isHoveringDropdown = false;
        };

        const close = () => {
            if (isHoveringDropdown) return;

            closeTimeout = setTimeout(() => {
                if (!isHoveringDropdown) {
                    button.classList.remove('active');
                }
            }, 200);
        };

        button.addEventListener('mouseenter', open);
        button.addEventListener('mouseleave', close);

        box.addEventListener('mouseenter', () => {
            clearTimeout(closeTimeout);
            isHoveringDropdown = true;
        });

        box.addEventListener('mouseleave', () => {
            isHoveringDropdown = false;
            close();
        });

        // Нажатие ESC (на случай, если нужно сохранить эту функциональность)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                close();
            }
        });

        // Клик по ссылке внутри .box (если нужно сохранить это поведение)
        box.addEventListener('click', (e) => {
            if (e.target.tagName.toLowerCase() === 'a') {
                close();
            }
        });
    });
}
