let express = require('express');
let knightRouter = require('./routes/knightRouter');
let mongoose = require('mongoose');
let bodyParser = require('body-parser')

let url = 'mongodb+srv://root:root123@knightapi-n7egd.mongodb.net/test?retryWrites=true'

let db = mongoose.connect(url);

let app = express();
app.use(bodyParser.json())

app.listen(5000, function () {
    console.log('Server online on Port 5000');
});

app.use('/knight', knightRouter);