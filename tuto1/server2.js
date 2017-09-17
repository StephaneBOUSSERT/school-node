let http = require('http');
let url = require('url');
//let fs = require('fs');

http.createServer((request, response) => {

    //console.log(url.parse(request.url, true).query.name);
    let query =  url.parse(request.url, true).query;
    response.writeHead(200, { 
        'Content-type': 'text/html; charset=utf-8'
    });
    if (query.name) {
        response.end('Bonjour ' + query.name + ' !');
    } else {
        response.end('Bonjour Anonyme !');
    }

}).listen(8080);