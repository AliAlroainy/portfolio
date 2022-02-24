const express = require('express');
const db = require("./db/modules");
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

// --------------------------   database post 

app.post("/add_info", async (request, response) => {
    // const personal = new db.personal(request.body);
  
    // try {
    //   await personal.save();
    //   response.send(personal);
    // } catch (error) {
    //   response.status(500).send(error);
    // }

    db.personal.create(request.body);
});

app.post("/add_skills", async (request, response) => {

    db.skills.create(request.body);
});

app.post("/add_exper", async (request, response) => {

    db.exper.create(request.body);
});

app.post("/add_serv", async (request, response) => {

    db.serv.create(request.body);
});

app.post("/add_works", async (request, response) => {

    db.works.create(request.body);
});

app.post("/add_contact", async (request, response) => {

    db.contact.create(request.body);
});



app.listen(port);
console.log('server started');


