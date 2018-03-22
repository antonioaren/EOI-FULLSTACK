const express = require('express');
const app = express();
/* const errorhandler = require('errorhandler');
const notifier = require('node-notifier'); */
const mongoose = require('mongoose');

//No estoy seguro
mongoose.connect('mongodb://localhost/twitter');

/* var USERSschema = mongoose.Schema({
    id : String,
    username : String,
    name : String,
    email : String,
    tweets : Array //TO-DO no estoy seguro de si esto se hace así.
});
var USERS = mongoose.model('users', TODOschema); */

const userRouter = require('./users');

app.use(express.json());
app.use('/users', userRouter);

app.listen(5000, (err)=>{
    console.log('servidor escuchando en el puerto 5000 ');
});

