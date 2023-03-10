const {User}=require("../model/user.model")
const jwt=require("jsonwebtoken")
require("dotenv").config();
exports.authenticated=async (req,res,next)=>{
    try{
        const {token}=req.body
        if(token==undefined){
            return res.status(401).send({"alert":"You shouldn't be here"})
        }
        const decoded=jwt.verify(token,process.env.Secret_jwt);
        req.user=await User.findOne({_id:decoded.id});
        next()
    }
    catch(err){
        res.status(400).send({"err":err.message})
    }
}