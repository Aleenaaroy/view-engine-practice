const express=require('express');
const app=express();
const port=3001;

app.set('view engine','ejs');

app.listen(port);
const title =['The Power of Tiny Changes','Habit Stacking','The Two-Minute Rule','Tracking Progress','The Plateau of Latent Potential'];
const description=['making small, consistent changes','integrating new habits into existing routines','starting new habits with actions that take just two minutes to complete',
'measure progress to stay motivated and accountable','persistence is essential to unlocking their full potential over time'];
app.get('/',(req,res)=>{
    res.render('cards',{title:title,description:description});
});
console.log(`Rendering the page in url http://localhost:${port}  `);