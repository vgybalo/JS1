const http = require('http');

const server = http.createServer();

server.on('request', (req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end("<h1>Hellow world!</h1>")

});


server.listen(3000, '127.0.0.1');






