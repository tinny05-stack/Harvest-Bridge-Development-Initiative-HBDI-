/* ============================================
   HARVEST BRIDGE DEVELOPMENT INITIATIVE
   Main JavaScript File
   ============================================ */

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initScrollAnimations();
  initCounterAnimations();
  initMobileMenu();
  initContactForm();
});

/* ============================================
   NAVIGATION
   ============================================ */
function initNavigation() {
  const nav = document.querySelector('.nav');
  
  // Scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  
  // Set active link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ============================================
   MOBILE MENU
   ============================================ */
function initMobileMenu() {
  const toggle = document.querySelector('.nav-mobile-toggle');
  const mobileMenu = document.querySelector('.nav-mobile');
  
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Animate hamburger
      const spans = toggle.querySelectorAll('span');
      if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
    
    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        const spans = toggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(el => observer.observe(el));
}

/* ============================================
   COUNTER ANIMATIONS
   ============================================ */
function initCounterAnimations() {
  const counters = document.querySelectorAll('[data-counter]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });
  
  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-counter'));
  const suffix = element.getAttribute('data-suffix') || '';
  const prefix = element.getAttribute('data-prefix') || '';
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
  }, 16);
}

/* ============================================
   CONTACT FORM
   ============================================ */
function initContactForm() {
  const form = document.getElementById('hbdi-contact-form');
  if (!form) {
    return;
  }

  const statusMessage = document.getElementById('hbdi-contact-status');
  const submitBtn = form.querySelector('.form-submit');
  const originalSubmitText = submitBtn ? submitBtn.textContent : '';
  const emailJsPublicKey = 'LDbXUqkHdcveswBBw';
  const emailJsServiceId = 'service_7ynshau';
  const emailJsTemplateId = 'template_2n7upfh';

  if (window.emailjs) {
    emailjs.init({
      publicKey: emailJsPublicKey
    });
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = '#ef4444';
      } else {
        field.style.borderColor = '';
      }
    });

    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailField.value)) {
        isValid = false;
        emailField.style.borderColor = '#ef4444';
      }
    }

    if (!isValid) {
      if (statusMessage) {
        statusMessage.textContent = 'Please complete all required fields correctly.';
        statusMessage.style.color = '#ef4444';
      }
      return;
    }

    if (!window.emailjs) {
      if (statusMessage) {
        statusMessage.textContent = 'Message could not be sent. Please try again later.';
        statusMessage.style.color = '#ef4444';
      }
      return;
    }

    const firstName = form.querySelector('#firstName').value.trim();
    const lastName = form.querySelector('#lastName').value.trim();
    form.querySelector('#name').value = `${firstName} ${lastName}`.trim();

    if (statusMessage) {
      statusMessage.textContent = '';
    }

    if (submitBtn) {
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
    }

    emailjs.sendForm(emailJsServiceId, emailJsTemplateId, form)
      .then(function() {
        if (statusMessage) {
          statusMessage.textContent = 'Message sent successfully (H.B.D.I)';
          statusMessage.style.color = '#2d5a27';
        }

        form.reset();
      })
      .catch(function() {
        if (statusMessage) {
          statusMessage.textContent = 'Message could not be sent. Please try again later.';
          statusMessage.style.color = '#ef4444';
        }
      })
      .finally(function() {
        if (submitBtn) {
          submitBtn.textContent = originalSubmitText;
          submitBtn.disabled = false;
        }
      });
  });

  const inputs = form.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      this.style.borderColor = '';
      if (statusMessage) {
        statusMessage.textContent = '';
      }
    });
  });
}

/* ============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});
