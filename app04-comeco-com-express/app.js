// Recebemos o framework express
const express = require("express")

// Instanciamos o express dentro da constante app
// Fizemos uma constante para evitar ser sobreescrevido durante a execução
const app = express()

    // A / significa a página principal
    app.get("/", function(req, res){
        res.send("Seja bem vindo ao meu treino!")
    })

    // Aqui criamos o caminho (rota) sobre. Acessado por 127.0.0.1:50001/sobre
    app.get("/sobre", function(req, res){
        res.send("Aqui é a página sobre!")
    })

    // Aqui criamos outra rota. Acessado por 127.0.0.1:50001/blog
    app.get("/blog", function(req, res){
        res.send("Aqui é a página blog!")
    })

// A forma de abrir um servidor HTTP com o Express é diferente e mais simples
// Executamos o método passando a porta que o servidor irá escutar
// Este comando tem que ser o último do código
app.listen(50001, function(){
    console.log('O servidor está rodando. Esta é uma função call back.')
})
