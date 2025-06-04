function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    if (!validateForm(form)) {
        showToast('Por favor, corrija os erros no formulário', 'error');
        return;
    }
    const formData = new FormData(form);
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.disabled = true;
    button.classList.add('btn-loading');
    button.innerHTML = '<span class="loading-spinner"></span> Enviando...';
    setTimeout(() => {
        console.log('Dados do formulário:', Object.fromEntries(formData));
        showToast('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        form.reset();
        button.disabled = false;
        button.classList.remove('btn-loading');
        button.textContent = originalText;
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.classList.remove('input-error', 'input-success');
        });
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());
    }, 2000);
}
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    inputs.forEach(input => {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup?.querySelector('.error-message');
        input.classList.remove('input-error', 'input-success');
        if (errorElement) errorElement.remove();
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('input-error');
            showFieldError(input, 'Este campo é obrigatório');
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            isValid = false;
            input.classList.add('input-error');
            showFieldError(input, 'Por favor, insira um email válido');
        } else if (input.type === 'tel' && !isValidPhone(input.value)) {
            isValid = false;
            input.classList.add('input-error');
            showFieldError(input, 'Por favor, insira um telefone válido');
        } else {
            input.classList.add('input-success');
        }
    });
    return isValid;
}
function showFieldError(input, message) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return;
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message fade-in';
    errorElement.textContent = message;
    formGroup.appendChild(errorElement);
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isValidPhone(phone) {
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return phoneRegex.test(phone);
}
function phoneMask(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    }
    input.value = value;
}
function subscribeNewsletter(event) {
    event.preventDefault();
    const form = event.target;
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value;
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    if (!isValidEmail(email)) {
        emailInput.classList.add('input-error');
        showToast('Por favor, insira um email válido', 'error');
        return;
    }
    button.disabled = true;
    button.classList.add('btn-loading');
    button.innerHTML = '<span class="loading-spinner"></span>';
    setTimeout(() => {
        console.log('Email inscrito:', email);
        button.classList.remove('btn-loading');
        button.classList.add('btn-success');
        button.textContent = '✓ Inscrito!';
        showToast('Inscrição realizada com sucesso!', 'success');
        form.reset();
        emailInput.classList.remove('input-error');
        setTimeout(() => {
            button.disabled = false;
            button.classList.remove('btn-success');
            button.textContent = originalText;
        }, 3000);
    }, 1500);
}
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                validateSingleField(input);
            });
            input.addEventListener('input', () => {
                if (input.classList.contains('input-error')) {
                    input.classList.remove('input-error');
                    const errorMessage = input.closest('.form-group')?.querySelector('.error-message');
                    if (errorMessage) errorMessage.remove();
                }
            });
        });
    });
}
function validateSingleField(input) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup?.querySelector('.error-message');
    input.classList.remove('input-error', 'input-success');
    if (errorElement) errorElement.remove();
    if (input.hasAttribute('required') && !input.value.trim()) {
        input.classList.add('input-error');
        showFieldError(input, 'Este campo é obrigatório');
    } else if (input.type === 'email' && input.value && !isValidEmail(input.value)) {
        input.classList.add('input-error');
        showFieldError(input, 'Por favor, insira um email válido');
    } else if (input.type === 'tel' && input.value && !isValidPhone(input.value)) {
        input.classList.add('input-error');
        showFieldError(input, 'Por favor, insira um telefone válido');
    } else if (input.value.trim()) {
        input.classList.add('input-success');
    }
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFormValidation);
} else {
    initFormValidation();
}
