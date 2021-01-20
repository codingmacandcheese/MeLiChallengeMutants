//STATS CONTROLLER
//Aquí se define el controller de stats de MeLi Challenge Mutants

const statsService = require('../services/stats.services');

exports.getStats = async function (req, res) {
    try {
        const stats = await statsService.getStats();
        return res.status(200).json({
            ok: true,
            data: stats,
            status: 200
        });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            error :{ 
                message: error.message
            },
            status: 400,
        });
    }
}