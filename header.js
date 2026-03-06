const header = `
<header>
<nav>
      <a href="#" class="nav-logo"
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
        <li class="p-15"><a href="#">NID DAT</a></li>
        <li class="p-15"><a href="#">UCEED</a></li>
        <li class="p-15"><a href="#">CEED</a></li>
        <li class="p-15"><a href="#">NIFT</a></li>
        <li class="p-15"><a href="#">NATA</a></li>
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
            <a class="fsoc" href="#">IG</a><a class="fsoc" href="#">FB</a
            ><a class="fsoc" href="#">WA</a>
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

document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;