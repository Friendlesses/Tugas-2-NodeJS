const OperasiMat = require('./operasi-mat');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const a = getRandomInt(1, 100); 
const b = getRandomInt(1, 100); 

console.log('Nilai a =', a)
console.log('Nilai b =', b)
console.log(`Tambah: ${a} + ${b} = ${OperasiMat.tambah(a, b)}`);
console.log(`Kurang: ${a} - ${b} = ${OperasiMat.kurang(a, b)}`);
console.log(`Kali: ${a} * ${b} = ${OperasiMat.kali(a, b)}`);
console.log(`Bagi: ${a} / ${b} = ${OperasiMat.bagi(a, b)}`);