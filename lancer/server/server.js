const express = require('express');
const router = require('./routes/routes.js')
const path = require('path');
const mongoose =  require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();


mongoose.connect('mongodb://localhost:27017/Lancer')
.then(()=>{
    console.log('Connected to the MongoDB server');
})
.catch(err=>{
    console.error('App starting error:', err.stack);
        process.exit(1);
})

//app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views'));

app.use(express.static(path.join(__dirname, '../views')));
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

//Routers for objects within the app
const userRoutes = require('./routes/users');

//Request handlers
app.use('/user', userRoutes);

module.exports=app;