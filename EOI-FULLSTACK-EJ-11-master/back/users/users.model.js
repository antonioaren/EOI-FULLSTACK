const mongoose = require('mongoose');


var USERSschema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    tweets: [{
        id: String,
        text: String,
        owner: String,
        createAt: String
    }]
});

var USERS = mongoose.model('users', USERSschema);

module.exports = USERS;