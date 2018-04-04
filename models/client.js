const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
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

const Client = mongoose.model('client', ClientSchema);
module.exports = Client;