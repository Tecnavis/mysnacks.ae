const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const Admin=require("./models/Admin");

mongoose.connect("mongodb://127.0.0.1:27017/mysnacks");

(async()=>{
const hash=await bcrypt.hash("admin123",10);
await Admin.create({email:"admin@mysnacks.com",password:hash});
console.log("Admin created");
process.exit();
})();
