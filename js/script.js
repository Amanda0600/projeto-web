const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const opened = nav.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', opened);
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.querySelector('#contactForm');
const formMessage = document.querySelector('#formMessage');

if (form && formMessage) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.querySelector('#nome');
    const email = document.querySelector('#email');
    const mensagem = document.querySelector('#mensagem');

    if (!nome.value.trim() || !email.value.trim() || !mensagem.value.trim()) {
      formMessage.textContent = 'Preencha todos os campos antes de enviar.';
      formMessage.style.color = '#b42318';
      return;
    }

    if (!email.validity.valid) {
      formMessage.textContent = 'Digite um e-mail válido.';
      formMessage.style.color = '#b42318';
      return;
    }

    formMessage.textContent = 'Mensagem enviada com sucesso! (Demonstração)';
    formMessage.style.color = '#11733a';
    form.reset();
  });
}
