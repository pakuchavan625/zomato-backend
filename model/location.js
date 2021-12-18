const mongoose = require('mongoose');

const schema = mongoose.Schema;

const locationschema = new schema ({
    name :{
        type :String,
        required: true
    },
    location_id :{
        type :Number,
        required: true
    }
})

module.exports = mongoose.model('location',locationschema,'locations')