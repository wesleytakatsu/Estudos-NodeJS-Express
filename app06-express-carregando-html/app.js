// Recebemos o framework express
const express = require("express")

// Instanciamos o express dentro da constante app
// Fizemos uma constante para evitar ser sobreescrevido durante a execução
const app = express()

    // A / significa a página principal
    app.get("/", function(req, res){
        //Aqui estamos enviando a página HTML
        res.sendFile(__dirname + "/html/index.html")
    })

    app.get("/sobre", function(req, res){
        //Aqui estamos enviando a página HTML
        res.sendFile(__dirname + "/html/sobre.html")
    })
    // OBS: O SEND SÓ PODE SER PASSADO 1 ÚNICA VEZ POR REQUISIÇÃO DE PÁGINA



// A forma de abrir um servidor HTTP com o Express é diferente e mais simples
// Executamos o método passando a porta que o servidor irá escutar
// Este comando tem que ser o último do código
app.listen(50001, function(){
    console.log('O servidor está rodando. Esta é uma função call back.')
})
