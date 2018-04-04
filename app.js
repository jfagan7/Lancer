const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

//Middleware

//
app.use(bodyParser.urlencoded ({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)))

app.set('view engine', 'pug');

app.get('/', (req, res) => {

})