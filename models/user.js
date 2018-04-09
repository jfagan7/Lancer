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
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('user', UserSchema);
module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
};

module.exports.getUserByEmail = function(email, callback){
    User.findOne(email, callback);
};

module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password, salt, (err,hash)=>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        })
    })
};