const Sequelize = require('sequelize')

// database , usuário , senha { host: local-do-servidor, dialect: tipo-de-database }
const sequelize = new Sequelize('teste', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Servidor conectado com sucesso!")
}).catch(function(erro){
    console.log("Erro de conexao: " + erro)
})
