const Sequelize = require('sequelize')

// CRIA OS DADOS DA CONEXÃO PARA FICAR PRONTOS PRA USO
// database , usuário , senha { host: local-do-servidor, dialect: tipo-de-database }
const sequelize = new Sequelize('teste', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})


// TESTA SE A CONEXÃO ESTÁ FUNCIONANDO
sequelize.authenticate().then(function(){
    console.log("Servidor conectado com sucesso!")
}).catch(function(erro){
    console.log("Erro de conexao: " + erro)
})


// CRIA O OBJETO 'Postagem'
// ESSE COMANDO NÃO SIGNIFICA CRIAÇÃO DE TABELA
// ESSE OBJETO É USADO PARA TODOS OS COMANDOS QUE PRECISAMOS USAR
// A RESPEITO DESSA TABELA E DOS CAMPOS MENSIONADOS
const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// CRIA O OBJETO 'Usuario'
// ESSE COMANDO NÃO SIGNIFICA CRIAÇÃO DE TABELA
// ESSE OBJETO É USADO PARA TODOS OS COMANDOS QUE PRECISAMOS USAR
// A RESPEITO DESSA TABELA E DOS CAMPOS MENSIONADOS
const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// EXECUTA E FORÇA A CRIAÇÃO DA TABELA DO COMANDO DO 'Postagem'
Postagem.sync({force: true})

// EXECUTA E FORÇA A CRIAÇÃO DA TABELA DO COMANDO DO 'Usuario'
Usuario.sync({force: true})

// ESSAS CRIAÇÕES DAS TABELAS RODAM UM "CREATE TABLE IF NOT EXISTS"
// SENDO ASSIM NÃO SOBREESCREVEM OS VALORES EXISTES CASO EXISTAM
