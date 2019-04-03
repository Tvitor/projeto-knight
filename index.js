const express = require('express');
const bodyParser = require('body-parser');
const knight = require('./routes/knightRoutes')
const app = express();
app.use('/knight', knight)


let port = 8000;
app.listen(port, () => {
    console.log('Server connected. Port: ' + port)
})

