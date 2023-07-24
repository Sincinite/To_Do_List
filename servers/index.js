const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/mod.js");
const path =require("path");
const app=express();
const pub_path=path.join(__dirname,"../","public");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(pub_path));
app.set("view engine","ejs");
var items=[];
app.get("/",function(req,res){
    var day=date.getDate();
    res.render("list",{stuff:day, newItem:items});
});
app.post("/",function(req,res){
    var newitem=req.body.item;
    items.push(newitem);
    res.redirect("/");
});
app.listen(3000,function(){
    console.log("The server has started");
})