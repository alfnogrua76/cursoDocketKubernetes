const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hola Mundo desde Node.js!');
});
app.listen(port, () => {
    console.log(`Aplicación escuchando en el puerto ${port}`);
})