// ================================
// EMAILJS CONFIGURATION
// ================================

// EmailJS initialization
(function() {
    emailjs.init("ne9rT0ejhMmnkPT63");
})();

// ================================
// NAVBAR SCROLL EFFECT
// ================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ================================
// MOBILE MENU TOGGLE
// ================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ================================
// SMOOTH SCROLLING
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// INTERSECTION OBSERVER ANIMATIONS
// ================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Observe cards and other elements
const elementsToObserve = [
    '.service-card',
    '.benefit-card',
    '.partner-card',
    '.feature-item'
];

elementsToObserve.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        observer.observe(element);
    });
});

// ================================
// CONTACT FORM WITH EMAILJS
// ================================

const contactForm = document.getElementById('contactForm');
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validation
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company');
    const interest = formData.get('interest');
    
    if (!name || !email || !company || !interest) {
        showNotification('⚠ Please fill in all required fields.', 'warning');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('⚠ Please enter a valid email address.', 'warning');
        return;
    }
    
    // Button'u disable et ve loading state'e al
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<span style="display: inline-flex; align-items: center; gap: 8px;"><svg style="animation: spin 1s linear infinite;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" opacity="0.75"/></svg> Sending...</span>';
    
    // EmailJS ile mail gönder
    emailjs.sendForm(
        'service_42x412j',
        'template_8do4xuc',
        contactForm
    )
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        
        // Başarılı mesajı göster
        showNotification('✓ Thank you! Your message has been sent successfully. We will contact you soon.', 'success');
        
        // Formu sıfırla
        contactForm.reset();
        
        // Button'u eski haline döndür
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
        
    }, function(error) {
        console.log('FAILED...', error);
        
        // Hata mesajı göster
        showNotification('✕ Oops! Something went wrong. Please try again or contact us directly.', 'error');
        
        // Button'u eski haline döndür
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
    });
});

// ================================
// NOTIFICATION SYSTEM
// ================================

function showNotification(message, type) {
    // Mevcut notification varsa kaldır
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Yeni notification oluştur
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animasyon için kısa bir gecikme
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // 7 saniye sonra otomatik kapat
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 7000);
}

// ================================
// ACTIVE NAVIGATION STATE
// ================================

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
});

// ================================
// PARALLAX EFFECT
// ================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-background');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ================================
// COUNTER ANIMATION
// ================================

const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

// Observe stat numbers
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            const targetValue = statNumber.getAttribute('data-target');
            if (targetValue && !isNaN(targetValue)) {
                animateCounter(statNumber, parseInt(targetValue));
            }
            statObserver.unobserve(statNumber);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    const originalValue = stat.textContent;
    stat.setAttribute('data-target', originalValue);
    statObserver.observe(stat);
});

// ================================
// LOADING ANIMATION
// ================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ================================
// CSS FOR ANIMATIONS
// ================================

const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    /* Notification Styles */
    .notification {
        position: fixed;
        top: 100px;
        right: -400px;
        z-index: 10000;
        max-width: 400px;
        transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .notification.show {
        right: 24px;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 20px 24px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        border-left: 4px solid #3b82f6;
    }
    
    .notification-success .notification-content {
        border-left-color: #10b981;
        background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
    }
    
    .notification-error .notification-content {
        border-left-color: #ef4444;
        background: linear-gradient(135deg, #ffffff 0%, #fef2f2 100%);
    }
    
    .notification-warning .notification-content {
        border-left-color: #f59e0b;
        background: linear-gradient(135deg, #ffffff 0%, #fffbeb 100%);
    }
    
    .notification-content span {
        flex: 1;
        font-size: 15px;
        font-weight: 600;
        color: #1e293b;
        line-height: 1.5;
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 28px;
        line-height: 1;
        cursor: pointer;
        color: #64748b;
        transition: all 0.2s;
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        flex-shrink: 0;
    }
    
    .notification-close:hover {
        background: rgba(0, 0, 0, 0.05);
        color: #1e293b;
    }
    
    @media (max-width: 640px) {
        .notification {
            right: -100%;
            left: 16px;
            max-width: calc(100% - 32px);
        }
        
        .notification.show {
            right: auto;
        }
        
        .notification-content {
            padding: 16px 20px;
        }
        
        .notification-content span {
            font-size: 14px;
        }
    }
`;
document.head.appendChild(style);

// ================================
// FORM INPUT ENHANCEMENTS
// ================================

// Add floating label effect
const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// ================================
// PREVENT FORM RESUBMISSION
// ================================

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

console.log('🚀 EAO International Trade - Website Loaded Successfully!');
console.log('📧 EmailJS Integration Active');
console.log('⚠️  Remember to configure EmailJS credentials in script.js');
