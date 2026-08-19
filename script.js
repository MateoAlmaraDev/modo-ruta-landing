// modo ruta — script.js

document.addEventListener('DOMContentLoaded', () => {
  // Año dinámico en el footer
  const anioEl = document.getElementById('anio');
  if (anioEl) {
    anioEl.textContent = new Date().getFullYear();
  }

  // Reveal de los items de la ruta al hacer scroll (si el usuario agrega más contenido abajo)
  const items = document.querySelectorAll('.ruta-item');

  if ('IntersectionObserver' in window && items.length) {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.style.animationPlayState = 'running';
            observer.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
  }
});