// Smooth scroll effect for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form submission (example)
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Your message has been sent!");
});
