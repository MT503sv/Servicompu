// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    // Escuchar el evento de envío del formulario
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

        // Capturar los valores ingresados por el usuario
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validar los campos
        if (name === "" || email === "" || message === "") {
            alert("Por favor, completa todos los campos del formulario.");
            return;
        }

        // Validación básica del correo electrónico
        if (!validateEmail(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        // Aquí podrías enviar los datos a un servidor si fuera necesario
        // Ejemplo usando fetch (simulación de envío)
        /*
        fetch('/ruta-del-servidor', {
            method: 'POST',
            body: JSON.stringify({ name, email, message }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
          .then(data => console.log('Success:', data))
          .catch((error) => console.error('Error:', error));
        */

        // Mostrar un mensaje de éxito
        alert(`¡Gracias, ${name}! Hemos recibido tu mensaje.`);
        
        // Limpiar el formulario después de enviarlo
        contactForm.reset();
    });

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});