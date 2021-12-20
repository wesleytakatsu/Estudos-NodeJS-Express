// Recebemos o framework express
const express = require("express")

// Instanciamos o express dentro da constante app
// Fizemos uma constante para evitar ser sobreescrevido durante a execução
const app = express()

    // A / significa a página principal
    app.get("/", function(req, res){
        res.send("Seja bem vindo ao meu treino!")
    })

    // Aqui criamos o caminho (rota) teste. Acessado por 127.0.0.1:50001/teste
    // no endereço, o : diz que recebe o parametro
    app.get("/teste/:nome", function(req, res){
        res.send("Aqui é a página que recebe o parametro!")
    })

    // Aqui recebe 2 parâmetros
    // O req é responsável por receber dados de uma requisição
    app.get("/teste/:nome/:idade", function(req, res){
        res.send(req.params)
    })

    // Aqui recebe 3 parâmetros
    // Vamos mostrar na tela o valor dos parâmetros
    // Podemos passar tags HTML junto com o texto
    app.get("/teste/:nome/:idade/:peso", function(req, res){
        res.send("<h1>Ola, " + req.params.nome + ".</h1>" +
        "<h2>Sua idade eh " + req.params.idade + ".</h2>" +
        "<h3>Sua peso eh " + req.params.peso + ".</h3>")
    })
    // OBS: O SEND SÓ PODE SER PASSADO 1 ÚNICA VEZ POR REQUISIÇÃO DE PÁGINA



// A forma de abrir um servidor HTTP com o Express é diferente e mais simples
// Executamos o método passando a porta que o servidor irá escutar
// Este comando tem que ser o último do código
app.listen(50001, function(){
    console.log('O servidor está rodando. Esta é uma função call back.')
})
