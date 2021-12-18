const mongoose = require('mongoose');

const schema = mongoose.Schema;

const MealTypeschema = new schema ({
    name :{
        type :String,
        required: true
    },
    id :{
        type :Number,
        required: true
    }
})

module.exports = mongoose.model('mealtype',MealTypeschema,'MealTypes')