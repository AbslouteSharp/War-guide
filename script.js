document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // مدیریت باز و بسته کردن زیرمنوها در موبایل
  const navItems = document.querySelectorAll('.nav-links li.has-submenu > a');

  navItems.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        const parentLi = link.parentElement;
        parentLi.classList.toggle('submenu-open');
      }
    });
  });
});
