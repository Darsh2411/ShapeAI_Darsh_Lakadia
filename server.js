const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  // console.log(req.body);
  // console.log(req.body.num1);
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1+n2;
  res.send("The answer is "+result);
  // res.send("Thanks for posting the Form");
});


app.listen(3000,function(){
  console.log("Server has been started on port 3000");
});