const header = `
<header>
<nav>
      <a href="index.html" class="nav-logo"
        ><img
          src="../assets/images/logo.avif" class="nav-logo-img" alt="My Design Academia"/></a>
           <button class="nav-hamburger" id="navHamburger" aria-label="Toggle menu">
    <span></span>
    <span></span>
    <span></span>
  </button>

      <ul class="nav-links" id="navLinks">
        <li><a href="index.html">Home</a></li>
        <li><a href="about_us.html">About Us</a></li>
           <li class="has-dropdown">
      <a href="#">Exams <svg class="dropdown-arrow" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <ul class="dropdown">
        <li class="p-15"><a href="nid.html">NID DAT</a></li>
        <li class="p-15"><a href="uceed.html">UCEED</a></li>
        <li class="p-15"><a href="ceed.html">CEED</a></li>
        <li class="p-15"><a href="nift.html">NIFT</a></li>
        <li class="p-15"><a href="nata.html">NATA</a></li>
        <li class="p-15"><a href="jee.html">JEE PAPER 2</a></li>
        <li class="p-15"><a href="fp.html">Foreign Portfolio</a></li>
      </ul>
    </li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contactus.html">Contact</a></li>
        <li><a href="contactus.html?course=counselling#form" class="nav-cta">Free Counselling</a></li>
      </ul>
    </nav>
</header>
`;

const footer = `
    <footer>
      <div class="footer-top">
        <div class="fcol">
          <div class="footer-logo">
            <img
              src="../assets/images/logo.avif"
              alt="My Design Academia"
              style="
                height: 28px;
                width: auto;
                display: block;
                margin-bottom: 0.5rem;
              "
            />
          </div>
          <p class="footer-desc">
            Empowering aspiring designers and architects through expert
            training, mentorship, and community support across India.
          </p>
<div class="footer-socials">
            <a class="fsoc" href="https://instagram.com/mydesignacademia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a class="fsoc" href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a class="fsoc" href="https://wa.me/918806105855" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.85L.057 23.571a.75.75 0 0 0 .92.92l5.773-1.457A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 0 1-4.953-1.355l-.355-.211-3.668.926.944-3.595-.232-.369A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
            </a>
          </div>
        </div>
        <div class="fcol">
          <h4>Exams</h4>
          <a href="nid.html">NID DAT</a><a href="uceed.html">UCEED</a><a href="ceed.html">CEED</a><a href="nift.html">NIFT</a><a href="jee.html">JEE Paper 2</a><a href="nata.html">NATA</a>
        </div>
        <div class="fcol">
          <h4>Contact</h4>
          <p>Office B202, Ashoka Plaza<br />Viman Nagar, Pune 411014</p>
          <a href="tel:+918806105855">+91 8806105855</a
          ><a href="mailto:mydesignacademia@gmail.com">
            <span class="__cf_email__">mydesignacademia@gmail.com</span>
            </a>
        </div>
         <div class="fcol">
         <h4>Find us</h4>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.137132630417!2d73.9143637!3d18.567855299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1b771ed7bdf%3A0x9772ec2ce346d5d8!2sMY%20DESIGN%20ACADEMIA!5e0!3m2!1sen!2sin!4v1773936322791!5m2!1sen!2sin"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </div>
      <div class="footer-bottom">
        <p>© <span id="year"></span> My Design Academia — All Rights Reserved</p>
        <p>Shaping the next generation of designers &amp; architects</p>
      </div>
    </footer>
`;

const waBtn = `
  <div class="floating-btns">
    <a class="wa-btn" href="https://wa.me/918806105855" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.85L.057 23.571a.75.75 0 0 0 .92.92l5.773-1.457A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 0 1-4.953-1.355l-.355-.211-3.668.926.944-3.595-.232-.369A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
      </svg>
    </a>
    <button id="scrollTopBtn" aria-label="Scroll to top">↑</button>
  </div>`;
  

document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;
document.body.insertAdjacentHTML("beforeend", waBtn);
document.getElementById("year").textContent = new Date().getFullYear();
