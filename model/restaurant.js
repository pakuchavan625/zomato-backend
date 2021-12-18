const mongoose = require('mongoose');

const schema = mongoose.Schema;

const restaurantschema = new schema ({
    name :{
        type :String,
        required: true
    },
    location_id :{
        type :Number,
        required: true
    },
    mealtype_id :{
        type :Number,
        required: true
    },
   cuisine_id :{
        type :Number,
        required: true
    }
   
})

module.exports = mongoose.model('restaurant',restaurantschema,'restaurants')