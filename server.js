const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {});
});

app.get('/positions', (req, res) => {
    res.render('positions.hbs', {});
});

app.get('/tactics', (req, res) => {
    res.render('tactics.hbs');
});

app.get('/formations', (req, res) => {
    res.render('formations.hbs');
});

app.get('/quotes', (req, res) => {
    res.render('quotes.hbs');
});

app.get('/gallery', (req, res) => {
    res.render('gallery.hbs');
});

app.get('/managers', (req, res) => {
    res.render('managers.hbs');
});

app.get('*', (req, res) => {
    res.render('home.hbs', {});
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});