// Scroll reveal animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("v");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.08 },
);

document.querySelectorAll(".r").forEach((el) => observer.observe(el));

// Trigger elements already in view on load
window.addEventListener("load", () => {
  document.querySelectorAll(".r").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) el.classList.add("v");
  });
});
// Dropdown
const dropdownParent = document.querySelector(".has-dropdown");
const dropdownToggle = document.querySelector(".has-dropdown > a");
const dropdown = document.querySelector(".dropdown");

if (dropdownToggle) {
  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownParent.classList.toggle("open");
    dropdown.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".has-dropdown")) {
      dropdownParent.classList.remove("open");
      dropdown.classList.remove("open");
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      dropdownParent.classList.remove("open");
      dropdown.classList.remove("open");
    },
    { passive: true },
  );
}

// Scroll to top
window.addEventListener("load", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener(
      "scroll",
      () => {
        scrollBtn.classList.toggle("visible", window.scrollY > 400);
      },
      { passive: true },
    );

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
const hamburger = document.getElementById("navHamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (!link.closest(".has-dropdown")) {
        hamburger.classList.remove("open");
        navLinks.classList.remove("open");
      }
    });
  });
}

async function handleSubmit() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // ← replace later

  const name = document.getElementById("f-name").value.trim();
  const phone = document.getElementById("f-phone").value.trim();
  const exam = document.getElementById("f-exam").value;
  const course = document.getElementById("f-course").value;
  const email = document.getElementById("f-email").value.trim();
  const grade = document.getElementById("f-grade").value;
  const message = document.getElementById("f-message").value.trim();

  if (!name) {
    alert("Please enter your full name.");
    return;
  }
  if (!phone || phone.length !== 10 || !/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }
  if (!exam) {
    alert("Please select an exam you're targeting.");
    return;
  }
  if (!course) {
    alert("Please select what you're interested in.");
    return;
  }

  const btn = document.querySelector(".btn-submit");
  const originalHTML = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = "Sending…";

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        exam,
        course,
        email,
        grade,
        message,
      }),
    });

    if (res.ok) {
      document.getElementById("formSuccess").style.display = "flex";
      document.querySelector(".submit-row").style.display = "none";
      ["f-name", "f-phone", "f-email", "f-message"].forEach(
        (id) => (document.getElementById(id).value = ""),
      );
      ["f-exam", "f-course", "f-grade"].forEach(
        (id) => (document.getElementById(id).selectedIndex = 0),
      );
    } else {
      const data = await res.json();
      alert(
        data?.errors?.[0]?.message || "Something went wrong. Please try again.",
      );
      btn.disabled = false;
      btn.innerHTML = originalHTML;
    }
  } catch (err) {
    alert("Network error. Please check your connection and try again.");
    btn.disabled = false;
    btn.innerHTML = originalHTML;
  }
}

function indexToggle(id, btn) {
  const el = document.getElementById(id);
  const isOpen = el.classList.toggle("open");
  btn.classList.toggle("open", isOpen);
  btn.childNodes[0].textContent = isOpen ? "Read Less " : "Read More ";
}

function nidSwitch(id, btn) {
  document
    .querySelectorAll(".nid-page")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".nid-sw-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById("nid-page-" + id).classList.add("active");
  btn.classList.add("active");
  window.scrollTo({ top: 0, behavior: "instant" });
}
function nidShowTab(id, btn) {
  const section = btn.closest(".uc-tabbed");
  section
    .querySelectorAll(".uc-tab-pane")
    .forEach((p) => p.classList.remove("active"));
  section
    .querySelectorAll(".uc-tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  btn.classList.add("active");
}

// ─── Courses Section ─────────────────────────────────────────────────────────

const PAGE_EXAM_MAP = {
  "ceed.html": "ceed",
  "uceed.html": "uceed",
  "nid.html": "nid-bdes",
  "nift.html": "nift-bdes",
  "jee.html": "jee2",
  "nata.html": "nata",
  "fp.html": "portfolio",
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
  var placeholders = document.querySelectorAll(".courses-section-placeholder");
  if (!placeholders.length) return;

  var page = window.location.pathname.split("/").pop() || "index.html";
  var pageExam = PAGE_EXAM_MAP[page] || "";

  placeholders.forEach(function (placeholder) {
    var exam = placeholder.getAttribute("data-exam") || pageExam;

    var alreadyInsideSection = placeholder.closest("#courses") !== null;

    var wrapper = document.createElement("div");
    wrapper.innerHTML = COURSE_SECTION_HTML;
    var toInject = alreadyInsideSection
      ? wrapper.querySelector(".courses-grid")
      : wrapper.firstElementChild;

    toInject.querySelectorAll(".course-btn").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var card = this.closest(".course-card");
        var duration = card
          ? card
              .querySelector(".course-duration")
              .textContent.trim()
              .toUpperCase()
          : "";
        var course = "tbd";
        if (duration.indexOf("2") !== -1) course = "2yr";
        else if (duration.indexOf("1") !== -1) course = "1yr";
        else if (duration.indexOf("TEST") !== -1) course = "test-series";
        var url = "contactus.html?course=" + course;
        if (exam) url += "&exam=" + exam;
        window.location.href = url + "#form";
      });
    });

    placeholder.parentNode.replaceChild(toInject, placeholder);
  });
})();

// ===== NAVIGATION HELPERS =====
function stop(e) {
  e.preventDefault();
  e.stopPropagation();
}

function navigateTo(e, url, section) {
  stop(e);
  if (section && location.pathname.includes(url)) {
    activateSection(section);
  } else {
    window.location.href = section ? url + "#" + section : url;
  }
}

function goToNIDBDes(e) {
  navigateTo(e, "nid.html", "bdes");
}
function goToNIDMDes(e) {
  navigateTo(e, "nid.html", "mdes");
}
function goToNIFTBDes(e) {
  navigateTo(e, "nift.html", "bdes");
}
function goToNIFTMDes(e) {
  navigateTo(e, "nift.html", "mdes");
}
function goToUCEED(e) {
  navigateTo(e, "uceed.html");
}
function goToUCEEDBDes(e) {
  navigateTo(e, "uceed.html");
}
function goToCEED(e) {
  navigateTo(e, "ceed.html");
}
function goToCEEDMDes(e) {
  navigateTo(e, "ceed.html");
}
function goToNATABArch(e) {
  navigateTo(e, "nata.html");
}
function goToCOA(e) {
  navigateTo(e, "nata.html");
}
function goToJEEBArch(e) {
  navigateTo(e, "jee.html");
}
function goToJEEBPlanning(e) {
  navigateTo(e, "jee.html");
}
function goToJEE(e) {
  navigateTo(e, "jee.html");
}

// ===== SECTION SWITCH (NID + NIFT) =====
function activateSection(type) {
  document
    .querySelectorAll(".nid-page")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".nid-sw-btn")
    .forEach((b) => b.classList.remove("active"));

  const page = document.getElementById("nid-page-" + type);
  if (page) page.classList.add("active");

  const buttons = document.querySelectorAll(".nid-sw-btn");
  if (type === "bdes" && buttons[0]) buttons[0].classList.add("active");
  if (type === "mdes" && buttons[1]) buttons[1].classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== HASH SUPPORT =====
window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash.replace("#", "");
  if (hash === "bdes" || hash === "mdes") {
    activateSection(hash);
  }
});

document.addEventListener('contextmenu', (e) => {
  if (e.target.tagName === 'IMG') e.preventDefault();
});
// Drag to scroll tab nav
document.querySelectorAll('.uc-tab-nav').forEach(nav => {
  let isDown = false;
  let startX;
  let scrollLeft;

  nav.addEventListener('mousedown', (e) => {
    isDown = true;
    nav.style.cursor = 'grabbing';
    startX = e.pageX - nav.offsetLeft;
    scrollLeft = nav.scrollLeft;
  });

  nav.addEventListener('mouseleave', () => {
    isDown = false;
    nav.style.cursor = 'grab';
  });

  nav.addEventListener('mouseup', () => {
    isDown = false;
    nav.style.cursor = 'grab';
  });

  nav.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - nav.offsetLeft;
    const walk = (x - startX) * 1.5;
    nav.scrollLeft = scrollLeft - walk;
  });
});
// Tab nav scroll indicators (mobile)
document.querySelectorAll('.uc-tab-nav').forEach(nav => {
  const wrapper = document.createElement('div');
  wrapper.className = 'tab-nav-wrap';
  nav.parentNode.insertBefore(wrapper, nav);
  wrapper.appendChild(nav);

  const leftArrow = document.createElement('div');
  const rightArrow = document.createElement('div');
  leftArrow.className = 'tab-nav-arrow tab-nav-arrow--left';
  rightArrow.className = 'tab-nav-arrow tab-nav-arrow--right';
  leftArrow.innerHTML = '‹';
  rightArrow.innerHTML = '›';
  wrapper.appendChild(leftArrow);
  wrapper.appendChild(rightArrow);

  function updateArrows() {
    const maxScroll = nav.scrollWidth - nav.clientWidth;
    leftArrow.classList.toggle('visible', nav.scrollLeft > 10);
    rightArrow.classList.toggle('visible', maxScroll - nav.scrollLeft > 10);
  }

  nav.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);
  setTimeout(updateArrows, 100);

  rightArrow.addEventListener('click', () => nav.scrollBy({ left: 120, behavior: 'smooth' }));
  leftArrow.addEventListener('click', () => nav.scrollBy({ left: -120, behavior: 'smooth' }));
});