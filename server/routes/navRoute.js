const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('pages/home',{title: 'Home'});
});
router.get('/services',(req,res)=>{
    res.render('pages/services',{title: 'Products'});
});
router.get('/contact-us',(req,res)=>{
    res.render('pages/contactUS',{title: 'Contact Us'});
});
router.get('/about-us',(req,res)=>{
    res.render('pages/aboutUs',{title: 'About Us'});
});

module.exports = router;