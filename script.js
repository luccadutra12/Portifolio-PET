const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  const isOpen = navMenu.classList.contains('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

window.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
    navMenu.classList.remove('open');
  }
});

const links = document.querySelectorAll('nav a');
links.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const message = formData.get('message').trim();

  if (!name || !email || !message) {
    formFeedback.textContent = 'Por favor, preencha todos os campos antes de enviar.';
    formFeedback.style.color = '#fca5a5';
    return;
  }

  contactForm.reset();
  formFeedback.textContent = 'Mensagem enviada com sucesso! Em breve eu retorno.';
  formFeedback.style.color = '#86efac';
});
