
const router=require("express").Router();
const Model=require("../models/Location");

router.get("/",async(req,res)=>res.json(await Model.find()));
router.post("/",async(req,res)=>res.json(await new Model(req.body).save()));
router.delete("/:id",async(req,res)=>{await Model.findByIdAndDelete(req.params.id);res.json({})});

module.exports=router;
