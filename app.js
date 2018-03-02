var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index");
});


app.get("/about", function(req, res) {
    res.render("about");
});

app.get("*", function(req, res)
{
     res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function()
{
    console.log("Server Started!!!!");
});