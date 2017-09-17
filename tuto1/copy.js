let fs = require('fs');
let fileSrc = "demo.flac";
let fileCpy = "copy.flac";

fs.stat(fileSrc, (err, data) => {
    if (err) {
        throw err;
    }
    let total = data.size; 
    console.log('Taille du fichier à copier : ' + total + 'Ko');
    if (total === 0) {
        throw 'Le fichier a copier a une taille de 0';
    }   
    let progress = 0;
    fs.createReadStream(fileSrc)
    .on('data', (chunk) => {
        progress += chunk.length;
        console.log("J'ai lu " + Math.round(100 * progress / total) + "%");
    })
    .on('end', () => {
        console.log("J'ai fini de lire le fichier ");
    })    
    .pipe(fs.createWriteStream(fileCpy))
            .on('finish', () => {
                console.log("Le fichier a bien été copié");
            });
});


// fs.readFile('demo.jpg', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     fs.writeFile('copy.jpg', data, (err) => {
//         if (err) {
//             throw err;
//         }
//         console.log('Le fichier a bien été copié');
//     })
// });