// ADICIONAR UM SERVER HTTP
var http = require('http')

// CRIA O SERVER.
http.createServer(function(req, res){
// O RES É A RESPOSTA DO SERVIDOR
    res.end('Ola, mundo!')

// LISTEN É A PORTA DE ESCUTA DO SERVER
}).listen(50001)

console.log('O server está rodando')