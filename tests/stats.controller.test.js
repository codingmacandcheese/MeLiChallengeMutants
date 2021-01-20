//STATS CONTROLLER TEST
//Aquí se define el test de stats controller de MeLi Challenge Mutants

const statsController = require('../server/controllers/stats.controller');

test('getStats function exists', () => {
    expect(statsController.getStats).toBeDefined();
});
