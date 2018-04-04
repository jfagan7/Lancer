const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LancerSchema = new Schema({
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

const Lancer = mongoose.model('lancer', LancerSchema)
module.exports = Lancer;