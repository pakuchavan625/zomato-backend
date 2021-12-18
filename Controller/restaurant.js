const restaurants = require('../model/restaurant')

exports.getRestaurantsByLocId = (req,res)=>{
    const {locId}=req.params;
    restaurants.find({  location_id: locId }).then(response=>{
        res.status(200).json({ message :"restaurants data is fetched successfully ", restaurants : response});
    }).catch(err=>{
        res.status(500).json({ error : err})
    })
   
};
exports.filteredRestaurants=(req,res)=>{
    let {mealtype,location,cuisin,lcost,hcost,page,sort,itemsPerPage} = req.body;
  
    
     sort = sort ? sort : 1;
     page = page ? page : 1;

     itemsPerPage= itemsPerPage ? itemsPerPage : 2;
 
    
    let startIndex = page *itemsPerPage - itemsPerPage;
    let endIndex = page *itemsPerPage;

    const filterObj = {};
     
    mealtype && (filterObj["mealtype_id"] = mealtype);
    location && (filterObj["location_id"] = location);
    cuisin && (filterObj["cuisine_id"] = { $in : cuisin });
    lcost && hcost && (filterObj["min_price"] = { $gte :lcost ,$lte :hcost });

    

    restaurants.find(filterObj).sort({min_price :sort})
    .then(response=>{
        const filteredResponse = response.slice(startIndex,endIndex);
        const data = Math.ceil(response.length/itemsPerPage);
        res.status(200).json({ message :"restaurants data is fetched successfully ", restaurants : filteredResponse,
        data:data
    });
    }).catch(err=>{
        res.status(500).json({ error : err})
    })
    
};

exports.getRestuarantsDetailByresId =(req,res)=>{
    const {resId}=req.params;
    restaurants.findById(resId).then(response=>{
        res.status(200).json({ message :"restaurants data is fetched successfully ", restaurants : response});
    }).catch(err=>{
        res.status(500).json({ error : err})
    })
}