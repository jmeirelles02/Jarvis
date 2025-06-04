function calculateCompoundInterest() {
    console.log('Calculadora de juros compostos chamada');
    const principal = parseFloat(document.getElementById('principal').value) || 0;
    const rate = parseFloat(document.getElementById('rate').value) || 0;
    const time = parseFloat(document.getElementById('time').value) || 0;
    const monthly = parseFloat(document.getElementById('monthly').value) || 0;
    console.log('Valores:', { principal, rate, time, monthly });
    if (typeof saveToLocalStorage === 'function') {
        const calculation = { principal, rate, time, monthly };
        saveToLocalStorage('lastCalculation', calculation);
    }
    if (principal === 0 || rate === 0 || time === 0) {
        if (typeof showResult === 'function') {
            showResult('result', 'Por favor, preencha todos os campos obrigatórios.', 'error');
        } else {
            console.error('Função showResult não encontrada');
            document.getElementById('result').innerHTML = 'Por favor, preencha todos os campos obrigatórios.';
        }
        return;
    }
    const monthlyRate = rate / 100;
    let total = principal * Math.pow(1 + monthlyRate, time);
    if (monthly > 0) {
        total += monthly * (Math.pow(1 + monthlyRate, time) - 1) / monthlyRate;
    }
    const totalInvested = principal + (monthly * time);
    const totalInterest = total - totalInvested;    const resultHTML = `
        <h4>Resultado da Simulação</h4>
        <p><strong>Valor Total:</strong> ${formatCurrency(total)}</p>
        <p><strong>Total Investido:</strong> ${formatCurrency(totalInvested)}</p>
        <p><strong>Total em Juros:</strong> ${formatCurrency(totalInterest)}</p>
        <p><strong>Rentabilidade:</strong> ${((totalInterest / totalInvested) * 100).toFixed(2)}%</p>
    `;
    if (typeof showResult === 'function') {
        showResult('result', resultHTML, 'success');
    } else {
        console.error('Função showResult não encontrada');
        document.getElementById('result').innerHTML = resultHTML;
    }
}
window.calculateCompoundInterest = calculateCompoundInterest;
function calculateFinancialIndependence() {
    console.log('Calculadora de independência financeira chamada');
    const monthlyExpenses = parseFloat(document.getElementById('monthlyExpenses').value) || 0;
    const annualReturn = parseFloat(document.getElementById('annualReturn').value) || 0;
    console.log('Valores:', { monthlyExpenses, annualReturn });
    if (monthlyExpenses === 0 || annualReturn === 0) {
        if (typeof showResult === 'function') {
            showResult('independenceResult', 'Por favor, preencha todos os campos.', 'error');
        } else {
            console.error('Função showResult não encontrada');
            document.getElementById('independenceResult').innerHTML = 'Por favor, preencha todos os campos.';
        }
        return;
    }
    const yearlyExpenses = monthlyExpenses * 12;
    const monthlyReturn = annualReturn / 12 / 100;
    const targetAmount = yearlyExpenses / (annualReturn / 100);
    const suggestedMonthlyInvestment = monthlyExpenses * 0.2;
    const monthsToIndependence = Math.log(
        1 + (targetAmount * monthlyReturn) / suggestedMonthlyInvestment
    ) / Math.log(1 + monthlyReturn);
    const yearsToIndependence = monthsToIndependence / 12;
    const resultHTML = `
        <h4>Sua Independência Financeira</h4>
        <p><strong>Patrimônio Necessário:</strong> ${formatCurrency(targetAmount)}</p>
        <p><strong>Renda Passiva Mensal:</strong> ${formatCurrency(monthlyExpenses)}</p>
        <p><strong>Investimento Mensal Sugerido:</strong> ${formatCurrency(suggestedMonthlyInvestment)}</p>
        <p><strong>Tempo Estimado:</strong> ${yearsToIndependence.toFixed(1)} anos</p>
        <div class="mt-1">
            <small>*Considerando aportes mensais de 20% dos seus gastos</small>
        </div>    `;
    if (typeof showResult === 'function') {
        showResult('independenceResult', resultHTML, 'success');
    } else {
        console.error('Função showResult não encontrada');
        document.getElementById('independenceResult').innerHTML = resultHTML;
    }
}
window.calculateFinancialIndependence = calculateFinancialIndependence;
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}
window.formatCurrency = formatCurrency;
