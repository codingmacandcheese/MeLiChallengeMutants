//MUTANT SERVICE TEST
//Aquí se define el test de mutant service de MeLi Challenge Mutants

const mutantService = require('../server/services/mutant.services');

test('isMutant function exists', () => {
    expect(mutantService.isMutant).toBeDefined();
});

