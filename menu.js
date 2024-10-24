// script.js
fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    const heroImagesContainer = document.querySelector('.hero-images');
    const main = document.querySelector('main');

    // Agregar imágenes como botones
    data.document.body.main.heroImages.forEach(image => {
      const imgLink = document.createElement('a');
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt;
      imgLink.href = image.link;
      imgLink.appendChild(img);
      heroImagesContainer.appendChild(imgLink);
    });

    // Agregar los botones
    data.document.body.main.buttons.forEach(button => {
      const btn = document.createElement('button');
      btn.textContent = button.text;
      btn.onclick = window[button.action]; // Asocia la acción del botón
      main.appendChild(btn);
    });
  })
  .catch(error => console.error('Error al cargar el JSON:', error));

// Ejemplos de funciones para los botones
function joinUs() {
  alert('¡Bienvenido a la comunidad!');
}

function buyTickets() {
  alert('Redirigiendo a la compra de boletos...');
}

function subscribe() {
  alert('¡Te has suscrito exitosamente!');
}
