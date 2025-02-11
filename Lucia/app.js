document.addEventListener("DOMContentLoaded", () => {
  const toggleBasicButton = document.getElementById("botonImg");
  const conceptosBasicosSection = document.getElementById("img");

  toggleBasicButton.addEventListener("click", () => {
    // Alterna la visibilidad de la sección
    conceptosBasicosSection.classList.toggle("hidden");

    // Cambia el texto del botón según el estado
    if (conceptosBasicosSection.classList.contains("hidden")) {
      toggleBasicButton.textContent = "Mostrar Imagen";
    } else {
      toggleBasicButton.textContent = "Ocultar Imagen";
    }
  });

  const moreInfoButton = document.getElementById("more-info");
  moreInfoButton.addEventListener("click", () => {
    const userResponse = confirm(
      "¿Quieres visitar la documentación oficial de Angular para más detalles sobre plantillas, directivas y enlaces de datos?"
    );
    if (userResponse) {
      window.open("https://docs.angular.lat/guide/architecture-components", "_blank");
    }
  });

});
