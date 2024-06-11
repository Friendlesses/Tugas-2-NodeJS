const fs = require('fs');

const fileName = 'latihan-baca-file.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error('File error', err);
        return;
    }
    console.log(data);
});