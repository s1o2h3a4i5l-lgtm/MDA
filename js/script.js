// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('v');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.r').forEach(el => observer.observe(el));

// Trigger elements already in view on load
window.addEventListener('load', () => {
  document.querySelectorAll('.r').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) el.classList.add('v');
  });
});
// Dropdown
const dropdownParent = document.querySelector('.has-dropdown');
const dropdownToggle = document.querySelector('.has-dropdown > a');
const dropdown = document.querySelector('.dropdown');

dropdownToggle.addEventListener('click', (e) => {
  e.preventDefault();
  dropdownParent.classList.toggle('open');
  dropdown.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.has-dropdown')) {
    dropdownParent.classList.remove('open');
    dropdown.classList.remove('open');
  }
});
window.addEventListener('scroll', () => {
  dropdownParent.classList.remove('open');
  dropdown.classList.remove('open');
}, { passive: true });

// Scroll to top
const scrollBtn = document.getElementById('scrollTopBtn');
if (scrollBtn) {
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const hamburger = document.getElementById('navHamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (!link.closest('.has-dropdown')) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });
});



