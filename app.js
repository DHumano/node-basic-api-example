var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

var friends = ["dario", "tony", "tamara", "pierre", "lini"];

app.get("/", function (req, res) {
   res.render("home")
      ;
})

app.post("/addfriend", function (req, res) {
   var newF = req.body.newfriend; //gracias a npm install body-parser --save
   friends.push(newF);
   res.redirect("/friends"); //redirecciona a la ruta de abajo
});

app.get("/friends", function (req, res) {

   res.render("friends", { friends: friends });

});

app.listen(process.env.PORT || 3000, process.env.IP, function () {
   console.log("server started!");

});