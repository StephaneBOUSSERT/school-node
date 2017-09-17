let http = require('http');
let fs = require('fs');

http.createServer((request, response) => {
    console.log('il y a eu une requête');

    fs.readFile('indeax.html', (err, data) => {
        if (err) {
            response.writeHead(404);
            response.end("Le fichier index.html n'existe pas");
                
        } else {
            response.writeHead(200, { 
                'Content-type': 'text/html; charset=utf-8'
            });
            response.end(data);
        }
    })




}).listen(8080);