const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/DynamicData")
.then(()=>{
    console.log("Database is Created and Connect successfully");
}).catch((err)=>{
    console.log(err);
})
