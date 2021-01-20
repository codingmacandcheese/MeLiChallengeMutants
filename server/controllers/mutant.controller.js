//MUTANT CONTROLLER
//Aquí se define el controller de mutant de MeLi Challenge Mutants

const mutantService = require('../services/mutant.services');

const MIN_LENGTH = 4;
const DNA_LETTERS = /^[ATGC]+$/i;

exports.isMutant = async function (req, res) {
    if (!req.body.dna) {
        return res.status(400).json({ ok: false, error: { message: 'dna body param is mandatory' }, status: 400 });
    }
    if (!req.body.dna.length) {
        return res.status(400).json({ ok: false, error: { message: 'dna body param is mandatory' }, status: 400 });
    }
    if (req.body.dna.length < MIN_LENGTH) {
        return res.status(400).json({ ok: false, error: { message: 'Invalid Matrix, it must be at least ' + MIN_LENGTH + 'x' + MIN_LENGTH }, status: 400 });
    }

    for (let i = 0; i < req.body.dna.length; i++) {
        const dnaRow = req.body.dna[i];

        if (!(req.body.dna.length == dnaRow.length)) {
            return res.status(400).json({ ok: false, error: { message: 'Invalid Matrix, it must be a NxN' }, status: 400 });
        }
        if (!(dnaRow.match(DNA_LETTERS))) {
            return res.status(400).json({ ok: false, error: { message: 'Invalid Matrix, Strings should only contain letters A, T, G and C' }, status: 400 });
        }
    }

    try {
        const isMutant = await mutantService.isMutant(req.body.dna);
        if (isMutant == true) {
            return res.status(200).json({
                ok: true,
                message: 'OK',
                status: 200
            });
        } else {
            return res.status(403).json({
                ok: true,
                message: 'Forbidden',
                status: 403
            });
        }
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