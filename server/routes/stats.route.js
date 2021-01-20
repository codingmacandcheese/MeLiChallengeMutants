//STATS ROUTE
//Aquí se define la ruta de stats de MeLi Challenge Mutants

const express = require('express');
const router = express.Router();

const statsController = require('../controllers/stats.controller');

router.get('/stats', statsController.getStats);

module.exports = router;