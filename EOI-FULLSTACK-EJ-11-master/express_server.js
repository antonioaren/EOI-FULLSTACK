const http = require('http');
const express = require('express');
const app = express();
const _ = require('lodash');
const fs = require('fs');

app.use(express.json());
var users = JSON.parse(fs.readFileSync('users.json'));
console.log(users);

/* --------------------------------------------------------------------------------------------------------- */

app.get('/users', function (req, res) {
    res.json(users);
})

app.post('/users', function (req, res) {
    const newUser = req.body;

    if (validacion(newUser) == false)
        return res.send("Error!")

    var userNuevo = {
        id: guid(),
        username: newUser.username,
        name: newUser.name,
        email: newUser.email,
        tweets: []
    }

    users.push(userNuevo);
    fs.writeFile('users.json',JSON.stringify(users));
    res.json(users);
})

//Validacion para nuevo usuario.
function validacion(newUser) {
    var isCorrect = true;

    if (newUser.username == undefined) {
        isCorrect = false;
    } else {
        if (users.find(user => user.username.toLowerCase() === newUser.username.toLowerCase())) {
            isCorrect = false;
        }
    }

    if (newUser.email == undefined) {
        isCorrect = false;
    } else {
        if ((newUser.email.indexOf('@') && newUser.email.indexOf('.') == -1)) {
            isCorrect = false;
        }
    }
    return isCorrect;
}

app.delete('/users/:username', function (req, res) {
    const userToDelete = req.params.username;

    for (var i = 0; i < users.length; i++) {
        if (users[i].username == userToDelete) {
            users.splice(i, 1);
        }
    }
    fs.writeFile('users.json',JSON.stringify(users));
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
    fs.writeFile('/users.json',JSON.stringify(users));
    res.json(users);
})

app.post('/users/:username/tweet', function (req, res) {
    const nickName = req.params.username;
    const newTweet = req.body;

    for (var i = 0; i < users.length; i++) {
        if (users[i].username == nickName) {

            objetoTweet = {
                id: guid(),
                text: newTweet.tweet,
                owner: nickName,
                createAt: Date.now()
            }

            users[i].tweets.push(objetoTweet);
        }
    }
    fs.writeFile('/users.json',JSON.stringify(users));
    res.json(users);
})

app.get('/users/tweet', function (req, res) {
    var value = req.query.order;
    var tweets = _.flatten(users.map(user => user.tweets));

    if (value != undefined) {
        var tweetsOrderBy = _.orderBy(tweets, 'createAt', value);
        return res.json(tweetsOrderBy);
    }
    res.json(tweets);
})

app.get('/users/tweet/:id', function (req, res) {
    const idTweet = req.params.id;

    var twitters = _.flatten(users.map(user => user.tweets));
    var idTwitter = twitters.find(twit => twit.id == idTweet);
    res.json(idTwitter);
})

app.delete('/users/tweet/:id', function (req, res) {
    const idTweet = req.params.id;

    users.forEach(user => {
        user.tweets = user.tweets.filter(filtro => filtro.id != idTweet);
    });
    fs.writeFile('/users.json',JSON.stringify(users));
    res.json(users);
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