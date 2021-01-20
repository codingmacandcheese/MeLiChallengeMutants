//DNAS MODEL
//Aquí se define el modelo de datos de los ADNs de MeLi Challenge Mutants

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let dnaSchema = new Schema({
    dna: {
        type: String,
        required: [true, 'El ADN es obligatorio']
    },
    mutant: {
        type: Boolean,
        required: [true, 'El tipo de persona es obligatorio']
    }
});

module.exports = mongoose.model('Dna', dnaSchema);