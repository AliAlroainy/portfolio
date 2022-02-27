const express = require('express');
const db = require("./db/modules");
const app = express();
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const { auth } = require('express-openid-connect');
const methodOverride = require('method-override');
// const { requiresAuth } = require('express-openid-connect');


// //const { personal } = require('./db/modules');

// const config = {
//     // authRequired: false,
//     // auth0Logout: true,
//     secret: process.env.SECRET,
//     baseURL: process.env.BASE_URL,
//     clientID: process.env.CLIENT_ID,
//     issuerBaseURL: process.env.ISSUER_BASE_URL,
//   };

// app.use(auth(config));


app.set('view engine','ejs');
app.use(methodOverride("_method"));
app.use("/public", express.static(path.resolve(__dirname + '/public')));
app.use(express.urlencoded());
//app.use(express.bodyParser());
// middlewares
app.use(bodyParser.json());
//app.use(sucursalRoutes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('public'));

const port = process.env.PORT || 3000 ;

app.get("/", (req,res)=>{


    res.render("index");

});


app.get("/login", (req,res)=>{
    res.render("log");
});

// app.get("/logout", (req,res)=>{
//     res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');


// });
app.delete('/:id', async(req , res)=>{

    await db.skills.findOneAndDelete(req.params.sname);
    res.redirect("/dashboard");
});

app.get("/dashboard",  (req,res)=>{
  //  res.send(JSON.stringify(req.oidc.user));
  db.personal.find({},(personalErr,personalData)=>{
      if (personalErr) return;
      db.skills.find({},(skillsErr,skillsData)=>{
        if (skillsErr) return;
        res.render("dashbord",{personal:personalData[0] , skills:skillsData});
      })
      
  })
    
});


app.get('/cv',(req,res)=>{
    res.download('./public/Ali-Alroainy-Resume.pdf', 'Ali-Alroainy-Resume.pdf');
});



// --------------------------   database post 

app.post("/add_info", async (req, resp) => {

    db.personal.updateOne({},req.body,{returnDocument: 'after'},()=>{});
    resp.write(`
        <script>
            alert("Data Updated Successfully");
            window.location.href = '/dashboard';
        </script>
        
        `);

});

app.post("/add_skills", async (req, resp) => {

    db.skills.create(req.body);
    console.log('skill data added saccessfully');
    resp.write(`
        <script>
            window.location.href = '/dashboard';
        </script>
        
        `);

});

app.post("/add_exper", async (request, response) => {

    db.exper.create(request.body);
    console.log('experinces data added saccessfully');
    console.log(request.body);
});

app.post("/add_serv", async (request, response) => {

    db.serv.create(request.body);
    console.log('serveces data added saccessfully');
    console.log(request.body);
});

app.post("/add_works", async (request, response) => {

    db.works.create(request.body);
    console.log('work data added saccessfully');
    console.log(request.body);
});

app.post("/add_contact", async (request, response) => {

    db.contact.create(request.body);
    console.log('contact data added saccessfully');
    console.log(request.body);
});

// --------------------------   database get 

app.get("/vew_info", async (request, response) => {

    db.personal.find(docs);
    res.render("list", {
        data: docs
    });
});




// app.use(function(req, res) {
//     res.render("404");
//     });

app.listen(port);
console.log('server started');


