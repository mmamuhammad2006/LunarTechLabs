const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(expressLayouts);
app.set('layout', './layouts/app');
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '../views'));
app.get('/',(req,res)=>{
    res.render('pages/home');
});
app.get('/services',(req,res)=>{
    res.render('pages/services');
});
app.get('/contact-us',(req,res)=>{
    res.render('pages/contactUS');
});
app.get('/about-us',(req,res)=>{
    res.render('pages/aboutUs');
});


// implemeting chat whatsapp logic
app.get('/whatsapp',(req,res)=>{
    const number = '923006047058';
    const whatsappUrl = `https://wa.me/${number}`;
    res.redirect(whatsappUrl);
})
app.listen(5000);