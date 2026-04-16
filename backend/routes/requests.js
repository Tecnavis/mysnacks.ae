
const router=require("express").Router();
const Model=require("../models/Request");

router.get("/",async(req,res)=>res.json(await Model.find()));
router.post("/",async(req,res)=>res.json(await new Model(req.body).save()));

module.exports=router;
