const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('block');
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('block');
    });
  });
}

const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const subject = form.elements['subject'].value.trim();
    const message = form.elements['message'].value.trim();

    if (!name || !email || !subject || !message) {
      feedback.textContent = 'Please fill in all fields before sending your message.';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      feedback.textContent = 'Please enter a valid email address.';
      return;
    }

    feedback.textContent = 'Thank you! Your message has been received.';
    form.reset();
  });
}
