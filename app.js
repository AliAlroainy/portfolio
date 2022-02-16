const express = require('express');
const { render } = require('express/lib/response');
const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));



app.get("/", (req,res)=>{
    res.render("index");
});


app.listen("3000");
console.log('server started');


