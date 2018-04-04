const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    payment:{
        type: Number,
        required: true
    },
    deadline:{
        type: Date,
        required: true
    }
});

const Job = mongoose.model('job', JobSchema)
module.exports = Job;