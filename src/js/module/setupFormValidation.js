/*export function setupFormValidation(form, submitSelector) {
    const inputs = form.querySelectorAll("input");
    const submitButton = form.querySelector(submitSelector);
    const checkbox = form.querySelector("input[type='checkbox']");

    // Настраиваем маску для телефона
    const phoneInput = form.querySelector("input[name='phone']");
    if (phoneInput) {
        //phoneInput.placeholder = "+7 (___) ___-__-__";

        const cleave = new Cleave(phoneInput, {
            delimiters: [" (", ") ", "-", "-"],
            blocks: [2, 3, 3, 2, 2],
            numericOnly: true,
            noImmediatePrefix: true,
            prefix: "+7"
        });

        phoneInput.addEventListener('focus', () => {
            if (!phoneInput.value.startsWith('+7')) {
                cleave.setRawValue('+7');
            }
        });
    }
    // Функция валидации имени, фамилии, должности, организации (общая)
    function validateText(input) {
        const value = input.value.trim();
        const isValid = /^[A-Za-zА-Яа-яЁё\s]{2,}$/.test(value);
        toggleValidation(input, isValid);
        return isValid;
    }

    // Валидация email
    function validateEmail(input) {
        const value = input.value.trim();
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        toggleValidation(input, isValid);
        return isValid;
    }

    // Валидация телефона
    function validatePhone(input) {
        const value = input.value.trim();
        const isValid = /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/.test(value);
        toggleValidation(input, isValid);
        return isValid;
    }

    // Валидация чекбокса
    function validateCheckbox() {
        if (checkbox) {
            return checkbox.checked;
        }
        return true; // если чекбокса нет (например, в первом типе формы), считаем его валидным
    }

    // Функция смены стилей при валидации
    function toggleValidation(input, isValid) {
        if (!isValid) {
            input.classList.remove('valid')
            input.classList.add('error')
        } else if (isValid) {
            input.classList.add('valid')
            input.classList.remove('error')
        }
    }

    // Проверяем всю форму на валидность
    function checkFormValidity() {
        let isFormValid = true;

        inputs.forEach(input => {
            const { name } = input;

            if (["name", "surname", "message", "orgName"].includes(name)) {
                isFormValid = validateText(input) && isFormValid;
            } else if (name === "email") {
                isFormValid = validateEmail(input) && isFormValid;
            } else if (name === "phone") {
                isFormValid = validatePhone(input) && isFormValid;
            }
        });

        if (checkbox && !validateCheckbox()) {
            isFormValid = false;
        }

        submitButton.classList.toggle("disabled", !isFormValid);
    }

    // Привязываем события к инпутам
    if (!inputs.length || !submitButton) return;

    inputs.forEach(input => {
        input.addEventListener("input", checkFormValidity);
    });

    if (checkbox) {
        checkbox.addEventListener("change", checkFormValidity);
    }

    form.addEventListener("submit", function (event) {
        checkFormValidity();
        if (submitButton.classList.contains("disabled")) {
            event.preventDefault();
        }
    });
}*/

export function setupFormValidation(form, submitSelector) {
    const inputs = form.querySelectorAll("input");
    const textareas = form.querySelectorAll("textarea");
    const submitButton = form.querySelector(submitSelector);
    const checkbox = form.querySelector("input[type='checkbox']");

    // Настраиваем маску для телефона
    const phoneInput = form.querySelector("input[name='phone']");
    if (phoneInput) {
        const cleave = new Cleave(phoneInput, {
            delimiters: [" (", ") ", "-", "-"],
            blocks: [2, 3, 3, 2, 2],
            numericOnly: true,
            noImmediatePrefix: true,
            prefix: "+7"
        });

        phoneInput.addEventListener('focus', () => {
            if (!phoneInput.value.startsWith('+7')) {
                cleave.setRawValue('+7');
            }
        });
    }

    // Функция валидации имени, фамилии, должности, организации и сообщения (общая)
    function validateText(field) {
        const value = field.value.trim();
        const isValid = /^[A-Za-zА-Яа-яЁё\s]{2,}$/.test(value);
        toggleValidation(field, isValid);
        return isValid;
    }

    // Валидация email
    function validateEmail(input) {
        const value = input.value.trim();
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        toggleValidation(input, isValid);
        return isValid;
    }

    // Валидация телефона
    function validatePhone(input) {
        const value = input.value.trim();
        const isValid = /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/.test(value);
        toggleValidation(input, isValid);
        return isValid;
    }

    // Валидация чекбокса
    function validateCheckbox() {
        if (checkbox) {
            return checkbox.checked;
        }
        return true; // если чекбокса нет, считаем его валидным
    }

    // Функция смены стилей при валидации
    function toggleValidation(field, isValid) {
        if (!isValid) {
            field.classList.remove('valid')
            field.classList.add('error')
        } else if (isValid) {
            field.classList.add('valid')
            field.classList.remove('error')
        }
    }

    // Проверяем всю форму на валидность
    function checkFormValidity() {
        let isFormValid = true;

        // Проверяем инпуты
        inputs.forEach(input => {
            const { name } = input;

            if (["name", "surname", "message", "orgName"].includes(name)) {
                isFormValid = validateText(input) && isFormValid;
            } else if (name === "email") {
                isFormValid = validateEmail(input) && isFormValid;
            } else if (name === "phone") {
                isFormValid = validatePhone(input) && isFormValid;
            }
        });

        // Проверяем textarea с name="message"
        textareas.forEach(textarea => {
            if (textarea.name === "message") {
                isFormValid = validateText(textarea) && isFormValid;
            }
        });

        if (checkbox && !validateCheckbox()) {
            isFormValid = false;
        }

        submitButton.classList.toggle("disabled", !isFormValid);
    }

    // Привязываем события к полям формы
    if ((!inputs.length && !textareas.length) || !submitButton) return;

    inputs.forEach(input => {
        input.addEventListener("input", checkFormValidity);
    });

    textareas.forEach(textarea => {
        textarea.addEventListener("input", checkFormValidity);
    });

    if (checkbox) {
        checkbox.addEventListener("change", checkFormValidity);
    }

    form.addEventListener("submit", function (event) {
        checkFormValidity();
        if (submitButton.classList.contains("disabled")) {
            event.preventDefault();
        }
    });
}