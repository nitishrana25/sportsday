//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

  var longJump={
  event:"longJump",
  positionA:1,
  playerA:"nitin",
  positionB:2,
  playerB:"ayush"
};

var relayRace={
  event:"relayRace",
  positionA:2,
  playerA:"mayank",
  positionB:1,
  playerB:"rishabh"
};
var post=[longJump,relayRace];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home",{post:post});
});

app.get("/admin",function(req,res){
  res.render("admin");
});

app.post("/admin",function(req,res){
  var options={
    event:req.body.events,
    positionA:req.body.positionA,
    playerA:req.body.playerA,
    positionB:req.body.positionB,
    playerB:req.body.playerB
  };
  post.push(options);
  res.redirect("/");
});


app.get("/result",function(req,res){
  res.render("result",{post:post})
})

app.get("/contact",function(req,res){
  res.render("contact");
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
