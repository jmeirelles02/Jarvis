function showResult(elementId, content, type = 'success') {
    console.log('showResult chamada:', { elementId, content, type });
    const resultDiv = document.getElementById(elementId);
    if (!resultDiv) {
        console.error('Elemento não encontrado:', elementId);
        return;
    }
    resultDiv.innerHTML = content;
    resultDiv.className = 'result show';
    if (type === 'error') {
        resultDiv.style.background = '#f8d7da';
        resultDiv.style.color = '#721c24';
    } else {
        resultDiv.style.background = '#d4edda';
        resultDiv.style.color = '#155724';
    }
}
window.showResult = showResult;
function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type} fade-in`;
    const icons = {
        success: '<i class="fas fa-check-circle"></i>',
        error: '<i class="fas fa-exclamation-circle"></i>',
        warning: '<i class="fas fa-exclamation-triangle"></i>',
        info: '<i class="fas fa-info-circle"></i>'
    };
    toast.innerHTML = `
        <div class="toast-content">
            <span class="toast-icon">${icons[type] || icons.info}</span>
            <span class="toast-message">${message}</span>
            <button class="toast-close" aria-label="Fechar">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    document.body.appendChild(toast);
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
        dismissToast(toast);
    });
    const timeoutId = setTimeout(() => {
        dismissToast(toast);
    }, duration);
    toast.timeoutId = timeoutId;
}
function dismissToast(toast) {
    if (toast.timeoutId) {
        clearTimeout(toast.timeoutId);
    }
    toast.classList.add('fade-out');
    setTimeout(() => {
        if (toast.parentNode) {
            document.body.removeChild(toast);
        }
    }, 300);
}
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}
window.saveToLocalStorage = saveToLocalStorage;
window.getFromLocalStorage = getFromLocalStorage;
function copyResult(resultId) {
    const resultDiv = document.getElementById(resultId);
    const text = resultDiv.innerText;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Resultado copiado para a área de transferência!');
        });
    }
}
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
