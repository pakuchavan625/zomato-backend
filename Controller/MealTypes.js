const MealTypes = require('../model/MealTypes')

exports.getMealTypes = (req,res)=>{
    MealTypes.find().then(response=>{
        res.status(200).json({ message :"Mealtypes data is fetched successfully ", Mealtypes : response});
    }).catch(err=>{
        res.status(500).json({ error : error})
    })
   
}