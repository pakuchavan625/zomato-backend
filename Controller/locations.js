const Location = require('../model/location')

exports.getLocations = (req,res)=>{
    Location.find().then(response=>{
        res.status(200).json({ message :"location data is fetched successfully ", location : response});
    }).catch(err=>{
        res.status(500).json({ error : err})
    })
   
}