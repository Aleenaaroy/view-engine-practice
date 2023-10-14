const express=require('express');
const app=express();
const port=8080;
app.listen(port);

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('form');
});
console.log(`The page is up at the url http://localhost:${port} `);