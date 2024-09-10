const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render('index', {
        titulo: 'empezando con hbs',
        tituloPestana: 'HBS',
        nombre: 'Marcos',
        apellido: 'Ojeda'
    });
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.listen(3000);

