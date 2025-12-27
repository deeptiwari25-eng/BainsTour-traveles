/* ============================================
   TAXI SERVICE WEBSITE - JAVASCRIPT
   ============================================ */

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (name === '' || phone === '' || message === '') {
      alert('Please fill in all fields');
      return;
    }

    if (phone.length < 10) {
      alert('Please enter a valid phone number');
      return;
    }

    // Send to WhatsApp (you can also send to email via backend)
    const whatsappMessage = `Hello! My name is ${name}. Phone: ${phone}. Message: ${message}`;
    const whatsappLink = `https://wa.me/917307562498?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Show success message
    alert('Thank you! Your message will be sent. Redirecting to WhatsApp...');
    window.open(whatsappLink, '_blank');

    // Reset form
    contactForm.reset();
  });
}

// Sticky Call Button
const stickyCall = document.querySelector('.sticky-call');
if (stickyCall) {
  stickyCall.addEventListener('click', function () {
    // Replace with actual phone number
    window.location.href = 'tel:+917307562498';
  });
}

// WhatsApp Button
const whatsappBtn = document.querySelector('.whatsapp-button');
if (whatsappBtn) {
  whatsappBtn.addEventListener('click', function () {
    // Replace with actual WhatsApp number
    const message = 'Hi! I would like to book a taxi service.';
    window.open(`https://wa.me/917307562498?text=${encodeURIComponent(message)}`, '_blank');
  });
}

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply scroll animation to cards and sections
document.querySelectorAll('.highlight-card, .service-card, .package-card, .vehicle-card, .testimonial-card').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.color = '';
      });
      if (navLink) {
        navLink.style.color = '#F4D03F';
      }
    }
  });
});

// Show/hide sticky call button based on scroll
window.addEventListener('scroll', () => {
  if (window.innerWidth <= 768) {
    const stickyCall = document.querySelector('.sticky-call');
    if (stickyCall) {
      if (window.scrollY > 300) {
        stickyCall.style.display = 'flex';
      } else {
        stickyCall.style.display = 'none';
      }
    }
  }
});

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function () {
    if (this.form && !this.form.action) {
      // Only for form buttons
      this.style.opacity = '0.7';
      setTimeout(() => {
        this.style.opacity = '1';
      }, 300);
    }
  });
});

// Counter animation for stats (if any)
const animateCounter = (element, target, duration = 2000) => {
  let current = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + '+';
    }
  }, 16);
};

// Service availability indicator (24x7)
document.addEventListener('DOMContentLoaded', () => {
  const hour = new Date().getHours();
  const availability = document.querySelector('.availability');
  
  if (availability) {
    availability.textContent = '🟢 Available 24/7';
    availability.style.color = '#25d366';
  }
});

/* ============================================
   HERO SLIDER LOGIC
   ============================================ */
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let currentSlide = 0;
let slideInterval;

// Function to show a specific slide
function showSlide(index) {
  // Remove active class from all slides
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // Handle index bounds
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  // Add active class to current slide
  slides[currentSlide].classList.add('active');
}

// Next Slide Function
function nextSlide() {
  showSlide(currentSlide + 1);
}

// Previous Slide Function
function prevSlide() {
  showSlide(currentSlide - 1);
}

// Event Listeners for Buttons
if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });
}

// Auto Slide Functionality
function startSlideShow() {
  slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function resetInterval() {
  clearInterval(slideInterval);
  startSlideShow();
}

// Initialize Slider if slides exist
if (slides.length > 0) {
  startSlideShow();
}

console.log('Taxi Service Website Loaded Successfully');

