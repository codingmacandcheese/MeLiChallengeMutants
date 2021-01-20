//STATS SERVICE
//Aquí se define el servicio de stats de MeLi Challenge Mutants

const Dna = require('../models/dnas.model');

exports.getStats = async function () {
    try {
        const cantMutants = await Dna.countDocuments({ mutant: true});
        const cantHumans = await Dna.countDocuments({ mutant: false});

        let ratio = cantMutants/cantHumans;

        let stats = new Object();
        stats.count_mutant_dna = cantMutants;
        stats.count_human_dna = cantHumans;
        stats.ratio = ratio;

        return stats;
    } catch (error) {
        throw Error('Error al obtener las estadísticas');
    }
}