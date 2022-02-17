const express = require('express');
const { render } = require('express/lib/response');
const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));
const port = process.env.PORT || 3000 ;

app.get("/", (req,res)=>{
    res.render("index");
});


app.listen(port);
console.log('server started');


