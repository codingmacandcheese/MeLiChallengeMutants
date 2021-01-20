//MUTANT SERVICE
//Aquí se define el service de mutant de MeLi Challenge Mutants

const Dna = require('../models/dnas.model');

const MIN_SEQUENCE = 2;
const MIN_LENGTH = 4;
const MUTANT_SEQUENCE = /([ATCG])\1{3}/ig;

exports.isMutant = async function (dna) {
    try {
        let sequence = 0;
        let dnaString = dna.toString().toUpperCase();
        //Validamos por Fila
        for (let i = 0; i < dna.length; i++) {
            const dnaRow = dna[i];
            //console.log(dnaRow.match(MUTANT_SEQUENCE))
            if (dnaRow.match(MUTANT_SEQUENCE)) {
                sequence++;
            }
            //console.log(sequence);
            if (sequence >= MIN_SEQUENCE) {
                Dna.findOne({ dna: dnaString }, (err, dnaDB) => {
                    if (!dnaDB) {
                        let newDna = new Dna({
                            dna: dnaString,
                            mutant: true
                        })
                        newDna.save();
                    }
                })
                return true;
            }
        }

        //Validamos por Columna
        let i = 0;
        while (i < dna.length) {
            let dnaColumn = dna.map(dnaRow => dnaRow[i]).join("");
            //console.log(dnaColumn);
            if (dnaColumn.match(MUTANT_SEQUENCE)) {
                sequence++;
            }
            //console.log(sequence);
            if (sequence >= MIN_SEQUENCE) {
                Dna.findOne({ dna: dnaString }, (err, dnaDB) => {
                    if (!dnaDB) {
                        let newDna = new Dna({
                            dna: dnaString,
                            mutant: true
                        })
                        newDna.save();
                    }
                })
                return true;
            }
            i++;
        }

        //Validamos por Diagonal Derecha
        let dnaReverse = new Array();
        dna.forEach(dnaRow => {
            dnaReverse.push(dnaRow.split("").reverse().join(""))
        });

        for (let i = 0; i < dnaReverse.length * 2; i++) {
            let row = i;
            let column = 0;
            let dnaRightDiagonal = '';

            while (row >= 0 && column < dnaReverse.length) {
                if (row < dnaReverse.length) {
                    dnaRightDiagonal += dnaReverse[row][column];
                }
                row -= 1;
                column += 1;
            }

            if (dnaRightDiagonal.length >= MIN_LENGTH && dnaRightDiagonal.match(MUTANT_SEQUENCE)) {
                sequence++;
            }

            if (sequence >= MIN_SEQUENCE) {
                Dna.findOne({ dna: dnaString }, (err, dnaDB) => {
                    if (!dnaDB) {
                        let newDna = new Dna({
                            dna: dnaString,
                            mutant: true
                        })
                        newDna.save();
                    }
                })
                return true;
            }
        }

        //Validamos por Diagonal Izquierda
        for (let i = 0; i < dna.length * 2; i++) {
            let row = i;
            let column = 0;
            let dnaLeftDiagonal = '';

            while (row >= 0 && column < dna.length) {
                if (row < dna.length) {
                    dnaLeftDiagonal += dna[row][column];
                }
                row -= 1;
                column += 1;
            }
            //console.log(dnaLeftDiagonal)
            if (dnaLeftDiagonal.length >= MIN_LENGTH && dnaLeftDiagonal.match(MUTANT_SEQUENCE)) {
                sequence++;
            }
            //console.log(sequence);
            if (sequence >= MIN_SEQUENCE) {
                Dna.findOne({ dna: dnaString }, (err, dnaDB) => {
                    if (!dnaDB) {
                        let newDna = new Dna({
                            dna: dnaString,
                            mutant: true
                        })
                        newDna.save();
                    }
                })
                return true;
            }
        }

        let newDna = new Dna({
            dna: dnaString,
            mutant: false
        })
        newDna.save();
        return false;
    } catch (error) {
        throw Error('Error al verificar si es mutante');
    }
}