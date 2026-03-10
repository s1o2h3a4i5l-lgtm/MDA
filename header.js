const header = `
<header>
<nav>
      <a href="index.html" class="nav-logo"
        ><img
          src="assets/images/logo.avif" class="nav-logo-img" alt=""/></a>
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
        <li class="p-15"><a href="#">NIFT</a></li>
        <li class="p-15"><a href="#">NATA</a></li>
        <li class="p-15"><a href="#">JEE PAPER 2</a></li>
        <li class="p-15"><a href="#">FC</a></li>
      </ul>
    </li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#" class="nav-cta">Free Counselling</a></li>
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
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAADKCAMAAADwxSlmAAAAG1BMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACalcoGAAAACHRSTlMA7zAY3LNFh0OttBoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAUxSURBVHja7Z1RYuQoDERNQMD9Tzw9PT/ZTdvBdkkCuTgAL68iwN2JxbYdjVybSCn9NVKR1mreDEcU+mui/mOUVm08otBzS31nFFGvjDD0Kv1wiGphhKH/NtV7uuwlsgw9tz40dGTi0Gvqg6MorLAw9NFfyb/Rsk9BzE/PpZ8aBeoSh/51cq7XbF84kzj0r9RPjwRziUO/MhfOJQ792lwolzj0XHr3c1mV/vPEuT4XwmVd+o8kW++OLgvT2/+e6Xt3dFmaXlHFfd9lbXr6vrild0eXxenfFnfu3dFleXoFlsQdl+XpAtptb7oEoFdkSVx2CUAX3B513SUEPUNL4ppLCPq/g7t0T5cQ9ATc7C+6BKHXu580b7sEoTfw2jrvEoQuyFPziksYegZvUmddwtArepM66RKG3lRUxl3C0AX5QHzBJQxd4MfmOZcw9LKl7ukShl623j1d4tD1VIZc4tAVVUZc4tA1VQZc4tC1zs1BlzD0pKvyq0sYelF6JB51CUMXbZVfXMLQlT5rD7uEoTeNL7JOuIShV4WvVs+4hKFn/W3q2CUIvVhsU4cuQejNZJs6cglCr5pfZY25hKAXs9W17xKCLlYn54FLCHo2OzkPXALQxXLD33UJQK/GRbHjsjxdzIvis8vy9Gx9dO65LE6X74dX8nRZm/7ftxHNltdHl6Xp1Wl5fXRZmN7Q7wPeclmXjn1h+7lJfmq18pU8XdakY5taPDdJbJuV5yaZoI1/wiQJbd/05CSxDcUenSS0xd2Tk9zqcFGmqtaUKUSSWYAdFx+d5FCUo112n50kslnxw5N8VeXuXpnOtVF9epJ/G7p/yFLON3Rnku8rBpqU949SisjFKwaY5LZ5tvhkkkySSTJJJskkmSSTZJJMkkkySSbJJJkkk2SSTJJJMkkmySSZJJNkkkySSTJJJskkmSSTZJJMkkkySSbJJJkkk2SSTJJJMkkmySSZJJNkkkySSTJJJskkmSSTZJJMkkkySSbJJKFJvtoRiJR3e4dUpB21I2CSu+MV4s9pym6DDCb5uRbb7k9WJDPJ0WK81ESISZ6M8R1lZpK/LuqxyYR9eo/LcfinKZVJ3i7Hvtf9j0mi2qMySVTDXiaJaiH9+CRhTc0fniSwzf6z+/QiL34wdJmNjr2K5MFJQi/HsXWZio69rsnYZSL63Xt5kuvn7onoorC8DF2moWeV5WXoMgsdeu2nh8sk9KpVFHYuc9BFrSjMXKagYy/rdnKZgS56R6edywx00N2OyfXv3RPQq+qGb+biT2/Kq8vIxZ9edE9OKxd3eu7KJ6eVize96m9TNi7e9GawTZm4eNObxTZl4eJNFyMVdRdvOvCq9eL639He9GSmouziTUfO5vsf+850SxVdF2e6qYqqizPdVkXTxZle9L/KsnHxpts9/ii7eNPNHsi1XbzpYvNpV9/Fm97sVXRcvOk2X6MZuHjTTb7YtXBxp4vtsanl4k9v5puUios/vdpvUhouE9CTw9qCu8xAb6YPxEouM9Cz+amp4DIFXXxKAukyB706bPZgl0no4lQSMJdZ6NVljwK6TENvXiWBcZmHnhP8fUBDl5no1WOvR7lMRW92n3PRLnPRwa8ZG7rMRoe++G7oMh8d2IrB0GVGOqw5iKHLnHRQuxpDl1npkAZK110C0QEtvW6MSPTbTebuuUSi1+FfTKobfESiZ/EpiID0kemkbkojFP1as2LYCotEz7K7XySdZRWXXtuH+aTVzWTEor+uGGhS3g/9pYgcXTGgURkr0f8A6Up49CaiSLoAAAAASUVORK5CYII="
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
            <a class="fsoc" href="https://instagram.com/mydesignacademia" target="_blank" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a class="fsoc" href="#" target="_blank" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a class="fsoc" href="https://wa.me/918806105855" target="_blank" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.85L.057 23.571a.75.75 0 0 0 .92.92l5.773-1.457A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 0 1-4.953-1.355l-.355-.211-3.668.926.944-3.595-.232-.369A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
            </a>
          </div>
        </div>
        <div class="fcol">
          <h4>Navigation</h4>
          <a href="#exams">Entrance Exams</a><a href="#courses">Courses</a
          ><a href="#why">Why Us</a><a href="#events">Upcoming Batches</a
          ><a href="#team">Faculty</a><a href="#faq">FAQ</a>
        </div>
        <div class="fcol">
          <h4>Exams</h4>
          <a href="#">NID DAT</a><a href="#">UCEED</a><a href="#">CEED</a
          ><a href="#">NIFT</a><a href="#">JEE Paper 2</a><a href="#">NATA</a>
        </div>
        <div class="fcol">
          <h4>Contact</h4>
          <p>Office B202, Ashoka Plaza<br />Viman Nagar, Pune 411014</p>
          <a href="tel:+918806105855">+91 8806105855</a
          ><a
            href="/cdn-cgi/l/email-protection#93feeaf7f6e0faf4fdf2f0f2f7f6fefaf2d3f4fef2faffbdf0fcfe"
            ><span
              class="__cf_email__"
              data-cfemail="721f0b1617011b151c13111316171f1b1332151f131b1e5c111d1f"
              >[email&#160;protected]</span
            ></a
          ><a href="#">@mydesignacademia</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 My Design Academia — All Rights Reserved</p>
        <p>Shaping the next generation of designers &amp; architects</p>
      </div>
    </footer>
`;

const waBtn = `
  <a class="wa-btn" href="https://wa.me/918806105855" target="_blank" aria-label="Chat on WhatsApp">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.523 5.85L.057 23.571a.75.75 0 0 0 .92.92l5.773-1.457A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 0 1-4.953-1.355l-.355-.211-3.668.926.944-3.595-.232-.369A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
    </svg>
  </a>
  <button id="scrollTopBtn" aria-label="Scroll to top">↑</button>`;

document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;
document.body.insertAdjacentHTML("beforeend", waBtn);
