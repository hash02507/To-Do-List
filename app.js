const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const https= require("https");
var items=['Buy food','Cook food','Eat food'];
var workItems=[];
let ejs=require("ejs");
const date=require(__dirname+"/date.js");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/",function(req,res){
       let day = date();
       res.render("list",{titleOfList:day,newListItem:items});
});
app.post("/",function(req,res){
        var newItem= req.body.newItem;
        var list=req.body.list;
        if(list==="Work-List")
        {
                workItems.push(newItem);
                res.redirect("/work"); 
        }
        else
        {
                items.push(newItem);
                res.redirect("/"); 
        }

});

app.get("/work",function(req,res){
        res.render("list",{titleOfList:"Work-List",newListItem:workItems});
});
app.get("/about",function(req,res){
        res.render("about");
});





app.listen(3000,function(){
        console.log("Server 3000 is running successfully");
});

        // switch (currentDay) {
        //         case 0:
        //                 day="Sunday";
        //                 break;
        //         case 1:
        //                 day="Monday";
        //                 break;
        //         case 2:
        //                 day="Tuesday";
        //                 break;
        //         case 3:
        //                 day="Wednesday";
        //                 break;
        //         case 4:
        //                 day="Thursday";
        //                 break;
        //         case 5:
        //                 day="Friday";
        //                 break;  
        //         case 6:
        //                 day="Saturday";
        //                 break;                      

        
        //         default:
        //                 console.log("Error: given day of is"+currentDay);
        //                 break;
        // }