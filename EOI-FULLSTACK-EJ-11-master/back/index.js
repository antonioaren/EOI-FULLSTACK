const express = require('express');
const app = express();

const mongoose = require('mongoose');

//No estoy seguro
mongoose.connect('mongodb://localhost/twitter');

const userRouter = require('./users');

app.use(express.json());
app.use('/users', userRouter);

app.listen(5000, (err)=>{
    console.log('servidor escuchando en el puerto 5000 ');
});

