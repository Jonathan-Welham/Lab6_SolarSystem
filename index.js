var express = require("express")
var app = express();

app.use(express.static("css"));
app.use(express.static("public"));


app.listen(process.env.PORT, function(){
  console.log("Server is up and running");
});

app.set("view engine", "ejs");


app.get("/", function(req, res){
  res.render("home.ejs");
});

app.get("/home", function(req, res){
  res.render("home.ejs");
});

app.get("/jupiter", function(req, res){
  res.render("jupiter.ejs");
});

app.get("/saturn", function(req, res){
  res.render("saturn.ejs");
});

app.get("/uranus", function(req, res){
  res.render("uranus.ejs");
});

app.get("/venus", function(req, res){
  res.render("venus.ejs");
});

app.get("/mars", function(req, res){
  res.render("mars.ejs");
});

app.get("*", function(req, res){
  res.render("error.ejs");
});
