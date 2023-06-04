const express = require('express');
require('express-async-errors'); // evitar erros async 
const routes = require('./app/routes');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();
// middleware para fazer o parse do body
app.use(express.json());
// cors
app.use(cors)
// rotas
app.use(routes);
// Error5432:Manipulador de erros
app.use(errorHandler);

app.listen(3001, () => console.log('🚀 Serve started'))