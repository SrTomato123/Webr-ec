let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
showSlides();

// Mostrar las diapositivas
function showSlides() {
  slides.forEach((slide) => (slide.style.display = "none")); // Ocultar todas las diapositivas
  slideIndex++; // Incrementar el índice de la diapositiva
  if (slideIndex > slides.length) slideIndex = 1; // Si se pasa del número total de diapositivas, reiniciar el índice
  slides[slideIndex - 1].style.display = "block"; // Mostrar la diapositiva actual
  setTimeout(showSlides, 5000); // Cambiar de diapositiva cada 5 segundos
}

// Cambiar la diapositiva manualmente
function changeSlide(n) {
  slideIndex += n; // Incrementar o decrementar el índice en función de la dirección
  if (slideIndex < 0) slideIndex = slides.length - 1; // Si el índice es menor que 0, mostrar la última diapositiva
  if (slideIndex >= slides.length) slideIndex = 0; // Si el índice es mayor que el total de diapositivas, mostrar la primera
  slides.forEach((slide) => (slide.style.display = "none")); // Ocultar todas las diapositivas
  slides[slideIndex].style.display = "block"; // Mostrar la diapositiva actual
}
