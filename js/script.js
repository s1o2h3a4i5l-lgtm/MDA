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


function indexToggle(id, btn) {
  const el = document.getElementById(id);
  const isOpen = el.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  btn.childNodes[0].textContent = isOpen ? 'Read Less ' : 'Read More ';
}

// ─── Courses Section ─────────────────────────────────────────────────────────

const PAGE_EXAM_MAP = {
  'ceed.html':  'ceed',
  'uceed.html': 'uceed',
  'nid.html':   'nid-bdes',
  'nift.html':  'nift-bdes',
  'jee.html':   'jee2',
  'nata.html':  'nata',
  'fp.html':    'portfolio',
};

const COURSE_SECTION_HTML = `
<section id="courses">
  <div class="courses-grid r v">
    <div class="course-card featured">
      <div class="course-rec">⭐ Most Recommended</div>
      <div class="course-duration" style="color:#d4ff00">2 YEAR</div>
      <div class="course-type">Online / Offline</div>
      <div class="course-divider"></div>
      <ul class="course-features">
        <li>11 months Foundation + 7 months Advanced</li>
        <li>Hands-on workshops with industry designers</li>
        <li>3 classes per week + 1 module test per month</li>
        <li>Test series — 15 papers with discussions</li>
        <li>Studio tests &amp; portfolio preparation</li>
        <li>Masterclasses, campus visits, field trips</li>
      </ul>
      <a class="course-btn" href="contactus.html">Enroll Now</a>
    </div>
    <div class="course-card">
      <div class="course-duration">1 YEAR</div>
      <div class="course-type">Online / Offline</div>
      <div class="course-divider"></div>
      <ul class="course-features">
        <li>4 months Foundation run alongside 7 months Advanced</li>
        <li>3 classes per week + 1 module test per month</li>
        <li>Test series — 15 papers with discussions</li>
        <li>Studio tests &amp; portfolio preparation</li>
        <li>Masterclasses &amp; campus visits</li>
      </ul>
      <a class="course-btn" href="contactus.html">Enroll Now</a>
    </div>
    <div class="course-card">
      <div class="course-duration">TEST SERIES</div>
      <div class="course-type">Online / Offline</div>
      <div class="course-divider"></div>
      <ul class="course-features">
        <li>15 full-length test papers</li>
        <li>Detailed paper discussions after each test</li>
        <li>Studio test preparation</li>
        <li>Portfolio guidance sessions</li>
      </ul>
      <a class="course-btn" href="contactus.html">Enroll Now</a>
    </div>
  </div>
  <section class="uc-cta">
    <div class="uc-r" style="display:flex;flex-direction:column;align-items:center;gap:1rem;text-align:center;">
      <p style="color:rgba(255,255,255,0.5);font-size:0.8rem;letter-spacing:0.2em;">OR</p>
      <a class="uc-btn-accent" href="https://wa.me/918806105855" target="_blank">Book a Free Demo →</a>
    </div>
  </section>
</section>`;

(function () {
  var placeholders = document.querySelectorAll('.courses-section-placeholder');
  if (!placeholders.length) return;

  var page = window.location.pathname.split('/').pop() || 'index.html';
  var pageExam = PAGE_EXAM_MAP[page] || '';

  placeholders.forEach(function (placeholder) {
    var exam = placeholder.getAttribute('data-exam') || pageExam;

    var alreadyInsideSection = placeholder.closest('#courses') !== null;

    var wrapper = document.createElement('div');
    wrapper.innerHTML = COURSE_SECTION_HTML;
    var toInject = alreadyInsideSection
      ? wrapper.querySelector('.courses-grid')
      : wrapper.firstElementChild;

    toInject.querySelectorAll('.course-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var card = this.closest('.course-card');
        var duration = card ? card.querySelector('.course-duration').textContent.trim().toUpperCase() : '';
        var course = 'tbd';
        if (duration.indexOf('2') !== -1)         course = '2yr';
        else if (duration.indexOf('1') !== -1)    course = '1yr';
        else if (duration.indexOf('TEST') !== -1) course = 'test-series';
        var url = 'contactus.html?course=' + course;
        if (exam) url += '&exam=' + exam;
        window.location.href = url;
      });
    });

    placeholder.parentNode.replaceChild(toInject, placeholder);
  });
})();