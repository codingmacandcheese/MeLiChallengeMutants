//MUTANT CONTROLLER TEST
//Aquí se define el test de mutant controller de MeLi Challenge Mutants

const mutantController = require('../server/controllers/mutant.controller');

test('isMutant function exists', () => {
    expect(mutantController.isMutant).toBeDefined();
});
