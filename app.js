const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
var registerr_name = "";
var registerr_email = "";
var registerr_num = "";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/register", function(req, res){
    res.render("register");
});



app.post("/register", function(req, res){
    const e_name = req.body.name;
    const e_mail = req.body.email;
    const e_num = req.body.number;
    res.render("final_reg", {
        SHname: e_name,
        SHemail: e_mail,
        SHnum: e_num
    });
});

app.get("/home", function(req, res){
    res.render("home");
});


app.listen(3000, function(){
    console.log("Server is online at port 3000");
});