
const router=require("express").Router();
const Admin=require("../models/Admin");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

router.post("/login", async(req,res)=>{
 const user=await Admin.findOne({email:req.body.email});
 if(!user) return res.json({error:"No user"});
 const ok=await bcrypt.compare(req.body.password,user.password);
 if(!ok) return res.json({error:"Wrong password"});
 const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
 res.json({token});
});

module.exports=router;
