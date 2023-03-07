const express =require('express');
const app=express();
const port= 3000;
const bodyparser= require('body-parser');
const urlEncodedParser=bodyparser.urlencoded({extended:false})

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home', {name:'John Doe'})
});

app.get('/contacts',(req,res)=>{
    res.render('çontact')
})

app.post('/process_contacts',urlEncodedParser,(req,res)=>{
    res.end(`Thank you ${req.body.first_name} ${req.body.last_name}`)
});


app.post('/bmi',urlEncodedParser,(req,res)=>{
    
    
});

app.listen(port);