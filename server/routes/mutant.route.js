//MUTANT ROUTE
//Aquí se define la ruta de mutant de MeLi Challenge Mutants

const express = require('express');
const router = express.Router();

const mutantController = require('../controllers/mutant.controller');

router.post('/mutant/', mutantController.isMutant);

module.exports = router;