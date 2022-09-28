const express=require("express");
const database=require("./db/database");
const collection=require("./models/model");
const path=require("path");
const hbs=require("hbs");
const { rmSync } = require("fs");
const app=express();
const port=process.env.PORT || 8000;


const static_path=path.join(__dirname,"../public");
const views_path=path.join(__dirname,"../templates/views");

const partials_path=path.join(__dirname,"../templates/partials")
app.use("/public",express.static("public"));
app.use("/img",express.static("img"));

app.set("view engine","hbs");
app.set("views",views_path);
hbs.registerPartials(partials_path);
// app.use(express.json()); this is for Postman
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("index");
});

app.post("/contact",async(req,res)=>{
    try{
        const contactData=new collection(req.body);
          
        const storeData=await contactData.save();
       
        res.status(201).render('index');

    }catch(err){
        res.status(500).send(err)
    }
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})