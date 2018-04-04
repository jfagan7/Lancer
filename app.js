const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//Middleware
app.use(bodyParser.urlencoded ({
    extended: true
}));

app.get('/', (req, res) => {

})