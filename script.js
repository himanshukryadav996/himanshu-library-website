// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
const backToTopButton = document.getElementById('backToTop');
const registerButton = document.getElementById('registerButton');
const passwordModal = document.getElementById('passwordModal');
const closeModalBtn = document.querySelector('.close');
const submitPasswordBtn = document.getElementById('submitPassword');
const cancelPasswordBtn = document.getElementById('cancelPassword');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const togglePasswordBtn = document.getElementById('togglePassword');
const successModal = document.getElementById('successModal');
const closeSuccessBtn = document.querySelector('.close-success');
const closeSuccessModalBtn = document.getElementById('closeSuccessModal');
const successMessage = document.getElementById('successMessage');
const contactForm = document.getElementById('contactForm');

// Hamburger menu toggle
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Create animation for hamburger menu
        const bars = menuToggle.querySelectorAll('.bar');
        if (menuToggle.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });
}

// Navigation menu item click - close mobile menu
document.querySelectorAll('.nav-menu a').forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        
        // Reset hamburger icon
        const bars = menuToggle.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
        
        // Set active class to clicked navigation item
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
        });
        item.classList.add('active');
    });
});

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = 'none';
    }
    
    // Show/hide back to top button
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
    
    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section');
    let scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
});

// Back to top functionality
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Password Modal Functionality
if (registerButton) {
    registerButton.addEventListener('click', () => {
        passwordModal.style.display = 'block';
        passwordInput.value = '';
        passwordError.style.display = 'none';
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        passwordModal.style.display = 'none';
    });
}

if (cancelPasswordBtn) {
    cancelPasswordBtn.addEventListener('click', () => {
        passwordModal.style.display = 'none';
    });
}

// Toggle Password Visibility
if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePasswordBtn.querySelector('i').className = type === 'password' ? 'far fa-eye' : 'far fa-eye-slash';
    });
}

// Password Validation & Google Form Redirect
if (submitPasswordBtn) {
    submitPasswordBtn.addEventListener('click', () => {
        const correctPassword = "Himalok@476";
        const enteredPassword = passwordInput.value;
        
        if (enteredPassword === correctPassword) {
            passwordModal.style.display = 'none';
            // Open Google Form in a new tab
            window.open('https://docs.google.com/forms/d/e/1FAIpQLScP5ys0om4WFvgpdJ5DPO4XPJqKTXGMRNQt7Utlc9P4Qpt-Wg/viewform', '_blank');
            
            // Show success message
            successMessage.textContent = "Registration form opened successfully!";
            successModal.style.display = 'block';
        } else {
            passwordError.textContent = "Incorrect password. Please try again.";
            passwordError.style.display = "block";
            passwordInput.classList.add('error');
            
            // Shake animation for incorrect password
            passwordInput.style.animation = "shake 0.5s";
            setTimeout(() => {
                passwordInput.style.animation = "";
            }, 500);
        }
    });
}

// Success Modal Handling
if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', () => {
        successModal.style.display = 'none';
    });
}

if (closeSuccessModalBtn) {
    closeSuccessModalBtn.addEventListener('click', () => {
        successModal.style.display = 'none';
    });
}

// Contact Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission (would be replaced with actual form submission)
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        
        // Display success message
        successMessage.textContent = `Thank you ${name}! Your message has been sent successfully. We will get back to you soon.`;
        successModal.style.display = 'block';
        
        // Reset form
        contactForm.reset();
    });
}

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === passwordModal) {
        passwordModal.style.display = 'none';
    }
    if (e.target === successModal) {
        successModal.style.display = 'none';
    }
});

// Keydown event for password input (enter key)
if (passwordInput) {
    passwordInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            submitPasswordBtn.click();
        }
    });
}

// Animation for elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animated');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            const animationType = element.classList.contains('fadeInUp') ? 'fadeInUp' :
                                 element.classList.contains('fadeInLeft') ? 'fadeInLeft' :
                                 element.classList.contains('fadeInRight') ? 'fadeInRight' :
                                 'fadeIn';
            
            element.style.opacity = '1';
            element.style.animation = `${animationType} 1s forwards`;
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add animation class to all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('animated');
    });
    
    // Add animation class to specific elements
    const animatedElements = document.querySelectorAll('.service-card, .about-text, .about-image, .register-info, .register-button-container, .contact-info, .contact-form-container');
    animatedElements.forEach(element => {
        element.classList.add('animated');
    });
    
    // Trigger animation
    animateOnScroll();
    
    // Set first nav item as active by default
    document.querySelector('.nav-menu a').classList.add('active');
});

// Add shake animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);
