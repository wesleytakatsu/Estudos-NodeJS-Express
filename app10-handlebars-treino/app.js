
const express = require("express")
const exphbs = require('express-handlebars')
const app = express();
const Sequelize = require('sequelize')

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');


// CONEXÃO COM O MYSQL
const sequelize = new Sequelize('teste', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})


app.get('/', (req, res) => {
    res.render('formulario');
});

app.listen(50001);