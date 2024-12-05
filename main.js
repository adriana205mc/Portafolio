const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Sending...';
  console.log('Formulario enviado...');

  const serviceID = 'service_172z6gf';
  const templateID = 'template_xr5w18f';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      console.log('Formulario enviado correctamente');
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      console.error('Error:', err);
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

// 400px
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });
});


function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  console.log('Toggle menu called'); // Verifica si la función se llama
  navbar.classList.toggle('show');
}