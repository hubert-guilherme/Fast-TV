// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.8)';
    }
    
    lastScroll = currentScroll;
});

// ===== SCROLL REVEAL ANIMATION =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos que devem aparecer ao scroll
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.feature-card, .pricing-card, .promo-content'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// ===== CONTADOR DE ECONOMIA =====
function calcularEconomia() {
    const planos = [
        { meses: 1, valor: 34.90 },
        { meses: 3, valor: 94.90 },
        { meses: 6, valor: 169.90 },
        { meses: 12, valor: 299.90 }
    ];
    
    planos.forEach((plano, index) => {
        if (index > 0) {
            const valorMensal = planos[0].valor;
            const economiaTotal = (valorMensal * plano.meses) - plano.valor;
            console.log(`Economia no plano de ${plano.meses} meses: R$ ${economiaTotal.toFixed(2)}`);
        }
    });
}

calcularEconomia();

// ===== ANIMAÇÃO DOS CARDS DE PREÇO =====
const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== SCROLL INDICATOR =====
const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
    
    // Esconder indicador após scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    });
}

// ===== CONTADOR DE VISITANTES (SIMULADO) =====
function atualizarContador() {
    const visitantesOnline = Math.floor(Math.random() * 50) + 150;
    console.log(`Visitantes online: ${visitantesOnline}`);
}

// Atualizar a cada 30 segundos
setInterval(atualizarContador, 30000);
atualizarContador();

// ===== BOTÃO WHATSAPP - ADICIONAR EFEITO DE PULSO AO CARREGAR =====
window.addEventListener('load', () => {
    const whatsappButton = document.querySelector('.whatsapp-float');
    if (whatsappButton) {
        setTimeout(() => {
            whatsappButton.style.animation = 'pulse 2s infinite';
        }, 2000);
    }
});

// ===== LAZY LOADING DE IMAGENS (SE HOUVER) =====
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback para navegadores que não suportam lazy loading nativo
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===== PRELOADER (OPCIONAL) =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== DETECTAR DISPOSITIVO MÓVEL =====
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
    console.log('Dispositivo móvel detectado');
    // Adicionar classe para estilos específicos mobile se necessário
    document.body.classList.add('mobile-device');
}

// ===== VALIDAÇÃO DE LINKS DO WHATSAPP =====
document.addEventListener('DOMContentLoaded', () => {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Adicionar analytics ou tracking aqui se necessário
            console.log('Link do WhatsApp clicado');
        });
    });
});

// ===== EFEITO PARALLAX NO HERO (OPCIONAL) =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===== COPIAR NÚMERO DO WHATSAPP (FUNCIONALIDADE EXTRA) =====
function copiarNumeroWhatsApp() {
    const numero = '5531999999999'; // ALTERE PARA SEU NÚMERO
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(numero).then(() => {
            console.log('Número copiado!');
            // Você pode adicionar uma notificação visual aqui
        }).catch(err => {
            console.error('Erro ao copiar:', err);
        });
    }
}

// ===== MENSAGEM DE BOAS-VINDAS NO CONSOLE =====
console.log('%c🎬 BOXTV - Landing Page 🎬', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
console.log('%cDesenvolvido com ❤️', 'color: #ff0080; font-size: 14px;');
console.log('%cPara suporte técnico, entre em contato via WhatsApp', 'color: #25D366; font-size: 12px;');

// ===== ANIMAÇÃO DO TEXTO DO HERO (OPCIONAL) =====
function animarTextoHero() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.opacity = '1';
        
        let i = 0;
        const typeWriter = setInterval(() => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeWriter);
            }
        }, 50);
    }
}

// Descomentar a linha abaixo se quiser ativar o efeito de máquina de escrever
// window.addEventListener('load', animarTextoHero);

// ===== FUNÇÃO PARA ADICIONAR MAIS PLANOS DINAMICAMENTE (SE NECESSÁRIO) =====
function adicionarPlanoPersonalizado(meses, valor, destaque = false) {
    const pricingGrid = document.querySelector('.pricing-grid');
    
    const valorMensal = 34.90;
    const economia = (valorMensal * meses) - valor;
    
    const card = document.createElement('div');
    card.className = `pricing-card ${destaque ? 'featured' : ''}`;
    
    card.innerHTML = `
        ${destaque ? '<div class="badge">DESTAQUE</div>' : ''}
        <div class="pricing-header">
            <h3>${meses} ${meses > 1 ? 'Meses' : 'Mês'}</h3>
            <div class="price">
                <span class="currency">R$</span>
                <span class="amount">${Math.floor(valor)}</span>
                <span class="cents">,${(valor % 1).toFixed(2).slice(2)}</span>
            </div>
            <p class="period">${meses} ${meses > 1 ? 'meses' : 'mês'}</p>
            ${economia > 0 ? `<span class="economy">Economia de R$ ${economia.toFixed(2)}</span>` : ''}
        </div>
        <ul class="features-list">
            <li><i class="fas fa-check"></i> Todos os canais</li>
            <li><i class="fas fa-check"></i> Filmes e séries</li>
            <li><i class="fas fa-check"></i> Esportes ao vivo</li>
            <li><i class="fas fa-check"></i> Suporte 24h</li>
        </ul>
        <a href="#contato" class="btn ${destaque ? 'btn-primary' : 'btn-outline'}">Assinar Agora</a>
    `;
    
    pricingGrid.appendChild(card);
}

// Exemplo de uso: adicionarPlanoPersonalizado(9, 249.90, true);

// ===== FAQ ACCORDION =====
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Fechar outros itens (opcional - remova este bloco se quiser permitir múltiplos abertos)
            const isActive = item.classList.contains('active');
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle do item clicado
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Abrir primeira pergunta automaticamente (opcional)
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
});