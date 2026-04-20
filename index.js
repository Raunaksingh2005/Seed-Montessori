// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const header = document.querySelector('.header');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const enrollBtn = document.getElementById('enrollBtn');
const heroEnrollBtn = document.getElementById('heroEnrollBtn');
const learnMoreBtn = document.getElementById('learnMoreBtn');
const enrollmentModal = document.getElementById('enrollmentModal');
const successModal = document.getElementById('successModal');
const modalClose = document.getElementById('modalClose');
const successClose = document.getElementById('successClose');
const enrollmentForm = document.getElementById('enrollmentForm');
const contactForm = document.getElementById('contactForm');
const captchaDisplay = document.getElementById('captchaDisplay');
const captchaInput = document.getElementById('captchaInput');
const refreshCaptcha = document.getElementById('refreshCaptcha');
const statNumbers = document.querySelectorAll('.stat-number');

// Global Variables
let currentCaptcha = '';
let isSubmitting = false;

// Initialize App
function initApp() {
    console.log("Initializing app...");
    initLoadingScreen();
    initNavigation();
    initModal();
    initForms();
    initAnimations();
    initCounters();
}

// Loading Screen
function initLoadingScreen() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1500);
    });
}

// Navigation
function initNavigation() {
    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Learn more button
    learnMoreBtn.addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
}

// Modal System
function initModal() {
    // Open modals
    enrollBtn.addEventListener('click', () => openModal(enrollmentModal));
    heroEnrollBtn.addEventListener('click', () => openModal(enrollmentModal));

    // Close modals
    modalClose.addEventListener('click', () => closeModal(enrollmentModal));
    successClose.addEventListener('click', () => closeModal(successModal));
    
    // Close modal when clicking outside
    [enrollmentModal, successModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (enrollmentModal.classList.contains('active')) closeModal(enrollmentModal);
            if (successModal.classList.contains('active')) closeModal(successModal);
        }
    });
}

function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (modal === enrollmentModal) {
        generateCaptcha();
    }
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    if (modal === enrollmentModal) {
        resetForm(enrollmentForm);
    }
}

function resetForm(form) {
    form.reset();
    if (form === enrollmentForm) {
        captchaInput.value = '';
    }
    isSubmitting = false;
    const submitBtn = form.querySelector('.btn-submit');
    if (submitBtn) {
        submitBtn.classList.remove('loading');
    }
}

function showSuccessModal() {
    closeModal(enrollmentModal);
    openModal(successModal);
}

// CAPTCHA System
function generateCaptcha() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let captcha = '';
    
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    currentCaptcha = captcha;
    captchaDisplay.textContent = captcha;
}

refreshCaptcha.addEventListener('click', generateCaptcha);

// Form Handling
function initForms() {
    // Enrollment form
    enrollmentForm.addEventListener('submit', handleEnrollmentSubmit);
    
    // Contact form
    contactForm.addEventListener('submit', handleContactSubmit);
}

async function handleEnrollmentSubmit(e) {
    e.preventDefault();
    console.log("Enrollment form submitted");
    
    if (isSubmitting) return;
    
    if (!validateForm(enrollmentForm)) {
        showNotification('Please fill in all required fields correctly.', 'error');
        return;
    }
    
    // Validate CAPTCHA
    if (captchaInput.value !== currentCaptcha) {
        showNotification('CAPTCHA verification failed. Please try again.', 'error');
        generateCaptcha();
        captchaInput.value = '';
        return;
    }
    
    isSubmitting = true;
    const submitBtn = enrollmentForm.querySelector('.btn-submit');
    submitBtn.classList.add('loading');
    
    try {
        const formData = {
            parentName: document.getElementById('parentName').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            childName: document.getElementById('childName').value.trim(),
            childAge: document.getElementById('childAge').value,
            program: document.getElementById('program').value,
            message: document.getElementById('message').value.trim(),
            timestamp: new Date().toISOString(),
            status: 'new',
            type: 'enrollment'
        };
        
        console.log('Form data:', formData);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log('Successfully submitted enrollment form');
        
        showSuccessModal();
        resetForm(enrollmentForm);
        
    } catch (error) {
        console.error('Error submitting enrollment:', error);
        showNotification('There was an error submitting your registration. Please try again.', 'error');
        isSubmitting = false;
        submitBtn.classList.remove('loading');
    }
}

async function handleContactSubmit(e) {
    e.preventDefault();
    console.log("Contact form submitted");
    
    if (!validateForm(contactForm)) {
        showNotification('Please fill in all required fields correctly.', 'error');
        return;
    }
    
    const submitBtn = contactForm.querySelector('.btn-submit');
    submitBtn.classList.add('loading');
    
    try {
        const formData = {
            name: contactForm.querySelector('input[name="contactName"]').value.trim(),
            email: contactForm.querySelector('input[name="contactEmail"]').value.trim(),
            phone: contactForm.querySelector('input[name="contactPhone"]').value.trim(),
            message: contactForm.querySelector('textarea[name="contactMessage"]').value.trim(),
            timestamp: new Date().toISOString(),
            type: 'contact'
        };
        
        console.log('Contact form data:', formData);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log('Successfully submitted contact form');
        
        showNotification('Message sent successfully! We will get back to you soon.', 'success');
        contactForm.reset();
        
    } catch (error) {
        console.error('Error submitting contact:', error);
        showNotification('There was an error sending your message. Please try again.', 'error');
    } finally {
        submitBtn.classList.remove('loading');
    }
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            highlightError(input);
        } else {
            removeError(input);
        }
    });
    
    // Email validation
    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput && emailInput.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            highlightError(emailInput);
        }
    }
    
    return isValid;
}

function highlightError(element) {
    element.style.borderColor = '#e74c3c';
}

function removeError(element) {
    element.style.borderColor = '#e9ecef';
}

// Animations
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.facility-card, .program-card, .contact-item, .about-feature').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// Counter Animation
function initCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => {
                    animateCounter(stat);
                });
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector('.hero-stats'));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}" aria-hidden="true"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                transform: translateX(400px);
                transition: transform 0.3s ease;
                z-index: 10000;
                border-left: 4px solid #6A8B4A;
                max-width: 400px;
            }
            
            .notification.error {
                border-left-color: #e74c3c;
            }
            
            .notification.show {
                transform: translateX(0);
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }
            
            .notification i {
                color: #6A8B4A;
            }
            
            .notification.error i {
                color: #e74c3c;
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Auto-open modal after delay
setTimeout(() => {
    if (!enrollmentModal.classList.contains('active') && !successModal.classList.contains('active')) {
        openModal(enrollmentModal);
    }
}, 5000);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);