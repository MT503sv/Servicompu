// Función para mostrar el modal
function contactUs() {
    const modal = document.getElementById("contactModal");
    modal.style.display = "block";
}

// Cerrar el modal al hacer clic en la 'x'
const closeBtn = document.querySelector(".modal .close");
closeBtn.addEventListener("click", function() {
    const modal = document.getElementById("contactModal");
    modal.style.display = "none";
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener("click", function(event) {
    const modal = document.getElementById("contactModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
