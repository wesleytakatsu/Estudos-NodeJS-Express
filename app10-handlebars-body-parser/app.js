
const express = require("express")
const exphbs = require('express-handlebars')
const app = express();
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')


// CONFIGURAÇÕES:
  // BODY-PARSER
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
  // HANDLEBARS
    app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');
    app.set('views', './views');
  // CONEXÃO COM O MYSQL
    const sequelize = new Sequelize('teste', 'root', '', {
        host: "localhost",
        dialect: "mysql"
    })

// ROTAS:
    app.get('/', (req, res) => {
        res.render('formulario');
    });

// ESSA ROTA EVNIA DADOS DO FORMULÁRIO.
// POR ISSO USAMOS O MÉTODO POST E NÃO O GET
// req.body.campo-do-form -> RECUPERA OS VALORES VIA POST
    app.post('/recebe-formulario', (req, res) => {
        //res.render('recebe-formulario');
        res.send('Título: ' + req.body.titulo + '<br>Conteúdo: ' + req.body.conteudo)
    });


// INICIA A ESCUTA
    app.listen(50001, () => {
        console.log('Servidor online')
    })