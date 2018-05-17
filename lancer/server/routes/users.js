const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/register', function(req, res){
    const User = require('./../models/user');

    let hash = bcrypt.hashSync(req.body.password, 10);
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        skills: req.body.skills
    });
        user
            .save()
            .then(result=>{
                    console.log(result);
                    res.status(201).json({
                        message: 'User successfully created'
                    });
            })
            .catch(err=>{
                console.log(err);
                    res.status(500).json({
                        error: err
                    });
            })
});

router.post('/login', function(req, res){

})

module.exports = router;