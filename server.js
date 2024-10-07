const express = require('express');
const bodyParser = require('body-parser');
const XLSX = require('xlsx');
const fs = require('fs');

const app = express();

// Middleware para procesar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para recibir el formulario
app.post('/submit', (req, res) => {
    const { cardName, cardNumber, expiryDate, cvv } = req.body;

    // Verificar si el archivo Excel ya existe
    const filePath = './credit_cards.xlsx';
    let workbook;
    let worksheet;

    if (fs.existsSync(filePath)) {
        console.log("El archivo Excel ya existe, cargando datos...");
        // Si el archivo existe, cárgalo
        workbook = XLSX.readFile(filePath);
        worksheet = workbook.Sheets['Tarjetas'];
    } else {
        console.log("El archivo Excel no existe, creando uno nuevo...");
        // Si el archivo no existe, créalo
        workbook = XLSX.utils.book_new();
        worksheet = XLSX.utils.aoa_to_sheet([['Nombre en la Tarjeta', 'Número de Tarjeta', 'Fecha de Expiración', 'CVV']]);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Tarjetas');
    }

    // Agregar los nuevos datos al archivo Excel
    const newRow = [cardName, cardNumber, expiryDate, cvv];
    XLSX.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });

    // Guardar el archivo Excel
    XLSX.writeFile(workbook, filePath);
    console.log("Datos guardados en Excel correctamente.");

    res.send('Información guardada en Excel correctamente');
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});
