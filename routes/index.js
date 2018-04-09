const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.get('/', (req,res)=>{
    res.render('index');
});

router.post('/register', (req,res)=>{
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;

    let newUser= new User();
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.email = email;
    newUser.password = password;
    newUser.save((err, savedUser)=>{
        if(err){
            console.log(err);
            return res.status(500).send();
        }

        return res.status(200).send();
    });
});

module.exports = router;