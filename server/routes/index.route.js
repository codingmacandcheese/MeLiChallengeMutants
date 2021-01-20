//ROUTE INDEX
//Aquí se definen todas las rutas de MeLi Challenge Mutants

const express = require('express');

const mutantRoute = require('./mutant.route');
const statsRoute = require('./stats.route');

const app = express();

app.use(mutantRoute);
app.use(statsRoute);

module.exports = app;