const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        introTitle: 'About',
        introText: 'There are various individual skills and team tactics needed to play effective football. Football is in theory a very simple game, as illustrated by Kevin Keegan\'s famous assertion that his tactics for winning a match were to "score more goals than the opposition". However, well-organised and well-prepared teams are often seen beating teams with supposedly more skillful players, even over time.'
    });
});

app.get('/positions', (req, res) => {
    res.render('positions.hbs', {
        introTitle: 'Positions',
        introText: 'Each of the 11 players on a team is assigned to a particular position on the field of play. A team is made up of one goalkeeper and ten outfield players who fill various defensive, midfield, and attacking positions depending on the formation deployed. These positions describe both the player\'s main role and their area of operation on the pitch.'
    });
});

app.get('/tactics', (req, res) => {
    res.render('tactics.hbs', {
        introTitle: 'Tactics',
        introText: 'The great thing about football is there are a million different ways to play it. It\'s the job of the manager to mould the way a team plays, and you only have to take one look at the elite end of the sport to see differences in the way team’s set-up and play football. There are many formations and tactics being employed be various teams, with hundreds of subtle distinctions branching off from them.'
    });
});

app.get('/formations', (req, res) => {
    res.render('formations.hbs', {
        introTitle: 'Formations',
        introText: 'The formation describes how the players in a team generally position themselves on the pitch. Skill and discipline on the part of the players is needed to implement a given formation effectively in professional football. Formations need to be chosen bearing in mind which players are available. Some formations were created to address deficits or strengths in different types of players.'
    });
});

app.get('/managers', (req, res) => {
    res.render('managers.hbs', {
        introTitle: 'Managers',
        introText: 'A successful manager is known for winning games and trophies, but an iconic manager is known for changing how the beautiful game is played.'
    });
});

app.get('/quotes', (req, res) => {
    res.render('quotes.hbs', {
        introTitle: 'Quotes',
        introText: 'A collection of quotes from various important figures in the world of football, from some of the most skilled players to ever play the game to football managers that influenced how the game is played today.'
    });
});

app.get('/gallery', (req, res) => {
    res.render('gallery.hbs', {
        introTitle: 'Gallery',
        introText: 'Ranging from iconic moments in football to random photographs, below is a gallery of football related images.'
    });
});

app.get('*', (req, res) => {
    res.render('home.hbs', {
        introTitle: 'About',
        introText: 'There are various individual skills and team tactics needed to play effective football. Football is in theory a very simple game, as illustrated by Kevin Keegan\'s famous assertion that his tactics for winning a match were to "score more goals than the opposition". However, well-organised and well-prepared teams are often seen beating teams with supposedly more skillful players, even over time.'
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});