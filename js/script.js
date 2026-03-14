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
window.addEventListener('load', () => {
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
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

function handleSubmit() {
  const name = document.getElementById('f-name').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const exam = document.getElementById('f-exam').value;
  const course = document.getElementById('f-course').value;
  const consent = document.getElementById('f-consent').checked;

  if (!name || !phone || !exam || !course || !consent) {
    alert('Please fill in all required fields and accept the privacy policy.');
    return;
  }

  document.getElementById('formSuccess').style.display = 'flex';
  document.querySelector('.btn-submit').disabled = true;
}

// blog-detail.js — save as js/blog-detail.js

// Active TOC link on scroll
const bdSections = document.querySelectorAll('.bd-article section[id]');
const bdTocLinks = document.querySelectorAll('.bd-toc-link');

if (bdSections.length && bdTocLinks.length) {
  const tocObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        bdTocLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });

  bdSections.forEach(s => tocObserver.observe(s));
}

// Copy link button
const copyBtn = document.querySelector('.bd-copy-btn');
if (copyBtn) {
  copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href).then(() => {
      const svg = copyBtn.querySelector('svg').outerHTML;
      copyBtn.innerHTML = svg + ' Copied!';
      setTimeout(() => { copyBtn.innerHTML = svg + ' Copy Link'; }, 2000);
    });
  });
}