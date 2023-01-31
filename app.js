const express= require('express');
const bodyParser= require('body-parser');
const pug= require('pug')

const app= express();

var contact = [];

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.render('index');
});

app.post('/',(req,res)=>{
    contact.push(req.body)
    res.redirect('/')
    console.log(contact);
});





app.listen(3005,(req,res)=>{
    console.log('port started on port 3005');
});