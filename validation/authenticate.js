const jwt=require("jsonwebtoken");
const User=require("../models/User");
const keys = require("../config/keys")

const Authenticate = async (req,res,next)=>{
    try{

        const token=req.cookies.jwt;
        const verifyUser=jwt.verify(token,keys.secretOrKey);
        console.log(verifyUser);

        //const rootUser=await User.findOne({_id:verifyToken._id},"tokens.token")
    }   catch(error){
        res.status(401).send(error);
    }
}

module.exports= Authenticate;