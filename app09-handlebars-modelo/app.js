const express = require("express")
const exphbs = require('express-handlebars')
const app = express();

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('formulario');
});

app.listen(50001);