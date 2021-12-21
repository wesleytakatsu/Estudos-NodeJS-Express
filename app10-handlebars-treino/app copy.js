const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')


//Config
	//Template Engine
const hbs = handlebars.create({
    defaultLayout: "main"
})

app.engine("handlebars", () => hbs)

app.set("view engine", "handlebars")

/*
const path = require('path')
layoutsDir: path.join(__dirname, 'views/layouts')



// CONEXÃO COM O MYSQL
const sequelize = new Sequelize('teste', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

app.use((request, response, next) => {
    console.log(request.headers)
    next()
  })

app.get('/', (request, response) => {
response.render('formulario', {
    name: 'wesley'
})
})

app.get('/', (request, response) => {
    throw new Error('oops')
  })
  
app.use((err, request, response, next) => {
// log the error, for now just console.log
console.log(err)
response.status(500).send('Something broke!')
})

//PÁGINA DE CADASTRO
app.get("/", function(req, res) {
    // Aqui estamos enviando a página HTML
    // AQUI ELE IDENTIFICA QUE VC QUER RENDERIZAR O FORMULARIO QUE ESTÁ NA PASTA 'views'
    // NÃO PRECISA COLOCAR A EXTENSÃO
    res.render('formulario')
})
*/
app.get('/', (req, res) => {
    res.render("formulario")
})


/*
app.listen(50001, function(){
	console.log("Servidor online!")
})
*/
app.listen(50001, () => {
    console.log('Server online')
  })

