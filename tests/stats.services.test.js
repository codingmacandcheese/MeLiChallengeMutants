//STATS SERVICE TEST
//Aquí se define el test de stats service de MeLi Challenge Mutants

const statsService = require('../server/services/stats.services');

test('getStats function exists', () => {
    expect(statsService.getStats).toBeDefined();
});
