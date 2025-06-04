const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};
const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobileDevice = window.innerWidth <= 768;
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            if (element.classList.contains('service-card')) {
                element.classList.add('animate-slide-up');
            } else if (element.classList.contains('stat')) {
                element.classList.add('animate-fade-in');
            } else if (element.classList.contains('calculator-card')) {
                element.classList.add('animate-scale-in');
            } else {
                element.classList.add('animate-fade-in');
            }
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            observer.unobserve(element);
        }
    });
}, observerOptions);
function initStaggeredAnimations() {
    const cardGroups = {
        '.service-card': 'animate-slide-up',
        '.calculator-card': 'animate-scale-in',
        '.stat': 'animate-fade-in'
    };
    Object.entries(cardGroups).forEach(([selector, animationClass]) => {
        const cards = document.querySelectorAll(selector);
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            if (!isReducedMotion) {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }
            observer.observe(card);
        });
    });
}
window.observer = observer;
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
        if (target >= 1000000) {
            element.textContent = (current / 1000000).toFixed(1) + 'M';
        } else if (target >= 1000) {
            element.textContent = Math.floor(current).toLocaleString('pt-BR');
        } else if (target < 100) {
            element.textContent = Math.floor(current) + '%';
        }
    }, 16);
}
const statNumbers = document.querySelectorAll('.stat h3');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const text = entry.target.textContent;
            const value = parseInt(text.replace(/\D/g, ''));
            if (text.includes('+') || text.includes('%')) {
                animateCounter(entry.target, value);
            }
        }
    });
}, { threshold: 0.5 });
statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});
function initScrollToTop() {
    const scrollTopButton = document.createElement('div');
    scrollTopButton.className = 'scroll-top';
    scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopButton.setAttribute('aria-label', 'Voltar ao topo');
    document.body.appendChild(scrollTopButton);
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                if (window.pageYOffset > 300) {
                    scrollTopButton.classList.add('active');
                } else {
                    scrollTopButton.classList.remove('active');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}
function initParallaxEffect() {
    if (isReducedMotion || isMobileDevice) return;
    const parallaxElements = document.querySelectorAll('.hero, .parallax-bg');
    let ticking = false;
    const updateParallax = () => {
        const scrollY = window.pageYOffset;
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const transform = `translateY(${scrollY * speed}px)`;
            element.style.transform = transform;
        });
        ticking = false;
    };
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}
function initAnimations() {
    initStaggeredAnimations();
    initScrollToTop();
    initParallaxEffect();
    console.log('Enhanced animations initialized');
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
} else {
    initAnimations();
}
