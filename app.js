const express = require('express');
const { render } = require('express/lib/response');
const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use('views',express.static(__dirname +'views/css'));

app.get("/", (req,res)=>{
    res.render("index");
});


app.listen("3000");
console.log('server started');


