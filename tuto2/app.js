let http = require('http');
let url = require('url');
let EventEmitter = require('events');

let App = {
    start: function(port) {
        let myEvent = new EventEmitter();      
        let myServer = http.createServer((request, response) => {
            response.writeHead(200, { 
                'Content-type': 'text/html; charset=utf-8'
            });
            if (request.url === '/') {
                myEvent.emit('root', response);
            }        
            response.end();
        }).listen(port);
        return myEvent;
    }
}

module.exports = App;
