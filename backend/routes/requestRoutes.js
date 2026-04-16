
const router=require("express").Router();
const Request=require("../models/Request");

router.get("/",async(req,res)=>res.json(await Request.find()));
router.post("/",async(req,res)=>res.json(await new Request(req.body).save()));

module.exports=router;
