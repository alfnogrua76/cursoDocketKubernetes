const express = requiere('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hola Mundo');
    });

app.listen(PORT, () => {
    console.log('Aplicacion escuchando en http://localhost:$(port)');
});