const menuitems = require('../model/menuitems')


exports.getMenuItemsByresId = (req,res)=>{
    const {resId}=req.params;
    menuitems.find({restaurantId :resId}).then(response=>{
        res.status(200).json({ message :"menu items data is fetched successfully ", menuitemslist : response});
    }).catch(err=>{
        res.status(500).json({ error : err})
    })
}