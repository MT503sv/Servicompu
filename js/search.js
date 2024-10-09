// Capturar el formulario y los elementos relevantes
document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("searchForm");
    const searchQueryInput = document.getElementById("searchQuery");
    const searchResultsDiv = document.getElementById("searchResults");

    // Escuchar el evento de envío del formulario
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener el valor ingresado por el usuario
        const query = searchQueryInput.value.trim();

        // Limpiar el área de resultados antes de mostrar los nuevos
        searchResultsDiv.innerHTML = "";

        if (query === "") {
            searchResultsDiv.innerHTML = "<p>Por favor, ingresa un término de búsqueda.</p>";
            return;
        }

        // Aquí puedes implementar la lógica de búsqueda. Como ejemplo simple:
        const documentos = [
            { titulo: "Guía de instalación de software", descripcion: "Documento detallado para la instalación." },
            { titulo: "Manual de usuario", descripcion: "Instrucciones para usar el software." },
            { titulo: "Documentación técnica", descripcion: "Detalles técnicos del software." }
        ];

        // Filtrar los documentos según la búsqueda
        const resultados = documentos.filter(doc => 
            doc.titulo.toLowerCase().includes(query.toLowerCase()) || 
            doc.descripcion.toLowerCase().includes(query.toLowerCase())
        );

        // Mostrar los resultados
        if (resultados.length > 0) {
            resultados.forEach(doc => {
                const resultadoItem = document.createElement("div");
                resultadoItem.classList.add("resultado-item");
                resultadoItem.innerHTML = `<h3>${doc.titulo}</h3><p>${doc.descripcion}</p>`;
                searchResultsDiv.appendChild(resultadoItem);
            });
        } else {
            searchResultsDiv.innerHTML = "<p>No se encontraron documentos para la búsqueda realizada.</p>";
        }
    });
});
