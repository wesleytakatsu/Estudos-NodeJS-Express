const db = require('./db')

const Post = db.sequelize.define('postagens',{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.TEXT
    }
})


// CRIA A TABELA NO BANCO DE DADOS.
// SÓ PRECISA SER EXECUTADO 1 VEZ.
// Post.sync({force: true})

module.exports = Post