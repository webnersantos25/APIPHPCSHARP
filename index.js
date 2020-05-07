//import do express
var express = require('express');
//criar um objeto do express
var app = express();
// ponto de acesso : endpoint
//responde é a resposta do servidor
app.get('/', function(req, response) {
    response.send('Webner');
});

//a porta que o node vai expor
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});