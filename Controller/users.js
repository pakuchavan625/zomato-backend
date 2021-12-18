const User= require('../model/users');



exports.userSignup=(req,res)=>{
    const {email,password,firstname,lastname}=req.body;

    const userObj = new User({
        email:email ? email :undefined,
        password: password ? password:undefined,
        firstname: firstname ? firstname :undefined,
        lastname : lastname ? lastname : undefined
    })

    userObj.save()
    .then(response=>{
        res.status(200).json({ message :"user registered successfully ", user : response});
    }).catch(err=>{
        res.status(500).json({ error : err})
    })
};

exports.userLogin=(req,res)=>{
    const {email,password}=req.body;

    User.findOne({email,password})
    .then(response =>{
        if(response){
            res.status(200).json({ message :"user validated successfully ", 
            isAuthenticated : true,
            user : response});
        }
        else{
            res.status(200).json({ message :"user not validated successfully ", 
            isAuthenticated : false,
            user : response}); 
        }
      
    }).catch(err=>{
        res.status(500).json({ error : err})
    })
};


   
       

