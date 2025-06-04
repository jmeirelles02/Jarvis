document.addEventListener('DOMContentLoaded', () => {
    console.log('App.js iniciado');

    const lastCalculation = getFromLocalStorage('lastCalculation');
    if (lastCalculation) {
        const principalInput = document.getElementById('principal');
        const rateInput = document.getElementById('rate');
        const timeInput = document.getElementById('time');
        const monthlyInput = document.getElementById('monthly');
        if (principalInput) principalInput.value = lastCalculation.principal || '';
        if (rateInput) rateInput.value = lastCalculation.rate || '';
        if (timeInput) timeInput.value = lastCalculation.time || '';
        if (monthlyInput) monthlyInput.value = lastCalculation.monthly || '';
    }
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', () => phoneMask(input));
    });
    const results = document.querySelectorAll('.result');
    results.forEach(result => {
        const copyBtn = document.createElement('button');
        copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copiar';
        copyBtn.className = 'copy-btn';
        copyBtn.style.cssText = `
            background: var(--secondary-color);
            color: white;
            border: none;
            padding: 5px 15px;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            font-size: 0.9rem;
        `;
        copyBtn.onclick = () => copyResult(result.id);
    });
    console.log('Site de Consultoria Financeira carregado com sucesso!');
});
if (isMobile()) {
    document.documentElement.style.setProperty('--animation-duration', '0.3s');
}
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('SW registrado:', registration);
        }).catch(error => {
            console.log('Falha ao registrar SW:', error);
        });
    });
}
