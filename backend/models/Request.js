
const mongoose=require("mongoose");
module.exports=mongoose.model("Request", new mongoose.Schema({name:String,location:String}));
