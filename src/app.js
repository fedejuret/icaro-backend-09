const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./routes/product'));

app.listen(3000, () => console.log('Servidor en el puerto 3000')); 