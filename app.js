var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public/'));

var contentArray =             [
    {"msg": "Beautiful is better than ugly", "pic": "01.jpg"},
    {"msg": "Explicit is better than implicit", "pic": "02.jpg"},
    {"msg": "Simple is better than complex", "pic": "03.jpg"},
    {"msg": "Complex is better than complicated", "pic": "04.jpg"},
    {"msg": "Flat is better than nested", "pic": "05.jpg"},
    {"msg": "Sparse is better than dense", "pic": "06.jpg"},
    {"msg": "Readability counts", "pic": "07.jpg"},
    {"msg": "Special cases aren't special enough to break the rules", "pic": "08.jpg"},
    {"msg": "Although practicality beats purity", "pic": "09.jpg"},
    {"msg": "Errors should never pass silently", "pic": "10.jpg"},
    {"msg": "Errors should never pass silently, unless explicitly silenced", "pic": "11.jpg"},
    {"msg": "In the face of ambiguity, refuse the temptation to guess", "pic": "12.jpg"},
    {"msg": "There should be one - and preferably only one - obvious way to do it", "pic": "13.jpg"},
    {"msg": "Now is better than never", "pic": "14.jpg"},
    {"msg": "Although never is often better than *right* now", "pic": "15.jpg"},
    {"msg": "If the implementation is hard to explain, it's a bad idea", "pic": "16.jpg"},
    {"msg": "If the implementation is easy to explain, it may be a good idea", "pic": "17.jpg"},
    {"msg": "Namespaces are one honking great idea - let's do more of those!", "pic": "18.jpg"}
];


function randomInt(range) {
	return Math.floor((Math.random() * range));
}

app.get("/", function(req, res){
    var textIndex = randomInt(contentArray.length);
    var phraseOfDay = contentArray[textIndex].msg;
    var imageOfDay = contentArray[textIndex].pic;
    
    res.render("index", {phrase: phraseOfDay, image: imageOfDay});
});


app.get("*", function(req, res){
    res.redirect("/");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Zen server has started...");
});