const express = require('express');
const router = express.Router();
const mongoose =  require('mongoose');
const Job = require('./../models/job');

//GETs all of the jobs from the database and passes it in a variable to
router.get('/jobs', function(req, res){
    
});
//GETs a job by it's ID
router.get('/jobs/:id', function(req, res){

})
//Creates a new instance of a job that belongs to a user
router.post('/jobs', function(req, res){

})

module.exports = router;