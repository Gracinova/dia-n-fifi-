
  window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.onload = function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarDark');

    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }

      // Collapse navbar on link click for mobile
      link.addEventListener('click', function() {
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click(); // Toggle the navbar
        }
        // Remove the "active" class from the toggler
        navbarToggler.classList.remove('collapsed');
      });
    });
  };



// Optimized Snowfall Animation

// document.addEventListener("DOMContentLoaded", snowFall.init);

let launchDate = new Date("Oct 12, 2024 12:00:00").getTime();
let timer = setInterval(tick, 1000);

function tick() {
    let now = new Date().getTime();
    let t = launchDate - now;

    if (t > 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);

        days = String(days).padStart(2, '0');
        hours = String(hours).padStart(2, '0');
        mins = String(mins).padStart(2, '0');
        secs = String(secs).padStart(2, '0');

        let time = `${days} : ${hours} : ${mins} : ${secs}`;
        document.querySelector('.countdown').innerText = time;
    } else {
        clearInterval(timer);
        document.querySelector('.countdown').innerText = "Countdown finished!";
        
        // Enable the link and the button
        const actionButton = document.getElementById('actionButton');
        const linkButton = document.getElementById('linkButton');

        actionButton.classList.remove('disabled');
        actionButton.setAttribute('aria-disabled', 'false');
        actionButton.removeAttribute('onclick');

        // Allow the link to be clickable
        linkButton.classList.remove('disabled');
        linkButton.setAttribute('onclick', ''); // Remove the onclick to allow click
    }
}

if (launchDate < Date.now()) {
    document.querySelector('.countdown').innerText = "Launch date has already passed!";
}

