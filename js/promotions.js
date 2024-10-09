document.addEventListener("DOMContentLoaded", function() {
    // Obtener la fecha actual
    const currentDate = new Date();

    // Definir las promociones con sus fechas de vencimiento
    const promotions = [
        {
            title: "Descuento en Microsoft Office 365",
            description: "Obtén un 20% de descuento en la suscripción anual de Microsoft Office 365. Oferta válida hasta el 30 de octubre.",
            expiryDate: new Date('2024-10-30')
        },
        {
            title: "Ofertas en Programas de Gestión de Camiones",
            description: "Compra nuestro software de gestión de camiones con un 15% de descuento en compras múltiples. Oferta válida hasta el 15 de octubre.",
            expiryDate: new Date('2024-10-20')
        }
    ];

    // Seleccionar el contenedor donde se mostrarán las promociones
    const promotionsContainer = document.querySelector("#promotions .container");

    // Limpiar el contenido actual del contenedor de promociones
    promotionsContainer.innerHTML = '<h2>Promociones Actuales</h2>';

    // Filtrar y mostrar las promociones vigentes
    promotions.forEach(promo => {
        if (currentDate <= promo.expiryDate) {
            const promoDiv = document.createElement("div");
            promoDiv.classList.add("promotion");
            promoDiv.innerHTML = `
                <h3>${promo.title}</h3>
                <p>${promo.description}</p>
            `;
            promotionsContainer.appendChild(promoDiv);
        }
    });

    // Si no hay promociones vigentes, mostrar un mensaje
    if (promotionsContainer.children.length === 1) {
        promotionsContainer.innerHTML += '<p>No hay promociones vigentes en este momento.</p>';
    }
});