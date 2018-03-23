
const _ = require('lodash');
const fs = require('fs');
const users = require('./users.model');


//var users = JSON.parse(fs.readFileSync('./users/users.json'));

/* console.log(users); */

/* EXPORTS */
module.exports.getAllUsers = getAllUsers;
module.exports.addUserById = addUserById;
module.exports.deleteUserById = deleteUserById;
module.exports.modifyById = modifyById;
module.exports.addTweetById = addTweetById;
module.exports.getAllTweets = getAllTweets;
module.exports.deleteTweetsById = deleteTweetsById;

/* --------------------------------------------------------------------------------------------------------- */

function getAllUsers(req, res) {
    users.find()
        .then(response  => {
            res.json(response);
        })
}
function addUserById(req, res) {

    const newUser = req.body;

    var userNuevo = {
        username: newUser.username,
        name: newUser.name,
        email: newUser.email,
        tweets: []
    }

    const user = new users(userNuevo);
    
    user.save()
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.json(err);
        })
}
function deleteUserById(req, res) {
    const userToDelete = req.params.username;

    for (var i = 0; i < users.length; i++) {
        if (users[i].username == userToDelete) {
            users.splice(i, 1);
        }
    }
    fs.writeFile('./users/users.json', JSON.stringify(users));

    return res.json(users);
}
function modifyById(req, res) {
    users.findById(req.params.username)
        .then(doc => {
            doc.update(req.body)
        })





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
    fs.writeFile('./users/users.json', JSON.stringify(users));
    return res.json(users);
}
function addTweetById(req, res) {
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
    fs.writeFile('./users/users.json', JSON.stringify(users));
    return res.json(users);
}
function getAllTweets(req, res) {
    var value = req.query.order;
    var tweets = _.flatten(users.map(user => user.tweets));

    if (value != undefined) {
        var tweetsOrderBy = _.orderBy(tweets, 'createAt', value);
        return res.json(tweetsOrderBy);
    }
    return res.json(tweets);
}
function getTweetsById(req, res) {
    const idTweet = req.params.id;

    var twitters = _.flatten(users.map(user => user.tweets));
    var idTwitter = twitters.find(twit => twit.id == idTweet);
    return res.json(idTwitter);
}
function deleteTweetsById(req, res) {
    const idTweet = req.params.id;
    users.forEach(user => {
        user.tweets = user.tweets.filter(filtro => filtro.id != idTweet);
    });
    fs.writeFile('./users/users.json', JSON.stringify(users));
    return res.json(users);
}

/* Metodos privados */
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function _validacion(newUser) {
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

