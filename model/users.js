const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userschema = new schema ({
    email :{
        type :String,
        required: true
    },
    password :{
        type :Number,
        required: true
    },
    firstname :{
        type :String,
        
    },
    lastname :{
        type :String,
        
    }
})

module.exports = mongoose.model('usersignup',userschema,'users')