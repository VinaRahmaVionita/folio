// Navbar auto close (mobile)
const navLinks = document.querySelectorAll('.nav-link');
const navCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navCollapse.classList.contains('show')) {
      navCollapse.classList.remove('show');
    }
  });
});
