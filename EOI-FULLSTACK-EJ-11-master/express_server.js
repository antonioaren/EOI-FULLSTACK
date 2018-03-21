const http = require('http');
const express = require('express');
const app = express();
const _ = require('lodash');
app.use(express.json());

var users = [{
    id: guid(),
    username: "antonioaren",
    name: "Pedro",
    email: "antonioaren@hotmail.com",
    tweets: [{
        id: guid(),
        text: "Mal día, mañana seré más productivo",
        owner: "antonioaren",
        createAt: Date.now()+1
    }]
},
{
    id: guid(),
    username: "davidGC",
    name: "David",
    email: "davidgc@gmail.com",
    tweets: [{
        id: guid(),
        text: "Me lo estoy pasando pipa",
        owner: "davidGC",
        createAt: Date.now()
    }]
}];

/* --------------------------------------------------------------------------------------------------------- */

app.get('/users', function (req, res) {
    res.json(users);
})

app.post('/users', function (req, res) {
    const newUser = req.body;
    users.push(newUser);
    res.json(newUser);
})

app.delete('/users/:username', function (req, res) {
    const userToDelete = req.params.username;

    for (var i = 0; i < users.length; i++) {
        if (users[i].username == userToDelete) {
            users.splice(i, 1);
        }
    }
    res.json(users);
})

app.patch('/users/:username', function (req, res) {
    const userToEdit = req.params.username;
    const atributo = req.body;

    for (var i = 0; i < users.length; i++) {
        if (users[i].username == userToEdit) {
            if (atributo.email != undefined) {
                users[i].email = atributo.email;
            }
            if (atributo.name != undefined) {
                users[i].name = atributo.name;
            }
        }
    }
    res.json(users);
})

app.post('/users/:username/tweet', function (req, res) {
    const nickName = req.params.username;
    const newTweet = req.body;

    for (var i = 0; i < users.length; i++) {
        if (users[i].username == nickName) {
            users[i].tweets.push({
                id: guid(),
                text: newTweet.tweet,
                owner: nickName,
                createAt: Date.now()
            });
        }
    }
    res.json(users);
    //res.send(); para resoponder texto al cliente.
})

app.get('/users/tweet', function (req, res) { 
    //Faltan query params

    var tweets = _.flatten(users.map(user => user.tweets));
    var tweetsOrderBy = _.orderBy(tweets,'createAt','asc');

    res.json(tweetsOrderBy);
})

app.get('/users/tweet/:id', function (req, res) {
    const idTweet = req.params.id;
    console.log(idTweet);

    users.forEach(user => {
        user.tweets.forEach(tweet => {
            console.log(tweet.id);
            if (tweet.id == idTweet) {
                res.json(tweet);
            }
        });
    });
})

app.delete('/users/tweet/:id', function (req, res) {
    const idTweet = req.params.id;

    users.forEach(user => {
        for (let i = 0; i < user.tweets.length; i++) {
            if (user.tweets[i].id == idTweet) {
                user.tweets.splice(i, 1);
            }
        }
    });
    res.json(users);
})

app.get('/users/tweet', (req, res) => {
    const wayToOrder = req.query.params;
    console.log("Aqui debe haber el valor que pasamos por query params: " + wayToOrder);
    var onlyTweets = users.map(user => user.tweets);
    console.log(onlyTweets);
})









/* --------------------------------------------------------------------------------------------------------- */

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


app.listen(5000, (err) => {
    console.log('servidor escuchando en el puerto 5000');
});