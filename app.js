const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/database');
const router = require('./routes/index');
const users = require('./routes/users');
const app = express();


mongoose.connect('mongodb://localhost/Lancer');
let db = mongoose.connection;

db.once('open', ()=>{
    console.log('Connected to MongoDB');
});

db.on('error', (err)=>{
    console.log(err);
});

//Views
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Middleware
app.use(bodyParser.urlencoded ({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))

//Route files
//

//App routing
app.use('/', router);
//app.use('/users', users);


app.listen(3000, (req, res)=>{
    console.log('Server started on port 3000...');
});