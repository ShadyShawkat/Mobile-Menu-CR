window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const hamMenu = document.querySelector('.menu-bars');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuOptions = document.querySelector('.mobile-menu-options');
  const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');

  const mobileMenuToggle = () => {
    mobileMenu.classList.toggle('d-flex');
    body.classList.toggle('overflow-hidden');
  }

  [hamMenu, mobileMenuCloseBtn, ...mobileMenuOptions.children].forEach(el => {
    el.addEventListener('click', mobileMenuToggle)
  })
});