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

async function handleSubmit() {
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'; // ← replace later

  const name    = document.getElementById('f-name').value.trim();
  const phone   = document.getElementById('f-phone').value.trim();
  const exam    = document.getElementById('f-exam').value;
  const course  = document.getElementById('f-course').value;
  const email   = document.getElementById('f-email').value.trim();
  const grade   = document.getElementById('f-grade').value;
  const message = document.getElementById('f-message').value.trim();

  if (!name) { alert('Please enter your full name.'); return; }
  if (!phone || phone.length !== 10 || !/^\d{10}$/.test(phone)) { alert('Please enter a valid 10-digit phone number.'); return; }
  if (!exam) { alert('Please select an exam you\'re targeting.'); return; }
  if (!course) { alert('Please select what you\'re interested in.'); return; }

  const btn = document.querySelector('.btn-submit');
  const originalHTML = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = 'Sending…';

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name, phone, exam, course, email, grade, message })
    });

    if (res.ok) {
      document.getElementById('formSuccess').style.display = 'flex';
      document.querySelector('.submit-row').style.display = 'none';
      ['f-name', 'f-phone', 'f-email', 'f-message'].forEach(id => document.getElementById(id).value = '');
      ['f-exam', 'f-course', 'f-grade'].forEach(id => document.getElementById(id).selectedIndex = 0);
    } else {
      const data = await res.json();
      alert(data?.errors?.[0]?.message || 'Something went wrong. Please try again.');
      btn.disabled = false;
      btn.innerHTML = originalHTML;
    }
  } catch (err) {
    alert('Network error. Please check your connection and try again.');
    btn.disabled = false;
    btn.innerHTML = originalHTML;
  }
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
      <div class="course-rec">Most Recommended</div>
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
        if (exam) url += '&exam=' + exam ;
        window.location.href = url + '#form';
      });
    });

    placeholder.parentNode.replaceChild(toInject, placeholder);
  });
})();


// ===== COMMON =====
function stop(e) {
  e.preventDefault();
  e.stopPropagation();
}

// ===== NID =====
function goToNIDBDes(e) {
  stop(e);
  if (location.pathname.includes("nid.html")) {
    activateSection("bdes");
  } else {
    window.location.href = "nid.html#bdes";
  }
}

function goToNIDMDes(e) {
  stop(e);
  if (location.pathname.includes("nid.html")) {
    activateSection("mdes");
  } else {
    window.location.href = "nid.html#mdes";
  }
}

// ===== NIFT =====
function goToNIFTBDes(e) {
  stop(e);
  if (location.pathname.includes("nift.html")) {
    activateSection("bdes");
  } else {
    window.location.href = "nift.html#bdes";
  }
}

function goToNIFTMDes(e) {
  stop(e);
  if (location.pathname.includes("nift.html")) {
    activateSection("mdes");
  } else {
    window.location.href = "nift.html#mdes";
  }
}

// ===== UCEED =====
function goToUCEED(e) {
  stop(e);
  window.location.href = "uceed.html";
}

function goToUCEEDBDes(e) {
  stop(e);
  window.location.href = "uceed.html";
}

// ===== CEED =====
function goToCEED(e) {
  stop(e);
  window.location.href = "ceed.html";
}

function goToCEEDMDes(e) {
  stop(e);
  window.location.href = "ceed.html";
}

// ===== NATA =====
function goToNATABArch(e) {
  stop(e);
  window.location.href = "nata.html";
}

function goToCOA(e) {
  stop(e);
  window.location.href = "nata.html";
}

// ===== JEE =====
function goToJEEBArch(e) {
  stop(e);
  window.location.href = "jee.html";
}

function goToJEEBPlanning(e) {
  stop(e);
  window.location.href = "jee.html";
}

function goToJEE(e) {
  stop(e);
  window.location.href = "jee.html";
}

// ===== SECTION SWITCH (NID + NIFT) =====
function activateSection(type) {
  document.querySelectorAll('.nid-page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nid-sw-btn').forEach(b => b.classList.remove('active'));

  const page = document.getElementById('nid-page-' + type);
  if (page) page.classList.add('active');

  const buttons = document.querySelectorAll('.nid-sw-btn');
  if (type === "bdes" && buttons[0]) buttons[0].classList.add('active');
  if (type === "mdes" && buttons[1]) buttons[1].classList.add('active');

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== HASH SUPPORT =====
window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash.replace('#', '');
  if (hash === "bdes" || hash === "mdes") {
    activateSection(hash);
  }
});