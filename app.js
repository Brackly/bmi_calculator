const express =require('express');
const app=express();
const port= 3000;
const bodyparser= require('body-parser');
const urlEncodedParser=bodyparser.urlencoded({extended:false})
const fs = require('fs');

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '../public'));

app.get('/',(req,res)=>{
    res.render('home', {name:'John Doe'})
});

app.get('/contacts',(req,res)=>{
    res.render('contact')
})

app.post('/process_contacts',urlEncodedParser,(req,res)=>{
    res.end(`Thank you ${req.body.first_name} ${req.body.last_name}`)
});

app.get('/bmi',(req,res)=>{
    res.render('bmi')
})
app.post('/bmi',urlEncodedParser,(req,res)=>{
    const weight=req.body.weight;
    const height=req.body.height;
    const bmi= weight/(height*height)

    const reports = JSON.parse(fs.readFileSync('reports.json'));
    reports.push(bmi);
    fs.writeFileSync('reports.json', JSON.stringify(reports));

    
    res.render('results', {bmi:bmi})
});

app.listen(port);