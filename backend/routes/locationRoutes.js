
const router=require("express").Router();
const Location=require("../models/Location");

router.get("/",async(req,res)=>res.json(await Location.find()));
router.post("/",async(req,res)=>res.json(await new Location(req.body).save()));

module.exports=router;
