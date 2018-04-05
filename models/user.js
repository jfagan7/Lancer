const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: Number,
        required: true
    },
    password:{
        type: Date,
        required: true
    }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;