const express = require('express');
// const { render } = require('express/lib/response');
const app = express();

const path = require('path');


app.set('view engine','ejs');

app.use("/public", express.static(path.resolve(__dirname + '/public')));

app.use(express.static('public'));

const port = process.env.PORT || 3000 ;

app.get("/", (req,res)=>{
    res.render("index");

});


app.get("/user", (req,res)=>{
    res.render("log");
});

app.get("/dashboard", (req,res)=>{
    res.render("dashbord");
});


app.get('/cv',(req,res)=>{
    res.download('./public/Ali-Alroainy-Resume.pdf', 'Ali-Alroainy-Resume.pdf');
});


app.use(function(req, res) {
    res.render("404");
    });




app.listen(port);
console.log('server started');


